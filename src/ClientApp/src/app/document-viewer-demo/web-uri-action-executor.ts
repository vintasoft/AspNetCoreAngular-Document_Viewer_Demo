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
  override executeAction(viewer: Vintasoft.Imaging.UI.WebImageViewerJS, image: Vintasoft.Shared.WebImageJS, action: object): boolean {
    // if action is URI action
    if (action instanceof Vintasoft.Imaging.WebUriActionMetadataJS) {
      // get URL, which is associated with action
      let uri: string = action.get_Uri();

      // if user wants to open the URL
      if (confirm("Do you want to open the URL '" + uri + "' ?")) {
        // open URL
        window.open(uri, "_blank");
      }
    }
    else if (action instanceof Vintasoft.Imaging.WebResourceActionMetadataJS) {
      let resourceActionMetadata: Vintasoft.Imaging.WebResourceActionMetadataJS = action as Vintasoft.Imaging.WebResourceActionMetadataJS;
      // get resource URL, which is associated with action
      let resourceUri: string = resourceActionMetadata.get_ResourceUri();
      if (resourceUri != null) {
        // get the image metadata
        let imageMetadata: any = image.get_Metadata();
        if (imageMetadata != null) {
          // if user wants to download the resource
          if (confirm("Do you want to download the resource with Uri '" + resourceUri + "' ?")) {
            imageMetadata.requestResource(
              resourceUri,
              function (data: any) {
              },
              function (data: any) {
                alert("Error to download resource: " + data.errorMessage);
              }
            );
          }
        }
      }
    }

    return true;
  }

}
