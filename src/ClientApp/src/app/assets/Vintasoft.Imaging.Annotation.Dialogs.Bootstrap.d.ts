// Copyright 2014-2024 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.Annotation.UI.Dialogs {

  // ===== CLASSES =====

  /**
   * A web UI dialog (based on the Bootstrap) that allows to rotate focused image with annotations.
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
    constructor(commentListPanel: Vintasoft.Imaging.Annotation.UI.Panels.WebUiAnnotationCommentListPanelJS);

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

}

