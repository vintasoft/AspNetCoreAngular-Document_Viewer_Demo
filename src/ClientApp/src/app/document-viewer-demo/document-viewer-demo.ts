import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { BlockUiDialog } from '../dialogs/block-ui-dialog';
import { ErrorMessageDialog } from '../dialogs/error-message-dialog';
import { ImageViewerSettingsDialog } from '../dialogs/image-viewer-settings-dialog';
import { OpenFileHelper } from './open-file-helper';
import { SerializeAnnotationsAndDownloadFileHelper } from './serialize-annotations-and-download-file-helper';
import { AnnotationUiHelper } from './annotation-UI-helper';
import { WebUriActionExecutor } from './web-uri-action-executor';


let _documentViewerDemoComponent: DocumentViewerDemoComponent;


@Component({
  selector: 'document-viewer-demo',
  templateUrl: './document-viewer-demo.html',
})
export class DocumentViewerDemoComponent {

  // Document viewer.
  _docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS | null = null;

  // Helps to open files.
  _openFileHelper: OpenFileHelper | null = null;

  // Helps to create UI for image annotating
  _annotationUiHelper: AnnotationUiHelper | null = null;

  // Dialog that allows to view and change settings of image viewer.
  _imageViewerSettingsDialog: ImageViewerSettingsDialog | null = null;

  // Dialog that allows to block UI.
  _blockUiDialog: BlockUiDialog | null = null;



  constructor(public modalService: NgbModal, private httpClient: HttpClient) {
    _documentViewerDemoComponent = this;
  }



  /**
   * Component is initializing.
   */
  ngOnInit() {
    // get identifier of current HTTP session
    this.httpClient.get<any>('api/Session/GetSessionId').subscribe(data => {
      // set the session identifier
      Vintasoft.Shared.WebImagingEnviromentJS.set_SessionId(data.sessionId);

      // specify web services, which should be used by Vintasoft Web Document Viewer
      Vintasoft.Shared.WebServiceJS.defaultFileService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftFileApi");
      Vintasoft.Shared.WebServiceJS.defaultImageCollectionService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftImageCollectionApi");
      Vintasoft.Shared.WebServiceJS.defaultImageService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftImageApi");
      Vintasoft.Shared.WebServiceJS.defaultAnnotationService = new Vintasoft.Shared.WebServiceControllerJS("vintasoft/api/MyVintasoftAnnotationCollectionApi");

      // register new UI elements
      this.__registerNewUiElements();

      // create the document viewer settings
      let docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS("documentViewerContainer", "documentViewer", true);

      // initialize main menu of document viewer
      this.__initMenu(docViewerSettings);

      // initialize side panel of document viewer
      this.__initSidePanel(docViewerSettings);

      // initialize image viewer panel of document viewer
      this.__initImageViewerPanel(docViewerSettings);

      // create the document viewer
      this._docViewer = new Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS(docViewerSettings);

      // subscribe to the "warningOccured" event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "warningOccured", this.__docViewer_warningOccured);
      // subscribe to the asyncOperationStarted event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "asyncOperationStarted", this.__docViewer_asyncOperationStarted);
      // subscribe to the asyncOperationFinished event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "asyncOperationFinished", this.__docViewer_asyncOperationFinished);
      // subscribe to the asyncOperationFailed event of document viewer
      Vintasoft.Shared.subscribeToEvent(this._docViewer, "asyncOperationFailed", this.__docViewer_asyncOperationFailed);

      this.__initializeVisualTools(this._docViewer);

      let interactionAreaAppearanceManager: Vintasoft.Imaging.Annotation.UI.WebInteractionAreaAppearanceManagerJS
        = this._docViewer.getInteractionAreaAppearanceManager() as Vintasoft.Imaging.Annotation.UI.WebInteractionAreaAppearanceManagerJS;
      let rotationPoint: Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS = interactionAreaAppearanceManager.get_RotationPoint();
      // set the cursor for interaction point that allows to rotate annotation
      rotationPoint.set_Cursor("url('Content/Cursors/Rotate.cur'), auto");

      // get the image viewer of document viewer
      let imageViewer1: Vintasoft.Imaging.UI.WebImageViewerJS = this._docViewer.get_ImageViewer();
      // specify that image viewer must show images in the single continuous column mode
      imageViewer1.set_DisplayMode(new Vintasoft.Imaging.WebImageViewerDisplayModeEnumJS("SingleContinuousColumn"));
      // specify that image viewer must show images in the fit width mode
      imageViewer1.set_ImageSizeMode(new Vintasoft.Imaging.WebImageSizeModeEnumJS("FitToWidth"));
      // enable vector rendering of PDF, DOCX and XLSX documents
      imageViewer1.set_UseVectorRendering(true);

      // create the progress image
      let progressImage: HTMLImageElement = new Image();
      progressImage.src = window.location + "Images/fileUploadProgress.gif";
      // specify that the image viewer must use the progress image for indicating the image loading progress
      imageViewer1.set_ProgressImage(progressImage);

      // get the visual tool
      let annotationNavigationTextSelectionTool: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS =
        this._docViewer.getVisualToolById("AnnotationVisualTool,DocumentNavigationTool,TextSelectionTool");
      this._docViewer.set_MandatoryVisualTool(annotationNavigationTextSelectionTool);
      this._docViewer.set_CurrentVisualTool(annotationNavigationTextSelectionTool);

      // copy the default file to the uploaded image files directory and open the file
      this._openFileHelper = new OpenFileHelper(this.modalService, this._docViewer, this.__showErrorMessage);
      this._openFileHelper.openDefaultImageFile("VintasoftImagingDemo.pdf");
    });
  }



