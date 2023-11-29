/**
 * A helper that helps to create UI for image annotating.
 */
export class AnnotationUiHelper {

  /**
   * Initializes the annotation context menu.
   */
  static initAnnotationViewerContextMenu = function (imageViewerPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageViewerPanelJS) {
    // create the context menu for annotations
    let annotationViewerContextMenu: Vintasoft.Imaging.DocumentViewer.UIElements.WebAnnotationViewerContextMenuJS
      = Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("annotationViewerContextMenu") as Vintasoft.Imaging.DocumentViewer.UIElements.WebAnnotationViewerContextMenuJS;
    if (annotationViewerContextMenu == null)
      return;

    // get items of annotation context menu
    let annotationViewerContextMenuItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = annotationViewerContextMenu.get_Items();

    // add sub menu divider
    annotationViewerContextMenuItems.addItem("subMenuDivider");

    // add menu item "Set current user to Guest" to the context menu
    let useGuestLabel = new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ text: "Set current user to Guest", localizationId: "useGuestLabel" });
    let useGuestMenuItem = new Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS([useGuestLabel], {
      cssClass: "subMenu",
      onClick: {
        callback: function (event: any, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
          let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS
            = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
          docViewer.set_CurrentUser("Guest");

          annotationViewerContextMenu.hide();
        },
        data: {}
      }
    });
    annotationViewerContextMenuItems.addItem(useGuestMenuItem);

    // add menu item "Set current user to User1" to the context menu
    let useUser1Label = new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ text: "Set current user to User1", localizationId: "useUser1Label" });
    let useUser1MenuItem = new Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS([useUser1Label], {
      cssClass: "subMenu",
      onClick: {
        callback: function (event: any, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
          let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS
            = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
          docViewer.set_CurrentUser("User1");

          annotationViewerContextMenu.hide();
        },
        data: {}
      }
    });
    annotationViewerContextMenuItems.addItem(useUser1MenuItem);

    // add menu item "Set current user to User2" to the context menu
    let useUser2Label = new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ text: "Set current user to User2", localizationId: "useUser2Label" });
    let useUser2MenuItem = new Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS([useUser2Label], {
      cssClass: "subMenu",
      onClick: {
        callback: function (event: any, uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS) {
          let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS
            = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
          docViewer.set_CurrentUser("User2");

          annotationViewerContextMenu.hide();
        },
        data: {}
      }
    });
    annotationViewerContextMenuItems.addItem(useUser2MenuItem);

    // set the annotation context menu as the context menu of image viewer
    imageViewerPanel.set_ContextMenu(annotationViewerContextMenu);
  }

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
            defaultImage.src = "Images/VintaSoftLogo.png";
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
