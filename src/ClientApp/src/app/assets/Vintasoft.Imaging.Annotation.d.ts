// Copyright 2014-2024 VintaSoft LLC. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft LLC. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Imaging.Annotation {

  // ===== ENUMS =====

  /**
   * Specifies available units of measure.
   */
  class WebUnitOfMeasureEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available text alignments on the drawing surface.
   */
  class WebTextAlignEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available styles of the caps at the ends ot the line-based annotations.
   */
  class WebLineCapStyleEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available styles of brush.
   */
  class WebBrushStyleEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which define how to join consecutive line or curve segments in an annotation.
   */
  class WebLineJoinEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of line style pattern for annotation.
   */
  class WebAnnotationLineStyleEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of grips being used for an annotation.
   */
  class WebAnnotationGripModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of mark annotation.
   */
  class WebMarkAnnotationTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available types of the sticky note annotation when annotation is collapsed.
   */
  class WebCollapsedAnnotationTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available icons of the sticky note annotation when annotation is collapsed.
   */
  class WebCollapsedAnnotationIconTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available styles of dashed lines for the annotation outline.
   */
  class WebOutlineDashStyleEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which define how user can interact with annotations in the [see="WebAnnotationViewerJS"].
   */
  class WebAnnotationInteractionModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available units of measure for the size of [see="WebAnnotationFontJS"].
   */
  class WebAnnotationFontUnitEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== CLASSES =====

  /**
   * Represents a print manager that can print images with annotations.
   */
  class WebAnnotationPrintManagerJS extends Vintasoft.Imaging.WebPrintManagerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationPrintManagerJS"] class.
     * @param images Array of [see="WebImageJS"] objects, which should be printed.
     * @param annotationDataController [see="WebAnnotationViewControllerJS"] object, which linked with specified images.
     */
    constructor(images: Vintasoft.Shared.WebImageJS[], annotationDataController: Vintasoft.Imaging.Annotation.WebAnnotationViewControllerJS);

  }

  /**
   * Represents an annotation view collection.
   */
  class WebAnnotationViewCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewCollectionJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the number of annotations in the collection.
     */
    get_Count(): number;

    /**
     * Gets a value indicating whether the annotation collection is changed.
     */
    get_isChanged(): boolean;

    // METHODS

    /**
     * Returns the annotation view at the specified index.
     * @param index Zero-based index of annotation view in the collection.
     */
    getItem(index: number): Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS;

    /**
     * Returns the string representation of this object.
     */
    toString(): string;

    /**
     * Creates a new object that is a copy of the current annotation collection.
     */
    clone(): Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS;

    /**
     * Adds annotation view to the end of collection.
     * @param annotation [see="WebAnnotationViewJS"] to add.
     */
    add(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Inserts annotation view to the collection.
     * @param index Zero-based index in the collection at which the annotation view must be inserted.
     * @param annotation [see="WebAnnotationViewJS"] to insert.
     */
    insert(index: number, annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Replaces annotation at the specified index.
     * @param index The zero-based index of the annotation to replace.
     * @param annotation New [see="WebAnnotationViewJS"] at the specified index.
     */
    set(index: number, annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Swaps two annotation views in the collection.
     * @param firstIndex Zero-based index of the first annotation view.
     * @param secondIndex Zero-based index of the second annotation view.
     */
    swap(firstIndex: number, secondIndex: number): void;

    /**
     * Removes annotation from the collection.
     * @param index Zero-based index of annotation to remove.
     */
    removeAt(index: number): void;

    /**
     * Removes annotation from the collection.
     * @param annotation [see="WebAnnotationViewJS"] to remove.
     */
    remove(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Brings the specified annotation to the specified position in the collection.
     * @param annotation [see="WebAnnotationViewJS"] to move.
     * @param position The zero-based index of new position.
     */
    bringTo(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS, position: number): void;

    /**
     * Brings the specified annotation to the last position in the collection.
     * @param annotation [see="WebAnnotationViewJS"] to move.
     */
    bringToFont(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Brings the specified annotation to the first position in the collection.
     * @param annotation [see="WebAnnotationViewJS"] to move.
     */
    bringToBack(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Clears the collection.
     */
    clear(): void;

    /**
     * Sends an asynchronous request to a server to clear cache of image collection files on server.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)"<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    clearCache(successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server to clear cache of image collection files on server. Function uses web service specified by the WebServiceJS.defaultAnnotationService property.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)"<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    clearCache(successFunc: Function, errorFunc: Function): void;

    /**
     * Returns position of specified annotation in collection.
     * @param annotation [see="WebAnnotationViewJS"] object.
     */
    indexOf(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): number;

  }

  /**
   * Represents an annotation view controller that stores links between images from image collection and annotation collections.
   */
  class WebAnnotationViewControllerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewControllerJS"] class.
     * @param images [see="WebImageCollectionJS"] object that defines the image collection.
     */
    constructor(images: Vintasoft.Shared.WebImageCollectionJS);

    // PROPERTIES

    /**
     * Gets the image collection associated with the annotation controller.
     */
    get_Images(): Vintasoft.Shared.WebImageCollectionJS;

    // METHODS

    /**
     * Gets the annotation collection associated with image.
     * @param index The zero-based index of image from image collection returned by the get_Images property.
     */
    get_AnnotationViewCollection(index: number): Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS;

    /**
     * Gets the annotation collection associated with image.
     * @param index A [see="WebImageJS"] object.
     */
    get_AnnotationViewCollection(index: Vintasoft.Shared.WebImageJS): Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS;

    /**
     * Returns index of annotation collection if annotation view is found in annotation collection.
     * @param annotation [see="WebAnnotationViewJS"] object that defines the annotation to search.
     */
    indexOf(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): number;

    /**
     * Saves changes in annotation collection on server.
     * @param image [see="WebImageJS"] object.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    serializeAnnotationCollection(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for deserializing an annotation collection, of specified image, from server.
     * @param image [see="WebImageJS"] object.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>annotationCollection (object): [see="WebAnnotationViewCollectionJS"] object, which is associated with specified [see="WebImageJS"] object.<br /> Parameter will have "null" value if [see="WebImageJS"] object does not exist in image collection of annotation controller.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    deserializeAnnotationCollection(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Burns annotation collection on image.
     * @param image [see="WebImageJS"] object.
     * @param changeSourceFile Indicates whether the changes must be saved in the source file. True - changes must be saved in the source file; False - changes must be saved in new file.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> <li>processedImage (object): [see="WebImageJS"] object, which represents image with burned annotations.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    burnAnnotationCollection(image: Vintasoft.Shared.WebImageJS, changeSourceFile: boolean, successFunc: Function, errorFunc: Function): void;

    /**
     * Rotates image with annotations.
     * @param image [see="WebImageJS"] object.
     * @param angle Rotation angle in degrees.
     * @param borderColor The border color.
     * @param borderColorType [see="WebBorderColorTypeEnumJS"] object which defines the border color type.
     * @param changeSource Indicates whether the changes must be saved in the source file. True - changes must be saved in the source file; False - changes must be saved in new file.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfo (object): Information about image (image ID and page index).</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> <li>processedImage (object): [see="WebImageJS"] object, which represents rotated image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> <li>sourceImage (object): [see="WebImageJS"] object, which represents source image.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    rotateImageWithAnnotation(image: Vintasoft.Shared.WebImageJS, angle: number, borderColor: string, borderColorType: Vintasoft.Imaging.WebBorderColorTypeEnumJS, changeSource: boolean, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for removing an annotation collection, of specified image, from server.
     * @param image [see="WebImageJS"] object.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    removeAnnotationCollection(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for saving the specified annotation collection in specified image.
     * @param image [see="WebImageJS"] object.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    saveAnnotationCollection(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for saving the specified annotation collections in specified image collection.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    saveAnnotationCollections(successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for getting image with burned annotations as Base64 string.
     * @param image [see="WebImageJS"] object.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): A Base64 string that represents an image with burned annotations.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    getImageWithAnnotationsAsBase64String(image: Vintasoft.Shared.WebImageJS, successFunc: Function, errorFunc: Function): void;

  }

  /**
   * Represents an undo action that stores information about changes in [see="WebAnnotationViewJS"] object.
   */
  class WebAnnotationViewUndoActionJS extends Vintasoft.Imaging.WebUndoActionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewUndoActionJS"] class.
     * @param source [see="WebAnnotationViewJS"] object.
     * @param actionSource Action object.
     * @param annotationViewCollection [see="WebAnnotationViewCollectionJS"] object that contain source object.
     */
    constructor(source: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS, actionSource: object, annotationViewCollection: Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS);

    // PROPERTIES

    /**
     * Gets a value indicating whether the undo action is valid.
     */
    get_IsValid(): boolean;

    // METHODS

    /**
     * Undoes the action.
     */
    undo(): void;

    /**
     * Returns the string representation of this object.
     */
    toString(): string;

  }

  /**
   * Represents an undo action that stores information about changes in [see="WebAnnotationViewCollectionJS"] object.
   */
  class WebAnnotationViewCollectionUndoActionJS extends Vintasoft.Imaging.WebUndoActionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewCollectionUndoActionJS"] class.
     * @param annotationViewCollection [see="WebAnnotationViewCollectionJS"] object.
     * @param actionSource Action object.
     */
    constructor(annotationViewCollection: Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS, actionSource: object);

    // PROPERTIES

    /**
     * Gets the references to the [see="WebAnnotationViewJS"] objects stored in [see="WebAnnotationViewCollectionJS"].
     */
    get_SourceItems(): object;

    /**
     * Gets a value indicating whether the undo action is valid.
     */
    get_IsValid(): boolean;

    // METHODS

    /**
     * Returns the string representation of this object.
     */
    toString(): string;

    /**
     * Undoes the action.
     */
    undo(): void;

  }

  /**
   * Represents an undo monitor that monitors the [see="WebAnnotationViewJS"] object and adds undo action to an undo manager if [see="WebAnnotationViewJS"] object is changed.
   */
  class WebAnnotationViewUndoMonitorJS extends Vintasoft.Imaging.WebUndoMonitorJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewUndoMonitorJS"] class.
     * @param undoManager [see="WebUndoManagerJS"] object.
     * @param annotationViewCollection The [see="WebAnnotationViewCollectionJS"] that contains annotationView.
     * @param annotationView [see="WebAnnotationViewJS"] to monitor.
     */
    constructor(undoManager: Vintasoft.Imaging.WebUndoManagerJS, annotationViewCollection: Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS, annotationView: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS);

    // METHODS

    /**
     * Disposes the undo monitor.
     */
    dispose(): void;

  }

  /**
   * Represents an undo monitor that monitors the [see="WebAnnotationViewCollectionJS"] object and adds undo action to an undo manager if [see="WebAnnotationViewCollectionJS"] object is changed.
   */
  class WebAnnotationViewCollectionUndoMonitorJS extends Vintasoft.Imaging.WebUndoMonitorJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewCollectionUndoMonitorJS"] class.
     * @param undoManager [see="WebUndoManagerJS"] object.
     * @param annotationViewCollection [see="WebAnnotationViewCollectionJS"] to monitor.
     */
    constructor(undoManager: Vintasoft.Imaging.WebUndoManagerJS, annotationViewCollection: Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS);

    // PROPERTIES

    /**
     * Sets a value indicating whether the undo monitor is enabled.
     * @param value Value indicating whether the undo monitor is enabled.
     */
    set_IsEnabled(value: boolean): void;

    // METHODS

    /**
     * Disposes the undo monitor.
     */
    dispose(): void;

  }

  /**
   * Represents an undo monitor that monitors the [see="WebAnnotationViewerJS"] object and adds undo action to an undo manager if [see="WebAnnotationViewCollectionJS"] is changed.
   */
  class WebAnnotationViewerUndoMonitorJS extends Vintasoft.Imaging.WebUndoMonitorJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewerUndoMonitorJS"] class.
     * @param undoManager [see="WebUndoManagerJS"] object.
     * @param annotationViewer [see="WebAnnotationViewerJS"] object.
     */
    constructor(undoManager: Vintasoft.Imaging.WebUndoManagerJS, annotationViewer: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewerJS);

    // PROPERTIES

    /**
     * Gets a value indicating whether history must be shown only for images, which are displayed in viewer.
     */
    get_ShowHistoryForDisplayedImages(): boolean;

    /**
     * Sets a value indicating whether history must be shown only for images, which are displayed in viewer.
     * @param value True if history must be shown only for images, which are displayed in viewer; otherwise, false. Default value is true.
     */
    set_ShowHistoryForDisplayedImages(value: boolean): void;

    /**
     * Sets a value indicating whether the undo monitor is enabled.
     * @param value Value indicating whether the undo monitor is enabled.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a value indicating whether the undo monitor must create composite action when annotations are moving between images.
     */
    get_CreateCompositeActionForMovedAnnotations(): boolean;

    /**
     * Sets a value indicating whether the undo monitor must create composite action when annotations are moving between images.
     * @param value True - the undo monitor must create composite action when annotations are moving between images; false - the undo monitor must NOT create composite action when annotations are moving between images. Default value is true.
     */
    set_CreateCompositeActionForMovedAnnotations(value: boolean): void;

    // METHODS

    /**
     * Disposes the undo monitor.
     */
    dispose(): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.Annotation.UI {

  // ===== CLASSES =====

  /**
   * Provides an abstract base class that determines how to display an annotation and how user can interact with annotation.
   */
  class WebAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the GUID of annotation.
     */
    get_Guid(): string;

    /**
     * Gets the name of annotation.
     */
    get_Name(): string;

    /**
     * Sets the name of annotation.
     * @param value New annotation name. Default value is empty string.
     */
    set_Name(value: string): void;

    /**
     * Gets the background brush of annotation.
     */
    get_FillBrush(): Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS;

    /**
     * Sets the background brush of annotation.
     * @param value The background [see="WebAnnotationBrushJS"] of annotation.
     */
    set_FillBrush(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): void;

    /**
     * Gets the style of the annotation's outline.
     */
    get_Outline(): Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS;

    /**
     * Sets the style of the annotation's outline.
     * @param value Style of the annotation's [see="WebAnnotationPenJS"].
     */
    set_Outline(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS): void;

    /**
     * Gets the location, in device-independent units (1/96th inch per unit), of annotation in the image space.
     */
    get_Location(): object;

    /**
     * Sets the location, in device-independent units (1/96th inch per unit), of annotation in the image space.
     * @param x Horizontal coordinate of annotation, in device-independent units (1/96th inch per unit). Default value is 0.
     * @param y Vertical coordinate of annotation, in device-independent units (1/96th inch per unit). Default value is 0.
     */
    set_Location(value: number): void;

    /**
     * Gets the size, in device-independent units (1/96th inch per unit), of the annotation.
     */
    get_Size(): object;

    /**
     * Sets the size, in device-independent units (1/96th inch per unit), of the annotation.
     * @param width Annotation width. Default value is 0.
     * @param height Annotation height. Default value is 0.
     */
    set_Size(value: number): void;

    /**
     * Gets the creation time of annotation.
     */
    get_CreationTime(): string;

    /**
     * Sets the creation time of annotation.
     * @param value The creation time of annotation.
     */
    set_CreationTime(value: string): void;

    /**
     * Gets the last time this annotation was modified.
     */
    get_ModifiedTime(): string;

    /**
     * Sets the last time this annotation was modified.
     * @param value The last time this annotation was modified.
     */
    set_ModifiedTime(value: string): void;

    /**
     * Gets the rotation angle, in degrees, of the annotation.
     */
    get_Rotation(): number;

    /**
     * Sets the rotation angle, in degrees, of annotation.
     * @param value The rotation angle, in degrees, of annotation. Default value is 0.
     */
    set_Rotation(value: number): void;

    /**
     * Gets a value indicating whether the annotation border is visible.
     */
    get_Border(): boolean;

    /**
     * Sets a value indicating whether the annotation border is visible.
     * @param value True - annotation border is visible; False - annotation border is not visible. Default value is True.
     */
    set_Border(value: boolean): void;

    /**
     * Gets information about the user who created the annotation.
     */
    get_CreatedBy(): string;

    /**
     * Sets information about the user who created the annotation.
     * @param value Information about the user who created the annotation. Default value is empty string.
     */
    set_CreatedBy(value: string): void;

    /**
     * Gets information about the user who modified the annotation.
     */
    get_ModifiedBy(): string;

    /**
     * Sets information about the user who modified the annotation.
     * @param value Information about the user who modified the annotation. Default value is empty string.
     */
    set_ModifiedBy(value: string): void;

    /**
     * Gets a value indicating whether the annotation can be mirrored.
     */
    get_CanMirror(): boolean;

    /**
     * Sets a value indicating whether the annotation can be mirrored.
     * @param value True - annotation can be mirrored; False - annotation cannot be mirrored. Default value is True.
     */
    set_CanMirror(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation is mirrored horizontally.
     */
    get_HorizontalMirrored(): boolean;

    /**
     * Sets a value indicating whether the annotation is mirrored horizontally.
     * @param value True - annotation is mirrored horizontally; False - annotation is not mirrored horizontally. Default value is True.
     */
    set_HorizontalMirrored(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation is mirrored vertically.
     */
    get_VerticalMirrored(): boolean;

    /**
     * Sets a value indicating whether the annotation is mirrored vertically.
     * @param value True - annotation is mirrored vertically; False - annotation is not mirrored vertically. Default value is True.
     */
    set_VerticalMirrored(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be moved.
     */
    get_CanMove(): boolean;

    /**
     * Sets a value indicating whether the annotation can be moved.
     * @param value True - annotation can be moved; False - annotation cannot be moved. Default value is True.
     */
    set_CanMove(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be rotated.
     */
    get_CanRotate(): boolean;

    /**
     * Sets a value indicating whether the annotation can be rotated.
     * @param value True - annotation can be rotated; False - annotation cannot be rotated. Default value is True.
     */
    set_CanRotate(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be resized.
     */
    get_CanResize(): boolean;

    /**
     * Sets a value indicating whether the size of the annotation can be changed.
     * @param value True - annotation can be resized; False - annotation cannot be resized. Default value is True.
     */
    set_CanResize(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation is visible.
     */
    get_IsVisible(): boolean;

    /**
     * Sets a value indicating whether the annotation is visible.
     * @param value True - annotation is visible; False - annotation is not visible. Default value is True.
     */
    set_IsVisible(value: boolean): void;

    /**
     * Gets the tooltip associated with the annotation.
     */
    get_ToolTip(): string;

    /**
     * Sets the tooltip associated with the annotation.
     * @param value New tooltip. Default value is empty string.
     */
    set_ToolTip(value: string): void;

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the template for the resize points of annotation.
     */
    get_ResizePointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Sets the template for the resize points of annotation.
     * @param value [see="WebResizeInteractionPointJS"] object.
     */
    set_ResizePointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS): void;

    /**
     * Gets the rotation point of annotation.
     */
    get_RotationPoint(): Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS;

    /**
     * Sets the rotation point of annotation.
     * @param value [see="WebRotationInteractionPointJS"] object.
     */
    set_RotationPoint(value: Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS): void;

    /**
     * Gets the rotation center point of annotation.
     */
    get_RotationCenterPoint(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Sets the rotation center point of annotation.
     * @param value [see="WebInteractionPointJS"] object.
     */
    set_RotationCenterPoint(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS): void;

    /**
     * Gets a value indicating whether the annotation is building.
     */
    get_IsBuilding(): boolean;

    /**
     * Gets annotation comment.
     */
    get_Comment(): Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS;

    /**
     * Sets annotation comment.
     * @param value [see="WebAnnotationCommentJS"] object.
     */
    set_Comment(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): void;

    // METHODS

    /**
     * Begins the annotation initialization.
     */
    beginInit(): void;

    /**
     * Ends the annotation initialization.
     */
    endInit(): void;

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Creates a new annotation that is a copy of the current annotation.
     */
    clone(): Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS;

    /**
     * Returns the string representation of this object.
     */
    toString(): string;

    /**
     * Serializes annotation.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object that represents the annotation.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays an arc.
   */
  class WebArcAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebArcAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the starting angle of the arc, in degrees, clockwise from the X-axis.
     */
    get_StartAngle(): number;

    /**
     * Sets the starting angle of the arc, in degrees, clockwise from the X-axis.
     * @param value Angle. Default value is 90.
     */
    set_StartAngle(value: number): void;

    /**
     * Gets the angle between [see="Vintasoft.Imaging.Annotation.UI.WebArcAnnotationViewJS.get_StartAngle"] and the end of the arc, in degrees clockwise from the X-axis.
     */
    get_SweepAngle(): number;

    /**
     * Sets the angle between [see="Vintasoft.Imaging.Annotation.UI.WebArcAnnotationViewJS.get_StartAngle"] and the end of the arc, in degrees clockwise from the X-axis.
     * @param value Angle. Default value is 90.
     */
    set_SweepAngle(value: number): void;

    /**
     * Sets the rotation angle, in degrees, of annotation.
     * @param value The rotation angle, in degrees, of annotation. Default value is 0.
     */
    set_Rotation(value: number): void;

    /**
     * Gets the template for the resize points of annotation.
     */
    get_ResizePointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Sets the template for the resize points of annotation.
     * @param value [see="WebResizeInteractionPointJS"] object.
     */
    set_ResizePointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS): void;

    /**
     * Gets the rotation point of annotation.
     */
    get_RotationPoint(): Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS;

    /**
     * Sets the rotation point of annotation.
     * @param value [see="WebRotationInteractionPointJS"] object.
     */
    set_RotationPoint(value: Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS): void;

    /**
     * Gets the rotation center point of annotation.
     */
    get_RotationCenterPoint(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Sets the rotation center point of annotation.
     * @param value [see="WebInteractionPointJS"] object.
     */
    set_RotationCenterPoint(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS): void;

    /**
     * Gets the template for polygon points of annotation.
     */
    get_PolygonPointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS;

    /**
     * Sets the template for polygon points of annotation.
     * @param value [see="WebPolygonInteractionPointJS"] object.
     */
    set_PolygonPointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS): void;

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    // METHODS

    /**
     * Returns the starting angle of the arc, in degrees, clockwise from the X-axis, with regard to mirrored horizontally and mirrored vertically.
     * @param isHorizontalMirrored Determines whether the arc annotation is mirrored horizontally.
     * @param isVerticalMirrored Determines whether the arc annotation is mirrored vertically.
     */
    getStartAngle(isHorizontalMirrored: boolean, isVerticalMirrored: boolean): number;

    /**
     * Sets the starting angle of the arc, in degrees, clockwise from the X-axis, with regard to mirrored horizontally and mirrored vertically.
     * @param angle The stating angle.
     * @param isHorizontalMirrored Determines whether the arc annotation is mirrored horizontally.
     * @param isVerticalMirrored Determines whether the arc annotation is mirrored vertically.
     */
    setStartAngle(angle: number, isHorizontalMirrored: boolean, isVerticalMirrored: boolean): void;

    /**
     * Returns the ending angle of the arc, in degrees, clockwise from the X-axis, with regard to mirrored horizontally and mirrored vertically.
     * @param isHorizontalMirrored Determines whether the arc annotation is mirrored horizontally.
     * @param isVerticalMirrored Determines whether the arc annotation is mirrored vertically.
     */
    getEndAngle(isHorizontalMirrored: boolean, isVerticalMirrored: boolean): number;

    /**
     * Sets the ending angle of the arc, in degrees, clockwise from the X-axis, with regard to mirrored horizontally and mirrored vertically.
     * @param angle The ending angle.
     * @param isHorizontalMirrored Determines whether the arc annotation is mirrored horizontally.
     * @param isVerticalMirrored Determines whether the arc annotation is mirrored vertically.
     */
    setEndAngle(angle: number, isHorizontalMirrored: boolean, isVerticalMirrored: boolean): void;

    /**
     * Returns the angle between [see="Vintasoft.Imaging.Annotation.UI.WebArcAnnotationViewJS.get_StartAngle"] and the end of the arc, in degrees, clockwise from the X-axis, with regard to mirrored horizontally and mirrored vertically.
     * @param isHorizontalMirrored Determines whether the arc annotation is mirrored horizontally.
     * @param isVerticalMirrored Determines whether the arc annotation is mirrored vertically.
     */
    getSweepAngle(isHorizontalMirrored: boolean, isVerticalMirrored: boolean): number;

    /**
     * Sets the angle between [see="Vintasoft.Imaging.Annotation.UI.WebArcAnnotationViewJS.get_StartAngle"] and the end of the arc, in degrees, clockwise from the X-axis, with regard to mirrored horizontally and mirrored vertically.
     * @param angle The sweep angle.
     * @param isHorizontalMirrored Determines whether the arc annotation is mirrored horizontally.
     * @param isVerticalMirrored Determines whether the arc annotation is mirrored vertically.
     */
    setSweepAngle(angle: number, isHorizontalMirrored: boolean, isVerticalMirrored: boolean): void;

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebArcAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays a rectangle and how user can interact with annotation.
   */
  class WebRectangleAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRectangleAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Sets the size, in device-independent units (1/96th inch per unit), of the annotation.
     * @param width Annotation width. Default value is 0.
     * @param height Annotation height. Default value is 0.
     */
    set_Size(value: number): void;

    /**
     * Gets the shadow brush of annotation.
     */
    get_ShadowBrush(): Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS;

    /**
     * Sets the shadow brush of annotation.
     * @param value The shadow [see="WebAnnotationBrushJS"] of annotation.
     */
    set_ShadowBrush(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): void;

    /**
     * Gets a value indicating whether the annotation is symmetrical.
     */
    get_Symmetry(): boolean;

    /**
     * Sets a value indicating whether the annotation is symmetrical.
     * @param value True - annotation is symmetrical; False - annotation is not symmetrical. Default value is False.
     */
    set_Symmetry(value: boolean): void;

    /**
     * Gets the shadow offset of annotation.
     */
    get_ShadowOffset(): object;

    /**
     * Sets the shadow offset of annotation.
     * @param x Horizontal offset of annotation shadow. Default value is 10.
     * @param y Vertical offset of annotation shadow. Default value is 10.
     */
    set_ShadowOffset(value: number): void;

    /**
     * Gets the style of line.
     */
    get_LineStyle(): Vintasoft.Imaging.Annotation.WebAnnotationLineStyleEnumJS;

    /**
     * Sets the style of line.
     * @param value [see="WebAnnotationLineStyleEnumJS"] object which defines the line style. Default value is "Solid".
     */
    set_LineStyle(value: Vintasoft.Imaging.Annotation.WebAnnotationLineStyleEnumJS): void;

    /**
     * Gets the size of the line style pattern.
     */
    get_LineStylePatternSize(): number;

    /**
     * Sets the size of the line style pattern.
     * @param value The size of the line style pattern. Valid value is any positive value. Default value is 16.
     */
    set_LineStylePatternSize(value: number): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebRectangleAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays a highlighted rectangle and how user can interact with annotation.
   */
  class WebHighlightAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebRectangleAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebHighlightAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

  }

  /**
   * Determines how to display the annotation that displays an ellipse and how user can interact with annotation.
   */
  class WebEllipseAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebRectangleAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebEllipseAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    // METHODS

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays an arrow and how user can interact with annotation.
   */
  class WebArrowAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebRectangleAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebArrowAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the angle, in degrees, of the annotation cap.
     */
    get_ArrowCapAngle(): number;

    /**
     * Sets the angle, in degrees, of the annotation cap.
     * @param value The angle, in degrees, of the annotation cap. Valid values are from 0 to 180. Default value is 90.
     */
    set_ArrowCapAngle(value: number): void;

    /**
     * Gets the width of arrow line, expressed as a fraction of the annotation height.
     */
    get_ArrowLineWidth(): number;

    /**
     * Sets the width of arrow line, expressed as a fraction of the annotation height.
     * @param value The width of arrow line, expressed as a fraction of the annotation height. Valid values are from 0.0 to 1.0. Default value is 0.4.
     */
    set_ArrowLineWidth(value: number): void;

    /**
     * Gets a value indicating whether both caps of the arrow are displayed.
     */
    get_BothCaps(): boolean;

    /**
     * Sets a value indicating whether both caps of the arrow are displayed.
     * @param value True - arrow has both caps; False - annotation has one cap. Default value is False.
     */
    set_BothCaps(value: boolean): void;

    /**
     * Gets the template for slider points of annotation.
     */
    get_SliderPointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Sets the template for slider points of annotation.
     * @param value [see="WebInteractionPointJS"] object.
     */
    set_SliderPointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebArrowAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays a hypertext link and how user can interact with annotation.
   */
  class WebLinkAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebRectangleAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLinkAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Sets the size, in device-independent units (1/96th inch per unit), of the annotation.
     * @param width Annotation width. Default value is 0.
     * @param height Annotation height. Default value is 0.
     */
    set_Size(value: number): void;

    /**
     * Gets the appearance of the hyperlink when the user clicked the link.
     */
    get_ClickedLinkAppearance(): Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS;

    /**
     * Sets the appearance of the hyperlink when the user clicked the link.
     * @param value The [see="WebLinkAppearanceJS"] of the hyperlink when the user clicked the link.
     */
    set_ClickedLinkAppearance(value: Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS): void;

    /**
     * Gets the appearance of the hyperlink when the mouse cursor hovers over the hyperlink.
     */
    get_HoveredLinkAppearance(): Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS;

    /**
     * Sets the appearance of the hyperlink when the mouse cursor hovers over the hyperlink.
     * @param value The [see="WebLinkAppearanceJS"] of the hyperlink when the mouse cursor hovers over the hyperlink.
     */
    set_HoveredLinkAppearance(value: Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS): void;

    /**
     * Gets the appearance of the hyperlink in its default state.
     */
    get_LinkAppearance(): Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS;

    /**
     * Sets the appearance of the hyperlink in its default state.
     * @param value The [see="WebLinkAppearanceJS"] of the hyperlink in its default state.
     */
    set_LinkAppearance(value: Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS): void;

    /**
     * Gets the hyperlink reference.
     */
    get_HyperLink(): string;

    /**
     * Sets the hyperlink reference.
     * @param value Hyperlink reference. Default value is "www.vintasoft.com".
     */
    set_HyperLink(value: string): void;

    /**
     * Gets the interior spacing of the annotation.
     */
    get_Padding(): object;

    /**
     * Sets the interior spacing of the annotation.
     * @param width Interior width spacing of the annotation. Default value is 4.
     * @param height Interior height spacing of the annotation. Default value is 3.
     */
    set_Padding(value: number): void;

    /**
     * Gets the text of the annotation.
     */
    get_Text(): string;

    /**
     * Sets the text of the annotation.
     * @param value Text. Default value is "VintaSoft".
     */
    set_Text(value: string): void;

    /**
     * Gets the text box of annotation.
     */
    get_TextBox(): Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS;

    /**
     * Sets the text box of annotation.
     * @param value [see="WebTextInteractionAreaJS"] object.
     */
    set_TextBox(value: Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebLinkAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays a image and how user can interact with annotation.
   */
  class WebImageBaseAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebRectangleAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageBaseAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Sets the size, in device-independent units (1/96th inch per unit), of the annotation.
     * @param width Annotation width. Default value is 0.
     * @param height Annotation height. Default value is 0.
     */
    set_Size(value: number): void;

    /**
     * Sets a value indicating whether the annotation is symmetrical. Value of this property has effect only if value of MaintainAspectRatio property is set to false.
     * @param value True - annotation is symmetrical; False - annotation is not symmetrical. Default value is False.
     */
    set_Symmetry(value: boolean): void;

    /**
     * Gets a value indicating whether annotation must maintain the aspect ratio of image.
     */
    get_MaintainAspectRatio(): boolean;

    /**
     * Sets a value indicating whether annotation must maintain the aspect ratio of image.
     * @param value Indicating whether annotation must maintain the aspect ratio of image. Default value is False.
     */
    set_MaintainAspectRatio(value: boolean): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebImageBaseAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays a referenced image and how user can interact with annotation.
   */
  class WebReferencedImageAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebImageBaseAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebReferencedImageAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets an URL of the image file.
     */
    get_Url(): string;

    /**
     * Sets an URL of the image file.
     * @param value Url. Default value is empty string.
     */
    set_Url(value: string): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebReferencedImageAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Determines how to display the annotation that displays a embedded image and how user can interact with annotation.
   */
  class WebEmbeddedImageAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebImageBaseAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebEmbeddedImageAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the image of annotation.
     */
    get_Image(): string;

    /**
     * Sets the image of annotation.
     * @param value Image encoded as Base64 string. Default value is empty string.
     */
    set_Image(value: string): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebEmbeddedImageAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Provides an abstract base class that determines how to display line-based annotation and how user can interact with annotation.
   */
  class WebLineAnnotationViewBaseJS extends Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLineAnnotationViewBaseJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the grip mode of annotation.
     */
    get_GripMode(): Vintasoft.Imaging.Annotation.WebAnnotationGripModeEnumJS;

    /**
     * Sets the grip mode of annotation.
     * @param value An instance of [see="WebAnnotationGripModeEnumJS"] class that defines the grip mode. Default value is "Rectangular".
     */
    set_GripMode(value: Vintasoft.Imaging.Annotation.WebAnnotationGripModeEnumJS): void;

    /**
     * Gets a [see="WebPointCollectionJS"] object containing the points of annotation.
     */
    get_Points(): Vintasoft.Imaging.Annotation.UI.WebPointCollectionJS;

    /**
     * Gets the size, in device-independent units (1/96th inch per unit), of the annotation.
     */
    get_Size(): object;

    /**
     * Sets the size, in device-independent units (1/96th inch per unit), of the annotation.
     * @param width Annotation width. Default value is 0.
     * @param height Annotation height. Default value is 0.
     */
    set_Size(value: number): void;

    /**
     * Sets the rotation angle, in degrees, of annotation.
     * @param value The rotation angle, in degrees, of annotation. Default value is 0.
     */
    set_Rotation(value: number): void;

    /**
     * Sets a value indicating whether the annotation is mirrored horizontally.
     * @param value True - annotation is mirrored horizontally; False - annotation is not mirrored horizontally. Default value is False.
     */
    set_HorizontalMirrored(value: boolean): void;

    /**
     * Sets a value indicating whether the annotation is mirrored vertically.
     * @param value True - annotation is mirrored vertically; False - annotation is not mirrored vertically. Default value is False.
     */
    set_VerticalMirrored(value: boolean): void;

    /**
     * Gets the template for polygon points of annotation.
     */
    get_PolygonPointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS;

    /**
     * Sets the template for polygon points of annotation.
     * @param value [see="WebPolygonInteractionPointJS"] object.
     */
    set_PolygonPointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS): void;

    /**
     * Gets the template for the resize points of annotation.
     */
    get_ResizePointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Sets the template for the resize points of annotation.
     * @param value [see="WebResizeInteractionPointJS"] object.
     */
    set_ResizePointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS): void;

    /**
     * Gets the rotation point of annotation.
     */
    get_RotationPoint(): Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS;

    /**
     * Sets the rotation point of annotation.
     * @param value [see="WebRotationInteractionPointJS"] object.
     */
    set_RotationPoint(value: Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS): void;

    /**
     * Gets the rotation center point of annotation.
     */
    get_RotationCenterPoint(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Sets the rotation center point of annotation.
     * @param value [see="WebInteractionPointJS"] object.
     */
    set_RotationCenterPoint(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebLineAnnotationViewBaseJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays a line and how user can interact with annotation.
   */
  class WebLineAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebLineAnnotationViewBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLineAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the end point of the line.
     */
    get_EndPoint(): object;

    /**
     * Sets the end point of the line.
     * @param x X coordinate of end point. Default value is 0.
     * @param y Y coordinate of end point. Default value is 0.
     */
    set_EndPoint(value: number): void;

    /**
     * Gets the start point of the line.
     */
    get_StartPoint(): object;

    /**
     * Sets the start point of the line.
     * @param x X coordinate of start point. Default value is 0.
     * @param y Y coordinate of start point. Default value is 0.
     */
    set_StartPoint(value: number): void;

  }

  /**
   * Determines how to display the annotation that displays the single line and the length of line and how user can interact with annotation.
   */
  class WebRulerAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebLineAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRulerAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the calibration value which is used for calculating the ruler length.
     */
    get_Calibration(): number;

    /**
     * Sets the calibration value which is used for calculating the ruler length.
     * @param value Calibration value. Default value is 1.0.
     */
    set_Calibration(value: number): void;

    /**
     * Gets the length, in units specified by the UnitOfMeasure.
     */
    get_Length(): number;

    /**
     * Gets unit of measure of the Length.
     */
    get_UnitOfMeasure(): Vintasoft.Imaging.Annotation.WebUnitOfMeasureEnumJS;

    /**
     * Sets unit of measure of the Length.
     * @param value An instance of the [see="Vintasoft.Imaging.Annotation.WebUnitOfMeasureEnumJS"] class that defines the unit of measure. Default value is "Pixels".
     */
    set_UnitOfMeasure(value: Vintasoft.Imaging.Annotation.WebUnitOfMeasureEnumJS): void;

    /**
     * Gets the format string that specifies how a value must be displayed.
     */
    get_FormatString(): string;

    /**
     * Sets the format string that specifies how a value must be displayed.
     * @param value Format. Default value is "0.0 px".
     */
    set_FormatString(value: string): void;

    /**
     * Gets the text font of annotation.
     */
    get_Font(): Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS;

    /**
     * Sets the text font of annotation.
     * @param value The text [see="WebAnnotationFontJS"] of annotation.
     */
    set_Font(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS): void;

    /**
     * Gets the foreground color of annotation.
     */
    get_ForeColor(): string;

    /**
     * Sets the foreground color of annotation.
     * @param value Foreground color. Default value is "rgba(0,0,0,1)".
     */
    set_ForeColor(value: string): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebRulerAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Determines how to display the annotation that displays a line and how user can interact with annotation.
   */
  class WebLinesAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebLineAnnotationViewBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLinesAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets a value indicating whether lines of annotation are drawn with interpolation.
     */
    get_UseInterpolation(): boolean;

    /**
     * Sets a value indicating whether lines of annotation are drawn with interpolation.
     * @param value Value indicating whether lines of annotation are drawn with interpolation. Default value is False.
     */
    set_UseInterpolation(value: boolean): void;

    /**
     * Gets the style of line.
     */
    get_LineStyle(): Vintasoft.Imaging.Annotation.WebAnnotationLineStyleEnumJS;

    /**
     * Sets the style of line.
     * @param value [see="WebAnnotationLineStyleEnumJS"] object which defines the line style. Default value is "Solid".
     */
    set_LineStyle(value: Vintasoft.Imaging.Annotation.WebAnnotationLineStyleEnumJS): void;

    /**
     * Gets the size of the line style pattern.
     */
    get_LineStylePatternSize(): number;

    /**
     * Sets the size of the line style pattern.
     * @param value The size of the line style pattern. Valid value is any positive value. Default value is 16.
     */
    set_LineStylePatternSize(value: number): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebLinesAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Determines how to display the annotation that displays a leader line and how user can interact with annotation.
   */
  class WebLeaderAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebLinesAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLeaderAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the [see="WebAnnotationViewJS"] object associated with start of the [see="WebLeaderAnnotationViewJS"].
     */
    get_StartAnnotationData(): Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS;

    /**
     * Sets the [see="WebAnnotationViewJS"] object associated with start of the [see="WebLeaderAnnotationViewJS"].
     * @param value [see="WebAnnotationViewJS"] object OR null.
     */
    set_StartAnnotationData(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Gets the [see="WebAnnotationViewJS"] object associated with end of the [see="WebLeaderAnnotationViewJS"].
     */
    get_EndAnnotationData(): Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS;

    /**
     * Sets the [see="WebAnnotationViewJS"] object associated with end of the [see="WebLeaderAnnotationViewJS"].
     * @param value [see="WebAnnotationViewJS"] object OR null.
     */
    set_EndAnnotationData(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Gets the location, in device-independent units (1/96th inch per unit), of annotation in the image space.
     */
    get_Location(): object;

    /**
     * Gets the rotation angle, in degrees, of the annotation.
     */
    get_Rotation(): number;

    /**
     * Gets the size, in device-independent units (1/96th inch per unit), of the annotation.
     */
    get_Size(): object;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebLeaderAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Determines how to display the annotation that displays a series of lines and the total length of lines and how user can interact with annotation.
   */
  class WebRulersAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebRulerAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRulersAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebRulersAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Determines how to display the annotation that displays two lines, the angle between them and the total length of lines and how user can interact with annotation.
   */
  class WebAngleAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebRulersAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAngleAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the vertex of the angle of annotation.
     */
    get_AngleVertex(): object;

    /**
     * Sets the vertex of the angle of annotation.
     * @param x X coordinate of vertex point. Default value is 0.
     * @param y Y coordinate of vertex point. Default value is 0.
     */
    set_AngleVertex(value: number): void;

    /**
     * Gets the start point of annotation.
     */
    get_StartPoint(): object;

    /**
     * Sets the start point of annotation.
     * @param x X coordinate of start point. Default value is 0.
     * @param y Y coordinate of start point. Default value is 0.
     */
    set_StartPoint(value: number): void;

    /**
     * Gets the end point of annotation.
     */
    get_EndPoint(): object;

    /**
     * Sets the end point of annotation.
     * @param x X coordinate of end point. Default value is 0.
     * @param y Y coordinate of end point. Default value is 0.
     */
    set_EndPoint(value: number): void;

    /**
     * Gets the angle, in degrees, between the lines of annotation.
     */
    get_Angle(): number;

  }

  /**
   * Determines how to display the annotation that displays a freehand line and how user can interact with annotation.
   */
  class WebFreeHandLineAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebLinesAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebFreeHandLineAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets a value indicating whether the annotation building must be finished when left mouse button is double clicked.
     */
    get_FinishBuildingByDoubleMouseClick(): boolean;

    /**
     * Sets a value indicating whether the annotation building must be finished when left mouse button is double clicked.
     * @param value True - annotation building will be finished when left mouse button is double clicked; false - annotation building will be finished when left mouse button is released. Default value is True.
     */
    set_FinishBuildingByDoubleMouseClick(value: boolean): void;

  }

  /**
   * Determines how to display the annotation that displays a polygon and how user can interact with annotation.
   */
  class WebPolygonAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebLinesAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPolygonAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

  }

  /**
   * Determines how to display the annotation that displays a freehand polygon and how user can interact with annotation.
   */
  class WebFreeHandPolygonAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebPolygonAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebFreeHandPolygonAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets a value indicating whether the annotation building must be finished when left mouse button is double clicked.
     */
    get_FinishBuildingByDoubleMouseClick(): boolean;

    /**
     * Gets a value indicating whether the annotation building must be finished when left mouse button is double clicked.
     * @param value True - annotation building will be finished when left mouse button is double clicked; false - annotation building will be finished when left mouse button is released. Default value is True.
     */
    set_FinishBuildingByDoubleMouseClick(value: boolean): void;

  }

  /**
   * Determines how to display the annotation that displays text which can be edited by the user and how user can interact with annotation.
   */
  class WebTextAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebRectangleAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTextAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the text of the annotation.
     */
    get_Text(): string;

    /**
     * Sets the text of the annotation.
     * @param value Annotation text. Default value is "Text".
     */
    set_Text(value: string): void;

    /**
     * Gets the font of annotation text.
     */
    get_Font(): Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS;

    /**
     * Sets the font of annotation text.
     * @param value The [see="WebAnnotationFontJS"] of annotation text.
     */
    set_Font(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS): void;

    /**
     * Gets the font brush of the annotation.
     */
    get_FontBrush(): Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS;

    /**
     * Sets the font brush of the annotation.
     * @param value The font [see="WebAnnotationBrushJS"] of the annotation.
     */
    set_FontBrush(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): void;

    /**
     * Gets a value indicating whether the annotation font is transparent.
     */
    get_FontTransparent(): boolean;

    /**
     * Sets a value indicating whether the annotation font is transparent.
     * @param value True - annotation font is transparent; False - annotation font is not transparent. Default value is False.
     */
    set_FontTransparent(value: boolean): void;

    /**
     * Gets the text alignment in the annotation.
     */
    get_TextAlign(): Vintasoft.Imaging.Annotation.WebTextAlignEnumJS;

    /**
     * Sets the text alignment in the annotation.
     * @param value The [see="WebTextAlignEnumJS"] of text in the annotation. Default value is "TopLeft".
     */
    set_TextAlign(value: Vintasoft.Imaging.Annotation.WebTextAlignEnumJS): void;

    /**
     * Gets the text padding within the annotation.
     */
    get_TextPadding(): object;

    /**
     * Sets the text padding within the annotation.
     * @param left Left padding. Default value is 4.
     * @param right Right padding. Default value is 4.
     * @param top Top padding. Default value is 4.
     * @param bottom Bottom padding. Default value is 4.
     */
    set_TextPadding(value: number): void;

    /**
     * Gets the text box of annotation.
     */
    get_TextBox(): Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS;

    /**
     * Sets the text box of annotation.
     * @param value [see="WebTextInteractionAreaJS"] object.
     */
    set_TextBox(value: Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS): void;

    /**
     * Gets a value indicating whether the annotation's font size depends on the annotation size.
     */
    get_AutoFontSize(): boolean;

    /**
     * Sets a value indicating whether the annotation's font size depends on the annotation size.
     * @param value True - the annotation's font size depends on the annotation size; False - the annotation's font size does not depend on the annotation size. Default value is False.
     */
    set_AutoFontSize(value: boolean): void;

    /**
     * Gets the maximum font size when auto font size is enabled (AutoFontSize == True).
     */
    get_AutoFontMaxSize(): number;

    /**
     * Sets the maximum font size when auto font size is enabled (AutoFontSize == True).
     * @param value 0 - maximum font size is not used; any positive value - maximum font size is used.<br />Default value is <b>0</b>.
     */
    set_AutoFontMaxSize(value: number): void;

    /**
     * Gets the minimum font size when auto font size is enabled (AutoFontSize == True).
     */
    get_AutoFontMinSize(): number;

    /**
     * Sets the minimum font size when auto font size is enabled (AutoFontSize == True).
     * @param value 0 - minimum font size is not used; any positive value - minimum font size is used.<br />Default value is <b>0</b>.
     */
    set_AutoFontMinSize(value: number): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebTextAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays a text message with a rounded rectangle outline similar to a rubber stamp and how user can interact with annotation.
   */
  class WebStampAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebTextAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebStampAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the corner radius of the rectangle.
     */
    get_CornerRadius(): number;

    /**
     * Sets the corner radius of the rectangle.
     * @param value The corner radius of the rectangle. Valid value is 1 and more. Default value is 15.
     */
    set_CornerRadius(value: number): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebStampAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Provides the abstract base class that determines how to display an annotation that contains a group of annotations and how user can interact with annotation.
   */
  class WebCompositeAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCompositeAnnotationViewJS"] class.
     * @param items Array of annotations.
     */
    constructor(items: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS[]);

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets the location, in device-independent units (1/96th inch per unit), of annotation in the image space.
     */
    get_Location(): object;

    /**
     * Sets the location, in device-independent units (1/96th inch per unit), of annotation in the image space.
     * @param x Horizontal coordinate of annotation, in device-independent units (1/96th inch per unit). Default value is 0.
     * @param y Vertical coordinate of annotation, in device-independent units (1/96th inch per unit). Default value is 0.
     */
    set_Location(value: number): void;

    /**
     * Gets the size, in device-independent units (1/96th inch per unit), of the annotation.
     */
    get_Size(): object;

    /**
     * Sets the size, in device-independent units (1/96th inch per unit), of the annotation.
     * @param width Annotation width. Default value is 0.
     * @param height Annotation height. Default value is 0.
     */
    set_Size(value: number): void;

    /**
     * Gets the rotation angle, in degrees, of the annotation.
     */
    get_Rotation(): number;

    /**
     * Sets the rotation angle, in degrees, of annotation.
     * @param value The rotation angle, in degrees, of annotation. Default value is 0.
     */
    set_Rotation(value: number): void;

  }

  /**
   * Determines how to display the annotation that displays an editable text area and a leader polyline used to point to the area of the image and how user can interact with annotation.
   */
  class WebFreeTextAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebCompositeAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebFreeTextAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets a value indicating whether the annotation border is visible.
     */
    get_Border(): boolean;

    /**
     * Sets a value indicating whether the annotation border is visible.
     * @param value True - annotation border is visible; False - annotation border is not visible. Default value is True.
     */
    set_Border(value: boolean): void;

    /**
     * Sets the tooltip associated with the annotation.
     * @param value New tooltip. Default value is empty string.
     */
    set_ToolTip(value: string): void;

    /**
     * Gets the style of the annotation's outline.
     */
    get_Outline(): Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS;

    /**
     * Sets the style of the annotation's outline.
     * @param value Style of the annotation's [see="WebAnnotationPenJS"].
     */
    set_Outline(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS): void;

    /**
     * Gets the background brush of annotation.
     */
    get_FillBrush(): Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS;

    /**
     * Sets the background brush of annotation.
     * @param value The background [see="WebAnnotationBrushJS"] of annotation.
     */
    set_FillBrush(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): void;

    /**
     * Gets a value indicating whether the annotation is symmetrical.
     */
    get_Symmetry(): boolean;

    /**
     * Sets a value indicating whether the annotation is symmetrical.
     * @param value True - annotation is symmetrical; False - annotation is not symmetrical. Default value is False.
     */
    set_Symmetry(value: boolean): void;

    /**
     * Gets the shadow brush of annotation.
     */
    get_ShadowBrush(): Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS;

    /**
     * Sets the shadow brush of annotation.
     * @param value The shadow [see="WebAnnotationBrushJS"] of annotation.
     */
    set_ShadowBrush(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): void;

    /**
     * Gets the shadow offset of annotation.
     */
    get_ShadowOffset(): object;

    /**
     * Sets the shadow offset of annotation.
     * @param x Horizontal offset of annotation shadow. Default value is 10.
     * @param y Vertical offset of annotation shadow. Default value is 10.
     */
    set_ShadowOffset(value: number): void;

    /**
     * Gets the text of the annotation.
     */
    get_Text(): string;

    /**
     * Sets the text of the annotation.
     * @param value Text. Default value is "text".
     */
    set_Text(value: string): void;

    /**
     * Gets the font of the text.
     */
    get_Font(): Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS;

    /**
     * Sets the font of the text.
     * @param value The [see="WebAnnotationFontJS"] of the text.
     */
    set_Font(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS): void;

    /**
     * Gets the font brush of the annotation.
     */
    get_FontBrush(): Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS;

    /**
     * Sets the font brush of the annotation.
     * @param value The font [see="WebAnnotationBrushJS"] of the annotation.
     */
    set_FontBrush(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): void;

    /**
     * Gets the value indicating whether the text is transparent.
     */
    get_FontTransparent(): boolean;

    /**
     * Sets the value indicating whether the text is transparent.
     * @param value True - annotation font is transparent; False - annotation font is not transparent. Default value is False.
     */
    set_FontTransparent(value: boolean): void;

    /**
     * Gets the text padding within the annotation.
     */
    get_TextPadding(): object;

    /**
     * Sets the text padding within the annotation.
     * @param left Left padding. Default value is 4.
     * @param right Right padding. Default value is 4.
     * @param top Top padding. Default value is 4.
     * @param bottom Bottom padding. Default value is 4.
     */
    set_TextPadding(value: number): void;

    /**
     * Gets the alignment of text in the annotation.
     */
    get_TextAlign(): string;

    /**
     * Sets the alignment of text in the annotation.
     * @param value The [see="WebTextAlignEnumJS"] of text in the annotation. Default value is "TopLeft".
     */
    set_TextAlign(value: string): void;

    /**
     * Gets the style of line.
     */
    get_LineStyle(): Vintasoft.Imaging.Annotation.WebAnnotationLineStyleEnumJS;

    /**
     * Sets the style of line.
     * @param value [see="WebAnnotationLineStyleEnumJS"] object which defines the line style. Default value is "Solid".
     */
    set_LineStyle(value: Vintasoft.Imaging.Annotation.WebAnnotationLineStyleEnumJS): void;

    /**
     * Gets the size of the line style pattern.
     */
    get_LineStylePatternSize(): number;

    /**
     * Sets the size of the line style pattern.
     * @param value The size of the line style pattern. Valid value is any positive value. Default value is 16.
     */
    set_LineStylePatternSize(value: number): void;

    /**
     * Gets the style of leader's outline.
     */
    get_LeaderOutline(): Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS;

    /**
     * Sets the style of leader's outline.
     * @param value Style of the leader's [see="WebAnnotationPenJS"].
     */
    set_LeaderOutline(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS): void;

    /**
     * Gets the point collection of leader line of the annotation.
     */
    get_LeaderPoints(): Vintasoft.Imaging.Annotation.UI.WebPointCollectionJS;

    /**
     * Gets a value indicating whether leader line of annotation is drawn with interpolation.
     */
    get_UseLeaderInterpolation(): boolean;

    /**
     * Sets a value indicating whether leader line of annotation is drawn with interpolation.
     * @param value Value indicating whether lines of annotation are drawn with interpolation. Default value is False.
     */
    set_UseLeaderInterpolation(value: boolean): void;

    /**
     * Sets a value indicating whether the annotation is visible.
     * @param value True - annotation is visible; False - annotation is not visible. Default value is True.
     */
    set_IsVisible(value: boolean): void;

    /**
     * Gets the template for the resize points of annotation.
     */
    get_ResizePointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Sets the template for the resize points of annotation.
     * @param value [see="WebResizeInteractionPointJS"] object.
     */
    set_ResizePointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS): void;

    /**
     * Gets the template for the resize points of text box.
     */
    get_ResizePointTemplateTextBox(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Sets the template for the resize points of text box.
     * @param value [see="WebResizeInteractionPointJS"] object.
     */
    set_ResizePointTemplateTextBox(value: Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS): void;

    /**
     * Gets the rotation point of annotation.
     */
    get_RotationPoint(): Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS;

    /**
     * Sets the rotation point of annotation.
     * @param value [see="WebRotationInteractionPointJS"] object.
     */
    set_RotationPoint(value: Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS): void;

    /**
     * Gets the rotation center point of annotation.
     */
    get_RotationCenterPoint(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Sets the rotation center point of annotation.
     * @param value [see="WebInteractionPointJS"] object.
     */
    set_RotationCenterPoint(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS): void;

    /**
     * Gets the rotation point of text box.
     */
    get_RotationPointTextBox(): Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS;

    /**
     * Sets the rotation point of text box.
     * @param value [see="WebRotationInteractionPointJS"] object.
     */
    set_RotationPointTextBox(value: Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS): void;

    /**
     * Gets the rotation center point of text box.
     */
    get_RotationCenterPointTextBox(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Sets the rotation center point of text box.
     * @param value [see="WebInteractionPointJS"] object.
     */
    set_RotationCenterPointTextBox(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS): void;

    /**
     * Gets the text box of annotation.
     */
    get_TextBox(): Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS;

    /**
     * Sets the text box of annotation.
     * @param value [see="WebTextInteractionAreaJS"] object.
     */
    set_TextBox(value: Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS): void;

    /**
     * Gets the template for polygon points of annotation.
     */
    get_PolygonPointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS;

    /**
     * Sets the template for polygon points of annotation.
     * @param value [see="WebPolygonInteractionPointJS"] object.
     */
    set_PolygonPointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebFreeTextAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Determines how to display the annotation that displays a sticky note and how user can interact with annotation.
   */
  class WebStickyNoteAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebCompositeAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebStickyNoteAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets a type of collapsed annotation when CollapsedType is equal to "Image".
     */
    get_CollapsedIconType(): Vintasoft.Imaging.Annotation.WebCollapsedAnnotationIconTypeEnumJS;

    /**
     * Sets a type of collapsed annotation when CollapsedType is equal to "Image".
     * @param value An instance of [see="WebCollapsedAnnotationIconTypeEnumJS"] class that defines the type of collapsed icon. Default value is "Note".
     */
    set_CollapsedIconType(value: Vintasoft.Imaging.Annotation.WebCollapsedAnnotationIconTypeEnumJS): void;

    /**
     * Gets an instance of [see="WebEmbeddedImageAnnotationViewJS"] class that defines the [see="WebStickyNoteAnnotationViewJS"] when [see="WebStickyNoteAnnotationViewJS"] is collapsed.
     */
    get_CollapsedImageData(): Vintasoft.Imaging.Annotation.UI.WebEmbeddedImageAnnotationViewJS;

    /**
     * Gets an instance of [see="WebTextAnnotationViewJS"] class that defines the [see="WebStickyNoteAnnotationViewJS"] when [see="WebStickyNoteAnnotationViewJS"] is collapsed.
     */
    get_CollapsedTextData(): Vintasoft.Imaging.Annotation.UI.WebTextAnnotationViewJS;

    /**
     * Gets a type of annotation when annotation is collapsed.
     */
    get_CollapsedType(): Vintasoft.Imaging.Annotation.WebCollapsedAnnotationTypeEnumJS;

    /**
     * Sets a type of annotation when annotation is collapsed.
     * @param value An instance of [see="WebCollapsedAnnotationTypeEnumJS"] class that defines the type of collapsed annotation. Default value is "Text".
     */
    set_CollapsedType(value: Vintasoft.Imaging.Annotation.WebCollapsedAnnotationTypeEnumJS): void;

    /**
     * Gets an instance of [see="WebTextAnnotationViewJS"] class that defines the [see="WebStickyNoteAnnotationViewJS"] when [see="WebStickyNoteAnnotationViewJS"] is expanded.
     */
    get_ExpandedTextData(): Vintasoft.Imaging.Annotation.UI.WebTextAnnotationViewJS;

    /**
     * Gets a value indicating whether this annotation is collapsed.
     */
    get_IsCollapsed(): boolean;

    /**
     * Sets a value indicating whether this annotation is collapsed.
     * @param value True - annotation is collapsed; False - annotation is NOT collapsed. Default value is True.
     */
    set_IsCollapsed(value: boolean): void;

    /**
     * Gets the background brush of annotation.
     */
    get_FillBrush(): Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS;

    /**
     * Sets the background brush of annotation.
     * @param value The background [see="WebAnnotationBrushJS"] of annotation.
     */
    set_FillBrush(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): void;

    /**
     * Gets a value indicating whether the annotation border is visible.
     */
    get_Border(): boolean;

    /**
     * Sets a value indicating whether the annotation border is visible.
     * @param value True - annotation border is visible; False - annotation border is not visible. Default value is True.
     */
    set_Border(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be mirrored.
     */
    get_CanMirror(): boolean;

    /**
     * Sets a value indicating whether the annotation can be mirrored.
     * @param value True - annotation can be mirrored; False - annotation cannot be mirrored. Default value is True.
     */
    set_CanMirror(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be moved.
     */
    get_CanMove(): boolean;

    /**
     * Sets a value indicating whether the annotation can be moved.
     * @param value True - annotation can be moved; False - annotation cannot be moved. Default value is True.
     */
    set_CanMove(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be rotated.
     */
    get_CanRotate(): boolean;

    /**
     * Sets a value indicating whether the annotation can be rotated.
     * @param value True - annotation can be rotated; False - annotation cannot be rotated. Default value is True.
     */
    set_CanRotate(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be resized.
     */
    get_CanResize(): boolean;

    /**
     * Sets a value indicating whether the size of the annotation can be changed.
     * @param value True - annotation can be resized; False - annotation cannot be resized. Default value is True.
     */
    set_CanResize(value: boolean): void;

    /**
     * Gets the name of annotation.
     */
    get_Name(): string;

    /**
     * Sets the name of annotation.
     * @param value New annotation name. Default value is empty string.
     */
    set_Name(value: string): void;

    /**
     * Gets the style of annotation's outline.
     */
    get_Outline(): Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS;

    /**
     * Sets the style of annotation's outline.
     * @param value Style of the annotation's [see="WebAnnotationPenJS"].
     */
    set_Outline(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS): void;

    /**
     * Gets a value indicating whether the annotation is mirrored horizontally.
     */
    get_HorizontalMirrored(): boolean;

    /**
     * Sets a value indicating whether the annotation is mirrored horizontally.
     * @param value True - annotation is mirrored horizontally; False - annotation is not mirrored horizontally. Default value is False.
     */
    set_HorizontalMirrored(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation is mirrored vertically.
     */
    get_VerticalMirrored(): boolean;

    /**
     * Sets a value indicating whether the annotation is mirrored vertically.
     * @param value True - annotation is mirrored vertically; False - annotation is not mirrored vertically. Default value is False.
     */
    set_VerticalMirrored(value: boolean): void;

    /**
     * Gets the location, in device-independent units (1/96th inch per unit), of annotation in the image space.
     */
    get_Location(): object;

    /**
     * Sets the location, in device-independent units (1/96th inch per unit), of annotation in the image space.
     * @param x Horizontal coordinate of annotation, in device-independent units (1/96th inch per unit). Default value is 0.
     * @param y Vertical coordinate of annotation, in device-independent units (1/96th inch per unit). Default value is 0.
     */
    set_Location(value: number): void;

    /**
     * Gets the size, in device-independent units (1/96th inch per unit), of the annotation.
     */
    get_Size(): object;

    /**
     * Sets the size, in device-independent units (1/96th inch per unit), of the annotation.
     * @param width Annotation width. Default value is 0.
     * @param height Annotation height. Default value is 0.
     */
    set_Size(value: number): void;

    /**
     * Gets the rotation angle, in degrees, of the annotation.
     */
    get_Rotation(): number;

    /**
     * Sets the rotation angle, in degrees, of annotation.
     * @param value The rotation angle, in degrees, of annotation. Default value is 0.
     */
    set_Rotation(value: number): void;

    /**
     * Sets the tooltip associated with the annotation.
     * @param value New tooltip. Default value is empty string.
     */
    set_ToolTip(value: string): void;

    /**
     * Gets the template for the resize points of annotation.
     */
    get_ResizePointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Sets the template for the resize points of annotation.
     * @param value [see="WebResizeInteractionPointJS"] object.
     */
    set_ResizePointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS): void;

    /**
     * Gets the rotation point of annotation.
     */
    get_RotationPoint(): Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS;

    /**
     * Sets the rotation point of annotation.
     * @param value [see="WebRotationInteractionPointJS"] object.
     */
    set_RotationPoint(value: Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS): void;

    /**
     * Gets the rotation center point of annotation.
     */
    get_RotationCenterPoint(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Sets the rotation center point of annotation.
     * @param value [see="WebInteractionPointJS"] object.
     */
    set_RotationCenterPoint(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS): void;

    /**
     * Gets the text box of annotation.
     */
    get_TextBox(): Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS;

    /**
     * Sets the text box of annotation.
     * @param value [see="WebTextInteractionAreaJS"] object.
     */
    set_TextBox(value: Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebStickyNoteAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Determines how to display the annotation that displays a group of annotations and how user can interact with annotation.
   */
  class WebGroupAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebCompositeAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebGroupAnnotationViewJS"] class.
     * @param items Array of annotations.
     */
    constructor(items: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS[]);

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets a group of annotations.
     */
    get_Items(): Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS[];

    /**
     * Gets a value indicating whether the composite transformer must be used for transforming of the annotation.
     */
    get_UseCompositeTransformer(): boolean;

    /**
     * Sets a value indicating whether the composite transformer must be used for transforming of the annotation.
     * @param value Value indicating whether the composite transformer must be used for transforming of the annotation. Default value is False.
     */
    set_UseCompositeTransformer(value: boolean): void;

    /**
     * Gets the template for the resize points of annotation.
     */
    get_ResizePointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Sets the template for the resize points of annotation.
     * @param value [see="WebResizeInteractionPointJS"] object.
     */
    set_ResizePointTemplate(value: Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS): void;

    /**
     * Gets the rotation point of annotation.
     */
    get_RotationPoint(): Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS;

    /**
     * Sets the rotation point of annotation.
     * @param value [see="WebRotationInteractionPointJS"] object.
     */
    set_RotationPoint(value: Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS): void;

    /**
     * Gets the rotation center point of annotation.
     */
    get_RotationCenterPoint(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Sets the rotation center point of annotation.
     * @param value [see="WebInteractionPointJS"] object.
     */
    set_RotationCenterPoint(value: Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebGroupAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

  }

  /**
   * Determines how to display the annotation that displays a mark and how user can interact with annotation.
   */
  class WebMarkAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebMarkAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

    /**
     * Gets a mark type.
     */
    get_MarkType(): Vintasoft.Imaging.Annotation.WebMarkAnnotationTypeEnumJS;

    /**
     * Sets a mark type.
     * @param value An instance of [see="WebMarkAnnotationTypeEnumJS"] class that defines the mark type. Default value is "Tick".
     */
    set_MarkType(value: Vintasoft.Imaging.Annotation.WebMarkAnnotationTypeEnumJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation to the target annotation.
     * @param target The target annotation, which has the same class as the current annotation.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebMarkAnnotationViewJS): void;

    /**
     * Returns a JSON-object for annotation serialization.
     */
    serialize(): object;

    /**
     * Deserializes annotation.
     * @param jsonObject A JSON-object for annotation deserialization.
     */
    deserialize(jsonObject: object): void;

    /**
     * Draws an annotation on the canvas drawing context in the coordinate space of annotation.
     * @param drawingContext The canvas drawing context in the coordinate space of annotation.
     * @param canvasToAnnotationTransform A matrix that defines transformation from canvas space to the annotation space.
     */
    drawInContentSpace(drawingContext: object, canvasToAnnotationTransform: object): boolean;

  }

  /**
   * Determines how to display the annotation that displays a triangle and how user can interact with annotatioscaleFontn.
   */
  class WebTriangleAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebPolygonAnnotationViewJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebTriangleAnnotationViewJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets annotation type.
     */
    get_Type(): string;

  }

  /**
   * Defines an object, which can be used for filling the annotation.
   */
  class WebAnnotationBrushJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationBrushJS"] class.
     * @param type An instance of [see="WebBrushStyleEnumJS"] class that defines the type of brush.
     * @param color Brush color, for example, "Red" or "rgba(125,125,125,0.8)".
     */
    constructor(type: Vintasoft.Imaging.Annotation.WebBrushStyleEnumJS, color: string);

    // PROPERTIES

    /**
     * Gets the type of the brush.
     */
    get_Type(): Vintasoft.Imaging.Annotation.WebBrushStyleEnumJS;

    /**
     * Sets the type of the brush.
     * @param value An instance of [see="WebBrushStyleEnumJS"] class that defines the type of brush.
     */
    set_Type(value: Vintasoft.Imaging.Annotation.WebBrushStyleEnumJS): void;

    /**
     * Gets the color of the annotation brush.
     */
    get_Color(): string;

    /**
     * Sets the color of the annotation brush.
     * @param value Brush color, for example, "Red" or "rgba(125,125,125,0.8)".
     */
    set_Color(value: string): void;

    // METHODS

    /**
     * Copies the state of the current annotation brush to the target annotation brush.
     * @param target The target brush.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): void;

    /**
     * Creates a new annotation brush that is a copy of the current annotation brush.
     */
    clone(): Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS;

    /**
     * Determines that this annotation brush is equals to the specified annotation brush.
     * @param brush Annotation brush.
     */
    equals(brush: Vintasoft.Imaging.Annotation.UI.WebAnnotationBrushJS): boolean;

  }

  /**
   * Defines an object, which can be used for drawing of lines and curves of the annotation.
   */
  class WebAnnotationPenJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationPenJS"] class.
     * @param width Pen width.
     * @param color Pen color, for example, "Red" or "rgba(125,125,125,0.8)".
     * @param lineJoin An instance of [see="WebLineJoinEnumJS"] class that defines the join style for the ends of two consecutive lines drawn with the pen.
     * @param miterLimit The number that specifies maximum miter length.
     * @param dashStyle An instance of [see="WebOutlineDashStyleEnumJS"] class that defines the style used for dashed lines drawn with the pen.
     * @param dashPattern Dash pattern. Array of numbers.
     * @param startCap The cap style used at the beginning of lines drawn with the pen.
     * @param endCap The cap style used at the end of lines drawn with the pen.
     */
    constructor(width: number, color: string, lineJoin: Vintasoft.Imaging.Annotation.WebLineJoinEnumJS, miterLimit: number, dashStyle: Vintasoft.Imaging.Annotation.WebOutlineDashStyleEnumJS, dashPattern: number[], startCap: Vintasoft.Imaging.Annotation.UI.WebLineCapJS, endCap: Vintasoft.Imaging.Annotation.UI.WebLineCapJS);

    // PROPERTIES

    /**
     * Gets the color of the pen.
     */
    get_Color(): string;

    /**
     * Sets the color of the pen.
     * @param value Pen color, for example, "Red" or "rgba(125,125,125,0.8)".
     */
    set_Color(value: string): void;

    /**
     * Gets the style for dashed lines.
     */
    get_DashStyle(): Vintasoft.Imaging.Annotation.WebOutlineDashStyleEnumJS;

    /**
     * Sets the style for dashed lines.
     * @param value An instance of [see="WebOutlineDashStyleEnumJS"] class that defines the style used for dashed lines drawn with the pen.
     */
    set_DashStyle(value: Vintasoft.Imaging.Annotation.WebOutlineDashStyleEnumJS): void;

    /**
     * Gets the dash pattern.
     */
    get_DashPattern(): number[];

    /**
     * Sets the dash pattern.
     * @param value Array of numbers.
     */
    set_DashPattern(value: number[]): void;

    /**
     * Gets the join style for the ends of two consecutive lines.
     */
    get_LineJoin(): Vintasoft.Imaging.Annotation.WebLineJoinEnumJS;

    /**
     * Sets the join style for the ends of two consecutive lines.
     * @param value An instance of [see="WebLineJoinEnumJS"] class that defines the join style for the ends of two consecutive lines drawn with the pen.
     */
    set_LineJoin(value: Vintasoft.Imaging.Annotation.WebLineJoinEnumJS): void;

    /**
     * Gets the width of the pen.
     */
    get_Width(): number;

    /**
     * Sets the width of the pen.
     * @param value Pen width.
     */
    set_Width(value: number): void;

    /**
     * Gets the number that specifies maximum miter length.
     */
    get_MiterLimit(): number;

    /**
     * Sets the number that specifies maximum miter length.
     * @param value Maximum miter length.
     */
    set_MiterLimit(value: number): void;

    /**
     * Gets the cap style used at the beginning of lines drawn with the pen.
     */
    get_StartCap(): Vintasoft.Imaging.Annotation.UI.WebLineCapJS;

    /**
     * Sets the cap style used at the beginning of lines drawn with the pen.
     * @param value An instance of [see="WebLineCapJS"] class that defines style of line cap.
     */
    set_StartCap(value: Vintasoft.Imaging.Annotation.UI.WebLineCapJS): void;

    /**
     * Gets the cap style used at the end of lines drawn with the pen.
     */
    get_EndCap(): Vintasoft.Imaging.Annotation.UI.WebLineCapJS;

    /**
     * Sets the cap style used at the end of lines drawn with the pen.
     * @param value An instance of [see="WebLineCapJS"] class that defines style of line cap.
     */
    set_EndCap(value: Vintasoft.Imaging.Annotation.UI.WebLineCapJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation pen to the target annotation pen.
     * @param target The target pen.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS): void;

    /**
     * Creates a new annotation pen that is a copy of the current annotation pen.
     */
    clone(): Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS;

    /**
     * Determines that this annotation pen is equals to the specified annotation pen.
     * @param pen Annotation pen.
     */
    equals(pen: Vintasoft.Imaging.Annotation.UI.WebAnnotationPenJS): boolean;

  }

  /**
   * Defines the caps at the end ot the line-based annotations.
   */
  class WebLineCapJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLineCapJS"] class.
     * @param style An instance of [see="WebLineCapStyleEnumJS"] class that defines the style of the cap.
     * @param size Size of the cap.
     */
    constructor(style: Vintasoft.Imaging.Annotation.WebLineCapStyleEnumJS, size: object);

    // PROPERTIES

    /**
     * Gets or sets the size of the cap.
     */
    get_Size(): object;

    /**
     * Gets or sets the size of the cap.
     * @param width Annotation width.
     * @param height Annotation height.
     */
    set_Size(value: number): void;

    /**
     * Gets the style of the cap.
     */
    get_Style(): Vintasoft.Imaging.Annotation.WebLineCapStyleEnumJS;

    /**
     * Sets the style of the cap.
     * @param value An instance of [see="WebLineCapStyleEnumJS"] class that defines the style of the cap.
     */
    set_Style(value: Vintasoft.Imaging.Annotation.WebLineCapStyleEnumJS): void;

    // METHODS

    /**
     * Copies the state of the current line cap to the target line cap.
     * @param target The target line cap.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebLineCapJS): void;

    /**
     * Creates a new line cap that is a copy of the current line cap.
     */
    clone(): Vintasoft.Imaging.Annotation.UI.WebLineCapJS;

    /**
     * Determines that this line cap is equals to the specified line cap.
     * @param cap Line cap.
     */
    equals(cap: Vintasoft.Imaging.Annotation.UI.WebLineCapJS): boolean;

  }

  /**
   * Defines a font, which can be used for drawing text of the annotation.
   */
  class WebAnnotationFontJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationFontJS"] class.
     * @param size The font size.
     * @param familyName The name of the font family.
     * @param italic Indicates whether the font is italic.
     * @param bold Indicates whether the font is bold.
     * @param strikeout Indicates whether the font is strikeout.
     * @param underline Indicates whether the font is underlined.
     * @param unit Unit of measure for font.
     */
    constructor(size: number, familyName: string, italic: boolean, bold: boolean, strikeout: boolean, underline: boolean, unit: Vintasoft.Imaging.Annotation.WebAnnotationFontUnitEnumJS);

    // PROPERTIES

    /**
     * Gets the text size.
     */
    get_Size(): number;

    /**
     * Sets the text size.
     * @param value Text size.
     */
    set_Size(value: number): void;

    /**
     * Gets the name of the font family.
     */
    get_FamilyName(): string;

    /**
     * Sets the name of the font family.
     * @param value The name of the font family.
     */
    set_FamilyName(value: string): void;

    /**
     * Gets a value that indicates whether the font is italic.
     */
    get_Italic(): boolean;

    /**
     * Sets a value that indicates whether the font is italic.
     * @param value True - font is italic; False - font is not italic.
     */
    set_Italic(value: boolean): void;

    /**
     * Gets a value that indicates whether the font is bold.
     */
    get_Bold(): boolean;

    /**
     * Sets a value that indicates whether the font is bold.
     * @param value True - font is bold; False - font is not bold.
     */
    set_Bold(value: boolean): void;

    /**
     * Gets a value that indicates whether the font is strikeout.
     */
    get_Strikeout(): boolean;

    /**
     * Sets a value that indicates whether the font is strikeout.
     * @param value True - font is strikeout; False - font is not strikeout.
     */
    set_Strikeout(value: boolean): void;

    /**
     * Gets a value that indicates whether the font is underlined.
     */
    get_Underline(): boolean;

    /**
     * Sets a value that indicates whether the font is underlined.
     * @param value True - font is underlined; False - font is not underlined.
     */
    set_Underline(value: boolean): void;

    /**
     * Gets the annotation font unit of measure.
     */
    get_Unit(): Vintasoft.Imaging.Annotation.WebAnnotationFontUnitEnumJS;

    /**
     * Sets the annotation font unit of measure.
     * @param value An instance of [see="WebAnnotationFontUnitEnumJS"] class.
     */
    set_Unit(value: Vintasoft.Imaging.Annotation.WebAnnotationFontUnitEnumJS): void;

    // METHODS

    /**
     * Copies the state of the current annotation font to the target annotation font.
     * @param target The target font.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS): void;

    /**
     * Creates a new annotation font that is a copy of the current annotation font.
     */
    clone(): Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS;

    /**
     * Determines that this annotation font is equals to the specified annotation font.
     * @param font Annotation font.
     */
    equals(font: Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS): boolean;

  }

  /**
   * Determines the appearance of the hyperlink in certain state.
   */
  class WebLinkAppearanceJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebLinkAppearanceJS"] class.
     * @param font The font of the text.
     * @param foreColor The color of the text.
     * @param backColor The color of the background.
     * @param fontTransparent Flag indicating whether the text is transparent.
     * @param cursor CSS style of cursor.
     */
    constructor(font: Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS, foreColor: string, backColor: string, fontTransparent: boolean, cursor: string);

    // PROPERTIES

    /**
     * Gets the color of the text.
     */
    get_ForeColor(): string;

    /**
     * Sets the color of the text.
     * @param value Color.
     */
    set_ForeColor(value: string): void;

    /**
     * Gets the color of the background.
     */
    get_BackColor(): string;

    /**
     * Sets the color of the background.
     * @param value Color.
     */
    set_BackColor(value: string): void;

    /**
     * Gets a value indicating whether the text is transparent.
     */
    get_FontTransparent(): boolean;

    /**
     * Sets a value indicating whether the text is transparent.
     * @param value True - annotation font is transparent; False - annotation font is not transparent.
     */
    set_FontTransparent(value: boolean): void;

    /**
     * Gets the font of the text.
     */
    get_Font(): Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS;

    /**
     * Sets the font of the text.
     * @param value The [see="WebAnnotationFontJS"] of the text.
     */
    set_Font(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationFontJS): void;

    /**
     * Gets the CSS style of cursor.
     */
    get_Cursor(): string;

    /**
     * Sets the CSS style of cursor.
     * @param value CSS style of cursor.
     */
    set_Cursor(value: string): void;

    // METHODS

    /**
     * Copies the state of the current appearance to the target appearance.
     * @param target The target appearance.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS): void;

    /**
     * Creates a new appearance that is a copy of the current appearance.
     */
    clone(): Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS;

    /**
     * Determines that this appearance font is equals to the specified appearance.
     * @param appearance Appearance.
     */
    equals(appearance: Vintasoft.Imaging.Annotation.UI.WebLinkAppearanceJS): boolean;

  }

  /**
   * Defines a collection of points used in the WebLineAnnotationViewBaseJS class.
   */
  class WebPointCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPointCollectionJS"] class.
     * @param points An array of points.
     * @param maxLength Max length of collection.
     */
    constructor(points: object[], maxLength: number);

    // PROPERTIES

    /**
     * Gets the points.
     */
    get_Items(): object[];

    /**
     * Sets the points.
     * @param value Array of points.
     */
    set_Items(value: object[]): void;

    // METHODS

    /**
     * Gets the number of point in collection.
     */
    get_Count(): number;

    /**
     * Returns the point.
     * @param index Point index in the collection.
     */
    getItem(index: number): object;

    /**
     * Adds a point to the end of collection.
     * @param x X coordinate of point.
     * @param y Y coordinate of point.
     */
    add(x: number, y: number): void;

    /**
     * Inserts a point into collection.
     * @param index Point index in the collection.
     * @param x X coordinate of point.
     * @param y Y coordinate of point.
     */
    insert(index: number, x: number, y: number): void;

    /**
     * Retrieves the last point from collection.
     */
    pop(): object;

    /**
     * Removes point from collection.
     * @param index The zero-based index of point in the collection.
     */
    remove(index: number): void;

    /**
     * Removes  points from collection.
     * @param positions An array of zero-based indices of points in the collection.
     */
    removePoints(positions: number): void;

    /**
     * Swaps two points in the collection.
     * @param first Zero-based index of the first point.
     * @param second Zero-based index of the second point.
     */
    swap(first: number, second: number): void;

    /**
     * Changes the point in collection.
     * @param index Point index in the collection.
     * @param x X coordinate of point.
     * @param y Y coordinate of point.
     */
    changeItem(index: number, x: number, y: number): void;

    /**
     * Copies the state of the point collection to the target point collection if their max length are equal.
     * @param target The point collection.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebPointCollectionJS): void;

    /**
     * Creates a new point collection that is a copy of the current point collection.
     */
    clone(): Vintasoft.Imaging.Annotation.UI.WebPointCollectionJS;

  }

  /**
   * The interaction point that is used for changing of StartAngle and SweepAngle of arc annotation.
   */
  class WebArcInteractionPointJS extends Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebArcInteractionPointJS"] class.
     * @param cursor Cursor of the interaction area.
     */
    constructor(cursor: string);

    // PROPERTIES

    /**
     * Gets the first point border color of the interaction area.
     */
    get_FirstPointBorderColor(): string;

    /**
     * Sets the first point border color of the interaction area.
     * @param value The first point border color of the interaction area.
     */
    set_FirstPointBorderColor(value: string): void;

    /**
     * Gets the first point fill color of the interaction area.
     */
    get_FirstPointFillColor(): string;

    /**
     * Sets the first point fill color of the interaction area.
     * @param value The first point fill color of the interaction area.
     */
    set_FirstPointFillColor(value: string): void;

    /**
     * Gets the second point border color of the interaction area.
     */
    get_SecondPointBorderColor(): string;

    /**
     * Sets the second point border color of the interaction area.
     * @param value The second point border color of the interaction area.
     */
    set_SecondPointBorderColor(value: string): void;

    /**
     * Gets the second point fill color of the interaction area.
     */
    get_SecondPointFillColor(): string;

    /**
     * Sets the second point fill color of the interaction area.
     * @param value The second point fill color of the interaction area.
     */
    set_SecondPointFillColor(value: string): void;

  }

  /**
   * Represents a comment for annotation.
   */
  class WebAnnotationCommentJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationCommentJS"] class.
     * @param parentCollection The comment collection that contains this comment.
     */
    constructor(parentCollection: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentCollectionJS);

    // PROPERTIES

    /**
     * Gets the source object that stores the comment's data.
     */
    get_Source(): object;

    /**
     * Gets the comment collection that contains this comment.
     */
    get_ParentCollection(): object;

    /**
     * Gets the parent comment.
     */
    get_Parent(): Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS;

    /**
     * Gets a value indicating whether the comment is opened in user interface.
     */
    get_IsOpen(): boolean;

    /**
     * Sets a value indicating whether the comment is opened in user interface.
     * @param value True - the comment is opened in user interface; false - the comment is not opened in user interface.
     */
    set_IsOpen(value: boolean): void;

    /**
     * Gets a value indicating whether the comment is read-only in user interface.
     */
    get_IsReadOnly(): boolean;

    /**
     * Sets a value indicating whether the comment is read-only in user interface.
     * @param value True - the comment is read-only in user interface; false - the comment is not read-only in user interface.
     */
    set_IsReadOnly(value: boolean): void;

    /**
     * Gets the color of the comment in user interface.
     */
    get_Color(): string;

    /**
     * Sets the color of the comment in user interface.
     * @param value Color of comment, for example, "rgba(0,128,255,0.77)".
     */
    set_Color(value: string): void;

    /**
     * Gets type of comment.
     */
    get_Type(): string;

    /**
     * Sets type of comment.
     * @param value Type of comment.
     */
    set_Type(value: string): void;

    /**
     * Gets name of comment.
     */
    get_Name(): string;

    /**
     * Sets name of comment.
     * @param value The name of comment.
     */
    set_Name(value: string): void;

    /**
     * Gets the name of comment author.
     */
    get_UserName(): string;

    /**
     * Sets the name of comment author.
     * @param value The name of comment author.
     */
    set_UserName(value: string): void;

    /**
     * Gets the subject of the comment.
     */
    get_Subject(): string;

    /**
     * Sets the subject of the comment.
     * @param value The subject of the comment.
     */
    set_Subject(value: string): void;

    /**
     * Gets the text of the comment.
     */
    get_Text(): string;

    /**
     * Sets the text of the comment.
     * @param value The text of the comment.
     */
    set_Text(value: string): void;

    /**
     * Gets the state to which the parent comment should be set.
     */
    get_ParentState(): string;

    /**
     * Sets the state to which the parent comment should be set.
     * @param value The state to which the parent comment should be set.
     */
    set_ParentState(value: string): void;

    /**
     * Get the state model corresponding to ParentState.
     */
    get_StateModel(): string;

    /**
     * Sets the state model corresponding to ParentState.
     * @param value The state model corresponding to ParentState.
     */
    set_StateModel(value: string): void;

    /**
     * Gets the creation date for comment.
     */
    get_CreationDate(): string;

    /**
     * Gets the modify date for comment.
     */
    get_ModifyDate(): string;

    /**
     * Gets the replies of this comment.
     */
    get_Replies(): Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentCollectionJS;

    /**
     * Gets a value indicating the state replies must be shown in comment panel.
     */
    get_IsShowStateHistory(): boolean;

    /**
     * Sets a value indicating the state replies must be shown in comment panel.
     * @param value True - the state replies must be shown in comment panel; false - the state replies must not be shown in comment panel.
     */
    set_IsShowStateHistory(value: boolean): void;

    // METHODS

    /**
     * Serializes this comment.
     */
    serialize(): void;

    /**
     * Copies this comment properties to the target comment.
     * @param target Target comment.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): void;

    /**
     * Deserializes an annotation comment.
     * @param source The source object that stores the comment's data.
     * @param parentList The comment collection that contains this comment.
     * @param jsonComment JSON-object that represents the comment.
     */
    deserialize(source: object, parentList: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentCollectionJS, jsonComment: object): void;

  }

  /**
   * Represents a collection of annotation comments.
   */
  class WebAnnotationCommentCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationCommentCollectionJS"] class.
     * @param parent The comment that stores this comment collection.
     */
    constructor(parent: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS);

    // PROPERTIES

    /**
     * Gets count of elements in collection.
     */
    get_Count(): number;

    /**
     * Gets the comment that stores this comment collection.
     */
    get_Parent(): Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS;

    /**
     * Gets the source object that stores the parent comment's data.
     */
    get_Source(): object;

    // METHODS

    /**
     * Adds an annotation comment to the collection.
     * @param comment An annotation comment that should be added.
     */
    add(comment: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): void;

    /**
     * Inserts an annotation comment to the collection.
     * @param index The zero-based index at which the annotation comment should be inserted.
     * @param comment An annotation comment that should be inserted.
     */
    insert(index: number, comment: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): void;

    /**
     * Returns an index of annotation comment in the collection.
     * @param comment An annotation comment that should be searched.
     */
    indexOf(comment: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): number;

    /**
     * Returns a value indicating whether collection contains an annotation comment.
     * @param comment An annotation comment that should be searched.
     */
    contains(comment: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): boolean;

    /**
     * Returns an annotation comment at specified index.
     * @param index A zero-base index of annotation comment in collection.
     */
    getItem(index: number): Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS;

    /**
     * Removes an annotation comment from the collection.
     * @param comment An annotation comment that should be removed.
     */
    remove(comment: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): void;

    /**
     * Replaces an annotation comment at the specified index.
     * @param index The zero-based index of the annotation comment that should be replaced.
     * @param comment New [see="WebAnnotationCommentJS"] at the specified index.
     */
    set(index: number, comment: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): void;

    /**
     * Clears this collection.
     */
    clear(): void;

    /**
     * Returns an array that contains annotation comments of collection.
     */
    toArray(): Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS[];

    /**
     * Serializes this collection.
     */
    serialize(): object[];

    /**
     * Copies this collection to the target collection.
     * @param target Target comment.
     */
    copyTo(target: Vintasoft.Imaging.Annotation.UI.WebAnnotationCommentJS): void;

  }

  /**
   * Creates an instance of annotation view.
   */
  class WebAnnotationViewFabricJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewFabricJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Registers the annotation view type.
     * @param id The ID of the annotation view type.
     * @param creationFunction Function, which allows to create required [see="WebAnnotationViewJS"] object.
     */
    static registerAnnotation(id: string, creationFunction: Function): void;

    /**
     * Unregisters the annotation view type.
     * @param id The ID of the annotation view type.
     */
    static unregisterAnnotation(id: string): void;

    /**
     * Creates annotation view by ID of the annotation view type.
     * @param id The ID of the annotation view type.
     */
    static createAnnotationById(id: string): Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS;

    /**
     * Returns IDs of "standard" registered WebAnnotationViewJS.
     */
    static getAllStandardRegisteredIds(): string[];

    /**
     * Returns all IDs of registered annotation views.
     */
    static getAllRegisteredIds(): string[];

  }

  /**
   * Manages and stores the settings for annotation interaction areas.
   */
  class WebInteractionAreaAppearanceManagerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebInteractionAreaAppearanceManagerJS"] class.
     * @param viewer [see="WebAnnotationViewerJS"] object.
     */
    constructor(viewer: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewerJS);

    // PROPERTIES

    /**
     * Gets the template for the resize points of annotation.
     */
    get_ResizePointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebResizeInteractionPointJS;

    /**
     * Gets the rotation point of annotation.
     */
    get_RotationPoint(): Vintasoft.Imaging.UI.VisualTools.WebRotationInteractionPointJS;

    /**
     * Gets the rotation center point of annotation.
     */
    get_RotationCenterPoint(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Gets the template for slider points of annotation.
     */
    get_SliderPointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebInteractionPointJS;

    /**
     * Gets the text box of annotation.
     */
    get_TextBox(): Vintasoft.Imaging.UI.VisualTools.WebTextInteractionAreaJS;

    /**
     * Gets the template for polygon points of annotation.
     */
    get_PolygonPointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS;

    /**
     * Gets the template for polygon points of [see="WebArcAnnotationViewJS"] annotation.
     */
    get_ArcPointTemplate(): Vintasoft.Imaging.Annotation.UI.WebArcInteractionPointJS;

    /**
     * Gets the template for polygon points of [see="WebTriangleAnnotationViewJS"] annotation.
     */
    get_TrianglePointTemplate(): Vintasoft.Imaging.UI.VisualTools.WebPolygonInteractionPointJS;

    /**
     * Gets a value indicating whether the manager has been disposed of.
     */
    get_IsDisposed(): boolean;

    /**
     * Gets a value indicating whether the manager is initializing.
     */
    get_IsInitializing(): boolean;

    // METHODS

    /**
     * Disposes this manager.
     */
    dispose(): void;

    /**
     * Begins the manager initialization.
     */
    beginInit(): void;

    /**
     * Ends the manager initialization.
     */
    endInit(): void;

  }

  /**
   * Represents a visual tool that allows to annotate images.
   */
  class WebAnnotationVisualToolJS extends Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationVisualToolJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets an annotation collection that will be viewed and edited using the visual tool.
     */
    get_AnnotationViewCollection(): Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS;

    /**
     * Sets an annotation collection that will be viewed and edited using the visual tool.
     * @param collection [see="WebAnnotationViewCollectionJS"] that will be viewed and edited using the visual tool.
     */
    set_AnnotationViewCollection(value: Vintasoft.Imaging.Annotation.WebAnnotationViewCollectionJS): void;

    /**
     * Gets the focused annotation view.
     */
    get_FocusedAnnotationView(): Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS;

    /**
     * Sets the focused annotation view.
     * @param value The focused [see="WebAnnotationViewJS"].
     */
    set_FocusedAnnotationView(value: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Gets the interaction mode that defines how user can interact with annotations.
     */
    get_AnnotationInteractionMode(): Vintasoft.Imaging.Annotation.WebAnnotationInteractionModeEnumJS;

    /**
     * Sets the interaction mode that defines how user can interact with annotations.
     * @param value An instance of [see="WebAnnotationInteractionModeEnumJS"] class that defines the interaction mode. Default value is "Author".
     */
    set_AnnotationInteractionMode(value: Vintasoft.Imaging.Annotation.WebAnnotationInteractionModeEnumJS): void;

    /**
     * Sets a value indicating whether visual tool can respond to user interaction.
     * @param value True - visual tool can respond to user interaction; False - visual tool can not respond to user interaction.
     */
    set_IsEnabled(value: boolean): void;

    /**
     * Gets a value indicating whether this tool supports multipage mode.
     */
    get_IsMultipageModeSupported(): boolean;

    /**
     * Gets a value indicating whether the annotation visual tool should raise annotation events ("hoveredAnnotationChanged" event) in WebAnnotationInteractionModeEnumJS.View mode.
     */
    get_RaiseAnnotationEventsInViewMode(): boolean;

    /**
     * Sets a value indicating whether the annotation visual tool should raise annotation events ("hoveredAnnotationChanged" event) in WebAnnotationInteractionModeEnumJS.View mode.
     * @param value True - the annotation visual tool should raise annotation events ("hoveredAnnotationChanged" event) in WebAnnotationInteractionModeEnumJS.View mode; False - the annotation visual tool should not raise annotation events ("hoveredAnnotationChanged" event) in WebAnnotationInteractionModeEnumJS.View mode.<br />Default value is <b>true</b>.
     */
    set_RaiseAnnotationEventsInViewMode(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation visual tool should raise annotation events ("hoveredAnnotationChanged" event) in WebAnnotationInteractionModeEnumJS.Author mode.
     */
    get_RaiseAnnotationEventsInAuthorMode(): boolean;

    /**
     * Sets a value indicating whether the annotation visual tool should raise annotation events ("hoveredAnnotationChanged" event) in WebAnnotationInteractionModeEnumJS.Author mode.
     * @param value True - the annotation visual tool should raise annotation events ("hoveredAnnotationChanged" event) in WebAnnotationInteractionModeEnumJS.Author mode; False - the annotation visual tool should not raise annotation events ("hoveredAnnotationChanged" event) in WebAnnotationInteractionModeEnumJS.Author mode.<br />Default value is <b>false</b>.
     */
    set_RaiseAnnotationEventsInAuthorMode(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be built only in specified region.
     */
    get_IsAnnotationBoundingRectEnabled(): boolean;

    /**
     * Sets a value indicating whether the annotation can be built only in specified region.
     * @param value True - annotation can be built only in region specified by the AnnotationBoundingRect property; False - annotation can be built everywhere.<br />Default value is <b>false</b>.
     */
    set_IsAnnotationBoundingRectEnabled(value: boolean): void;

    /**
     * Gets a rectangle, in image space, in device-independent pixels (1/96th inch), that restricts the area of image where annotation can be built.
     */
    get_AnnotationBoundingRect(): object;

    /**
     * Gets a rectangle, in image space, in device-independent pixels (1/96th inch), that restricts the area of image where annotation can be built.
     * @param value An object "{ x: x, y: y, width: width, height: height }" that defines a rectangle, where annotation can be built/transformed. <b>null</b> or empty rectangle means that annotation can be built/transformed only within the image. Default value is <b>null</b>.
     */
    set_AnnotationBoundingRect(value: object): void;

    // METHODS

    /**
     * Adds annotation to the annotation collection of focused image and starts building of annotation.
     * @param annotation [see="WebAnnotationViewJS"] to build.
     */
    addAndBuildAnnotation(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Sets the focused annotation view specified by index.
     * @param annotationIndex Annotation index in annotation collection.
     */
    setFocusedAnnotationView(annotationIndex: number): void;

    /**
     * Finds an annotation view at specified point, in the coordinate space of HTML document.
     * @param x The X coordinate of point, in the coordinate space of HTML document.
     * @param y The Y coordinate of point, in the coordinate space of HTML document.
     */
    findAnnotationView(x: number, y: number): Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS;

    /**
     * Returns the drawing box of visual tool.
     */
    getDrawingBox(): object;

    /**
     * Cancels building of annotation.
     */
    cancelAnnotationBuilding(): void;

  }

  /**
   * Represents a JavaScript UI control for displaying the image thumbnails with annotations in web browser that supports HTML5 technology.
   */
  class WebAnnotatedThumbnailViewerJS extends Vintasoft.Imaging.UI.WebThumbnailViewerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotatedThumbnailViewerJS"] class.
     * @param controlId Identifier of parent DOM element.
     */
    constructor(controlId: string);

    // PROPERTIES

    /**
     * Gets the annotation view controller associated with the viewer.
     */
    get_AnnotationController(): Vintasoft.Imaging.Annotation.WebAnnotationViewControllerJS;

    /**
     * Gets a value indicating whether the viewer shows annotations on thumbnails.
     */
    get_ShowAnnotations(): boolean;

    /**
     * Sets a value indicating whether the viewer shows annotations on thumbnails.
     * @param value True - the viewer will show annotations on thumbnails; False - the viewer will not show annotations on thumbnails. Default value is True.
     */
    set_ShowAnnotations(value: boolean): void;

    /**
     * Gets a value indicating whether the viewer must load annotation collections only for visible thumbnails.
     */
    get_LoadAnnotationsOnlyForVisibleThumbnails(): boolean;

    /**
     * Sets a value indicating whether the viewer must load annotation collections only for visible thumbnails.
     * @param value True - viewer must load annotation collections only for visible thumbnails; False - viewer must load annotation collections only for all thumbnails. Default value is True.
     */
    set_LoadAnnotationsOnlyForVisibleThumbnails(value: boolean): void;

    /**
     * Gets a value indicating whether viewer must load annotations from the server-side.
     */
    get_DisableAnnotationDeserialization(): boolean;

    /**
     * Sets a value indicating whether viewer must load annotations from the server-side.
     * @param value True if viewer must not load annotations from the server-side; otherwise, false. Default value is False.
     */
    set_DisableAnnotationDeserialization(value: boolean): void;

    // METHODS

    /**
     * Updates the thumbnail viewer.
     */
    update(): void;

    /**
     * Ends the viewer initialization.
     */
    endInit(): void;

    /**
     * Disposes the viewer.
     */
    dispose(): void;

  }

  /**
   * Represents a JavaScript UI control for displaying images with annotations in web browser that supports HTML5 technology.
   */
  class WebAnnotationViewerJS extends Vintasoft.Imaging.UI.WebImageViewerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewerJS"] class.
     * @param controlId Identifier of parent DOM element.
     */
    constructor(controlId: string);

    // PROPERTIES

    /**
     * Gets the annotation view controller associated with the viewer.
     */
    get_AnnotationController(): Vintasoft.Imaging.Annotation.WebAnnotationViewControllerJS;

    /**
     * Gets the annotation visual tool used for interaction with annotations.
     */
    get_AnnotationVisualTool(): Vintasoft.Imaging.Annotation.UI.WebAnnotationVisualToolJS;

    /**
     * Gets the interaction mode that defines how user can interact with annotations.
     */
    get_AnnotationInteractionMode(): Vintasoft.Imaging.Annotation.WebAnnotationInteractionModeEnumJS;

    /**
     * Sets the interaction mode that defines how user can interact with annotations.
     * @param value An instance of [see="WebAnnotationInteractionModeEnumJS"] class that defines the interaction mode. Default value is "Author".
     */
    set_AnnotationInteractionMode(value: Vintasoft.Imaging.Annotation.WebAnnotationInteractionModeEnumJS): void;

    /**
     * Sets the current visual tool of the viewer.
     * @param tool [see="WebVisualToolJS"] object. Default value is AnnotationVisualTool value.
     */
    set_VisualTool(value: Vintasoft.Imaging.UI.VisualTools.WebVisualToolJS): void;

    /**
     * Gets a value indicating whether the viewer must load annotation collections only for displayed images.
     */
    get_LoadAnnotationsOnlyForDisplayedImages(): boolean;

    /**
     * Sets a value indicating whether the viewer must load annotation collections only for displayed images.
     * @param value True - viewer must load annotation collections only for displayed images; False - viewer must load annotation collections for all images. Default value is True.
     */
    set_LoadAnnotationsOnlyForDisplayedImages(value: boolean): void;

    /**
     * Gets a value indicating whether the viewer must load annotation collections only for visible images.
     */
    get_LoadAnnotationsOnlyForVisibleImages(): boolean;

    /**
     * Sets a value indicating whether the viewer must load annotation collections only for visible images.
     * @param value True - viewer must load annotation collections only for visible images; False - viewer must load annotation collections for all images. Default value is False.
     */
    set_LoadAnnotationsOnlyForVisibleImages(value: boolean): void;

    /**
     * Gets a value indicating whether annotations can be moved between images in multipage display mode.
     */
    get_CanMoveAnnotationsBetweenImages(): boolean;

    /**
     * Sets a value indicating whether annotations can be moved between images in multipage display mode.
     * @param value True if annotations can be moved between images; otherwise, false. Default value is True.
     */
    set_CanMoveAnnotationsBetweenImages(value: boolean): void;

    /**
     * Gets a value indicating whether viewer must load annotations from the server-side.
     */
    get_DisableAnnotationDeserialization(): boolean;

    /**
     * Sets a value indicating whether viewer must load annotations from the server-side.
     * @param value True if viewer must not load annotations from the server-side; otherwise, false. Default value is False.
     */
    set_DisableAnnotationDeserialization(value: boolean): void;

    /**
     * Gets a value indicating whether the annotation can be built only in specified region.
     */
    get_IsAnnotationBoundingRectEnabled(): boolean;

    /**
     * Sets a value indicating whether the annotation can be built only in specified region.
     * @param value True - annotation can be built only in region specified by the AnnotationBoundingRect property; False - annotation can be built everywhere.<br />Default value is <b>false</b>.
     */
    set_IsAnnotationBoundingRectEnabled(value: boolean): void;

    /**
     * Gets a rectangle, in image space, in device-independent pixels (1/96th inch), that restricts the area of image where annotation can be built.
     */
    get_AnnotationBoundingRect(): object;

    /**
     * Gets a rectangle, in image space, in device-independent pixels (1/96th inch), that restricts the area of image where annotation can be built.
     * @param value An object "{ x: x, y: y, width: width, height: height }" that defines a rectangle, where annotation can be built/transformed. <b>null</b> or empty rectangle means that annotation can be built/transformed only within the image. Default value is <b>null</b>.
     */
    set_AnnotationBoundingRect(value: object): void;

    // METHODS

    /**
     * Adds annotation to the annotation collection of focused image and starts building of annotation.
     * @param annotation Annotation to build.
     */
    addAndBuildAnnotation(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Transforms point from coordinate space of client area of the image viewer to the device-independent pixels (1/96th inch).
     * @param x X coordinate in coordinate space of client area of the image viewer.
     * @param y Y coordinate in coordinate space of client area of the image viewer.
     */
    transformPointFromViewerToDip(x: number, y: number): object;

    /**
     * Transforms point from the device-independent pixels (1/96th inch) to the coordinate space of client area of the image viewer.
     * @param x X coordinate in the device-independent pixels (1/96th inch).
     * @param y Y coordinate in the device-independent pixels (1/96th inch).
     */
    transformPointFromDipToViewer(x: number, y: number): object;

    /**
     * Transforms point from coordinate space of visible area of the image viewer to the device-independent pixels (1/96th inch).
     * @param x X coordinate in coordinate space of visible area of the image viewer.
     * @param y Y coordinate in coordinate space of visible area of the image viewer.
     */
    transformPointFromControlToDip(x: number, y: number): object;

    /**
     * Transforms point from the device-independent pixels (1/96th inch) to the coordinate space of visible area of the image viewer.
     * @param x X coordinate in the device-independent pixels (1/96th inch).
     * @param y Y coordinate in the device-independent pixels (1/96th inch).
     */
    transformPointFromDipToControl(x: number, y: number): object;

    /**
     * Scrolls to the annotation in viewer.
     * @param annotation Annotation to scroll.
     */
    scrollToAnnotation(annotation: Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS): void;

    /**
     * Ends the viewer initialization.
     */
    endInit(): void;

    /**
     * Disposes the viewer.
     */
    dispose(): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.Annotation.UI.Panels {

  // ===== CLASSES =====

  /**
   * A web UI toolbar panel that allows to work with annotations.
   */
  class WebUiAnnotationToolbarJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationToolbarJS"] class.
     * @param settings The settings of toolbar panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

  }

  /**
   * A web UI panel that allows to view the annotation list and navigate between annotations.
   */
  class WebUiAnnotationListPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationListPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: Vintasoft.Imaging.UI.UIElements.WebUiElementJS);

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationListPanelJS"] class.
     * @param settings The settings of the panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // PROPERTIES

    /**
     * Gets a function, which returns UI elements for the annotation list record.
     */
    get_CreateAnnotationContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the annotation list record.
     * @param value A function, which returns UI elements for the annotation list record, OR "null".<br /> Here is function prototype "function __createAnnotationContent(annotation, annotationCollection)", where "annotation" parameter is an instance of [see="WebAnnotationViewJS"] type, "annotationCollection" parameter is an instance of [see="WebAnnotationViewCollectionJS"] type. <b>Important:</b> "__createAnnotationContent" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreateAnnotationContentCallback(value: Function): void;

    /**
     * Gets a function, which returns UI elements for the header of annotation collection in annotation list panel.
     */
    get_CreateCollectionHeaderContentCallback(): Function;

    /**
     * Sets a function, which returns UI elements for the header of annotation collection in annotation list panel.
     * @param value A function, which returns UI elements for the header of annotation collection in annotation list panel, OR "null".<br /> Here is function prototype "function __createAnnotationCollectionHeaderContent(annotationCollection, index)", where "annotationCollection" parameter is an instance of [see="WebAnnotationViewCollectionJS"] type, index - zero-based index of annotation collection. <b>Important:</b> "__createAnnotationCollectionHeaderContent" function must return not empty array of [see="WebUiElementJS"] objects.
     */
    set_CreateCollectionHeaderContentCallback(value: Function): void;

    // METHODS

    /**
     * Destroys this UI element.
     */
    destroy(): void;

  }

  /**
   * A web UI panel that allows to rotate focused image with annotations.
   */
  class WebUiRotateImageWithAnnotationsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiRotateImageWithAnnotationsPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(settings: object);

    // METHODS

    /**
     * Rotates image with annotations.
     */
    rotate(): void;

  }

  /**
   * A web UI panel that allows to change settings of the annotation comment.
   */
  class WebUiAnnotationCommentSettingsPanelJS extends Vintasoft.Imaging.UI.UIElements.WebUiElementContainerJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationCommentSettingsPanelJS"] class.
     * @param commentListPanel A panel that displays list of annotation comments.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(commentListPanel: Vintasoft.Imaging.Annotation.UI.Panels.WebUiAnnotationCommentListPanelJS, settings: object);

    // METHODS

    /**
     * Creates and returns markup of UI element.
     * @param floatElementContainer A DOM-element, where floating elements must be placed.
     */
    render(floatElementContainer: object): object;

    /**
     * Creates and returns markup of UI element.
     */
    render(): object;

    /**
     * Sets the annotation comment.
     * @param annotationComment An instance of [WebAnnotationCommentJS] type that should be used as a source for this panel.
     */
    setComment(annotationComment: object): void;

    /**
     * Applies the changes in panel UI to the annotation comment.
     */
    editComment(): void;

    /**
     * Deletes the annotation comment that is used by this panel.
     */
    deleteComment(): void;

    /**
     * Updates this panel.
     */
    update(): void;

    /**
     * Returns array of nested UI elements.
     */
    getNestedElements(): Vintasoft.Imaging.UI.UIElements.WebUiElementJS[];

  }

  /**
   * A web UI panel that allows to display a list of annotation comments.
   */
  class WebUiAnnotationCommentListPanelJS extends Vintasoft.Imaging.UI.Panels.WebUiPanelWithContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationCommentListPanelJS"] class.
     * @param settings The settings of panel. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): <b>Important:</b> This value will be ignored - see remarks.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param stateButton The [see="WebUiElementJS"] object, which defines button, which allows to change the panel state.
     */
    constructor(settings: object, stateButton: object);

    // PROPERTIES

    /**
     * Gets the maximum allowable count of nested replies.
     */
    get_MaxNestedReplyCount(): number;

    /**
     * Sets the maximum allowable count of nested replies.
     * @param value The maximum allowable count of nested replies. Default value is 10.
     */
    set_MaxNestedReplyCount(value: number): void;

    // METHODS

    /**
     * Adds comment to the specified annotation.
     * @param annotation An annotation (instance of [WebAnnotationViewJS] type) that should be commented.
     * @param userName The name of user, who added the comment.
     */
    addComment(annotation: object, userName: string): object;

    /**
     * Shows the dialog that allows to edit settings of annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type) that should be edited.
     */
    editComment(comment: object): void;

    /**
     * Deletes the annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type) that should be deleted.
     */
    deleteComment(comment: object): void;

    /**
     * Adds reply to the annotation comment and displays a dialog that allows to edit the comment reply.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type) that should be replied.
     * @param userName The name of user, who added the reply.
     */
    addCommentReply(comment: object, userName: string): void;

    /**
     * Adds the state comment to the annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type) that is edited.
     * @param parent An annotation comment  (an instance of [WebAnnotationCommentJS] type) that is a parent comment for the comment that is edited.
     * @param userName The name of user, who added the reply.
     * @param status The new state of annotation comment.
     */
    addStateComment(comment: object, parent: object, userName: string, status: string): void;

    /**
     * Finds the root comment for specified annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type).
     */
    getRootComment(comment: object): object;

    /**
     * Finds the first state comment for specified annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type).
     */
    findFirstStateComment(comment: object): void;

    /**
     * Finds the last state comment for specified annotation comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type).
     */
    findLastStateComment(comment: object): void;

    /**
     * Sets a value indicating whether the panel must show the state history for comment and all replies for comment.
     * @param comment An annotation comment (an instance of [WebAnnotationCommentJS] type).
     * @param isShow A value indicating whether the panel must show the state history for comment and all replies for comment.
     */
    setIsShowStateHistoryForAllReplies(comment: object, isShow: boolean): void;

    /**
     * Clears the comment list.
     */
    clear(): void;

    /**
     * Updates this panel.
     */
    update(): void;

  }

}