  // === "View" toolbar ===

  /**
   * Creates UI button for showing image viewer settings dialog.
   */
  __createImageViewerSettingsButton() {
    // create the button that allows to show a dialog with image viewer settings
    return new Vintasoft.Imaging.UI.UIElements.WebUiButtonJS({
      cssClass: "vsdv-imageViewerSettingsButton",
      title: "Show Image Viewer Settings",
      localizationId: "imageViewerSettingsButton",
      onClick: _documentViewerDemoComponent.__imageViewerSettingsButton_clicked
    });
  }

  /**
   * "Show Image Viewer Settings" button is clicked.
   * @param event
   * @param uiElement
   */
  __imageViewerSettingsButton_clicked(event: any, uiElement: any) {
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS | null = _documentViewerDemoComponent._docViewer;
    if (docViewer != null) {
      let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = docViewer.get_ImageViewer();
      if (imageViewer != null) {
        if (this._imageViewerSettingsDialog == null) {
          this._imageViewerSettingsDialog = new ImageViewerSettingsDialog(_documentViewerDemoComponent.modalService);
          this._imageViewerSettingsDialog.imageViewer = imageViewer;
        }
        this._imageViewerSettingsDialog.open();
      }
    }
  }



  // === "Tools" toolbar ===

  /**
   * Creates UI button for activating the visual tool, which allows to select text and work with annotations in image viewer.
   */
  __createTextSelectionAndAnnotationToolButton() {
    return new Vintasoft.Imaging.DocumentViewer.UIElements.WebUiVisualToolButtonJS({
      cssClass: "vsdv-tools-textSelectionToolButton",
      title: "Annotations, Document navigation, Text selection",
      localizationId: "annotationAndNavigationAndTextSelectionToolButton"
    }, "AnnotationVisualTool,DocumentNavigationTool,TextSelectionTool");
  }



  // === "Annotations" toolbar ===

  /**
   * Initializes image viewer panel of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initImageViewerPanel(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = docViewerSettings.get_Items();

    // get the image viewer panel
    let imageViewerPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageViewerPanelJS = items.getItemByRegisteredId("imageViewerPanel") as Vintasoft.Imaging.DocumentViewer.Panels.WebUiImageViewerPanelJS;
    // if panel exists
    if (imageViewerPanel != null) {
      if (_documentViewerDemoComponent._annotationUiHelper == null) {
        _documentViewerDemoComponent._annotationUiHelper = new AnnotationUiHelper(_documentViewerDemoComponent.modalService);
      }
      // initialize the annotation context menu
      _documentViewerDemoComponent._annotationUiHelper.initAnnotationContextMenu(docViewerSettings, imageViewerPanel);
    }
  }



  // === Init UI ===

  /**
   * Registers custom UI elements in "WebUiElementsFactoryJS".
   */
  __registerNewUiElements() {
    let serializeAnnotationsAndDownloadFileHelper: SerializeAnnotationsAndDownloadFileHelper = new SerializeAnnotationsAndDownloadFileHelper(this.__showErrorMessage);

    // override the "Download image" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("downloadImageButton", serializeAnnotationsAndDownloadFileHelper.createDownloadFileWithAnnotationsButton);

    // register the "Image viewer settings" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("imageViewerSettingsButton", this.__createImageViewerSettingsButton);

    // register the "Annotations, Document navigation, Text selection" button in web UI elements factory
    Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.registerElement("annotationAndNavigationAndTextSelectionToolButton", this.__createTextSelectionAndAnnotationToolButton);
  }

