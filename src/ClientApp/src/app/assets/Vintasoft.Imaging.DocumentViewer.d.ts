// Copyright 2014-2024 VintaSoft Llc. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Llc. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer {

  // ===== CLASSES =====

  /**
   * Represents settings for exporting the file.
   */
  class WebExportFileSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebExportFileSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the indexes of images, which should be exported.
     */
    get_ImageIndexes(): number[];

    /**
     * Sets the indexes of images, which should be exported.
     * @param value The indexes of images, which should be exported.
     */
    set_ImageIndexes(value: number[]): void;

    /**
     * Gets the identifier of file, where exported images must be saved.
     */
    get_FileId(): string;

    /**
     * Sets the identifier of file, where exported images must be saved.
     * @param value The identifier of file, where exported images must be saved.
     */
    set_FileId(value: string): void;

    /**
     * Gets a value indicating whether annotations must be saved with images.
     */
    get_SaveAnnotations(): boolean;

    /**
     * Sets a value indicating whether annotations must be saved with images.
     * @param value A value indicating whether annotations must be saved with images.
     */
    set_SaveAnnotations(value: boolean): void;

    /**
     * Gets a value indicating whether annotations must be burned on images.
     */
    get_BurnAnnotations(): boolean;

    /**
     * Sets a value indicating whether annotations must be burned on images.
     * @param value A value indicating whether annotations must be burned on images.
     */
    set_BurnAnnotations(value: boolean): void;

  }

  /**
   * Represents settings of [see="WebDocumentViewerJS"] object.
   */
  class WebDocumentViewerSettingsJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentViewerSettingsJS"] class.
     * @param containerId An identifier of the page element, where the document viewer must be placed.
     * @param localizationId A localization identifier for [see="WebDocumentViewerJS"] object.
     * @param useAnnotations A value indicating whether the document viewer supports annotations.
     */
    constructor(containerId: string, localizationId: string, useAnnotations: boolean);

    /**
     * Initializes a new instance of the [see= "WebDocumentViewerSettingsJS"] class.
     * @param containerId An identifier of the page element, where the document viewer must be placed.
     * @param localizationId A localization identifier for [see="WebDocumentViewerJS"] object.
     */
    constructor(containerId: string, localizationId: string);

    /**
     * Initializes a new instance of the [see= "WebDocumentViewerSettingsJS"] class.
     * @param containerId An identifier of the page element, where the document viewer must be placed.
     */
    constructor(containerId: string);

    // PROPERTIES

    /**
     * Gets a value indicating whether the main menu of web document viewer should contain the annotation menu.
     */
    get_ShowAnnotationMenuInMainMenu(): boolean;

    /**
     * Sets a value indicating whether the main menu of web document viewer should contain the annotation menu.
     * @param value A value indicating whether the main menu of web document viewer should contain the annotation menu.
     */
    set_ShowAnnotationMenuInMainMenu(value: boolean): void;

    /**
     * Gets a value indicating whether the the side panel should contain the annotation list panel.
     */
    get_ShowAnnotationListPanelInSidePanel(): boolean;

    /**
     * Sets a value indicating whether the the side panel of web document viewer should contain the annotation list panel.
     * @param value A value indicating whether the the side panel of web document viewer should contain the annotation list panel.
     */
    set_ShowAnnotationListPanelInSidePanel(value: boolean): void;

    /**
     * Gets a value indicating whether the side panel of web document viewer should contain the annotation comment list panel.
     */
    get_ShowAnnotationCommentListPanelInSidePanel(): boolean;

    /**
     * Sets a value indicating whether the side panel of web document viewer should contain the annotation comment list panel.
     * @param value A value indicating whether the side panel of web document viewer should contain the annotation comment list panel.
     */
    set_ShowAnnotationCommentListPanelInSidePanel(value: boolean): void;

    /**
     * Gets a value indicating whether web document viewer has button that allows to add file to the viewer.
     */
    get_CanAddFile(): boolean;

    /**
     * Sets a value indicating whether web document viewer has button that allows to add file to the viewer.
     * @param value A value indicating whether web document viewer has button that allows to add file to the viewer.
     */
    set_CanAddFile(value: boolean): void;

    /**
     * Gets a value indicating whether web document viewer allows to resize the side panel.
     */
    get_CanResizeSidePanel(): boolean;

    /**
     * Sets a value indicating whether web document viewer allows to resize the side panel.
     * @param value A value indicating whether web document viewer allows to resize the side panel.
     */
    set_CanResizeSidePanel(value: boolean): void;

  }

  /**
   * A JavaScript UI control that represents web document viewer.
   */
  class WebDocumentViewerJS extends Vintasoft.Imaging.UI.UIElements.WebUiControlJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentViewerJS"] class.
     * @param settings An instance of [see="WebDocumentViewerSettingsJS"] class.
     */
    constructor(settings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS);

    // PROPERTIES

    /**
     * Gets an image viewer, which is associated with this document viewer.
     */
    get_ImageViewer(): Vintasoft.Imaging.UI.WebImageViewerJS;

    /**
     * Gets a thumbnail viewer, which is associated with this document viewer.
     */
    get_ThumbnailViewer(): Vintasoft.Imaging.UI.WebThumbnailViewerJS;

    /**
     * Gets an identifier of file that was previously opened using the [see="WebDocumentViewerJS.openFile"] or [see="WebDocumentViewerJS.openFileWithAuthentication"] function.
     */
    get_OpenedFileId(): string;

    /**
     * Gets a clipboard object for this document viewer.
     */
    get_Clipboard(): Vintasoft.Shared.WebObjectClipboardJS;

    /**
     * Gets a document layout settings.
     */
    get_DocumentLayoutSettings(): Vintasoft.Shared.WebDocumentLayoutSettingsJS;

    /**
     * Sets a document layout settings.
     * @param value A document layout settings. Default value is <b>null</b>.
     */
    set_DocumentLayoutSettings(value: Vintasoft.Shared.WebDocumentLayoutSettingsJS): void;

    /**
     * Gets the mandatory visual tool of the document viewer. Combination of "current visual tool" and "mandatory visual tool" is used as current visual tool in image viewer.
     */
    get_MandatoryVisualTool(): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS;

    /**
     * Sets the mandatory visual tool of the document viewer. Combination of "current visual tool" and "mandatory visual tool" is used as current visual tool in image viewer.
     * @param tool [see="WebVisualToolJS"] object OR null. Default value is null.
     */
    set_MandatoryVisualTool(value: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS): void;

    /**
     * Gets the current visual tool of the document viewer. Combination of "current visual tool" and "mandatory visual tool" is used as current visual tool in image viewer.
     */
    get_CurrentVisualTool(): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS;

    /**
     * Sets the current visual tool of the document viewer. Combination of "current visual tool" and "mandatory visual tool" is used as current visual tool in image viewer.
     * @param tool [see="WebVisualToolJS"] object OR null. Default value is null.
     */
    set_CurrentVisualTool(value: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS): void;

    /**
     * Gets the localization identifier of UI element.
     */
    get_LocalizationId(): string;

    /**
     * Gets the current user.
     */
    get_CurrentUser(): string;

    /**
     * Sets the current user.
     * @param value The current user.
     */
    set_CurrentUser(value: string): void;

    // METHODS

    /**
     * Clears the current visual tool of the document viewer.
     */
    clearCurrentVisualTool(): void;

    /**
     * Returns an image collection, which is associated with the document viewer.
     */
    getImages(): Vintasoft.Shared.WebImageCollectionJS;

    /**
     * Sends an asynchronous request to authenticate a file with password.
     * @param fileId A file identifier.
     * @param filePassword A file password.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> <li>filePassword (string): A file password.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br /> Here is function prototype "function __error(data)".<br /> The data parameter can be:<br /> <ol> <li>An object with following properties:<br /> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    authenticateFile(fileId: string, filePassword: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to authenticate a file with password.
     * @param fileId A file identifier.
     * @param filePassword A file password.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> <li>filePassword (string): A file password.</li> </ul>
     */
    authenticateFile(fileId: string, filePassword: string, successFunc: Function): void;

    /**
     * Sends an asynchronous request to authenticate a file with password.
     * @param fileId A file identifier.
     * @param filePassword A file password.
     */
    authenticateFile(fileId: string, filePassword: string): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId A string that represents the identifier of file, which is stored on server, or URL to a file.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    openFile(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    openFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId A string that represents the identifier of file, which is stored on server, or URL to a file.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    openFile(fileId: string, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    openFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId A string that represents the identifier of file, which is stored on server, or URL to a file.
     */
    openFile(fileId: string): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     */
    openFile(fileId: Vintasoft.Shared.WebFileInfoJS): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId A string that represents the identifier of file, which is stored on server, or URL to a file.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    addFile(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    addFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId A string that represents the identifier of file, which is stored on server, or URL to a file.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    addFile(fileId: string, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    addFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId A string that represents the identifier of file, which is stored on server, or URL to a file.
     */
    addFile(fileId: string): void;

    /**
     * Sends an asynchronous request to a server, gets information (without file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     */
    addFile(fileId: Vintasoft.Shared.WebFileInfoJS): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId A string, which represents the file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    openFileWithAuthentication(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    openFileWithAuthentication(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId A string, which represents the file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    openFileWithAuthentication(fileId: string, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    openFileWithAuthentication(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId A string, which represents the file identifier.
     */
    openFileWithAuthentication(fileId: string): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server, clears the web document viewer and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     */
    openFileWithAuthentication(fileId: Vintasoft.Shared.WebFileInfoJS): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId A string, which represents the file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    addFileWithAuthentication(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    addFileWithAuthentication(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId A string, which represents the file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    addFileWithAuthentication(fileId: string, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    addFileWithAuthentication(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId A string, which represents the file identifier.
     */
    addFileWithAuthentication(fileId: string): void;

    /**
     * Sends an asynchronous request to a server, gets information (with file authentication) about images, which are stored in file on server and adds images to the web document viewer.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     */
    addFileWithAuthentication(fileId: Vintasoft.Shared.WebFileInfoJS): void;

    /**
     * Saves changes in a file that was previously opened using the [see="WebDocumentViewerJS.openFile"] or [see="WebDocumentViewerJS.openFileWithAuthentication"] function.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br /> Here is function prototype "function __error(data)".<br /> The data parameter can be:<br /> <ol> <li>An object with following properties:<br /> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    saveChanges(successFunc: Function, errorFunc: Function): void;

    /**
     * Saves changes in a file that was previously opened using the [see="WebDocumentViewerJS.openFile"] or [see="WebDocumentViewerJS.openFileWithAuthentication"] function.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> </ul>
     */
    saveChanges(successFunc: Function): void;

    /**
     * Saves changes in a file that was previously opened using the [see="WebDocumentViewerJS.openFile"] or [see="WebDocumentViewerJS.openFileWithAuthentication"] function.
     */
    saveChanges(): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    exportFile(exportFileSettings: Vintasoft.Imaging.DocumentViewer.WebExportFileSettingsJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    exportFile(exportFileSettings: Vintasoft.Imaging.DocumentViewer.WebExportFileSettingsJS, successFunc: Function): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     */
    exportFile(exportFileSettings: Vintasoft.Imaging.DocumentViewer.WebExportFileSettingsJS): void;

    /**
     * Saves changes in a file, which was previously opened using the [see="WebDocumentViewerJS.openFile"] or [see="WebDocumentViewerJS.openFileWithAuthentication"] function, and downloads the file.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br /> Here is function prototype "function __error(data)".<br /> The data parameter can be:<br /> <ol> <li>An object with following properties:<br /> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    saveChangesAndDownloadFile(successFunc: Function, errorFunc: Function): void;

    /**
     * Saves changes in a file, which was previously opened using the [see="WebDocumentViewerJS.openFile"] or [see="WebDocumentViewerJS.openFileWithAuthentication"] function, and downloads the file.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> </ul>
     */
    saveChangesAndDownloadFile(successFunc: Function): void;

    /**
     * Saves changes in a file, which was previously opened using the [see="WebDocumentViewerJS.openFile"] or [see="WebDocumentViewerJS.openFileWithAuthentication"] function, and downloads the file.
     */
    saveChangesAndDownloadFile(): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file and downloads the file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br /> Here is function prototype "function __error(data)".<br /> The data parameter can be:<br /> <ol> <li>An object with following properties:<br /> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    exportAndDownloadFile(exportFileSettings: Vintasoft.Imaging.DocumentViewer.WebExportFileSettingsJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file and downloads the file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> </ul>
     */
    exportAndDownloadFile(exportFileSettings: Vintasoft.Imaging.DocumentViewer.WebExportFileSettingsJS, successFunc: Function): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file and downloads the file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     */
    exportAndDownloadFile(exportFileSettings: Vintasoft.Imaging.DocumentViewer.WebExportFileSettingsJS): void;

    /**
     * Downloads a file from server.
     * @param fileId A string that represents the identifier of file that should be downloaded.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    downloadFile(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Downloads a file from server.
     * @param fileId A string that represents the identifier of file that should be downloaded.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    downloadFile(fileId: string, successFunc: Function): void;

    /**
     * Downloads a file from server.
     * @param fileId A string that represents the identifier of file that should be downloaded.
     */
    downloadFile(fileId: string): void;

    /**
     * Navigates an image viewer to the previous image.
     */
    gotoPreviousPage(): void;

    /**
     * Navigates an image viewer to the next image.
     */
    gotoNextPage(): void;

    /**
     * Navigates an image viewer to the specified image.
     * @param index New index of focused image.
     */
    gotoPage(index: number): void;

    /**
     * Removes the specified page from image collection.
     * @param index An index of page to remove.
     */
    removePage(index: number): void;

    /**
     * Removes the specified pages from image collection.
     * @param indexes An array of indexes of page to remove.
     */
    removePages(indexes: number[]): void;

    /**
     * Swaps the specified pages in source document.
     * @param firstIndex An index of first page to swap.
     * @param secondIndex An index of second page to swap.
     */
    swapPages(firstIndex: number, secondIndex: number): void;

    /**
     * Returns the index of focused image.
     */
    getFocusedIndex(): number;

    /**
     * Sets a value indicating how an image is positioned within the viewer.
     * @param value An instance of [see="WebImageSizeModeEnumJS"] class.
     */
    setSizeMode(value: Vintasoft.Imaging.WebImageSizeModeEnumJS): void;

    /**
     * Sets the image zoom in the viewer.
     * @param value New image zoom.
     */
    setZoom(value: number): void;

    /**
     * Returns the [see="WebAnnotationViewerUndoMonitorJS"], which is associated with image viewer of document viewer.
     */
    getAnnotationViewerUndoMonitor(): object;

    /**
     * Returns the [see="WebInteractionAreaAppearanceManagerJS"], which is associated with image viewer of document viewer.
     */
    getInteractionAreaAppearanceManager(): object;

    /**
     * Removes the focused annotation from the annotation collection of focused image.
     */
    removeFocusedAnnotation(): void;

    /**
     * Groups the annotations from annotation collection of focused image and creates the group annotation.
     */
    groupAllAnnotations(): void;

    /**
     * Ungroups the focused group annotation and adds ungrouped annotations into annotation collection of focused image.
     */
    ungroupFocusedAnnotation(): void;

    /**
     * Brings the focused annotation to the last position in the annotation collection of focused image.
     */
    bringFocusedAnnotationToFront(): void;

    /**
     * Brings the focused annotation to the first position in the annotation collection of focused image.
     */
    bringFocusedAnnotationToBack(): void;

    /**
     * Registers the visual tool type.
     * @param id The identifier of visual tool type.
     * @param visualTool [see="WebVisualToolJS"] object.
     */
    registerVisualTool(id: string, visualTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS): void;

    /**
     * Unregisters the visual tool type.
     * @param id The identifier of visual tool type.
     */
    unregisterVisualTool(id: string): void;

    /**
     * Returns visual tool by ID of the visual tool type.
     * @param id The ID of the visual tool type.
     */
    getVisualToolById(id: string): Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS;

    /**
     * Returns identifiers of "standard" registered WebVisualToolJS.
     */
    getAllStandardRegisteredVisualToolIds(): string[];

    /**
     * Returns all identifiers of registered visual tools.
     */
    getAllRegisteredVisualToolIds(): string[];

    /**
     * Clears cache for current HTTP session.
     */
    clearSessionCache(): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer.Panels {

  // ===== CLASSES =====

  /**
   * A web UI panel that allows to select images, which are shown in image viewer.
   */
  class WebUiImageSelectionPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiImageSelectionPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
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
     * Creates and returns markup of UI element.
     * @param floatContainer A DOM-element, where floating elements must be placed.
     */
    render(floatContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Destroys the UI element.
     */
    destroy(): void;

    /**
     * Returns the selected images.
     */
    getSelectedImages(): Vintasoft.Shared.WebImageJS[];

  }

  /**
   * A web UI panel that allows to enter URL of the image/document file to be opened in web document viewer.
   */
  class WebUiUploadImageFromUrlPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiUploadImageFromUrlPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param documentViewer The document viewer.
     */
    constructor(settings: object, documentViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

    /**
     * Downloads a file from URL and opens uploaded file in the web document viewer.
     */
    uploadImageFromUrl(): void;

  }

  /**
   * A web UI panel that allows to view and change the document layout settings in web document viewer.
   */
  class WebDocumentLayoutSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentLayoutSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param documentViewer The document viewer.
     */
    constructor(settings: object, documentViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS);

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Copies the document layout settings from this panel to the web document viewer.
     */
    applySettings(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to view and change settings for exporting images to a file.
   */
  class WebExportFileSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebExportFileSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param documentViewer The document viewer.
     */
    constructor(settings: object, documentViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS);

    // PROPERTIES

    /**
     * Gets a value indicating whether dialog must show UI-elements, which allow to export annotations with file.
     */
    get_SupportAnnotations(): boolean;

    /**
     * Sets a value indicating whether dialog must show UI-elements, which allow to export annotations with file.
     * @param value A value indicating whether dialog must show UI-elements, which allow to export annotations with file.
     */
    set_SupportAnnotations(value: boolean): void;

    // METHODS

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns export file settings.
     */
    getExportFileSettings(): Vintasoft.Imaging.DocumentViewer.WebExportFileSettingsJS;

  }

  /**
   * A web UI panel that allows to print images, which are shown in image viewer.
   */
  class WebUiPrintImagesSettingsPanelJS extends Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageSelectionPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPrintImagesSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Prints images.
     */
    print(): void;

    /**
     * Aborts printing.
     */
    abort(): void;

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
   * A web UI panel that allows to view and edit the image viewer settings.
   */
  class WebUiImageViewerSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiImageViewerSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Applies the current settings to the image viewer.
     */
    applySettings(): void;

    /**
     * Resets the panel settings to the image viewer state.
     */
    resetSettings(): void;

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
   * A web UI panel that allows to view and edit the thumbnail viewer settings.
   */
  class WebUiThumbnailViewerSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiThumbnailViewerSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Applies the current settings to the thumbnail viewer.
     */
    applySettings(): void;

    /**
     * Resets the panel settings to the thumbnail viewer state.
     */
    resetSettings(): void;

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
   * A web UI panel that allows to display an image viewer.
   */
  class WebUiImageViewerPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiImageViewerPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>annotations (boolean): Value indicating whether the viewer support annotations.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiImageViewerPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>annotations (boolean): Value indicating whether the viewer support annotations.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the image viewer, which is associated with this panel.
     */
    get_ImageViewer(): Vintasoft.Imaging.UI.WebImageViewerJS;

    /**
     * Sets a context menu associated with this panel.
     * @param value The [see="WebUiContextMenuJS"] object OR null.
     */
    set_ContextMenu(value: Vintasoft.Imaging.UI.UIElements.WebUiContextMenuJS): void;

    /**
     * Gets a value indicating whether panel should show a context menu that allows to set custom image rotation.
     */
    get_CanSetCustomViewRotationUsingContextMenu(): boolean;

    /**
     * Sets a value indicating whether panel should show a context menu that allows to set custom image rotation.
     * @param value A value indicating whether panel should show a context menu that allows to set custom image rotation.
     */
    set_CanSetCustomViewRotationUsingContextMenu(value: boolean): void;

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
   * A web UI panel that allows to display a thumbnail viewer.
   */
  class WebUiThumbnailViewerPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiThumbnailViewerPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>annotations (boolean): Value indicating whether the viewer support annotations.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiThumbnailViewerPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>annotations (boolean): Value indicating whether the viewer support annotations.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets the thumbnail viewer, which is associated with this panel.
     */
    get_ThumbnailViewer(): Vintasoft.Imaging.UI.WebThumbnailViewerJS;

    /**
     * Gets a value indicating whether the thumbnail viewer allows to delete thumbnails using keyboard ("Delete" key).
     */
    get_CanDeleteThumbnailsUsingKeyboard(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows to delete thumbnails using keyboard ("Delete" key).
     * @param value A value indicating whether the thumbnail viewer allows to delete thumbnails using keyboard.
     */
    set_CanDeleteThumbnailsUsingKeyboard(value: boolean): void;

    /**
     * Gets a value indicating whether the thumbnail viewer allows to delete thumbnails using context menu.
     */
    get_CanDeleteThumbnailsUsingContextMenu(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows to delete thumbnails using context menu.
     * @param value A value indicating whether the thumbnail viewer allows to delete thumbnails using context menu.
     */
    set_CanDeleteThumbnailsUsingContextMenu(value: boolean): void;

    /**
     * Gets a value indicating whether the thumbnail viewer allows to rotate thumbnail view using context menu.
     */
    get_CanSetCustomViewRotationUsingContextMenu(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows to rotate thumbnail view using context menu.
     * @param value A value indicating whether the thumbnail viewer allows to rotate thumbnail view using context menu.
     */
    set_CanSetCustomViewRotationUsingContextMenu(value: boolean): void;

    /**
     * Gets a value indicating whether the thumbnail viewer allows to move thumbnail using context menu.
     */
    get_CanMoveThumbnailUsingContextMenu(): boolean;

    /**
     * Sets a value indicating whether the thumbnail viewer allows to move thumbnail using context menu.
     * @param value A value indicating whether the thumbnail viewer allows to move thumbnail using context menu.
     */
    set_CanMoveThumbnailUsingContextMenu(value: boolean): void;

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
   * A web UI panel that allows to view a list of image processing commands, select the image processing command and apply the image processing command to an image in image viewer.
   */
  class WebUiImageProcessingPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiImageProcessingPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>commandNames (object): A string array that contains names of commands, which should be displayed in this panel.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiImageProcessingPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> <li>commandNames (object): A string array that contains names of commands, which should be displayed in this panel.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI toolbar panel that allows to work with image files (load, print and save).
   */
  class WebUiFileToolbarPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiFileToolbarPanelJS"] class.
     * @param settings The settings of toolbar panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI toolbar panel that allows to navigate between images in document viewer.
   */
  class WebUiNavigationToolbarPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiNavigationToolbarPanelJS"] class.
     * @param settings The settings of toolbar panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI toolbar panel that allows to zoom images in document viewer.
   */
  class WebUiZoomToolbarPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiZoomToolbarPanelJS"] class.
     * @param settings The settings of toolbar panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI toolbar panel that allows to rotate image in document viewer.
   */
  class WebUiRotationToolbarPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiRotationToolbarPanelJS"] class.
     * @param settings The settings of toolbar panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI toolbar panel that allows to select visual tools.
   */
  class WebUiVisualToolsToolbarPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiVisualToolsToolbarPanelJS"] class.
     * @param settings The settings of toolbar panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI panel that allows to select text on image.
   */
  class WebUiTextSelectionPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiTextSelectionPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties:<br /> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state ([see="WebUiElementJS.get_ActiveState"]) has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiTextSelectionPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties:<br /> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state ([see="WebUiElementJS.get_ActiveState"]) has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI panel that allows to search text on images.
   */
  class WebUiTextSearchPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiTextSearchPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties:<br /> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state ([see="WebUiElementJS.get_ActiveState"]) has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiTextSearchPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties:<br /> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state ([see="WebUiElementJS.get_ActiveState"]) has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets a function, which returns UI elements for the header of text search results on image page.
     */
    get_CreatePageResultHeaderContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the header of text search results on image page.
     * @param value A function, which returns UI elements for the header of text search results on image page, OR "null".<br /> Here is function prototype "function __createSearchResultHeaderContent(image, imageIndex, searchResults)", where "image" - [see="WebImageJS"] object, "imageIndex" - zero-based index of "image" in image viewer collection, "searchResults" - array of search results. <b>Important:</b> "__createSearchResultHeaderContent" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreatePageResultHeaderContentCallback(value: Function): void;

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
   * A web UI toolbar panel that allows to work with annotations.
   */
  class WebUiAnnotationToolbarJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationToolbarJS"] class.
     * @param settings The settings of toolbar panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI panel that allows to view the annotation list and navigate between annotations.
   */
  class WebUiAnnotationListPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationListPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationListPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets a function, which returns UI elements for the annotation list record.
     */
    get_CreateAnnotationContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the annotation list record.
     * @param value A function, which returns UI elements for the annotation list record, OR "null".<br /> Here is function prototype "function __createAnnotationContent(annotation, annotationCollection)", where "annotation" parameter is an instance of [see="WebAnnotationViewJS"] type, "annotationCollection" parameter is an instance of [see="WebAnnotationViewCollectionJS"] type. <b>Important:</b> "__createAnnotationContent" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreateAnnotationContentCallback(value: Function): void;

    /**
     * Gets a function, which returns UI elements for the header of annotation collection in annotation list panel.
     */
    get_CreateCollectionHeaderContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the header of annotation collection in annotation list panel.
     * @param value A function, which returns UI elements for the header of annotation collection in annotation list panel, OR "null".<br /> Here is function prototype "function __createAnnotationCollectionHeaderContent(annotationCollection, index)", where "annotationCollection" parameter is an instance of [see="WebAnnotationViewCollectionJS"] type, index - zero-based index of annotation collection. <b>Important:</b> "__createAnnotationCollectionHeaderContent" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreateCollectionHeaderContentCallback(value: Function): void;

    // METHODS

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI panel that allows to rotate focused image with annotations.
   */
  class WebUiRotateImageWithAnnotationsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiRotateImageWithAnnotationsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Rotates image with annotations.
     */
    rotate(): void;

  }

  /**
   * A web UI panel that allows to change settings of the annotation comment.
   */
  class WebUiAnnotationCommentSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationCommentSettingsPanelJS"] class.
     * @param commentListPanel A panel that displays list of annotation comments.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(commentListPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiAnnotationCommentListPanelJS, settings: object);

    // METHODS

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
     * Sets the annotation comment.
     * @param annotationComment An instance of [WebAnnotationCommentJS] type that should be used as a source for this panel.
     */
    setComment(annotationComment: object): void;

    /**
     * Applies the changes in panel UI to the annotation comment.
     */
    editComment(): void;

    /**
     * Deletes the annotation comment that is used by this panel.
     */
    deleteComment(): void;

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to display a list of annotation comments.
   */
  class WebUiAnnotationCommentListPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationCommentListPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: object);

    // PROPERTIES

    /**
     * Gets the maximum allowable count of nested replies.
     */
    get_MaxNestedReplyCount(): number;

    /**
     * Sets the maximum allowable count of nested replies.
     * @param value The maximum allowable count of nested replies. Default value is 10.
     */
    set_MaxNestedReplyCount(value: number): void;

    // METHODS

    /**
     * Adds comment to the specified annotation.
     * @param annotation An annotation (instance of [WebAnnotationViewJS] type) that should be commented.
     * @param userName The name of user, who added the comment.
     */
    addComment(annotation: object, userName: string): object;

    /**
     * Shows the dialog that allows to edit settings of annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type) that should be edited.
     */
    editComment(comment: object): void;

    /**
     * Deletes the annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type) that should be deleted.
     */
    deleteComment(comment: object): void;

    /**
     * Adds reply to the annotation comment and displays a dialog that allows to edit the comment reply.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type) that should be replied.
     * @param userName The name of user, who added the reply.
     */
    addCommentReply(comment: object, userName: string): void;

    /**
     * Adds the state comment to the annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type) that is edited.
     * @param parent An annotation comment  (an instance of [WebAnnotationCommentJS] type) that is a parent comment for the comment that is edited.
     * @param userName The name of user, who added the reply.
     * @param status The new state of annotation comment.
     */
    addStateComment(comment: object, parent: object, userName: string, status: string): void;

    /**
     * Finds the root comment for specified annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type).
     */
    getRootComment(comment: object): object;

    /**
     * Finds the first state comment for specified annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type).
     */
    findFirstStateComment(comment: object): void;

    /**
     * Finds the last state comment for specified annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type).
     */
    findLastStateComment(comment: object): void;

    /**
     * Sets a value indicating whether the panel must show the state history for comment and all replies for comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type).
     * @param isShow A value indicating whether the panel must show the state history for comment and all replies for comment.
     */
    setIsShowStateHistoryForAllReplies(comment: object, isShow: boolean): void;

    /**
     * Clears the comment list.
     */
    clear(): void;

    /**
     * Updates this panel.
     */
    update(): void;

  }

  /**
   * A web UI panel that allows to view PDF bookmarks and navigate PDF document using bookmarks.
   */
  class WebUiPdfBookmarksPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfBookmarksPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiPdfBookmarksPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI panel that shows the list of all image resources associated with PDF page.
   */
  class WebUiPdfImageResourceExtractionPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfImageResourceExtractionPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiPdfImageResourceExtractionPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets a function, which returns description for [see="WebContentImageJS"] object.
     */
    get_ContentImageDescriptionCallback(): Function;

    /**
     * Sets a function, which returns description for [see="WebContentImageJS"] object.
     * @param value A function, which returns description for [see="WebContentImageJS"] object, OR "null".<br /> Here is function prototype "function __getDescriptionForContentImage(contentImage)", where "contentImage" parameter is an instance of [see="WebContentImageJS"] type. <b>Important:</b> "__getDescriptionForContentImage" function must return string which contains description of content image.
     */
    set_ContentImageDescriptionCallback(value: Function): void;

    // METHODS

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI panel that shows the list of all interactive fields associated with opened PDF pages.
   */
  class WebUiPdfInteractiveFormFieldsPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfInteractiveFormFieldsPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiPdfInteractiveFormFieldsPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets a function, which returns UI elements for the interaction field list record.
     */
    get_CreateInteractionFieldContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the interaction field list record.
     * @param value A function, which returns UI elements for the interaction field list record, OR "null".<br /> Here is function prototype "function __createFieldContent(field)", where "field" parameter is an instance of [see="WebPdfInteractiveFormFieldJS"] type. <b>Important:</b> "__createFieldContent" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreateInteractionFieldContentCallback(value: Function): void;

    /**
     * Gets a function, which returns UI elements for the header of page interactive fields collection.
     */
    get_CreatePageFieldsHeaderContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the header of page interactive fields collection.
     * @param value A function, which returns UI elements for the header of page interactive fields collection, OR "null".<br /> Here is function prototype "function __createPageFieldsHeaderCallback(image, index)", where "image" parameter is an instance of [see="WebImageJS"] type, index - zero-based index of image in image collection. <b>Important:</b> "__createPageFieldsHeaderCallback" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreatePageFieldsHeaderContentCallback(value: Function): void;

    // METHODS

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI panel that allows to view and edit the appearance of PDF redaction mark.
   */
  class WebUiPdfRedactionMarkAppearancePanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfRedactionMarkAppearancePanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
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

  }

  /**
   * A web UI panel that allows to view and edit the settings of PDF redaction mark.
   */
  class WebUiPdfRedactionMarkSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfRedactionMarkSettingsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param pdfRedactionMark Redaction mark, which settings should be shown in dialog.
     */
    constructor(settings: object, pdfRedactionMark: object);

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
   * A web UI panel that allows to view the PDF redaction marks list and navigate between redaction marks.
   */
  class WebUiPdfRedactionMarkListPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfRedactionMarkListPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiPdfRedactionMarkListPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets a function, which returns UI elements for the redaction marks list record.
     */
    get_CreateRedactionMarkContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the redaction marks list record.
     * @param value A function, which returns UI elements for the redaction marks list record, OR "null".<br /> Here is function prototype "function __createRedactionMarkContent(mark, markCollection)", where "mark" parameter is an instance of [see="WebPdfRedactionMarkJS"] type, "markCollection" parameter is an instance of [see="WebPdfRedactionMarkCollectionJS"] type.<br /> <b>Important:</b> "__createRedactionMarkContent" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreateRedactionMarkContentCallback(value: Function): void;

    /**
     * Gets a function, which returns UI elements for the header of marks collection in redaction marks list panel.
     */
    get_CreateCollectionHeaderContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the header of marks collection in redaction marks list panel.
     * @param value A function, which returns UI elements for the header of marks collection in redaction marks list panel, OR "null".<br /> Here is function prototype "function __createMarksCollectionHeaderContent(markCollection, index)", where "markCollection" parameter is an instance of [see="WebPdfRedactionMarkCollectionJS"] type, index - zero-based index of redaction marks collection.<br /> <b>Important:</b> "__createMarksCollectionHeaderContent" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreateCollectionHeaderContentCallback(value: Function): void;

    // METHODS

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI panel that allows to view information about a PDF image resource.
   */
  class WebUiPdfImageResourcePanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfImageResourcePanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param image An instance of [see="WebContentImageJS"] class.
     */
    constructor(settings: object, image: object);

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
   * A web UI panel that allows to view the list of TWAIN devices installed in the system and select the device.
   */
  class WebUiTwainSelectDevicePanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiTwainSelectDevicePanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param deviceManager An instance of Vintasoft.Twain.WebTwainDeviceManagerJS class that represents opened TWAIN device manager.
     */
    constructor(settings: object, deviceManager: object);

    // PROPERTIES

    /**
     * Gets a value indicating whether the device UI must be shown.
     */
    get_ShowUI(): boolean;

    /**
     * Gets a value indicating whether the device capabilities must be changed.
     */
    get_ChangeDeviceCapabilities(): boolean;

    /**
     * Gets a selected TWAIN device.
     */
    get_SelectedDevice(): object;

  }

  /**
   * A web UI panel that allows to work with TWAIN device capabilities.
   */
  class WebUiTwainDeviceCapabilitiesPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiTwainDeviceCapabilitiesPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param device An instance of Vintasoft.Twain.WebTwainDeviceJS class that represents opened TWAIN device manager.
     */
    constructor(settings: object, device: object);

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer.UIElements {

  // ===== CLASSES =====

  /**
   * A web UI element that represents button for enabling the specified visual tool in image viewer.
   */
  class WebUiVisualToolButtonJS extends Vintasoft.Imaging.UI.UIElements.WebUiButtonJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiVisualToolButtonJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }".<br/> <b>Important:</b> 'click' event callback will be ignored. </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): <b>Important:</b> value will be ignored.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param toolId The identifier of the visual tool type, which is registered in [see="WebDocumentViewerJS.getAllRegisteredVisualToolIds"].
     */
    constructor(settings: object, toolId: string);

    // METHODS

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI context menu for image viewer.
   */
  class WebImageViewerContextMenuJS extends Vintasoft.Imaging.UI.UIElements.WebUiContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageViewerContextMenuJS"] class.
     * @param imageViewer An image viewer.
     * @param settings Settings of context menu. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS, settings: object);

    // PROPERTIES

    /**
     * Gets a value indicating whether context menu should contain items, which allow to rotate image view.
     */
    get_CanSetCustomViewRotation(): boolean;

    /**
     * Sets a value indicating whether context menu should contain items, which allow to rotate image view.
     * @param value A value indicating whether context menu should contain items, which allow to rotate image view.
     */
    set_CanSetCustomViewRotation(value: boolean): void;

  }

  /**
   * A web UI context menu for thumbnail viewer.
   */
  class WebThumbnailViewerContextMenuJS extends Vintasoft.Imaging.UI.UIElements.WebUiContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebThumbnailViewerContextMenuJS"] class.
     * @param thumbnailViewer Thumbnail viewer.
     * @param settings Settings of context menu. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(thumbnailViewer: Vintasoft.Imaging.UI.WebThumbnailViewerJS, settings: object);

    // PROPERTIES

    /**
     * Gets a value indicating whether context menu should contain items, which allow to delete thumbnails.
     */
    get_CanDeleteThumbnails(): boolean;

    /**
     * Sets a value indicating whether context menu should contain items, which allow to delete thumbnails.
     * @param value A value indicating whether context menu should contain items, which allow to delete thumbnails.
     */
    set_CanDeleteThumbnails(value: boolean): void;

    /**
     * Gets a value indicating whether context menu should contain items, which allow to rotate thumbnail view.
     */
    get_CanSetCustomViewRotation(): boolean;

    /**
     * Sets a value indicating whether context menu should contain items, which allow to rotate thumbnail view.
     * @param value A value indicating whether context menu should contain items, which allow to rotate thumbnail view.
     */
    set_CanSetCustomViewRotation(value: boolean): void;

    /**
     * Gets a value indicating whether context menu should contain items, which allow to move thumbnail.
     */
    get_CanMoveThumbnail(): boolean;

    /**
     * Sets a value indicating whether context menu should contain items, which allow to move thumbnail.
     * @param value A value indicating whether context menu should contain items, which allow to move thumbnail.
     */
    set_CanMoveThumbnail(value: boolean): void;

  }

  /**
   * A web UI element that represent button for creating and adding specified annotation in annotation viewer.
   */
  class WebUiAnnotationButtonJS extends Vintasoft.Imaging.UI.UIElements.WebUiButtonJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationButtonJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }".<br/> <b>Important:</b> 'click' event callback will be ignored. </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): <b>Important:</b> value will be ignored.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param annotationId The ID of the annotation view type registered in [see="WebAnnotationViewFabricJS"].
     */
    constructor(settings: object, annotationId: string);

    // METHODS

    /**
     * Creates an annotation view associated with current button.
     */
    createAnnotation(): object;

  }

  /**
   * A web UI context menu for annotation viewer.
   */
  class WebAnnotationViewerContextMenuJS extends Vintasoft.Imaging.DocumentViewer.UIElements.WebImageViewerContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewerContextMenuJS"] class.
     * @param imageViewer Image viewer.
     * @param settings Settings of context menu. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS, settings: object);

    // PROPERTIES

    /**
     * Gets a function, which will be called when "Add annotation comment..." menu is selected.
     */
    get_AddAnnotationCommentCallback(): Function;

    /**
     * Sets a function, which will be called when "Add annotation comment..." menu is selected.
     * @param value A function, which will be called when "Add annotation comment..." menu is selected.<br/> Here is function prototype "function __showAddAnnotationCommentDialog(docViewer, focusedAnnotation)", where "docViewer" parameter is an instance of [see="WebDocumentViewerJS"] class, "annotation" parameter is an instance of [see="WebAnnotationViewJS"] type.
     */
    set_AddAnnotationCommentCallback(value: Function): void;

    /**
     * Gets a function, which will be called when "Annotation properties..." menu is selected.
     */
    get_AnnotationPropertiesCallback(): Function;

    /**
     * Sets a function, which will be called when "Annotation properties..." menu is selected.
     * @param value A function, which will be called when "Annotation properties..." menu is selected.<br/> Here is function prototype "function __showAnnotationPropertiesDialog(docViewer, focusedAnnotation)", where "docViewer" parameter is an instance of [see="WebDocumentViewerJS"] class, "annotation" parameter is an instance of [see="WebAnnotationViewJS"] type.
     */
    set_AnnotationPropertiesCallback(value: Function): void;

    // METHODS

    /**
     * Destroys the UI element.
     */
    destroy(): void;

  }

}

