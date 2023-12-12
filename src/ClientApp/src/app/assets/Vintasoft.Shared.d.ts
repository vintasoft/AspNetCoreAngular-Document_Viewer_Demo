// Copyright 2014-2023 VintaSoft Ltd. All rights reserved.
// This software is protected by International copyright laws.
// Any copying, duplication, deployment, redistribution, modification or other
// disposition hereof is STRICTLY PROHIBITED without an express written license
// granted by VintaSoft Ltd. This notice may not be removed or otherwise
// altered under any circumstances.
// This code may NOT be used apart of the VintaSoft product.
﻿// NAMESPACE
declare module Vintasoft.Shared {

  // ===== ENUMS =====

  /**
   * Specifies available pixel formats for each pixel of the image.
   */
  class WebPixelFormatEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available algorithms, which can be used for image scaling or rotation.
   */
  class WebInterpolationModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available modes, which define how smoothing (antialiasing) is applied to lines and curves and the edges of filled areas.
   */
  class WebSmoothingModeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }

  /**
   * Specifies available formats of web images.
   */
  class WebImageTypeEnumJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    constructor(value: string);

  }


  // ===== STATIC METHODS =====

  /**
   * Sets one class as a inheritor of another class.
   * @param derivedClass Derived class.
   * @param parentClass Parent class.
   */
  function extend(derivedClass: object, parentClass: object): void;

  /**
   * Creates a deep clone of objects specified as parameters.
   */
  function cloneObject(): object;

  /**
   * Triggers an event.
   * @param object Object that should trigger an event.
   * @param eventName The event name.
   * @param eventParams The event parameters.
   */
  function triggerEvent(object: object, eventName: string, eventParams: object): void;

  /**
   * Triggers an event.
   * @param object Object that should trigger an event.
   * @param eventName The event name.
   */
  function triggerEvent(object: object, eventName: string): void;

  /**
   * Subscribes one subscriber to an event.
   * @param object Object that can trigger an event.
   * @param eventName The event name.
   * @param eventHandler The event handler.
   */
  function subscribeToEvent(object: object, eventName: string, eventHandler: Function): void;

  /**
   * Subscribes one subscriber to an event once.
   * @param object Object that can trigger an event.
   * @param eventName The event name.
   * @param eventHandler The event handler.
   */
  function subscribeToEventOnce(object: object, eventName: string, eventHandler: Function): void;

  /**
   * Unsubscribes subscriber from an event of object.
   * @param object Object that can trigger an event.
   * @param eventName The event name.
   * @param eventHandler The event handler.
   */
  function unsubscribeFromEvent(object: object, eventName: string, eventHandler: Function): void;

  /**
   * Unsubscribes all subscribers from an event of object.
   * @param object Object that can trigger an event.
   * @param eventName The event name.
   */
  function unsubscribeFromEvent(object: object, eventName: string): void;

  /**
   * Unsubscribes all subscribers from all events of object.
   * @param object Object that can trigger an event.
   */
  function unsubscribeFromEvent(object: object): void;


  // ===== CLASSES =====

  /**
   * Provides the base class for element of enumeration.
   */
  class WebEnumItemBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebEnumItemBaseJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Returns names of all enumeration elements.
     */
    getAllAvailableNames(): string[];

    /**
     * Returns values of all enumeration elements.
     */
    getAllAvailableValues(): object[];

    /**
     * Returns value of this enumeration element.
     */
    valueOf(): number;

    /**
     * Returns name of this enumeration element.
     */
    toString(): string;

    /**
     * Determines that this enumeration element is equals to the specified enumeration element.
     * @param val Name of enumeration element.
     */
    equals(val: string): boolean;

    /**
     * Determines that this enumeration element is equals to the specified enumeration element.
     * @param val Value of enumeration element.
     */
    equals(val: object): boolean;

    /**
     * Determines that this enumeration element defines a bit field.
     */
    isFlagged(): boolean;

  }

  /**
   * Provides the base class for element of flags enumeration.
   */
  class WebFlagsEnumItemBaseJS extends Vintasoft.Shared.WebEnumItemBaseJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebFlagsEnumItemBaseJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Returns this enumeration element (bit field) as an array of sub elements (bit fields). This method has effect only for enumerations that defines bit flags.
     */
    toArray(): Vintasoft.Shared.WebFlagsEnumItemBaseJS[];

    /**
     * Determines that this enumeration element (bit field) contains the specified sub element (bit field). This method has effect only for enumerations that defines bit flags.
     * @param val Name of enumeration element (bit field).
     */
    contains(val: string): boolean;

    /**
     * Determines that this enumeration element (bit field) contains the specified sub element (bit field). This method has effect only for enumerations that defines bit flags.
     * @param val Value of enumeration element (bit field).
     */
    contains(val: Vintasoft.Shared.WebFlagsEnumItemBaseJS): boolean;

    /**
     * Returns new enumeration element (bit field) that is concatenation of this bit field and the specified bit field. This method has effect only for enumerations that defines bit flags.
     * @param val Name of enumeration element (bit field).
     */
    add(val: string): Vintasoft.Shared.WebFlagsEnumItemBaseJS;

    /**
     * Returns new enumeration element (bit field) that is concatenation of this bit field and the specified bit field. This method has effect only for enumerations that defines bit flags.
     * @param val Value of enumeration element (bit field).
     */
    add(val: Vintasoft.Shared.WebFlagsEnumItemBaseJS): Vintasoft.Shared.WebFlagsEnumItemBaseJS;

    /**
     * Returns new enumeration element (bit field) that is difference between this bit field and the specified bit field.
     * @param val Name of enumeration element (bit field).
     */
    remove(val: string): Vintasoft.Shared.WebFlagsEnumItemBaseJS;

    /**
     * Returns new enumeration element (bit field) that is difference between this bit field and the specified bit field.
     * @param val Value of enumeration element (bit field).
     */
    remove(val: Vintasoft.Shared.WebFlagsEnumItemBaseJS): Vintasoft.Shared.WebFlagsEnumItemBaseJS;

    /**
     * Determines that this enumeration element defines a bit field.
     */
    isFlagged(): boolean;

  }

  /**
   * Allows to create enumerations.
   */
  class EnumGenerator {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "EnumGenerator"] class.
     */
    constructor();

    // METHODS

    /**
     * Creates an enumeration class.
     * @param items Array of objects "name-value" describing enumeration. Each object has following properties:<br/> <ul> <li>name (string): The name of enum element.</li> <li>value (number): The value of enum element.</li> </ul>
     * @param flagged A value indicating whether enumeration supports bit operations.
     */
    static create(items: object[], flagged: boolean): object;

  }

  /**
   * Provides information about the current environment and platform.
   */
  class WebImagingEnviromentJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImagingEnviromentJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Gets the session identifier.
     */
    static get_SessionId(): string;

    /**
     * Sets the session identifier.
     * @param value The session identifier. Identifier can contain only latin letters, numbers, "_" and "-" symbols.
     */
    static set_SessionId(value: string): void;

    /**
     * Returns the scroll size for the specified DOM element.
     * @param element DOM element.
     */
    static get_ScrollSize(element: object): number;

    /**
     * Returns the screen resolution, in dots per inch.
     */
    static getScreenDpi(): object;

    /**
     * Returns new GUID.
     */
    static guid(): string;

  }

  /**
   * Contains information about the property of object.
   */
  class WebPropertyInfoJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPropertyInfoJS"] class.
     * @param shortName Short property name.
     * @param fullName Fully qualified property name.
     * @param value Property value.
     * @param readOnly Indicates whether the property is read-only.
     * @param refreshFromParent Indicates whether the property value can be changed only using the parent property.
     */
    constructor(shortName: string, fullName: string, value: object, readOnly: boolean, refreshFromParent: boolean);

    // PROPERTIES

    /**
     * Gets the short property name.
     */
    get_ShortName(): string;

    /**
     * Gets the fully qualified property name.
     */
    get_FullName(): string;

    /**
     * Gets the property value.
     */
    get_Value(): object;

    /**
     * Gets a value indicating whether the property is read-only.
     */
    get_ReadOnly(): boolean;

    /**
     * Gets an array of nested properties of the property.
     */
    get_Items(): object[];

    /**
     * Gets a value indicating whether the property value can be changed only using the parent property.
     */
    get_RefreshFromParent(): boolean;

  }

  /**
   * Represents a tree structure that contains information about object properties. A tree node is an instance of [see="WebPropertyInfoJS"] class.
   */
  class WebPropertyGridJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPropertyGridJS"] class.
     * @param object Source object.
     * @param objShortName Object short name.
     * @param objFullName Object full name.
     * @param blackList Array of object property names, that should not be included in the result structure.
     */
    constructor(object: object, objShortName: string, objFullName: string, blackList: string[]);

    /**
     * Initializes a new instance of the [see= "WebPropertyGridJS"] class.
     * @param object Source object.
     * @param objShortName Object short name.
     * @param objFullName Object full name.
     */
    constructor(object: object, objShortName: string, objFullName: string);

    /**
     * Initializes a new instance of the [see= "WebPropertyGridJS"] class.
     * @param object Source object.
     * @param objShortName Object short name.
     */
    constructor(object: object, objShortName: string);

    /**
     * Initializes a new instance of the [see= "WebPropertyGridJS"] class.
     * @param object Source object.
     */
    constructor(object: object);

    // PROPERTIES

    /**
     * Gets an information about object properties.
     */
    get_ObjectProperties(): Vintasoft.Shared.WebPropertyInfoJS;

    // METHODS

    /**
     * Sets the property value.
     * @param propertyFullName Fully qualified name of property.
     * @param newPropertyValue New property value.
     */
    setPropertyValue(propertyFullName: string, newPropertyValue: object): object;

    /**
     * Synchronizes values in property grid and values of object whose values are shown in property grid.
     * @param newGrid New property grid.
     */
    updatePropertyGrid(newGrid: object): object[];

  }

  /**
   * Represents a web request to a web service.
   */
  class WebRequestJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRequestJS"] class.
     * @param actionName Action name.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     * @param ajaxParams Object that contains the request parameters.
     * @param isAsync A value indicating whether asynchronous request must be created. Default value is True.
     */
    constructor(actionName: string, successFunc: Function, errorFunc: Function, ajaxParams: object, isAsync: boolean);

    /**
     * Initializes a new instance of the [see= "WebRequestJS"] class.
     * @param actionName Action name.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     * @param ajaxParams Object that contains the request parameters.
     */
    constructor(actionName: string, successFunc: Function, errorFunc: Function, ajaxParams: object);

    /**
     * Initializes a new instance of the [see= "WebRequestJS"] class.
     * @param actionName Action name.
     * @param successFunc Function that will be executed if request is executed successfully.
     * @param errorFunc Function that will be executed if request is failed.
     */
    constructor(actionName: string, successFunc: Function, errorFunc: Function);

    /**
     * Initializes a new instance of the [see= "WebRequestJS"] class.
     * @param actionName Action name.
     * @param successFunc Function that will be executed if request is executed successfully.
     */
    constructor(actionName: string, successFunc: Function);

    /**
     * Initializes a new instance of the [see= "WebRequestJS"] class.
     * @param actionName Action name.
     */
    constructor(actionName: string);

    // PROPERTIES

    /**
     * Returns action name.
     */
    get_ActionName(): string;

  }

  /**
   * Represent a composite web request to a web service.
   */
  class WebCompositeRequestJS extends Vintasoft.Shared.WebRequestJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCompositeRequestJS"] class.
     * @param requests An array of [see="WebServiceJS"] instances.
     * @param actionName Action name.
     */
    constructor(requests: Vintasoft.Shared.WebServiceJS, actionName: string);

  }

  /**
   * Provides a base class for web services (API controllers, HTTP handlers or WCF services).
   */
  class WebServiceJS {

    // FIELDS

    /**
     * The default web service for image rendering.
     */
    static defaultImageService: object;

    /**
     * The default web service for managing of image collection.
     */
    static defaultImageCollectionService: object;

    /**
     * The default web service for working with files.
     */
    static defaultFileService: WebServiceJS;

    /**
     * The default web service for processing of images.
     */
    static defaultImageProcessingService: WebServiceJS;

    /**
     * The default web service for converting image files.
     */
    static defaultConverterService: WebServiceJS;

    /**
     * The default web service for processing of document images.
     */
    static defaultImageProcessingDocCleanupService: WebServiceJS;

    /**
     * The default web service for annotating of images.
     */
    static defaultAnnotationService: WebServiceJS;

    /**
     The default web service for working with Office documents.
     @field @public @static
    */
    static defaultOfficeService: WebServiceJS;

    /**
     * The default web service for working with PDF documents.
     */
    static defaultPdfService: WebServiceJS;

    /**
     * The default web service for working with barcodes.
     */
    static defaultBarcodeService: WebServiceJS;

    /**
     * The default service for working with TWAIN device manager.
     */
    static defaultTwainService: WebServiceJS;

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebServiceJS"] class.
     * @param serviceRoute Route to the web service (controller/handler), for example "/vintasoft/api/VintasoftImageApi/".
     */
    constructor(serviceRoute: string);

    // PROPERTIES

    /**
     * Gets a service route.
     */
    get_ServiceRoute(): string;

    // METHODS

    /**
     * Adds request to the web service.
     * @param request An instance of [see="WebRequestJS"] class.
     */
    addRequest(request: Vintasoft.Shared.WebRequestJS): object;

    /**
     * Sends requests to a web service.
     */
    sendRequests(): object[];

    /**
     * Sends a single request to a web service.
     * @param webRequest An instance of [see="WebRequestJS"] class.
     */
    sendRequest(webRequest: Vintasoft.Shared.WebRequestJS): object;

  }

  /**
   * A web service that represents Web API controller or WCF service.
   */
  class WebServiceControllerJS extends Vintasoft.Shared.WebServiceJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebServiceControllerJS"] class.
     * @param serviceRoute Route to the web API controller or WCF service, for example "/vintasoft/api/VintasoftImageApi/".
     */
    constructor(serviceRoute: string);

    // METHODS

    /**
     * Sends a single request to a web service.
     * @param webRequest An instance of [see="WebRequestJS"] class.
     */
    sendRequest(webRequest: Vintasoft.Shared.WebRequestJS): object;

  }

  /**
   * A web service that represents HTTP handler.
   */
  class WebServiceHandlerJS extends Vintasoft.Shared.WebServiceJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebServiceHandlerJS"] class.
     * @param serviceRoute Route to the HTTP handler, for example "Handlers/VintasoftImageHandler1.ashx".
     */
    constructor(serviceRoute: string);

    // METHODS

    /**
     * Sends a single request to a web service.
     * @param webRequest An instance of [see="WebRequestJS"] class.
     */
    sendRequest(webRequest: Vintasoft.Shared.WebRequestJS): object;

  }

  /**
   * Contains image rendering settings.
   */
  class WebRenderingSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebRenderingSettingsJS"] class.
     * @param resolution Resolution, in pixels per inch, for image rendering.
     * @param interpolationMode [see="WebInterpolationModeEnumJS"] for image rendering.
     * @param smoothingMode [see="WebSmoothingModeEnumJS"] for image rendering.
     */
    constructor(resolution: object, interpolationMode: Vintasoft.Shared.WebInterpolationModeEnumJS, smoothingMode: Vintasoft.Shared.WebSmoothingModeEnumJS);

    /**
     * Initializes a new instance of the [see= "WebRenderingSettingsJS"] class.
     * @param resolution Resolution, in pixels per inch, for image rendering.
     * @param interpolationMode [see="WebInterpolationModeEnumJS"] for image rendering.
     */
    constructor(resolution: object, interpolationMode: Vintasoft.Shared.WebInterpolationModeEnumJS);

    /**
     * Initializes a new instance of the [see= "WebRenderingSettingsJS"] class.
     * @param resolution Resolution, in pixels per inch, for image rendering.
     */
    constructor(resolution: object);

    /**
     * Initializes a new instance of the [see= "WebRenderingSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a type of rendering settings.
     */
    get_Type(): string;

    /**
     * Gets the resolution, in pixels per inch, for image rendering.
     */
    get_Resolution(): object;

    /**
     * Sets the resolution, in pixels per inch, for image rendering.
     * @param value An object ({ x: x, y: y }) that represents image resolution, in pixels per inch, for image rendering.
     */
    set_Resolution(value: object): void;

    /**
     * Gets the interpolation mode for image rendering.
     */
    get_InterpolationMode(): Vintasoft.Shared.WebInterpolationModeEnumJS;

    /**
     * Sets the interpolation mode for image rendering.
     * @param value An instance of [see="WebInterpolationModeEnumJS"] class that represents interpolation mode for image rendering.
     */
    set_InterpolationMode(value: Vintasoft.Shared.WebInterpolationModeEnumJS): void;

    /**
     * Gets the smoothing mode for image rendering.
     */
    get_SmoothingMode(): Vintasoft.Shared.WebSmoothingModeEnumJS;

    /**
     * Sets the smoothing mode for image rendering.
     * @param value An instance of [see="WebSmoothingModeEnumJS"] class that represents smoothing mode for image rendering.
     */
    set_SmoothingMode(value: Vintasoft.Shared.WebSmoothingModeEnumJS): void;

    // METHODS

    /**
     * Creates an exact copy of this [see="WebRenderingSettingsJS"].
     */
    clone(): Vintasoft.Shared.WebRenderingSettingsJS;

    /**
     * Determines whether the specified rendering settings is equal to the current rendering settings.
     * @param value The rendering settings to compare with the current rendering settings.
     */
    equals(value: Vintasoft.Shared.WebRenderingSettingsJS): boolean;

    /**
     * Returns a value indicating whether the rendering settings is empty.
     */
    isEmpty(): boolean;

    /**
     * Begins the settings initialization.
     */
    beginInit(): void;

    /**
     * Ends the settings initialization.
     */
    endInit(): void;

    /**
     * Returns settings as object.
     */
    toObject(): object;

  }

  /**
   * Contains settings for rendering of PDF page.
   */
  class WebPdfRenderingSettingsJS extends Vintasoft.Shared.WebRenderingSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebPdfRenderingSettingsJS"] class.
     * @param resolution Resolution, in pixels per inch, for image rendering.
     * @param interpolationMode [see="WebInterpolationModeEnumJS"] for image rendering.
     * @param smoothingMode [see="WebSmoothingModeEnumJS"] for image rendering.
     */
    constructor(resolution: object, interpolationMode: Vintasoft.Shared.WebInterpolationModeEnumJS, smoothingMode: Vintasoft.Shared.WebSmoothingModeEnumJS);

    /**
     * Initializes a new instance of the [see= "WebPdfRenderingSettingsJS"] class.
     * @param resolution Resolution, in pixels per inch, for image rendering.
     * @param interpolationMode [see="WebInterpolationModeEnumJS"] for image rendering.
     */
    constructor(resolution: object, interpolationMode: Vintasoft.Shared.WebInterpolationModeEnumJS);

    /**
     * Initializes a new instance of the [see= "WebPdfRenderingSettingsJS"] class.
     * @param resolution Resolution, in pixels per inch, for image rendering.
     */
    constructor(resolution: object);

    /**
     * Initializes a new instance of the [see= "WebPdfRenderingSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a type of rendering settigns.
     */
    get_Type(): string;

    /**
     * Gets a value that determines whether PDF page renderer should display PDF non-markup annotations on PDF page.
     */
    get_DrawNonMarkupAnnotations(): boolean;

    /**
     * Sets a value that determines whether PDF page renderer should display PDF non-markup annotations on PDF page.
     * @param value A value that determines whether PDF page renderer should display PDF non-markup annotations on PDF page. Default value if true.
     */
    set_DrawNonMarkupAnnotations(value: boolean): void;

    // METHODS

    /**
     * Creates an exact copy of this object.
     */
    clone(): Vintasoft.Shared.WebPdfRenderingSettingsJS;

    /**
     * Determines whether the specified rendering settings is equal to the current rendering settings.
     * @param temp The rendering settings to compare with the current rendering settings.
     */
    equals(temp: Vintasoft.Shared.WebPdfRenderingSettingsJS): boolean;

    /**
     * Returns a value indicating whether the rendering settings is empty.
     */
    isEmpty(): boolean;

    /**
     * Returns settings as object.
     */
    toObject(): object;

  }

  /**
   * Provides a base class for rendering settings that contains a group of rendering settings.
   */
  class WebCompositeRenderingSettingsJS extends Vintasoft.Shared.WebRenderingSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebCompositeRenderingSettingsJS"] class.
     * @param settings Array of rendering settings of composite rendering settings.
     */
    constructor(settings: Vintasoft.Shared.WebRenderingSettingsJS[]);

    // PROPERTIES

    /**
     * Gets the items of this composite rendering settings.
     */
    get_Settings(): Vintasoft.Shared.WebRenderingSettingsJS[];

    /**
     * Sets the resolution, in pixels per inch, for image rendering.
     * @param value An object ({ x: x, y: y }) that represents image resolution, in pixels per inch, for image rendering.
     */
    set_Resolution(value: object): void;

    /**
     * Sets the interpolation mode for image rendering.
     * @param value An instance of [see="WebInterpolationModeEnumJS"] class that represents interpolation mode for image rendering.
     */
    set_InterpolationMode(value: Vintasoft.Shared.WebInterpolationModeEnumJS): void;

    /**
     * Sets the smoothing mode for image rendering.
     * @param value An instance of [see="WebSmoothingModeEnumJS"] class that represents smoothing mode for image rendering.
     */
    set_SmoothingMode(value: Vintasoft.Shared.WebSmoothingModeEnumJS): void;

    // METHODS

    /**
     * Begins the settings initialization.
     */
    beginInit(): void;

    /**
     * Ends the settings initialization.
     */
    endInit(): void;

    /**
     * Creates an exact copy of this [see="WebCompositeRenderingSettingsJS"].
     */
    clone(): Vintasoft.Shared.WebCompositeRenderingSettingsJS;

    /**
     * Determines whether the specified rendering settings is equal to the current rendering settings.
     * @param temp The rendering settings to compare with the current rendering settings.
     */
    equals(temp: Vintasoft.Shared.WebCompositeRenderingSettingsJS): boolean;

    /**
     * Returns a value indicating whether the rendering settings is empty.
     */
    isEmpty(): boolean;

    /**
     * Returns settings as object.
     */
    toObject(): object;

  }

  /**
   * Contains information about file with password.
   */
  class WebFileInfoJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebFileInfoJS"] class.
     * @param id A string, which represents a file identifier.
     * @param password A string, which represents a file password.
     */
    constructor(id: string, password: string);

    /**
     * Initializes a new instance of the [see= "WebFileInfoJS"] class.
     * @param id A string, which represents a file identifier.
     */
    constructor(id: string);

    // PROPERTIES

    /**
     * Gets a file identifier.
     */
    get_Id(): string;

    /**
     * Gets a file password.
     */
    get_Password(): string;

  }

  /**
   * Contains decoding settings of image.
   */
  class WebDecodingSettingsJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebDecodingSettingsJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the color management is enabled.
     */
    get_IsColorManagementEnabled(): boolean;

    /**
     * Sets a value indicating whether the color management is enabled.
     * @param value True - the color management is enabled; False - the color management is disabled. Default value is True.
     */
    set_IsColorManagementEnabled(value: boolean): void;

    // METHODS

    /**
     * Creates an exact copy of this [see="WebDecodingSettingsJS"].
     */
    clone(): Vintasoft.Shared.WebDecodingSettingsJS;

    /**
     * Determines whether the specified decoding settings is equal to the current decoding settings.
     * @param value The decoding settings to compare with the current decoding settings.
     */
    equals(value: Vintasoft.Shared.WebDecodingSettingsJS): boolean;

    /**
     * Returns settings as object.
     */
    toObject(): object;

  }

  /**
   * Represents a source of web image.
   */
  class WebImageSourceJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageSourceJS"] class.
     * @param imageId A string, which represents a file identifier.
     * @param imageService A [see="WebServiceJS"], which allows to work with image.
     * @param annotationService A [see="WebServiceJS"], which allows to annotate image.
     */
    constructor(imageId: string, imageService: Vintasoft.Shared.WebServiceJS, annotationService: Vintasoft.Shared.WebServiceJS);

    /**
     * Initializes a new instance of the [see= "WebImageSourceJS"] class.
     * @param imageId A string, which represents a file identifier.
     * @param imageService A [see="WebServiceJS"], which allows to work with image.
     */
    constructor(imageId: string, imageService: Vintasoft.Shared.WebServiceJS);

    /**
     * Initializes a new instance of the [see= "WebImageSourceJS"] class.
     * @param imageId A string, which represents a file identifier.
     */
    constructor(imageId: string);

    // PROPERTIES

    /**
     * Gets an identifier that determines the image source.
     */
    get_ImageId(): string;

    /**
     * Gets the web service that allows to work with web image.
     */
    get_ImageService(): Vintasoft.Shared.WebServiceJS;

    /**
     * Gets the web service that allows to work with annotations of web image.
     */
    get_AnnotationService(): Vintasoft.Shared.WebServiceJS;

    /**
     * Gets the image source password.
     */
    get_Password(): string;

    /**
     * Sets the image source password.
     * @param value The image source password.
     */
    set_Password(value: string): void;

    // METHODS

    /**
     * Determines whether the specified image source is equal to the current image source.
     * @param imageSource The image source to compare with the current image source.
     */
    equals(imageSource: Vintasoft.Shared.WebImageSourceJS): boolean;

  }

  /**
   * Represents a web image.
   */
  class WebImageJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageJS"] class.
     * @param imageSource [see="WebImageSourceJS"] object.
     * @param pageIndex Zero-based index of image in image source.
     */
    constructor(imageSource: Vintasoft.Shared.WebImageSourceJS, pageIndex: number);

    // PROPERTIES

    /**
     * Gets an identifier that determines the image source.
     */
    get_ImageId(): string;

    /**
     * Gets the image size.
     */
    get_Size(): object;

    /**
     * Gets the image resolution.
     */
    get_Resolution(): object;

    /**
     * Gets the image pixel format.
     */
    get_PixelFormat(): Vintasoft.Shared.WebPixelFormatEnumJS;

    /**
     * Gets the [see="WebImageSourceJS"] object of current image.
     */
    get_Source(): Vintasoft.Shared.WebImageSourceJS;

    /**
     * Gets the zero-based index of image in image source.
     */
    get_PageIndex(): number;

    /**
     * Gets a value indicating whether the image has a vector decoder and image is not changed.
     */
    get_IsVector(): boolean;

    /**
     * Gets a value indicating whether the image can be converted to SVG optimally.
     */
    get_CanConvertToSvgOptimally(): boolean;

    /**
     * Gets the rendering settings for this image.
     */
    get_RenderingSettings(): Vintasoft.Shared.WebRenderingSettingsJS;

    /**
     * Sets the rendering settings for this image.
     * @param value [see="WebRenderingSettingsJS"] for this image.
     */
    set_RenderingSettings(value: Vintasoft.Shared.WebRenderingSettingsJS): void;

    /**
     * Gets the decoding settings of this image.
     */
    get_DecodingSettings(): Vintasoft.Shared.WebDecodingSettingsJS;

    /**
     * Sets the decoding settings of this image.
     * @param value [see="WebDecodingSettingsJS"] of this image.
     */
    set_DecodingSettings(value: Vintasoft.Shared.WebDecodingSettingsJS): void;

    /**
     * Gets the unique guid associated with this [see="WebImageJS"] object.
     */
    get_Guid(): string;

    /**
     * Gets a value indicating whether the image is bad, i.e. information about image cannot be loaded OR image cannot be rendered.
     */
    get_IsBad(): boolean;

    /**
     * Gets the Vintasoft.Imaging.WebImageMetadataJS object, which contains metadata associated with the source image.
     */
    get_Metadata(): object;

    /**
     * Gets the decoder name.
     */
    get_DecoderName(): string;

    // METHODS

    /**
     * Determines whether the specified image is equal to the current image.
     * @param image The image to compare with the current image.
     */
    equals(image: Vintasoft.Shared.WebImageJS): boolean;

    /**
     * Sends an asynchronous request for rendering of image tile.
     * @param tileRenderingSettings Settings for rendering of image tile.<br/> An object with following properties:<br/> <ul> <li>x (number): X coordinate of tile on source image (X coordinate without scale). Required parameter.</li> <li>y (number): Y coordinate of tile on source image (Y coordinate without scale). Required parameter.</li> <li>width (number): The width, in pixels, of scaled tile. Required parameter.</li> <li>height (number): The height, in pixels, of scaled tile. Required parameter.</li> <li>scale (object): The scale (horizontal and vertical) of image tile. Supported values: 0.1 - 10%, 1 - 100%, etc. Optional parameter, default value is {x:1,y:1}.</li> <li>useCache (boolean): Value indicating whether rendered image tile must be saved on server. Optional parameter, default value is true.</li> <li>format (object): An instance of [see="WebImageTypeEnumJS"] class that defines a format in which an image tile must be returned. Optional parameter, default value is [see="WebImageTypeEnumJS"].Url.</li> <li>renderingSettings (object): [see="WebRenderingSettingsJS"] object. Optional parameter, default value is [see="WebImageJS.get_RenderingSettings"] of image.</li> <li>decodingSettings (object): [see="WebDecodingSettingsJS"] object. Optional parameter, default value is [see="WebImageJS.get_DecodingSettings"] of image.</li> </ul>
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>pos (object): Tile position on source image.</li> <li>size (object): Tile size.</li> <li>useCache (boolean): Indicates that the rendered image tile is saved on server.</li> <li>scale (object): The scale (horizontal and vertical) of image tile.</li> <li>image (object): An instance of [see="WebImageJS"] class that represents the source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    renderTile(tileRenderingSettings: object, successFunc: Function, errorFunc: Function): object;

    /**
     * Sends an asynchronous request for rendering of the "main" image tile and all neighbour image tiles around the main image tile.
     * @param tileRenderingSettings Settings for rendering of image tile.<br/> An object with following properties:<br/> <ul> <li>x (number): X coordinate of tile on source image (X coordinate without scale). Required parameter.</li> <li>y (number): Y coordinate of tile on source image (Y coordinate without scale). Required parameter.</li> <li>width (number): The width, in pixels, of scaled tile. Required parameter.</li> <li>height (number): The height, in pixels, of scaled tile. Required parameter.</li> <li>scale (object): The scale (horizontal and vertical) of image tile. Supported values: 0.1 - 10%, 1 - 100%, etc. Optional parameter, default value is {x:1,y:1}.</li> <li>useCache (boolean): Value indicating whether rendered image tile must be saved on server. <b>Important:</b> current method always set this parameter to true.</li> <li>format (object): An instance of [see="WebImageTypeEnumJS"] class that defines a format in which an image tile must be returned. Optional parameter, default value is [see="WebImageTypeEnumJS"].Url</li> <li>renderingSettings (object): [see="WebRenderingSettingsJS"] object. Optional parameter, default value is [see="WebImageJS.get_RenderingSettings"] of image.</li> <li>decodingSettings (object): [see="WebDecodingSettingsJS"] object. Optional parameter, default value is [see="WebImageJS.get_DecodingSettings"] of image.</li> </ul>
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>pos (object): Tile position on source image.</li> <li>size (object): Tile size.</li> <li>useCache (boolean): Indicates that the rendered image tile is saved on server.</li> <li>scale (object): The scale (horizontal and vertical) of image tile.</li> <li>image (object): An instance of [see="WebImageJS"] class that represents the source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    renderTileWithNeighbours(tileRenderingSettings: object, successFunc: Function, errorFunc: Function): object;

    /**
     * Sends an asynchronous request for rendering of all image tiles.
     * @param tilesRenderingSettings Settings for rendering of image tiles.<br/> An object with following properties:<br/> <ul> <li>width (number): The width, in pixels, of scaled tile. Required parameter.</li> <li>height (number): The height, in pixels, of scaled tile. Required parameter.</li> <li>scale (object): The scale (horizontal and vertical) of image tile. Supported values: 0.1 - 10%, 1 - 100%, etc. Optional parameter, default value is {x:1,y:1}.</li> <li>format (object): An instance of [see="WebImageTypeEnumJS"] class that defines a format in which an image tile must be returned. Optional parameter, default value is [see="WebImageTypeEnumJS"].Url</li> <li>renderingSettings (object): [see="WebRenderingSettingsJS"] object. Optional parameter, default value is [see="WebImageJS.get_RenderingSettings"] of image.</li> <li>decodingSettings (object): [see="WebDecodingSettingsJS"] object. Optional parameter, default value is [see="WebImageJS.get_DecodingSettings"] of image.</li> </ul>
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    renderTiles(tilesRenderingSettings: object, successFunc: Function, errorFunc: Function): object;

    /**
     * Sends an asynchronous request for rendering of image thumbnail.
     * @param thumbnailRenderingSettings Settings for rendering of image thumbnail.<br/> An object with following properties:<br/> <ul> <li>width (number): Thumbnail width in pixels. Required parameter.</li> <li>height (number): Thumbnail height in pixels. Required parameter.</li> <li>useCache (boolean): A value indicating whether rendered thumbnail must be saved on sever. Optional parameter, default value is true.</li> <li>format (object): An instance of [see="WebImageTypeEnumJS"] class that defines a format in which an image thumbnail must be returned. Optional parameter, default value is [see="WebImageTypeEnumJS"].Url</li> <li>renderingSettings (object): [see="WebRenderingSettingsJS"] object. Optional parameter, default value is [see="WebImageJS.get_RenderingSettings"] of image.</li> <li>decodingSettings (object): [see="WebDecodingSettingsJS"] object. Optional parameter, default value is [see="WebImageJS.get_DecodingSettings"] of image.</li> </ul>
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>imageParam (object): An object with information about image: <ul> <li>imageSize (object): An object that contains image width and height.</li> <li>imageResolution (object): An object that contains image resolution.</li> <li>pixelFormat (object): An instance of [see="WebPixelFormatEnumJS"] class that defines the image pixel format.</li> <li>isVector (boolean): Indicates that the image has vector decoder.</li> </ul> </li> <li>image (object): An instance of [see="WebImageJS"] class that represents the source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    renderThumbnail(thumbnailRenderingSettings: object, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request for getting information about image.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageSize (object): An object that contains image width and height.</li> <li>imageResolution (object): An object that contains image resolution.</li> <li>pixelFormat (object): An instance of [see="WebPixelFormatEnumJS"] class that defines the image pixel format.</li> <li>isVector (boolean): Indicates that the image has vector decoder.</li> <li>image (object): An instance of [see="WebImageJS"] class that represents the source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    getImageInfo(successFunc: Function, errorFunc: Function): object;

    /**
     * Sends an asynchronous request for getting of image.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): A Base64 presentation of image.</li> <li>image (object): An instance of [see="WebImageJS"] class that represents the source image.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    getImageAsBase64String(successFunc: Function, errorFunc: Function): object;

  }

  /**
   * Represents a collection of web images (collection of instances of [see="WebImageJS"] class).
   */
  class WebImageCollectionJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebImageCollectionJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets the number of images contained in the collection.
     */
    get_Count(): number;

    // METHODS

    /**
     * Returns an image.
     * @param index Zero-based index of image in image collection.
     */
    getImage(index: number): Vintasoft.Shared.WebImageJS;

    /**
     * Gets the index of the specified [see="WebImageJS"] object.
     * @param image The [see="WebImageJS"] object to search for.
     */
    indexOf(image: Vintasoft.Shared.WebImageJS): number;

    /**
     * Clears the collection.
     */
    clear(): void;

    /**
     * Adds an image to the end of the collection.
     * @param image [see="WebImageJS"] to add.
     */
    add(image: Vintasoft.Shared.WebImageJS): void;

    /**
     * Adds images to the end of the collection.
     * @param images An array of [see="WebImageJS"] objects.
     */
    addRange(images: Vintasoft.Shared.WebImageJS[]): void;

    /**
     * Adds images to the end of the collection.
     * @param images An image collection, which is represented by [see="WebImageCollectionJS"] object.
     */
    addRange(images: Vintasoft.Shared.WebImageCollectionJS): void;

    /**
     * Inserts an image into collection at the specified index.
     * @param index The zero-based index at which image should be inserted.
     * @param image [see="WebImageJS"] to insert.
     */
    insert(index: number, image: Vintasoft.Shared.WebImageJS): void;

    /**
     * Inserts images into collection at the specified index.
     * @param index The zero-based index at which image should be inserted.
     * @param images An array of [see="WebImageJS"] objects.
     */
    insertRange(index: number, images: Vintasoft.Shared.WebImageJS[]): void;

    /**
     * Inserts images into collection at the specified index.
     * @param index The zero-based index at which image should be inserted.
     * @param images An image collection, which is represented by [see="WebImageCollectionJS"] object.
     */
    insertRange(index: number, images: Vintasoft.Shared.WebImageCollectionJS): void;

    /**
     * Swaps the specified images in the collection.
     * @param firstIndex The index of first image that should be swapped.
     * @param secondIndex The index of second image that should be swapped.
     */
    swap(firstIndex: number, secondIndex: number): void;

    /**
     * Removes images at specified indexes and inserts them at specified index.
     * @param insertIndex The zero-based index at which the images should be inserted.
     * @param indexes An array that contains indexes of images that must be moved.
     */
    moveRange(insertIndex: number, indexes: number[]): number;

    /**
     * Removes specified image from the collection.
     * @param index The zero-based index of image which should be removed.
     */
    removeAt(index: number): void;

    /**
     * Removes specified image from the collection.
     * @param image [see="WebImageJS"] to remove.
     */
    remove(image: Vintasoft.Shared.WebImageJS): void;

    /**
     * Removes the specified images from the collection.
     * @param images An array of [see="WebImageJS"] objects, which must be removed.
     */
    removeImages(images: Vintasoft.Shared.WebImageJS[]): void;

    /**
     * Removes the specified images from the collection.
     * @param imageIndices imageIndices Zero-based indices of images, which must be removed.
     */
    removeRange(imageIndices: number[]): void;

    /**
     * Sets information about the specified image.
     * @param index The zero-based index of image, which should be changed.
     * @param image New [see="WebImageJS"] at the specified index.
     */
    set(index: number, image: Vintasoft.Shared.WebImageJS): void;

    /**
     * Returns the collection as array of [see="WebImageJS"] objects.
     */
    toArray(): Vintasoft.Shared.WebImageJS[];

    /**
     * Sets the rendering settings for all images from this collection.
     * @param value [see="WebRenderingSettingsJS"] for all images from this collection.
     */
    setRenderingSettings(value: Vintasoft.Shared.WebRenderingSettingsJS): void;

    /**
     * Sets the decoding settings for all images from this collection.
     * @param value [see="WebDecodingSettingsJS"] for all images from this collection.
     */
    setDecodingSettings(value: Vintasoft.Shared.WebDecodingSettingsJS): void;

    /**
     * Sets the default decoding settings for all images from this collection.
     */
    setDecodingSettings(): void;

    /**
     * Sends an asynchronous request to a server and gets information about images, which are stored in files on server.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"], which allows to manage an image collection.
     */
    getImageFilesInfos(fileIds: string[], successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server and gets information about images, which are stored in files on server. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    getImageFilesInfos(fileIds: string[], successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server and gets information about images, which are stored in files on server. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     */
    getImageFilesInfos(fileIds: string[], successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server and gets information about images, which are stored in files on server.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    getImageFilesInfos(fileIds: string[], service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server and gets information about images, which are stored in files on server.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    getImageFilesInfos(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server and gets information about images, which are stored in files on server. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    getImageFilesInfos(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server and gets information about images, which are stored in files on server. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     */
    getImageFilesInfos(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server and gets information about images, which are stored in files on server.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    getImageFilesInfos(fileIds: Vintasoft.Shared.WebFileInfoJS[], service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, clears the image collection and adds images to the image collection.
     * @param fileId A string, which represents a file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    openFile(fileId: string, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, clears the image collection and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId A string, which represents a file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    openFile(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, clears the image collection and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId A string, which represents a file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    openFile(fileId: string, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, clears the image collection and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId A string, which represents a file identifier.
     */
    openFile(fileId: string): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, clears the image collection and adds images to the image collection.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    openFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, clears the image collection and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    openFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, clears the image collection and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    openFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, clears the image collection and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     */
    openFile(fileId: Vintasoft.Shared.WebFileInfoJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection.
     * @param fileId A string, which represents a file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    addFile(fileId: string, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId A string, which represents a file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    addFile(fileId: string, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId A string, which represents a file identifier.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    addFile(fileId: string, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId A string, which represents a file identifier.
     */
    addFile(fileId: string): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    addFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    addFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     */
    addFile(fileId: Vintasoft.Shared.WebFileInfoJS, successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. This function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileId An instance of [see="WebFileInfoJS"] class.
     */
    addFile(fileId: Vintasoft.Shared.WebFileInfoJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and clears the image collection and adds images to the image collection.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"], which allows to manage an image collection.
     */
    openFiles(fileIds: string[], successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and clears the image collection and adds images to the image collection. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    openFiles(fileIds: string[], successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and clears the image collection and adds images to the image collection. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     */
    openFiles(fileIds: string[], successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and clears the image collection and adds images to the image collection.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param service [see="WebServiceJS"], which allows to manage an image collection.
     */
    openFiles(fileIds: string[], service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and clears the image collection and adds images to the image collection.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"], which allows to manage an image collection.
     */
    openFiles(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and clears the image collection and adds images to the image collection. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    openFiles(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and clears the image collection and adds images to the image collection. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     */
    openFiles(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and clears the image collection and adds images to the image collection.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param service [see="WebServiceJS"], which allows to manage an image collection.
     */
    openFiles(fileIds: Vintasoft.Shared.WebFileInfoJS[], service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"], which allows to manage image collection.
     */
    addFiles(fileIds: string[], successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    addFiles(fileIds: string[], successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     */
    addFiles(fileIds: string[], successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection.
     * @param fileIds An array of strings, which represent file identifiers.
     * @param service [see="WebServiceJS"], which allows to manage an image collection.
     */
    addFiles(fileIds: string[], service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"], which allows to manage an image collection.
     */
    addFiles(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    addFiles(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>files (object): Array of informations about images in image files. Information is object with following properties:<br/> <ul> <li>imageInfos (object): Information about images in image file.</li> <li>isAuthenticationRequired (boolean): A value indicating whether current image file requres authentication.</li> </ul> </li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property from all files.</li> </ul>
     */
    addFiles(fileIds: Vintasoft.Shared.WebFileInfoJS[], successFunc: Function): void;

    /**
     * Sends an asynchronous request to a server, gets information about images, which are stored in files on server, and adds images to the image collection.
     * @param fileIds An array of instances of [see="WebFileInfoJS"] class.
     * @param service [see="WebServiceJS"], which allows to manage an image collection.
     */
    addFiles(fileIds: Vintasoft.Shared.WebFileInfoJS[], service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server for saving state of image collection on server.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    saveState(successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server for saving state of image collection on server. Function uses web service specified by the WebServiceJS.defaultImageCollectionService property.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    saveState(successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server for restoring state of image collection from server.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about cached image collection.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    loadState(successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server for restoring state of image collection from server. Function uses web service specified by WebServiceJS.defaultImageCollectionService property.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)".<br/> The data parameter has the following properties:<br/> <ul> <li>imageInfos (object): Information about cached image collection.</li> <li>images (object): An array of [see="WebImageJS"] objects created using imageInfos property.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    loadState(successFunc: Function, errorFunc: Function): void;

    /**
     * Sends an asynchronous request to a server to clear cache of image collection files on server.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)"<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): The identifier of image file.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     * @param service [see="WebServiceJS"] which allows to manage an image collection.
     */
    clearCache(successFunc: Function, errorFunc: Function, service: Vintasoft.Shared.WebServiceJS): void;

    /**
     * Sends an asynchronous request to a server to clear cache of image collection files on server. Function uses web service specified by the WebServiceJS.defaultImageService property.
     * @param successFunc Function that will be executed if request is executed successfully.<br/> Here is function prototype "function __success(data)"<br/> The data parameter has the following properties:<br/> <ul> <li>fileId (string): The identifier of image file.</li> </ul>
     * @param errorFunc Function that will be executed if request is failed.<br/> Here is function prototype "function __error(data)".<br/> The data parameter can be:<br/> <ol> <li>An object with following properties:<br/> <ul> <li>fileId (string): Image file identifier.</li> <li>errorMessage (string): Error message.</li> <li>blocked (boolean): Indicates that the requested action is blocked by another request.</li> </ul> if exception is catched inside web service. </li> <li>Otherwise, jqXHR object.</li> </ol>
     */
    clearCache(successFunc: Function, errorFunc: Function): void;

  }

  /**
   * Provides methods for placing data on and retrieving data from local clipboard.
   */
  class WebObjectClipboardJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "WebObjectClipboardJS"] class.
     */
    constructor();

    // METHODS

    /**
     * Clears the Clipboard and adds data in the specified format to the Clipboard.
     * @param format The format of the data to set.
     * @param data Data to add.
     */
    setData(format: string, data: object): void;

    /**
     * Retrieves data, in the specified format, from the Clipboard.
     * @param format The format of the data to retrieve.
     */
    getData(format: string): object;

    /**
     * Removes all data from the Clipboard.
     */
    clear(): void;

    /**
     * Indicates whether the Clipboard contains data in the specified format.
     * @param format The format of the data to look for.
     */
    contains(format: string): boolean;

  }

  /**
   * Provides functionality for localization DOM elements and constant strings.
   */
  class VintasoftLocalizationJS {

    // CONTSRUCTORS

    /**
     * Initializes a new instance of the [see= "VintasoftLocalizationJS"] class.
     */
    constructor();

    // PROPERTIES

    /**
     * Gets a value indicating whether the localizer is ready for localization.
     */
    get_IsReady(): boolean;

    // METHODS

    /**
     * Returns localization info for the specified localization identifier.
     * @param id The localization identifier.
     */
    getLocalizationInfo(id: string): object;

    /**
     * Localizes all DOM-elements, which have the "localizationId" attribute, in HTML document.
     */
    localizeDocument(): void;

    /**
     * Returns the localization dictionary for all DOM-elements, which have the "localizationId" attribute, in HTML document.
     */
    getDocumentLocalizationDictionary(): void;

    /**
     * Sets the string constant for localization.
     * @param id The identifier of string constant.
     * @param value The string constant that should be localized.
     */
    static setStringConstant(id: string, value: string): void;

    /**
     * Gets the string constant by identifier.
     * @param id The identifier of string constant.
     */
    static getStringConstant(id: string): string;

  }

}

