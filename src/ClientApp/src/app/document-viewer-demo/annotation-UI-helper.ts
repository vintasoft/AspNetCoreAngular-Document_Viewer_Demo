/**
 * A helper that helps to create UI for image annotating.
 */
export class AnnotationUiHelper {

  /**
   * Initializes the annotation visual tool.
   * @param docViewer The document viewer.
   */
  static initializeAnnotationVisualTool(docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS) {
    /**
     * Focused annotation view collection is changed in annotation visual tool.
     */
    function __annotationVisualTool_focusedAnnotationCollectionChanged(event: object, eventArgs: any) {
      if (eventArgs.previouslyFocusedCollection != null) {
        Vintasoft.Shared.unsubscribeFromEvent(eventArgs.previouslyFocusedCollection, "changed", __annotationViewCollection_changed);
      }

      if (eventArgs.focusedCollection != null) {
        Vintasoft.Shared.subscribeToEvent(eventArgs.focusedCollection, "changed", __annotationViewCollection_changed);
      }
    }

    /**
     * Annotation view collection is changed.
     */
    function __annotationViewCollection_changed(event: object, eventArgs: any) {
      // if new annotation is inserted in annotation collection OR annotation is set by undo manager
      if (eventArgs.actionName == "insert" || eventArgs.actionName == "set") {
        // get inserted annotation
        var annotation = eventArgs.annotation;

        // if annotation is ReferencedImage-annotation
        if (annotation.get_Type() == "ReferencedImageAnnotation") {
          // annotation image is not defined
          if (annotation.get_Url() == "") {
            let defaultImage: HTMLImageElement = new Image();
            defaultImage.src = "Images/VintaSoftLogo.svg";
            // set an image url when annotation is created
            annotation.set_Url(defaultImage.src);
          }
        }
        // if annotation is Link-annotation
        else if (annotation.get_Type() == "LinkAnnotation") {
          // subscribe to the "annotationMouseEvent" event of annotation
          Vintasoft.Shared.subscribeToEvent(annotation, 'annotationMouseEvent', __annotation_annotationMouseEvent);
        }
      }
      // if annotation is removed from annotation collection
      else if (eventArgs.actionName == "remove") {
        // get removed annotation
        var annotation = eventArgs.annotation;

        // if annotation is Link-annotation
        if (annotation.get_Type() == "LinkAnnotation") {
          // unsubscribe from the "annotationMouseEvent" event of annotation
          Vintasoft.Shared.unsubscribeFromEvent(annotation, 'annotationMouseEvent', __annotation_annotationMouseEvent);
        }
      }
    }

    /**
     * Mouse is interacting with annotation.
     */
    function __annotation_annotationMouseEvent(event: object, eventArgs: any) {
      let originalEvent: any = eventArgs.originalEvent;
      let button: any = originalEvent.which;
      // if annotation is clicked and it was left mouse button
      if (eventArgs.eventName === 'click' && button === 1) {
        let link: string = new Vintasoft.Imaging.Annotation.UI.WebLinkAnnotationViewJS().get_HyperLink();
        if (link === "")
          return;
        if (link.indexOf("http://") != 0 && link.indexOf("https://") != 0)
          link = "http://" + link;
        // open URL associated with annotation
        window.open(link, "_blank");
      }
    }


    // get annotation viewer, which is used in document viewer
    let annotationViewer: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewerJS = docViewer.get_ImageViewer() as Vintasoft.Imaging.Annotation.UI.WebAnnotationViewerJS;
    // get annotation visual, which is used by annotation viewer
    let annotationVisualTool: Vintasoft.Imaging.Annotation.UI.WebAnnotationVisualToolJS = annotationViewer.get_AnnotationVisualTool();
    // subscribe to the "focusedAnnotationCollectionChanged" of annotationVisualTool
    Vintasoft.Shared.subscribeToEvent(annotationVisualTool, "focusedAnnotationCollectionChanged", __annotationVisualTool_focusedAnnotationCollectionChanged);
  }

}
