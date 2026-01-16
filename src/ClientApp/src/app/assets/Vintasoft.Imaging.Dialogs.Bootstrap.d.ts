// Copyright 2014-2026 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.UI.Dialogs {

  // ===== CLASSES =====

  /**
   * A web UI dialog, which is based on Bootstrap.
   */
  class WebUiDialogJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiDialogJS"] class.
     * @param headerItems An array of [see = "WebUiElementJS"] objects, which must be placed in the dialog header.
     * @param bodyItems An array of [see = "WebUiElementJS"] objects, which must be placed in the dialog body.
     * @param footerItems An array of [see = "WebUiElementJS"] objects, which must be placed in the dialog footer.
     * @param settings The settings of container for items. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): The name of CSS-class or names of CSS-classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(headerItems: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], bodyItems: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], footerItems: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[], settings: object);

    // PROPERTIES

    /**
     * Sets a value indicating whether the UI element is enabled.
     * @param value Value indicating whether the UI element is enabled.
     */
    set_IsEnabled(value: boolean): void;

    // METHODS

    /**
     * Returns a value indicating whether the dialog is visible.
     */
    isVisible(): boolean;

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
     * Shows the dialog.
     */
    show(): void;

    /**
     * Hides the dialog.
     */
    hide(): void;

    /**
     * Initializes the dialog.
     */
    init(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to set the password of document.
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
   * A web UI dialog (based on the Bootstrap) that allows to view and change the object settings in the property grid.
   */
  class WebUiPropertyGridDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPropertyGridDialogJS"] class.
     * @param propertyGrid The property grid that contains the object settings.
     * @param settings The settings of container for items. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): The name of CSS-class or names of CSS-classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(propertyGrid: Vintasoft.Shared.WebPropertyGridJS, settings: object);

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit settings of several objects in several property grids.
   */
  class WebUiMultiPropertyGridDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiMultiPropertyGridDialogJS"] class.
     * @param selectorSettings The settings for property grids, which should be displayed in dialog. The 'selectorSettings' parameter has the following properties: <br/> <ul> <li>title (string): A string, that contains the text to display as selector title.</li> <li>selectors (object[]): Array of options, which contain the following properties: <br/> <ul> <li>text (string): A string, that contains the text to display in selector.</li> <li>value (string): A string, that contains value of selector option.</li> <li>localizationId (string): Unique localization ID of selector option.</li> <li>propertyGrid (WebPropertyGridJS): Property grid that contains the object settings.</li> </ul> </li> <li>selectedIndex (number): Zero-based index of selected option.</li> </ul>
     * @param settings The settings for dialog. The 'settings' parameter has the following properties: <br/> <ul> <li>cssClass (string): The name of CSS-class or names of CSS-classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
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
   * A web UI dialog (based on the Bootstrap) that allows to select images, which are shown in image viewer.
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
   * A web UI dialog (based on the Bootstrap) that allows to print images, which are shown in image viewer.
   */
  class WebPrintImagesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPrintImagesDialogJS"] class.
     */
    constructor();

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit the settings for exporting images to a file.
   */
  class WebExportFileSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebExportFileSettingsDialogJS"] class.
     */
    constructor();

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
   * A web UI dialog (based on the Bootstrap) that allows to view and change the image viewer settings.
   */
  class WebImageViewerSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageViewerSettingsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and change the thumbnail viewer settings.
   */
  class WebThumbnailViewerSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebThumbnailViewerSettingsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to change settings of JPEG encoder.
   */
  class WebUiJpegEncoderSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiJpegEncoderSettingsDialogJS"] class.
     * @param jpegEncoderSettings The settings of JPEG encoder.
     */
    constructor(jpegEncoderSettings: Vintasoft.Imaging.WebJpegEncoderSettingsJS);

    // METHODS

    /**
     * Set settings that dialog will change.
     * @param jpegEncoderSettings The settings of JPEG encoder settings.
     */
    setJpegEncoderSettings(jpegEncoderSettings: Vintasoft.Imaging.WebJpegEncoderSettingsJS): void;

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to change settings of JPEG2000 encoder.
   */
  class WebUiJpeg2000EncoderSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiJpeg2000EncoderSettingsDialogJS"] class.
     * @param jpeg2000EncoderSettings The settings of JPEG2000 encoder.
     */
    constructor(jpeg2000EncoderSettings: Vintasoft.Imaging.WebJpeg2000EncoderSettingsJS);

    // METHODS

    /**
     * Set settings that dialog will change.
     * @param jpeg2000EncoderSettings The JPEG2000 encoder settings for change.
     */
    setJpeg2000EncoderSettings(jpeg2000EncoderSettings: Vintasoft.Imaging.WebJpeg2000EncoderSettingsJS): void;

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to change settings of JBIG2 encoder.
   */
  class WebUiJbig2EncoderSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiJbig2EncoderSettingsDialogJS"] class.
     * @param jbig2EncoderSettings The settings of JBIG2 encoder.
     */
    constructor(jbig2EncoderSettings: Vintasoft.Imaging.WebJbig2EncoderSettingsJS);

    // METHODS

    /**
     * Set settings that dialog will change.
     * @param jbig2EncoderSettings The JPEG encoder settings for change.
     */
    setJbig2EncoderSettings(jbig2EncoderSettings: Vintasoft.Imaging.WebJbig2EncoderSettingsJS): void;

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to enter URL of the image/document file to be opened in web document viewer.
   */
  class WebUiUploadImageFromUrlDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiUploadImageFromUrlDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to change the document layout settings.
   */
  class WebDocumentLayoutSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentLayoutSettingsDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

}

