using Vintasoft.Shared.Web;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// Response from web service (controller/handler).
    /// Contains information about previously uploaded files.
    /// </summary>
    public class UploadedFilesListResponseParams : WebResponseParamsBase
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="UploadedFilesListResponseParams"/> class.
        /// </summary>
        public UploadedFilesListResponseParams():
            base()
        {
        }



        string[] _files;
        /// <summary>
        /// Gets or sets an array of previously uploaded files.
        /// </summary>
        public string[] files
        {
            get { return _files; }
            set { _files = value; }
        }

    }
}