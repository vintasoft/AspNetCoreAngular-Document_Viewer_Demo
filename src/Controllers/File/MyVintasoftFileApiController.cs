using Microsoft.AspNetCore.Mvc;

using Vintasoft.Data;
using Vintasoft.Imaging.AspNetCore.ApiControllers;
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
                    files.Add(allFiles[i]);
                }
                answer.files = files.ToArray();
            }
            answer.success = true;
            return answer;
        }

        /// <summary>
        /// Authenticates the file using password.
        /// </summary>
        /// <param name="requestParams">Information about image file and file password.</param>
        /// <returns>Response from the server, which contains information about the file authentication result.</returns>
        public override FileAuthenticationResponseParams AuthenticateFile(WebImageFileRequestParams requestParams)
        {
            // if file is "TXT" file
            if (requestParams.fileId.ToUpperInvariant().EndsWith(".TXT"))
            {
                // specify that authentication is not necessary

                FileAuthenticationResponseParams answer = new FileAuthenticationResponseParams();
                answer.isAuthenticationRequired = false;
                answer.isAuthenticationSucceeded = true;
                answer.success = true;

                return answer;
            }

            // call base method
            return base.AuthenticateFile(requestParams);
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
            IDataStorage sessionDataStorage = CreateSessionDataStorage(sessionId);
            IDataStorage serializedDocumentsDataStorage = CreateSerializedDocumentsDataStorage(sessionId);
            MyVintasoftFileWebService service = new MyVintasoftFileWebService(sessionDataStorage, serializedDocumentsDataStorage);
            return service;
        }

        #endregion

        #endregion

    }
}