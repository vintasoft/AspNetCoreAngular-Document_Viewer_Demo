using Vintasoft.Data;
using Vintasoft.Imaging.Utils;
using Vintasoft.Imaging.Web.Services;
using Vintasoft.Shared.Web;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// A platform-independent web service that
    /// handles HTTP requests from clients and allows to manipulate files on a server.
    /// </summary>
    public class MyVintasoftFileWebService : VintasoftFileWebService
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftFileWebService"/> class.
        /// </summary>
        /// <param name="sessionDataStorage">Data storage that allows to store images in multipage image files.</param>
        /// <param name="serializedDocumentsDataStorage">A data storage that stores serialized documents.</param>
        public MyVintasoftFileWebService(IDataStorage sessionDataStorage, IDataStorage serializedDocumentsDataStorage)
            : base(sessionDataStorage, serializedDocumentsDataStorage)
        {
        }



        /// <summary>
        /// Validates that specified stream can be saved on a server.
        /// </summary>
        /// <param name="responseParams">Response from the server.</param>
        /// <param name="fileStream">Stream with file data.</param>
        /// <returns>
        /// <b>true</b> - file stream contains DICOM file and can be saved on server;
        /// <b>false</b> - file stream cannot be saved on server.
        /// </returns>
        protected override bool FileValidation(WebImageFileResponseParams responseParams, Stream fileStream)
        {
            if (fileStream is StreamWrapper sw)
            {
                if (sw.Name.ToUpperInvariant().EndsWith(".TXT"))
                {
                    return true;
                }
            }

            return base.FileValidation(responseParams, fileStream);
        }

    }
}