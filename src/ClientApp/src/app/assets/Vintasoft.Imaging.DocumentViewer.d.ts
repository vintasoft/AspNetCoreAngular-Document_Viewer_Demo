// Copyright 2014-2025 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer {

  // ===== CLASSES =====

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

    /**
     * Gets a value indicating whether this panel should show the undo action list.
     */
    get_ShowUndoActionList(): boolean;

    /**
     * Sets a value indicating whether this panel should show the undo action list.
     * @param value A value indicating whether this panel should show the undo action list. Default value is False.
     */
    set_ShowUndoActionList(value: boolean): void;

  }

  /**
   * Represents a JavaScript UI-control that contains UI (main menu, side panel, image viewer, footer panel) for displaying documents in HTML5 web browser.
   */
  class WebDocumentViewerJS extends Vintasoft.Imaging.UI.WebDocumentViewerBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentViewerJS"] class.
     * @param settings An instance of [see="WebDocumentViewerSettingsJS"] class.
     */
    constructor(settings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS);

    // METHODS

    /**
     * Returns the [see="WebInteractionAreaAppearanceManagerJS"], which is associated with image viewer of document viewer.
     */
    getInteractionAreaAppearanceManager(): object;

    /**
     * Saves changes in a file that was previously opened using the [see="WebDocumentViewerBaseJS.openFile"] or [see="WebDocumentViewerBaseJS.openFileWithAuthentication"] function.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br /> Here is function prototype "function __error(data)".<br /> The data parameter can be:<br /> <ol> <li>An object with following properties:<br /> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    saveChanges(successFunc: Function, errorFunc: Function): void;

    /**
     * Saves changes in a file that was previously opened using the [see="WebDocumentViewerBaseJS.openFile"] or [see="WebDocumentViewerBaseJS.openFileWithAuthentication"] function.
     * @param successFunc Function that will be executed if request is executed successfully.<br /> Here is function prototype "function __success(data)".<br /> The data parameter has the following properties:<br /> <ul> <li>fileId (string): A file identifier.</li> </ul>
     */
    saveChanges(successFunc: Function): void;

    /**
     * Saves changes in a file that was previously opened using the [see="WebDocumentViewerBaseJS.openFile"] or [see="WebDocumentViewerBaseJS.openFileWithAuthentication"] function.
     */
    saveChanges(): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    exportFile(exportFileSettings: Vintasoft.Imaging.WebExportFileSettingsJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    exportFile(exportFileSettings: Vintasoft.Imaging.WebExportFileSettingsJS, successFunc: Function): void;

    /**
     * Exports images (with annotations), which are loaded in web image viewer, to a file.
     * @param exportFileSettings An instance of [see="WebExportFileSettingsJS"] clas that defines the export file settings.
     */
    exportFile(exportFileSettings: Vintasoft.Imaging.WebExportFileSettingsJS): void;

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

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer.Panels {

  // ===== CLASSES =====

  /**
   * A web UI panel that allows to view the list of TWAIN devices installed in the system and select the device.
   */
  class WebUiTwainSelectDevicePanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiTwainSelectDevicePanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover", etc).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
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

