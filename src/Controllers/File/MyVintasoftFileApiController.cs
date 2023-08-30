using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using Vintasoft.Data;
using Vintasoft.Imaging;
using Vintasoft.Imaging.Annotation;
using Vintasoft.Imaging.Annotation.Web.Services;
using Vintasoft.Imaging.AspNetCore.ApiControllers;
using Vintasoft.Imaging.Codecs;
using Vintasoft.Imaging.Codecs.Decoders;
using Vintasoft.Imaging.Codecs.Encoders;
using Vintasoft.Imaging.Web.Services;
using Vintasoft.Shared.Web;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// A Web API controller that handles HTTP requests from clients and
    /// allows to manipulate files on server.
    /// </summary>
    public class MyVintasoftFileApiController : VintasoftFileApiController
    {

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftFileApiController"/> class.
        /// </summary>
        /// <param name="hostingEnvironment">Information about the web hosting environment an application is running in.</param>
        public MyVintasoftFileApiController(IWebHostEnvironment hostingEnvironment)
            : base(hostingEnvironment)
        {
        }

        #endregion



        #region Methods

        #region PUBLIC

        /// <summary>
        /// Returns a list of files uploaded during current HTTP session.
        /// </summary>
        /// <param name="session">Identifier of HTTP session.</param>
        /// <returns>Dictionary that provides a mapping from filename to URL of file.</returns>
        [HttpPost]
        public UploadedFilesListResponseParams GetUploadedFilesUrl([FromBody] string session)
        {
            UploadedFilesListResponseParams answer = new UploadedFilesListResponseParams();
            IDataStorage storage = CreateSessionDataStorage(session);
            if (storage != null)
            {
                List<string> files = new List<string>();
                string[] allFiles = storage.GetKeys();
                for (int i = 0; i < allFiles.Length; i++)
                {
                    if (IncludeFileInUploadedFileList(allFiles[i]))
                        files.Add(allFiles[i]);
                }
                answer.files = files.ToArray();
            }
            answer.success = true;
            return answer;
        }

        /// <summary>
        /// Downloads an image file from a server.
        /// </summary>
        /// <param name="requestParams">Information about file that must be downloaded.</param>
        /// <returns>Response from the server.</returns>
        [HttpPost]
        public override ActionResult DownloadImageFile(
            [FromBody] WebImageFileRequestParams requestParams)
        {
            try
            {
                // get file identifier
                string fileId = requestParams.fileId;
                // get file password
                string filePassword = requestParams.password;
                // get session identifier
                string sessionId = requestParams.sessionId;

                // get file name
                string fileName = Path.GetFileNameWithoutExtension(fileId);
                // get file extension
                string fileExtension = Path.GetExtension(fileId);

                // create service
                VintasoftFileWebService service = CreateWebService(sessionId);
                // get file stream
                Stream stream = service.DownloadImageFile(requestParams);
                stream.Position = 0;

                // result stream
                Stream resultStream = null;
                // create image collection
                using (ImageCollection images = new ImageCollection())
                {
                    // create a manager for authenticating document using password
                    DocumentPasswordManager documentPasswordManager = new DocumentPasswordManager(images, filePassword);

                    // add images from stream to the image collection
                    images.Add(stream, true);

                    // create annotation cache manager
                    AnnotationsCacheManager cacheManager = CreateAnnotationsCacheManager(sessionId);
                    // create annotation formatter
                    CustomAnnotationJsonFormatter formatter = new CustomAnnotationJsonFormatter();

                    // create annotation data controller
                    using (AnnotationDataController annotationDataController = new AnnotationDataController(images))
                    {
                        // annotation counter
                        int annotationCounter = 0;
                        // for each image
                        for (int i = 0; i < images.Count; i++)
                        {
                            // get identifer for annotation package
                            string annPackageId = cacheManager.GetAnnotationsId(fileId, i);

                            // get annotation collection as JSON string
                            string collectionAsJson = cacheManager.GetAnnotations(annPackageId);

                            // deserialize annotations from JSON
                            AnnotationData[] annotations = (AnnotationData[])formatter.Deserialize(collectionAsJson);

                            // change referenced image annotations to the embedded image annotations
                            ChangeReferenceImageAnnotationsToEmbeddedImageAnnotations(annotations);

                            // increase annotation counter
                            annotationCounter += annotations.Length;

                            // if annotation package contains annotations
                            if (annotations.Length > 0)
                            {
                                // get annotation data collection, which is associated with image with index "i"
                                AnnotationDataCollection annotationDataCollection = annotationDataController[i];
                                // remove "old" annotations from annotation collection
                                annotationDataCollection.Clear();
                                // add annotations to the annotation data collection
                                annotationDataCollection.AddRange(annotations);
                            }
                        }
                        // if images does NOT have annotations
                        if (annotationCounter == 0)
                        {
                            // create stream
                            resultStream = new MemoryStream();
                            stream.Position = 0;
                            // copy the source stream to the result stream
                            stream.CopyTo(resultStream);
                        }
                        // if images have annotations
                        else
                        {
                            // create decoder for file in stream
                            DecoderBase decoder = AvailableDecoders.CreateDecoder(stream);
                            // multipage encoder
                            MultipageEncoderBase encoder = null;
                            // if file stream contains PDF or DOCX file
                            if (decoder is PdfDecoder || decoder is DocxDecoder || decoder is XlsxDecoder)
                                // create PDF encoder
                                encoder = new PdfEncoder();
                            // otherwise
                            else
                                // create TIFF encoder
                                encoder = new TiffEncoder();

                            // get codec for encoder
                            Codec codec = AvailableCodecs.GetCodecByName(encoder.Name);
                            // get the first file extension from codec
                            fileExtension = codec.FileExtensions[0];

                            // create the result stream
                            resultStream = new MemoryStream();
                            // save images to the result stream using encoder
                            encoder.SaveImages(images, resultStream);
                        }
                    }
                }
                resultStream.Position = 0;
                return File(resultStream, "application/octet-stream", string.Format("{0}{1}", fileName, fileExtension));
            }
            catch (Exception ex)
            {
                string errorMessage = ex.Message;
                ObjectResult badResult = StatusCode(500, errorMessage);
                return badResult;
            }
        }

        #endregion


        #region PROTECTED

        /// <summary>
        /// Creates the <see cref="MyVintasoftFileWebService"/>
        /// that handles HTTP requests from clients and allows to manipulate files on a server.
        /// </summary>
        /// <returns>The <see cref="MyVintasoftFileWebService"/>
        /// that handles HTTP requests from clients and allows to manipulate files on a server.</returns>
        protected override VintasoftFileWebService CreateWebService(string sessionId)
        {
            return new MyVintasoftFileWebService(CreateSessionDataStorage(sessionId), CreateSerializedDocumentsDataStorage(sessionId));
        }

        /// <summary>
        /// Determines that file must be included into the uploaded file list.
        /// </summary>
        /// <param name="filePath">Path to a file.</param>
        /// <returns>
        /// <b>true</b> - file must be included to the uploaded file list;
        /// <b>true</b> - file must NOT be included to the uploaded file list.
        /// </returns>
        protected virtual bool IncludeFileInUploadedFileList(string filePath)
        {
            return true;
        }

        #endregion


        #region PRIVATE

        /// <summary>
        /// Creates a cache manager that manages cache of annotation collections.
        /// </summary>
        /// <returns>A cache manager that manages cache of annotation collections.</returns>
        private AnnotationsCacheManager CreateAnnotationsCacheManager(string sessionId)
        {
            if (sessionId == null)
                throw new ArgumentNullException("sessionId");

            // get path to a web application directory
            string projectDirectory = HostingEnvironment.WebRootPath;
            // get name of directory, where cached data must be stored
            string cacheDirectoryName = GetCacheDirectoryName();
            // get name of directory, where cached annotation packets must be stored
            string annotationPackageDirectoryName = GetAnnotationPackagesDirectoryName();
            // get path to a working directory of cache manager
            string cacheManagerWorkingDirectory = Path.Combine(Path.Combine(projectDirectory, cacheDirectoryName), Path.Combine(sessionId, annotationPackageDirectoryName));

            // if working directory is not exist
            if (!Directory.Exists(cacheManagerWorkingDirectory))
                // create working directory
                Directory.CreateDirectory(cacheManagerWorkingDirectory);

            // create cache manager for annotation collections
            return new AnnotationsCacheManager(cacheManagerWorkingDirectory);
        }

        /// <summary>
        /// Returns a name of directory, where cached data must be stored.
        /// </summary>
        /// <returns>A name of directory, where cached data must be stored.</returns>
        private string GetCacheDirectoryName()
        {
            return "VintasoftCache";
        }

        /// <summary>
        /// Returns a name of directory, where cached annotation packets must be stored.
        /// </summary>
        /// <returns>A name of directory, where cached annotation packets must be stored.</returns>
        private string GetAnnotationPackagesDirectoryName()
        {
            return "Annotations";
        }

        /// <summary>
        /// Changes referenced image annotations to the embedded image annotations.
        /// </summary>
        /// <param name="annotations">Annotations.</param>
        private void ChangeReferenceImageAnnotationsToEmbeddedImageAnnotations(AnnotationData[] annotations)
        {
            string applicationUrl = GetApplicationUrl();
            // for each annotation
            for (int i = 0; i < annotations.Length; i++)
            {
                AnnotationData annotation = annotations[i];

                ReferencedImageAnnotationData referencedImageAnnotation = annotation as ReferencedImageAnnotationData;
                // if annotation is referenced image annotation
                if (referencedImageAnnotation != null)
                {
                    // if referenced image annotation uses image file in this application
                    if (referencedImageAnnotation.Filename.StartsWith(applicationUrl))
                    {
                        // create web client
                        using (WebClient webClient = new WebClient())
                        {
                            // download image file data
                            byte[] imageFileData = webClient.DownloadData(referencedImageAnnotation.Filename);
                            // create memory stream with image file data
                            MemoryStream mem = new MemoryStream(imageFileData);

                            // create embedded image annotation
                            EmbeddedImageAnnotationData embeddeImageAnnotation = new EmbeddedImageAnnotationData();
                            referencedImageAnnotation.CopyTo(embeddeImageAnnotation);
                            embeddeImageAnnotation.Image = new VintasoftImage(mem);

                            // change referenced image annotation to the embedded image annotation
                            annotations[i] = embeddeImageAnnotation;
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Returns URL of this web application.
        /// </summary>
        /// <returns>URL of this web application.</returns>
        private string GetApplicationUrl()
        {
            Uri location = new Uri($"{Request.Scheme}://{Request.Host}");
            return location.AbsoluteUri;
        }

        #endregion

        #endregion

    }
}