  /**
   * Initializes main menu of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initMenu(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = docViewerSettings.get_Items();

    let uploadFileButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS = items.getItemByRegisteredId("uploadFileButton") as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;
    if (uploadFileButton != null)
      uploadFileButton.set_FileExtensionFilter(".bmp, .emf, .gif, .ico, .cur, .jpg, .jpeg, .jls, .pcx, .png, .tif, .tiff, .wmf, .jb2, .jbig2, .jp2, .j2k, .j2c, .jpc, .pdf, .docx, .doc, .xlsx, .xls");

    // get the main menu of document viewer
    let mainMenu: Vintasoft.Imaging.UI.Panels.WebUiPanelContainerJS = items.getItemByRegisteredId("mainMenu") as Vintasoft.Imaging.UI.Panels.WebUiPanelContainerJS;
    // if main menu is found
    if (mainMenu != null) {
      // get items of main menu
      let mainMenuItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = mainMenu.get_Items();

      // add "Annotation" menu panel
      mainMenuItems.addItem("annotationsMenuPanel");

      let annotationsMenuPanel: Vintasoft.Imaging.UI.Panels.WebUiPanelJS = mainMenuItems.getItemByRegisteredId("annotationsMenuPanel") as Vintasoft.Imaging.UI.Panels.WebUiPanelJS;
      let annotationsMenuPanelItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = annotationsMenuPanel.get_Items();

      let annotationActionsToolbarPanels: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[] = annotationsMenuPanelItems.getItemsByRegisteredId("annotationActionsToolbarPanel");
      for (let i = 0; i < annotationActionsToolbarPanels.length; i++) {
        let actionPanel: Vintasoft.Imaging.UI.Panels.WebUiPanelJS = annotationActionsToolbarPanels[i] as Vintasoft.Imaging.UI.Panels.WebUiPanelJS;
        let actionsPanelItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = actionPanel.get_Items();
        let burnButton: Vintasoft.Imaging.UI.UIElements.WebUiButtonJS = actionsPanelItems.getItemByRegisteredId("burnAnnotationsButton") as Vintasoft.Imaging.UI.UIElements.WebUiButtonJS;
        let rotateButton: Vintasoft.Imaging.UI.UIElements.WebUiDialogButtonJS = actionsPanelItems.getItemByRegisteredId("rotateImageWithAnnotationsButton") as Vintasoft.Imaging.UI.UIElements.WebUiDialogButtonJS;

        actionsPanelItems.removeItem(burnButton);
        actionsPanelItems.removeItem(rotateButton);
      }
    }

    if (_documentViewerDemoComponent._annotationUiHelper == null) {
      _documentViewerDemoComponent._annotationUiHelper = new AnnotationUiHelper(_documentViewerDemoComponent.modalService);
    }

    // get the "View" menu panel
    let viewMenuPanel: Vintasoft.Imaging.UI.Panels.WebUiPanelJS = items.getItemByRegisteredId("viewMenuPanel") as Vintasoft.Imaging.UI.Panels.WebUiPanelJS;
    // if menu panel is found
    if (viewMenuPanel != null) {
      // get items of menu panel
      let viewMenuPanelItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = viewMenuPanel.get_Items();
      // add the "Image viewer settings" button to the menu panel
      viewMenuPanelItems.insertItem(viewMenuPanelItems.get_Count() - 1, "imageViewerSettingsButton");
    }

    // get the "Visual tools" menu panel
    let toolsSubmenu: Vintasoft.Imaging.DocumentViewer.Panels.WebUiVisualToolsToolbarPanelJS = items.getItemByRegisteredId("visualToolsToolbarPanel") as Vintasoft.Imaging.DocumentViewer.Panels.WebUiVisualToolsToolbarPanelJS;
    // if menu panel is found
    if (toolsSubmenu != null) {
      let toolsSubmenuItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = toolsSubmenu.get_Items();
      toolsSubmenuItems.removeItemAt(1);
      toolsSubmenuItems.insertItem(0, "annotationAndNavigationAndTextSelectionToolButton");
    }
  }

  /**
   * Initializes side panel of document viewer.
   * @param docViewerSettings Settings of document viewer.
   */
  __initSidePanel(docViewerSettings: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerSettingsJS) {
    // get items of document viewer
    let items: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = docViewerSettings.get_Items();

    let sidePanel: Vintasoft.Imaging.UI.Panels.WebUiSidePanelJS = items.getItemByRegisteredId("sidePanel") as Vintasoft.Imaging.UI.Panels.WebUiSidePanelJS;
    if (sidePanel != null) {
      let sidePanelItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = sidePanel.get_PanelsCollection();

      if (_documentViewerDemoComponent._annotationUiHelper == null) {
        _documentViewerDemoComponent._annotationUiHelper = new AnnotationUiHelper(_documentViewerDemoComponent.modalService);
      }
      // initialize the annotation panel
      _documentViewerDemoComponent._annotationUiHelper.initAnnotationPanel(sidePanelItems);

      sidePanelItems.addItem("textSelectionPanel");

      let textSearchPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiTextSearchPanelJS = Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("textSearchPanel") as Vintasoft.Imaging.DocumentViewer.Panels.WebUiTextSearchPanelJS;
      textSearchPanel.set_CreatePageResultHeaderContentCallback(_documentViewerDemoComponent.__createPageSearchResultHeaderContent);
      sidePanelItems.addItem(textSearchPanel);
    }

    // get the thumbnail viewer panel of document viewer
    let thumbnailViewerPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiThumbnailViewerPanelJS = items.getItemByRegisteredId("thumbnailViewerPanel") as Vintasoft.Imaging.DocumentViewer.Panels.WebUiThumbnailViewerPanelJS;
    // if panel is found
    if (thumbnailViewerPanel != null)
      // subscribe to the "actived" event of the thumbnail viewer panel of document viewer
      Vintasoft.Shared.subscribeToEvent(thumbnailViewerPanel, "activated", _documentViewerDemoComponent.__thumbnailsPanelActivated);
  }

