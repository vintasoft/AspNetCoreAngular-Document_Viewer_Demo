import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


let _imageViewerSettingsDialogContent: ImageViewerSettingsDialogContent;


@Component({
  selector: 'image-viewer-settings-dialog-content',
  templateUrl: './image-viewer-settings-dialog.html'
})
export class ImageViewerSettingsDialogContent {

  public imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS | null = null;
  private _decodingSettings: Vintasoft.Shared.WebDecodingSettingsJS | null = null;


  constructor(public activeModal: NgbActiveModal) {
    _imageViewerSettingsDialogContent = this;
  }


  /**
   OnInit event occurs.
  */
  ngOnInit() {
    let imageViewerDefaultRendSettingsCheckboxElement: HTMLElement | null = document.getElementById("imageViewerDefaultRendSettingsCheckbox");
    if (imageViewerDefaultRendSettingsCheckboxElement != null) {
      Vintasoft.Shared.subscribeToEvent(imageViewerDefaultRendSettingsCheckboxElement, 'change', _imageViewerSettingsDialogContent.__useDefaultRenderingSettingsCheckboxChanged);
    }

    let settings: any = document.querySelector(".pdfRenderingSettings");
    if (Vintasoft.Imaging.isPdfPluginAvailable()) {
      for (let i = 0; i < settings.length; i++)
        settings[i].style.display = "table-row";
    }
    this.initialize();
  }

