// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer.Dialogs {

  // ===== CLASSES =====

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to select images, which are shown in image viewer.
   */
  class WebImageSelectionDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageSelectionDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Gets the selected images.
     */
    getSelectedImages(): Vintasoft.Shared.WebImageJS[];

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to enter URL of the image/document file to be opened in web document viewer.
   */
  class WebUiUploadImageFromUrlDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiUploadImageFromUrlDialogJS"] class.
     * @param documentViewer The web document viewer.
     */
    constructor(documentViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit the settings for exporting images to a file.
   */
  class WebExportFileSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebExportFileSettingsDialogJS"] class.
     * @param documentViewer The web document viewer.
     */
    constructor(documentViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS);

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
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to print images, which are shown in image viewer.
   */
  class WebPrintImagesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPrintImagesDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and change the image viewer settings.
   */
  class WebImageViewerSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageViewerSettingsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and change the thumbnail viewer settings.
   */
  class WebThumbnailViewerSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebThumbnailViewerSettingsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to set the password of document.
   */
  class WebUiDocumentPasswordDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDocumentPasswordDialogJS"] class.
     * @param fileId A file identifier.
     */
    constructor(fileId: string);

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and change the object settings in the property grid.
   */
  class WebUiPropertyGridDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPropertyGridDialogJS"] class.
     * @param propertyGrid The property grid that contains the object settings.
     * @param settings The settings of container for items. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): The name of CSS-class or names of CSS-classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>states (object): An instance of[see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important: </b> If 'states' is defined and active state[see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(propertyGrid: Vintasoft.Shared.WebPropertyGridJS, settings: object);

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and edit settings of several objects in several property grids.
   */
  class WebUiMultiPropertyGridDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiMultiPropertyGridDialogJS"] class.
     * @param selectorSettings The settings for property grids, which should be displayed in dialog. The 'selectorSettings' parameter has the following properties: <br/> <ul> <li>title (string): A string, that contains the text to display as selector title.</li> <li>selectors (object[]): Array of options, which contain the following properties: <br/> <ul> <li>text (string): A string, that contains the text to display in selector.</li> <li>value (string): A string, that contains value of selector option.</li> <li>localizationId (string): Unique localization ID of selector option.</li> <li>propertyGrid (WebPropertyGridJS): Property grid that contains the object settings.</li> </ul> </li> <li>selectedIndex (number): Zero-based index of selected option.</li> </ul>
     * @param settings The settings for dialog. The 'settings' parameter has the following properties: <br/> <ul> <li>cssClass (string): The name of CSS-class or names of CSS-classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>states (object): An instance of[see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important: </b> If 'states' is defined and active state[see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(selectorSettings: object, settings: object);

    // PROPERTIES

    /**
     * Gets the zero-based index of selected property grid.
     */
    get_SelectedPropertyGridIndex(): number;

    /**
     * Sets the zero-based index of selected property grid.
     * @param value The zero-based index of selected property grid.
     */
    set_SelectedPropertyGridIndex(value: number): void;

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to rotate focused image with annotations.
   */
  class WebRotateImageWithAnnotationsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRotateImageWithAnnotationsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to change settings of the annotation comment.
   */
  class WebUiAnnotationCommentSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationCommentSettingsDialogJS"] class.
     * @param commentListPanel The comment list panel.
     */
    constructor(commentListPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiAnnotationCommentListPanelJS);

    // PROPERTIES

    /**
     * Gets the annotation comment.
     */
    get_Comment(): object;

    /**
     * Sets the annotation comment.
     * @param annotationComment An instance of [WebAnnotationCommentJS] type that should be used as a source for this dialog.
     */
    set_Comment(value: object): void;

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and edit the PDF redaction mark appearance.
   */
  class WebPdfRedactionMarkAppearanceDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPdfRedactionMarkAppearanceDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and edit the PDF redaction mark settings.
   */
  class WebUiPdfRedactionMarkSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfRedactionMarkSettingsDialogJS"] class.
     * @param pdfRedactionMark Redaction mark, which settings should be shown in dialog.
     */
    constructor(pdfRedactionMark: object);

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view information about a PDF image resource.
   */
  class WebUiPdfImageResourceDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfImageResourceDialogJS"] class.
     * @param image An instance of [see="WebContentImageJS"] class.
     */
    constructor(image: object);

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view the list of TWAIN devices installed in the system and select the device.
   */
  class WebTwainDeviceSelectionDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceSelectionDialogJS"] class.
     * @param deviceManager An instance of Vintasoft.Twain.WebTwainDeviceManagerJS class that represents opened TWAIN device manager.
     */
    constructor(deviceManager: object);

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
     * Gets selected TWAIN device.
     */
    get_SelectedDevice(): object;

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to work with TWAIN device capabilities.
   */
  class WebTwainDeviceCapabilitiesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceCapabilitiesDialogJS"] class.
     * @param device An instance of Vintasoft.Twain.WebTwainDeviceJS class that represents opened TWAIN device.
     */
    constructor(device: object);

  }

}