  /**
   * Returns UI elements, which will display information image page search result.
   * @param image Image, where text was searched.
   * @param imageIndex The number of pages, which have already been processed.
   * @param searchResults Search result.
   */
  __createPageSearchResultHeaderContent(image: HTMLImageElement, imageIndex: number, searchResults: any) {
    return [new Vintasoft.Imaging.UI.UIElements.WebUiLabelElementJS({
      text: "Page # " + (imageIndex + 1),
      css: { cursor: "pointer" }
    })];
  }

  /**
   * Thumbnail viewer panel of document viewer is activated.
   * @param event
   * @param eventArgs
   */
  __thumbnailsPanelActivated(event: any, eventArgs: any) {
    let uiElement: Vintasoft.Imaging.UI.UIElements.WebUiElementJS = event.target;
    let docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS = uiElement.get_RootControl() as Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
    let thumbnailViewer: Vintasoft.Imaging.UI.WebThumbnailViewerJS = docViewer.get_ThumbnailViewer();
    if (thumbnailViewer != null) {
      // create the progress image
      let progressImage: HTMLImageElement = new Image();
      progressImage.src = window.location + "Images/fileUploadProgress.gif";
      // specify that the thumbnail viewer must use the progress image for indicating the thumbnail loading progress
      thumbnailViewer.set_ProgressImage(progressImage);

      // additional bottom space for text with page number under thumbnail
      let textCaptionHeight: number = 18;
      let padding: any = thumbnailViewer.get_ThumbnailPadding();
      padding[2] += textCaptionHeight
      thumbnailViewer.set_ThumbnailPadding(padding);
      thumbnailViewer.set_DisplayThumbnailCaption(true);
    }
  }



  // === Visual Tools ===