// NAMESPACE
declare module Vintasoft.Imaging.Annotation.UI.UIElements {

  // ===== CLASSES =====

  /**
   * A web UI element that represent button for creating and adding specified annotation in annotation viewer.
   */
  class WebUiAnnotationButtonJS extends Vintasoft.Imaging.UI.UIElements.WebUiButtonJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebUiAnnotationButtonJS"] class.
     * @param settings The settings of UI element. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }".<br/> <b>Important:</b> 'click' event callback will be ignored. </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): <b>Important:</b> value will be ignored.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     * @param annotationId The ID of the annotation view type registered in [see="WebAnnotationViewFabricJS"].
     */
    constructor(settings: object, annotationId: string);

    // METHODS

    /**
     * Creates an annotation view associated with current button.
     */
    createAnnotation(): object;

  }

  /**
   * A web UI context menu for annotation viewer.
   */
  class WebAnnotationViewerContextMenuJS extends Vintasoft.Imaging.UI.UIElements.WebImageViewerContextMenuJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebAnnotationViewerContextMenuJS"] class.
     * @param imageViewer Image viewer.
     * @param settings Settings of context menu. The settings parameter has the following properties: <br/> <ul> <li>cssClass (string): CSS class or classes that will be applied to the element. Example: "cssClass:'button remove'".</li> <li>css (object): Object, which contains the names and values of CSS properties. Example: "css:{'width':'100px', 'height':'50px'}".</li> <li>properties (object): Object, which contains the names and values of element attributes. Example: "properties:{'title':'Hello', 'id':'helloId'}" </li> <li>events (object): Object, which contains the callbacks of events. Each object property has the following parameters:<br /> <ul> <li>Property name - event name (Example: "click", "change", "mouseover" etc ).</li> <li>Property value - event callback OR object - {callback:callback, data: Object, that contains additional data that will be passed to the callback}.</li> </ul> Example:"events:{'click':function(){console.log('click');}, 'change':{callback:function(){console.log('change');}, data:{x:11} } }". </li> <li>states (object): An instance of [see="WebUiElementStateCollectionJS"] class.</li> <li>title (string): Shortcut for 'title' attribute of element (equals - "properties:{'title':'some title'}"). <b>Important:</b> If 'states' is defined and active state [see="WebUiElementJS.get_ActiveState"] has title, the UI element will have title of active state. </li> <li>id (string): Shortcut for 'id' attribute of element (equals - "properties:{'id':'elementId'}").</li> <li>onClick (object): Shortcut for 'click' event callback.</li> <li>onChange (object): Shortcut for 'change' event callback.</li> <li>localizationId (string): Unique localization ID.</li> </ul>
     */
    constructor(imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS, settings: object);

    // PROPERTIES

    /**
     * Gets a function, which will be called when "Add annotation comment..." menu is selected.
     */
    get_AddAnnotationCommentCallback(): Function;

    /**
     * Sets a function, which will be called when "Add annotation comment..." menu is selected.
     * @param value A function, which will be called when "Add annotation comment..." menu is selected.<br/> Here is function prototype "function __showAddAnnotationCommentDialog(docViewer, focusedAnnotation)", where "docViewer" parameter is an instance of [see="WebDocumentViewerJS"] class, "annotation" parameter is an instance of [see="WebAnnotationViewJS"] type.
     */
    set_AddAnnotationCommentCallback(value: Function): void;

    /**
     * Gets a function, which will be called when "Annotation properties..." menu is selected.
     */
    get_AnnotationPropertiesCallback(): Function;

    /**
     * Sets a function, which will be called when "Annotation properties..." menu is selected.
     * @param value A function, which will be called when "Annotation properties..." menu is selected.<br/> Here is function prototype "function __showAnnotationPropertiesDialog(docViewer, focusedAnnotation)", where "docViewer" parameter is an instance of [see="WebDocumentViewerJS"] class, "annotation" parameter is an instance of [see="WebAnnotationViewJS"] type.
     */
    set_AnnotationPropertiesCallback(value: Function): void;

    // METHODS

    /**
     * Destroys the UI element.
     */
    destroy(): void;

  }

}

