using Vintasoft.Imaging;
using Vintasoft.Imaging.Codecs.Decoders;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// Authenticates document using password.
    /// </summary>
    internal class DocumentPasswordManager
    {

        /// <summary>
        /// Document password.
        /// </summary>
        string _password;



        /// <summary>
        /// Initializes a new instance of the <see cref="DocumentPasswordManager"/> class. 
        /// </summary>
        /// <param name="images">An image collection that stores document pages.</param>
        /// <param name="password">Document password.</param>
        internal DocumentPasswordManager(ImageCollection images, string password)
        {
            images.AuthenticationRequest += Images_AuthenticationRequest;
            _password = password;
        }



        /// <summary>
        /// Handler of images.AuthenticationRequest event.
        /// </summary>
        private void Images_AuthenticationRequest(object sender, DocumentAuthenticationRequestEventArgs e)
        {
            ImageCollection images = (ImageCollection)sender;
            images.AuthenticationRequest -= Images_AuthenticationRequest;

            DecoderBase decoder = e.Decoder;
            if (decoder.IsAuthenticationRequired)
            {
                if (_password == null)
                    throw new IncorrectAuthorizationException();

                DocumentAuthorizationResult result = decoder.Authenticate(new DocumentAuthenticationRequest(_password));
                if (!result.IsAuthorized)
                    throw new IncorrectAuthorizationException();
            }
        }

    }
}
