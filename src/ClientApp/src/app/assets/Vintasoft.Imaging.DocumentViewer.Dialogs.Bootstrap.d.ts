// Copyright 2014-2024 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer.Dialogs {

  // ===== CLASSES =====

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to select images, which are shown in image viewer.
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
   * A web UI dialog (based on the Bootstrap) that allows to enter URL of the image/document file to be opened in web document viewer.
   */
  class WebUiUploadImageFromUrlDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiUploadImageFromUrlDialogJS"] class.
     * @param documentViewer The web document viewer.
     */
    constructor(documentViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to change the document layout settings.
   */
  class WebDocumentLayoutSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDocumentLayoutSettingsDialogJS"] class.
     * @param documentViewer The web document viewer.
     */
    constructor(documentViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS);

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view and edit the settings for exporting images to a file.
   */
  class WebExportFileSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebExportFileSettingsDialogJS"] class.
     * @param documentViewer The web document viewer.
     */
    constructor(documentViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS);

    // PROPERTIES

    /**
     * Gets a value indicating whether dialog must show UI-elements, which allow to export annotations with file.
     */
    get_SupportAnnotations(): boolean;

    /**
     * Sets a value indicating whether dialog must show UI-elements, which allow to export annotations with file.
     * @param value A value indicating whether dialog must show UI-elements, which allow to export annotations with file.
     */
    set_SupportAnnotations(value: boolean): void;

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to print images, which are shown in image viewer.
   */
  class WebPrintImagesDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPrintImagesDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and change the image viewer settings.
   */
  class WebImageViewerSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageViewerSettingsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and change the thumbnail viewer settings.
   */
  class WebThumbnailViewerSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebThumbnailViewerSettingsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to rotate focused image with annotations.
   */
  class WebRotateImageWithAnnotationsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRotateImageWithAnnotationsDialogJS"] class.
     */
    constructor();

  }

  /**
   * A web UI dialog (based on the Bootstrap) that allows to change settings of the annotation comment.
   */
  class WebUiAnnotationCommentSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationCommentSettingsDialogJS"] class.
     * @param commentListPanel The comment list panel.
     */
    constructor(commentListPanel: Vintasoft.Imaging.DocumentViewer.Panels.WebUiAnnotationCommentListPanelJS);

    // PROPERTIES

    /**
     * Gets the annotation comment.
     */
    get_Comment(): object;

    /**
     * Sets the annotation comment.
     * @param annotationComment An instance of [WebAnnotationCommentJS] type that should be used as a source for this dialog.
     */
    set_Comment(value: object): void;

    // METHODS

    /**
     * Shows the dialog.
     */
    show(): void;

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and edit the PDF redaction mark appearance.
   */
  class WebPdfRedactionMarkAppearanceDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPdfRedactionMarkAppearanceDialogJS"] class.
     */
    constructor();

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view and edit the PDF redaction mark settings.
   */
  class WebUiPdfRedactionMarkSettingsDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfRedactionMarkSettingsDialogJS"] class.
     * @param pdfRedactionMark Redaction mark, which settings should be shown in dialog.
     */
    constructor(pdfRedactionMark: object);

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view information about a PDF image resource.
   */
  class WebUiPdfImageResourceDialogJS extends Vintasoft.Imaging.UI.Dialogs.WebUiDialogJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiPdfImageResourceDialogJS"] class.
     * @param image An instance of [see="WebContentImageJS"] class.
     */
    constructor(image: object);

  }

  /**
   * A Web UI dialog (based on the Bootstrap) that allows to view the list of TWAIN devices installed in the system and select the device.
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
   * A Web UI dialog (based on the Bootstrap) that allows to work with TWAIN device capabilities.
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