  /**
   Applies the settings to the image viewer.
   */
  public applySettingsToViewer() {
    // get image viewer
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS | null = _imageViewerSettingsDialogContent.imageViewer;
    if (imageViewer == null)
      return false;

    let imageViewerBackgroundColorElement: HTMLElement | null = document.getElementById('imageViewerBackgroundColor');
    // get background color
    let backgroundColor: string = '';
    if (imageViewerBackgroundColorElement != null) {
      imageViewerBackgroundColorElement.style.backgroundColor;
    }
    // create rendering settings
    let renderingSettings: Vintasoft.Shared.WebRenderingSettingsJS = _imageViewerSettingsDialogContent.__createRenderingSettings(null);
    // if custom settings are used
    let imageViewerDefaultRendSettingsCheckboxElement: HTMLInputElement = document.getElementById('imageViewerDefaultRendSettingsCheckbox') as HTMLInputElement;
    if (!imageViewerDefaultRendSettingsCheckboxElement.checked) {
      // get information about resolution
      let imageViewerRendSettingsHorResElement: HTMLSelectElement = document.getElementById("imageViewerRendSettingsHorRes") as HTMLSelectElement;
      let resX: number = parseFloat(imageViewerRendSettingsHorResElement.value);
      let imageViewerRendSettingsVertResElement: HTMLSelectElement = document.getElementById("imageViewerRendSettingsVertRes") as HTMLSelectElement;
      let resY: number = parseFloat(imageViewerRendSettingsVertResElement.value);
      // get information about interpolation mode
      let imageViewerRendSettingsInterpolationElement: HTMLSelectElement = document.getElementById("imageViewerRendSettingsInterpolation") as HTMLSelectElement;
      let interpolation: string = imageViewerRendSettingsInterpolationElement.value;
      // get information about smoothing mode
      let imageViewerRendSettingsSmoothingElement: HTMLSelectElement = document.getElementById("imageViewerRendSettingsSmoothing") as HTMLSelectElement;
      let smoothing: string = imageViewerRendSettingsSmoothingElement.value;

      if (isNaN(resX) || isNaN(resY) || resX <= 0 || resY <= 0) {
        alert("Wrong parameters!");
        _imageViewerSettingsDialogContent.initialize();
        return false;
      }

      // change rendering settings
      renderingSettings.set_Resolution({ x: resX, y: resY });
      renderingSettings.set_InterpolationMode(new Vintasoft.Shared.WebInterpolationModeEnumJS(interpolation));
      renderingSettings.set_SmoothingMode(new Vintasoft.Shared.WebSmoothingModeEnumJS(smoothing));

      let pdfSettings: Vintasoft.Shared.WebPdfRenderingSettingsJS | null
        = _imageViewerSettingsDialogContent.__getPdfRenderingSettings(renderingSettings);
      if (pdfSettings != null) {
        let drawNonMarkupAnnotationsElement: HTMLInputElement = document.getElementById("drawNonMarkupAnnotations") as HTMLInputElement;
        let drawNonMarkupAnnotation: boolean = drawNonMarkupAnnotationsElement.checked;
        pdfSettings.set_DrawNonMarkupAnnotations(drawNonMarkupAnnotation);
      }
    }

    // get information about color management
    let imageViewerColorManagementCheckboxElement: HTMLInputElement = document.getElementById("imageViewerColorManagementCheckbox") as HTMLInputElement;
    let useDecodingSettings: boolean = imageViewerColorManagementCheckboxElement.checked;
    // if color management is used
    if (useDecodingSettings) {
      // create default decoding settings
      _imageViewerSettingsDialogContent._decodingSettings = new Vintasoft.Shared.WebDecodingSettingsJS();
      // subscribe to the "change" event of image collection
      Vintasoft.Shared.subscribeToEvent(imageViewer.get_Images(), 'changed.decodingSettings', _imageViewerSettingsDialogContent.__imageViewerImagesChanged);
    }
    // if color management is not used
    else {
      // clear information about decoding settings
      _imageViewerSettingsDialogContent._decodingSettings = null;
      // unsubscribe from the "change" event of image collection
      Vintasoft.Shared.unsubscribeFromEvent(imageViewer.get_Images(), 'changed.decodingSettings');
    }

    // new tile size
    let tileSize: any;
    let imageViewerTileSizeElement: HTMLSelectElement = document.getElementById("imageViewerTileSize") as HTMLSelectElement;
    switch (imageViewerTileSizeElement.value) {
      case "512x512":
        tileSize = { width: 512, height: 512 };
        break;
      case "1024x1024":
        tileSize = { width: 1024, height: 1024 };
        break;
      case "2048x2048":
        tileSize = { width: 2048, height: 2048 };
        break;
    }

    // need center image
    let imageViewerCenterImageCheckboxElement: HTMLInputElement = document.getElementById("imageViewerCenterImageCheckbox") as HTMLInputElement;
    let centerImage: boolean = imageViewerCenterImageCheckboxElement.checked;

    // viewer resize timeout
    let imageViewerResizeTimeoutInputElement: HTMLInputElement = document.getElementById("imageViewerResizeTimeoutInput") as HTMLInputElement;
    let viewerResizeTimeout: any = imageViewerResizeTimeoutInputElement.value;

    // change the background color
    let viewerControl: HTMLElement = imageViewer.get_Control() as HTMLElement;
    viewerControl.style.backgroundColor = backgroundColor;

    // get a value indicating whether image viewer should use vector rendering for documents
    let vectorContentBackgroundColorElement: HTMLInputElement = document.getElementById("useVectorRenderingForDocumentsCheckbox") as HTMLInputElement;
    let useVectorRenderingForDocuments: boolean = vectorContentBackgroundColorElement.checked;

    // get the background color for vector content
    let useVectorRenderingForDocumentsCheckboxElement: HTMLInputElement = document.getElementById("vectorContentBackgroundColor") as HTMLInputElement;
    let vectorContentBackgroundColor: string = useVectorRenderingForDocumentsCheckboxElement.value;

    let imageAnchorSelectElement: HTMLSelectElement = document.getElementById("imageAnchorSelect") as HTMLSelectElement;
    let imageAnchor: any = imageAnchorSelectElement.value;

    let useAppearanceInSinglePageModeElement: HTMLInputElement = document.getElementById("useAppearanceInSinglePageMode") as HTMLInputElement;
    let useAppearanceInSinglePageMode: boolean = useAppearanceInSinglePageModeElement.checked;

    let multipageDisplayModeSelectElement: HTMLSelectElement = document.getElementById("multipageDisplayModeSelect") as HTMLSelectElement;
    let multipageDisplayMode: string = multipageDisplayModeSelectElement.value;

    let multipageLayoutDirectionSelectElement: HTMLSelectElement = document.getElementById("multipageLayoutDirectionSelect") as HTMLSelectElement;
    let multipageLayoutDirection: any = multipageLayoutDirectionSelectElement.value;

    let multipageImagesInRowInputElement: HTMLInputElement = document.getElementById("multipageImagesInRowInput") as HTMLInputElement;
    let multipageImagesInRow: number = parseInt(multipageImagesInRowInputElement.value);

    let multipageImagesPaddingElement: HTMLInputElement = document.getElementById("multipageImagesPadding") as HTMLInputElement;
    let multipageImagesPadding: any = parseInt(multipageImagesPaddingElement.value);


    let imageAppearanceBackColorInputElement: HTMLInputElement = document.getElementById("imageAppearanceBackColorInput") as HTMLInputElement;
    let imageAppearanceBackColor: string = imageAppearanceBackColorInputElement.value;

    let imageAppearanceBorderColorInputElement: HTMLInputElement = document.getElementById("imageAppearanceBorderColorInput") as HTMLInputElement;
    let imageAppearanceBorderColor: string = imageAppearanceBorderColorInputElement.value;

    let imageAppearanceBorderWidthInputElement: HTMLInputElement = document.getElementById("imageAppearanceBorderWidthInput") as HTMLInputElement;
    let imageAppearanceBorderWidth: number = parseInt(imageAppearanceBorderWidthInputElement.value);


    let focusedImageAppearanceBackColorInputElement: HTMLInputElement = document.getElementById("focusedImageAppearanceBackColorInput") as HTMLInputElement;
    let focusedImageAppearanceBackColor: string = focusedImageAppearanceBackColorInputElement.value;

    let focusedImageAppearanceBorderColorInputElement: HTMLInputElement = document.getElementById("focusedImageAppearanceBorderColorInput") as HTMLInputElement;
    let focusedImageAppearanceBorderColor: string = focusedImageAppearanceBorderColorInputElement.value;

    let focusedImageAppearanceBorderWidthInputElement: HTMLInputElement = document.getElementById("focusedImageAppearanceBorderWidthInput") as HTMLInputElement;
    let focusedImageAppearanceBorderWidth: number = parseInt(focusedImageAppearanceBorderWidthInputElement.value);

    if (isNaN(multipageImagesInRow) || isNaN(multipageImagesPadding) || multipageImagesInRow < 1 || multipageImagesPadding < 0
      || isNaN(imageAppearanceBorderWidth) || isNaN(focusedImageAppearanceBorderWidth) || imageAppearanceBorderWidth < 0
      || focusedImageAppearanceBorderWidth < 0) {
      alert("Wrong parameters!");
      _imageViewerSettingsDialogContent.initialize();
      return false;
    }


    imageViewer.beginInit();

    // apply changes
    imageViewer.set_RenderingSettings(renderingSettings);
    imageViewer.set_CenterImage(centerImage);
    imageViewer.set_ResizeTimeout(viewerResizeTimeout);
    imageViewer.set_TileSize(tileSize);

    if (_imageViewerSettingsDialogContent._decodingSettings != null)
      imageViewer.get_Images().setDecodingSettings(_imageViewerSettingsDialogContent._decodingSettings);
    else
      imageViewer.get_Images().setDecodingSettings();

    imageViewer.set_ImageAnchor(imageAnchor);
    imageViewer.set_MultipageDisplayMode(new Vintasoft.Imaging.WebImageViewerMultipageDisplayModeEnumJS(multipageDisplayMode));
    imageViewer.set_MultipageDisplayLayoutDirection(multipageLayoutDirection);
    imageViewer.set_MultipageDisplayRowCount(multipageImagesInRow);
    imageViewer.set_UseImageAppearancesInSinglePageMode(useAppearanceInSinglePageMode);
    imageViewer.set_MultipageDisplayImagePadding(multipageImagesPadding);

    imageViewer.set_UseVectorRendering(useVectorRenderingForDocuments);
    imageViewer.set_VectorContentBackgroundColor(vectorContentBackgroundColor);

    let imageAppearance: Vintasoft.Imaging.WebImageAppearanceJS = imageViewer.get_ImageAppearance();
    imageAppearance.set_BackColor(imageAppearanceBackColor);
    imageAppearance.set_BorderColor(imageAppearanceBorderColor);
    imageAppearance.set_BorderWidth(imageAppearanceBorderWidth);

    let focusedImageAppearance: Vintasoft.Imaging.WebImageAppearanceJS = imageViewer.get_FocusedImageAppearance();
    focusedImageAppearance.set_BackColor(focusedImageAppearanceBackColor);
    focusedImageAppearance.set_BorderColor(focusedImageAppearanceBorderColor);
    focusedImageAppearance.set_BorderWidth(focusedImageAppearanceBorderWidth);

    imageViewer.endInit();

    return true;
  }

