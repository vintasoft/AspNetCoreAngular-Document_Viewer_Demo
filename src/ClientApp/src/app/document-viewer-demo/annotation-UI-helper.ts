import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnnotationSettingsDialog } from '../dialogs/annotation-settings-dialog';

let _annotationUiHelper: AnnotationUiHelper;

/**
 * A helper that helps to create UI for image annotating.
 */
export class AnnotationUiHelper {

  _annotationContextMenu: Vintasoft.Imaging.DocumentViewer.UIElements.WebAnnotationContextMenuJS | null = null;



  constructor(private modalService: NgbModal) {
    _annotationUiHelper = this;
  }



  /**
   * Initializes the annotation context menu.
   */
  initAnnotationContextMenu = function (docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS, imageViewerPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageViewerPanelJS) {
    // if panel exists
    if (imageViewerPanel != null) {
      // create the context menu for annotations
      _annotationUiHelper._annotationContextMenu = Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("annotationContextMenu") as Vintasoft.Imaging.DocumentViewer.UIElements.WebAnnotationContextMenuJS;

      // set the callback function for showing of annotation properties
      _annotationUiHelper._annotationContextMenu.set_ShowAnnotationPropertiesCallback(_annotationUiHelper.__showAnnotationPropertyGrid);

      // subscribe to the "showing" event of annotation context menu
      Vintasoft.Shared.subscribeToEvent(_annotationUiHelper._annotationContextMenu, "showing", _annotationUiHelper.__annotationContextMenu_showing);

      // subscribe to the "activated" event of annotation context menu
      Vintasoft.Shared.subscribeToEvent(_annotationUiHelper._annotationContextMenu, "activated", _annotationUiHelper.__annotationContextMenu_activated);

      // set the annotation context menu as the context menu of image viewer
      imageViewerPanel.set_ContextMenu(_annotationUiHelper._annotationContextMenu);
    }
  }

  /**
   * Initializes the annotation panel.
   */
  initAnnotationPanel(sidePanelItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS) {
    let annotationsPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiAnnotationListPanelJS = Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("annotationsPanel") as Vintasoft.Imaging.DocumentViewer.Panels.WebUiAnnotationListPanelJS;
    // set the callback function for creating record for annotation
    annotationsPanel.set_CreateAnnotationContentCallback(this.__createContentForAnnotationRecord);
    // set the callback function for creating record for annotation collection header
    annotationsPanel.set_CreateCollectionHeaderContentCallback(this.__createContentForAnnotationCollectionHeader);

    sidePanelItems.addItem(annotationsPanel);
  }

  /**
   * Annotation context menu is showing.
   * @param event
   * @param eventArgs
   */
  __annotationContextMenu_showing(event: any, eventArgs: any) {
    let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
    // get the document viewer
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    // if document viewer exists
    if (docViewer != null) {
      let position: any = eventArgs.position;
      let viewer: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewerJS = docViewer.get_ImageViewer() as Vintasoft.Imaging.Annotation.UI.WebAnnotationViewerJS;
      let annotationVisualTool: Vintasoft.Imaging.Annotation.UI.WebAnnotationVisualToolJS = viewer.get_AnnotationVisualTool();
      // find annotation under mouse cursor
      let annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS = annotationVisualTool.findAnnotationView(position.x, position.y) as Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS;
      // set annotation under mouse cursor as focused annotation
      annotationVisualTool.set_FocusedAnnotationView(annotation);
    }
  }

  /**
   * Annotation context menu is activated.
   */
  __annotationContextMenu_activated(event: any, eventArgs: any) {
    let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
    // get the document viewer
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    // get the annotation viewer
    let annotationViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();

    // subscribe to the "annotationInteractionModeChanged" event of annotation viewer
    Vintasoft.Shared.subscribeToEvent(annotationViewer, "annotationInteractionModeChanged", _annotationUiHelper.__annotationViewer_annotationInteractionModeChanged);
  }

  /**
   * Annotation interaction mode is changed in annotation viewer.
   */
  __annotationViewer_annotationInteractionModeChanged(event: any, eventArgs: any) {
    if (_annotationUiHelper._annotationContextMenu == null)
      return;

    // get the annotation interaction mode
    let annotationInteractionMode: Vintasoft.Imaging.Annotation.WebAnnotationInteractionModeEnumJS = eventArgs.mode;
    // if annotation interaction mode is Author
    if (annotationInteractionMode.toString() === "Author")
      // enable the annotation context menu
      _annotationUiHelper._annotationContextMenu.set_IsEnabled(true);
    // if annotation interaction mode is NOT Author
    else
      // disable the annotation context menu
      _annotationUiHelper._annotationContextMenu.set_IsEnabled(false);
  }

  /**
   * Shows the property grid dialog with information about annotation.
   * @param annotation Annotation, which should be shown in property grid dialog.
   */
  __showAnnotationPropertyGrid(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS) {
    let dlg: AnnotationSettingsDialog = new AnnotationSettingsDialog(_annotationUiHelper.modalService);
    dlg.annotation = annotation;
    dlg.open();
  }

  /**
   * Returns UI elements, which will display information about annotation.
   * @param annotation Annotation.
   * @param annotationCollection Annotation collection.
   */
  __createContentForAnnotationRecord(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS, annotationCollection: Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS) {
    // labels
    let labelsElements: any = [];

    // get annotation name
    let annotationName: string = annotation.get_Name();
    // if name is not empty
    if (annotationName !== "") {
      // create label
      let nameLabel: Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS = new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ text: annotationName, cssClass: "annotation-name" });
      // add label
      labelsElements.push(nameLabel);
      // add br element
      labelsElements.push("br");
    }

    // get annotation type
    let annotationType: string = annotation.get_Type();
    // create label 
    let typeLabel: Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS = new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ text: annotationType });
    labelsElements.push(typeLabel);
    labelsElements.push("br");

    // get annotation creation time
    let creationTime: string = annotation.get_CreationTime();
    let dateLabel: Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS = new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({
      text: creationTime.toLocaleString(),
      cssClass: "annotation-creationTime"
    });
    labelsElements.push(dateLabel);

    // create container for all labels
    let labelsContainer: Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS = new Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS(labelsElements, { cssClass: "annotation-labels" });

    // create annotation properties button
    let annotationSettingsButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS = new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
      cssClass: "annotationSettingsButton",
      title: "Annotation Properties",
      onClick: function (event: object, eventArgs: any) {
        _annotationUiHelper.__showAnnotationPropertyGrid(annotation);
      }
    });

    // return elements
    return [labelsContainer, annotationSettingsButton];
  }

  /**
   * Returns UI elements, which will display information about annotation collection.
   * @param annotationCollection Annotation collection.
   * @param index Zero-based index of annotation collection.
   */
  __createContentForAnnotationCollectionHeader(annotationCollection: Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS, index: number) {
    let text: string = "Page #" + (index + 1) + " [" + annotationCollection.get_Count() + "]";
    return [new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({ text: text })];
  }



  /**
   * Initializes the annotation visual tool.
   * @param docViewer The document viewer.
   */
  initializeAnnotationVisualTool(docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS) {
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
      // if new annotation is inserted in annotation collection
      if (eventArgs.actionName == "insert") {
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
