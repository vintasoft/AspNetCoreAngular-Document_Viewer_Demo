// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging {

  // ===== ENUMS =====

  /**
   * Specifies available types of border colors.
   */
  class WebBorderColorTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies the direction of an image's rotation and the axis used to flip the image.
   */
  class WebRotateFlipTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes of image binarization.
   */
  class WebBinarizationModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of removing border colors.
   */
  class WebBorderRemovalColorTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies image sides which must be taken into account during image processing.
   */
  class WebImageSideEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available directions for the image processing.
   */
  class WebImageProcessingDirectionEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available color channels.
   */
  class WebColorChannelEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes of luminance calculation.
   */
  class WebLuminanceComputationModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available desaturate methods.
   */
  class WebDesaturateMethodEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies how an image is positioned within WebImageViewerJS.
   */
  class WebImageSizeModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available styles of an arrangement of thumbnails.
   */
  class WebThumbnailFlowStyleEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available scales of thumbnails.
   */
  class WebThumbnailScaleEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available formats of image palette.
   */
  class WebPaletteTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available methods of color quantization.
   */
  class WebColorQuantizationMethodEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available noise types.
   */
  class WebNoiseTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available blending modes.
   */
  class WebBlendingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available color space types.
   */
  class WebColorSpaceTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available histogram types.
   */
  class WebHistogramTypeEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of WebColorBaseJS type property.
   */
  class WebColorBaseJSTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of filters in frequency domain.
   */
  class WebFrequencyFilterTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available directions for the images layout.
   */
  class WebImageLayoutDirectionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available display modes of image viewer.
   */
  class WebImageViewerDisplayModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available multipage display modes of image viewer.
   */
  class WebImageViewerMultipageDisplayModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies how an element is anchored to the edges of its parent.
   */
  class WebImageAnchorTypeEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available image compare operators, which define how to compare two images.
   */
  class WebImageCompareOperatorEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available overlay binary operation types.
   */
  class WebOverlayBinaryOperationTypeEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available constants that define which mouse button was pressed.
   */
  class WebMouseButtonsEnumJS extends Vintasoft.Shared.WebFlagsEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available text selection modes.
   */
  class WebTextSelectionModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes of text search.
   */
  class WebTextSearchModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available compressions for BMP file.
   */
  class WebBmpCompressionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available filter methods for PNG file.
   */
  class WebPngFilterMethodEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available methods, which define how page must be added to the GIF file.
   */
  class WebGifCreatePageMethodEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available compression types for JPEG2000 image.
   */
  class WebJpeg2000CompressionTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available compression algorithms for TIFF image.
   */
  class WebTiffCompressionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available compression algorithms for images stored in PDF file.
   */
  class WebPdfImageCompressionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Defines available conformances for PDF document.
   */
  class WebPdfDocumentConformanceEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Defines available image encoders for embedded images in SVG file.
   */
  class WebSvgEmbeddedImageEncoderEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available compressions for TGA file.
   */
  class WebTgaCompressionEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available image origins for TGA file.
   */
  class WebTgaImageOriginEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available encoding for PBM/PGM/PPM file.
   */
  class WebPbmEncodingJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available format types of WEBP file.
   */
  class WebWebpFileFormatTypeJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available quality/speed trade-off for the encoding process.
   */
  class WebWebpEncodingMethodJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which indicates how the transparency should be handled on encoding.
   */
  class WebWebpTransparentColorModeJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== STATIC METHODS =====

  /**
   * Returns a value indicating whether VintaSoft Annotation .NET Plug-in is available.
   */
  function isAnnotationPluginAvailable(): boolean;

  /**
   * Returns a value indicating whether VintaSoft PDF .NET Plug-in is available.
   */
  function isPdfPluginAvailable(): boolean;

  /**
   * Returns a value indicating whether VintaSoft Document Cleanup .NET Plug-in is available.
   */
  function isDocCleanupPluginAvailable(): boolean;


  // ===== CLASSES =====

  /**
   * A print manager that can print images.
   */
  class WebPrintManagerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPrintManagerJS"] class.
     * @param images Array of [see="WebImageJS"] objects, which should be printed.
     */
    constructor(images: Vintasoft.Shared.WebImageJS[]);

    // METHODS

    /**
     * Prints images.
     */
    print(): void;

    /**
     * Aborts printing.
     */
    abort(): void;

  }

  /**
   * Helper for the VintasoftFileAPIController class.
   */
  class VintasoftFileAPI {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "VintasoftFileAPI"] class.
     */
    constructor();

    // METHODS

    /**
     * Sends an asynchronous request to a server for uploading an image file to a server.
     * @param file File from the HTML INPUT object of FILE type.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service An instance, of [see="WebServiceJS"] class, which will serve the request of this function.
     */
    static uploadImageFile(file: object, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request (using default web service) to a server for uploading an image file to a server.
     * @param file File from the HTML INPUT object of FILE type.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    static uploadImageFile(file: object, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for uploading the image files to a server.
     * @param files Files from the HTML INPUT object of FILE type.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)". The data parameter has the following properties:<br/> <ul> <li>files (object): Array with information about the uploaded image files.<br/> Information about uploaded image file is object with following properties: <ul> <li>fileId (string): Image file identifier.</li> <li>success (boolean): Indicates that the image file is uploaded successfully.</li> <li>blocked (boolean): Indicates that the image file is blocked by another request.</li> <li>errorMessage (string): String that describes an error occurred during image file uploading.</li> </ul> </li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service An instance, of [see="WebServiceJS"] class, which will serve the request of this function.
     */
    static uploadImageFiles(files: object, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server for uploading an image, which is represented by a Base64 string, to a server.
     * @param imageAsBase64 An image, which is represented by a Base64 string.
     * @param fileName A name of file in which uploaded image will be saved on server.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service An instance, of [see="WebServiceJS"] class, which will serve the request of this function.
     */
    static uploadBase64Image(imageAsBase64: string, fileName: string, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request (using default web service) to a server for uploading an image, which is represented by a Base64 string, to a server.
     * @param imageAsBase64 An image, which is represented by a Base64 string.
     * @param fileName A name of file in which uploaded image will be saved on server.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    static uploadBase64Image(imageAsBase64: string, fileName: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request (using default web service) to a server for uploading an image, which is represented by a Base64 string, to a server.
     * @param imageAsBase64 An image, which is represented by a Base64 string.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    static uploadBase64Image(imageAsBase64: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for uploading the images, which are represented by a Base64 strings, to a server.
     * @param imagesAsBase64 An array of images, which are represented by Base64 strings.
     * @param fileName A name of file in which uploaded images will be saved on server.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Array with information about images (image ID and page index for each image).</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service An instance, of [see="WebServiceJS"] class, which will serve the request of this function.
     */
    static uploadBase64Images(imagesAsBase64: string, fileName: string, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server for downloading a file from a server.
     * @param fileId A string, which represents a file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>filename (string): File name.</li> <li>blob (object): Blob object that contains file.</li> <li>xmlHttpRequest (object): XmlHttpRequest object.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, ProgressEvent object.</li> </ol>
     * @param service An instance, of [see="WebServiceJS"] class, which will serve the request of this function.
     */
    static downloadImageFile(fileId: string, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request (using default web service) to a server for downloading a file from a server.
     * @param fileId A string, which represents a file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>filename (string): File name.</li> <li>blob (object): Blob object that contains file.</li> <li>xmlHttpRequest (object): XmlHttpRequest object.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, ProgressEvent object.</li> </ol>
     */
    static downloadImageFile(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for downloading a file from a server.
     * @param fileId An instance of [see="WebImageSourceJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>filename (string): File name.</li> <li>blob (object): Blob object that contains file.</li> <li>xmlHttpRequest (object): XmlHttpRequest object.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, ProgressEvent object.</li> </ol>
     * @param service An instance, of [see="WebServiceJS"] class, which will serve the request of this function.
     */
    static downloadImageFile(fileId: string, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request (using default web service) to a server for downloading a file from a server.
     * @param fileId An instance of [see="WebImageSourceJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>filename (string): File name.</li> <li>blob (object): Blob object that contains file.</li> <li>xmlHttpRequest (object): XmlHttpRequest object.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, ProgressEvent object.</li> </ol>
     */
    static downloadImageFile(fileId: Vintasoft.Shared.WebImageSourceJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for copying specified file on server to the working directory of current user.
     * @param fileId An identifier of file that should be downloaded.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): A file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service An instance, of [see="WebServiceJS"] class, which will serve the request of this function.
     */
    static copyFile(fileId: string, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request (using default web service) to a server for copying specified file on server to the working directory of current user.
     * @param fileId An identifier of file that should be downloaded.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): A file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    static copyFile(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for checking that specified password is correct for specified file on server.
     * @param fileId A file identifier.
     * @param filePassword A file password.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>isAuthenticationRequired (boolean): a value indicating whether source image file requres authentication.</li> <li>isCorrect (boolean): a value indicating whether password is correct for source image file.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service An instance, of [see="WebServiceJS"] class, which will serve the request of this function.
     */
    static authenticateFile(fileId: string, filePassword: string, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request (using default web service) to a server for checking that specified password is correct for specified file on server.
     * @param fileId A file identifier.
     * @param filePassword A file password.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>isAuthenticationRequired (boolean): a value indicating whether source image file requres authentication.</li> <li>isCorrect (boolean): a value indicating whether password is correct for source image file.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    static authenticateFile(fileId: string, filePassword: string, successFunc: Function, errorFunc: Function): void;

  }

  /**
   * Defines an appearance of thumbnail.
   */
  class WebThumbnailAppearanceJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebThumbnailAppearanceJS"] class.
     * @param backgroundStyle the background style of thumbnail.
     * @param borderStyle CSS style of border around the thumbnail, that contain information about style and color of border.
     */
    constructor(backgroundStyle: string, borderStyle: string);

    // PROPERTIES

    /**
     * Gets the background style of thumbnail.
     */
    get_BackgroundStyle(): string;

    /**
     * Gets the CSS style of border around the thumbnail, that contain information about style and color of border.
     */
    get_BorderStyle(): string;

    // METHODS

    /**
     * Determines whether the specified thumbnail appearance is equal to the current thumbnail appearance.
     * @param appearance The thumbnail appearance to compare with the current thumbnail appearance.
     */
    equals(appearance: Vintasoft.Imaging.WebThumbnailAppearanceJS): boolean;

  }

  /**
   * Specifies the appearance of image.
   */
  class WebImageAppearanceJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageAppearanceJS"] class.
     * @param backColor Background color of the image.
     * @param borderColor Border color of the image.
     * @param borderWidth Border width of the image.
     */
    constructor(backColor: string, borderColor: string, borderWidth: number);

    // PROPERTIES

    /**
     * Gets the background color of the image.
     */
    get_BackColor(): string;

    /**
     * Sets the background color of the image.
     * @param value Background color of the image. Default value is "rgba(255,255,255,0)".
     */
    set_BackColor(value: string): void;

    /**
     * Gets the border color of the image.
     */
    get_BorderColor(): string;

    /**
     * Sets the border color of the image.
     * @param value Border color of the image. Default value is "rgba(0,0,0,1)".
     */
    set_BorderColor(value: string): void;

    /**
     * Gets the border width of the image.
     */
    get_BorderWidth(): number;

    /**
     * Sets the border width of the image.
     * @param value Border width of the image. Valid value is 0 and any positive value. Default value is 0.
     */
    set_BorderWidth(value: number): void;

    // METHODS

    /**
     * Determines whether the specified image appearance is equal to the current image appearance.
     * @param temp The image appearance to compare with the current image appearance.
     */
    equals(temp: Vintasoft.Imaging.WebImageAppearanceJS): boolean;

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebImageAppearanceJS;

  }

  /**
   * Provides the base class that stores information about undo operation.
   */
  class WebUndoActionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUndoActionJS"] class.
     * @param source Source object.
     * @param actionSource Action source.
     */
    constructor(source: object, actionSource: object);

    // PROPERTIES

    /**
     * Get the action source.
     */
    get_ActionSource(): object;

    /**
     * Gets a value indicating whether the undo action is valid.
     */
    get_IsValid(): boolean;

    /**
     * Gets the reference to the source object of action.
     */
    get_Source(): object;

    /**
     * Gets the references to the source objects stored in source. For example, this property contains references to the collection objects if source is collection.
     */
    get_SourceItems(): object;

    /**
     * Gets the current state of action.
     */
    get_CurrentState(): object;

    /**
     * Sets the current state of action.
     * @param value New current state of action.
     */
    set_CurrentState(value: object): void;

    // METHODS

    /**
     * Disposes all resources used by the action.
     */
    dispose(): void;

    /**
     * Returns the description of change in object.
     */
    toString(): string;

    /**
     * Undoes the action.
     */
    undo(): void;

  }

  /**
   * Represents the group of undo actions.
   */
  class WebCompositeUndoActionJS extends Vintasoft.Imaging.WebUndoActionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCompositeUndoActionJS"] class.
     * @param actionSource Action source.
     */
    constructor(actionSource: object);

    // PROPERTIES

    /**
     * Gets a value indicating whether the undo action is valid.
     */
    get_IsValid(): boolean;

    // METHODS

    /**
     * Returns the collection of actions.
     */
    getActions(): object;

    /**
     * Disposes all resources used by the action.
     */
    dispose(): void;

    /**
     * Returns the description of change in object.
     */
    toString(): string;

    /**
     * Undoes the action.
     */
    undo(): void;

  }

  /**
   * An undo manager that allows to undo/redo changes in object.
   */
  class WebUndoManagerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUndoManagerJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the undo manager is initializing.
     */
    get_IsInitializing(): boolean;

    /**
     * Gets a value indicating whether the undo manager started the composite action.
     */
    get_IsCompositeActionStarted(): boolean;

    /**
     * Gets a value indicating whether the undo manager is enabled.
     */
    get_IsEnabled(): boolean;

    /**
     * Sets a value indicating whether the undo manager is enabled.
     * @param value Value indicating whether the undo manager is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets the maximum number of undo levels.
     */
    get_UndoLevel(): number;

    /**
     * Sets the maximum number of undo levels.
     * @param value Maximum number of undo levels.
     */
    set_UndoLevel(value: number): void;

    /**
     * Gets a count of possible undo steps.
     */
    get_UndoCount(): number;

    /**
     * Gets the description of next undo action.
     */
    get_UndoDescription(): string;

    /**
     * Gets a count of possible redo steps.
     */
    get_RedoCount(): number;

    /**
     * Gets the description of next redo action.
     */
    get_RedoDescription(): string;

    /**
     * Gets an index, in history, of current undo action.
     */
    get_CurrentActionIndex(): number;

    /**
     * Sets an index, in history, of current undo action.
     * @param value Index of undo action.
     */
    set_CurrentActionIndex(value: number): void;

    /**
     * Gets the current undo action.
     */
    get_CurrentAction(): object;

    /**
     * Sets the current undo action.
     * @param value Undo action. Only undo action of this undo manager can be set as value of this property.
     */
    set_CurrentAction(value: object): void;

    // METHODS

    /**
     * Begins initialization of undo manager.
     */
    beginInit(): void;

    /**
     * Ends initialization of undo manager.
     */
    endInit(): void;

    /**
     * Returns a value indicating whether the undo manager contains actions associated with specified source.
     * @param sourceObject Source.
     */
    containsActionForSourceObject(sourceObject: object): boolean;

    /**
     * Begins the composite action.
     * @param actionSource The action source.
     */
    beginCompositeAction(actionSource: object): void;

    /**
     * Ends the composite action.
     */
    endCompositeAction(): void;

    /**
     * Removes the composite action from the undo manager.
     */
    removeCompositeAction(): void;

    /**
     * Adds information about change in object to the history.
     * @param undoAction Undo action that determines change in object.
     * @param previousState Previous object state.
     */
    addAction(undoAction: object, previousState: object): void;

    /**
     * Removes all redo actions from the action history.
     */
    removeRedoActions(): void;

    /**
     * Removes the first action in the action history.
     */
    removeFirstAction(): void;

    /**
     * Undoes several changes in object(s).
     * @param steps Steps backward.
     */
    undo(steps: number): void;

    /**
     * Redoes several changes in object(s).
     * @param steps Steps forward.
     */
    redo(steps: number): void;

    /**
     * Returns the collection of actions.
     */
    getActions(): object;

    /**
     * Clears the action history.
     */
    clear(): void;

    /**
     * Disposes the undo manager.
     */
    dispose(): void;

  }

  /**
   * Stores and manages the undo managers.
   */
  class WebCompositeUndoManagerJS extends Vintasoft.Imaging.WebUndoManagerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCompositeUndoManagerJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the active managers.
     */
    get_ActiveManagers(): Vintasoft.Imaging.WebUndoManagerJS[];

    /**
     * Sets the active managers.
     * @param value Array of [see="WebUndoManagerJS"] objects.
     */
    set_ActiveManagers(value: Vintasoft.Imaging.WebUndoManagerJS[]): void;

    /**
     * Gets the current undo manager.
     */
    get_CurrentManager(): Vintasoft.Imaging.WebUndoManagerJS;

    /**
     * Sets the current undo manager.
     * @param value An instance of [see="WebUndoManagerJS"] class. Default value is null.
     */
    set_CurrentManager(value: Vintasoft.Imaging.WebUndoManagerJS): void;

    /**
     * Gets a value indicating whether the undo manager is initializing.
     */
    get_IsInitializing(): boolean;

    /**
     * Gets a value indicating whether the undo manager started the composite action.
     */
    get_IsCompositeActionStarted(): boolean;

    /**
     * Sets a value indicating whether the undo manager is enabled.
     * @param value Value indicating whether the undo manager is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Sets the maximum number of undo levels.
     * @param value Maximum number of undo levels.
     */
    set_UndoLevel(value: number): void;

    /**
     * Gets a count of possible undo steps.
     */
    get_UndoCount(): number;

    /**
     * Gets the description of next undo action.
     */
    get_UndoDescription(): string;

    /**
     * Gets a count of possible redo steps.
     */
    get_RedoCount(): number;

    /**
     * Gets the description of next redo action.
     */
    get_RedoDescription(): string;

    /**
     * Gets an index, in history, of current undo action.
     */
    get_CurrentActionIndex(): number;

    /**
     * Sets an index, in history, of current undo action.
     * @param value Index of undo action.
     */
    set_CurrentActionIndex(value: number): void;

    /**
     * Gets the current undo action.
     */
    get_CurrentAction(): object;

    /**
     * Sets the current undo action.
     * @param value Undo action. Only undo action of this undo manager can be set as value of this property.
     */
    set_CurrentAction(value: object): void;

    // METHODS

    /**
     * Creates new undo manager and adds new undo manager to this composite manager.
     */
    addManager(): Vintasoft.Imaging.WebUndoManagerJS;

    /**
     * Removes the specified undo manager from the composite undo manager and disposes the undo manager.
     * @param undoManager The undo manager to remove.
     */
    removeManager(undoManager: Vintasoft.Imaging.WebUndoManagerJS): void;

    /**
     * Begins initialization of this composite undo manager.
     */
    beginInit(): void;

    /**
     * Ends initialization of undo manager.
     */
    endInit(): void;

    /**
     * Returns a value indicating whether the composite undo manager contains actions associated with specified source.
     * @param sourceObject Source.
     */
    containsActionForSourceObject(sourceObject: object): boolean;

    /**
     * Begins the composite action.
     * @param actionSource The action source.
     */
    beginCompositeAction(actionSource: object): void;

    /**
     * Ends the composite action.
     */
    endCompositeAction(): void;

    /**
     * Removes the composite action from the undo manager.
     */
    removeCompositeAction(): void;

    /**
     * Adds information about change in object to the history.
     * @param undoAction Undo action that determines change in object.
     * @param previousState Previous object state.
     */
    addAction(undoAction: object, previousState: object): void;

    /**
     * Undoes several changes in object(s).
     * @param steps Steps backward.
     */
    undo(steps: number): void;

    /**
     * Redoes several changes in object(s).
     * @param steps Steps forward.
     */
    redo(steps: number): void;

    /**
     * Returns the collection of actions.
     */
    getActions(): object;

    /**
     * Clears the action history.
     */
    clear(): void;

    /**
     * Removes the first action in the action history.
     */
    removeFirstAction(): void;

    /**
     * Removes all redo actions from the action history.
     */
    removeRedoActions(): void;

    /**
     * Disposes the composite undo manager.
     */
    dispose(): void;

  }

  /**
   * Provides the base class that monitors changes in object and adds undo action to the undo manager when object is changed.
   */
  class WebUndoMonitorJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUndoMonitorJS"] class.
     * @param undoManager An instance of [see="WebUndoManagerJS"] class.
     */
    constructor(undoManager: Vintasoft.Imaging.WebUndoManagerJS);

    // PROPERTIES

    /**
     * Gets a value indicating whether the undo monitor is enabled.
     */
    get_IsEnabled(): boolean;

    /**
     * Sets a value indicating whether the undo monitor is enabled.
     * @param value Value indicating whether the undo monitor is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets the history manager associated with the undo monitor.
     */
    get_UndoManager(): object;

    // METHODS

    /**
     * Disposes the undo monitor.
     */
    dispose(): void;

  }

  /**
   * Represents the text region symbol.
   */
  class WebTextRegionSymbolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTextRegionSymbolJS"] class.
     * @param selectionRegion Selection region of this symbol.
     * @param symbol Text symbol.
     * @param fontName The font name.
     * @param fontBBoxWidth The width of font's bounding box.
     * @param fontBBoxHeight The height of font's bounding box.
     */
    constructor(selectionRegion: object, symbol: string, fontName: string, fontBBoxWidth: number, fontBBoxHeight: number);

    // PROPERTIES

    /**
     * Gets a selection region of this symbol.
     */
    get_SelectionRegion(): object;

    /**
     * Gets a text symbol.
     */
    get_Symbol(): string;

    /**
     * Gets the font name.
     */
    get_FontName(): string;

    /**
     * Gets the width of font's bounding box.
     */
    get_FontBBoxWidth(): string;

    /**
     * Gets the height of font's bounding box.
     */
    get_FontBBoxHeight(): string;

  }

  /**
   * Represents the text region.
   */
  class WebTextRegionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTextRegionJS"] class.
     * @param textContent Text content of this region.
     * @param selectionRegions Array of selection regions of this region.
     * @param subRegions Array of [see="WebTextRegionJS"] objects that defines the subregions of this region. Can be null.
     * @param symbols Array of [see="WebTextRegionSymbolJS"] objects that defines the text symbols of this region. Can be null.
     * @param trasfromFromDipSpace [see="WebMatrixJS"] object that defines the trasfrom from DIP space to text region space. Can be null.
     */
    constructor(textContent: string, selectionRegions: object[], subRegions: Vintasoft.Imaging.WebTextRegionJS[], symbols: Vintasoft.Imaging.WebTextRegionSymbolJS[], trasfromFromDipSpace: Vintasoft.Imaging.Utils.WebMatrixJS);

    // PROPERTIES

    /**
     * Gets a text content of this region.
     */
    get_TextContent(): string;

    /**
     * Gets an array of selection regions of this region.
     */
    get_SelectionRegions(): object[];

    /**
     * Gets an array of subregions of this region.
     */
    get_Subregions(): Vintasoft.Imaging.WebTextRegionJS[];

    /**
     * Gets an array of text symbols of this region.
     */
    get_Symbols(): Vintasoft.Imaging.WebTextRegionSymbolJS[];

    // METHODS

    /**
     * Determines that this region contains specified point.
     * @param point Point.
     */
    containsPoint(point: object): boolean;

    /**
     * Returns a text region that contains a word at specified point.
     * @param point Location of word.
     */
    getWordSubregion(point: object): Vintasoft.Imaging.WebTextRegionJS;

    /**
     * Returns a text region that contains a line at specified point.
     * @param point Location of line.
     */
    getLineSubregion(point: object): Vintasoft.Imaging.WebTextRegionJS;

    /**
     * Returns a subregion of this text region.
     * @param rect Location and size of subregion.
     * @param selectionMode An instance of [see="WebTextSelectionModeEnumJS"] class that defines the selection mode for subregion.
     */
    getSubregion(rect: object, selectionMode: Vintasoft.Imaging.WebTextSelectionModeEnumJS): Vintasoft.Imaging.WebTextRegionJS;

    /**
     * Searches the text in this text region.
     * @param regExp Regular expression.
     */
    searchText(regExp: object): object[];

    /**
     * Returns the transformation from image space, in pixels, to the text region space.
     * @param resolution The resolution of an image.
     */
    getTransformFromImageToTextSpace(resolution: object): object;

    /**
     * Returns the transformation from text region space to the image space, in pixels.
     * @param resolution The resolution of an image.
     */
    getTransformFromTextToImageSpace(resolution: object): object;

    /**
     * Returns the selection bounding box of text region.
     */
    getSelectionBoundingBox(): object;

  }

  /**
   * Provides the base class for metadata of page content action.
   */
  class WebPageContentActionMetadataJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPageContentActionMetadataJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a type of the node.
     */
    get_Type(): string;

    /**
     * Gets the region of the content metadata, in image space, measured in device-independent pixels (1/96th inch).
     */
    get_Region(): object;

    /**
     * Sets the region of the content metadata, in image space, measured in device-independent pixels (1/96th inch).
     * @param value The region of the content metadata, in image space, measured in device-independent pixels (1/96th inch).
     */
    set_Region(value: object): void;

  }

  /**
   * Represents the metadata of page navigation action.
   */
  class WebGotoActionMetadataJS extends Vintasoft.Imaging.WebPageContentActionMetadataJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGotoActionMetadataJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a type of the node.
     */
    get_Type(): string;

    /**
     * Gets the index of the destination page, that must be set in an image viewer.
     */
    get_DestPageIndex(): number;

    /**
     * Sets the index of the destination page, that must be set in an image viewer.
     * @param value The index of the destination page, that must be set in an image viewer.
     */
    set_DestPageIndex(value: number): void;

    /**
     * Gets the rect on destination page, in image space, measured in device-independent pixels (1/96th inch).
     */
    get_DestRect(): object;

    /**
     * Sets the rect on destination page, in image space, measured in device-independent pixels (1/96th inch).
     * @param value The rect on destination page, in image space, measured in device-independent pixels (1/96th inch).
     */
    set_DestRect(value: object): void;

    /**
     * Gets the size mode that must be set in an image viewer.
     */
    get_SizeMode(): Vintasoft.Imaging.WebImageSizeModeEnumJS;

    /**
     * Sets the size mode that must be set in an image viewer.
     * @param value The size mode that must be set in an image viewer.
     */
    set_SizeMode(value: Vintasoft.Imaging.WebImageSizeModeEnumJS): void;

    /**
     * Gets the zoom that must be set in an image viewer.
     */
    get_Zoom(): number;

    /**
     * Sets the zoom that must be set in an image viewer.
     * @param value The zoom that must be set in an image viewer.
     */
    set_Zoom(value: number): void;

    /**
     * Gets a value indicating whether viewer must be zoomed to the [see="WebGotoActionMetadataJS.get_DestRect"].
     */
    get_ZoomToDestRect(): boolean;

    /**
     * Sets a value indicating whether viewer must be zoomed to the [see="WebGotoActionMetadataJS.get_DestRect"].
     * @param value True - viewer must scroolled and zoomed to the [see="WebGotoActionMetadataJS.get_DestRect"], the [see="WebGotoActionMetadataJS.get_Zoom"] property must be ignored; false - viewer must scrolled to the [see="WebGotoActionMetadataJS.get_DestRect"].
     */
    set_ZoomToDestRect(value: boolean): void;

  }

  /**
   * Represents the metadata of page content URI action.
   */
  class WebUriActionMetadataJS extends Vintasoft.Imaging.WebPageContentActionMetadataJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUriActionMetadataJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a type of the node.
     */
    get_Type(): string;

    /**
     * Gets the uniform resource identifier (URI).
     */
    get_Uri(): string;

    /**
     * Sets the uniform resource identifier (URI).
     * @param value The uniform resource identifier (URI).
     */
    set_Uri(value: string): void;

  }

  /**
   * Represents the metadata of page content named action.
   */
  class WebNamedActionMetadataJS extends Vintasoft.Imaging.WebPageContentActionMetadataJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebNamedActionMetadataJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a type of the node.
     */
    get_Type(): string;

    /**
     * Gets the name of the action.
     */
    get_ActionName(): string;

    /**
     * Sets the name of the action.
     * @param value The name of the action.
     */
    set_ActionName(value: string): void;

  }

  /**
   * A base abstract class for page content action executor.
   */
  class WebPageContentActionExecutorJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPageContentActionExecutorJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Executes the action.
     * @param viewer The image viewer.
     * @param image The image that contains the action.
     * @param action The action to execute.
     */
    executeAction(viewer: Vintasoft.Imaging.UI.WebImageViewerJS, image: Vintasoft.Shared.WebImageJS, action: object): boolean;

  }

  /**
   * Represents the composite executor of metadata action.
   */
  class WebPageContentActionCompositeExecutorJS extends Vintasoft.Imaging.WebPageContentActionExecutorJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPageContentActionCompositeExecutorJS"] class.
     * @param items An array of [see="WebPageContentActionExecutorJS"] objects.
     */
    constructor(items: Vintasoft.Imaging.WebPageContentActionExecutorJS[]);

    // PROPERTIES

    /**
     * Gets the items of this composite executor.
     */
    get_Items(): Vintasoft.Imaging.WebPageContentActionExecutorJS;

    // METHODS

    /**
     * Executes the action.
     * @param viewer The image viewer.
     * @param image The image that contains the action.
     * @param action The action to execute.
     */
    executeAction(viewer: Vintasoft.Imaging.UI.WebImageViewerJS, image: Vintasoft.Shared.WebImageJS, action: object): boolean;

  }

  /**
   * Represents the action executor that executes navigation actions.
   */
  class WebNavigationActionExecutorJS extends Vintasoft.Imaging.WebPageContentActionExecutorJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebNavigationActionExecutorJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Executes the action.
     * @param viewer The image viewer.
     * @param image The image that contains the action.
     * @param action The action to execute.
     */
    executeAction(viewer: Vintasoft.Imaging.UI.WebImageViewerJS, image: Vintasoft.Shared.WebImageJS, action: object): boolean;

  }

  /**
   * Provides access to an image metadata.
   */
  class WebImageMetadataJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageMetadataJS"] class.
     * @param image [see="WebImageJS"] object.
     */
    constructor(image: Vintasoft.Shared.WebImageJS);

    // PROPERTIES

    /**
     * Gets a source image.
     */
    get_Image(): Vintasoft.Shared.WebImageJS;

    // METHODS

    /**
     * Returns a text region of this image.
     */
    getTextRegion(): Vintasoft.Imaging.WebTextRegionJS;

    /**
     * Determines that text region is received.
     */
    isTextRegionReceived(): boolean;

    /**
     * Sends an asynchronous request for getting information about text region of this image.
     * @param successFunc Function that will be executed if request is executed successfully. Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>textRegion (object): [see="WebTextRegionJS"] object that defines text region of this image OR null if this image does not have text region.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed. Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    requestTextRegion(successFunc: Function, errorFunc: Function): void;

    /**
     * Returns the actions of this image.
     */
    getActions(): Vintasoft.Imaging.WebPageContentActionMetadataJS[];

    /**
     * Determines that actions are received.
     */
    isActionsReceived(): boolean;

    /**
     * Sends an asynchronous request for getting information about actions of this image.
     * @param successFunc Function that will be executed if request is executed successfully. Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>actions (object): Array of [see="WebPageContentActionMetadataJS"] objects that defines metadata of page content actions.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed. Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    requestActions(successFunc: Function, errorFunc: Function): void;

  }

  /**
   * Provides the abstract base class for image encoder settings.
   */
  class WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the name of image encoder settings.
     */
    get_Name(): string;

    // METHODS

    /**
     * Returns encoder settings as object.
     */
    toObject(): object;

  }

  /**
   * Provides settings of BMP encoder.
   */
  class WebBmpEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBmpEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the compression of BMP file.
     */
    get_Compression(): Vintasoft.Imaging.WebBmpCompressionEnumJS;

    /**
     * Sets the compression of BMP file.
     * @param value An instance of [see="WebBmpCompressionEnumJS"] class that defines the compression of BMP file.
     */
    set_Compression(value: Vintasoft.Imaging.WebBmpCompressionEnumJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebBmpCompressionEnumJS;

  }

  /**
   * Provides settings of DOCX encoder.
   */
  class WebDocxEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocxEncoderSettingsJS"] class.
     */
    constructor();

  }

  /**
   * Provides settings of XLSX encoder.
   */
  class WebXlsxEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebXlsxEncoderSettingsJS"] class.
     */
    constructor();

  }

  /**
   * Provides settings of GIF encoder.
   */
  class WebGifEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGifEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the number of animation cycles.
     */
    get_NumberOfAnimationCycles(): number;

    /**
     * Sets the number of animation cycles.
     * @param value The number of animation cycles. Valid values are from 0 to 65535. Default value is 0.
     */
    set_NumberOfAnimationCycles(value: number): void;

    /**
     * Gets the animation delay value.
     */
    get_AnimationDelay(): number;

    /**
     * Sets the animation delay value.
     * @param value The animation delay value. Valid values are from 0 to 65535 (0 - default delay). Default value is 0.
     */
    set_AnimationDelay(value: number): void;

    /**
     * Gets a value indicating whether the animation should be repeated infinitely.
     */
    get_InfiniteAnimation(): boolean;

    /**
     * Sets a value indicating whether the animation should be repeated infinitely.
     * @param value A value indicating whether the animation should be repeated infinitely. Default value is false.
     */
    set_InfiniteAnimation(value: boolean): void;

    /**
     * Gets the [see="WebGifCreatePageMethodEnumJS"].
     */
    get_CreatePageMethod(): Vintasoft.Imaging.WebGifCreatePageMethodEnumJS;

    /**
     * Sets the [see="WebGifCreatePageMethodEnumJS"].
     * @param value An instance of [see="WebGifCreatePageMethodEnumJS"] class.
     */
    set_CreatePageMethod(value: Vintasoft.Imaging.WebGifCreatePageMethodEnumJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebGifEncoderSettingsJS;

  }

  /**
   * Provides settings of JBIG2 encoder.
   */
  class WebJbig2EncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebJbig2EncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether file must be encoded using MMR coding.
     */
    get_UseMmr(): boolean;

    /**
     * Sets a value indicating whether file must be encoded using MMR coding.
     * @param value A value indicating whether file must be encoded using MMR coding. Default value is false.
     */
    set_UseMmr(value: boolean): void;

    /**
     * Gets a value indicating whether file must be encoded with lossy coding.
     */
    get_Lossy(): boolean;

    /**
     * Sets a value indicating whether file must be encoded with lossy coding.
     * @param value A value indicating whether file must be encoded with lossy coding. Default value is false.
     */
    set_Lossy(value: boolean): void;

    /**
     * Gets the permitted inaccuracy percent for lossy coding.
     */
    get_Inaccuracy(): number;

    /**
     * Sets the permitted inaccuracy percent for lossy coding.
     * @param value The permitted inaccuracy percent for lossy coding. Valid values are from 0 to 100. Default value is 50.
     */
    set_Inaccuracy(value: number): void;

    /**
     * Gets a value indicating whether the symbol dictionary should be used.
     */
    get_UseSymbolDictionary(): boolean;

    /**
     * Sets a value indicating whether the symbol dictionary should be used.
     * @param value A value indicating whether the symbol dictionary should be used. Default value is true.
     */
    set_UseSymbolDictionary(value: boolean): void;

    /**
     * Gets the maximum number of symbols keeping in symbol dictionary.
     */
    get_SymbolDictionarySize(): number;

    /**
     * Sets the maximum number of symbols keeping in symbol dictionary.
     * @param value The maximum number of symbols keeping in symbol dictionary. Valid values are greater than 10. Recommended values are from 1000 to 10000. Default value is 6500.
     */
    set_SymbolDictionarySize(value: number): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebJbig2EncoderSettingsJS;

  }

  /**
   * Provides settings of JPEG encoder.
   */
  class WebJpegEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebJpegEncoderSettingsJS"] class.
     * @param quality Quality factor.
     */
    constructor(quality: number);

    /**
     * Initializes a new instance of the [see= "WebJpegEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a quality factor in percents.
     */
    get_Quality(): number;

    /**
     * Sets a quality factor in percents.
     * @param value Quality factor in percents. Valid values are from 1 to 100. Recommended values are from 40 to 80. Default value is 70.
     */
    set_Quality(value: number): void;

    /**
     * Gets a value indicating whether color images will be saved as grayscale JPEG files.
     */
    get_SaveAsGrayscale(): boolean;

    /**
     * Sets a value indicating whether color images will be saved as grayscale JPEG files.
     * @param value True - color images will be saved as grayscale JPEG files; false color images will be saved as color JPEG files. Default value is false.
     */
    set_SaveAsGrayscale(value: boolean): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebJpegEncoderSettingsJS;

  }

  /**
   * Provides settings of JPEG2000 encoder.
   */
  class WebJpeg2000EncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebJpeg2000EncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the height in pixels of each tile.
     */
    get_TileHeight(): number;

    /**
     * Sets the height in pixels of each tile.
     * @param value The height in pixels of each tile. Valid values are greater than or equal to 0. Default value is 0.
     */
    set_TileHeight(value: number): void;

    /**
     * Gets the width in pixels of each tile.
     */
    get_TileWidth(): number;

    /**
     * Sets the width in pixels of each tile.
     * @param value The width in pixels of each tile. Valid values are greater than or equal to 0. Default value is 0.
     */
    set_TileWidth(value: number): void;

    /**
     * Gets the number of discrete wavelet transformation levels (decomposition levels).
     */
    get_WaveletLevels(): number;

    /**
     * Sets the number of discrete wavelet transformation levels (decomposition levels).
     * @param value The number of discrete wavelet transformation levels. Valid values are from 0 to 32. Default value is 5.
     */
    set_WaveletLevels(value: number): void;

    /**
     * Gets the compression type, determining whether compression will be lossy or lossless.
     */
    get_CompressionType(): Vintasoft.Imaging.WebJpeg2000CompressionTypeEnumJS;

    /**
     * Sets the compression type, determining whether compression will be lossy or lossless.
     * @param value An instance of [see="WebJpeg2000CompressionTypeEnumJS"] class that defines the compression type.
     */
    set_CompressionType(value: Vintasoft.Imaging.WebJpeg2000CompressionTypeEnumJS): void;

    /**
     * Gets the compression rate for the image.
     */
    get_CompressionRatio(): number;

    /**
     * Sets the compression rate for the image.
     * @param value The compression rate for the image. Valid values are greater than or equal to 1.0. Default value is 20.
     */
    set_CompressionRatio(value: number): void;

    /**
     * Gets the desired size of the compressed image in bytes.
     */
    get_FileSize(): number;

    /**
     * Sets the desired size of the compressed image in bytes.
     * @param value The desired size of the compressed image in bytes. Default value is 0.
     */
    set_FileSize(value: number): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebJpeg2000EncoderSettingsJS;

  }

  /**
   * Provides settings of PBM/PGM/PPM encoder.
   */
  class WebPbmEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPbmEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the encoding of PBM file.
     */
    get_Encoding(): Vintasoft.Imaging.WebPbmEncodingJS;

    /**
     * Sets the encoding of PBM file.
     * @param value An instance of [see="WebPbmEncodingJS"] class that defines the encoding of PBM file.
     */
    set_Encoding(value: Vintasoft.Imaging.WebPbmEncodingJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebPbmEncoderSettingsJS;

  }

  /**
   * Provides settings of PCX encoder.
   */
  class WebPcxEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPcxEncoderSettingsJS"] class.
     */
    constructor();

  }

  /**
   * Provides settings of PDF encoder.
   */
  class WebPdfEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPdfEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets compression algorithm which will be used at saving image to the PDF document.
     */
    get_Compression(): Vintasoft.Imaging.WebPdfImageCompressionEnumJS;

    /**
     * Sets compression algorithm which will be used at saving image to the PDF document.
     * @param value An instance of [see="WebPdfImageCompressionEnumJS"] class that defines the compression algorithm.
     */
    set_Compression(value: Vintasoft.Imaging.WebPdfImageCompressionEnumJS): void;

    /**
     * Gets the PDF document conformance to a PDF standard.
     */
    get_Conformance(): Vintasoft.Imaging.WebPdfDocumentConformanceEnumJS;

    /**
     * Sets the PDF document conformance to a PDF standard.
     * @param value An instance of [see="WebPdfDocumentConformanceEnumJS"] class that defines the PDF document conformance to a PDF standard. Supported values: PdfA_1b, PdfA_2b, PdfA_3b.
     */
    set_Conformance(value: Vintasoft.Imaging.WebPdfDocumentConformanceEnumJS): void;

    /**
     * Gets the settings of JPEG encoder.
     */
    get_JpegSettings(): Vintasoft.Imaging.WebJpegEncoderSettingsJS;

    /**
     * Sets the settings of JPEG encoder.
     * @param value An instance of [see="WebJpegEncoderSettingsJS"] class that defines the settings of JPEG encoder.
     */
    set_JpegSettings(value: Vintasoft.Imaging.WebJpegEncoderSettingsJS): void;

    /**
     * Gets a quality factor in percents if JPEG compression is used.
     */
    get_JpegQuality(): number;

    /**
     * Sets a quality factor in percents if JPEG compression is used.
     * @param value Quality factor in percents if JPEG compression is used. Valid values are from 1 to 100. Recommended values are from 40 to 80. Default value is 70.
     */
    set_JpegQuality(value: number): void;

    /**
     * Gets a value indicating whether color images will be saved as grayscale JPEG files when JPEG compression is used.
     */
    get_SaveAsGrayscale(): boolean;

    /**
     * Sets a value indicating whether color images will be saved as grayscale JPEG files when JPEG compression is used.
     * @param value True - color images will be saved as grayscale JPEG files; false color images will be saved as color JPEG files. Default value is false.
     */
    set_SaveAsGrayscale(value: boolean): void;

    /**
     * Gets the binarization command, which must be used if color image must be converted to a black-white image before saving to a PDF file.
     */
    get_BinarizationCommand(): Vintasoft.Imaging.ImageProcessing.WebChangePixelFormatToBlackWhiteCommandJS;

    /**
     * Sets the binarization command, which must be used if color image must be converted to a black-white image before saving to a PDF file.
     * @param value An instance of [see="WebChangePixelFormatToBlackWhiteCommandJS"] class that defines the binarization command.
     */
    set_BinarizationCommand(value: Vintasoft.Imaging.ImageProcessing.WebChangePixelFormatToBlackWhiteCommandJS): void;

    /**
     * Gets a value indicating whether the Jbig2Globals must be used for encoding JBIG2 images.
     */
    get_Jbig2UseGlobals(): boolean;

    /**
     * Sets a value indicating whether the Jbig2Globals must be used for encoding JBIG2 images.
     * @param value A value indicating whether the Jbig2Globals must be used for encoding. Default value is true.
     */
    set_Jbig2UseGlobals(value: boolean): void;

    /**
     * Gets the settings of Jbig2 encoder.
     */
    get_Jbig2Settings(): Vintasoft.Imaging.WebJbig2EncoderSettingsJS;

    /**
     * Sets the settings of Jbig2 encoder.
     * @param value An instance of [see="WebJbig2EncoderSettingsJS"] class that defines the settings of Jbig2 encoder.
     */
    set_Jbig2Settings(value: Vintasoft.Imaging.WebJbig2EncoderSettingsJS): void;

    /**
     * Gets the settings of JPEG2000 encoder.
     */
    get_Jpeg2000Settings(): Vintasoft.Imaging.WebJpeg2000EncoderSettingsJS;

    /**
     * Sets the settings of JPEG2000 encoder.
     * @param value An instance of [see="WebJpeg2000EncoderSettingsJS"] class that defines the settings of JPEG2000 encoder.
     */
    set_Jpeg2000Settings(value: Vintasoft.Imaging.WebJpeg2000EncoderSettingsJS): void;

    /**
     * Gets the level of ZIP compression.
     */
    get_ZipLevel(): number;

    /**
     * Sets the level of ZIP compression.
     * @param value The level of ZIP compression. Valid values are from 0 to 9. Default value is 6.
     */
    set_ZipLevel(value: number): void;

    /**
     * Gets a value indicating whether annotations appearance must be saved in PDF document.
     */
    get_GenerateAnnotationAppearance(): number;

    /**
     * Sets a value indicating whether annotations appearance must be saved in PDF document.
     * @param value A value indicating whether annotations appearance must be saved in PDF document.
     */
    set_GenerateAnnotationAppearance(value: boolean): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebPdfEncoderSettingsJS;

  }

  /**
   * Provides settings of PNG encoder.
   */
  class WebPngEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPngEncoderSettingsJS"] class.
     * @param filterMethod An instance of [see="WebPngFilterMethodEnumJS"] class that defines the preprocessing method.
     * @param compressionLevel The compression level.
     */
    constructor(filterMethod: Vintasoft.Imaging.WebPngFilterMethodEnumJS, compressionLevel: number);

    /**
     * Initializes a new instance of the [see= "WebPngEncoderSettingsJS"] class.
     * @param filterMethod An instance of [see="WebPngFilterMethodEnumJS"] class that defines the preprocessing method.
     */
    constructor(filterMethod: Vintasoft.Imaging.WebPngFilterMethodEnumJS);

    /**
     * Initializes a new instance of the [see= "WebPngEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the compression level.
     */
    get_CompressionLevel(): number;

    /**
     * Sets the compression level.
     * @param value The compression level. Possible values: from 0 to 9 (0 - no compression, 1 - best speed, 9 - best compression.). Default value is 6.
     */
    set_CompressionLevel(value: number): void;

    /**
     * Gets the preprocessing method applied to the image data before compression.
     */
    get_FilterMethod(): Vintasoft.Imaging.WebPngFilterMethodEnumJS;

    /**
     * Sets the preprocessing method applied to the image data before compression.
     * @param value An instance of [see="WebPngFilterMethodEnumJS"] class that defines the preprocessing method.
     */
    set_FilterMethod(value: Vintasoft.Imaging.WebPngFilterMethodEnumJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebPngEncoderSettingsJS;

    /**
     * Gets the "best speed" encoder settings.
     */
    static bestSpeed(): Vintasoft.Imaging.WebPngEncoderSettingsJS;

    /**
     * Gets the "fast" encoder settings.
     */
    static fast(): Vintasoft.Imaging.WebPngEncoderSettingsJS;

    /**
     * Gets the "normal" encoder settings.
     */
    static normal(): Vintasoft.Imaging.WebPngEncoderSettingsJS;

    /**
     * Gets the "best compression" encoder settings.
     */
    static bestCompression(): Vintasoft.Imaging.WebPngEncoderSettingsJS;

  }

  /**
   * Provides settings of TGA encoder.
   */
  class WebTgaEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTgaEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the compression of TGA file.
     */
    get_Compression(): Vintasoft.Imaging.WebTgaCompressionEnumJS;

    /**
     * Sets the compression of TGA file.
     * @param value An instance of [see="WebTgaCompressionEnumJS"] class that defines the compression of TGA file.
     */
    set_Compression(value: Vintasoft.Imaging.WebTgaCompressionEnumJS): void;

    /**
     * Gets the image origin of TGA file.
     */
    get_ImageOrigin(): Vintasoft.Imaging.WebTgaImageOriginEnumJS;

    /**
     * Sets the image origin of TGA file.
     * @param value An instance of [see="WebTgaImageOriginEnumJS"] class that defines the image origin of TGA file.
     */
    set_ImageOrigin(value: Vintasoft.Imaging.WebTgaImageOriginEnumJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebTgaEncoderSettingsJS;

  }

  /**
   * Provides settings of TIFF encoder.
   */
  class WebTiffEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTiffEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the image compression algorithm.
     */
    get_Compression(): Vintasoft.Imaging.WebTiffCompressionEnumJS;

    /**
     * Sets the image compression algorithm.
     * @param value An instance of [see="WebTiffCompressionEnumJS"] class that defines the image compression algorithm.
     */
    set_Compression(value: Vintasoft.Imaging.WebTiffCompressionEnumJS): void;

    /**
     * Gets a value indicating whether predictor must be used for encoding image.
     */
    get_UsePredictor(): boolean;

    /**
     * Sets a value indicating whether predictor must be used for encoding image.
     * @param value A value indicating whether predictor must be used for encoding image. Default value is true.
     */
    set_UsePredictor(value: boolean): void;

    /**
     * Gets the settings of JPEG encoder.
     */
    get_JpegSettings(): Vintasoft.Imaging.WebJpegEncoderSettingsJS;

    /**
     * Sets the settings of JPEG encoder.
     * @param value An instance of [see="WebJpegEncoderSettingsJS"] class that defines the settings of JPEG encoder.
     */
    set_JpegSettings(value: Vintasoft.Imaging.WebJpegEncoderSettingsJS): void;

    /**
     * Gets a quality factor in percents if JPEG compression is used.
     */
    get_JpegQuality(): number;

    /**
     * Sets a quality factor in percents if JPEG compression is used.
     * @param value Quality factor in percents if JPEG compression is used. Valid values are from 1 to 100. Recommended values are from 40 to 80. Default value is 70.
     */
    set_JpegQuality(value: number): void;

    /**
     * Gets a value indicating whether color images will be saved as grayscale JPEG files when JPEG compression is used.
     */
    get_SaveAsGrayscale(): boolean;

    /**
     * Sets a value indicating whether color images will be saved as grayscale JPEG files when JPEG compression is used.
     * @param value True - color images will be saved as grayscale JPEG files; false color images will be saved as color JPEG files. Default value is false.
     */
    set_SaveAsGrayscale(value: boolean): void;

    /**
     * Gets the level of ZIP compression.
     */
    get_ZipLevel(): number;

    /**
     * Sets the level of ZIP compression.
     * @param value The level of ZIP compression. Valid values are from 0 to 9. Default value is 6.
     */
    set_ZipLevel(value: number): void;

    /**
     * Gets the settings of JPEG2000 encoder.
     */
    get_Jpeg2000Settings(): Vintasoft.Imaging.WebJpeg2000EncoderSettingsJS;

    /**
     * Sets the settings of JPEG2000 encoder.
     * @param value An instance of [see="WebJpeg2000EncoderSettingsJS"] class that defines the settings of JPEG2000 encoder.
     */
    set_Jpeg2000Settings(value: Vintasoft.Imaging.WebJpeg2000EncoderSettingsJS): void;

    /**
     * Gets the binarization command, which must be used if color image must be converted to a black-white image before saving to a TIFF file.
     */
    get_BinarizationCommand(): Vintasoft.Imaging.ImageProcessing.WebChangePixelFormatToBlackWhiteCommandJS;

    /**
     * Sets the binarization command, which must be used if color image must be converted to a black-white image before saving to a TIFF file.
     * @param value An instance of [see="WebChangePixelFormatToBlackWhiteCommandJS"] class that defines the binarization command.
     */
    set_BinarizationCommand(value: Vintasoft.Imaging.ImageProcessing.WebChangePixelFormatToBlackWhiteCommandJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebTiffEncoderSettingsJS;

  }

  /**
   * Provides settings of SVG encoder.
   */
  class WebSvgEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSvgEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the drawing engine must detect duplicate paths.
     */
    get_DetectDuplicatePaths(): boolean;

    /**
     * Sets a value indicating whether the drawing engine must detect duplicate paths.
     * @param value True - SVG drawing engine detects duplicate paths and creates more optimal content; False - SVG drawing engine does NOT detect duplicate paths and saves content "as is".
     */
    set_DetectDuplicatePaths(value: boolean): void;

  }

  /**
   * Provides settings of WEBP encoder.
   */
  class WebWebpEncoderSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebWebpEncoderSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the file format type algorithm.
     */
    get_FileType(): Vintasoft.Imaging.WebWebpFileFormatTypeJS;

    /**
     * Sets the image compression algorithm.
     * @param value An instance of [see="WebWebpFileFormatTypeJS"] class that defines the image file format type.
     */
    set_FileType(value: Vintasoft.Imaging.WebWebpFileFormatTypeJS): void;

    /**
     * Gets the image encoding method.
     */
    get_Method(): Vintasoft.Imaging.WebWebpEncodingMethodJS;

    /**
     * Sets the image encoding method.
     * @param value An instance of [see="WebWebpEncodingMethodJS"] class that defines the image encoding method.
     */
    set_Method(value: Vintasoft.Imaging.WebWebpEncodingMethodJS): void;

    /**
     * Gets a quality factor in percents.
     */
    get_Quality(): number;

    /**
     * Sets a quality factor in percents.
     * @param value Quality factor in percents. Valid values are from 0 to 100. Recommended values are from 40 to 80. Default value is 75.
     */
    set_Quality(value: number): void;

    /**
     * Gets the settings of Lossless file format.
     */
    get_LosslessSettings(): Vintasoft.Imaging.WebWebpLosslessSettingsJS;

    /**
     * Sets the settings of Lossless file format.
     * @param value An instance of [see="WebWebpLosslessSettingsJS"] class that defines the settings of Lossless file format.
     */
    set_LosslessSettings(value: Vintasoft.Imaging.WebWebpLosslessSettingsJS): void;

    /**
     * Gets the settings of Lossy file format.
     */
    get_LossySettings(): Vintasoft.Imaging.WebWebpLossySettingsJS;

    /**
     * Sets the settings of Lossless file format.
     * @param value An instance of [see="WebWebpLossySettingsJS"] class that defines the settings of Lossy file format.
     */
    set_LossySettings(value: Vintasoft.Imaging.WebWebpLossySettingsJS): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebWebpEncoderSettingsJS;

  }

  /**
   * Provides Lossless file format settings of WEBP encoder.
   */
  class WebWebpLosslessSettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebWebpLosslessSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether to preserve the exact RGB values under transparent.
     */
    get_TransparentColorMode(): Vintasoft.Imaging.WebWebpTransparentColorModeJS;

    /**
     * Sets a value indicating whether to preserve the exact RGB values under transparent.
     * @param value An instance of [see="WebWebpTransparentColorModeJS"] class that defines the transparent color mode of WEBP file.
     */
    set_TransparentColorMode(value: Vintasoft.Imaging.WebWebpTransparentColorModeJS): void;

    /**
     * Gets a value indicating whether near lossless mode should be used.
     */
    get_NearLossless(): boolean;

    /**
     * Sets a value indicating whether near lossless mode should be used.
     * @param value A value indicating whether near lossless mode should be used.
     */
    set_NearLossless(value: boolean): void;

    /**
     * Gets the quality of near-lossless image preprocessing.
     */
    get_NearLosslessQuality(): number;

    /**
     * Sets the quality of near-lossless image preprocessing.
     * @param value Near Lossless Quality factor in percents. Valid values are from 0 to 100. Default value is 60.
     */
    set_NearLosslessQuality(value: number): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebWebpLosslessSettingsJS;

  }

  /**
   * Provides Lossy file format settings of WEBP encoder.
   */
  class WebWebpLossySettingsJS extends Vintasoft.Imaging.WebImageEncoderSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebWebpLossySettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the strength of the deblocking filter.
     */
    get_FilterStrength(): number;

    /**
     * Gets the strength of the deblocking filter.
     * @param value Strength of the deblocking filter. Valid values are from 0 to 100. Default value is 60.
     */
    set_FilterStrength(value: number): void;

    /**
     * Gets the amplitude of the spatial noise shaping.
     */
    get_SpatialNoiseShaping(): number;

    /**
     * Sets the amplitude of the spatial noise shaping.
     * @param value Amplitude of the spatial noise shaping. Valid values are from 0 to 100. Default value is 50.
     */
    set_SpatialNoiseShaping(value: number): void;

    /**
     * Gets the number of entropy-analysis passes (in [1..10]).
     */
    get_EntropyPasses(): number;

    /**
     * Gets the number of entropy-analysis passes (in [1..10]).
     * @param value Number of entropy-analysis passes. Valid values are from 1 to 10. Default value is 1.
     */
    set_EntropyPasses(value: number): void;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.WebWebpLossySettingsJS;

  }

  /**
   * Allows to convert image files.
   */
  class WebImageConverterJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageConverterJS"] class.
     * @param updateTimeout A timeout, in milliseconds, for updating the image file converting progress. Default value is 300 milliseconds.
     * @param service [see="WebServiceJS"], which allows to convert image files. Service, which is specified by WebServiceJS.defaultConverterService property will be used if this parameter is null.
     */
    constructor(updateTimeout: number, service: Vintasoft.Shared.WebServiceJS);

    /**
     * Initializes a new instance of the [see= "WebImageConverterJS"] class.
     * @param updateTimeout A timeout, in milliseconds, for updating the image file converting progress. Default value is 300 milliseconds.
     */
    constructor(updateTimeout: number);

    /**
     * Initializes a new instance of the [see= "WebImageConverterJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the request for image file converting is sent.
     */
    get_IsStarted(): boolean;

    /**
     * Gets a value indicating whether the image file converter has active image file converting process.
     */
    get_IsActive(): boolean;

    /**
     * Gets a last received image file converting process status.
     */
    get_ConvertationStatus(): object;

    // METHODS

    /**
     * Sends an asynchronous request for converting the specified image file.
     * @param convertParams Settings for rendering of image tile.<br/> An object with following properties:<br/> <ul> <li>fileId (string): A file identifier. Required parameter.</li> <li>encoderSettings (object): An instance of [see="WebImageEncoderSettingsJS"] class that defines the encoder settings. Required parameter.</li> <li>password (string): A file password. Optional parameter, default value is null.</li> <li>renderingSettings (object): [see="WebRenderingSettingsJS"] object. Optional parameter, default value is null.</li> </ul>
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    convertFileTo(convertParams: object, successFunc: Function, errorFunc: Function): Vintasoft.Shared.WebRequestJS;

    /**
     * Sends an asynchronous request for converting the specified image file.
     * @param convertParams Settings for rendering of image tile.<br/> An object with following properties:<br/> <ul> <li>fileId (string): A file identifier. Required parameter.</li> <li>encoderSettings (object): An instance of [see="WebImageEncoderSettingsJS"] class that defines the encoder settings. Required parameter.</li> <li>password (string): A file password. Optional parameter, default value is null.</li> <li>renderingSettings (object): [see="WebRenderingSettingsJS"] object. Optional parameter, default value is null.</li> </ul>
     * @param successFunc Function that will be executed if request is executed successfully.
     */
    convertFileTo(convertParams: object, successFunc: Function): Vintasoft.Shared.WebRequestJS;

    /**
     * Sends an asynchronous request for converting the specified image file.
     * @param convertParams Settings for rendering of image tile.<br/> An object with following properties:<br/> <ul> <li>fileId (string): A file identifier. Required parameter.</li> <li>encoderSettings (object): An instance of [see="WebImageEncoderSettingsJS"] class that defines the encoder settings. Required parameter.</li> <li>password (string): A file password. Optional parameter, default value is null.</li> <li>renderingSettings (object): [see="WebRenderingSettingsJS"] object. Optional parameter, default value is null.</li> </ul>
     */
    convertFileTo(convertParams: object): Vintasoft.Shared.WebRequestJS;

    /**
     * Sends an asynchronous request for aborting the active image file converting process.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    abortConverting(successFunc: Function, errorFunc: Function): Vintasoft.Shared.WebRequestJS;

    /**
     * Sends an asynchronous request for aborting the active image file converting process.
     * @param successFunc Function that will be executed if request is executed successfully.
     */
    abortConverting(successFunc: Function): Vintasoft.Shared.WebRequestJS;

    /**
     * Sends an asynchronous request for aborting the active image file converting process.
     */
    abortConverting(): Vintasoft.Shared.WebRequestJS;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.ImageProcessing {

  // ===== CLASSES =====

  /**
   * Provides information about color.
   */
  class WebColorBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebColorBaseJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a type of WebColorBaseJS.
     */
    get_Type(): Vintasoft.Imaging.WebColorBaseJSTypeEnumJS;

    /**
     * Sets a type of WebColorBaseJS.
     * @param value An instance of [see="WebColorBaseJSTypeEnumJS"] class. Default value is "RGB24".
     */
    set_Type(value: Vintasoft.Imaging.WebColorBaseJSTypeEnumJS): void;

    /**
     * Gets a color index.
     */
    get_Index(): number;

    /**
     * Sets a color index.
     * @param value Color index.
     */
    set_Index(value: number): void;

    /**
     * Gets a luminance of color.
     */
    get_Luminance(): number;

    /**
     * Sets a luminance of color.
     * @param value Luminance of color.
     */
    set_Luminance(value: number): void;

    /**
     * Gets the red component value of this color.
     */
    get_Red(): number;

    /**
     * Sets the red component value of this color.
     * @param value Red component value.
     */
    set_Red(value: number): void;

    /**
     * Gets the green component value of this color.
     */
    get_Green(): number;

    /**
     * Sets the green component value of this color.
     * @param value Green component value.
     */
    set_Green(value: number): void;

    /**
     * Gets the blue component value of this color.
     */
    get_Blue(): number;

    /**
     * Sets the blue component value of this color.
     * @param value Blue component value.
     */
    set_Blue(value: number): void;

    /**
     * Gets the alpha component value of this color.
     */
    get_Alpha(): number;

    /**
     * Sets the alpha component value of this color.
     * @param value Alpha component value.
     */
    set_Alpha(value: number): void;

    // METHODS

    /**
     * Converts object to a string.
     */
    toString(): string;

    /**
     * Creates copy of object.
     */
    clone(): Vintasoft.Imaging.ImageProcessing.WebColorBaseJS;

    /**
     * Returns color parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Provides information about color sphere in RGB space.
   */
  class WebColorSphereJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebColorSphereJS"] class.
     * @param r Red component value of this color sphere.
     * @param g Green component value of this color sphere.
     * @param b Blue component value of this color sphere.
     * @param radius Radius, in the RGB space, of color sphere.
     */
    constructor(r: number, g: number, b: number, radius: number);

    // PROPERTIES

    /**
     * Gets the radius, in the RGB space, of color sphere.
     */
    get_Radius(): number;

    /**
     * Sets the radius, in the RGB space, of color sphere.
     * @param value Radius, in the RGB space, of color sphere. Valid value is 0 and any positive value.
     */
    set_Radius(value: number): void;

    /**
     * Gets the center of color sphere.
     */
    get_Center(): Vintasoft.Imaging.ImageProcessing.WebColorBaseJS;

    /**
     * Sets the center of color sphere.
     * @param value An instance of [see="WebColorBaseJS"] class.
     */
    set_Center(value: Vintasoft.Imaging.ImageProcessing.WebColorBaseJS): void;

    // METHODS

    /**
     * Converts object to a string.
     */
    toString(): string;

    /**
     * Creates a copy of object.
     */
    clone(): Vintasoft.Imaging.ImageProcessing.WebColorSphereJS;

    /**
     * Returns color sphere parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Provides information about color replace sphere that allows to replace the colors.
   */
  class WebColorReplaceSphereJS extends Vintasoft.Imaging.ImageProcessing.WebColorSphereJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebColorReplaceSphereJS"] class.
     * @param r Red component value of this color sphere.
     * @param g Green component value of this color sphere.
     * @param b Blue component value of this color sphere.
     * @param radius Radius, in the RGB space, of color sphere.
     */
    constructor(r: number, g: number, b: number, radius: number);

    // PROPERTIES

    /**
     * Gets a radius, in range from 0 to 1, which specifies when interpolation should be used for color replacement.
     */
    get_InterpolationRadius(): number;

    /**
     * Sets a radius, in range from 0 to 1, which specifies when interpolation should be used for color replacement.
     * @param value Radius. Valid values are from 0.0 to 1.0. Default value is 0.5.
     */
    set_InterpolationRadius(value: number): void;

    /**
     * Gets a color, which should be used instead of replaced color.
     */
    get_NewColor(): Vintasoft.Imaging.ImageProcessing.WebColorBaseJS;

    /**
     * Sets a color, which should be used instead of replaced color.
     * @param value An instance of [see="WebColorBaseJS"] class.
     */
    set_NewColor(value: Vintasoft.Imaging.ImageProcessing.WebColorBaseJS): void;

    // METHODS

    /**
     * Converts object to a string.
     */
    toString(): string;

    /**
     * Creates a copy of object.
     */
    clone(): Vintasoft.Imaging.ImageProcessing.WebColorReplaceSphereJS;

    /**
     * Returns color sphere parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Provides settings of the remap colors commands.
   */
  class WebChannelRemapSettings {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChannelRemapSettings"] class.
     * @param gamma Gamma.
     * @param inputMax Maximum value of range of input values.
     * @param inputMin Minimum value of range of input values.
     * @param outputMax Maximum value of the range of output values.
     * @param outputMin Minimum value of the range of output values.
     */
    constructor(gamma: number, inputMax: number, inputMin: number, outputMax: number, outputMin: number);

    // PROPERTIES

    /**
     * Gets the gamma.
     */
    get_Gamma(): number;

    /**
     * Sets the gamma.
     * @param value Gamma. Valid value is 0 and any positive value.
     */
    set_Gamma(value: number): void;

    /**
     * Gets the maximum value of the range of input values.
     */
    get_InputMax(): number;

    /**
     * Sets the maximum value of the range of input values.
     * @param value Maximum value of range of input values. Valid values are from 0 to 255.
     */
    set_InputMax(value: number): void;

    /**
     * Gets the minimum value of the range of input values.
     */
    get_InputMin(): number;

    /**
     * Sets the minimum value of the range of input values.
     * @param value Minimum value of range of input values. Valid values are from 0 to 255.
     */
    set_InputMin(value: number): void;

    /**
     * Gets the maximum value of the range of output values.
     */
    get_OutputMax(): number;

    /**
     * Sets the maximum value of the range of output values.
     * @param value Maximum value of the range of output values. Valid values are from 0 to 255.
     */
    set_OutputMax(value: number): void;

    /**
     * Gets the minimum value of the range of output values.
     */
    get_OutputMin(): number;

    /**
     * Sets the minimum value of the range of output values.
     * @param value Minimum value of the range of output values. Valid values are from 0 to 255.
     */
    set_OutputMin(value: number): void;

    // METHODS

    /**
     * Returns the object settings as JSON object.
     */
    getParams(): object;

  }

  /**
   * Provides the base class for image processing commands, which can be applied to a web image.
   */
  class WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageProcessingCommandBaseJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether this command can modify an image.
     */
    get_CanModifyImage(): boolean;

    /**
     * Gets an array of supported native pixel formats for this processing command.
     */
    get_SupportedNativePixelFormats(): Vintasoft.Shared.WebPixelFormatEnumJS[];

    /**
     * Gets an array of supported pixel formats for this processing command.
     */
    get_SupportedPixelFormats(): Vintasoft.Shared.WebPixelFormatEnumJS[];

    /**
     * Gets a value indicating whether the command needs to convert an image to the nearest pixel format ([see="WebImageProcessingCommandBaseJS.get_SupportedNativePixelFormats"]) without color loss if command does not support pixel format of image.
     */
    get_ExpandSupportedPixelFormats(): boolean;

    /**
     * Sets a value indicating whether the command needs to convert an image to the nearest pixel format ([see="WebImageProcessingCommandBaseJS.get_SupportedNativePixelFormats"]) without color loss if command does not support pixel format of image.
     * @param value true - the processing command needs to convert the processing image to the nearest pixel format ([see="WebImageProcessingCommandBaseJS.get_SupportedNativePixelFormats"]) without color loss; otherwise, false. Default value is false.
     */
    set_ExpandSupportedPixelFormats(value: boolean): void;

    /**
     * Gets a value indicating whether the processing command need to restore source pixel format of processed image if source image pixel format was change during image processing.
     */
    get_RestoreSourcePixelFormat(): boolean;

    /**
     * Sets a value indicating whether the processing command need to restore source pixel format of processed image if source image pixel format was change during image processing.
     * @param value true - the processing command need to restore the source pixel format of processed image if source image pixel format was change during image processing; otherwise, false.
     */
    set_RestoreSourcePixelFormat(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution. Throws an exception if parameters are NOT correct.
     * @param image [see="WebImageJS"] that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Provides the base class for image processing commands, which can change image source.
   */
  class WebImageProcessingCommandWithSourceChangeJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageProcessingCommandWithSourceChangeJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the changes must be saved in the source file.
     */
    get_ChangeSource(): boolean;

    /**
     * Sets a value indicating whether the changes must be saved in the source file.
     * @param value True - changes must be saved in the source file; False - changes must be saved in new file. Default value is True.
     */
    set_ChangeSource(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Provides the base class for image processing commands, which can work with image region.
   */
  class WebImageProcessingCommandWithRegionJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageProcessingCommandWithRegionJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets an image region, which should be processed by the image processing command.
     */
    get_Region(): object;

    /**
     * Sets an image region, which should be processed by the image processing command.
     * @param value Region as structure {x:x, y:y, width:w, height:h};
     */
    set_Region(value: object): void;

    // METHODS

    /**
     * Sets an image region, which should be processed by the image processing command.
     * @param x Coordinate of the left top corner of the rectangular region of interest. Valid value is 0 and any positive value. Default value is 0.
     * @param y Coordinate of the left top corner of the rectangular region of interest. Valid value is 0 and any positive value. Default value is 0.
     * @param width Width of the rectangular region of interest. Valid value is 0 and any positive value. Default value is 0.
     * @param height Height of the rectangular region of interest. Valid value is 0 and any positive value. Default value is 0.
     */
    setRegion(x: number, y: number, width: number, height: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Provides the base class for image processing commands, which can with image region and change image source.
   */
  class WebImageProcessingCommandWithRegionAndSourceChangeJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageProcessingCommandWithRegionAndSourceChangeJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets an image region, which should be processed by the image processing command.
     */
    get_Region(): object;

    /**
     * Sets an image region, which should be processed by the image processing command.
     * @param value Region as structure {x:x, y:y, width:w, height:h};
     */
    set_Region(value: object): void;

    // METHODS

    /**
     * Sets an image region, which should be processed by the image processing command.
     * @param x Coordinate of the left top corner of the rectangular region of interest. Valid value is 0 and any positive value. Default value is 0.
     * @param y Coordinate of the left top corner of the rectangular region of interest. Valid value is 0 and any positive value. Default value is 0.
     * @param width Width of the rectangular region of interest. Valid value is 0 and any positive value. Default value is 0.
     * @param height Height of the rectangular region of interest. Valid value is 0 and any positive value. Default value is 0.
     */
    setRegion(x: number, y: number, width: number, height: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Converts an image to a black-white image.
   */
  class WebBinarizeCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBinarizeCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the binarization mode.
     */
    get_BinarizationMode(): Vintasoft.Imaging.WebBinarizationModeEnumJS;

    /**
     * Sets the binarization mode.
     * @param value An instance of [see="WebBinarizationModeEnumJS"] class. Default value is "Threshold".
     */
    set_BinarizationMode(value: Vintasoft.Imaging.WebBinarizationModeEnumJS): void;

    /**
     * Gets the level to convert pixels with darker luminance to black for adaptive binarization mode.
     */
    get_ConvertToBlackLevel(): number;

    /**
     * Sets the level to convert pixels with darker luminance to black for adaptive binarization mode.
     * @param value Valid values are from 0.0 to 1.0. Default value is 0.0.
     */
    set_ConvertToBlackLevel(value: number): void;

    /**
     * Gets the level to convert pixels with lighter luminance to white for adaptive binarization mode.
     */
    get_ConvertToWhiteLevel(): number;

    /**
     * Sets the level to convert pixels with lighter luminance to white for adaptive binarization mode.
     * @param value Valid values are from 0.0 to 1.0. Default value is 1.0.
     */
    set_ConvertToWhiteLevel(value: number): void;

    /**
     * Gets the sensibility of dark pixels in light regions for adaptive binarization mode.
     */
    get_MaxLevelDifference(): number;

    /**
     * Sets the sensibility of dark pixels in light regions for adaptive binarization mode.
     * @param value Sensibility of dark pixels. Valid values are from -765 to 765. Default value is -115.
     */
    set_MaxLevelDifference(value: number): void;

    /**
     * Gets the sensibility of light pixels in dark regions for adaptive binarization mode.
     */
    get_MinLevelDifference(): number;

    /**
     * Sets the sensibility of light pixels in dark regions for adaptive binarization mode.
     * @param value Sensibility of dark pixels. Valid values are from -765 to 765. Default value is 0.
     */
    set_MinLevelDifference(value: number): void;

    /**
     * Gets the threshold for threshold binarization mode.
     */
    get_Threshold(): number;

    /**
     * Sets the threshold for threshold binarization mode.
     * @param value Threshold. Valid values are from 0 to 765. Recommended value is 384. Default value is 384.
     */
    set_Threshold(value: number): void;

    /**
     * Gets the radius of the local window for adaptive binarization mode.
     */
    get_WindowRadius(): number;

    /**
     * Sets the radius of the local window for adaptive binarization mode.
     * @param value Radius of the local window. Valid values are from 0 to 256. Default value is 15.
     */
    set_WindowRadius(value: number): void;

    /**
     * Gets the luminance computation mode.
     */
    get_LuminanceComputationMode(): Vintasoft.Imaging.WebLuminanceComputationModeEnumJS;

    /**
     * Sets the luminance computation mode.
     * @param value An instance of [see="WebLuminanceComputationModeEnumJS"] class. Default value is "Sum".
     */
    set_LuminanceComputationMode(value: Vintasoft.Imaging.WebLuminanceComputationModeEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Changes the brightness of an image.
   */
  class WebChangeBrightnessCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangeBrightnessCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Gets the brightness value in percents.
     */
    get_Brightness(): number;

    /**
     * Sets the brightness value in percents.
     * @param value Brightness value in percents. Valid values are from -100 to 100. Default value is 0.
     */
    set_Brightness(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Changes the brightness and contrast of an image.
   */
  class WebChangeBrightnessContrastCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangeBrightnessContrastCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Gets the brightness value in percents.
     */
    get_Brightness(): number;

    /**
     * Sets the brightness value in percents.
     * @param value Brightness value in percents. Valid values are from -100 to 100. Default value is 0.
     */
    set_Brightness(value: number): void;

    /**
     * Gets the contrast value in percents.
     */
    get_Contrast(): number;

    /**
     * Sets the contrast value in percents.
     * @param value Contrast  value in percents. Valid values are from -100 to 100. Default value is 0.
     */
    set_Contrast(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Changes the contrast of an image.
   */
  class WebChangeContrastCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangeContrastCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Gets the contrast value in percents.
     */
    get_Contrast(): number;

    /**
     * Sets the contrast value in percents.
     * @param value Contrast  value in percents. Valid values are from -100 to 100. Default value is 0.
     */
    set_Contrast(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Changes the gamma of an image.
   */
  class WebChangeGammaCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangeGammaCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Gets the red gamma value.
     */
    get_RedGamma(): number;

    /**
     * Sets the red gamma value.
     * @param value Red gamma value. Valid value is 0 and any positive value. Default value is 1.
     */
    set_RedGamma(value: number): void;

    /**
     * Gets the green gamma value.
     */
    get_GreenGamma(): number;

    /**
     * Sets the green gamma value.
     * @param value Green gamma value. Valid value is 0 and any positive value. Default value is 1.
     */
    set_GreenGamma(value: number): void;

    /**
     * Gets the blue gamma value.
     */
    get_BlueGamma(): number;

    /**
     * Sets the blue gamma value.
     * @param value Blue gamma value. Valid value is 0 and any positive value. Default value is 1.
     */
    set_BlueGamma(value: number): void;

    /**
     * Gets the gamma value.
     */
    get_Gamma(): number;

    /**
     * Sets the gamma value.
     * @param value Gamma value. Valid value is 0 and any positive value. Default value is 1.
     */
    set_Gamma(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Changes the hue, saturation and luminance of an image.
   */
  class WebChangeHSLCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangeHSLCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Gets the hue value.
     */
    get_Hue(): number;

    /**
     * Sets the hue value.
     * @param value Hue value. Valid values are from -180 to 180. Default value is 0.
     */
    set_Hue(value: number): void;

    /**
     * Gets the saturation value.
     */
    get_Saturation(): number;

    /**
     * Sets the saturation value.
     * @param value Saturation value. Valid values are from -100 to 100. Default value is 0.
     */
    set_Saturation(value: number): void;

    /**
     * Gets the luminance value.
     */
    get_Luminance(): number;

    /**
     * Sets the luminance value.
     * @param value Luminance value. Valid values are from -100 to 100. Default value is 0.
     */
    set_Luminance(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Blends the color components of 1-, 4-, 8-, 24- and 32-bpp image.
   */
  class WebColorBlendCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebColorBlendCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the blending color.
     */
    get_BlendColor(): string;

    /**
     * Sets the blending color.
     * @param value Color. Default value is "rgba(0,0,0,1)".
     */
    set_BlendColor(value: string): void;

    /**
     * Gets the blending mode.
     */
    get_BlendingMode(): Vintasoft.Imaging.WebBlendingModeEnumJS;

    /**
     * Sets the blending mode.
     * @param value An instance of [see="WebBlendingModeEnumJS"] class. Default value is "Multiply".
     */
    set_BlendingMode(value: Vintasoft.Imaging.WebBlendingModeEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Blends the color components of 48- and 64-bpp color image.
   */
  class WebColorBlend16CommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebColorBlend16CommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the blending color.
     */
    get_BlendColor(): Vintasoft.Imaging.ImageProcessing.WebColorBaseJS;

    /**
     * Sets the blending color.
     * @param value An instance of [see = "WebColorBaseJS"] class.
     */
    set_BlendColor(value: Vintasoft.Imaging.ImageProcessing.WebColorBaseJS): void;

    /**
     * Gets the blending mode.
     */
    get_BlendingMode(): Vintasoft.Imaging.WebBlendingModeEnumJS;

    /**
     * Sets the blending mode.
     * @param value An instance of [see="WebBlendingModeEnumJS"] class. Default value is "Multiply".
     */
    set_BlendingMode(value: Vintasoft.Imaging.WebBlendingModeEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Converts an image to a grayscale image.
   */
  class WebDesaturateCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDesaturateCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets desaturate method.
     */
    get_DesaturateMethod(): Vintasoft.Imaging.WebDesaturateMethodEnumJS;

    /**
     * Sets desaturate method.
     * @param value An instance of [see="WebDesaturateMethodEnumJS"] class. Default value is "Average".
     */
    set_DesaturateMethod(value: Vintasoft.Imaging.WebDesaturateMethodEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Extracts the alpha channel of an image.
   */
  class WebGetAlphaChannelMaskCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetAlphaChannelMaskCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Converts an image to halftone image using the Floyd-Steinberg dithering algorithm.
   */
  class WebHalftoneCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHalftoneCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Inverts colors of an image.
   */
  class WebInvertCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebInvertCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Changes the color levels of an image.
   */
  class WebLevelsCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLevelsCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the remap settings of the red channel.
     */
    get_RedChannelSettings(): Vintasoft.Imaging.ImageProcessing.WebChannelRemapSettings;

    /**
     * Sets the remap settings of the red channel.
     * @param value An instance of [see="WebChannelRemapSettings"] class.
     */
    set_RedChannelSettings(value: Vintasoft.Imaging.ImageProcessing.WebChannelRemapSettings): void;

    /**
     * Gets the remap settings of the green channel.
     */
    get_GreenChannelSettings(): Vintasoft.Imaging.ImageProcessing.WebChannelRemapSettings;

    /**
     * Sets the remap settings of the green channel.
     * @param value An instance of [see="WebChannelRemapSettings"] class.
     */
    set_GreenChannelSettings(value: Vintasoft.Imaging.ImageProcessing.WebChannelRemapSettings): void;

    /**
     * Gets the remap settings of the blue channel.
     */
    get_BlueChannelSettings(): Vintasoft.Imaging.ImageProcessing.WebChannelRemapSettings;

    /**
     * Sets the remap settings of the blue channel.
     * @param value An instance of [see="WebChannelRemapSettings"] class.
     */
    set_BlueChannelSettings(value: Vintasoft.Imaging.ImageProcessing.WebChannelRemapSettings): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies a posterize effect to an image.
   */
  class WebPosterizeCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPosterizeCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the count of unique colors.
     */
    get_ColorCount(): number;

    /**
     * Sets the count of unique colors.
     * @param value Count of unique colors. Valid values are from 2 to 256. Default value is 6.
     */
    set_ColorCount(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Remaps the colors in images with 8-bits per color channel.
   */
  class WebRemapColorsCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRemapColorsCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the color map for the red channel of image.
     */
    get_RedMap(): number[];

    /**
     * Sets the color map for the red channel of image.
     * @param value Array map of red channel.
     */
    set_RedMap(value: number[]): void;

    /**
     * Gets the color map for the green channel of image.
     */
    get_GreenMap(): number[];

    /**
     * Sets the color map for the green channel of image.
     * @param value Array map of green channel.
     */
    set_GreenMap(value: number[]): void;

    /**
     * Gets the color map for the blue channel of image.
     */
    get_BlueMap(): number[];

    /**
     * Sets the color map for the blue channel of image.
     * @param value Array map of blue channel.
     */
    set_BlueMap(value: number[]): void;

    // METHODS

    /**
     * Sets gamma value for all channels.
     * @param value A gamma value.
     */
    setGamma(value: number): void;

    /**
     * Sets gamma value for red channel.
     * @param value A red gamma value.
     */
    setRedGamma(value: number): void;

    /**
     * Sets gamma value for green channel.
     * @param value A green gamma value.
     */
    setGreenGamma(value: number): void;

    /**
     * Sets gamma value for blue channel.
     * @param value A blue gamma value.
     */
    setBlueGamma(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Remaps the colors in images with 16-bits per color channel.
   */
  class WebRemapColors16CommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRemapColors16CommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the color map for the red channel of image.
     */
    get_RedMap(): number[];

    /**
     * Sets the color map for the red channel of image.
     * @param value Array map of red channel.
     */
    set_RedMap(value: number[]): void;

    /**
     * Gets the color map for the green channel of image.
     */
    get_GreenMap(): number[];

    /**
     * Sets the color map for the green channel of image.
     * @param value Array map of green channel.
     */
    set_GreenMap(value: number[]): void;

    /**
     * Gets the color map for the blue channel of image.
     */
    get_BlueMap(): number[];

    /**
     * Sets the color map for the blue channel of image.
     * @param value Array map of blue channel.
     */
    set_BlueMap(value: number[]): void;

    // METHODS

    /**
     * Sets gamma value for all channels.
     * @param value A gamma value.
     */
    setGamma(value: number): void;

    /**
     * Sets gamma value for red channel.
     * @param value A red gamma value.
     */
    setRedGamma(value: number): void;

    /**
     * Sets gamma value for green channel.
     * @param value A green gamma value.
     */
    setGreenGamma(value: number): void;

    /**
     * Sets gamma value for blue channel.
     * @param value A blue gamma value.
     */
    setBlueGamma(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Curves command for 8-bpc images.
   */
  class WebCurvesCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCurvesCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets an array of supported pixel formats.
     */
    get_SupportedNativePixelFormats(): Vintasoft.Shared.WebPixelFormatEnumJS[];

    /**
     * Gets the color map for the red channel of image.
     */
    get_RedMap(): number[];

    /**
     * Sets the color map for the red channel of image.
     * @param value Array map of red channel.
     */
    set_RedMap(value: number[]): void;

    /**
     * Gets the color map for the green channel of image.
     */
    get_GreenMap(): number[];

    /**
     * Sets the color map for the green channel of image.
     * @param value Array map of green channel.
     */
    set_GreenMap(value: number[]): void;

    /**
     * Gets the color map for the blue channel of image.
     */
    get_BlueMap(): number[];

    /**
     * Sets the color map for the blue channel of image.
     * @param value Array map of blue channel.
     */
    set_BlueMap(value: number[]): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Curves command for 16-bpc images.
   */
  class WebCurves16CommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCurves16CommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets an array of supported pixel formats.
     */
    get_SupportedNativePixelFormats(): Vintasoft.Shared.WebPixelFormatEnumJS[];

    /**
     * Gets the color map for the red channel of image.
     */
    get_RedMap(): number[];

    /**
     * Sets the color map for the red channel of image.
     * @param value Array map of red channel.
     */
    set_RedMap(value: number[]): void;

    /**
     * Gets the color map for the green channel of image.
     */
    get_GreenMap(): number[];

    /**
     * Sets the color map for the green channel of image.
     * @param value Array map of green channel.
     */
    set_GreenMap(value: number[]): void;

    /**
     * Gets the color map for the blue channel of image.
     */
    get_BlueMap(): number[];

    /**
     * Sets the color map for the blue channel of image.
     * @param value Array map of blue channel.
     */
    set_BlueMap(value: number[]): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Replaces color in an image.
   */
  class WebReplaceColorCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebReplaceColorCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets color space where colors are compared.
     */
    get_ColorSpace(): Vintasoft.Imaging.WebColorSpaceTypeEnumJS;

    /**
     * Sets color space where colors are compared.
     * @param value An instance of [see="WebColorSpaceTypeEnumJS"] class. Default value is "sRGB".
     */
    set_ColorSpace(value: Vintasoft.Imaging.WebColorSpaceTypeEnumJS): void;

    /**
     * Get maximum color difference.
     */
    get_MaximalColorDifference(): number;

    /**
     * Sets maximum color difference.
     * @param value Maximum color difference. Possible value is any positive value. Default value is 0.
     */
    set_MaximalColorDifference(value: number): void;

    /**
     * Gets new color.
     */
    get_NewColor(): string;

    /**
     * Sets new color.
     * @param value New color. Default value is "rgba(0,0,0,1)".
     */
    set_NewColor(value: string): void;

    /**
     * Gets old color.
     */
    get_OldColor(): string;

    /**
     * Sets old color.
     * @param value Old color. Default value is "rgba(255,255,255,1)".
     */
    set_OldColor(value: string): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Changes the alpha channel of an image from the specified image-mask.
   */
  class WebSetAlphaChannelMaskCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSetAlphaChannelMaskCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a 1- or 8-bpp image mask for the alpha channel.
     */
    get_Mask(): string;

    /**
     * Sets a 1- or 8-bpp image mask for the alpha channel.
     * @param value An URL or Base64 string of image mask for alpha channel. Default value is empty string.
     */
    set_Mask(value: string): void;

    // METHODS

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Sets value of alpha channel for all image pixels to the specified value.
   */
  class WebSetAlphaChannelValueCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSetAlphaChannelValueCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the alpha channel value.
     */
    get_AlphaValue(): number;

    /**
     * Sets the alpha channel value.
     * @param value Alpha channel value. Valid values are from 0 to 255. Default value is 255.
     */
    set_AlphaValue(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Converts an image to the different pixel formats.
   */
  class WebChangePixelFormatCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangePixelFormatCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the destination pixel format.
     */
    get_PixelFormat(): Vintasoft.Shared.WebPixelFormatEnumJS;

    /**
     * Sets the destination pixel format.
     * @param value An instance of [see="WebPixelFormatEnumJS"] class. Default value is "Undefined".
     */
    set_PixelFormat(value: Vintasoft.Shared.WebPixelFormatEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Converts an image to a color (BGR) image.
   */
  class WebChangePixelFormatToBgrCommandJS extends Vintasoft.Imaging.ImageProcessing.WebChangePixelFormatCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangePixelFormatToBgrCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Sets the destination pixel format.
     * @param value An instance of [see="WebPixelFormatEnumJS"] class. Default value is "Bgr24".
     */
    set_PixelFormat(value: Vintasoft.Shared.WebPixelFormatEnumJS): void;

    /**
     * Gets a value indicating whether the command must keep values of alpha channel in image data when converting image from Bgr32 format to Bgra32 format and vise versa.
     */
    get_KeepAlphaChannel(): boolean;

    /**
     * Sets a value indicating whether the command must keep values of alpha channel in image data when converting image from Bgr32 format to Bgra32 format and vise versa.
     * @param value True - command must keep values of alpha channel; False - command must NOT keep values of alpha channel. Default value is False.
     */
    set_KeepAlphaChannel(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Converts an image to a black-white image.
   */
  class WebChangePixelFormatToBlackWhiteCommandJS extends Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangePixelFormatToBlackWhiteCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Converts an image to a grayscale image.
   */
  class WebChangePixelFormatToGrayscaleCommandJS extends Vintasoft.Imaging.ImageProcessing.WebChangePixelFormatCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangePixelFormatToGrayscaleCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Sets the destination pixel format.
     * @param value An instance of [see="WebPixelFormatEnumJS"] class. Default value is "Gray8".
     */
    set_PixelFormat(value: Vintasoft.Shared.WebPixelFormatEnumJS): void;

  }

  /**
   * Converts an image to a palette image.
   */
  class WebChangePixelFormatToPaletteCommandJS extends Vintasoft.Imaging.ImageProcessing.WebChangePixelFormatCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebChangePixelFormatToPaletteCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Sets the destination pixel format.
     * @param value An instance of [see="WebPixelFormatEnumJS"] class. Default value is "Indexed8".
     */
    set_PixelFormat(value: Vintasoft.Shared.WebPixelFormatEnumJS): void;

    /**
     * Gets a value indicating whether the transparency is used.
     */
    get_Transparency(): boolean;

    /**
     * Sets a value indicating whether the transparency is used.
     * @param value True - transparency must be used; False - transparency must NOT be used. Default value is False.
     */
    set_Transparency(value: boolean): void;

    /**
     * Gets a destination palette type.
     */
    get_PaletteType(): Vintasoft.Imaging.WebPaletteTypeEnumJS;

    /**
     * Sets a destination palette type.
     * @param value An instance of [see="WebPaletteTypeEnumJS"] class. Default value is "Adaptive".
     */
    set_PaletteType(value: Vintasoft.Imaging.WebPaletteTypeEnumJS): void;

    /**
     * Gets a color quantization method.
     */
    get_QuantizationMethod(): Vintasoft.Imaging.WebColorQuantizationMethodEnumJS;

    /**
     * Sets a color quantization method.
     * @param value An instance of [see="WebColorQuantizationMethodEnumJS"] class. Default value is "AdvancedMedianCut".
     */
    set_QuantizationMethod(value: Vintasoft.Imaging.WebColorQuantizationMethodEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Clears the image and fills it with the specified background color.
   */
  class WebClearCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebClearCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the fill color.
     */
    get_Color(): string;

    /**
     * Sets the fill color.
     * @param value Fill color. Default value is "rgba(0,0,0,1)".
     */
    set_Color(value: string): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Crops specified region of an image.
   */
  class WebCropCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCropCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Changes the image resolution with appropriate resizing. This command changes internal image size (in pixels), but not real image size (in inches or cm).
   */
  class WebResampleCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebResampleCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the interpolation algorithm, which should be used for resizing the image.
     */
    get_InterpolationMode(): Vintasoft.Shared.WebInterpolationModeEnumJS;

    /**
     * Sets the interpolation algorithm, which should be used for resizing the image.
     * @param value An instance of [see="WebInterpolationModeEnumJS"] class. Default value is "HighQualityBicubic".
     */
    set_InterpolationMode(value: Vintasoft.Shared.WebInterpolationModeEnumJS): void;

    /**
     * Gets destination horizontal resolution.
     */
    get_HorizontalResolution(): number;

    /**
     * Sets destination horizontal resolution.
     * @param value Horizontal resolution. Valid values are from 1 to 12800. Default value is 96.
     */
    set_HorizontalResolution(value: number): void;

    /**
     * Gets destination vertical resolution.
     */
    get_VerticalResolution(): number;

    /**
     * Sets destination vertical resolution.
     * @param value Vertical resolution. Valid values are from 1 to 12800. Default value is 96.
     */
    set_VerticalResolution(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Changes size of an image without changing resolution.
   */
  class WebResizeCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebResizeCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets an array of supported native pixel formats for this processing command.
     */
    get_SupportedNativePixelFormats(): Vintasoft.Shared.WebPixelFormatEnumJS[];

    /**
     * Gets the image size.
     */
    get_Size(): object;

    /**
     * Sets the image size.
     * @param width Destination width. Valid values are from 1 to 65535. Default value is 100.
     * @param height Destination height. Valid values are from 1 to 65535. Default value is 100.
     */
    set_Size(value: number): void;

    /**
     * Gets the interpolation algorithm, which should be used for resizing the image.
     */
    get_InterpolationMode(): Vintasoft.Shared.WebInterpolationModeEnumJS;

    /**
     * Sets the interpolation algorithm, which should be used for resizing the image.
     * @param value An instance of [see="WebInterpolationModeEnumJS"] class. Default value is "HighQualityBicubic".
     */
    set_InterpolationMode(value: Vintasoft.Shared.WebInterpolationModeEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Changes size of an image canvas.
   */
  class WebResizeCanvasCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebResizeCanvasCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the canvas color.
     */
    get_CanvasColor(): string;

    /**
     * Sets the canvas color.
     * @param value Canvas color. Default value is "rgba(0,0,0,1)".
     */
    set_CanvasColor(value: string): void;

    /**
     * Gets destination size.
     */
    get_CanvasSize(): object;

    /**
     * Sets destination size.
     * @param width Width. Valid values are from 1 to 65535. Default value is 100.
     * @param height Height. Valid values are from 1 to 65535. Default value is 100.
     */
    set_CanvasSize(value: number): void;

    /**
     * Gets the image position on new canvas.
     */
    get_ImagePosition(): object;

    /**
     * Sets the image position on new canvas.
     * @param x X axis. Default value is 0.
     * @param y Y axis. Default value is 0.
     */
    set_ImagePosition(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Overlays image on a top of the another image.
   */
  class WebOverlayCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebOverlayCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the image ("top image") that should be overlaid on top of the source image.
     */
    get_OverlayImage(): string;

    /**
     * Sets the image ("top image") that should be overlaid on top of the source image.
     * @param value An URL or Base64 string of image that should be overlaid on top of the source image. Default value is empty string.
     */
    set_OverlayImage(value: string): void;

    /**
     * Gets a value indicating whether the transparentColor is used.
     */
    get_HasTransparentColor(): boolean;

    /**
     * Sets a value indicating whether the transparentColor is used.
     * @param value True - transparentColor is used, False - transparentColor is not used. Default value is False.
     */
    set_HasTransparentColor(value: boolean): void;

    /**
     * Gets a value indicating whether the image processing command do not overlay pixel of image if pixel has transparent color.
     */
    get_Transparency(): boolean;

    /**
     * Sets a value indicating whether the image processing command do not overlay pixel of image if pixel has transparent color.
     * @param value True - image processing command do not overlay pixel of image if pixel has transparent color; otherwise, false. Default value is False.
     */
    set_Transparency(value: boolean): void;

    /**
     * Gets the color, which must be used as transparent color.
     */
    get_TransparentColor(): string;

    /**
     * Sets the color, which must be used as transparent color.
     * @param value Color. Default value is "rgba(255,255,255,0)".
     */
    set_TransparentColor(value: string): void;

    // METHODS

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Overlays image on a top of the another image using 8-bit image mask.
   */
  class WebOverlayMaskedCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebOverlayMaskedCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets an overlay image.
     */
    get_OverlayImage(): string;

    /**
     * Sets an overlay image.
     * @param value An URL or Base64 string of image that should be overlaid on top of the source image. Default value is empty string.
     */
    set_OverlayImage(value: string): void;

    /**
     * Gets the black-white or 8-bit image mask.
     */
    get_MaskImage(): string;

    /**
     * Sets the black-white or 8-bit image mask.
     * @param value An URL or Base64 string of image mask. Default value is empty string.
     */
    set_MaskImage(value: string): void;

    // METHODS

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Overlays image with blending on a top of the another image using 8-bit image mask.
   */
  class WebOverlayWithBlendingCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebOverlayWithBlendingCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the image ("top image") that should be overlaid on top of the source image.
     */
    get_OverlayImage(): string;

    /**
     * Sets the image ("top image") that should be overlaid on top of the source image.
     * @param value An URL or Base64 string of image that should be overlaid on top of the source image. Default value is empty string.
     */
    set_OverlayImage(value: string): void;

    /**
     * Gets the blending mode.
     */
    get_BlendingMode(): Vintasoft.Imaging.WebBlendingModeEnumJS;

    /**
     * Sets the blending mode.
     * @param value An instance of [see="WebBlendingModeEnumJS"] class. Default value is "Multiply".
     */
    set_BlendingMode(value: Vintasoft.Imaging.WebBlendingModeEnumJS): void;

    // METHODS

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Fills rectangles on an image.
   */
  class WebFillRectangleCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebFillRectangleCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the color, which should be used for filling the rectangles.
     */
    get_Color(): Vintasoft.Imaging.ImageProcessing.WebColorBaseJS;

    /**
     * Sets the color, which should be used for filling the rectangles.
     * @param value An instance of [see="WebColorBaseJS"] class.
     */
    set_Color(value: Vintasoft.Imaging.ImageProcessing.WebColorBaseJS): void;

    /**
     * Gets the rectangles, which should be filled.
     */
    get_Rectangles(): object[];

    /**
     * Sets the rectangles, which should be filled.
     * @param value Array of rectangles. Default value is empty array.
     */
    set_Rectangles(value: object[]): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Creates a grayscale image, which represents the result of comparing two images.
   */
  class WebImageComparisonCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageComparisonCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the image, which must be compared with the source image.
     */
    get_Image(): string;

    /**
     * Sets the image, which must be compared with the source image.
     * @param value An URL or Base64 string of image that must be compared with the source image. Default value is empty string.
     */
    set_Image(value: string): void;

    /**
     * Gets indexes of channels, which should be used for comparing images.
     */
    get_CompareChannelIndexes(): number[];

    /**
     * Sets indexes of channels, which should be used for comparing images.
     * @param value Array of indexes of channels OR "null" if all channels must be comapared. Default value is "null".
     */
    set_CompareChannelIndexes(value: number[]): void;

    /**
     * Gets the image compare operator.
     */
    get_CompareOperator(): Vintasoft.Imaging.WebImageCompareOperatorEnumJS;

    /**
     * Sets the image compare operator.
     * @param value An instance of [see="WebImageCompareOperatorEnumJS"] class. Default value is "Difference".
     */
    set_CompareOperator(value: Vintasoft.Imaging.WebImageCompareOperatorEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Draws image on a top of another image.
   */
  class WebDrawImageCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDrawImageCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the image that should be drawn on the source image.
     */
    get_OverlayImage(): string;

    /**
     * Sets the image ("top image") that should be overlaid on top of the source image.
     * @param value An URL or Base64 string of image that should be overlaid on top of the source image. Default value is empty string.
     */
    set_OverlayImage(value: string): void;

    /**
     * Gets the rectangle, in pixels, on the overlay image, which should be drawn on source image.
     */
    get_SourceRect(): object;

    /**
     * Sets the rectangle, in pixels, on the overlay image, which should be drawn on source image.
     * @param x Coordinate of the left top corner of the rectangle. Valid value is 0 and any positive value. Default value is 0.
     * @param y Coordinate of the left top corner of the rectangle. Valid value is 0 and any positive value. Default value is 0.
     * @param w Width of the rectangle. Valid value is 0 and any positive value. Default value is 0.
     * @param h Height of the rectangle. Valid value is 0 and any positive value. Default value is 0.
     */
    set_SourceRect(value: number): void;

    /**
     * Gets the rectangle, in pixels, on the source image, where overlay image must be drawn.
     */
    get_DestRect(): object;

    /**
     * Sets the rectangle, in pixels, on the source image, where overlay image must be drawn.
     * @param x Coordinate of the left top corner of the rectangle. Valid value is 0 and any positive value. Default value is 0.
     * @param y Coordinate of the left top corner of the rectangle. Valid value is 0 and any positive value. Default value is 0.
     * @param w Width of the rectangle. Valid value is 0 and any positive value. Default value is 0.
     * @param h Height of the rectangle. Valid value is 0 and any positive value. Default value is 0.
     */
    set_DestRect(value: number): void;

    /**
     * Gets the interpolation algorithm, which should be used for drawing the image.
     */
    get_InterpolationMode(): Vintasoft.Shared.WebInterpolationModeEnumJS;

    /**
     * Sets or sets the interpolation algorithm, which should be used for drawing the image.
     * @param value An instance of [see="WebInterpolationModeEnumJS"] class. Default value is "HighQualityBilinear".
     */
    set_InterpolationMode(value: Vintasoft.Shared.WebInterpolationModeEnumJS): void;

    /**
     * Gets the background color of drawn image.
     */
    get_BackgroundColor(): string;

    /**
     * Sets the background color of drawn image.
     * @param value Color. Default value is "rgba(0,0,0,0)".
     */
    set_BackgroundColor(value: string): void;

    // METHODS

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Overlays image on a top of the another image using one of binary operation.
   */
  class WebOverlayBinaryCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebOverlayBinaryCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets an overlay image.
     */
    get_OverlayImage(): string;

    /**
     * Sets an overlay image.
     * @param value Overlay image. Default value is empty string.
     */
    set_OverlayImage(value: string): void;

    /**
     * Gets position of overlay image, in pixels.
     */
    get_OverlayPosition(): object;

    /**
     * Sets position of overlay image, in pixels.
     * @param x X axis. Default value is 0.
     * @param y Y axis. Default value is 0.
     */
    set_OverlayPosition(value: number): void;

    /**
     * Gets type of binary overlay operator.
     */
    get_BinaryOperationType(): Vintasoft.Imaging.WebOverlayBinaryOperationTypeEnumJS;

    /**
     * Sets type of binary overlay operator.
     * @param value An instance of [see="WebOverlayBinaryOperationTypeEnumJS"] class. Default value is "Replace".
     */
    set_BinaryOperationType(value: Vintasoft.Imaging.WebOverlayBinaryOperationTypeEnumJS): void;

    // METHODS

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Detects a background color of an image.
   */
  class WebGetBackgroundColorCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetBackgroundColorCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Detects a border color of an image.
   */
  class WebGetBorderColorCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetBorderColorCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Calculates the number of colors in an image.
   */
  class WebGetColorCountCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetColorCountCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the maximum allowable number of colors in an image.
     */
    get_MaxColorCount(): number;

    /**
     * Sets the maximum allowable number of colors in an image.
     * @param value Maximum number of colors. Possible value is any positive value. Default value is 0.
     */
    set_MaxColorCount(value: number): void;

    /**
     * Gets the maximum permissible inaccuracy, as distance in RGB color space, when comparing two colors.
     */
    get_MaxInaccuracy(): number;

    /**
     * Sets the maximum permissible inaccuracy, as distance in RGB color space, when comparing two colors.
     * @param value Maximum distance in RGB color space. Valid values are from 0 to 442. Default value is 0.
     */
    set_MaxInaccuracy(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Gets an information about the histogram of an image.
   */
  class WebGetHistogramCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetHistogramCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the type of histogram.
     */
    get_HistogramType(): void;

    /**
     * Sets the type of histogram.
     * @param value An instance of [see="WebHistogramTypeEnumJS"] class. Default value is "All".
     */
    set_HistogramType(value: Vintasoft.Imaging.WebHistogramTypeEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Detects the binarization threshold of an image.
   */
  class WebGetThresholdCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetThresholdCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Checks whether an image is blank.
   */
  class WebIsImageBlankCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebIsImageBlankCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets permitted noise level.
     */
    get_MaxNoiseLevel(): number;

    /**
     * Sets permitted noise level.
     * @param value Permitted noise level. Valid values are from 0.0 to 1.0. Default value is 0.01.
     */
    set_MaxNoiseLevel(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Checks whether an image contains a certain color.
   */
  class WebHasCertainColorCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHasCertainColorCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether the alpha channel of Color must be taken into account.
     */
    get_ConsiderAlphaChannel(): boolean;

    /**
     * Sets a value indicating whether the alpha channel of Color must be taken into account.
     * @param value True - alpha channel of Color property must be taken into account; False - alpha channel of Color property must NOT be taken into account. Default value is True.
     */
    set_ConsiderAlphaChannel(value: boolean): void;

    /**
     * Gets the searching color.
     */
    get_Color(): Vintasoft.Imaging.ImageProcessing.WebColorBaseJS;

    /**
     * Sets the searching color.
     * @param value An instance of [see="WebColorBaseJS"] class.
     */
    set_Color(value: Vintasoft.Imaging.ImageProcessing.WebColorBaseJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Returns the color of image rectangular region if image region contains only one color.
   */
  class WebGetUniqueColorCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetUniqueColorCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Checks whether an image contains only black and white colors.
   */
  class WebIsImageBlackWhiteCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebIsImageBlackWhiteCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the maximum permissible inaccuracy, as distance in RGB color space, when comparing two colors.
     */
    get_MaxInaccuracy(): number;

    /**
     * Sets the maximum permissible inaccuracy, as distance in RGB color space, when comparing two colors.
     * @param value Maximum distance in RGB color space. Valid values are from 0 to 442. Default value is 0.
     */
    set_MaxInaccuracy(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Checks whether an image contains only gray colors.
   */
  class WebIsImageGrayscaleCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebIsImageGrayscaleCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the maximum count, in percents, of color pixels in image.
     */
    get_MaxPercentOfColorPixels(): number;

    /**
     * Sets the maximum count, in percents, of color pixels in image.
     * @param value Maximum percents of color pixels in image. Valid values are from 0.0 to 1.0. Default value is 0.
     */
    set_MaxPercentOfColorPixels(value: number): void;

    /**
     * Gets the maximum permissible inaccuracy, as distance in RGB color space, when comparing two colors.
     */
    get_MaxInaccuracy(): number;

    /**
     * Sets the maximum permissible inaccuracy, as distance in RGB color space, when comparing two colors.
     * @param value Maximum distance in RGB color space. Valid values are from 0 to 442. Default value is 0.
     */
    set_MaxInaccuracy(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Calculates the real color depth of an image.
   */
  class WebGetImageColorDepthCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetImageColorDepthCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether to check that an image is a black and white image.
     */
    get_DetectBlackWhite(): boolean;

    /**
     * Sets a value indicating whether to check that an image is a black and white image.
     * @param value True - command must check that an image is a black and white image; False - command must NOT check that an image is a black and white image. Default value is True.
     */
    set_DetectBlackWhite(value: boolean): void;

    /**
     * Gets a value indicating whether to check that an image is a grayscale image.
     */
    get_DetectGrayscale(): boolean;

    /**
     * Sets a value indicating whether to check that an image is a grayscale image.
     * @param value True - command must check that an image is a grayscale image; False - command must NOT check that an image is a grayscale image. Default value is True.
     */
    set_DetectGrayscale(value: boolean): void;

    /**
     * Gets a value indicating whether to check that an image is a palette image with 2 colors.
     */
    get_DetectIndexed1(): boolean;

    /**
     * Sets a value indicating whether to check that an image is a palette image with 2 colors.
     * @param value True - command must check that an image is a palette image with 2 colors; False - command must NOT check that an image is a palette image with 2 colors. Default value is True.
     */
    set_DetectIndexed1(value: boolean): void;

    /**
     * Gets a value indicating whether to check that an image is a palette image with 16 colors.
     */
    get_DetectIndexed4(): boolean;

    /**
     * Sets a value indicating whether to check that an image is a palette image with 16 colors.
     * @param value True - command must check that an image is a palette image with 16 colors; False - command must NOT check that an image is a palette image with 16 colors. Default value is True.
     */
    set_DetectIndexed4(value: boolean): void;

    /**
     * Gets a value indicating whether to check that an image is a palette image with 256 colors.
     */
    get_DetectIndexed8(): boolean;

    /**
     * Sets a value indicating whether to check that an image is a palette image with 256 colors.
     * @param value True - command must check that an image is a palette image with 256 colors; False - command must NOT check that an image is a palette image with 256 colors. Default value is True.
     */
    set_DetectIndexed8(value: boolean): void;

    /**
     * Gets the maximum permissible inaccuracy, as distance in RGB color space, when comparing two colors.
     */
    get_MaxInaccuracy(): number;

    /**
     * Sets the maximum permissible inaccuracy, as distance in RGB color space, when comparing two colors.
     * @param value Maximum distance in RGB color space. Valid values are from 0 to 442. Default value is 0.
     */
    set_MaxInaccuracy(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Detects a border color of an image.
   */
  class WebGetBorderRectCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGetBorderRectCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the type of the removing border color. Only borders with specified color type will be removed.
     */
    get_BorderColorType(): Vintasoft.Imaging.WebBorderRemovalColorTypeEnumJS;

    /**
     * Sets the type of the removing border color. Only borders with specified color type will be removed.
     * @param value An instance of [see="WebBorderRemovalColorTypeEnumJS"] class. Default value is "Auto".
     */
    set_BorderColorType(value: Vintasoft.Imaging.WebBorderRemovalColorTypeEnumJS): void;

    /**
     * Gets permitted noise level, in percents, on the border of an image.
     */
    get_MaxBorderNoise(): number;

    /**
     * Sets permitted noise level, in percents, on the border of an image.
     * @param value Permitted noise level, in percents. Valid values are from 0 to 100. Default value is 0.
     */
    set_MaxBorderNoise(value: number): void;

    /**
     * Gets image sides where border will be searched.
     */
    get_Side(): Vintasoft.Imaging.WebImageSideEnumJS;

    /**
     * Sets image sides where border will be searched.
     * @param value An instance of [see="WebImageSideEnumJS"] class. Default value is "All".
     */
    set_Side(value: Vintasoft.Imaging.WebImageSideEnumJS): void;

    /**
     * Gets a binarization command that must be applied to a not-black-white images.
     */
    get_Binarization(): Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS;

    /**
     * Sets a binarization command mode that must be applied to a not-black-white images.
     * @param value An instance of [see="WebBinarizeCommandJS"] class.
     */
    set_Binarization(value: Vintasoft.Imaging.ImageProcessing.WebBinarizeCommandJS): void;

    // METHODS

    /**
     * Gets the border indent size, in pixels.
     */
    get_BorderSize(): number;

    /**
     * Sets the border indent size, in pixels.
     * @param value Border indent size. Valid values are from 0 to 1000. Default value is 5.
     */
    set_BorderSize(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul>
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, successFunc: Function, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     * @param service [see="WebServiceJS"] that shoud process the image.
     */
    execute(image: Vintasoft.Shared.WebImageJS, service: Vintasoft.Shared.WebServiceJS): boolean;

    /**
     * Executes the image processing command.
     * @param image Image that should be processed.
     */
    execute(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Flips an image.
   */
  class WebFlipCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebFlipCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the flip type.
     */
    get_RotateFlipType(): Vintasoft.Imaging.WebRotateFlipTypeEnumJS;

    /**
     * Sets the flip type.
     * @param value An instance of [see="WebRotateFlipTypeEnumJS"] class. Default value is "RotateNoneFlipX".
     */
    set_RotateFlipType(value: Vintasoft.Imaging.WebRotateFlipTypeEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Rotates an image.
   */
  class WebRotateCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRotateCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the rotation angle, in degrees.
     */
    get_Angle(): number;

    /**
     * Sets the rotation angle, in degrees.
     * @param value Rotation angle. Valid values are from 0 to 360. Default value is 0.
     */
    set_Angle(value: number): void;

    /**
     * Gets the type of the border color.
     */
    get_BorderColorType(): Vintasoft.Imaging.WebBorderColorTypeEnumJS;

    /**
     * Sets the type of the border color.
     * @param value An instance of [see="WebBorderColorTypeEnumJS"] class. Default value is "AutoDetect".
     */
    set_BorderColorType(value: Vintasoft.Imaging.WebBorderColorTypeEnumJS): void;

    /**
     * Gets the border color.
     */
    get_BorderColor(): string;

    /**
     * Sets the border color.
     * @param value Border color. Default value is "rgba(0,0,0,1)".
     */
    set_BorderColor(value: string): void;

    /**
     * Gets a value indicating whether the antialiasing is enabled.
     */
    get_IsAntialiasingEnabled(): boolean;

    /**
     * Sets a value indicating whether the antialiasing is enabled.
     * @param value True if the antialiasing is enabled; otherwise, false. Default value is true.
     */
    set_IsAntialiasingEnabled(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Skews an image horizontally or vertically.
   */
  class WebSkewCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSkewCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the number of pixels to skew in horizontal or vertical direction.
     */
    get_Offset(): number;

    /**
     * Sets the number of pixels to skew in horizontal or vertical direction.
     * @param value Number of pixels to skew in horizontal or vertical direction. Valid value is 0 and any positive or negative value. Default value is 0.
     */
    set_Offset(value: number): void;

    /**
     * Gets the color for newly exposed regions of image.
     */
    get_BackColor(): string;

    /**
     * Sets the color for newly exposed regions of image.
     * @param value Color. Default value is "rgba(0,0,0,0)".
     */
    set_BackColor(value: string): void;

    /**
     * Gets the direction to skew.
     */
    get_Direction(): Vintasoft.Imaging.WebImageProcessingDirectionEnumJS;

    /**
     * Sets the direction to skew.
     * @param value An instance of [see="WebImageProcessingDirectionEnumJS"] class. Default value is "Horizontal".
     */
    set_Direction(value: Vintasoft.Imaging.WebImageProcessingDirectionEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Skews an image using quadrilateral warp.
   */
  class WebQuadrilateralWarpCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebQuadrilateralWarpCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the background color of the image.
     */
    get_BackgroundColor(): string;

    /**
     * Sets the background color of the image.
     * @param value Color. Default value is "rgba(0,0,0,0)".
     */
    set_BackgroundColor(value: string): void;

    /**
     * Gets an array of four or three points that define a quadrangle.
     */
    get_DestinationPoints(): object[];

    /**
     * Sets an array of four or three points that define a quadrangle.
     * @param value Array of points. Default value is empty array.
     */
    set_DestinationPoints(value: object[]): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Applies an affine transformation to an image.
   */
  class WebMatrixTransformCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMatrixTransformCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the color for newly exposed regions of image.
     */
    get_BackColor(): string;

    /**
     * Sets the color for newly exposed regions of image.
     * @param value Color. Default value is "rgba(0,0,0,0)".
     */
    set_BackColor(value: string): void;

    /**
     * Gets the rectangle, in pixels, that defines how to crop image after transformation.
     */
    get_CropRect(): object;

    /**
     * Sets the rectangle, in pixels, that defines how to crop image after transformation.
     * @param x X axis. Valid value is 0 and any positive value. Default value is 0.
     * @param y Y axis. Valid value is 0 and any positive value. Default value is 0.
     * @param w Width. Valid value is 0 and any positive value. Default value is 0.
     * @param h Height. Valid value is 0 and any positive value. Default value is 0.
     */
    set_CropRect(value: number): void;

    /**
     * Gets the interpolation algorithm, which should be used for transforming the image.
     */
    get_InterpolationMode(): Vintasoft.Shared.WebInterpolationModeEnumJS;

    /**
     * Sets or sets the interpolation algorithm, which should be used for transforming the image.
     * @param value An instance of [see="WebInterpolationModeEnumJS"] class. Default value is "HighQualityBicubic".
     */
    set_InterpolationMode(value: Vintasoft.Shared.WebInterpolationModeEnumJS): void;

    /**
     * Gets the transformation matrix.
     */
    get_Matrix(): Vintasoft.Imaging.Utils.WebMatrixJS;

    /**
     * Sets the transformation matrix.
     * @param value An instance of [see="WebMatrixJS"] class.
     */
    set_Matrix(value: Vintasoft.Imaging.Utils.WebMatrixJS): void;

    /**
     * Gets a value indicating whether the image processing command preserves the pixel format of processing images.
     */
    get_PreservePixelFormat(): boolean;

    /**
     * Sets a value indicating whether the image processing command preserves the pixel format of processing images.
     * @param value True - command must preserve the pixel format of processing image; otherwise, False. Default value is True.
     */
    set_PreservePixelFormat(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Changes the image scale.
   */
  class WebImageScalingCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageScalingCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets an array of supported native pixel formats for this processing command.
     */
    get_SupportedNativePixelFormats(): Vintasoft.Shared.WebPixelFormatEnumJS[];

    /**
     * Gets the interpolation algorithm, which should be used for transforming the image.
     */
    get_InterpolationMode(): Vintasoft.Shared.WebInterpolationModeEnumJS;

    /**
     * Sets or sets the interpolation algorithm, which should be used for transforming the image.
     * @param value An instance of [see="WebInterpolationModeEnumJS"] class. Default value is "HighQualityBicubic".
     */
    set_InterpolationMode(value: Vintasoft.Shared.WebInterpolationModeEnumJS): void;

    // METHODS

    /**
     * Gets scale of the image in X direction.
     */
    get_ScaleX(): number;

    /**
     * Sets scale of the image in X direction.
     * @param value Scale of the image in X direction. Value must be positive. Default value is 1.
     */
    set_ScaleX(value: number): void;

    /**
     * Gets scale of the image in Y direction.
     */
    get_ScaleY(): number;

    /**
     * Sets scale of the image in Y direction.
     * @param value Scale of the image in Y direction. Value must be positive. Default value is 1.
     */
    set_ScaleY(value: number): void;

    /**
     * Gets scale of the image.
     */
    get_Scale(): number;

    /**
     * Sets scale of the image.
     * @param value Scale of the image. Value must be positive. Default value is 1.
     */
    set_Scale(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Provides a base class for processing commands based on convolution filter.
   */
  class WebConvolutionCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebConvolutionCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a color channel(s) to process.
     */
    get_ColorChannel(): Vintasoft.Imaging.WebColorChannelEnumJS;

    /**
     * Sets a color channel(s) to process.
     * @param value An instance of [see="WebColorChannelEnumJS"] class. Default value is "RGB".
     */
    set_ColorChannel(value: Vintasoft.Imaging.WebColorChannelEnumJS): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Provides a base class for processing commands based on arithmetic convolution filter.
   */
  class WebArithmeticConvolutionFilterCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebArithmeticConvolutionFilterCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a color channel(s) to process.
     */
    get_ColorChannel(): Vintasoft.Imaging.WebColorChannelEnumJS;

    /**
     * Sets a color channel(s) to process.
     * @param value An instance of [see="WebColorChannelEnumJS"] class. Default value is "RGB".
     */
    set_ColorChannel(value: Vintasoft.Imaging.WebColorChannelEnumJS): void;

    /**
     * Gets the direction in which image is processed.
     */
    get_Direction(): Vintasoft.Imaging.WebImageProcessingDirectionEnumJS;

    /**
     * Sets the direction in which image is processed.
     * @param value An instance of [see="WebImageProcessingDirectionEnumJS"] class. Default value is Horizontal and Vertical.
     */
    set_Direction(value: Vintasoft.Imaging.WebImageProcessingDirectionEnumJS): void;

    // METHODS

    /**
     * Gets the window size for the filter.
     */
    get_WindowSize(): number;

    /**
     * Sets the window size for the filter.
     * @param value Window size. Supported value is any positive odd value. Default value is 3.
     */
    set_WindowSize(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the arithmetic minimum filter to an image. The minimum filter is defined as the minimum of all pixels within a local region of an image.
   */
  class WebMinimumCommandJS extends Vintasoft.Imaging.ImageProcessing.WebArithmeticConvolutionFilterCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMinimumCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the arithmetic maximum filter to an image. The maximum filter is defined as the maximum of all pixels within a local region of an image.
   */
  class WebMaximumCommandJS extends Vintasoft.Imaging.ImageProcessing.WebArithmeticConvolutionFilterCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMaximumCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the arithmetic midpoint filter to an image.
   */
  class WebMidPointCommandJS extends Vintasoft.Imaging.ImageProcessing.WebArithmeticConvolutionFilterCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMidPointCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the arithmetic mean filter to an image.
   */
  class WebMeanCommandJS extends Vintasoft.Imaging.ImageProcessing.WebArithmeticConvolutionFilterCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMeanCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the arithmetic median filter to an image. The median filter is defined as the median of all pixels within a local region of an image.
   */
  class WebMedianCommandJS extends Vintasoft.Imaging.ImageProcessing.WebArithmeticConvolutionFilterCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMedianCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the morphological dilate filter to an image. This filter widens and enhances dark areas of the image.
   */
  class WebDilateCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDilateCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the direction in which image is processed.
     */
    get_Direction(): Vintasoft.Imaging.WebImageProcessingDirectionEnumJS;

    /**
     * Sets the direction in which image is processed.
     * @param value An instance of [see="WebImageProcessingDirectionEnumJS"] class. Default value is "Horizontal".
     */
    set_Direction(value: Vintasoft.Imaging.WebImageProcessingDirectionEnumJS): void;

    // METHODS

    /**
     * Gets the window size for the filter.
     */
    get_WindowSize(): number;

    /**
     * Sets the window size for the filter.
     * @param value Window size. Supported value is any positive odd value. Default value is 3.
     */
    set_WindowSize(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the morphological erode filter to an image. This filter widens and enhances bright areas of the image.
   */
  class WebErodeCommandJS extends Vintasoft.Imaging.ImageProcessing.WebDilateCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebErodeCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the blur filter to an image.
   */
  class WebBlurCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBlurCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Gets the window size for the filter.
     */
    get_WindowSize(): number;

    /**
     * Sets the window size for the filter.
     * @param value Window size. Possible value is any odd value from 1 o 255. Default value is 5.
     */
    set_WindowSize(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the gaussian blur filter to an image.
   */
  class WebGaussianBlurCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGaussianBlurCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether the sigma is calculated automatically.
     */
    get_AutoCalculateSigma(): boolean;

    /**
     * Sets a value indicating whether the sigma is calculated automatically.
     * @param value True - the sigma is calculated automatically; False - the sigma is NOT calculated automatically. Default value is False.
     */
    set_AutoCalculateSigma(value: boolean): void;

    // METHODS

    /**
     * Gets the window size for the filter.
     */
    get_WindowSize(): number;

    /**
     * Sets the window size for the filter.
     * @param value Window size. Valid values are from 3 to 513. Default value is 5.
     */
    set_WindowSize(value: number): void;

    /**
     * Gets a Gaussian distribution.
     */
    get_Sigma(): number;

    /**
     * Sets a Gaussian distribution.
     * @param value Gaussian distribution. Valid values are from 0.6 to 2.4. Default value is 0.833.
     */
    set_Sigma(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the edge detection filter to an image.
   */
  class WebEdgeDetectionCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebEdgeDetectionCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the emboss filter to an image.
   */
  class WebEmbossCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebEmbossCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a depth of process.
     */
    get_Depth(): number;

    /**
     * Sets a depth of process.
     * @param value Depth of process. Valid values are from 1 to 10. Default value is 2.
     */
    set_Depth(value: number): void;

    /**
     * Gets the direction of the light source.
     */
    get_LightDirection(): number;

    /**
     * Sets the direction of the light source.
     * @param value Direction of the light source. Valid values are from 0 to 360. Default value is 45.
     */
    set_LightDirection(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the sharpen filter to an image.
   */
  class WebSharpenCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSharpenCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets an amount of process.
     */
    get_Amount(): number;

    /**
     * Sets an amount of process.
     * @param value Amount of process. Valid values are from 1 to 10. Default value is 1.
     */
    set_Amount(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Adds noise to an image.
   */
  class WebAddNoiseCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAddNoiseCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a value indicating whether the variance and mean is calculated automatically.
     */
    get_AutoNoiseGeneration(): boolean;

    /**
     * Sets a value indicating whether the variance and mean is calculated automatically.
     * @param value True - variance and mean are calculated automatically; False - variance and mean are NOT calculated automatically. Default value is False.
     */
    set_AutoNoiseGeneration(value: boolean): void;

    /**
     * Gets a value indicating whether the seed percentage is calculated automatically.
     */
    get_AutoSeedPercentageGeneration(): boolean;

    /**
     * Sets a value indicating whether the seed percentage is calculated automatically.
     * @param value True - seed percentage is calculated automatically; False - seed percentage is NOT calculated automatically. Default value is True.
     */
    set_AutoSeedPercentageGeneration(value: boolean): void;

    /**
     * Gets the mean of the noise.
     */
    get_Mean(): number;

    /**
     * Sets the mean of the noise.
     * @param value Mean of the noise. Valid values are from 0 to 100. Default value is 0.
     */
    set_Mean(value: number): void;

    /**
     * Gets a value indicating whether the noise is monochromatic.
     */
    get_MonochromaticNoise(): boolean;

    /**
     * Sets a value indicating whether the noise is monochromatic.
     * @param value True - noise is monochromatic; False - noise is NOT monochromatic. Default value is False.
     */
    set_MonochromaticNoise(value: boolean): void;

    /**
     * Gets the noise rate on image.
     */
    get_NoisePercentage(): number;

    /**
     * Sets the noise rate on image.
     * @param value Noise rate. Valid values are from 0 to 100. Default value is 100.
     */
    set_NoisePercentage(value: number): void;

    /**
     * Gets a type of noise to add to the image.
     */
    get_NoiseType(): Vintasoft.Imaging.WebNoiseTypeEnumJS;

    /**
     * Sets a type of noise to add to the image.
     * @param value An instance of [see="WebNoiseTypeEnumJS"] class. Default value is "Uniform".
     */
    set_NoiseType(value: Vintasoft.Imaging.WebNoiseTypeEnumJS): void;

    /**
     * Gets a reference value to noise percentage.
     */
    get_SeedPercentage(): number;

    /**
     * Sets a reference value to noise percentage.
     * @param value Reference value to noise percentage. Valid values are from 0 to 100. Default value is 100.
     */
    set_SeedPercentage(value: number): void;

    /**
     * Gets the variance of the noise.
     */
    get_Variance(): number;

    /**
     * Sets the variance of the noise.
     * @param value Variance of noise. Valid values are from -1000000 to 1000000. Default value is 100.
     */
    set_Variance(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the Canny edge detector filter to an image.
   */
  class WebCannyEdgeDetectorCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCannyEdgeDetectorCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the blur radius.
     */
    get_BlurRadius(): number;

    /**
     * Sets the blur radius.
     * @param value Blur radius. Valid values are from 1 to 256. Default value is 3.
     */
    set_BlurRadius(value: number): void;

    /**
     * Gets the low threshold.
     */
    get_LowThreshold(): number;

    /**
     * Sets the low threshold.
     * @param value Low threshold. Valid values are from 0 to 255. Default value is 20.
     */
    set_LowThreshold(value: number): void;

    /**
     * Gets the high threshold.
     */
    get_HighThreshold(): number;

    /**
     * Sets the high threshold.
     * @param value High threshold. Valid values are from 0 to 255. Default value is 80.
     */
    set_HighThreshold(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the auto colors effect to an image.
   */
  class WebAutoColorsCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAutoColorsCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the color limit, in percents, for calculating the black color.
     */
    get_LowLimit(): number;

    /**
     * Sets the color limit, in percents, for calculating the black color.
     * @param value Color limint, in percents, for calculating the black color. Valid values are from 0.0 to 100.0. Default value is 0.05.
     */
    set_LowLimit(value: number): void;

    /**
     * Gets the color limit, in percents, for calculating the white color.
     */
    get_HighLimit(): number;

    /**
     * Sets the color limit, in percents, for calculating the white color.
     * @param value Color limint, in percents, for calculating the white color. Valid values are from 0.0 to 100.0. Default value is 0.05.
     */
    set_HighLimit(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the auto contrast effect to an image.
   */
  class WebAutoContrastCommandJS extends Vintasoft.Imaging.ImageProcessing.WebAutoColorsCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAutoContrastCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the auto levels effect to an image.
   */
  class WebAutoLevelsCommandJS extends Vintasoft.Imaging.ImageProcessing.WebAutoColorsCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAutoLevelsCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies a bevel edge effect to an image.
   */
  class WebBevelEdgeCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBevelEdgeCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the brightness level of the bottom edge.
     */
    get_BottomBrightness(): number;

    /**
     * Sets the brightness level of the bottom edge.
     * @param value Brightness level of the bottom edge. Valid values are from -100 to 100. Default value is -25.
     */
    set_BottomBrightness(value: number): void;

    /**
     * Gets the brightness level of the top edge.
     */
    get_TopBrightness(): number;

    /**
     * Sets the brightness level of the top edge.
     * @param value Brightness level of the top edge. Valid values are from -100 to 100. Default value is 25.
     */
    set_TopBrightness(value: number): void;

    /**
     * Gets the brightness level of the left edge.
     */
    get_LeftBrightness(): number;

    /**
     * Sets the brightness level of the left edge.
     * @param value Brightness level of the left edge. Valid values are from -100 to 100. Default value is 25.
     */
    set_LeftBrightness(value: number): void;

    /**
     * Gets the brightness level of the right edge.
     */
    get_RightBrightness(): number;

    /**
     * Sets the brightness level of the right edge.
     * @param value Brightness level of the right edge. Valid values are from -100 to 100. Default value is -25.
     */
    set_RightBrightness(value: number): void;

    /**
     * Gets smoothness of the bevel edges.
     */
    get_Smoothness(): number;

    /**
     * Sets smoothness of the bevel edges.
     * @param value Smoothness. Valid values are from 0 to 256. Default value is 2.
     */
    set_Smoothness(value: number): void;

    /**
     * Gets the size of edge.
     */
    get_EdgeSize(): number;

    /**
     * Sets the size of edge.
     * @param value Size of edge. Valid values are 0 and any positive values. Default value is 15.
     */
    set_EdgeSize(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

    /**
     * Checks command parameters before command execution.
     * @param image Image that should be processed.
     */
    checkCommandParams(image: Vintasoft.Shared.WebImageJS): boolean;

  }

  /**
   * Applies a drop shadow effect to an image.
   */
  class WebDropShadowCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDropShadowCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the background color of shadow.
     */
    get_BackColorOfShadow(): string;

    /**
     * Sets the background color of shadow.
     * @param value Background color of shadow. Default value is "rgba(255,255,255,0)".
     */
    set_BackColorOfShadow(value: string): void;

    /**
     * Gets a blur radius of process.
     */
    get_BlurRadius(): number;

    /**
     * Sets a blur radius of process.
     * @param value Blur radius. Valid values are from 1 to 256. Default value is 4.
     */
    set_BlurRadius(value: number): void;

    /**
     * Gets the shadow color.
     */
    get_Color(): string;

    /**
     * Sets the shadow color.
     * @param value Shadow color. Default value is "rgba(0,0,0,1)".
     */
    set_Color(value: string): void;

    /**
     * Gets a shadow distance.
     */
    get_Distance(): number;

    /**
     * Sets a shadow distance.
     * @param value Shadow distance. Valid value is 0 and any positive value. Default value is 15.
     */
    set_Distance(value: number): void;

    /**
     * Gets the direction of the light source.
     */
    get_LightDirection(): number;

    /**
     * Sets the direction of the light source.
     * @param value Direction of the light source. Valid values are from 0 to 360. Default value is 45.
     */
    set_LightDirection(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies a motion blur effect to an image.
   */
  class WebMotionBlurCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMotionBlurCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the depth of process.
     */
    get_Depth(): number;

    /**
     * Sets the depth of process.
     * @param value Depth of process. Valid values are from 1 to 10. Default value is 4.
     */
    set_Depth(value: number): void;

    /**
     * Gets the direction of the motion blur.
     */
    get_MotionDirection(): number;

    /**
     * Sets the direction of the motion blur.
     * @param value Direction of the motion blur. Valid values are from 0 to 180. Default value is 45.
     */
    set_MotionDirection(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies a mosaic effect to an image.
   */
  class WebMosaicCommandJS extends Vintasoft.Imaging.ImageProcessing.WebConvolutionCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMosaicCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    // METHODS

    /**
     * Gets a tile size.
     */
    get_TileSize(): number;

    /**
     * Sets a tile size.
     * @param value Tile size. Valid value is 1 and more. Default value is 5.
     */
    set_TileSize(value: number): void;

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies an oil painting effect to an image.
   */
  class WebOilPaintingCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebOilPaintingCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets a radius of the brush.
     */
    get_Radius(): number;

    /**
     * Sets a radius of the brush.
     * @param value Radius of the brush. Valid values are from 1 to 64. Default value is 3.
     */
    set_Radius(value: number): void;

    /**
     * Gets a number of color intensity levels.
     */
    get_IntensityLevel(): number;

    /**
     * Sets a number of color intensity levels.
     * @param value Number of color intensity levels. Valid values are from 3 to 255. Default value is 50.
     */
    set_IntensityLevel(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the pixelate effect to an image.
   */
  class WebPixelateCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPixelateCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the cell size.
     */
    get_CellSize(): number;

    /**
     * Sets the cell size.
     * @param value Cell size. Valid values are 2 to 100. Default value is 5.
     */
    set_CellSize(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the red eye removal effect to an image.
   */
  class WebRedEyeRemovalCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRedEyeRemovalCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the saturation factor, in percents.
     */
    get_Saturation(): number;

    /**
     * Sets the saturation factor, in percents.
     * @param value Saturation factor, in percents. Valid values are from 50 to 100. Default value is 90.
     */
    set_Saturation(value: number): void;

    /**
     * Gets the minimum difference between red component of color and maximum component from green and blue components of color. Valid values are from 35 to 100. Default value is 70.
     */
    get_Tolerance(): number;

    /**
     * Sets the minimum difference between red component of color and maximum component from green and blue components of color.
     * @param value Minimum difference. Valid values are from 35 to 100. Default value is 70.
     */
    set_Tolerance(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Applies the sepia (old photo) effect to an image.
   */
  class WebSepiaCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSepiaCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies a solarize effect to an image.
   */
  class WebSolarizeCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebSolarizeCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Applies the tile reflection effect to an image.
   */
  class WebTileReflectionCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTileReflectionCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the level of curvature at the borders of the tile.
     */
    get_Curvature(): number;

    /**
     * Sets the level of curvature at the borders of the tile.
     * @param value Level of curvature. Valid values are from -20 to 20. Default value is 8.
     */
    set_Curvature(value: number): void;

    /**
     * Gets the rotation angle in degrees.
     */
    get_RotationAngle(): number;

    /**
     * Sets the rotation angle in degrees.
     * @param value Angle in degrees. Valid values are from -45 to 45. Default value is 30.
     */
    set_RotationAngle(value: number): void;

    /**
     * Gets the tile size in pixels.
     */
    get_TileSize(): number;

    /**
     * Sets the tile size in pixels.
     * @param value Tile size in pixels. Valid values are from 2 to 200. Default value is 40.
     */
    set_TileSize(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Increases sharpness of an image using the highpass filtering in frequency domain.
   */
  class WebImageSharpeningCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageSharpeningCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the value determining if Alpha channel is overlayed in the output image.
     */
    get_OverlayAlpha(): number;

    /**
     * Sets the value determining if Alpha channel is overlayed in the output image.
     * @param value 1 - High Pass result is overlayed without transparency; otherwise, output image is converted to Bgra32 and High Pass result is overlayed using selected Alpha value. Default value is 1.
     */
    set_OverlayAlpha(value: number): void;

    /**
     * Gets the radius of filter, in pixels.
     */
    get_Radius(): number;

    /**
     * Sets the radius of filter, in pixels.
     * @param value Radius of filter, in pixels. Possible value is any positive value. Default value is 12.
     */
    set_Radius(value: number): void;

    /**
     * Gets the type of frequency filter.
     */
    get_Filter(): Vintasoft.Imaging.WebFrequencyFilterTypeEnumJS;

    /**
     * Sets the type of frequency filter.
     * @param value An instance of [see="WebFrequencyFilterTypeEnumJS"] class. Default value is "Gaussian".
     */
    set_Filter(value: Vintasoft.Imaging.WebFrequencyFilterTypeEnumJS): void;

    /**
     * Gets the blending mode.
     */
    get_BlendingMode(): Vintasoft.Imaging.WebBlendingModeEnumJS;

    /**
     * Sets the blending mode.
     * @param value An instance of [see="WebBlendingModeEnumJS"] class. Default value is "SoftLight".
     */
    set_BlendingMode(value: Vintasoft.Imaging.WebBlendingModeEnumJS): void;

    /**
     * Gets the value indicating whether grayscale filtration should be used.
     */
    get_GrayscaleFiltration(): boolean;

    /**
     * Sets the value indicating whether grayscale filtration should be used.
     * @param value True - Spectrum filtering is applied to input image converted to grayscale; false - Spectrum filtering is applied to original input image. Default value is True.
     */
    set_GrayscaleFiltration(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Smooths an image using highpass filtering in frequency domain.
   */
  class WebImageSmoothingCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageSmoothingCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the value determining if Alpha channel is overlayed in the output image.
     */
    get_OverlayAlpha(): number;

    /**
     * Sets the value determining if Alpha channel is overlayed in the output image.
     * @param value 1 - High Pass result is overlayed without transparency; otherwise, output image is converted to Bgra32 and High Pass result is overlayed using selected Alpha value. Default value is 1.
     */
    set_OverlayAlpha(value: number): void;

    /**
     * Gets the radius of filter, in pixels.
     */
    get_Radius(): number;

    /**
     * Sets the radius of filter, in pixels.
     * @param value Radius of filter, in pixels. Possible value is any positive value. Default value is 7.
     */
    set_Radius(value: number): void;

    /**
     * Gets the type of frequency filter.
     */
    get_Filter(): Vintasoft.Imaging.WebFrequencyFilterTypeEnumJS;

    /**
     * Sets the type of frequency filter.
     * @param value An instance of [see="WebFrequencyFilterTypeEnumJS"] class. Default value is "Gaussian".
     */
    set_Filter(value: Vintasoft.Imaging.WebFrequencyFilterTypeEnumJS): void;

    /**
     * Gets the blending mode.
     */
    get_BlendingMode(): Vintasoft.Imaging.WebBlendingModeEnumJS;

    /**
     * Sets the blending mode.
     * @param value An instance of [see="WebBlendingModeEnumJS"] class. Default value is "Normal".
     */
    set_BlendingMode(value: Vintasoft.Imaging.WebBlendingModeEnumJS): void;

    /**
     * Gets the value indicating whether grayscale filtration should be used.
     */
    get_GrayscaleFiltration(): boolean;

    /**
     * Sets the value indicating whether grayscale filtration should be used.
     * @param value True - Spectrum filtering is applied to input image converted to grayscale; false - Spectrum filtering is applied to the original input image. Default value is False.
     */
    set_GrayscaleFiltration(value: boolean): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Performs highpass filtering in the frequency domain.
   */
  class WebHighpassCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHighpassCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the cutoff frequency of highpass filter.
     */
    get_CutoffFrequency(): number;

    /**
     * Sets the cutoff frequency of highpass filter.
     * @param value The cutoff frequency of highpass filter. Possible value is any positive value. Default value is 0.08.
     */
    set_CutoffFrequency(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Performs the ideal highpass filtering in the frequency domain.
   */
  class WebIdealHighpassCommandJS extends Vintasoft.Imaging.ImageProcessing.WebHighpassCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebIdealHighpassCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Performs the Gaussian highpass filtering in the frequency domain.
   */
  class WebGaussianHighpassCommandJS extends Vintasoft.Imaging.ImageProcessing.WebHighpassCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGaussianHighpassCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Performs the Butterworth highpass filtering in the frequency domain.
   */
  class WebButterworthHighpassCommandJS extends Vintasoft.Imaging.ImageProcessing.WebHighpassCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebButterworthHighpassCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the order of Butterworth filter.
     */
    get_Order(): number;

    /**
     * Sets the order of Butterworth filter.
     * @param value The order of Butterworth filter. Possible value is any positive value. Default value is 2.
     */
    set_Order(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Performs the lowpass filtering in the frequency domain.
   */
  class WebLowpassCommandJS extends Vintasoft.Imaging.ImageProcessing.WebImageProcessingCommandWithRegionAndSourceChangeJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLowpassCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the cutoff frequency of highpass filter.
     */
    get_CutoffFrequency(): number;

    /**
     * Sets the cutoff frequency of highpass filter.
     * @param value The cutoff frequency of highpass filter. Possible value is any positive value. Default value is 0.14.
     */
    set_CutoffFrequency(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

  /**
   * Performs the ideal lowpass filtering in the frequency domain.
   */
  class WebIdealLowpassCommandJS extends Vintasoft.Imaging.ImageProcessing.WebLowpassCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebIdealLowpassCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Performs the Gaussian lowpass filtering in the frequency domain.
   */
  class WebGaussianLowpassCommandJS extends Vintasoft.Imaging.ImageProcessing.WebLowpassCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGaussianLowpassCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

  }

  /**
   * Performs the Butterworth lowpass filtering in the frequency domain.
   */
  class WebButterworthLowpassCommandJS extends Vintasoft.Imaging.ImageProcessing.WebLowpassCommandJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebButterworthLowpassCommandJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets action name.
     */
    get_ActionName(): string;

    /**
     * Gets the order of Butterworth filter.
     */
    get_Order(): number;

    /**
     * Sets the order of Butterworth filter.
     * @param value The order of Butterworth filter. Possible value is any positive value. Default value is 2.
     */
    set_Order(value: number): void;

    // METHODS

    /**
     * Returns command parameters as JSON object.
     */
    getParams(): object;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.UI {

  // ===== ENUMS =====

  /**
   * Specifies available modes, which define how content of the drop-down list must be located.
   */
  class WebLayoutDirectionModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which define how content of the drop-down list must be aligned horizontally relative to the button.
   */
  class WebHorizontalAlignModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which define how content of the drop-down list must be aligned vertically relative to the button.
   */
  class WebVerticalAlignModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Represents a JavaScript UI control for displaying images in web browser that supports HTML5 technology.
   */
  class WebImageViewerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageViewerJS"] class.
     * @param controlId Identifier of parent DOM element.
     */
    constructor(controlId: string);

    // PROPERTIES

    /**
     * Gets the image collection associated with the viewer.
     */
    get_Images(): Vintasoft.Shared.WebImageCollectionJS;

    /**
     * Gets the current visual tool of the viewer.
     */
    get_VisualTool(): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS;

    /**
     * Sets the current visual tool of the viewer.
     * @param tool [see="WebVisualToolJS"] object OR null. Default value is null.
     */
    set_VisualTool(value: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS): void;

    /**
     * Gets the main (master) viewer for the viewer.
     */
    get_MasterViewer(): object;

    /**
     * Sets the main (master) viewer for the viewer.
     * @param masterViewer [see="WebImageViewerJS"] object OR [see="WebThumbnailViewerJS"] object. Default value is null.
     */
    set_MasterViewer(value: object): void;

    /**
     * Gets a value indicating whether the image is centered in the viewer.
     */
    get_CenterImage(): boolean;

    /**
     * Sets a value indicating whether the image is centered in the viewer.
     * @param value Indicates whether the viewer must center an image. True - image will be centered in the viewer; False - image will not be centered in the viewer. Default value is False.
     */
    set_CenterImage(value: boolean): void;

    /**
     * Gets the image tile size in image viewer.
     */
    get_TileSize(): object;

    /**
     * Sets the image tile size in the viewer.
     * @param value Size object ({ width: w, height: h}) that represents tile size in pixels. Width and height can have value from 32 to 2048.
     */
    set_TileSize(value: object): void;

    /**
     * Gets the index of focused image.
     */
    get_FocusedIndex(): number;

    /**
     * Sets the index of focused image.
     * @param value New index of focused image.
     */
    set_FocusedIndex(value: number): void;

    /**
     * Gets the image zoom in the viewer.
     */
    get_Zoom(): number;

    /**
     * Sets the image zoom in the viewer.
     * @param value New image zoom. Valid values are from 1 to 1000. Default value is 100.
     */
    set_Zoom(value: number): void;

    /**
     * Gets a value indicating how an image is positioned within the viewer.
     */
    get_ImageSizeMode(): Vintasoft.Imaging.WebImageSizeModeEnumJS;

    /**
     * Sets a value indicating how an image is positioned within the viewer.
     * @param value An instance of [see="WebImageSizeModeEnumJS"] class. Default value is "Normal".
     */
    set_ImageSizeMode(value: Vintasoft.Imaging.WebImageSizeModeEnumJS): void;

    /**
     * Gets the rotation angle, in degrees, for all images in image viewer.
     */
    get_ViewRotationAngle(): number;

    /**
     * Sets the rotation angle, in degrees, for all images in image viewer.
     * @param value The rotation angle, in degrees, of image in image viewer. Valid values are 0, 90, 180, 270. Default value is 0.
     */
    set_ViewRotationAngle(value: number): void;

    /**
     * Gets a value indicating whether rendered image tiles must be saved in cache on server.
     */
    get_UseCache(): boolean;

    /**
     * Sets a value indicating whether rendered image tiles must be saved in cache on server.
     * @param value True - rendered image tiles must be saved in cache on server; false - rendered image tiles must NOT be saved in cache on server. Default value is True.
     */
    set_UseCache(value: boolean): void;

    /**
     * Gets a format in which the viewer want to receive image tiles.
     */
    get_TilesFormat(): Vintasoft.Shared.WebImageTypeEnumJS;

    /**
     * Sets a format in which the viewer want to receive image tiles.
     * @param value An instance of [see="WebImageTypeEnumJS"] class. Default value is "Url".
     */
    set_TilesFormat(value: Vintasoft.Shared.WebImageTypeEnumJS): void;

    /**
     * Gets a focused image.
     */
    get_FocusedImage(): Vintasoft.Shared.WebImageJS;

    /**
     * Gets a value indicating whether the horizontal scroll bar is visible.
     */
    get_HScroll(): boolean;

    /**
     * Sets a value indicating whether the horizontal scroll bar is visible.
     * @param value Value indicating whether the horizontal scroll bar is visible. Default value is True.
     */
    set_HScroll(value: boolean): void;

    /**
     * Gets a value indicating whether the vertical scroll bar is visible.
     */
    get_VScroll(): boolean;

    /**
     * Sets a value indicating whether the vertical scroll bar is visible.
     * @param value Value indicating whether the vertical scroll bar is visible. Default value is True.
     */
    set_VScroll(value: boolean): void;

    /**
     * Gets the rendering settings of this image viewer.
     */
    get_RenderingSettings(): Vintasoft.Shared.WebRenderingSettingsJS;

    /**
     * Sets the rendering settings of this image viewer.
     * @param value null - if rendering settings are not specified; [see="WebRenderingSettingsJS"] object - if image viewer uses the rendering settings for image rendering. Default value is null.
     */
    set_RenderingSettings(value: Vintasoft.Shared.WebRenderingSettingsJS): void;

    /**
     * Gets the image cache manager associated with the viewer.
     */
    get_ImageCacheManager(): Vintasoft.Imaging.Utils.WebImageCacheManagerJS;

    /**
     * Sets the image cache manager of viewer.
     * @param value [see="WebImageCacheManagerJS"] object.
     */
    set_ImageCacheManager(value: Vintasoft.Imaging.Utils.WebImageCacheManagerJS): void;

    /**
     * Gets a value indicating whether viewer must synchronize the image cache with image collection state.
     */
    get_SyncCacheWithImages(): boolean;

    /**
     * Sets a value indicating whether viewer must synchronize the image cache with image collection state.
     * @param value True - viewer must clear cache for images, which are deleted from the image collection; false - viewer must not change cache for images when image collection is changed. Default value is True.
     */
    set_SyncCacheWithImages(value: boolean): void;

    /**
     * Gets an identifier of the parent DOM element of viewer.
     */
    get_ControlId(): string;

    /**
     * Gets the parent DOM element of viewer.
     */
    get_Control(): object;

    /**
     * Gets current display mode of image viewer.
     */
    get_DisplayMode(): Vintasoft.Imaging.WebImageViewerDisplayModeEnumJS;

    /**
     * Sets current display mode of image viewer.
     * @param value An instance of [see="WebImageViewerDisplayModeEnumJS"] class. Default value is "SinglePage".
     */
    set_DisplayMode(value: Vintasoft.Imaging.WebImageViewerDisplayModeEnumJS): void;

    /**
     * Gets the image padding in multipage display mode.
     */
    get_MultipageDisplayImagePadding(): object;

    /**
     * Sets the image padding in multipage display mode.
     * @param left Left image padding. Valid value is 0 and any positive value. Default value 4.
     * @param top Top image padding. Valid value is 0 and any positive value. Default value 4.
     * @param right Right image padding. Valid value is 0 and any positive value. Default value 4.
     * @param bottom Bottom image padding. Valid value is 0 and any positive value. Default value 4.
     */
    set_MultipageDisplayImagePadding(value: number): void;

    /**
     * Gets the images layout direction in multipage display mode.
     */
    get_MultipageDisplayLayoutDirection(): Vintasoft.Imaging.WebImageLayoutDirectionEnumJS;

    /**
     * Sets the images layout direction in multipage display mode.
     * @param value An instance of [see="WebImageLayoutDirectionEnumJS"] class. Default value is "Vertical".
     */
    set_MultipageDisplayLayoutDirection(value: Vintasoft.Imaging.WebImageLayoutDirectionEnumJS): void;

    /**
     * Gets the count of displayed images in row or column in multipage display mode.
     */
    get_MultipageDisplayRowCount(): number;

    /**
     * Sets the count of displayed images in row or column in multipage display mode.
     * @param value The count of displayed images in row or column in multipage display mode. Value must be positive. Default value is 1.
     */
    set_MultipageDisplayRowCount(value: number): void;

    /**
     * Gets the multipage display mode.
     */
    get_MultipageDisplayMode(): Vintasoft.Imaging.WebImageViewerMultipageDisplayModeEnumJS;

    /**
     * Sets the multipage display mode.
     * @param value An instance of [see="WebImageViewerMultipageDisplayModeEnumJS"] class. Default value is "FixedImages".
     */
    set_MultipageDisplayMode(value: Vintasoft.Imaging.WebImageViewerMultipageDisplayModeEnumJS): void;

    /**
     * Gets a value indicating whether viewer displays images in multipage display mode.
     */
    get_IsMultipageDisplayMode(): boolean;

    /**
     * Gets a value indicating whether the viewer must automatically scroll to the focused image in multipage display mode.
     */
    get_IsAutoScrollToFocusedImageEnabled(): boolean;

    /**
     * Gets the appearance of the focused image.
     */
    get_FocusedImageAppearance(): Vintasoft.Imaging.WebImageAppearanceJS;

    /**
     * Sets the appearance of the focused image.
     * @param value [see="WebImageAppearanceJS"] of the focused image. Default focused appearance: backColor=rgba(255,255,255,0); borderColor=rgba(0,0,0,1); borderWidth=1.
     */
    set_FocusedImageAppearance(value: Vintasoft.Imaging.WebImageAppearanceJS): void;

    /**
     * Gets the appearance of the image.
     */
    get_ImageAppearance(): Vintasoft.Imaging.WebImageAppearanceJS;

    /**
     * Sets the appearance of the image.
     * @param value [see="WebImageAppearanceJS"] of the image. Default appearance: backColor=rgba(255,255,255,0); borderColor=rgba(255,255,255,0); borderWidth=0.
     */
    set_ImageAppearance(value: Vintasoft.Imaging.WebImageAppearanceJS): void;

    /**
     * Gets a value indicating whether the image viewer must use the image appearances only in single-page mode.
     */
    get_UseImageAppearancesInSinglePageMode(): boolean;

    /**
     * Sets a value indicating whether the image viewer must use the image appearances only in single-page mode.
     * @param value A value indicating whether the image viewer must use the image appearances only in single-page mode. Default value is False.
     */
    set_UseImageAppearancesInSinglePageMode(value: boolean): void;

    /**
     * Gets the anchor style of the image in the image viewer.
     */
    get_ImageAnchor(): Vintasoft.Imaging.WebImageAnchorTypeEnumJS;

    /**
     * Sets the anchor style of the image in the image viewer.
     * @param value An instance of [see="WebImageAnchorTypeEnumJS"] class. Default value is "None".
     */
    set_ImageAnchor(value: Vintasoft.Imaging.WebImageAnchorTypeEnumJS): void;

    /**
     * Gets an image which should be used for animating image loading.
     */
    get_ProgressImage(): object;

    /**
     * Sets an image which should be used for animating image loading.
     * @param value An image which should be used for animating image loading. Default value is null.
     */
    set_ProgressImage(value: object): void;

    /**
     * Gets a handler for "contextmenu" event of the viewer.
     */
    get_ContextMenuFunc(): Function;

    /**
     * Sets a handler for "contextmenu" event of the viewer.
     * @param value A function OR null that equals to "function(event){ return false; }".
     */
    set_ContextMenuFunc(value: Function): void;

    /**
     * Gets the timeout, in milliseconds, which are used for resizing content in the image viewer.
     */
    get_ResizeTimeout(): number;

    /**
     * Sets the timeout, in milliseconds, which are used for resizing content in the image viewer.
     * @param value The timeout, in milliseconds, which are used for resizing content in the image viewer. Minimum value is 5, maximum value is 1000. Default value is 250.
     */
    set_ResizeTimeout(value: number): void;

    /**
     * Gets a value indicating whether the image viewer must use vector rendering for vector documents.
     */
    get_UseVectorRendering(): boolean;

    /**
     * Sets a value indicating whether the image viewer must use vector rendering for vector documents.
     * @param value True - the image viewer must use vector rendering for vector documents; false - the image viewer must use raster rendering for vector documents. Default value is False.
     */
    set_UseVectorRendering(value: boolean): void;

    /**
     * Gets a CSS-color that is used for filling page when image viewer renders page using vector rendering.
     */
    get_VectorContentBackgroundColor(): string;

    /**
     * Sets a CSS-color that is used for filling page when image viewer renders page using vector rendering.
     * @param value A string that represents a CSS-color that is used for filling page when image viewer renders page using vector rendering. Default value is 'white'.
     */
    set_VectorContentBackgroundColor(value: string): void;

    /**
     * Gets a value indicating whether image viewer should change the focused image when viewer is scrolling.
     */
    get_ChangeFocusedImageWhenScrolling(): boolean;

    /**
     * Sets a value indicating whether image viewer should change the focused image when viewer is scrolling.
     * @param value <b>True</b> - image viewer should change the focused image when viewer is scrolling; <b>false</b> - image viewer should NOT change the focused image when viewer is scrolling.
     */
    set_ChangeFocusedImageWhenScrolling(value: boolean): void;

    /**
     * Gets a value indicating whether the control has been disposed of.
     */
    get_IsDisposed(): boolean;

    // METHODS

    /**
     * Sets the image tile size in the viewer.
     * @param width Image tile width in pixels. Valid values are from 32 to 2048. Default value is 1024.
     * @param height Image tile height in pixels. Valid values are from 32 to 2048. Default value is 1024.
     */
    setTileSize(width: number, height: number): void;

    /**
     * Returns size and resolution of image.
     * @param index Zero-based index of image in image collection.
     */
    getImageInfo(index: number): object;

    /**
     * Sends a request for asynchronous rendering of tiles of the specified images.
     * @param indexes An array of indexes of images in image viewer. All images in viewer will be rendered if array is empty.
     * @param successFunc Function that will be executed if images are rendered successfully.<br/> Here is function prototype "function __success()".
     * @param errorFunc Function that will be executed if images are NOT rendered successfully. Here is function prototype "function __error(message)".<br/> The message parameter contains information about an exception occurred during rendering.
     * @param progressFunc Function that will be executed everytime when image is rendered successfully.<br/> Here is function prototype "function __progress(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>rendered (number): A number of rendered images.</li> <li>total (number): Total number of images.</li> <li>cancelRendering (boolean): Indicates that rendering was interrupted.</li> </ul>
     * @param cancelFunc Function that will be executed if rendering is canceled.<br/> Here is function prototype "function __cancel()".
     */
    renderImages(indexes: number[], successFunc: Function, errorFunc: Function, progressFunc: Function, cancelFunc: Function): void;

    /**
     * Begins the viewer initialization.
     */
    beginInit(): void;

    /**
     * Ends the viewer initialization.
     */
    endInit(): void;

    /**
     * Updates the image viewer.
     */
    update(): void;

    /**
     * Invalidates the specified region of image viewer.
     * @param rect Region that should be invalidated.
     */
    invalidate(rect: object): void;

    /**
     * Transforms point from the browser (screen) coordinate space to the coordinate space of visible area of the image viewer.
     * @param x X coordinate in the browser (screen) coordinate space.
     * @param y Y coordinate in the browser (screen) coordinate space.
     */
    transformPointFromScreenToControl(x: number, y: number): object;

    /**
     * Transforms point from the coordinate space of visible area of the image viewer to the browser (screen) coordinate space.
     * @param x X coordinate in coordinate space of visible area of the image viewer.
     * @param y Y coordinate in coordinate space of visible area of the image viewer.
     */
    transformPointFromControlToScreen(x: number, y: number): object;

    /**
     * Transforms point from the browser (screen) coordinate space to the coordinate space of client area of the image viewer.
     * @param x X coordinate in the browser (screen) coordinate space.
     * @param y Y coordinate in the browser (screen) coordinate space.
     */
    transformPointFromScreenToViewer(x: number, y: number): object;

    /**
     * Transforms point from the coordinate space of client area of the image viewer to the browser (screen) coordinate space.
     * @param x X coordinate in coordinate space of client area of the image viewer.
     * @param y Y coordinate in coordinate space of client area of the image viewer.
     */
    transformPointFromViewerToScreen(x: number, y: number): object;

    /**
     * Transforms point from the coordinate space of visible area of the image viewer to the coordinate space of client area of the image viewer.
     * @param x X coordinate in coordinate space of visible area of the image viewer.
     * @param y Y coordinate in coordinate space of visible area of the image viewer.
     */
    transformPointFromControlToViewer(x: number, y: number): object;

    /**
     * Transforms point from the coordinate space of client area of the image viewer to the coordinate space of visible area of the image viewer.
     * @param x X coordinate in coordinate space of client area of the image viewer.
     * @param y Y coordinate in coordinate space of client area of the image viewer.
     */
    transformPointFromViewerToControl(x: number, y: number): object;

    /**
     * Transforms point from coordinate space of visible area of the image viewer to an image coordinate space.
     * @param x X coordinate in coordinate space of visible area of the image viewer.
     * @param y Y coordinate in coordinate space of visible area of the image viewer.
     */
    transformPointFromControlToImage(x: number, y: number): object;

    /**
     * Transforms point from an image coordinate space to the coordinate space of visible area of the image viewer.
     * @param x X coordinate in image coordinate space.
     * @param y Y coordinate in image coordinate space.
     */
    transformPointFromImageToControl(x: number, y: number): object;

    /**
     * Transforms point from the coordinate space of client area of the image viewer to the image coordinate space.
     * @param x X coordinate in coordinate space of client area of the image viewer.
     * @param y Y coordinate in coordinate space of client area of the image viewer.
     */
    transformPointFromViewerToImage(x: number, y: number): object;

    /**
     * Transforms point from the image coordinate space to the coordinate space of client area of the image viewer.
     * @param x X coordinate in image coordinate space.
     * @param y Y coordinate in image coordinate space.
     */
    transformPointFromImageToViewer(x: number, y: number): object;

    /**
     * Returns the scroll position in the image viewer.
     */
    getScrollPosition(): object;

    /**
     * Scrolls the image viewer to the specified point on image viewer.
     * @param x X coordinate in coordinate space of client area of image viewer.
     * @param y Y coordinate in coordinate space of client area of image viewer.
     */
    scrollTo(x: number, y: number): void;

    /**
     * Scrolls the image viewer to the specified point on image viewer and tries to center the specified point in the viewer if possible.
     * @param x X coordinate in image coordinate space.
     * @param y Y coordinate in image coordinate space.
     */
    scrollToImagePoint(x: number, y: number): void;

    /**
     * Sets the focus to the viewer.
     */
    focus(): void;

    /**
     * Disables the automatic scrolling to the focused image when focused index is changed.
     */
    disableAutoScrollToFocusedImage(): void;

    /**
     * Enables the automatic scrolling to the focused image when focused index is changed.
     */
    enableAutoScrollToFocusedImage(): void;

    /**
     * Returns the image index by location.
     * @param location The point in the coordinate space of client area of image viewer.
     */
    getImageIndexByLocation(location: object): number;

    /**
     * Returns an image by location.
     * @param location The point in the coordinate space of client area of image viewer.
     */
    getImageByLocation(location: object): Vintasoft.Shared.WebImageJS;

    /**
     * Changes the FocusedIndex property to the index of image, which is located in specified point.
     * @param location The point in the coordinate space of client area of image viewer.
     * @param disableAutoScrollToPage Indicates that viewer should not scroll to the foused page automatically.
     */
    setFocusedIndexByLocation(location: object, disableAutoScrollToPage: boolean): boolean;

    /**
     * Sets the index of focused image.
     * @param value New index of focused image.
     * @param successFunc Function that will be executed when the new focused image is displayed.
     */
    setFocusedIndexAsync(value: number, successFunc: Function): void;

    /**
     * Returns an image, which location is closest to the point, with coordinates in the image viewer space.
     * @param point The point with coordinates in the coordinate space of client area of image viewer.
     */
    getNearestImage(point: object): Vintasoft.Shared.WebImageJS;

    /**
     * Zooms the viewer to the specified rectangle of current image.
     * @param destRect The destination rectangle in image space.
     */
    zoomToRectangle(destRect: object): void;

    /**
     * Sets the custom rotation angle, in degrees, for single image in image viewer.
     * @param imageIndex A zero-based index of image in image viewer.
     * @param rotationAngle The rotation angle, in degrees, for image in image viewer. Valid values are 0, 90, 180, 270.
     */
    setCustomViewRotationAngle(imageIndex: number, rotationAngle: number): void;

    /**
     * Returns the custom rotation angle for single image in image viewer.
     * @param imageIndex A zero-based index on image in image viewer.
     */
    getCustomViewRotationAngle(imageIndex: number): number;

    /**
     * Disposes the viewer.
     */
    dispose(): void;

  }

  /**
   * Represents a JavaScript UI control for displaying image thumbnails in web browser that supports HTML5 technology.
   */
  class WebThumbnailViewerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebThumbnailViewerJS"] class.
     * @param controlId Identifier of parent DOM element.
     */
    constructor(controlId: string);

    // PROPERTIES

    /**
     * Gets the image collection associated with the viewer.
     */
    get_Images(): Vintasoft.Shared.WebImageCollectionJS;

    /**
     * Gets an index of focused thumbnail.
     */
    get_FocusedIndex(): number;

    /**
     * Sets an index of focused thumbnail.
     * @param value A zero-based index of focused thumbnail.
     */
    set_FocusedIndex(value: number): void;

    /**
     * Gets an image which should be used for animating thumbnail loading.
     */
    get_ProgressImage(): object;

    /**
     * Sets an image which should be used for animating thumbnail loading.
     * @param value An image which should be used for animating thumbnail loading. Default value is null.
     */
    set_ProgressImage(value: object): void;

    /**
     * Gets the thumbnail size in thumbnail viewer.
     */
    get_ThumbnailSize(): object;

    /**
     * Sets the thumbnail size in thumbnail viewer.
     * @param value Size object ({ width: w, height: h }) that represents thumbnail size in pixels. Width and height can have value from 32 to 1024.
     */
    set_ThumbnailSize(value: object): void;

    /**
     * Gets the style of thumbnails arrangement.
     */
    get_ThumbnailFlowStyle(): Vintasoft.Imaging.WebThumbnailFlowStyleEnumJS;

    /**
     * Sets the style of thumbnails arrangement.
     * @param value An instance of [see="WebThumbnailFlowStyleEnumJS"] class. Default value is "SingleColumn".
     */
    set_ThumbnailFlowStyle(value: Vintasoft.Imaging.WebThumbnailFlowStyleEnumJS): void;

    /**
     * Gets the current number of fixed columns.
     */
    get_ThumbnailColumnCount(): number;

    /**
     * Gets the number of fixed columns.
     */
    get_ThumbnailFixedColumnCount(): number;

    /**
     * Sets the number of fixed columns.
     * @param value New number of fixed columnns. Value must be positive. Default value is 1.
     */
    set_ThumbnailFixedColumnCount(value: number): void;

    /**
     * Gets the scale of thumbnails.
     */
    get_ThumbnailScale(): Vintasoft.Imaging.WebThumbnailScaleEnumJS;

    /**
     * Sets the scale of thumbnails.
     * @param value An instance of [see="WebThumbnailScaleEnumJS"] class. Default value is "Normal".
     */
    set_ThumbnailScale(value: Vintasoft.Imaging.WebThumbnailScaleEnumJS): void;

    /**
     * Gets a value indicating whether the thumbnail viewer generates only visible thumbnails.
     */
    get_GenerateOnlyVisibleThumbnails(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer generates only visible thumbnails.
     * @param value True - the thumbnail viewer generates only visible thumbnails; False - the thumbnail viewer generates all thumbnails. Default value is True.
     */
    set_GenerateOnlyVisibleThumbnails(value: boolean): void;

    /**
     * Gets a value indicating whether the thumbnail viewer changes focus when mouse hovers the thumbnail.
     */
    get_FocusOnHover(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer changes focus when mouse hovers the thumbnail.
     * @param value True - the thumbnail viewer changes focus when mouse hovers the thumbnail; False - the thumbnail viewer does not change focus when mouse hovers the thumbnail. Default value is False.
     */
    set_FocusOnHover(value: boolean): void;

    /**
     * Gets a thumbnail margin.
     */
    get_ThumbnailMargin(): number;

    /**
     * Sets a thumbnail margin.
     * @param value Thumbnail margin. Valid value is 0 and any positive value. Default value is 3.
     */
    set_ThumbnailMargin(value: number): void;

    /**
     * Gets a thumbnail padding.
     */
    get_ThumbnailPadding(): object;

    /**
     * Sets a thumbnail padding.
     * @param value Thumbnail padding. Valid values are: any positive number OR array with positive values [top, right, bottom, left]. Default value is [0, 0, 0, 0].
     */
    set_ThumbnailPadding(value: object): void;

    /**
     * Gets an array with indexes of selected thumbnails.
     */
    get_SelectedIndices(): number[];

    /**
     * Sets an array with indexes of selected thumbnails.
     * @param value An array with indexes of selected thumbnails.
     */
    set_SelectedIndices(value: number[]): void;

    /**
     * Gets value indicating whether the thumbnail viewer allows multiple thumbnails to be selected.
     */
    get_MultiSelect(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows multiple thumbnails to be selected.
     * @param value True - the thumbnail viewer allows to select multiple thumbnails; False - the thumbnail viewer does not allow to select multiple thumbnails. Default value is True.
     */
    set_MultiSelect(value: boolean): void;

    /**
     * Gets the rotation angle, in degrees, of image view in image viewer.
     */
    get_ViewRotationAngle(): number;

    /**
     * Sets the rotation angle, in degrees, of image view in image viewer.
     * @param value The rotation angle, in degrees, of images in thumbnail viewer. Valid values are 0, 90, 180, 270. Default value is 0.
     */
    set_ViewRotationAngle(value: number): void;

    /**
     * Gets a value indicating whether rendered thumbnails must be saved in cache on server.
     */
    get_UseCache(): boolean;

    /**
     * Sets a value indicating whether rendered thumbnails must be saved in cache on server.
     * @param value True - rendered thumbnails must be saved in cache on server; false - rendered thumbnails must NOT be saved in cache on server. Default value is True.
     */
    set_UseCache(value: boolean): void;

    /**
     * Gets a format in which the viewer want to receive thumbnails.
     */
    get_ThumbnailsFormat(): Vintasoft.Shared.WebImageTypeEnumJS;

    /**
     * Sets a format in which the viewer want to receive thumbnails.
     * @param value An instance of [see="WebImageTypeEnumJS"] class that defines a format in which the viewer want to receive thumbnails. Default value is "Url".
     */
    set_ThumbnailsFormat(value: Vintasoft.Shared.WebImageTypeEnumJS): void;

    /**
     * Gets the appearance of the normal thumbnail.
     */
    get_NormalThumbnailAppearance(): Vintasoft.Imaging.WebThumbnailAppearanceJS;

    /**
     * Sets the appearance of the normal thumbnail.
     * @param value [see="WebThumbnailAppearanceJS"] of the normal thumbnail.
     */
    set_NormalThumbnailAppearance(value: Vintasoft.Imaging.WebThumbnailAppearanceJS): void;

    /**
     * Gets the appearance of the focused thumbnail.
     */
    get_FocusedThumbnailAppearance(): Vintasoft.Imaging.WebThumbnailAppearanceJS;

    /**
     * Sets the appearance of the focused thumbnail.
     * @param value [see="WebThumbnailAppearanceJS"] of the focused thumbnail.
     */
    set_FocusedThumbnailAppearance(value: Vintasoft.Imaging.WebThumbnailAppearanceJS): void;

    /**
     * Gets the appearance of the hovered thumbnail.
     */
    get_HoveredThumbnailAppearance(): Vintasoft.Imaging.WebThumbnailAppearanceJS;

    /**
     * Sets the appearance of the hovered thumbnail.
     * @param value [see="WebThumbnailAppearanceJS"] of the hovered thumbnail.
     */
    set_HoveredThumbnailAppearance(value: Vintasoft.Imaging.WebThumbnailAppearanceJS): void;

    /**
     * Gets the appearance of the not ready thumbnail.
     */
    get_NotReadyThumbnailAppearance(): Vintasoft.Imaging.WebThumbnailAppearanceJS;

    /**
     * Sets the appearance of the not ready thumbnail.
     * @param value [see="WebThumbnailAppearanceJS"] of the not ready thumbnail.
     */
    set_NotReadyThumbnailAppearance(value: Vintasoft.Imaging.WebThumbnailAppearanceJS): void;

    /**
     * Gets the appearance of the selected thumbnail.
     */
    get_SelectedThumbnailAppearance(): Vintasoft.Imaging.WebThumbnailAppearanceJS;

    /**
     * Sets the appearance of the selected thumbnail.
     * @param value [see="WebThumbnailAppearanceJS"] of the selected thumbnail.
     */
    set_SelectedThumbnailAppearance(value: Vintasoft.Imaging.WebThumbnailAppearanceJS): void;

    /**
     * Gets the image cache manager associated with the viewer.
     */
    get_ImageCacheManager(): Vintasoft.Imaging.Utils.WebImageCacheManagerJS;

    /**
     * Sets the image cache manager of viewer.
     * @param value [see="WebImageCacheManagerJS"] object.
     */
    set_ImageCacheManager(value: Vintasoft.Imaging.Utils.WebImageCacheManagerJS): void;

    /**
     * Gets a value indicating whether viewer must synchronize the image cache with image collection state.
     */
    get_SyncCacheWithImages(): boolean;

    /**
     * Sets a value indicating whether viewer must synchronize the image cache with image collection state.
     * @param value True - viewer must clear cache for images, which are deleted from the image collection; false - viewer must not change cache for images when image collection is changed. Default value is True.
     */
    set_SyncCacheWithImages(value: boolean): void;

    /**
     * Gets an identifier of the parent DOM element of viewer.
     */
    get_ControlId(): string;

    /**
     * Gets the parent DOM element for viewer.
     */
    get_Control(): object;

    /**
     * Gets a function that should be executed when "contextmenu" event occurs in the viewer.
     */
    get_ContextMenuFunc(): Function;

    /**
     * Sets a function that should be executed when "contextmenu" event occurs in the viewer.
     * @param value A function OR null that equals to "function(event){ return false; }".
     */
    set_ContextMenuFunc(value: Function): void;

    /**
     * Gets a value indicating whether the control has been disposed of.
     */
    get_IsDisposed(): boolean;

    /**
     * Gets a value indicating whether the viewer must display caption for thumbnail.
     */
    get_DisplayThumbnailCaption(): boolean;

    /**
     * Sets a value indicating whether the viewer must display caption for thumbnail.
     * @param value A value indicating whether the thumbnail have caption. Default value is false.
     */
    set_DisplayThumbnailCaption(value: boolean): void;

    /**
     * Gets a format string for thumbnail caption.
     */
    get_ThumbnailCaptionFormat(): string;

    /**
     * Sets a thumbnail caption format string.
     * @param value Thumbnail caption format string. Default value is "{ImageNumber}".
     */
    set_ThumbnailCaptionFormat(value: string): void;

    /**
     * Gets the anchor style of the thumbnail caption in thumbnail.
     */
    get_ThumbnailCaptionAnchor(): Vintasoft.Imaging.WebImageAnchorTypeEnumJS;

    /**
     * Sets the anchor style of the thumbnail caption in thumbnail.
     * @param value An instance of [see="WebImageAnchorTypeEnumJS"] class. Default value is "Bottom".
     */
    set_ThumbnailCaptionAnchor(value: Vintasoft.Imaging.WebImageAnchorTypeEnumJS): void;

    /**
     * Gets the timeout, in milliseconds, which are used for resizing content in the thumbnail viewer.
     */
    get_ResizeTimeout(): number;

    /**
     * Sets the timeout, in milliseconds, which are used for resizing content in the thumbnail viewer.
     * @param value The timeout, in milliseconds, which are used for resizing content in the thumbnail viewer. Minimum value is 5, maximum value is 1000. Default value is 500.
     */
    set_ResizeTimeout(value: number): void;

    /**
     * Gets a value indicating whether the thumbnail viewer allows to drag thumbnails.
     */
    get_CanDragThumbnails(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows to drag thumbnails.
     * @param value True - the thumbnail viewer allows to drag thumbnails; False - the thumbnail viewer does not allow to drag thumbnails. Default value is False.
     */
    set_CanDragThumbnails(value: boolean): void;

    /**
     * Gets a value indicating whether the thumbnail viewer allows to navigate thumbnails using keyboard.
     */
    get_CanNavigateThumbnailsUsingKeyboard(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows to navigate thumbnails using keyboard.
     * @param value A value indicating whether the thumbnail viewer allows to navigate thumbnails using keyboard.
     */
    set_CanNavigateThumbnailsUsingKeyboard(value: boolean): void;

    /**
     * Gets a value indicating whether the thumbnail viewer allows to select thumbnails using keyboard ("Shift" key).
     */
    get_CanSelectThumbnailsUsingKeyboard(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows to select thumbnails using keyboard ("Shift" key).
     * @param value A value indicating whether the thumbnail viewer allows to select thumbnails using keyboard.
     */
    set_CanSelectThumbnailsUsingKeyboard(value: boolean): void;

    /**
     * Gets a value indicating whether the thumbnail viewer allows to delete thumbnails using keyboard ("Delete" key).
     */
    get_CanDeleteThumbnailsUsingKeyboard(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows to delete thumbnails using keyboard ("Delete" key).
     * @param value A value indicating whether the thumbnail viewer allows to delete thumbnails using keyboard.
     */
    set_CanDeleteThumbnailsUsingKeyboard(value: boolean): void;

    // METHODS

    /**
     * Gets the main (master) viewer for the viewer.
     */
    get_MasterViewer(): object;

    /**
     * Sets the main (master) viewer for the viewer.
     * @param masterViewer [see="WebImageViewerJS"] object. Default value is null.
     */
    set_MasterViewer(masterViewer: Vintasoft.Imaging.UI.WebImageViewerJS): void;

    /**
     * Sets the main (master) viewer for the viewer.
     * @param masterViewer [see="WebThumbnailViewerJS"] object. Default value is null.
     */
    set_MasterViewer(masterViewer: Vintasoft.Imaging.UI.WebThumbnailViewerJS): void;

    /**
     * Sets the thumbnail size in thumbnail viewer.
     * @param width Thumbnail width in pixels. Valid values are from 32 to 1024. Default value is 100.
     * @param height Thumbnail height in pixels. Valid values are from 32 to 1024. Default value is 100.
     */
    setThumbnailSize(width: number, height: number): void;

    /**
     * Returns information about image: image size; image resolution; flag that determines that image has vector decoder.
     * @param index Zero-based index of image in image collection.
     */
    getImageInfo(index: number): object;

    /**
     * Returns the canvas of specified thumbnail.
     * @param index Zero-based index of image in image collection.
     */
    getThumbnailCanvas(index: number): object;

    /**
     * Begins the viewer initialization.
     */
    beginInit(): void;

    /**
     * Ends the viewer initialization.
     */
    endInit(): void;

    /**
     * Scrolls the thumbnail viewer to the specified thumbnail.
     * @param index Zero-based thumbnail index.
     */
    scrollTo(index: number): void;

    /**
     * Updates the thumbnail viewer.
     */
    update(): void;

    /**
     * Invalidates the specified region of thumbnail viewer.
     * @param rect Region that should be invalidated.
     */
    invalidate(rect: object): void;

    /**
     * Sets the focus to the viewer.
     */
    focus(): void;

    /**
     * Sets the custom rotation angle, in degrees, for single thumbnail in thumbnail viewer.
     * @param imageIndex A zero-based index of thumbnail in thumbnail viewer.
     * @param rotationAngle The rotation angle, in degrees, for thumbnail in thumbnail viewer. Valid values are 0, 90, 180, 270.
     */
    setCustomViewRotationAngle(imageIndex: number, rotationAngle: number): void;

    /**
     * Returns the custom rotation angle for single image in thumbnail viewer.
     * @param imageIndex A zero-based index on image in thumbnail viewer.
     */
    getCustomViewRotationAngle(imageIndex: number): number;

    /**
     * Disposes the viewer.
     */
    dispose(): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.UI.Panels {

  // ===== CLASSES =====

  /**
   * A web UI panel, which contains [see="WebUiElementJS"] objects and allows to change the panel state using button.
   */
  class WebUiPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPanelJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects, which must be placed in panel.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiPanelJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects, which must be placed in panel.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton A string identifier of button, which allows to change the panel state.
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], settings: object, stateButton: string);

    /**
     * Initializes a new instance of the [see= "WebUiPanelJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects, which must be placed in panel.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], settings: object);

    /**
     * Initializes a new instance of the [see= "WebUiPanelJS"] class.
     * @param items An array of identifiers of [see="WebUiElementJS"] objects, which must be placed in panel.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(items: string[], settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiPanelJS"] class.
     * @param items An array of identifiers of [see="WebUiElementJS"] objects, which must be placed in panel.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton A string identiifier of button, which allows to change the panel state.
     */
    constructor(items: string[], settings: object, stateButton: string);

    /**
     * Initializes a new instance of the [see= "WebUiPanelJS"] class.
     * @param items An array of identifier of [see="WebUiElementJS"] objects, which must be placed in panel.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(items: string[], settings: object);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets the button, which allows to change the panel state
     */
    get_StateButton(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS;

    // METHODS

    /**
     * Gets a markup of the state button.
     */
    get_StateButtonDomElement(): object;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys this panel.
     */
    destroy(): void;

  }

  /**
   * A container for UI panels.
   */
  class WebUiPanelContainerJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPanelContainerJS"] class.
     * @param panels An array of [see="WebUiPanelJS"] objects.
     * @param panelsContainerSettings The settings for container, which contains UI panels. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param buttonsContainerSettings The settings for container, which contains buttons, which allow to navigate between panels. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the container state.
     */
    constructor(panels: Vintasoft.Imaging.UI.Panels.WebUiPanelJS, panelsContainerSettings: object, buttonsContainerSettings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiPanelContainerJS"] class.
     * @param panels An array of [see="WebUiPanelJS"] objects.
     * @param panelsContainerSettings The settings for container, which contains UI panels. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param buttonsContainerSettings The settings for container, which contains buttons, which allow to navigate between panels. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(panels: Vintasoft.Imaging.UI.Panels.WebUiPanelJS, panelsContainerSettings: object, buttonsContainerSettings: object);

    // PROPERTIES

    /**
     * Gets a value indicating whether the panel has the active panel.
     */
    get_HasActivePanel(): boolean;

    /**
     * Sets a value indicating whether the panel has the active panel.
     * @param value True - the panel has active panel; false - the panel does not have active panel.
     */
    set_HasActivePanel(value: boolean): void;

    /**
     * Gets the active panel of this panel.
     */
    get_ActivePanel(): Vintasoft.Imaging.UI.Panels.WebUiPanelJS;

    /**
     * Sets the active panel of this panel.
     * @param value The [see="WebUiPanelJS"] object, which defines the active panel of this panel OR "null" if active panel is not defined.
     */
    set_ActivePanel(value: Vintasoft.Imaging.UI.Panels.WebUiPanelJS): void;

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI side panel.
   */
  class WebUiSidePanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSidePanelJS"] class.
     * @param panels An array of [see="WebUiPanelJS"] objects.
     */
    constructor(panels: Vintasoft.Imaging.UI.Panels.WebUiPanelJS);

    // PROPERTIES

    /**
     * Gets a collection of panels.
     */
    get_PanelsCollection(): Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS;

    /**
     * Gets the active panel of this side panel.
     */
    get_ActivePanel(): Vintasoft.Imaging.UI.Panels.WebUiPanelJS;

    /**
     * Sets the active panel of this side panel.
     * @param value The [see="WebUiPanelJS"] object, which defines the active panel of this side panel OR "null" if active panel is not defined.
     */
    set_ActivePanel(value: Vintasoft.Imaging.UI.Panels.WebUiPanelJS): void;

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI panel, which contains [see="WebUiElementJS"] objects and allows to change the panel state using button and supports context menu.
   */
  class WebUiPanelWithContextMenuJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPanelWithContextMenuJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects, which must be placed in panel.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS, settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiPanelWithContextMenuJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects, which must be placed in panel.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS, settings: object);

    // PROPERTIES

    /**
     * Gets a context menu associated with this panel.
     */
    get_ContextMenu(): Vintasoft.Imaging.UI.UIElements.WebUiContextMenuJS;

    /**
     * Sets a context menu associated with this panel.
     * @param value The [see="WebUiContextMenuJS"] object OR null.
     */
    set_ContextMenu(value: Vintasoft.Imaging.UI.UIElements.WebUiContextMenuJS): void;

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Destroys this UI element.
     */
    destroy(): void;

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI element that represents horizontal menu. Menu control visibility of menu items and displays not visible menu items in drop down menu.
   */
  class WebUiMenuJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiMenuJS"] class.
     * @param items An array of identifiers of [see="WebUiElementJS"] objects, which must be placed in menu.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'mainMenu'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes.</li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton A string identiifier of button, which allows to change the menu state.
     */
    constructor(items: string[], settings: object, stateButton: string);

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.UI.UIElements {

  // ===== CLASSES =====

  /**
   * Represents a state of [see="WebUiElementJS"].
   */
  class WebUiElementStateJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiElementStateJS"] class.
     * @param name Name of UI element state.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the UI element when state become active. Optional parameter. Example: "cssClass:'visited'".</li> <li>title (string): Title, which will be applied to the UI element when state become active. Optional parameter. Example: "title:'Visited element'".</li> <li>callback (object): A function, which will be called when state become active.<br/> Here is function prototype "function __callback(UIElement)", where "UIElement" parameter is an instance of [see="WebUiElementJS"] type.<br /> Optional parameter. Example: "callback: function(uiElement){ uiElement.set_IsEnabled(false) }". </li> </ul>
     */
    constructor(name: string, settings: object);

    /**
     * Initializes a new instance of the [see= "WebUiElementStateJS"] class.
     * @param name Name of UI element state.
     */
    constructor(name: string);

    // PROPERTIES

    /**
     * Gets the name of current state element.
     */
    get_Name(): string;

    /**
     * Gets the CSS class or classes, which will be applied to the UI element when state become active.
     */
    get_CssClass(): string;

    /**
     * Gets the title, which will be applied to the UI element when state become active.
     */
    get_Title(): string;

    /**
     * Gets a function, which will be called when state become active.
     */
    get_Callback(): Function;

  }

  /**
   * Represents a collection of UI element states (collection of instances of [see="WebUiElementStateJS"] class).
   */
  class WebUiElementStateCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiElementStateCollectionJS"] class.
     * @param states Array of [see="WebUiElementStateJS"] objects.
     */
    constructor(states: Vintasoft.Imaging.UI.UIElements.WebUiElementStateJS[]);

    // METHODS

    /**
     * Returns UI element state.
     * @param index Zero-based index of UI element state in collection.
     */
    getItem(index: number): Vintasoft.Imaging.UI.UIElements.WebUiElementStateJS;

    /**
     * Returns the collection as array of [see="WebUiElementStateJS"] objects.
     */
    toArray(): Vintasoft.Imaging.UI.UIElements.WebUiElementStateJS[];

    /**
     * Returns UI element state with specified name.
     * @param name Name of UI element state.
     */
    getItemByName(name: string): Vintasoft.Imaging.UI.UIElements.WebUiElementStateJS;

    /**
     * Returns the index of the specified [see="WebUiElementStateJS"] object.
     * @param state The [see="WebUiElementStateJS"] object to search for.
     */
    indexOf(state: Vintasoft.Imaging.UI.UIElements.WebUiElementStateJS): number;

    /**
     * Determines whether the collection contains specified UI element state.
     * @param state A [see="WebUiElementStateJS"] object.
     */
    contains(state: Vintasoft.Imaging.UI.UIElements.WebUiElementStateJS): boolean;

  }

  /**
   * Represents the base web UI element.
   */
  class WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiElementJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element properties. Example: "properties:{'title':'Hello', 'id':'helloId'}"</li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, which contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the DOM element associated with this UI element.
     */
    get_DomElement(): object;

    /**
     * Gets the root control that contains this UI element.
     */
    get_RootControl(): Vintasoft.Imaging.UI.UIElements.WebUiControlJS;

    /**
     * Gets the identifier under which UI element is registered in [see="WebUiElementsFactoryJS"].
     */
    get_RegisteredId(): string;

    /**
     * Gets the localization identifier of UI element.
     */
    get_LocalizationId(): string;

    /**
     * Gets a value indicating whether the UI element is enabled.
     */
    get_IsEnabled(): boolean;

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a state collection of UI element.
     */
    get_StateCollection(): Vintasoft.Imaging.UI.UIElements.WebUiElementStateCollectionJS;

    /**
     * Gets an active UI element state.
     */
    get_ActiveState(): Vintasoft.Imaging.UI.UIElements.WebUiElementStateJS;

    /**
     * Sets an active state of UI element.
     * @param value UI element state.
     */
    set_ActiveState(value: object): void;

    // METHODS

    /**
     * Sets the master element for this element.
     * @param masterElement Master element.
     */
    setMasterElement(masterElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS): void;

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

    /**
     * Destroys the UI element.
     */
    destroy(): void;

    /**
     * Shows the UI element.
     */
    show(): void;

    /**
     * Hides the UI element.
     */
    hide(): void;

    /**
     * Returns a value indicating whether the UI element is visible.
     */
    isVisible(): boolean;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): object[];

  }

  /**
   * A web UI element that represents '&lt;br/&gt;' element of markup.
   */
  class WebUiBrElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiBrElementJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

  }

  /**
   * A web UI element that represents '&lt;textarea&gt;' element of markup.
   */
  class WebUiTextareaElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiTextareaElementJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>text (string): Text of element. Example: "text:'Hello world!'".</li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

  }

  /**
   * A web UI element that represents '&lt;div&gt;' element of markup.
   */
  class WebUiDivElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDivElementJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass: 'button remove'".</li> <li>innerText (string): An inner text for DIV element.</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css: {'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

  }

  /**
   * A web UI element that represents '&lt;div&gt;' button element of markup.
   */
  class WebUiButtonJS extends Vintasoft.Imaging.UI.UIElements.WebUiDivElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiButtonJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>isDropDown (bool): Indicates whether this button contains drop down menu.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets a value indicating whether the UI element is selected.
     */
    get_IsSelected(): boolean;

    /**
     * Sets a value indicating whether the UI element is selected.
     * @param value Value indicating whether the UI element is selected.
     */
    set_IsSelected(value: boolean): void;

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

  }

  /**
   * A web UI element that represents '&lt;div&gt;' progress element of markup.
   */
  class WebUiProgressJS extends Vintasoft.Imaging.UI.UIElements.WebUiDivElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiProgressJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Sets the progress value.
     * @param value Progress value. Valid values are from 1 to 100.
     */
    progress(value: number): void;

  }

  /**
   * A web UI element that represents '&lt;input&gt;' element of markup.
   */
  class WebUiInputElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiInputElementJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>type (string): Shortcut for 'type' attribute of element (equals - "properties:{'type':'number'}").</li> <li>value (string): Shortcut for 'value' attribute of element (equals - "properties:{'value':'25'}"). Don't use for "type='file'" input.</li> <li>name (string): Shortcut for 'name' attribute of element (equals - "properties:{'name':'someName'}").</li> <li>src (string): Shortcut for 'src' attribute of element (equals - "properties:{'src':'/images/image.png'}" ). For "type='image'" input.</li> <li>min (number): Shortcut for 'min' attribute of element (equals - "properties:{'min': 0}"). For "type='number'" input.</li> <li>max (number): Shortcut for 'max' attribute of element (equals - "properties:{'max': 100}"). For "type='number'" input.</li> <li>step (number): Shortcut for 'step' attribute of element (equals - "properties:{'step': 10}"). For "type='number'" input.</li> <li>accept (string): Shortcut for 'accept' attribute of element (equals - "properties:{'accept':'.pdf, .jpeg '}"). For "type='file'" input.</li> <li>multiple (boolean): Shortcut for 'multiple' attribute of element (equals - "properties:{'multiple': true}"). For "type='file'" input.</li> <li>checked (boolean): Shortcut for 'checked' attribute of element (equals - "properties:{'checked': true}"). For "type='checkbox'" or "type='radio'" input.</li> <li>disabled (boolean): Shortcut for 'disabled' attribute of element (equals - "properties:{'disabled': true}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

  }

  /**
   * A web UI element that represents typed '&lt;input&gt;' element of markup.
   */
  class WebUiTypedInputElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiInputElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiTypedInputElementJS"] class.
     * @param settings The settings of UI element.
     */
    constructor(settings: object);

  }

  /**
   * A web UI element that represents '&lt;input type="text"&gt;' element of markup.
   */
  class WebUiTextInputJS extends Vintasoft.Imaging.UI.UIElements.WebUiTypedInputElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiTextInputJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>type (string): <b>Important:</b> value will be ignored.</li> <li>value (string): Shortcut for 'value' attribute of element (equals - "properties:{'value':'25'}"). </li> <li>name (string): Shortcut for 'name' attribute of element (equals - "properties:{'name':'someName'}").</li> <li>disabled (boolean): Shortcut for 'disabled' attribute of element (equals - "properties:{'disabled': true}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI element that represents '&lt;input type="number"&gt;' element of markup.
   */
  class WebUiNumericInputJS extends Vintasoft.Imaging.UI.UIElements.WebUiTypedInputElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiNumericInputJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>type (string): <b>Important:</b> value will be ignored.</li> <li>value (number): Shortcut for 'value' attribute of element (equals - "properties:{'value': 25}"). </li> <li>name (string): Shortcut for 'name' attribute of element (equals - "properties:{'name':'someName'}").</li> <li>min (number): Shortcut for 'min' attribute of element (equals - "properties:{'min': 0}"). For "type='number'" input.</li> <li>max (number): Shortcut for 'max' attribute of element (equals - "properties:{'max': 100}"). For "type='number'" input.</li> <li>step (number): Shortcut for 'step' attribute of element (equals - "properties:{'step': 10}"). For "type='number'" input.</li> <li>disabled (boolean): Shortcut for 'disabled' attribute of element (equals - "properties:{'disabled': true}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI element that represents '&lt;input type="button"&gt;' element of markup.
   */
  class WebUiButtonInputJS extends Vintasoft.Imaging.UI.UIElements.WebUiTypedInputElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiButtonInputJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>type (string): <b>Important:</b> value will be ignored.</li> <li>value (string): Shortcut for 'value' attribute of element (equals - "properties:{'value':'25'}"). </li> <li>name (string): Shortcut for 'name' attribute of element (equals - "properties:{'name':'someName'}").</li> <li>disabled (boolean): Shortcut for 'disabled' attribute of element (equals - "properties:{'disabled': true}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI element that represents '&lt;input type="image"&gt;' element of markup.
   */
  class WebUiImageInputJS extends Vintasoft.Imaging.UI.UIElements.WebUiTypedInputElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiImageInputJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>type (string): <b>Important:</b> value will be ignored.</li> <li>value (string): Shortcut for 'value' attribute of element (equals - "properties:{'value':'25'}"). </li> <li>name (string): Shortcut for 'name' attribute of element (equals - "properties:{'name':'someName'}").</li> <li>src (string): Shortcut for 'src' attribute of element (equals - "properties:{'src':'/images/image.png'}"). For "type='image'" input.</li> <li>disabled (boolean): Shortcut for 'disabled' attribute of element (equals - "properties:{'disabled': true}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI element that represents '&lt;input type="checkbox"&gt;' element of markup.
   */
  class WebUiCheckboxInputJS extends Vintasoft.Imaging.UI.UIElements.WebUiTypedInputElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiCheckboxInputJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>type (string): <b>Important:</b> value will be ignored.</li> <li>value (string): Shortcut for 'value' attribute of element (equals - "properties:{'value':'25'}"). </li> <li>name (string): Shortcut for 'name' attribute of element (equals - "properties:{'name':'someName'}").</li> <li>checked (boolean): Shortcut for 'checked' attribute of element (equals - "properties:{'checked': true}").</li> <li>disabled (boolean): Shortcut for 'disabled' attribute of element (equals - "properties:{'disabled': true}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI element that represents '&lt;input type="radio"&gt;' element of markup.
   */
  class WebUiRadioInputJS extends Vintasoft.Imaging.UI.UIElements.WebUiTypedInputElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiRadioInputJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>type (string): <b>Important:</b> value will be ignored.</li> <li>value (string): Shortcut for 'value' attribute of element (equals - "properties:{'value':'25'}"). </li> <li>name (string): Shortcut for 'name' attribute of element (equals - "properties:{'name':'someName'}").</li> <li>checked (boolean): Shortcut for 'checked' attribute of element (equals - "properties:{'checked': true}").</li> <li>disabled (boolean): Shortcut for 'disabled' attribute of element (equals - "properties:{'disabled': true}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI element that represents '&lt;input type="file"&gt;' element of markup.
   */
  class WebUiFileInputJS extends Vintasoft.Imaging.UI.UIElements.WebUiTypedInputElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiFileInputJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>type (string): <b>Important:</b> value will be ignored.</li> <li>name (string): Shortcut for 'name' attribute of element (equals - "properties:{'name':'someName'}").</li> <li>accept (string): Shortcut for 'accept' attribute of element (equals - "properties:{'accept':'.pdf, .jpeg '}"). For "type='file'" input.</li> <li>multiple (boolean): Shortcut for 'multiple' attribute of element (equals - "properties:{'multiple': true}"). For "type='file'" input.</li> <li>disabled (boolean): Shortcut for 'disabled' attribute of element (equals - "properties:{'disabled': true}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI element that represents '&lt;label&gt;' element of markup.
   */
  class WebUiLabelElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiLabelElementJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>text (string): Text of element. Example: "text:'Hello world!'".</li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>for (string): Shortcut for 'for' attribute of element (equals - "properties:{'for': 'numberInputId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets an index of header element that wraps label element.
     */
    get_HeaderIndex(): number;

    /**
     * Sets an index of header element that wraps label element.
     * @param value An index of header element that wraps label element. Supported values: 0 - header element is not created; 1 - "H1" element wraps label element; ...; 6 - "H6" element wraps label element.
     */
    set_HeaderIndex(value: number): void;

    // METHODS

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

  }

  /**
   * A web UI element that represents '&lt;option&gt;' element of markup.
   */
  class WebUiOptionElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiOptionElementJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>text (string): Text of element. Example: "text:'Hello world!'".</li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>value (string): Shortcut for 'value' attribute of element (equals - "properties:{'value':'25'}").</li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

  }

  /**
   * A web UI element that represents '&lt;select&gt;' element of markup.
   */
  class WebUiSelectElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiSelectElementJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element properties.Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>options (object): Array of settings of "option" elements. Each object has the following parameters:<br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'firstOpt'".</li> <li>text (string): Text of option element. Example: "text:'first option'".</li> <li>value (string): Value of option element.</li> <li>localizationId (string): Unique localization ID.</li> </ul> </li> <li>selectedIndex (number): The index of selected option in a drop-down list.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the zero-based index of selected option.
     */
    get_SelectedIndex(): number;

    /**
     * Sets the zero-based index of selected option.
     * @param value The zero-based index of selected option.
     */
    set_SelectedIndex(value: number): void;

    /**
     * Gets the text of selected option.
     */
    get_SelectedText(): string;

    // METHODS

    /**
     * Adds new option to this select element.
     * @param optionElement An instance of WebUiOptionElementJS class that should be added to this select element.
     */
    addOption(optionElement: Vintasoft.Imaging.UI.UIElements.WebUiOptionElementJS): void;

    /**
     * Returns a value indicating whether this select element contains option with specified text.
     * @param text An option text that should be searched in this select element.
     */
    containsOption(text: string): boolean;

    /**
     * Sets the selected option by the text of the option element.
     * @param value The text of the option element.
     */
    setSelectedOptionByOptionText(value: string): void;

    /**
     * Clear options from this select element.
     */
    clear(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): object[];

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * Represents a collection of web UI elements (collection of instances of [see="WebUiElementJS"] class).
   */
  class WebUiElementCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiElementCollectionJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects OR element identifiers.
     * @param readOnly A value indicating whether the collection is read only.
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], readOnly: boolean);

    /**
     * Initializes a new instance of the [see= "WebUiElementCollectionJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects OR element identifiers.
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[]);

    // PROPERTIES

    /**
     * Gets the number of items contained in the collection.
     */
    get_Count(): number;

    /**
     * Gets a value indicating whether the collection is read only.
     */
    get_IsReadOnly(): boolean;

    // METHODS

    /**
     * Returns an item.
     * @param index Zero-based index of item in collection.
     */
    getItem(index: number): Vintasoft.Imaging.UI.UIElements.WebUiElementJS;

    /**
     * Returns the first item with specified registered identifier.
     * @param id The registered identifier of UI element.
     */
    getItemByRegisteredId(id: string): Vintasoft.Imaging.UI.UIElements.WebUiElementJS;

    /**
     * Returns all items with specified registered identifier.
     * @param id The registered identifier of UI element.
     */
    getItemsByRegisteredId(id: string): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Clears the collection.
     */
    clearItems(): void;

    /**
     * Adds an item to the end of the collection.
     * @param item A [see="WebUiElementJS"] to insert.
     */
    addItem(item: Vintasoft.Imaging.UI.UIElements.WebUiElementJS): void;

    /**
     * Adds an item to the end of the collection.
     * @param item An identifier of element to insert.
     */
    addItem(item: string): void;

    /**
     * Inserts an item into collection at the specified index.
     * @param index The zero-based index at which item should be inserted.
     * @param item A [see="WebUiElementJS"] to insert.
     */
    insertItem(index: number, item: Vintasoft.Imaging.UI.UIElements.WebUiElementJS): void;

    /**
     * Inserts an item into collection at the specified index.
     * @param index The zero-based index at which item should be inserted.
     * @param item An identifier of element to insert.
     */
    insertItem(index: number, item: string): void;

    /**
     * Removes specified item from the collection.
     * @param item [see="WebUiElementJS"] to remove.
     */
    removeItem(item: Vintasoft.Imaging.UI.UIElements.WebUiElementJS): void;

    /**
     * Removes the specified item from the collection.
     * @param index The zero-based index of item which should be removed.
     */
    removeItemAt(index: number): void;

    /**
     * Brings the specified item to the specified position in the collection.
     * @param item [see="WebUiElementJS"] to move.
     * @param position The zero-based index of new position.
     */
    bringItemTo(item: Vintasoft.Imaging.UI.UIElements.WebUiElementJS, position: number): void;

    /**
     * Swaps two items in the collection.
     * @param firstIndex Zero-based index of the first item.
     * @param secondIndex Zero-based index of the second item.
     */
    swapItems(firstIndex: number, secondIndex: number): void;

    /**
     * Returns the collection as array.
     */
    toArray(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Returns the index of the specified [see="WebUiElementJS"] object.
     * @param item The [see="WebUiElementJS"] object to search for.
     */
    indexOf(item: Vintasoft.Imaging.UI.UIElements.WebUiElementJS): number;

  }

  /**
   * A web UI element that represents DIV container for specified UI elements.
   */
  class WebUiElementContainerJS extends Vintasoft.Imaging.UI.UIElements.WebUiDivElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiElementContainerJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects.
     * @param settings The settings of this UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], settings: object);

    /**
     * Initializes a new instance of the [see= "WebUiElementContainerJS"] class.
     * @param items A [see="WebUiElementCollectionJS"] object.
     * @param settings The settings of this UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS, settings: object);

    // PROPERTIES

    /**
     * Gets the collection of UI elements contained within this [see="WebUiElementContainerJS"].
     */
    get_Items(): Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS;

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Returns item.
     * @param index Zero-based index of item in items collection.
     */
    getItem(index: number): Vintasoft.Imaging.UI.UIElements.WebUiElementJS;

    /**
     * Returns the first item with specified registered identifier.
     * @param id The registered identifier of UI element.
     */
    getItemByRegisteredId(id: string): Vintasoft.Imaging.UI.UIElements.WebUiElementJS;

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI element that represents text label and button with drop-down list.
   */
  class WebUiLabelWithDropDownListJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiLabelWithDropDownListJS"] class.
     * @param settings The settings of this UI element. The settings parameter has the following properties:<br /> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the selected value.
     */
    get_SelectedValue(): object;

    /**
     * Sets the selected value.
     * @param value The selected value.
     */
    set_SelectedValue(value: object): void;

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

  }

  /**
   * A web UI element that represents button with the following behaviour:<br /> <ul> <li>If button is clicked when drop-down button list is hidden, button opens the drop-down button list.</li> <li>If button is clicked when drop-down button list is opened, button closes the drop-down button list.</li> <li>If mouse is clicked outside the drop-down button list when drop-down button list is opened, button closes the drop-down button list.</li> <li>If button from drop-down button list is clicked, active button is changed.</li> <li>Button allows to get/set the active button.</li> <li>Button displays image of active button.</li> <li>Button allows to specify the layout direction, horizontal aligninment mode and vertical alignment mode for buttons in drop-down button list.</li> </ul>
   */
  class WebUiToggleButtonJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiToggleButtonJS"] class.
     * @param settings The settings of button. The settings parameter has the following properties: <br/> <ul> <li>layoutDirectionMode (object): [see="WebLayoutDirectionModeEnumJS"] object that defines layout direction of drop-down list of buttons. Default value is WebLayoutDirectionModeEnumJS.Column. </li> <li>horizontalAlignMode (object): [see="WebHorizontalAlignModeEnumJS"] object that defines horizontal align of drop-down list of buttons. Default value is WebHorizontalAlignModeEnumJS.StartAtLeft. </li> <li>verticalAlignMode (object): [see="WebVerticalAlignModeEnumJS"] object that defines horizontal align of drop-down list of buttons. Default value is WebVerticalAlignModeEnumJS.StartAtBottom. </li> <li>fireButtonClickEvent (boolean): <b>true</b> - UI element will open drop-down list and fires "click" event of [see="WebUiToggleButtonJS.get_ActiveButton"] button when mouse is clicked on UI element; <b>false</b> - UI element will open drop-down list when mouse is clicked on UI element. Default value is <b>true</b>.</li> </ul>
     * @param items Array of [see="WebUiButtonJS"] objects.
     * @param panelSettings The settings of container for specified buttons. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".<br/> <b>Important:</b> all CSS related to vertical positioning will be ignored if "verticalAlignMode" is not "Custom".<br/> <b>Important:</b> all CSS related to horizontal positioning will be ignored if "horizontalAlignMode" is not "Custom".<br/> <b>Important:</b> all CSS related to sizing will be ignored if "layoutDirectionMode" is not "Custom".<br/> </li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object, items: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS, panelSettings: object);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a collection of [see="WebUiButtonJS"] objects.
     */
    get_Buttons(): Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS;

    /**
     * Gets the active button of current [see="WebUiToggleButtonJS"] object.
     */
    get_ActiveButton(): Vintasoft.Imaging.UI.UIElements.WebUiButtonJS;

    // METHODS

    /**
     * Sets the active button of current [see="WebUiToggleButtonJS"] object.
     * @param value A [see="WebUiButtonJS"] object.
     */
    set_ActiveButton(value: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS): void;

    /**
     * Sets the active button of current [see="WebUiToggleButtonJS"] object.
     * @param value The zero-based index of button in buttons collection.
     */
    set_ActiveButton(value: number): void;

    /**
     * Sets the master element for this element.
     * @param masterElement Master element.
     */
    setMasterElement(masterElement: Vintasoft.Imaging.UI.UIElements.WebUiToggleButtonJS): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI element that represents button with the following behaviour:<br /> <ul> <li>If button is clicked when drop-down button list is hidden, button opens the drop-down button list.</li> <li>If button is clicked when drop-down button list is opened, button closes the drop-down button list.</li> <li>If mouse is clicked outside the drop-down button list when drop-down button list is opened, button closes the drop-down button list.</li> <li>If button from drop-down button list is clicked, action of clicked button is executing.</li> <li>Button allows to specify the layout direction, horizontal aligninment mode and vertical alignment mode for buttons in drop-down button list.</li> </ul>
   */
  class WebUiButtonWithDropDownButtonListJS extends Vintasoft.Imaging.UI.UIElements.WebUiButtonJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiButtonWithDropDownButtonListJS"] class.
     * @param settings The settings of button. The settings parameter has the following properties: <br/> <ul> <li>layoutDirectionMode (object): [see="WebLayoutDirectionModeEnumJS"] object that defines layout direction of drop-down button list. Default value is WebLayoutDirectionModeEnumJS.Column. </li> <li>horizontalAlignMode (object): [see="WebHorizontalAlignModeEnumJS"] object that defines horizontal alignment of drop-down button list. Default value is WebHorizontalAlignModeEnumJS.StartAtLeft. </li> <li>verticalAlignMode (object): [see="WebVerticalAlignModeEnumJS"] object that defines vertical alignment of drop-down button list. Default value is WebVerticalAlignModeEnumJS.StartAtBottom. </li> </ul>
     * @param items Array of [see="WebUiButtonJS"] objects.
     * @param panelSettings The settings of container for specified buttons. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".<br/> <b>Important:</b> all CSS related to vertical positioning will be ignored if "verticalAlignMode" is not "Custom".<br/> <b>Important:</b> all CSS related to horizontal positioning will be ignored if "horizontalAlignMode" is not "Custom".<br/> <b>Important:</b> all CSS related to sizing will be ignored if "layoutDirectionMode" is not "Custom".<br/> </li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object, items: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS, panelSettings: object);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a collection of [see="WebUiButtonJS"] objects.
     */
    get_Buttons(): Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS;

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI element that represents button with the following behaviour:<br /> <ul> <li>If button is clicked when drop-down panel is hidden, button opens the drop-down panel.</li> <li>If button is clicked when drop-down panel is opened, button closes the drop-down panel.</li> <li>If mouse is clicked outside the drop-down panel when drop-down panel is opened, button closes the drop-down panel.</li> <li>If UI element from drop-down panel is clicked, action of clicked UI element is executing.</li> <li>Button allows to specify horizontal aligninment mode and vertical alignment mode for UI elements in drop-down panel.</li> </ul> A web UI button that opens drop-down panel with UI elements.
   */
  class WebUiButtonWithDropDownPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiButtonJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiButtonWithDropDownPanelJS"] class.
     * @param settings The settings of button. The settings parameter has the following properties:<br /> <ul> <li>horizontalAlignMode (object): [see="WebHorizontalAlignModeEnumJS"] object that defines horizontal alignment of drop-down panel with UI elements. Default value is WebHorizontalAlignModeEnumJS.StartAtLeft. </li> <li>verticalAlignMode (object): [see="WebVerticalAlignModeEnumJS"] object that defines horizontal alignment of drop-down panel with UI elements. Default value is WebVerticalAlignModeEnumJS.StartAtBottom. </li> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".<br /> <b>Important:</b> all CSS related to vertical positioning will be ignored if "verticalAlignMode" is not "Custom".<br/> <b>Important:</b> all CSS related to horizontal positioning will be ignored if "horizontalAlignMode" is not "Custom". </li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}"</li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }".<br/> </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param container [see="WebUiElementContainerJS"] object.
     */
    constructor(settings: object, container: Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a collection of [see="WebUiElementJS"] objects.
     */
    get_UiElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS;

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Destroys this UI element.
     */
    destroy(): void;

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI element that represents button that changes the visibility of specified elements container.
   */
  class WebUiDialogButtonJS extends Vintasoft.Imaging.UI.UIElements.WebUiButtonJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDialogButtonJS"] class.
     * @param settings The settings of button. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }".<br/> <b>Important:</b> 'click' event callback will be ignored. </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): <b>Important:</b> value will be ignored.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>isDropDown (bool): Indicates whether this button contains drop down menu.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI element that represents context menu.
   */
  class WebUiContextMenuJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiContextMenuJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects.
     * @param settings The settings of context menu. The settings parameter has the following properties:<br /> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the element. Example: "cssClass:'button remove'". Default value is "vsui-contextMenu".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }".<br/> <b>Important:</b> 'click' event callback will be ignored. </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): <b>Important:</b> value will be ignored.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], settings: object);

    /**
     * Initializes a new instance of the [see= "WebUiContextMenuJS"] class.
     * @param items A [see="WebUiElementCollectionJS"] object.
     * @param settings The settings of context menu. The settings parameter has the following properties:<br /> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the element. Example: "cssClass:'button remove'". Default value is "vsui-contextMenu".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }".<br/> <b>Important:</b> 'click' event callback will be ignored. </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): <b>Important:</b> value will be ignored.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS, settings: object);

    /**
     * Initializes a new instance of the [see= "WebUiContextMenuJS"] class.
     * @param items An array of [see="WebUiElementJS"] objects.
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[]);

    /**
     * Initializes a new instance of the [see= "WebUiContextMenuJS"] class.
     * @param items A [see="WebUiElementCollectionJS"] object.
     */
    constructor(items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    // METHODS

    /**
     * Shows the UI element in specified position.
     * @param position Point in the browser (screen) coordinate space.
     */
    showInPosition(position: object): void;

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI element that represents button that allows to start file uploading process.
   */
  class WebUiUploadFileButtonJS extends Vintasoft.Imaging.UI.UIElements.WebUiDivElementJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiUploadFileButtonJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }".<br/> <b>Important:</b> 'click' event callback will be ignored. </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>accept (string): Shortcut for 'accept' attribute of element (equals - "properties:{'accept':'.pdf, .jpeg '}").</li> <li>multiple (boolean): Shortcut for 'multiple' attribute of element (equals - "properties:{'multiple': true}").</li> <li>onClick (object): <b>Important:</b> value will be ignored.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a unique file type specifiers describing file types to allow.
     */
    get_FileExtensionFilter(): string;

    /**
     * Sets a unique file type specifiers describing file types to allow.
     * @param value Unique file type specifiers.
     */
    set_FileExtensionFilter(value: string): void;

    /**
     * Gets a value indicating whether uploaded file must be opened in viewer after file upload.
     */
    get_OpenFile(): boolean;

    /**
     * Sets a value indicating whether uploaded file must be opened in viewer after file upload.
     * @param value True - uploaded file must be opened in viewer after file upload; false - uploaded file must NOT be opened in viewer after file upload. Default value is True.
     */
    set_OpenFile(value: boolean): void;

    // METHODS

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI element that represents the color picker.
   */
  class WebUiColorPickerJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiColorPickerJS"] class.
     * @param parentButton An instance of [see="WebUiButtonWithColorPickerJS"] class that is a parent for this color picker.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element properties. Example: "properties:{'title':'Hello', 'id':'helloId'}"</li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, which contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>addEmptyColor (bool): Indicates whether to add "No Color" option.</li> </ul>
     */
    constructor(parentButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonWithColorPickerJS, settings: object);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    // METHODS

    /**
     * Shows the UI element in specified position.
     * @param position Point in the browser (screen) coordinate space.
     */
    showInPosition(position: object): void;

    /**
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI element that represents button with color picker.
   */
  class WebUiButtonWithColorPickerJS extends Vintasoft.Imaging.UI.UIElements.WebUiButtonJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiButtonWithColorPickerJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element properties. Example: "properties:{'title':'Hello', 'id':'helloId'}"</li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, which contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>addEmptyColor (bool): Indicates whether to add "No Color" option.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Creates an initial markup of UI element.
     */
    createMarkup(): object;

    /**
     * Sets the button color.
     * @param cssColor CSS-color.
     */
    setButtonColor(cssColor: string): void;

  }

  /**
   * A web UI element that represents the group box.
   */
  class WebUiGroupBoxJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiGroupBoxJS"] class.
     * @param groupName The group box title label text.
     * @param items An array of [see="WebUiElementJS"] objects.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element properties. Example: "properties:{'title':'Hello', 'id':'helloId'}"</li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, which contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(groupName: string, items: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], settings: object);

  }

  /**
   * Represents settings for [see="WebUiControlJS"] object.
   */
  class WebUiControlSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiControlSettingsJS"] class.
     * @param containerId An identifier of DOM-element, where control must be placed.
     */
    constructor(containerId: string);

    // PROPERTIES

    /**
     * Gets the collection of UI elements, which must be contained within the [see="WebUiElementContainerJS"].
     */
    get_Items(): Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS;

    /**
     * Gets an identifier of DOM element where [see="WebUiControlJS"] must be placed.
     */
    get_ContainerId(): string;

    /**
     * Sets an identifier of DOM element where [see="WebUiControlJS"] must be placed.
     * @param value Identifier of DOM element.
     */
    set_ContainerId(value: string): void;

    /**
     * Gets the localization identifier of the [see="WebUiControlJS"] control.
     */
    get_LocalizationId(): string;

    /**
     * Sets the localization identifier of the [see="WebUiControlJS"] control.
     * @param value The localization identifier of the [see="WebUiControlJS"] control.
     */
    set_LocalizationId(value: string): void;

    /**
     * Gets a value indicating whether control can upload image from URL.
     */
    get_CanUploadImageFromUrl(): boolean;

    /**
     * Sets a value indicating whether control can upload image from URL.
     * @param value A value indicating whether control can upload image from URL.
     */
    set_CanUploadImageFromUrl(value: boolean): void;

    /**
     * Gets a value indicating whether control can download file.
     */
    get_CanDownloadFile(): boolean;

    /**
     * Sets a value indicating whether control can download file.
     * @param value A value indicating whether control can download file.
     */
    set_CanDownloadFile(value: boolean): void;

    /**
     * Gets a value indicating whether control can export and download file.
     */
    get_CanExportAndDownloadFile(): boolean;

    /**
     * Sets a value indicating whether control can export and download file.
     * @param value A value indicating whether control can export and download file.
     */
    set_CanExportAndDownloadFile(value: boolean): void;

    // METHODS

    /**
     * Returns the first item with specified registered identifier.
     * @param itemId The registered identifier of UI element.
     */
    getItemByRegisteredId(itemId: string): Vintasoft.Imaging.UI.UIElements.WebUiElementJS;

    /**
     * Returns all items with specified registered identifier.
     * @param itemId The registered identifier of UI element.
     */
    getItemsByRegisteredId(itemId: string): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Removes the first item with specified registered identifier.
     * @param itemId The registered identifier of UI element.
     */
    removeItemByRegisteredId(itemId: string): boolean;

  }

  /**
   * Represents a base class for web UI controls.
   */
  class WebUiControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiControlJS"] class.
     * @param settings An instance of [see="WebUiControlSettingsJS"] class.
     */
    constructor(settings: Vintasoft.Imaging.UI.UIElements.WebUiControlSettingsJS);

    // PROPERTIES

    /**
     * Gets an identifier of DOM-element that contains this control.
     */
    get_ContainerId(): string;

    /**
     * Gets the collection of UI elements contained within this [see="WebDocumentViewerJS"].
     */
    get_Items(): Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS;

    /**
     * Gets the localization identifier of UI element.
     */
    get_LocalizationId(): string;

    // METHODS

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): object[];

    /**
     * Fires "asyncOperationStarted" event.
     * @param description Operation description.
     * @param additionalData Object that contains additional information.
     */
    startAsyncOperation(description: string, additionalData: object): void;

    /**
     * Fires "asyncOperationStarted" event.
     * @param description Operation description.
     */
    startAsyncOperation(description: string): void;

    /**
     * Fires "asyncOperationFinished" event.
     * @param description Operation description.
     * @param additionalData Object that contains additional information.
     */
    finishAsyncOperation(description: string, additionalData: object): void;

    /**
     * Fires "asyncOperationFinished" event.
     * @param description Operation description.
     */
    finishAsyncOperation(description: string): void;

    /**
     * Fires "asyncOperationFailed" event.
     * @param description Operation description.
     * @param additionalData Object that contains additional information.
     */
    failAsyncOperation(description: string, additionalData: object): void;

    /**
     * Fires "asyncOperationFailed" event.
     * @param description Operation description.
     */
    failAsyncOperation(description: string): void;

  }

  /**
   * A web UI element that represents multiselect element.
   */
  class WebUiMultiSelectElementJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiMultiSelectElementJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element properties.Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>options (object): Array of settings of "option" elements. Each object has the following parameters:<br/> <ul> <li>text (string): Text of option element. Example: "text:'first option'".</li> <li>value (string): Value of option element.</li> <li>selected (boolean): Indicate option element is selected.</li> <li>localizationId (string): Unique localization ID.</li> </ul> </li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets an array of selected values.
     */
    get_SelectedValues(): object[];

    /**
     * Gets an array of selected texts.
     */
    get_SelectedTexts(): string[];

    /**
     * Gets an array of selected indexes.
     */
    get_SelectedIndexes(): number[];

    // METHODS

    /**
     * Returns value of element.
     * @param index The zero-based index of element.
     */
    getValue(index: number): object;

    /**
     * Returns text of element.
     * @param index The zero-based index of element.
     */
    getText(index: number): string;

  }

  /**
   * Provides the ability to create the UI element by the specified ID.
   */
  class WebUiElementsFactoryJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiElementsFactoryJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Returns all IDs of registered UI elements.
     */
    static getAllRegisteredIds(): string[];

    /**
     * Creates the registered UI element with specified ID.
     * @param id The element ID.
     */
    static createElementById(id: string): Vintasoft.Imaging.UI.UIElements.WebUiElementJS;

    /**
     * Registers UI element with specified ID in factory.
     * @param id Element ID.
     * @param createFunction Function that create required [see="WebUiElementJS"] object.
     */
    static registerElement(id: string, createFunction: Function): void;

    /**
     * Unregisters UI element with specified ID.
     * @param id Element ID.
     */
    static unregisterElement(id: string): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.UI.VisualTools {

  // ===== ENUMS =====

  /**
   * Specifies available types of interaction points.
   */
  class WebInteractionPointTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Provides an abstract base class for visual tools such as the [see="WebMagnifierToolJS"] or [see="WebPanToolJS"].
   */
  class WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebVisualToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the name of visual tool.
     */
    get_Name(): string;

    /**
     * Gets the mouse button, which executes the action of the visual tool.
     */
    get_ActionButton(): Vintasoft.Imaging.WebMouseButtonsEnumJS;

    /**
     * Sets the mouse button, which executes the action of the visual tool.
     * @param value [see="WebMouseButtonsEnumJS"] object.
     */
    set_ActionButton(value: Vintasoft.Imaging.WebMouseButtonsEnumJS): void;

    /**
     * Gets a value indicating whether visual tool can respond to the user interaction.
     */
    get_IsEnabled(): boolean;

    /**
     * Sets a value indicating whether visual tool can respond to the user interaction.
     * @param value True - visual tool can respond to the user interaction; False - visual tool can not respond to the user interaction.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a value indicating whether image viewer must disable context menu in image viewer if the right mouse button is set as an action button of the visual tool.
     */
    get_DisableContextMenu(): boolean;

    /**
     * Sets a value indicating whether image viewer must disable context menu in image viewer if the right mouse button is set as an action button of the visual tool.
     * @param value True - image viewer must disable context menu in image viewer if the right mouse button is set as an action button of the visual tool; False - image viewer must not disable context menu in image viewer if the right mouse button is set as an action button of the visual tool.
     */
    set_DisableContextMenu(value: boolean): void;

    /**
     * Gets a cursor which should be used in image viewer when visual tool is active in image viewer.
     */
    get_Cursor(): string;

    /**
     * Sets a cursor which should be used in image viewer when visual tool is active in image viewer.
     * @param value Cursor name. Default value is "default". Supported values: all supported CSS styles for cursor.
     */
    set_Cursor(value: string): void;

    /**
     * Gets a cursor which should be used in image viewer when visual tool executes its action.
     */
    get_ActionCursor(): string;

    /**
     * Sets a cursor which should be used in image viewer when visual tool executes its action.
     * @param value Cursor name. Default value is "default". Supported values: all supported CSS styles for cursor.
     */
    set_ActionCursor(value: string): void;

    /**
     * Gets a delay, in milliseconds, between mouse clicks in series of clicks.
     */
    get_MouseClicksDelta(): number;

    /**
     * Sets a delay, in milliseconds, between mouse clicks in series of clicks.
     * @param value Delay, in milliseconds. Min value is 10. Default value is 250.
     */
    set_MouseClicksDelta(value: number): void;

    /**
     * Gets the count of mouse clicks in series of clicks.
     */
    get_MouseClickCount(): number;

    /**
     * Gets a value indicating whether this tool supports multipage mode.
     */
    get_IsMultipageModeSupported(): boolean;

    // METHODS

    /**
     * Returns the string representation of this object.
     */
    toString(): string;

    /**
     * Resets the visual tool.
     */
    reset(): void;

    /**
     * Gets the drawing box of visual tool.
     */
    getDrawingBox(): object;

  }

  /**
   * Represents a visual tool for selecting a rectangular image region in image viewer.
   */
  class WebRectangularSelectionToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRectangularSelectionToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a background color of the selection rectangle.
     */
    get_BackColor(): string;

    /**
     * Sets a background color of the selection rectangle.
     * @param value A background color of the selection rectangle. Default value is "rgba(0,200,255,0.5)".
     */
    set_BackColor(value: string): void;

    /**
     * Gets a border color of the selection rectangle.
     */
    get_BorderColor(): string;

    /**
     * Sets a border color of the selection rectangle.
     * @param value A border color of the selection rectangle. Default value is "rgba(0,0,0,1)".
     */
    set_BorderColor(value: string): void;

    /**
     * Gets a rectangle that defines rectangular selection on image.
     */
    get_Rectangle(): object;

    /**
     * Sets a rectangle that defines rectangular selection on image.
     * @param value A rectangle that defines rectangular selection on image.
     */
    set_Rectangle(value: object): void;

    /**
     * Gets a value indicating whether rectangular selection can be moved.
     */
    get_Movable(): boolean;

    /**
     * Sets a value indicating whether rectangular selection can be moved.
     * @param value True - rectangular selection can be moved; False - rectangular selection cannot be moved. Default value is True.
     */
    set_Movable(value: boolean): void;

    /**
     * Gets a value indicating whether rectangular selection can be resized.
     */
    get_Resizable(): boolean;

    /**
     * Sets a value indicating whether rectangular selection can be resized.
     * @param value True - rectangular selection can be resized; False - rectangular selection cannot be resized. Default value is True.
     */
    set_Resizable(value: boolean): void;

    /**
     * Gets a value indicating whether selection can be used only on image area.
     */
    get_SelectionOnlyOnImage(): boolean;

    /**
     * Sets a value indicating whether selection can be used only on image area.
     * @param value A value indicating whether selection can be used only on image area. Default value is true.
     */
    set_SelectionOnlyOnImage(value: boolean): void;

    /**
     * Gets a rotation angle.
     */
    get_Rotation(): number;

    // METHODS

    /**
     * Resets the visual tool.
     */
    reset(): void;

    /**
     * Returns the drawing box of visual tool.
     */
    getDrawingBox(): object;

  }

  /**
   * Represents a visual tool for zooming of image region in image viewer.
   */
  class WebZoomSelectionToolJS extends Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebZoomSelectionToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the mouse button for zooming of selected image region in image viewer.
     */
    get_ZoomButton(): Vintasoft.Imaging.WebMouseButtonsEnumJS;

    /**
     * Sets the mouse button for zooming of selected image region in image viewer.
     * @param value [see="WebMouseButtonsEnumJS"] object. Default value is "Left".
     */
    set_ZoomButton(value: Vintasoft.Imaging.WebMouseButtonsEnumJS): void;

    /**
     * Sets a cursor, which should be used in image viewer when visual tool executes visual tool's action.
     * @param value Cursor name. Default value is "zoom-in". Supported values: all supported CSS styles for cursor.
     */
    set_ActionCursor(value: string): void;

  }

  /**
   * Defines an interactive object.
   */
  class WebInteractiveObjectJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebInteractiveObjectJS"] class.
     */
    constructor();

  }

  /**
   * Represents the rectangular selection on image in image viewer.
   */
  class WebRectangularSelectionJS extends Vintasoft.Imaging.UI.VisualTools.WebInteractiveObjectJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRectangularSelectionJS"] class.
     * @param rectangle Rectangle in image space.
     */
    constructor(rectangle: object);

    /**
     * Initializes a new instance of the [see= "WebRectangularSelectionJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a background color of the selection rectangle.
     */
    get_BackColor(): string;

    /**
     * Sets a background color of the selection rectangle.
     * @param value A background color of the selection rectangle. Default value is "rgba(0,200,255,0.5)".
     */
    set_BackColor(value: string): void;

    /**
     * Gets a border color of the selection rectangle.
     */
    get_BorderColor(): string;

    /**
     * Sets a border color of the selection rectangle.
     * @param value A border color of the selection rectangle. Default value is "rgba(0,0,0,1)".
     */
    set_BorderColor(value: string): void;

    /**
     * Gets the selection rectangle.
     */
    get_SelectedRect(): object;

    /**
     * Sets the selection rectangle.
     * @param value The selection rectangle.
     */
    set_SelectedRect(value: object): void;

    /**
     * Gets a rotation angle.
     */
    get_Rotation(): number;

    // METHODS

    /**
     * Creates a new object that is a copy of the current instance.
     */
    clone(): Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionJS;

  }

  /**
   * Represents a collection of interactive objects of specified type.
   */
  class WebInteractiveObjectCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebInteractiveObjectCollectionJS"] class.
     * @param typeOfElements Type of interactive object.
     */
    constructor(typeOfElements: object);

    // PROPERTIES

    /**
     * Gets the number of items contained in the collection.
     */
    get_Count(): number;

    // METHODS

    /**
     * Returns an interactive object.
     * @param index Zero-based index of interactive object in collection.
     */
    getItem(index: number): object;

    /**
     * Gets the index of the specified item.
     * @param item The item to search for.
     */
    indexOf(item: object): number;

    /**
     * Clears the collection.
     */
    clearItems(): void;

    /**
     * Adds an interactive object to the end of the collection.
     * @param item Interactive object to add.
     */
    addItem(item: object): void;

    /**
     * Inserts an interactive object into collection at the specified index.
     * @param index The zero-based index at which interactive object should be inserted.
     * @param item Interactive object to insert.
     */
    insertItem(index: number, item: object): void;

    /**
     * Removes specified interactive object from the collection.
     * @param item [see="WebRectangularSelectionJS"] to remove.
     */
    removeItem(item: number): void;

    /**
     * Removes specified interactive object from the collection.
     * @param index The zero-based index of interactive object which should be removed.
     */
    removeItemAt(index: number): void;

    /**
     * Sets information about the specified interactive object.
     * @param index The zero-based index of interactive object, which should be changed.
     * @param item New interactive object at the specified index.
     */
    setItem(index: number, item: object): void;

    /**
     * Returns the collection as array.
     */
    toArray(): object[];

  }

  /**
   * Represents a collection of rectangular selections (collection of instances of [see="WebRectangularSelectionJS"] class).
   */
  class WebRectangularSelectionCollectionJS extends Vintasoft.Imaging.UI.VisualTools.WebInteractiveObjectCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRectangularSelectionCollectionJS"] class.
     */
    constructor();

  }

  /**
   * Represents a visual tool that allows to select an image region, which consists from multiple rectangles, in image viewer.
   */
  class WebMultiRectangularSelectionToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMultiRectangularSelectionToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the focused item.
     */
    get_FocusedItem(): Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionJS;

    /**
     * Sets the focused item.
     * @param value Focused item OR null.
     */
    set_FocusedItem(value: Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionJS): void;

    /**
     * Gets a value indicating whether this tool supports multipage mode.
     */
    get_IsMultipageModeSupported(): boolean;

    // METHODS

    /**
     * Adds an item to the selection of focused image and begins the rectangle building.
     * @param item Item to add.
     */
    addAndBuild(item: Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionJS): void;

    /**
     * Adds an item to the selection of specified image.
     * @param item Item to add.
     * @param image The image.
     */
    add(item: Vintasoft.Imaging.UI.VisualTools.WebRectangularSelectionJS, image: Vintasoft.Shared.WebImageJS): void;

    /**
     * Returns the selection collection for specified image.
     * @param image The image.
     */
    getSelections(image: Vintasoft.Shared.WebImageJS): object;

    /**
     * Returns the drawing box of visual tool.
     */
    getDrawingBox(): object;

    /**
     * Resets the visual tool.
     */
    reset(): void;

  }

  /**
   * Represents a visual tool that allows to highlight several image regions in the image viewer.
   */
  class WebHighlightToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHighlightToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the highlighted image region which is selected in the image viewer.
     */
    get_SelectedItem(): number;

    /**
     * Sets the highlighted image region that should be selected in the image viewer.
     * @param index Index of the highlighted image region that should be selected in the image viewer.
     */
    set_SelectedItem(value: number): void;

    /**
     * Gets a color of brush that should be used for filling the highlighted image region in the image viewer.
     */
    get_SelectedItemBrushColor(): string;

    /**
     * Sets a color of brush that should be used for filling the highlighted image region in the image viewer.
     * @param color Color. Default value is "rgba(0,0,255,0.18)".
     */
    set_SelectedItemBrushColor(value: string): void;

    /**
     * Gets a color of pen that should be used for drawing the outline of the highlighted image region in the image viewer.
     */
    get_SelectedItemPenColor(): string;

    /**
     * Sets a color of pen that should be used for drawing the outline of the highlighted image region in the image viewer.
     * @param color Color. Default value is "rgba(0,128,0,0.75)".
     */
    set_SelectedItemPenColor(value: string): void;

    // METHODS

    /**
     * Resets the visual tool.
     */
    reset(): void;

    /**
     * Adds the image regions that should be highlighted in the image viewer
     * @param highlightObjects Collection of objects (instance of the [see="WebHighlightObjectsJS"] class) that defines image regions which should be highlighted in the image viewer.
     */
    addItems(highlightObjects: Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectsJS): void;

    /**
     * Removes the highlighted image region from the highlight tool.
     * @param index Zero-based index of the highlighted image region.
     */
    removeItemAt(index: number): void;

    /**
     * Clears all highlighted image regions from the highlight tool.
     */
    clearItems(): void;

    /**
     * Finds the highlighted image region located at the specified coordinates.
     * @param x X coordinate in the coordinate space of HTML document.
     * @param y Y coordinate in the coordinate space of HTML document.
     */
    findItem(x: number, y: number): Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS;

    /**
     * Gets the drawing box of visual tool.
     */
    getDrawingBox(): object;

    /**
     * Selects the specified image region.
     * @param item [see="WebHighlightObjectJS"] object.
     */
    selectItem(item: Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS): void;

  }

  /**
   * Defines an image region, which should be highlighted in the image viewer.
   */
  class WebHighlightObjectJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHighlightObjectJS"] class.
     * @param polygon A polygon, as point array, that defines image region which should be highlighted in the image viewer.
     */
    constructor(polygon: object[]);

    // PROPERTIES

    /**
     * Gets an array of object points.
     */
    get_Path(): object[];

    /**
     * Gets the tooltip associated with the highlight object.
     */
    get_ToolTip(): string;

    /**
     * Sets the tooltip associated with the highlight object.
     * @param value Tooltip associated with the highlight object. Default value is empty string.
     */
    set_ToolTip(value: string): void;

    // METHODS

    /**
     * Returns the drawing box of the object.
     */
    getDrawingBox(): object;

    /**
     * Creates a highlight object based on rectangle.
     * @param rect Rectangle that defines image region which should be highlighted in the image viewer.
     */
    static createObjectFromRectangle(rect: object): Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS;

    /**
     * Creates a highlight object based on polygon.
     * @param polygon Polygon, as point array, that defines image region which should be highlighted in the image viewer.
     */
    static createObjectFromPolygon(polygon: object[]): Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS;

  }

  /**
   * Defines image regions, which should be highlighted in the image viewer.
   */
  class WebHighlightObjectsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHighlightObjectsJS"] class.
     * @param objects An array of objects (instances of the [see="WebHighlightObjectJS"] class) that defines image regions which should be highlighted in the image viewer.
     * @param brush Brush that should be used for filling the highlighted image region in the image viewer.
     * @param pen Pen that should be used for drawing the outline of the highlighted image region in the image viewer.
     */
    constructor(objects: Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS[], brush: string, pen: string);

    // PROPERTIES

    /**
     * Gets the number of objects in the collection.
     */
    get_Count(): number;

    // METHODS

    /**
     * Returns the object at the specified index.
     * @param index Zero-based index of object in the collection.
     */
    getItem(index: number): Vintasoft.Imaging.UI.VisualTools.WebHighlightObjectJS;

    /**
     * Returns the drawing box of the objects.
     */
    getDrawingBox(): object;

  }

  /**
   * Represents a visual tool for zooming of image in image viewer.
   */
  class WebZoomToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebZoomToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the mouse button for zooming in of image in image viewer.
     */
    get_ZoomInButton(): Vintasoft.Imaging.WebMouseButtonsEnumJS;

    /**
     * Sets the mouse button for zoomingin of image in image viewer.
     * @param value [see="WebMouseButtonsEnumJS"] object. Default value is "Left".
     */
    set_ZoomInButton(value: Vintasoft.Imaging.WebMouseButtonsEnumJS): void;

    /**
     * Gets the mouse button for zooming out of image in image viewer.
     */
    get_ZoomOutButton(): Vintasoft.Imaging.WebMouseButtonsEnumJS;

    /**
     * Sets the mouse button for zooming out of image in image viewer.
     * @param value [see="WebMouseButtonsEnumJS"] object. Default value is "Right".
     */
    set_ZoomOutButton(value: Vintasoft.Imaging.WebMouseButtonsEnumJS): void;

    /**
     * Gets the zoom step of the image.
     */
    get_ZoomStep(): number;

    /**
     * Sets the zoom step of the image.
     * @param value The zoom step of the image. Default value is 10.
     */
    set_ZoomStep(value: number): void;

    // METHODS

    /**
     * Resets the visual tool.
     */
    reset(): void;

  }

  /**
   * Represents a visual tool for magnification of image region in image viewer.
   */
  class WebMagnifierToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMagnifierToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the size of the magnifier tool.
     */
    get_Size(): object;

    /**
     * Sets the size of the magnifier tool.
     * @param value An object that contains information about width and height of the magnifier tool. Default value is { width: 200, height : 200 }.
     */
    set_Size(value: object): void;

    /**
     * Gets an image zoom level in the magnifier tool.
     */
    get_Zoom(): number;

    /**
     * Sets an image zoom level in the magnifier tool.
     * @param value An image zoom level in the magnifier tool. Minimum value is 100, Maximum value is 500. Default value is 250.
     */
    set_Zoom(value: number): void;

    /**
     * Sets a cursor which should be used in image viewer when visual tool executes its action.
     * @param value Cursor name. Default value is "none". Supported values: all supported CSS styles for cursor.
     */
    set_ActionCursor(value: string): void;

    /**
     * Sets a value indicating whether visual tool can respond to user interaction.
     * @param value True - visual tool can respond to user interaction; False - visual tool can not respond to user interaction.
     */
    set_IsEnabled(value: boolean): void;

    // METHODS

    /**
     * Resets the visual tool.
     */
    reset(): void;

  }

  /**
   * Represents a visual tool which combines behaviour of several visual tools.
   */
  class WebCompositeVisualToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCompositeVisualToolJS"] class.
     * @param visualTools Array of [see="WebVisualToolJS"] objects which should be used together.
     */
    constructor(visualTools: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS[]);

    // PROPERTIES

    /**
     * Gets an array of visual tools of the tool.
     */
    get_VisualTools(): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS[];

    /**
     * Gets the active visual tool.
     */
    get_ActiveVisualTool(): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS;

    /**
     * Sets the active visual tool.
     * @param tool [see="WebVisualToolJS"] object that should be used as active visual tool.
     */
    set_ActiveVisualTool(value: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS): void;

    /**
     * Sets a value indicating whether visual tool can respond to user interaction.
     * @param value True - visual tool can respond to user interaction; False - visual tool can not respond to user interaction.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a value indicating whether this tool supports multipage mode.
     */
    get_IsMultipageModeSupported(): boolean;

    /**
     * Gets a value indicating whether image viewer must disable context menu in image viewer if the right mouse button is set as an action button of the visual tool.
     */
    get_DisableContextMenu(): boolean;

    /**
     * Sets a value indicating whether image viewer must disable context menu in image viewer if the right mouse button is set as an action button of the visual tool.
     * @param value True - image viewer must disable context menu in image viewer if the right mouse button is set as an action button of the visual tool; False - image viewer must not disable context menu in image viewer if the right mouse button is set as an action button of the visual tool.
     */
    set_DisableContextMenu(value: boolean): void;

    // METHODS

    /**
     * Returns the visual tool at the specified index.
     * @param index Zero-based index of visual tools.
     */
    getTool(index: number): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS;

    /**
     * Resets the visual tool.
     */
    reset(): void;

    /**
     * Indicates whether the composite tool contains the specified visual tool.
     * @param tool [see="WebVisualToolJS"] object.
     */
    contains(tool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS): boolean;

    /**
     * Gets the drawing box of visual tool.
     */
    getDrawingBox(): object;

  }

  /**
   * Represents a visual tool that allows to select text on image.
   */
  class WebTextSelectionToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTextSelectionToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether this tool supports multipage mode.
     */
    get_IsMultipageModeSupported(): boolean;

    /**
     * Gets the color of text selection.
     */
    get_SelectionColor(): string;

    /**
     * Sets the color of text selection.
     * @param value Text selection color.
     */
    set_SelectionColor(value: string): void;

    /**
     * Gets the text selection mode.
     */
    get_SelectionMode(): Vintasoft.Imaging.WebTextSelectionModeEnumJS;

    /**
     * Sets the text selection mode.
     * @param value An instance of [see="WebTextSelectionModeEnumJS"] class that defines the text selection mode.
     */
    set_SelectionMode(value: Vintasoft.Imaging.WebTextSelectionModeEnumJS): void;

    /**
     * Gets the selected text region.
     */
    get_SelectedRegion(): Vintasoft.Imaging.WebTextRegionJS;

    /**
     * Sets the selected text region.
     * @param value Selected text region ([see="WebTextRegionJS"] object).
     */
    set_SelectedRegion(value: Vintasoft.Imaging.WebTextRegionJS): void;

    /**
     * Gets the selected text on all images.
     */
    get_SelectedText(): string;

    /**
     * Gets a value indicating whether the text selection is enabled.
     */
    get_IsSelectionEnabled(): boolean;

    /**
     * Sets a value indicating whether the text selection is enabled.
     * @param value True - text selection is enabled; false - text selection is disabled. Default value is true.
     */
    set_IsSelectionEnabled(value: boolean): void;

    /**
     * Gets the step value, in pixels, which should be used for auto scrolling in image viewer when text selection is performing in image viewer and mouse cursor is moving outside the image viewer.
     */
    get_TextSelectionAutoScrollStep(): number;

    /**
     * Sets the step value, in pixels, which should be used for auto scrolling in image viewer when text selection is performing in image viewer and mouse cursor is moving outside the image viewer.
     * @param value 0 - image viewer will NOT be scrolled when text selection is performing in image viewer and mouse cursor is moving outside the image viewer;<br /> N - image viewer will be scrolled by N pixels when text selection is performing in image viewer and mouse cursor is moving outside the image viewer.
     */
    set_TextSelectionAutoScrollStep(value: number): void;

    // METHODS

    /**
     * Returns an array of images, where text is selected.
     */
    getSelectionImages(): Vintasoft.Shared.WebImageJS[];

    /**
     * Returns the selected region for specified image.
     * @param image The image.
     */
    getSelectedRegion(image: Vintasoft.Shared.WebImageJS): Vintasoft.Imaging.WebTextRegionJS;

    /**
     * Sets the selected region for specified image.
     * @param value Text region ([see="WebTextRegionJS"] object).
     * @param image The image ([see="WebImageJS"] object).
     */
    setSelectedRegion(value: Vintasoft.Imaging.WebTextRegionJS, image: Vintasoft.Shared.WebImageJS): void;

    /**
     * Returns the drawing box of visual tool.
     */
    getDrawingBox(): object;

    /**
     * Selects text on focused image.
     * @param startPoint The start point for text selection, in the coordinate space of text.
     * @param endPoint The end point for text selection, in the coordinate space of text.
     */
    selectTextInTextSpace(startPoint: object, endPoint: object): void;

    /**
     * Selects text on image viewer.
     * @param startPoint The left-top point, in the coordinate space of image viewer, of the text selection rectangle.
     * @param endPoint The right-bottom point, in the coordinate space of image viewer, of the text selection rectangle.
     */
    selectTextInViewerSpace(startPoint: object, endPoint: object): void;

    /**
     * Starts the asynchronous text search.
     * @param regExp Regular expression that defines the searching text.
     * @param searchMode An instance of [see="WebTextSearchModeEnumJS"] class that indicates where text must be searched (on focused image or in the whole images).
     */
    searchText(regExp: object, searchMode: Vintasoft.Imaging.WebTextSearchModeEnumJS): void;

    /**
     * Cancels the active text search.
     */
    cancelTextSearch(): void;

    /**
     * Resets the visual tool.
     */
    reset(): void;

  }

  /**
   * An interaction area of interactive object.
   */
  class WebInteractionAreaJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebInteractionAreaJS"] class.
     * @param name Name of the interaction area.
     * @param fillColor Fill color of the interaction area.
     * @param borderColor Border color of the interaction area.
     * @param cursor Cursor of the interaction area.
     */
    constructor(name: string, fillColor: string, borderColor: string, cursor: string);

    // PROPERTIES

    /**
     * Gets a cursor of the interaction area.
     */
    get_Cursor(): string;

    /**
     * Sets a cursor of the interaction area.
     * @param value cursor of the interaction area.
     */
    set_Cursor(value: string): void;

    /**
     * Gets a fill color of the interaction area.
     */
    get_FillColor(): string;

    /**
     * Sets a fill color of the interaction area.
     * @param value Fill color of the interaction area. Default value is "rgba(255, 255, 255, 0.36)".
     */
    set_FillColor(value: string): void;

    /**
     * Gets a border color of the interaction area.
     */
    get_BorderColor(): string;

    /**
     * Sets a border color of the interaction area.
     * @param value Border color of the interaction area. Default value is "rgba(0,0,0,0.75)".
     */
    set_BorderColor(value: string): void;

    /**
     * Gets a border width of the interaction area.
     */
    get_BorderWidth(): number;

    /**
     * Sets a border width of the interaction area.
     * @param value Border width of the interaction area. Default value is 1.
     */
    set_BorderWidth(value: number): void;

    // METHODS

    /**
     * Determines whether a point, in viewer space, is contained within the interaction area.
     * @param x The X coordinate, in coordinate space of visible area of the image viewer.
     * @param y The Y coordinate, in coordinate space of visible area of the image viewer.
     */
    isPointOnArea(x: number, y: number): boolean;

    /**
     * Removes interaction point.
     */
    remove(): void;

    /**
     * Returns a bounding box of interaction area in viewer space.
     */
    getInteractionAreaBox(): object;

  }

  /**
   * A rectangular interaction area.
   */
  class WebRectangularAreaJS extends Vintasoft.Imaging.UI.VisualTools.WebInteractionAreaJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRectangularAreaJS"] class.
     * @param name Name of the interaction area.
     * @param fillColor Fill color of the interaction area.
     * @param borderColor Border color of the interaction area.
     * @param cursor Cursor of the interaction area.
     */
    constructor(name: string, fillColor: string, borderColor: string, cursor: string);

    // METHODS

    /**
     * Determines whether a point, in viewer space, is contained within the interaction area.
     * @param x The X coordinate, in coordinate space of visible area of the image viewer.
     * @param y The Y coordinate, in coordinate space of visible area of the image viewer.
     */
    isPointOnArea(x: number, y: number): boolean;

  }

  /**
   * A rectangular interaction area that can be moved.
   */
  class WebRectangularMoveAreaJS extends Vintasoft.Imaging.UI.VisualTools.WebRectangularAreaJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRectangularMoveAreaJS"] class.
     * @param fillColor Fill color of the interaction area.
     * @param borderColor Border color of the interaction area.
     */
    constructor(fillColor: string, borderColor: string);

  }

  /**
   * Represents a rectangular non interactive area of interactive object, which is used for highlighting of interactive object.
   */
  class WebRectangularSelectionAreaJS extends Vintasoft.Imaging.UI.VisualTools.WebRectangularAreaJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRectangularSelectionAreaJS"] class.
     * @param fillColor Fill color of the interaction area.
     * @param borderColor Border color of the interaction area.
     * @param cursor Cursor of the interaction area.
     */
    constructor(fillColor: string, borderColor: string, cursor: string);

    // METHODS

    /**
     * Determines whether a point, in viewer space, is contained within the interaction area.
     * @param x The X coordinate, in coordinate space of visible area of the image viewer.
     * @param y The Y coordinate, in coordinate space of visible area of the image viewer.
     */
    isPointOnArea(x: number, y: number): boolean;

    /**
     * Returns a bounding box of interaction area in viewer space.
     */
    getInteractionAreaBox(): object;

  }

  /**
   * The interaction area that covers the entire area of interactive object.
   */
  class WebObjectMoveAreaJS extends Vintasoft.Imaging.UI.VisualTools.WebInteractionAreaJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebObjectMoveAreaJS"] class.
     * @param obj [see="WebAnnotationViewJS"] object.
     */
    constructor(obj: object);

    // METHODS

    /**
     * Determines whether a point, in viewer space, is contained within the interaction area.
     * @param x The X coordinate, in coordinate space of visible area of the image viewer.
     * @param y The Y coordinate, in coordinate space of visible area of the image viewer.
     */
    isPointOnArea(x: number, y: number): boolean;

  }

  /**
   * The interaction point.
   */
  class WebInteractionPointJS extends Vintasoft.Imaging.UI.VisualTools.WebInteractionAreaJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebInteractionPointJS"] class.
     * @param name Name of the interaction area.
     * @param fillColor Fill color of the interaction area.
     * @param borderColor Border color of the interaction area.
     * @param cursor Cursor of the interaction area.
     */
    constructor(name: string, fillColor: string, borderColor: string, cursor: string);

    // PROPERTIES

    /**
     * Gets the radius of interaction point.
     */
    get_Radius(): number;

    /**
     * Sets the radius of interaction point.
     * @param value Radius of interaction point. Default value is 4.
     */
    set_Radius(value: number): void;

    /**
     * Gets the interaction radius of interaction point.
     */
    get_InteractionRadius(): number;

    /**
     * Sets the interaction radius of interaction point.
     * @param value Interaction radius of interaction point. Default value is 4.
     */
    set_InteractionRadius(value: number): void;

    /**
     * Gets the interaction point style.
     */
    get_Style(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointTypeEnumJS;

    /**
     * Sets the interaction point style.
     * @param value [see="WebInteractionPointTypeEnumJS"] object.
     */
    set_Style(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointTypeEnumJS): void;

    // METHODS

    /**
     * Returns a bounding box of interaction area in viewer space.
     */
    getInteractionAreaBox(): object;

    /**
     * Determines whether a point, in viewer space, is contained within the interaction area.
     * @param x The X coordinate, in viewer space.
     * @param y The Y coordinate, in viewer space.
     */
    isPointOnArea(x: number, y: number): boolean;

  }

  /**
   * An interaction controller that transforms text object.
   */
  class WebTextInteractionAreaJS extends Vintasoft.Imaging.UI.VisualTools.WebRectangularAreaJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTextInteractionAreaJS"] class.
     * @param textObject A text interactive object.
     */
    constructor(textObject: object);

    // PROPERTIES

    /**
     * Gets the font color.
     */
    get_FontColor(): number;

    /**
     * Sets the font color.
     * @param value Font color.
     */
    set_FontColor(value: number): void;

    /**
     * Gets the name of the font family.
     */
    get_FontFamily(): string;

    /**
     * Sets the name of the font family.
     * @param value The name of the font family.
     */
    set_FontFamily(value: string): void;

    /**
     * Gets the font size.
     */
    get_FontSize(): number;

    /**
     * Sets the font size.
     * @param value Font size.
     */
    set_FontSize(value: number): void;

    /**
     * Gets the width of TextBox.
     */
    get_TextBoxWidth(): number;

    /**
     * Sets the width of TextBox.
     * @param value Width of TextBox.
     */
    set_TextBoxWidth(value: number): void;

    /**
     * Gets the height of TextBox.
     */
    get_TextBoxHeight(): number;

    /**
     * Sets the height of TextBox.
     * @param value Height of TextBox.
     */
    set_TextBoxHeight(value: number): void;

    // METHODS

    /**
     * Removes interaction point.
     */
    remove(): void;

    /**
     * Shows the TextBox element.
     * @param position Point in the browser (screen) coordinate space.
     */
    show(position: object): void;

    /**
     * Hides the TextBox element.
     */
    hide(): void;

  }

  /**
   * The interaction point which is a part of polygon or point-based object.
   */
  class WebPolygonInteractionPointJS extends Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPolygonInteractionPointJS"] class.
     * @param fillColor Fill color of the interaction area.
     * @param borderColor Border color of the interaction area.
     * @param cursor Cursor of the interaction area.
     */
    constructor(fillColor: string, borderColor: string, cursor: string);

  }

  /**
   * The interaction point that allows to resize an interactive object.
   */
  class WebResizeInteractionPointJS extends Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebResizeInteractionPointJS"] class.
     * @param fillColor Fill color of the interaction area.
     * @param borderColor Border color of the interaction area.
     * @param cursor Cursor of the interaction area.
     */
    constructor(fillColor: string, borderColor: string, cursor: string);

    // PROPERTIES

    /**
     * Gets a cursor of the interaction area.
     */
    get_Cursor(): string;

    /**
     * Sets a cursor of the interaction area.
     * @param value cursor of the interaction area.
     */
    set_Cursor(value: string): void;

  }

  /**
   * The interaction point that allows to rotate an interactive object.
   */
  class WebRotationInteractionPointJS extends Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRotationInteractionPointJS"] class.
     * @param fillColor Fill color of the interaction area.
     * @param borderColor Border color of the interaction area.
     * @param cursor Cursor of the interaction area.
     */
    constructor(fillColor: string, borderColor: string, cursor: string);

    // PROPERTIES

    /**
     * Gets the distance, in pixels, from the object's bounding box to the rotation point.
     */
    get_RotationPointDistance(): number;

    /**
     * Sets the distance, in pixels, from the object's bounding box to the rotation point.
     * @param value The distance, in pixels, from the object's bounding box to the rotation point. Default value is 20.
     */
    set_RotationPointDistance(value: number): void;

  }

  /**
   * Contains eight interaction points on bounding box.
   */
  class WebBoundingBoxPointsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebBoundingBoxPointsJS"] class.
     * @param point The template of interaction point.
     */
    constructor(point: object);

    // PROPERTIES

    /**
     * Gets a value indicating whether bounding box must use the sizing cursors as cursors for interaction points of bounding box.
     */
    get_UseSizingCursors(): boolean;

    /**
     * Sets a value indicating whether bounding box must use the sizing cursors as cursors for interaction points of bounding box.
     * @param value true - [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_SizingCursorNS"] must be used as cursor when the bounding box is resizing in north/south or south/north direction, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_SizingCursorWE"] must be used as cursor when the bounding box is resizing in west/east or east/west direction, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_SizingCursorNWSE"] must be used as cursor when the bounding box is resizing in northwest/southeast or southeast/northwest direction, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_SizingCursorNESW"] must be used as cursor for top-right when the bounding box is resizing in northeast/southwest or southwest/northeast direction;<br /> false - [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_TopLeftPoint"].get_Cursor must be used as cursor for top-left interaction point, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_TopPoint"].get_Cursor must be used as cursor for top-center interaction point, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_TopRightPoint"].get_Cursor must be used as cursor for top-right interaction point, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_LeftPoint"].get_Cursor must be used as cursor for center-left interaction point, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_RightPoint"].get_Cursor must be used as cursor for center-right interaction point, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_BottomLeftPoint"].get_Cursor must be used as cursor for bottom-left interaction point, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_BottomPoint"].get_Cursor must be used as cursor for bottom-center interaction point, [see="Vintasoft.Imaging.UI.VisualTools.WebBoundingBoxPointsJS.get_BottomRightPoint"] must be used as cursor for bottom-right interaction point.<br/> Defalut value is true.
     */
    set_UseSizingCursors(value: boolean): void;

    /**
     * Gets the two-headed diagonal (northwest/southeast) sizing cursor.
     */
    get_SizingCursorNWSE(): string;

    /**
     * Sets the two-headed diagonal (northwest/southeast) sizing cursor.
     * @param value Cursor. Default value is "nwse-resize".
     */
    set_SizingCursorNWSE(value: string): void;

    /**
     * Gets the two-headed diagonal (northeast/southwest) sizing cursor.
     */
    get_SizingCursorNESW(): string;

    /**
     * Sets the two-headed diagonal (northeast/southwest) sizing cursor.
     * @param value Cursor. Default value is "nesw-resize".
     */
    set_SizingCursorNESW(value: string): void;

    /**
     * Gets the two-headed vertical (north/south) sizing cursor.
     */
    get_SizingCursorNS(): string;

    /**
     * Sets the two-headed vertical (north/south) sizing cursor.
     * @param value Cursor. Default value is "ns-resize".
     */
    set_SizingCursorNS(value: string): void;

    /**
     * Gets the two-headed horizontal (west/east) sizing cursor.
     */
    get_SizingCursorWE(): string;

    /**
     * Sets the two-headed horizontal (west/east) sizing cursor.
     * @param value Cursor. Default value is "ew-resize".
     */
    set_SizingCursorWE(value: string): void;

    /**
     * Gets the top-left interaction point.
     */
    get_TopLeftPoint(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Gets the top interaction point.
     */
    get_TopPoint(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Gets the right-top interaction point.
     */
    get_TopRightPoint(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Gets the right interaction point.
     */
    get_RightPoint(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Gets the bottom-right interaction point.
     */
    get_BottomRightPoint(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Gets the bottom interaction point.
     */
    get_BottomPoint(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Gets the bottom-left interaction point.
     */
    get_BottomLeftPoint(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Gets the left interaction point.
     */
    get_LeftPoint(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    // METHODS

    /**
     * Removes interaction points.
     */
    remove(): void;

  }

  /**
   * Represents a visual tool for panning an image in image viewer.
   */
  class WebPanToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPanToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Sets a cursor which should be used in image viewer when visual tool executes its action.
     * @param value Cursor name. Default value is "pointer". Supported values: all supported CSS styles for cursor.
     */
    set_ActionCursor(value: string): void;

    // METHODS

    /**
     * Resets the visual tool.
     */
    reset(): void;

  }

  /**
   * Represents a visual tool that allows to display and execute actions (links, navigation, ...) of an image in image viewer.
   */
  class WebDocumentNavigationToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentNavigationToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether this tool supports multipage mode.
     */
    get_IsMultipageModeSupported(): boolean;

    /**
     * Gets the focused action.
     */
    get_FocusedAction(): object;

    /**
     * Gets the executing action.
     */
    get_ExecutingAction(): object;

    /**
     * Gets the action executor that must be used to execute an action.
     */
    get_ActionExecutor(): Vintasoft.Imaging.WebPageContentActionExecutorJS;

    /**
     * Sets the action executor that must be used to execute an action.
     * @param value [see="WebPageContentActionExecutorJS"] object. Default value is [see="WebNavigationActionExecutorJS"] object.
     */
    set_ActionExecutor(value: Vintasoft.Imaging.WebPageContentActionExecutorJS): void;

    // METHODS

    /**
     * Finds the action on specified image at specified location.
     * @param image The image.
     * @param location The point on image, in pixels.
     */
    findAction(image: Vintasoft.Shared.WebImageJS, location: object): object;

    /**
     * Sets the focused action.
     * @param image The image.
     * @param action The action.
     */
    setFocusedAction(image: Vintasoft.Shared.WebImageJS, action: object): boolean;

    /**
     * Sets the executing action.
     * @param image The image.
     * @param action The action.
     */
    setExecutingAction(image: Vintasoft.Shared.WebImageJS, action: object): boolean;

    /**
     * Executes the action.
     * @param image The image that contains the action.
     * @param action The action.
     */
    executeAction(image: Vintasoft.Shared.WebImageJS, action: object): boolean;

  }

  /**
   * Provides the ability to create the visual tool by the visual tool type.
   */
  class WebVisualToolFabricJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebVisualToolFabricJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Registers the visual tool type.
     * @param id The ID of the visual tool type.
     * @param createFunction Function, which allows to create required [see="WebVisualToolJS"] object.
     */
    static registerTool(id: string, createFunction: Function): void;

    /**
     * Unregisters the visual tool type.
     * @param id The ID of the visual tool type.
     */
    static unregisterTool(id: string): void;

    /**
     * Creates visual tool by ID of the visual tool type.
     * @param id The ID of the visual tool type.
     */
    static createToolById(id: string): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS;

    /**
     * Returns IDs of "standard" registered WebVisualToolJS.
     */
    static getAllStandardRegisteredIds(): string[];

    /**
     * Returns all IDs of registered visual tools.
     */
    static getAllRegisteredIds(): string[];

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.Utils {

  // ===== CLASSES =====

  /**
   * Represents a 3x3 transformation matrix used for transformations in 2-D space.
   */
  class WebMatrixJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMatrixJS"] class.
     * @param m11 The m11 coefficient.
     * @param m12 The m12 coefficient.
     * @param m21 The m21 coefficient.
     * @param m22 The m22 coefficient.
     * @param offsetx The offsetx coefficient.
     * @param offsety The offsety coefficient.
     */
    constructor(m11: number, m12: number, m21: number, m22: number, offsetx: number, offsety: number);

    // PROPERTIES

    /**
     * Gets the value of the first row and first column of the matrix (scale X).
     */
    get_m11(): number;

    /**
     * Sets the value of the first row and first column of the matrix (scale X).
     * @param value Value of the first row and first column of the matrix.
     */
    set_m11(value: number): void;

    /**
     * Gets the value of the first row and second column of the matrix.
     */
    get_m12(): number;

    /**
     * Sets the value of the first row and second column of the matrix.
     * @param value Value of the first row and second column of the matrix.
     */
    set_m12(value: number): void;

    /**
     * Gets the value of the second row and first column of the matrix.
     */
    get_m21(): number;

    /**
     * Sets the value of the second row and first column of the matrix.
     * @param value Value of the second row and first column of the matrix.
     */
    set_m21(value: number): void;

    /**
     * Gets the value of the second row and second column of the matrix (scale Y).
     */
    get_m22(): number;

    /**
     * Sets the value of the second row and second column of the matrix (scale Y).
     * @param value Value of the second row and second column of the matrix.
     */
    set_m22(value: number): void;

    /**
     * Gets the value of the third row and first column of the matrix (offset X).
     */
    get_offsetx(): number;

    /**
     * Sets the value of the third row and first column of the matrix (offset X).
     * @param value Value of the third row and first column of the matrix.
     */
    set_offsetx(value: number): void;

    /**
     * Gets the value of the third row and second column of the matrix (offset Y).
     */
    get_offsety(): number;

    /**
     * Sets the value of the third row and second column of the matrix (offset Y).
     * @param value Value of the third row and second column of the matrix.
     */
    set_offsety(value: number): void;

    // METHODS

    /**
     * Returns the determinant of the matrix.
     */
    determinant(): number;

    /**
     * Inverts this matrix.
     */
    invert(): Vintasoft.Imaging.Utils.WebMatrixJS;

    /**
     * Applies matrix to the specified vector.
     * @param vector Vector.
     */
    transformVector(vector: object): object;

    /**
     * Applies matrix to the specified point.
     * @param point Point.
     */
    transformPoint(point: object): object;

    /**
     * Applies matrix to a points array.
     * @param points Array of points, which should be transfomed.
     */
    transformPoints(points: object[]): void;

    /**
     * Applies matrix to the specified rectangle.
     * @param rect Rectangle.
     */
    transformRectangle(rect: object): void;

    /**
     * Multiplies the specified vector with matrix.
     * @param vector Vector.
     */
    multiplyVector(vector: object): void;

    /**
     * Multiplies the specified point with matrix.
     * @param point Point.
     */
    multiplyPoint(point: object): void;

    /**
     * Rotates this matrix about the specified point.
     * @param angle The angle, in degrees, by which to rotate this matrix.
     * @param center The point about which to rotate this matrix.
     */
    rotate(angle: number, center: number): void;

    /**
     * Rotates (prepend) this matrix about the specified point.
     * @param angle The angle, in degrees, by which to rotate this matrix.
     * @param center The point about which to rotate this matrix.
     */
    rotatePrepend(angle: number, center: number): void;

    /**
     * Initializes current matrix using the specified matrix.
     * @param matrix Matrix.
     */
    setMatrix(matrix: Vintasoft.Imaging.Utils.WebMatrixJS): void;

    /**
     * Initializes current matrix using the specified matrix elements.
     * @param m11 M11.
     * @param m12 M12.
     * @param m21 M21.
     * @param m22 M22.
     * @param offsetx OffsetX.
     * @param offsety OffsetY.
     */
    setMatrixElements(m11: number, m12: number, m21: number, m22: number, offsetx: number, offsety: number): void;

    /**
     * Appends a translation of the specified offsets to current matrix.
     * @param dx The amount to offset current matrix along the x-axis.
     * @param dy The amount to offset current matrix along the y-axis.
     */
    translate(dx: number, dy: number): void;

    /**
     * Prepends a translation of the specified offsets to current matrix.
     * @param dx The amount to offset current matrix along the x-axis.
     * @param dy The amount to offset current matrix along the y-axis.
     */
    translatePrepend(dx: number, dy: number): void;

    /**
     * Appends the specified scale vector to current matrix.
     * @param scaleX The value by which to scale this matrix along the x-axis.
     * @param scaleY The value by which to scale this matrix along the y-axis.
     */
    scale(scaleX: number, scaleY: number): void;

    /**
     * Prepends the specified scale vector to current matrix.
     * @param scaleX The value by which to scale this matrix along the x-axis.
     * @param scaleY The value by which to scale this matrix along the y-axis.
     */
    scalePrepend(scaleX: number, scaleY: number): void;

    /**
     * Returns a value indicating whether this instance is equal to a specified matrix.
     * @param m An matrix to compare with this instance.
     */
    compareMatrix(m: Vintasoft.Imaging.Utils.WebMatrixJS): boolean;

    /**
     * Multiplies two matrices.
     * @param first The first matrix.
     * @param second The second matrix.
     */
    static multiplyMatrix(first: Vintasoft.Imaging.Utils.WebMatrixJS, second: Vintasoft.Imaging.Utils.WebMatrixJS): Vintasoft.Imaging.Utils.WebMatrixJS;

  }

  /**
   * Manages caches of web images.
   */
  class WebImageCacheManagerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageCacheManagerJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the maximum allowable cache size in bytes.
     */
    get_MaxCacheSize(): number;

    /**
     * Sets the maximum allowable cache size in bytes.
     * @param value The maximum allowable cache size in bytes. 0 means that cache size is not limited.
     */
    set_MaxCacheSize(value: number): void;

    /**
     * Gets the current cache size in bytes.
     */
    get_CacheSize(): number;

    // METHODS

    /**
     * Adds data, which are associated with specified key, to the image cache.
     * @param image A [see="WebImageJS"] object, which specifies the image cache, where data must be added.
     * @param key A key in image cache.
     * @param data A data, which must be added to the image cache.
     */
    addImageData(image: Vintasoft.Shared.WebImageJS, key: string, data: object): void;

    /**
     * Determines whether the image cache contains data, which are associated with specified key.
     * @param image A [see="WebImageJS"] object, which specifies the image cache, where data must be searched.
     * @param key A key in image cache.
     */
    containsImageData(image: Vintasoft.Shared.WebImageJS, key: string): boolean;

    /**
     * Returns data, which are associated with specified key, from the image cache.
     * @param image A [see="WebImageJS"] object, which is associated with image cache, where data must be searched.
     * @param key A key in image cache.
     */
    getImageData(image: Vintasoft.Shared.WebImageJS, key: string): object;

    /**
     * Clears the images caches.
     */
    clear(): void;

    /**
     * Determines whether the cache contains data for specified image.
     * @param image A [see="WebImageJS"] object.
     */
    contains(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Clears cache of specified image.
     * @param image A [see="WebImageJS"] object, which is associated with image cache, which must be cleared.
     */
    clearImageCache(image: Vintasoft.Shared.WebImageJS): void;

  }

}