  /**
   Initializes an image viewer settings dialog.
   */
  public initialize() {
    // get image viewer
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS | null = _imageViewerSettingsDialogContent.imageViewer;
    if (imageViewer == null)
      return;

    // get image viewer settings
    let renderingSettings: Vintasoft.Shared.WebRenderingSettingsJS = imageViewer.get_RenderingSettings() as Vintasoft.Shared.WebRenderingSettingsJS;
    let centerImage: boolean = imageViewer.get_CenterImage();
    let resizeTimeout: number = imageViewer.get_ResizeTimeout();
    let tileSize: any = imageViewer.get_TileSize()
    let tileHeight: number = tileSize.height;
    // get background color of image viewer
    let viewerControl: HTMLElement = imageViewer.get_Control() as HTMLElement;
    let backgroundColor: string = viewerControl.style.backgroundColor;

    let tileSizeValue: string = "512x512";
    // set information about tile size
    switch (tileHeight) {
      case 1024:
        tileSizeValue = "1024x1024";
        break;
      case 2048:
        tileSizeValue = "2048x2048";
        break;
    }
    let imageViewerTileSizeElement: HTMLSelectElement = document.getElementById("imageViewerTileSize") as HTMLSelectElement;
    imageViewerTileSizeElement.value = tileSizeValue;

    // define that image viewer uses the default rendering settings
    let isDefaultRenderingSettings: boolean = renderingSettings == null || renderingSettings.isEmpty();
    // initialize "default rendering settings" checkbox
    let imageViewerDefaultRendSettingsCheckboxElement: HTMLInputElement = document.getElementById("imageViewerDefaultRendSettingsCheckbox") as HTMLInputElement;
    imageViewerDefaultRendSettingsCheckboxElement.checked = isDefaultRenderingSettings;
    // get resolution
    let resolution: any = null;
    if (renderingSettings != null)
      resolution = renderingSettings.get_Resolution();
    else
      resolution = { x: 96, y: 96 };
    // if image viewer uses the default settings
    if (isDefaultRenderingSettings) {
      resolution = { x: 96, y: 96 };
      if (renderingSettings == null)
        renderingSettings = _imageViewerSettingsDialogContent.__createRenderingSettings(renderingSettings);
    }

    let tds: any = document.querySelectorAll(".customRenderingSettings td");
    if (isDefaultRenderingSettings) {
      for (let tdi = 0; tdi < tds.length; tdi++)
        for (let i = 0; i < tds[tdi].childNodes.length; i++)
          tds[tdi].childNodes[i].setAttribute('disabled', 'disabled');
    }
    else {
      for (let tdi = 0; tdi < tds.length; tdi++)
        for (let i = 0; i < tds[tdi].childNodes.length; i++)
          tds[tdi].childNodes[i].removeAttribute('disabled');
    }
    // set information about resolution
    let imageViewerRendSettingsHorResElement: HTMLSelectElement = document.getElementById("imageViewerRendSettingsHorRes") as HTMLSelectElement;
    imageViewerRendSettingsHorResElement.value = resolution.x;
    let imageViewerRendSettingsVertResElement: HTMLSelectElement = document.getElementById("imageViewerRendSettingsVertRes") as HTMLSelectElement;
    imageViewerRendSettingsVertResElement.value = resolution.y;

    // get interpolation mode
    let interpolation: Vintasoft.Shared.WebInterpolationModeEnumJS = renderingSettings.get_InterpolationMode();
    // set information about interpolation
    let imageViewerRendSettingsInterpolationElement: HTMLSelectElement = document.getElementById("imageViewerRendSettingsInterpolation") as HTMLSelectElement;
    imageViewerRendSettingsInterpolationElement.value = interpolation.toString();

    // get smoothing mode
    let smoothingMode: Vintasoft.Shared.WebSmoothingModeEnumJS = renderingSettings.get_SmoothingMode();
    // set information about smoothing
    let imageViewerRendSettingsSmoothingElement: HTMLSelectElement = document.getElementById("imageViewerRendSettingsSmoothing") as HTMLSelectElement;
    imageViewerRendSettingsSmoothingElement.value = smoothingMode.toString();

    let pdfSettings: Vintasoft.Shared.WebPdfRenderingSettingsJS | null = _imageViewerSettingsDialogContent.__getPdfRenderingSettings(renderingSettings);
    if (pdfSettings != null) {
      let drawNonMarkupAnnotation: boolean = pdfSettings.get_DrawNonMarkupAnnotations();
      let drawNonMarkupAnnotationsElement: HTMLInputElement = document.getElementById("drawNonMarkupAnnotations") as HTMLInputElement;
      drawNonMarkupAnnotationsElement.checked = drawNonMarkupAnnotation;
    }

    // set information about color management
    let imageViewerColorManagementCheckboxElement: HTMLInputElement = document.getElementById("imageViewerColorManagementCheckbox") as HTMLInputElement;
    imageViewerColorManagementCheckboxElement.checked = _imageViewerSettingsDialogContent._decodingSettings != null;

    // set information about "centerImage" property
    let imageViewerCenterImageCheckboxElement: HTMLInputElement = document.getElementById("imageViewerCenterImageCheckbox") as HTMLInputElement;
    imageViewerCenterImageCheckboxElement.checked = centerImage;

    // set information about "resizeTimeout" property
    let imageViewerResizeTimeoutInputElement: HTMLInputElement = document.getElementById("imageViewerResizeTimeoutInput") as HTMLInputElement;
    imageViewerResizeTimeoutInputElement.value = resizeTimeout.toString();

    // set information about background color
    let imageViewerBackgroundColorElement: HTMLInputElement = document.getElementById("imageViewerBackgroundColor") as HTMLInputElement;
    imageViewerBackgroundColorElement.value = backgroundColor;

    // set status of useVectorRenderingForDocumentsCheckbox checkbox
    let useVectorRenderingForDocumentsCheckboxElement: HTMLInputElement = document.getElementById("useVectorRenderingForDocumentsCheckbox") as HTMLInputElement;
    useVectorRenderingForDocumentsCheckboxElement.checked = imageViewer.get_UseVectorRendering();
    // set information about background color for vector content
    let vectorContentBackgroundColorElement: HTMLInputElement = document.getElementById("vectorContentBackgroundColor") as HTMLInputElement;
    vectorContentBackgroundColorElement.value = imageViewer.get_VectorContentBackgroundColor();

    let imageAnchor: Vintasoft.Imaging.WebImageAnchorTypeEnumJS = imageViewer.get_ImageAnchor();
    let multipageDisplayMode: Vintasoft.Imaging.WebImageViewerMultipageDisplayModeEnumJS = imageViewer.get_MultipageDisplayMode();
    let multipageLayoutDirection: Vintasoft.Imaging.WebImageLayoutDirectionEnumJS = imageViewer.get_MultipageDisplayLayoutDirection();
    let multipageImagesInRow: number = imageViewer.get_MultipageDisplayRowCount();
    let useAppearanceInSinglePageMode: boolean = imageViewer.get_UseImageAppearancesInSinglePageMode();
    let multipageImagesPadding: any = imageViewer.get_MultipageDisplayImagePadding();

    let imageAnchorSelectElement: HTMLSelectElement = document.getElementById("imageAnchorSelect") as HTMLSelectElement;
    imageAnchorSelectElement.value = imageAnchor.toString();
    let multipageDisplayModeSelectElement: HTMLSelectElement = document.getElementById("multipageDisplayModeSelect") as HTMLSelectElement;
    multipageDisplayModeSelectElement.value = multipageDisplayMode.toString();
    let multipageLayoutDirectionSelectElement: HTMLSelectElement = document.getElementById("multipageLayoutDirectionSelect") as HTMLSelectElement;
    multipageLayoutDirectionSelectElement.value = multipageLayoutDirection.toString();
    let multipageImagesInRowInputElement: HTMLInputElement = document.getElementById("multipageImagesInRowInput") as HTMLInputElement;
    multipageImagesInRowInputElement.value = multipageImagesInRow.toString();
    let multipageImagesPaddingElement: HTMLInputElement = document.getElementById("multipageImagesPadding") as HTMLInputElement;
    multipageImagesPaddingElement.value = multipageImagesPadding[0].toString();

    let useAppearanceInSinglePageModeElement: HTMLInputElement = document.getElementById("useAppearanceInSinglePageMode") as HTMLInputElement;
    useAppearanceInSinglePageModeElement.checked = useAppearanceInSinglePageMode;


    let imageAppearance: Vintasoft.Imaging.WebImageAppearanceJS = imageViewer.get_ImageAppearance();

    let imageAppearanceBackColorInputElement: HTMLInputElement = document.getElementById("imageAppearanceBackColorInput") as HTMLInputElement;
    imageAppearanceBackColorInputElement.value = imageAppearance.get_BackColor();
    let imageAppearanceBorderColorInputElement: HTMLInputElement = document.getElementById("imageAppearanceBorderColorInput") as HTMLInputElement;
    imageAppearanceBorderColorInputElement.value = imageAppearance.get_BorderColor();
    let imageAppearanceBorderWidthInputElement: HTMLInputElement = document.getElementById("imageAppearanceBorderWidthInput") as HTMLInputElement;
    imageAppearanceBorderWidthInputElement.value = imageAppearance.get_BorderWidth().toString();

    let focusedImageAppearance: Vintasoft.Imaging.WebImageAppearanceJS = imageViewer.get_FocusedImageAppearance();

    let focusedImageAppearanceBackColorInputElement: HTMLInputElement = document.getElementById("focusedImageAppearanceBackColorInput") as HTMLInputElement;
    focusedImageAppearanceBackColorInputElement.value = focusedImageAppearance.get_BackColor();
    let focusedImageAppearanceBorderColorInputElement: HTMLInputElement = document.getElementById("focusedImageAppearanceBorderColorInput") as HTMLInputElement;
    focusedImageAppearanceBorderColorInputElement.value = focusedImageAppearance.get_BorderColor();
    let focusedImageAppearanceBorderWidthInputElement: HTMLInputElement = document.getElementById("focusedImageAppearanceBorderWidthInput") as HTMLInputElement;
    focusedImageAppearanceBorderWidthInputElement.value = focusedImageAppearance.get_BorderWidth().toString();
  }

