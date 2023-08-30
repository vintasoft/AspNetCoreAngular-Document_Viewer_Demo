using Microsoft.AspNetCore.Hosting;
using System;

using Vintasoft.Imaging.AspNetCore.ApiControllers;
using Vintasoft.Imaging.Pdf;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// A Web API controller that handles HTTP requests from clients and
    /// allows to get information about image or render image thumbnail/tile.
    /// </summary>
    public class MyVintasoftImageApiController : VintasoftImageApiController
    {

        /// <summary>
        /// Initializes a new instance of the <see cref="MyVintasoftImageApiController"/> class.
        /// </summary>
        /// <param name="hostingEnvironment">Information about the web hosting environment an application is running in.</param>
        public MyVintasoftImageApiController(IWebHostEnvironment hostingEnvironment)
                : base(hostingEnvironment)
        {
        }

    }
}