  /**
   * Initializes visual tools.
   * @param docViewer The document viewer.
  */
  __initializeVisualTools(docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS) {
    if (_documentViewerDemoComponent._annotationUiHelper == null)
      return;

    let panTool: Vintasoft.Imaging.UI.VisualTools.WebPanToolJS = docViewer.getVisualToolById("PanTool");
    let panCursor: string = "url('Content/Cursors/CloseHand.cur'), auto";
    panTool.set_Cursor("pointer");
    panTool.set_ActionCursor(panCursor);
    panTool.set_DisableContextMenu(true);

    let magnifierTool: Vintasoft.Imaging.UI.VisualTools.WebMagnifierToolJS = docViewer.getVisualToolById("MagnifierTool") as Vintasoft.Imaging.UI.VisualTools.WebMagnifierToolJS;
    let magnifierCursor: string = "url('Content/Cursors/Magnifier.cur'), auto";
    magnifierTool.set_Cursor(magnifierCursor);
    magnifierTool.set_DisableContextMenu(true);

    let zoomTool: Vintasoft.Imaging.UI.VisualTools.WebZoomToolJS = docViewer.getVisualToolById("ZoomTool") as Vintasoft.Imaging.UI.VisualTools.WebZoomToolJS;
    let zoomCursor: string = "url('Content/Cursors/Zoom.cur'), auto";
    zoomTool.set_Cursor(zoomCursor);
    zoomTool.set_ActionCursor(zoomCursor);
    zoomTool.set_DisableContextMenu(true);

    let zoomSelectionTool: Vintasoft.Imaging.UI.VisualTools.WebZoomSelectionToolJS = docViewer.getVisualToolById("ZoomSelectionTool") as Vintasoft.Imaging.UI.VisualTools.WebZoomSelectionToolJS;
    zoomSelectionTool.set_ActionCursor(zoomCursor);
    zoomSelectionTool.set_DisableContextMenu(true);

    // get navigation tool
    let documentNavigationTool: Vintasoft.Imaging.UI.VisualTools.WebDocumentNavigationToolJS = docViewer.getVisualToolById("DocumentNavigationTool") as Vintasoft.Imaging.UI.VisualTools.WebDocumentNavigationToolJS;
    // create navigation action executor
    let nagivationActionExecutor: Vintasoft.Imaging.WebNavigationActionExecutorJS = new Vintasoft.Imaging.WebNavigationActionExecutorJS();
    // create URI action executor
    let uriActionExecutor: WebUriActionExecutor = new WebUriActionExecutor();
    // create composite action executor
    let compositeActionExecutor: Vintasoft.Imaging.WebPageContentActionCompositeExecutorJS = new Vintasoft.Imaging.WebPageContentActionCompositeExecutorJS([uriActionExecutor, nagivationActionExecutor]);
    // use composite action executer in document navigation tool
    documentNavigationTool.set_ActionExecutor(compositeActionExecutor);


    // initialize the annotation visual tool
    _documentViewerDemoComponent._annotationUiHelper.initializeAnnotationVisualTool(docViewer);
  }



  // === Document viewer events ===

  /**
   Warning is occured in document viewer.
  */
  __docViewer_warningOccured(event: any, eventArgs: any) {
    _documentViewerDemoComponent.__showErrorMessage(eventArgs.message);
  }

  /**
   * Asynchronous operation is started in document viewer.
   */
  __docViewer_asyncOperationStarted(event: any, data: any) {
    // get description of asynchronous operation
    let description: string = data.description;

    // if image is prepared for printing
    if (description === "Image prepared to print" || description === "Get text region") {
      // do not block UI when images are preparing for printing
    }
    else {
      // block UI
      _documentViewerDemoComponent.__blockUI(data.description);
    }
  }

  /**
   * Asynchronous operation is finished in document viewer.
   */
  __docViewer_asyncOperationFinished(event: any, data: any) {
    // unblock UI
    _documentViewerDemoComponent.__unblockUI();

    // get description of asynchronous operation
    let description: string = data.description;

    // if annotations are saving to the server
    if (description === "Save annotations") {
      let message: string = "Annotation collection is saved successfully.";
      // show message about successful saving
      alert(message);
    }
  }

  /**
   * Asynchronous operation is failed in document viewer.
   */
  __docViewer_asyncOperationFailed(event: any, data: any) { // unblock UI
    // get description of asynchronous operation
    let description: string = data.description;
    // get additional information about asynchronous operation
    let additionalInfo: any = data.data;
    // if additional information exists
    if (additionalInfo != null)
      _documentViewerDemoComponent.__showErrorMessage(additionalInfo);
    // if additional information does NOT exist
    else
      _documentViewerDemoComponent.__showErrorMessage(description + ": unknown error.");
  }



  // === Utils ===

  /**
   * Blocks the UI. 
   * @param text Message that describes why UI is blocked.
   */
  __blockUI(text: string) {
    _documentViewerDemoComponent._blockUiDialog = new BlockUiDialog(_documentViewerDemoComponent.modalService);
    _documentViewerDemoComponent._blockUiDialog.message = text;
    _documentViewerDemoComponent._blockUiDialog.open();
  }

  /**
   Unblocks the UI.
  */
  __unblockUI() {
    if (_documentViewerDemoComponent._blockUiDialog != null && _documentViewerDemoComponent._blockUiDialog !== undefined)
      _documentViewerDemoComponent._blockUiDialog.close();
  }

  /**
   * Shows an error message.
   * @param data Information about error.
   */
  __showErrorMessage(data: any) {
    _documentViewerDemoComponent.__unblockUI();

    let dlg: ErrorMessageDialog = new ErrorMessageDialog(_documentViewerDemoComponent.modalService);
    dlg.errorData = data;
    dlg.open();
  }

}