  /**
   The "Default settings" checkbox is changed.
   */
  private __useDefaultRenderingSettingsCheckboxChanged(event: any, eventArgs: any) {
    let useDefaultRenderingSettings: boolean = (document.getElementById("imageViewerDefaultRendSettingsCheckbox") as HTMLInputElement).checked;//event.target.checked;//$(this).prop("checked");
    let tds: any = document.querySelectorAll(".customRenderingSettings td");
    if (useDefaultRenderingSettings) {
      for (let tdi = 0; tdi < tds.length; tdi++)
        for (let i = 0; i < tds[tdi].childNodes.length; i++)
          tds[tdi].childNodes[i].setAttribute('disabled', 'disabled');
    }
    else {
      for (let tdi = 0; tdi < tds.length; tdi++)
        for (let i = 0; i < tds[tdi].childNodes.length; i++)
          tds[tdi].childNodes[i].removeAttribute('disabled');
    }
  }

  /**
   Image collection of viewer is changed.
   */
  private __imageViewerImagesChanged(event: any, eventArgs: any) {
    if (_imageViewerSettingsDialogContent._decodingSettings != null) {
      let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS | null = _imageViewerSettingsDialogContent.imageViewer;
      if (imageViewer == null)
        return;

      let images: Vintasoft.Shared.WebImageCollectionJS = imageViewer.get_Images();
      images.setDecodingSettings(_imageViewerSettingsDialogContent._decodingSettings);
    }
  }

