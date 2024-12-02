import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { BlockUiDialog } from '../dialogs/block-ui-dialog';
import { ErrorMessageDialog } from '../dialogs/error-message-dialog';
import { OpenFileHelper } from './open-file-helper';
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
      // enable image uploading from URL
      docViewerSettings.set_CanUploadImageFromUrl(true);
      // specify that the meain menu should contain the annotation menu
      docViewerSettings.set_ShowAnnotationMenuInMainMenu(true);
      // specify that the side panel should contain the annotation list panel
      docViewerSettings.set_ShowAnnotationListPanelInSidePanel(true);
      // specify that document viewer should show "Export and download file" button instead of "Download file" button
      docViewerSettings.set_CanExportAndDownloadFile(true);
      docViewerSettings.set_CanDownloadFile(false);
      docViewerSettings.set_CanAddFile(true);
      docViewerSettings.set_CanClearSessionCache(true);

      // initialize main menu of document viewer
      this.__initMenu(docViewerSettings);

      // initialize side panel of document viewer
      this.__initSidePanel(docViewerSettings);

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

      // add ".txt" file extension in file extension filter for upload buttons in web document viewer
      this.__addTxtFileExtensionToUploadButtonsInWebDocumentViewer();

      // copy the default file to the uploaded image files directory and open the file
      this._openFileHelper = new OpenFileHelper(this.modalService, this._docViewer, this.__showErrorMessage);
      this._openFileHelper.openDefaultImageFile("VintasoftImagingDemo.pdf");
    });
  }



  // === "Tools" toolbar ===

  /**
   * Creates UI button for activating the visual tool, which allows to select text and work with annotations in image viewer.
   */
  __createTextSelectionAndAnnotationToolButton() {
    return new Vintasoft.Imaging.UI.UIElements.WebUiVisualToolButtonJS({
      cssClass: "vsdv-tools-textSelectionToolButton",
      title: "Annotations, Document navigation, Text selection",
      localizationId: "annotationAndNavigationAndTextSelectionToolButton"
    }, "AnnotationVisualTool,DocumentNavigationTool,TextSelectionTool");
  }



  // === Init UI ===

  /**
   * Registers custom UI elements in "WebUiElementsFactoryJS".
   */
  __registerNewUiElements() {
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

    let uploadAndOpenFileButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS = items.getItemByRegisteredId("uploadAndOpenFileButton") as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;
    if (uploadAndOpenFileButton != null)
      uploadAndOpenFileButton.set_FileExtensionFilter(".bmp, .cur, .doc, .docx, .rtf, .gif, .ico, .j2k, .j2c, .jb2, .jbig2, .jp2, .jpc, .jpeg, .jpg, .jls, .pbm, .pcx, .pdf, .png, .tga, .tif, .tiff, .xlsx, .xls");

    let uploadAndAddFileButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS = items.getItemByRegisteredId("uploadAndAddFileButton") as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;
    if (uploadAndAddFileButton != null)
      uploadAndAddFileButton.set_FileExtensionFilter(".bmp, .cur, .doc, .docx, .rtf, .gif, .ico, .j2k, .j2c, .jb2, .jbig2, .jp2, .jpc, .jpeg, .jpg, .jls, .pbm, .pcx, .pdf, .png, .tga, .tif, .tiff, .xlsx, .xls");

    // get the "File" menu panel
    let fileSubmenu: Vintasoft.Imaging.UI.Panels.WebUiVisualToolsToolbarPanelJS = items.getItemByRegisteredId("fileToolbarPanel") as Vintasoft.Imaging.UI.Panels.WebUiVisualToolsToolbarPanelJS;
    // if menu panel is found
    if (fileSubmenu != null) {
      let fileSubmenuItems: Vintasoft.Imaging.UI.UIElements.WebUiElementCollectionJS = fileSubmenu.get_Items();
      fileSubmenuItems.insertItem(3, "documentLayoutSettingsButton");
    }

    // get the "Visual tools" menu panel
    let toolsSubmenu: Vintasoft.Imaging.UI.Panels.WebUiVisualToolsToolbarPanelJS = items.getItemByRegisteredId("visualToolsToolbarPanel") as Vintasoft.Imaging.UI.Panels.WebUiVisualToolsToolbarPanelJS;
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

      sidePanelItems.addItem("textSelectionPanel");

      let textSearchPanel: Vintasoft.Imaging.UI.Panels.WebUiTextSearchPanelJS = Vintasoft.Imaging.UI.UIElements.WebUiElementsFactoryJS.createElementById("textSearchPanel") as Vintasoft.Imaging.UI.Panels.WebUiTextSearchPanelJS;
      textSearchPanel.set_CreatePageResultHeaderContentCallback(_documentViewerDemoComponent.__createPageSearchResultHeaderContent);
      sidePanelItems.addItem(textSearchPanel);
    }

    // get the thumbnail viewer panel of document viewer
    let thumbnailViewerPanel: Vintasoft.Imaging.UI.Panels.WebUiThumbnailViewerPanelJS = items.getItemByRegisteredId("thumbnailViewerPanel") as Vintasoft.Imaging.UI.Panels.WebUiThumbnailViewerPanelJS;
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
    let panTool: Vintasoft.Imaging.UI.VisualTools.WebPanToolJS = docViewer.getVisualToolById("PanTool");
    panTool.set_DisableContextMenu(true);

    let magnifierTool: Vintasoft.Imaging.UI.VisualTools.WebMagnifierToolJS = docViewer.getVisualToolById("MagnifierTool") as Vintasoft.Imaging.UI.VisualTools.WebMagnifierToolJS;
    magnifierTool.set_DisableContextMenu(true);

    let zoomTool: Vintasoft.Imaging.UI.VisualTools.WebZoomToolJS = docViewer.getVisualToolById("ZoomTool") as Vintasoft.Imaging.UI.VisualTools.WebZoomToolJS;
    zoomTool.set_DisableContextMenu(true);

    let zoomSelectionTool: Vintasoft.Imaging.UI.VisualTools.WebZoomSelectionToolJS = docViewer.getVisualToolById("ZoomSelectionTool") as Vintasoft.Imaging.UI.VisualTools.WebZoomSelectionToolJS;
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
    AnnotationUiHelper.initializeAnnotationVisualTool(docViewer);
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



  // === Open TXT ===

  /**
   Adds ".txt" file extension in file extension filter for upload buttons in web document viewer.
  */
  __addTxtFileExtensionToUploadButtonsInWebDocumentViewer() {
    if (_documentViewerDemoComponent._docViewer != null) {
      // get upload buttons
      var uploadAndOpenFileButtons = _documentViewerDemoComponent._docViewer.get_Items().getItemsByRegisteredId("uploadAndOpenFileButton");
      _documentViewerDemoComponent.__addTextFileExtesionToUploadButtons(uploadAndOpenFileButtons);

      var uploadAndAddFileButtons = _documentViewerDemoComponent._docViewer.get_Items().getItemsByRegisteredId("uploadAndAddFileButton");
      _documentViewerDemoComponent.__addTextFileExtesionToUploadButtons(uploadAndAddFileButtons);
    }
  }

  /**
    * Adds ".txt" file extension in file extension filter for upload buttons.
    * @param uploadButtons Upload buttons.
    */
  __addTextFileExtesionToUploadButtons(uploadButtons: Vintasoft.Imaging.UI.UIElements.WebUiElementJS[]) {
    for (var i = 0; i < uploadButtons.length; i++) {
      var uploadButton: Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS = uploadButtons[i] as Vintasoft.Imaging.UI.UIElements.WebUiUploadFileButtonJS;

      // get current extension filter
      var currentExtensionFilter = uploadButton.get_FileExtensionFilter();
      // add ".txt" extension
      currentExtensionFilter += ", .txt";

      // set new filter
      uploadButton.set_FileExtensionFilter(currentExtensionFilter);
    }
  }
}
