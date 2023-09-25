// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer.Dialogs {

  // ===== CLASSES =====

  /**
   * A Web UI dialog (which is based on Bootstrap) that allows to select images, which are shown in image viewer.
   */
  class WebImageSelectionDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageSelectionDialogJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Gets the selected images.
     */
    getSelectedImages(): Vintasoft.Shared.WebImageJS[];

  }

  /**
   * A Web UI dialog (which is based on Bootstrap) that allows to print images, which are shown in image viewer.
   */
  class WebPrintImagesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPrintImagesDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (which is based on Bootstrap) that allows to view and change the image viewer settings.
   */
  class WebImageViewerSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageViewerSettingsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (which is based on Bootstrap) that allows to view and change the thumbnail viewer settings.
   */
  class WebThumbnailViewerSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebThumbnailViewerSettingsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (which is based on Bootstrap) that allows to set the password of document.
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
   * A Web UI dialog (which is based on Bootstrap) that allows to rotate focused image with annotations.
   */
  class WebRotateImageWithAnnotationsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRotateImageWithAnnotationsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (which is based on Bootstrap) that allows to view and edit the PDF redaction mark appearance.
   */
  class WebPdfRedactionMarkAppearanceDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPdfRedactionMarkAppearanceDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (which is based on Bootstrap) that allows to view the list of TWAIN devices installed in the system and select the device.
   */
  class WebTwainDeviceSelectionDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceSelectionDialogJS"] class.
     * @param deviceManager An instance of Vintasoft.Twain.WebTwainDeviceManagerJS class that represents opened TWAIN device manager.
     */
    constructor(deviceManager: object);

    // PROPERTIES

    /**
     * Gets a value indicating whether the device UI must be shown.
     */
    get_ShowUI(): boolean;

    /**
     * Gets a value indicating whether the device capabilities must be changed.
     */
    get_ChangeDeviceCapabilities(): boolean;

    /**
     * Gets selected TWAIN device.
     */
    get_SelectedDevice(): object;

  }

  /**
   * A Web UI dialog (which is based on Bootstrap) that allows to work with TWAIN device capabilities.
   */
  class WebTwainDeviceCapabilitiesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTwainDeviceCapabilitiesDialogJS"] class.
     * @param device An instance of Vintasoft.Twain.WebTwainDeviceJS class that represents opened TWAIN device.
     */
    constructor(device: object);

  }

}

