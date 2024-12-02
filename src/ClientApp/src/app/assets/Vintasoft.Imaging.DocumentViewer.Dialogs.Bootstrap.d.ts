// Copyright 2014-2024 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.DocumentViewer.Dialogs {

  // ===== CLASSES =====

  /**
   * A web UI dialog (based on the Bootstrap) that allows to view the list of TWAIN devices installed in the system and select the device.
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
   * A web UI dialog (based on the Bootstrap) that allows to work with TWAIN device capabilities.
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

