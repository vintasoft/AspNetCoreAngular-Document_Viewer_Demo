/**
 Represents the action executor that executes URI actions.
*/

export class WebUriActionExecutor extends Vintasoft.Imaging.WebPageContentActionExecutorJS {

  constructor() {
    super();
  }

  /**
   Executes the action.
   @param {any} viewer The image viewer.
   @param {any} image The image that contains the action.
   @param {any} action The action to execute.
   @returns {boolean} True if action is executed successfully; otherwise, false.
   @exception Thrown if arguments have wrong types.
   @function @public
  */
  executeAction(viewer: Vintasoft.Imaging.UI.WebImageViewerJS, image: Vintasoft.Shared.WebImageJS, action: object): boolean {
    // if action is URI action
    if (action instanceof Vintasoft.Imaging.WebUriActionMetadataJS) {
      // get URL, which is associated with action
      let uri: string = action.get_Uri();

      // if user wants to open the URL
      if (confirm("Open URL '" + uri + "' ?")) {
        // open URL
        window.open(uri, "_blank");
      }
    }

    return true;
  }

}
