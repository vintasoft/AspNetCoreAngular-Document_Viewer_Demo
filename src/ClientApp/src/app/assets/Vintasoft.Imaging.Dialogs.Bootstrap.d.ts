// NAMESPACE
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
     * @param settings The settings of container for items. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): The name of CSS-class or names of CSS-classes, which will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>states (object): An instance of[see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important: </b> If 'states' is defined and active state[see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
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

}