  /**
   Returns WebPdfRenderingSettingsJS object from rendering settings.
   */
  private __getPdfRenderingSettings(renderingSettings: Vintasoft.Shared.WebRenderingSettingsJS): Vintasoft.Shared.WebPdfRenderingSettingsJS | null {
    if (Vintasoft.Imaging.isPdfPluginAvailable()) {
      if (renderingSettings instanceof Vintasoft.Shared.WebCompositeRenderingSettingsJS) {
        let settings: Vintasoft.Shared.WebRenderingSettingsJS[] = renderingSettings.get_Settings();
        for (let i = 0; i < settings.length; i++) {
          if (settings[i] instanceof Vintasoft.Shared.WebPdfRenderingSettingsJS)
            return settings[i] as Vintasoft.Shared.WebPdfRenderingSettingsJS;
        }
      }
    }
    return null;
  }

  /**
   Creates rendering settings with specified resolution.
   */
  private __createRenderingSettings(resolution: any) {
    let imageRenderingSettings: Vintasoft.Shared.WebRenderingSettingsJS
      = new Vintasoft.Shared.WebRenderingSettingsJS(resolution);
    if (Vintasoft.Imaging.isPdfPluginAvailable()) {
      let pdfRenderingSettings: Vintasoft.Shared.WebPdfRenderingSettingsJS = new Vintasoft.Shared.WebPdfRenderingSettingsJS();

      let compositeRenderingSettings: Vintasoft.Shared.WebCompositeRenderingSettingsJS
        = new Vintasoft.Shared.WebCompositeRenderingSettingsJS([imageRenderingSettings, pdfRenderingSettings]);
      if (resolution != null)
        compositeRenderingSettings.set_Resolution({ x: resolution.x, y: resolution.y });
      imageRenderingSettings = compositeRenderingSettings;
    }
    return imageRenderingSettings;
  }


  /**
   Closes the dialog.
  */
  public closeDialog() {
    this.applySettingsToViewer();
    this.activeModal.close();
  }

}


@Component({
  selector: 'image-viewer-settings-dialog',
  templateUrl: './image-viewer-settings-dialog.html'
})
export class ImageViewerSettingsDialog {

  public imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS | null;
  private _modalReference: NgbModalRef | null;


  constructor(private modalService: NgbModal) {
    this.imageViewer = null;
    this._modalReference = null;
  }


  public open() {
    this._modalReference = this.modalService.open(ImageViewerSettingsDialogContent);
    this._modalReference.componentInstance.imageViewer = this.imageViewer;
  }

  /**
   Closes the dialog.
  */
  public closeDialog() {
    if (this._modalReference != null) {
      this._modalReference.componentInstance.closeDialog();
    }
  }

}
