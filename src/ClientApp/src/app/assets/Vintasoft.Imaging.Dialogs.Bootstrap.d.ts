// Copyright 2014-2024 VintaSoft LLC. All rights reserved.
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
   * A Web UI dialog, which is based on Bootstrap.
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
     * @param settings The settings of container for items. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): The name of CSS-class or names of CSS-classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
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

}

