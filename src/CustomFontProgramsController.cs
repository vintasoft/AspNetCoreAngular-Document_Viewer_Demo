using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization;

using Vintasoft.Imaging.Fonts;

namespace AspNetCoreAngularDocumentViewerDemo
{
    /// <summary>
    /// Provides access to the fonts, which are located in the specified directory.
    /// </summary>
    public class CustomFontProgramsController : FileFontProgramsControllerWithFallbackFont
    {

        #region Constants

        /// <summary>
        /// The filename of serialized font programs controller.
        /// </summary>
        static readonly string _fontProgramsControllerFilename;

        #endregion



        #region Constructors

        /// <summary>
        /// Initializes the <see cref="CustomFontProgramsController"/> class.
        /// </summary>
        static CustomFontProgramsController()
        {
            if (Vintasoft.Imaging.ImagingEnvironment.IsWindows)
            {
                _fontProgramsControllerFilename = "fonts.dat";
            }
            else
            {
                _fontProgramsControllerFilename = "/var/www/fonts_cache/fonts.dat";
            }

            RegisterSerializingType<CustomFontProgramsController>();
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="CustomFontProgramsController"/> class.
        /// </summary>
        public CustomFontProgramsController()
            : base(true, GetFontFolders())
        {
            if (FontFiles.Count == 0)
            {
                Console.WriteLine("CustomFontProgramsController: Fonts was not found!");
            }
            else
            {
                RefreshFontNames();
            }
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="CustomFontProgramsController"/> class.
        /// </summary>
        /// <param name="info">The SerializationInfo to populate with data.</param>
        /// <param name="context">The destination for this serialization.</param>
        public CustomFontProgramsController(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        #endregion



        #region Methods

        /// <summary>
        /// Sets <see cref="CustomFontProgramsController"/> as the default font programs controller.
        /// </summary>
        public static void SetDefaultFontProgramsController()
        {
            Default = CreateOrDeserialize();
        }

        /// <summary>
        /// Creates or deserializes the <see cref="CustomFontProgramsController"/>.
        /// </summary>
        /// <returns>A new instance of <see cref="CustomFontProgramsController"/>.</returns>
        public static CustomFontProgramsController CreateOrDeserialize()
        {
            CustomFontProgramsController result = null;

            // if file with serialized font program controller exists
            if (File.Exists(_fontProgramsControllerFilename))
            {
                try
                {
                    // deserialize font program controller
                    result = (CustomFontProgramsController)Deserialize(_fontProgramsControllerFilename);
                }
                catch
                {
                }
            }

            // if font program controller is not deserialized
            if (result == null)
            {
                // create new font program controller
                result = new CustomFontProgramsController();

                // if font program controller contains fonts
                if (result.FontFiles.Count > 0)
                {
                    // serialize font program controller
                    Serialize(_fontProgramsControllerFilename, result);
                }
            }

            return result;
        }

        /// <summary>
        /// Returns array that contains paths to the folders with fonts.
        /// </summary>
        private static string[] GetFontFolders()
        {
            List<string> result = new List<string>();

            if (Vintasoft.Imaging.ImagingEnvironment.IsWindows)
            {
                string systemFontFolder = Environment.GetFolderPath(Environment.SpecialFolder.Fonts);
                if (!string.IsNullOrEmpty(systemFontFolder))
                    // directory with Windows system fonts
                    result.Add(systemFontFolder);

                // directory "fonts" that contains user fonts
                result.Add("fonts");
            }
            else
            {
                // directory with Linux fonts
                result.Add("/usr/share/fonts/ms_fonts/");
            }

            return result.ToArray();
        }

        #endregion

    }
}