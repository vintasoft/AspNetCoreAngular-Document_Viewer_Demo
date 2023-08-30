using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAngularAnnotationDemo.Controllers
{
    /// <summary>
    /// A Web API controller that allows to get information about current HTTP session.
    /// </summary>
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SessionController : ControllerBase
    {

        /// <summary>
        /// Returns an identifier of current HTTP session.
        /// </summary>
        /// <returns>An identifier of current HTTP session.</returns>
        [HttpGet]
        public IActionResult GetSessionId()
        {
            return new OkObjectResult(new { sessionId = HttpContext.Session.Id });
        }

    }
}
