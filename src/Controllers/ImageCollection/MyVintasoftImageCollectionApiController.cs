using Microsoft.AspNetCore.Mvc;
using System.Reflection;

using Vintasoft.Data;
using Vintasoft.Imaging.AspNetCore.ApiControllers;
using Vintasoft.Imaging.Office.OpenXml.Editor.Docx;
using Vintasoft.Imaging.Web.Services;
using Vintasoft.Shared.Web;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// A Web API controller that handles HTTP requests from clients and
    /// allows to manage an image collection.
    /// </summary>
    public class MyVintasoftImageCollectionApiController : VintasoftImageCollectionApiController
    {

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftImageCollectionApiController"/> class.
        /// </summary>
        /// <param name="hostingEnvironment">Information about the web hosting environment an application is running in.</param>
        public MyVintasoftImageCollectionApiController(IWebHostEnvironment hostingEnvironment)
                : base(hostingEnvironment)
        {
        }

        #endregion



        #region Methods

        #region PUBLIC

        /// <summary>
        /// Returns an information about images, which are stored in specified image files.
        /// </summary>
        /// <param name="requestParams">Information about files, which are stored on server.</param>
        /// <returns>Response, from server, which contains information
        /// about images, which are stored in files.</returns>
        [HttpPost]
        public override GetImageFilesInfoResponseParams GetImageFileInfo([FromBody] WebImageFilesRequestParams requestParams)
        {
            if (requestParams.fileIds != null)
            {
                for (int i = 0; i < requestParams.fileIds.Length; i++)
                {
                    // get current fileId
                    string fileId = requestParams.fileIds[i].id;
                    // if file is "TXT" file
                    if (fileId.ToUpperInvariant().EndsWith(".TXT"))
                    {
                        try
                        {
                            // convert TXT-file to a DOCX-file
                            requestParams.fileIds[i].id = ConvertTxtFileToDocxFile(requestParams.sessionId, fileId);
                        }
                        catch (Exception ex)
                        {
                            GetImageFilesInfoResponseParams answer = new GetImageFilesInfoResponseParams();
                            answer.success = false;
                            answer.errorMessage = ex.Message;
                            return answer;
                        }
                    }
                }
            }

            // call base method
            return base.GetImageFileInfo(requestParams);
        }

        #endregion


        #region PRIVATE

        /// <summary>
        /// Returns the resource as stream.
        /// </summary>
        /// <param name="filename">The filename.</param>
        /// <returns>
        /// The resource stream or null.
        /// </returns>
        private static Stream GetResourceAsStream(string filename)
        {
            // get assembly
            Assembly assembly = typeof(MyVintasoftImageCollectionApiController).Module.Assembly;

            // get resource names of assembly
            string[] resourceNames = assembly.GetManifestResourceNames();

            // get resource name of specified filename
            string resourceName = GetResourceName(resourceNames, filename);

            // if resource is not found
            if (string.IsNullOrEmpty(resourceName))
            {
                // get file name
                filename = Path.GetFileName(filename);
                // get filename extension
                string extension = Path.GetExtension(filename);
                // get extension of filename
                string filenameWithoutExtension = Path.GetFileNameWithoutExtension(filename);

                // if filename has extension
                if (Path.HasExtension(filenameWithoutExtension))
                {
                    // create new filename
                    filename = Path.GetExtension(filenameWithoutExtension).Substring(1);
                }
                else
                {
                    filename = filenameWithoutExtension;
                }

                // create new resource name
                resourceName = string.Format("{0}{1}", filename, extension);
            }

            // load resource stream
            Stream resourceStream = assembly.GetManifestResourceStream(resourceName);

            return resourceStream;
        }

        /// <summary>
        /// Returns the name of the resource.
        /// </summary>
        /// <param name="resourceNames">The resource names.</param>
        /// <param name="filename">The filename.</param>
        /// <returns>
        /// The resource name.
        /// </returns>
        private static string GetResourceName(string[] resourceNames, string filename)
        {
            foreach (string resourceName in resourceNames)
            {
                if (resourceName.EndsWith(filename, StringComparison.InvariantCultureIgnoreCase))
                    return resourceName;
            }

            return string.Empty;
        }

        /// <summary>
        /// Converts TXT-file to a DOCX-file.
        /// </summary>
        /// <param name="sessionId">Session identifier.</param>
        /// <param name="txtFilename">The name of TXT-file.</param>
        /// <returns>The name of converted DOCX-file.</returns>
        private string ConvertTxtFileToDocxFile(string sessionId, string txtFilename)
        {
            // get "EmptyDocument.docx" resource
            using (Stream documentStream = GetResourceAsStream("EmptyDocument.docx"))
            {
                // if resourse is not found
                if (documentStream == null)
                    throw new Exception("TXT to DOCX conversion error: Resource 'EmptyDocument.docx' is not found in demo application.");

                // create data storage
                IDataStorage dataStorage = CreateSessionDataStorage(sessionId);

                // create DOCX editor for "EmptyDocument.docx"
                using (DocxDocumentEditor editor = new DocxDocumentEditor(documentStream))
                {
                    FileStream txtFile = dataStorage.LockItem(txtFilename) as FileStream;
                    string fileText = "";
                    using (StreamReader reader = new StreamReader(txtFile))
                    {
                        // get text from TXT-file
                        fileText = reader.ReadToEnd();
                    }

                    // set text from TXT-file as a body of DOCX document
                    editor.Body.Text = fileText;

                    // create stream for converted "TXT" file
                    using (MemoryStream stream = new MemoryStream())
                    {
                        // save document
                        editor.Save(stream);

                        // get new file name
                        string docxFileName = Path.GetFileNameWithoutExtension(txtFilename) + "_Converted.docx";
                        // add file in session data storage
                        dataStorage.AddItem(docxFileName, stream);

                        return docxFileName;
                    }
                }
            }
        }

        #endregion

        #endregion

    }
}