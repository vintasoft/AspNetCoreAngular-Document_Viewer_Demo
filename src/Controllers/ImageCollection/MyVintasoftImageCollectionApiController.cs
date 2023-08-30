using Microsoft.AspNetCore.Hosting;

using Vintasoft.Imaging.AspNetCore.ApiControllers;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// A Web API controller that handles HTTP requests from clients and
    /// allows to manage an image collection.
    /// </summary>
    public class MyVintasoftImageCollectionApiController : VintasoftImageCollectionApiController
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftImageCollectionApiController"/> class.
        /// </summary>
        /// <param name="hostingEnvironment">Information about the web hosting environment an application is running in.</param>
        public MyVintasoftImageCollectionApiController(IWebHostEnvironment hostingEnvironment)
                : base(hostingEnvironment)
        {
        }

    }
}