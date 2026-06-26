/**
 Specifies available types of mark annotation.
*/
enum WebMarkAnnotationTypeEnumJS {
  Rectangle,
  Tick,
  Star,
  Cross
}





/**
 Represents an interaction controller that builds the WebMarkAnnotationViewJS annotation.
*/
export class WebMarkAnnotationBuilderJS extends Vintasoft.Imaging.UI.VisualTools.WebRectangularObjectBuilderJS {
  constructor(interactionObj: object) {
    super(interactionObj);

    // set the default size of annotation
    this.set_DefaultSize({ width: 64, height: 64 });
  }

  /**
   Builds the annotation.
  */
  override buildObject(mousePosition: any) {
    let point0: any = mousePosition;
    // get the annotation
    let interactionObj: any = this.getInteractionObject();
    // begin the initialization of annotation
    interactionObj.beginInit();
    // get the default size of annotation
    let defaultSize: any = this.get_DefaultSize();
    // set new rectangle of annotation
    interactionObj.setRectangle(
      point0.x - defaultSize.width / 2, point0.y - defaultSize.height / 2,
      point0.x + defaultSize.width / 2, point0.y + defaultSize.height / 2);
    // end the initialization of annotation
    interactionObj.endInit();
  }

}





/**
  Determines how to display the annotation that displays a mark and how user can interact with annotation.
*/
export class WebMarkAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebAnnotationViewJS {

  _markType: WebMarkAnnotationTypeEnumJS;



  constructor() {
    super();

    let annotationBuilder: WebMarkAnnotationBuilderJS = new WebMarkAnnotationBuilderJS(this);
    this.set_Builder(annotationBuilder);

    let annotationTransformer: Vintasoft.Imaging.Annotation.UI.WebRectangularAnnotationTransformerJS =
      new Vintasoft.Imaging.Annotation.UI.WebRectangularAnnotationTransformerJS(this);
    annotationTransformer.set_HideInteractionPointsWhenMoving(true);
    //annotationTransformer._boundingBoxArea.__set_IsEnabled(true);
    this.set_Transformer(annotationTransformer);

    this.set_InteractionController(annotationBuilder);

    this._markType = WebMarkAnnotationTypeEnumJS.Tick;

    this.get_FillBrush().set_Color("rgba(0,0,0,1)");
    this.set_Border(false);
  }



  /**
   Gets annotation type.
  */
  override get_Type() {
    return "MarkAnnotation";
  }

  /**
   Gets a mark type.
  */
  get_MarkType(): WebMarkAnnotationTypeEnumJS {
    return this._markType;
  }
  /**
   Sets a mark type.
  */
  set_MarkType(value: WebMarkAnnotationTypeEnumJS) {
    var oldValue = this._markType;
    if (oldValue === value)
      return;

    // create the event args
    var eventArgs = { propertyName: "MarkType", isInitialized: this.get_IsInitiliazed(), oldValue: oldValue, newValue: value, cancel: false };
    // trigger the PropertyChanging event
    if (!this.raisePropertyChangingEvent(eventArgs)) {
      // get the property value from the event args
      value = eventArgs.newValue;

      if (this._markType == value)
        return;

      // set new property value
      this._markType = value;

      // create the event args
      eventArgs = { propertyName: "MarkType", isInitialized: this.get_IsInitiliazed(), oldValue: oldValue, newValue: value, cancel: false };
      // trigger the PropertyChanged event
      this.raisePropertyChangedEvent(eventArgs);
    }
  }

  /**
   Gets a value indicating whether this annotation is ready for drawing.
  */
  override get_IsReadyForDrawing() {
    let size: any = this.get_Size();
    return size.width > 0 && size.height > 0;
  }



  /**
   Copies the state of the current annotation to the target annotation.
  */
  override copyTo(target: any) {
    super.copyTo(target);

    target._markType = this._markType;
  }

  /**
   Returns a JSON-object for annotation serialization.
  */
  override serialize() {
    let annotationCopy: any = super.serialize();
    annotationCopy["markType"] = this._markType.valueOf();
    return annotationCopy;
  }

  /**
   Deserializes annotation.
  */
  override deserialize(jsonObject: any) {
    super.deserialize(jsonObject);
    this._markType = jsonObject.markType;
  }

  /**
   Draws an annotation on the canvas drawing context in the coordinate space of annotation.
  */
  override drawInContentSpace(drawingContext: any, canvasToAnnotationTransform: any) {
    // draw the mark
    this.__drawMarkInContentSpace(drawingContext);

    var fillBrush = this.get_FillBrush();
    var fillColor = fillBrush.get_Type().valueOf() === 0 ? "rgba(0,0,0,0)" : fillBrush.get_Color();
    if (fillColor === "none")
      fillColor = "rgba(0,0,0,0)";
    drawingContext.fillStyle = fillColor;

    // fill the mark
    drawingContext.fill();

    // if annotation has border
    if (this.get_Border()) {
      let scale: any = null;
      var outline = this.get_Outline();
      // if outline width is 0
      if (outline.get_Width() == 0) {
        // get the scale
        scale = canvasToAnnotationTransform.get_m11() != 0 ? Math.abs(canvasToAnnotationTransform.get_m11()) : Math.abs(canvasToAnnotationTransform.get_m12());
      }

      // set the pen in drawing context
      this.__setStrokeOptionInDrawingContext(drawingContext, outline, scale);
      // draw the border
      drawingContext.stroke();
    }

    return true;
  }

  /**
   Returns a value indicating whether point is located on annotation.
  */
  override isPointOnFigure(x: any, y: any) {
    // if annotation is not ready for drawing OR annotation is not visible OR annotation is not drawn
    if (!this.get_IsReadyForDrawing() || !this.get_IsVisible() || !this.get_IsDrawn())
      return false;

    // get drawing context that is associated with annotation
    let drawingContext: any = this.getDrawingContext();

    // begin path
    drawingContext.beginPath();
    // get the last transformation matrix
    var m = this.getLastTransformMatrix();
    // set the transformation in drawing context
    drawingContext.setTransform(m.get_m11(), m.get_m12(), m.get_m21(), m.get_m22(), m.get_offsetx(), m.get_offsety());

    // get the outline width
    var outlineWidth = this.get_Outline().get_Width();
    // set the line width in drawing context
    drawingContext.lineWidth = outlineWidth;

    // draw the mark
    this.__drawMarkInContentSpace(drawingContext);

    // reset the transformation in drawing context
    drawingContext.setTransform(1, 0, 0, 1, 0, 0);

    var inStroke = false;
    // if drawing context can check that point is located in stroke
    if (drawingContext.isPointInStroke != null) {
      // check if point is located in stroke
      inStroke = drawingContext.isPointInStroke(x, y);
    }

    return drawingContext.isPointInPath(x, y) || inStroke;
  }

  /**
   Returns the bounding box of annotation with taken into account position and rotation of annotation.
  */
  override getBoundingBox(location: any, size: any, rotation: number) {
    if (location == null)
      location = this.get_Location();
    if (size == null)
      size = this.get_Size();
    if (rotation == null)
      rotation = this.get_Rotation();

    var width = size.width;
    var height = size.height;

    // get the annotation rectangle
    var rectangle = { x: location.x - width / 2, y: location.y - height / 2, width: width, height: height };
    if (rotation == 0)
      return rectangle;

    // rotate rectangle and get an array that contains points, which define rotated rectangle
    var points = this.__getRotatedRectangleAsPointsArray(rectangle, rotation, location);
    // return the bounding box for points
    return this.__getBoundingBoxForPoints(points);
  }

  /**
   Returns the drawing box for annotation.
  */
  override getDrawingBox(transform: any) {
    // empty rect
    var emptyRect = { x: 0, y: 0, width: 0, height: 0 };
    // check if annotation is ready for drawing
    var isReadyForDrawing = this.get_IsReadyForDrawing();
    // if annotation is not visible
    if (this.get_IsVisible() == false) {
      // return empty rect
      return emptyRect;
    }

    // the drawing box of annotation
    let drawingBox: any = emptyRect;

    // if annotation is ready for drawing
    if (isReadyForDrawing) {
      // delta for outline width
      var outlineDelta = 0;

      // get the annotation outline
      var outline = this.get_Outline();
      // get the outline width
      var outlineWidth = outline.get_Width();
      // get the mark type
      var markType = this._markType.valueOf();
      // if "star" must be drawn and line jois is set to miter
      if (outline.get_LineJoin().valueOf() === 0 && markType === 2) {
        // take into account sharp angles
        outlineDelta = Math.ceil(outlineWidth * outline.get_MiterLimit());
      }
      else {
        outlineDelta = Math.ceil(outlineWidth);
      }
      // if "tick" must be drawn
      if (markType === 1) {
        // use double outline width
        outlineDelta += Math.ceil(outlineWidth);
      }

      // get the bounding box of annotation
      drawingBox = this.getBoundingBox(this.get_Location(), this.get_Size(), this.get_Rotation());

      // expand the drawing box using delta for outline width
      drawingBox.x -= outlineDelta / 2;
      drawingBox.y -= outlineDelta / 2;
      drawingBox.width += outlineDelta;
      drawingBox.height += outlineDelta;

      // get the transformation and save it in cache
      this.setLastTransformMatrix(this.getTransformFromContentSpace(transform) as Vintasoft.Imaging.Utils.WebMatrixJS);
      // transform the drawing box in control space
      transform.transformRectangle(drawingBox);
      // normalize the rectangle
      drawingBox = this.__normalizeRectangle(drawingBox);
    }

    // get the interaction controller of annotation
    let controller: any = this.get_InteractionController();
    // if interaction controller is transformer
    if (controller == this.get_Transformer()) {
      // get the drawing box of transformer
      var transformerDrawingBox = controller.getDrawingBox(this.get_Location(), this.get_Size(), this.get_Rotation());
      // if annotation is not ready for drawing
      if (!isReadyForDrawing) {
        drawingBox = transformerDrawingBox;
      }
      // if annotation is ready for drawing
      else {
        // get the union of 2 rectangles
        drawingBox = this.__getRectangleUnion(transformerDrawingBox, drawingBox);
      }
    }

    // return the drawing box of annotation
    return drawingBox;
  }

  /**
   Returns the rectangle of interaction object.
  */
  getRectangle() {
    var location: any = this.get_Location();
    var size: any = this.get_Size();
    // get coordinates of left-top and right-bottom corners
    var x0 = location.x - size.width / 2;
    var y0 = location.y - size.height / 2;
    var x1 = location.x + size.width / 2;
    var y1 = location.y + size.height / 2;
    var tmp;
    // if annotation is mirrored horizintally
    if (this.get_HorizontalMirrored()) {
      tmp = x0;
      x0 = x1;
      x1 = tmp;
    }
    // if annotation is mirrored vertically
    if (this.get_VerticalMirrored()) {
      tmp = y0;
      y0 = y1;
      y1 = tmp;
    }
    // return rectangle
    return { x0: x0, y0: y0, x1: x1, y1: y1 };
  }

  /**
   Sets the rectangle of interaction object.
  */
  setRectangle(x0: number, y0: number, x1: number, y1: number) {
    // calculate new location of annotation
    var newLocation = { x: (x0 + x1) / 2, y: (y0 + y1) / 2 };
    // calculate new size of annotation
    var newSize = { width: Math.abs(x0 - x1), height: Math.abs(y0 - y1) };

    var isInitializationStarted = false;

    // if drawing context, which is associated with annotation, exists
    if (this.getDrawingContext() != null) {
      let annoLocation: any = this.get_Location();
      let annoSize: any = this.get_Size();
      // the initial location and size
      var location = { x: annoLocation.x, y: annoLocation.y };
      var size = { width: annoSize.width, height: annoSize.height };
      // allowable calculation error in DIP
      var EPS = 0.001;
      // check the annotation size
      if (Math.abs(location.x - newLocation.x) < EPS)
        newLocation.x = location.x;
      if (Math.abs(location.y - newLocation.y) < EPS)
        newLocation.y = location.y;
      if (Math.abs(size.width - newSize.width) < EPS)
        newSize.width = size.width;
      if (Math.abs(size.height - newSize.height) < EPS)
        newSize.height = size.height;
      // determine if location is changed
      var isLocationChanged = location.x !== newLocation.x || location.y !== newLocation.y;
      // determine if size is changed
      var isSizeChanged = size.width !== newSize.width || size.height !== newSize.height;
      // if location or size is changed
      if (isLocationChanged || isSizeChanged) {
        // specify that the annotation initialization is started
        isInitializationStarted = true;
        // begin the initialization of annotation
        this.beginInit();
      }
      // if size is changed
      if (isSizeChanged)
        // set new size of annotation
        this.set_Size(newSize.width, newSize.height);
      // if location is changed
      if (isLocationChanged)
        // set new location of annotation
        this.set_Location(newLocation.x, newLocation.y);
    }
    // if drawing context, which is associated with annotation, does not exist
    else {
      // set new size of annotation
      this.set_Size(newSize.width, newSize.height);
      // set new location of annotation
      this.set_Location(newLocation.x, newLocation.y);
    }

    // set the horizontal mirror status
    this.set_HorizontalMirrored(x0 > x1);
    // set the vertical mirror status
    this.set_VerticalMirrored(y0 > y1);

    // if annotation initialization started
    if (isInitializationStarted)
      // end the initialization of annotation
      this.endInit();
  }

  /**
   Synchronizes the annotation settings and interaction controller settings.
   */
  override setInteractionControllerProperties(interactionController: any) {
    super.setInteractionControllerProperties(interactionController);

    if (interactionController instanceof Vintasoft.Imaging.Annotation.UI.WebRectangularAnnotationTransformerJS) {
      interactionController.set_CanMove(this.get_CanMove());
      interactionController.set_CanResize(this.get_CanResize());
      interactionController.set_CanRotate(this.get_CanRotate());
      interactionController.set_IsInteractiveObjectSymmetrical(false);
    }
  }


  /**
   Returns an array that contains reference points in content space of this annotation.
  */
  __getReferencePointsInContentSpace() {
    let size: any = this.get_Size();
    // get the annotation size
    var width = size.width;
    var height = size.height;
    // десятая часть минимального размера
    var w = Math.min(width / 10, height / 10);

    // the reference points of annotation
    var points = [];
    // create reference points depending from the annotation type
    switch (this._markType.valueOf()) {
      case 0:
        points.push({ x: -width / 2, y: -height / 2 });
        points.push({ x: width / 2, y: -height / 2 });
        points.push({ x: width / 2, y: height / 2 });
        points.push({ x: -width / 2, y: height / 2 });
        break;

      case 1:
        points.push({ x: -width / 2, y: 0 });
        points.push({ x: 0, y: height / 4 });
        points.push({ x: width / 2, y: -height / 2 });
        points.push({ x: 0, y: height / 2 });
        points.push({ x: -width / 2, y: 0 });
        break;

      case 2:
        points.push({ x: -width / 2, y: 0 });
        points.push({ x: -w, y: -w });
        points.push({ x: 0, y: -height / 2 });
        points.push({ x: w, y: -w });
        points.push({ x: width / 2, y: 0 });
        points.push({ x: w, y: w });
        points.push({ x: 0, y: height / 2 });
        points.push({ x: -w, y: w });
        points.push({ x: -width / 2, y: 0 });
        break;

      case 3:
        points.push({ x: -width / 2, y: -w });
        points.push({ x: -w, y: -w });
        points.push({ x: -w, y: -height / 2 });
        points.push({ x: w, y: -height / 2 });
        points.push({ x: w, y: -w });
        points.push({ x: width / 2, y: -w });
        points.push({ x: width / 2, y: w });
        points.push({ x: w, y: w });
        points.push({ x: w, y: height / 2 });
        points.push({ x: -w, y: height / 2 });
        points.push({ x: -w, y: w });
        points.push({ x: -width / 2, y: w });
        break;
    }

    // create the transformation matrix
    let matrix: Vintasoft.Imaging.Utils.WebMatrixJS = new Vintasoft.Imaging.Utils.WebMatrixJS();
    // if annotation is mirrored horizontally
    if (this.get_HorizontalMirrored()) {
      matrix.scale(-1, 1);
    }
    // if annotation is mirrored vertically
    if (this.get_VerticalMirrored()) {
      matrix.scale(1, -1);
    }
    // transform points using transformation matrix
    matrix.transformPoints(points);

    // return the reference points of annotation
    return points;
  }

  /**
   Draws the mark annotation.
  */
  __drawMarkInContentSpace(drawingContext: any) {
    // begin path on drawing context
    drawingContext.beginPath();
    // get the annotation reference points
    var points = this.__getReferencePointsInContentSpace();
    // if mark annotation represents 'Tick'
    if (this._markType.valueOf() !== 1) {
      // draw points by linking the points
      drawingContext.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; i++) {
        drawingContext.lineTo(points[i].x, points[i].y);
      }
      // close the path on drawing context
      drawingContext.closePath();
    }
    // if mark annotation does not represent 'Tick'
    else {
      // move to the first point
      drawingContext.moveTo(points[0].x, points[0].y);
      // get the Bezier curves from points
      var bezierCurves = this.__getBezierCurvesFromPoints(points);
      // for each Bezier curve
      for (var i = 0; i < bezierCurves.length; i++) {
        // draw the Bezier curve
        drawingContext.bezierCurveTo(bezierCurves[i][0].x, bezierCurves[i][0].y, bezierCurves[i][1].x, bezierCurves[i][1].y, bezierCurves[i][2].x, bezierCurves[i][2].y);
      }
    }
  }

  /**
   Returns the Bezier curves from points.
   @param {object[]} points The source points.
   @returns {object[]} An array that contains Bezier curves.
   @function @private
  */
  __getBezierCurvesFromPoints(points: any) {
    var d = [];
    for (var i = 0, iLen = points.length; i < iLen - 1; i++) {
      var p = [points[i - 1], points[i], points[i + 1], points[i + 2]];

      if (iLen - 2 == i) {
        p[3] = p[2];
      } else if (!i) {
        p[0] = points[i];
      }

      d.push(
        [
          {
            x: (-p[0].x + 6 * p[1].x + p[2].x) / 6,
            y: (-p[0].y + 6 * p[1].y + p[2].y) / 6
          },
          {
            x: (p[1].x + 6 * p[2].x - p[3].x) / 6,
            y: (p[1].y + 6 * p[2].y - p[3].y) / 6
          },
          {
            x: p[2].x,
            y: p[2].y
          }
        ]);
    }

    return d;
  }

  /**
   Set the stroke options for drawing context.
   @param {object} drawingContext The drawing context.
   @param {object} outline An instance of WebAnnotationPenJS.
   @param {number} scale The scale.
   @function @private
  */
  __setStrokeOptionInDrawingContext(drawingContext: any, outline: any, scale: number) {
    var lineWidth = outline._width;
    if (lineWidth === 0 && scale != null) {
      lineWidth = 1 / scale;
    }

    drawingContext.strokeStyle = outline._color;
    drawingContext.lineJoin = outline._lineJoin.toString().toLowerCase();
    drawingContext.lineWidth = lineWidth;

    this.__setDashPatternForLines(drawingContext, outline, lineWidth);
    if (drawingContext.lineJoin === "miter")
      drawingContext.miterLimit = outline._miterLimit;
    else
      drawingContext.miterLimit = 10;
  }

  /**
   Sets the dash pattern for lines.
   @param {object} drawingContext The drawing context.
   @param {object} outline An instance of WebAnnotationFontJS.
   @param {number} dashScale The dash scale
   @function @private
  */
  __setDashPatternForLines(drawingContext: any, outline: any, dashScale: number) {
    var dashStyle = outline._dashStyle;
    var dashPattern = outline.get_DashPattern();
    if (typeof drawingContext.setLineDash === "function") {
      if (dashStyle.valueOf() === 0) {
        drawingContext.setLineDash([]);
      }
      else {
        for (var i = 0; i < dashPattern.length; i++) {
          dashPattern[i] = dashPattern[i] * dashScale;
        }
        if (dashPattern.length % 2 !== 0) {
          dashPattern.push(0);
        }
        drawingContext.setLineDash(dashPattern);
      }
    }
  }

  /**
   Normalizes the rectangle.
   @param {object} rect The source rectangle.
   @returns {object} The normalized rectangle.
   @function @private
  */
  __normalizeRectangle(rect: any) {
    var x0 = Math.min(rect.x, rect.x + rect.width);
    var y0 = Math.min(rect.y, rect.y + rect.height);
    var x1 = Math.max(rect.x, rect.x + rect.width);
    var y1 = Math.max(rect.y, rect.y + rect.height);
    return { x: x0, y: y0, width: x1 - x0, height: y1 - y0 };
  }

  /**
   Returns the union of 2 rectangles.
   @param {object} rect1 The first rectangle.
   @param {object} rect2 The second rectangle.
   @returns {object} The rectangle as the union of 2 rectangles.
   @function @private
  */
  __getRectangleUnion(rect1: any, rect2: any) {
    var x1 = Math.min(rect1.x, rect2.x);
    var x2 = Math.max(rect1.x + rect1.width, rect2.x + rect2.width);
    var y1 = Math.min(rect1.y, rect2.y);
    var y2 = Math.max(rect1.y + rect1.height, rect2.y + rect2.height);
    return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
  }

  /**
   Rotates rectangle and returns an array that contains points, which define rotated rectangle.
   @param {object} rect The source rectangle.
   @param {number} angle The rotation angle.
   @param {object} atPoint The rotation center.
   @returns {object} An array that contains points that define rotated rectangle.
   @function @private
  */
  __getRotatedRectangleAsPointsArray(rect: any, angle: number, atPoint: any) {
    var points = this.__getRectanglePoints(rect);
    this.__rotatePointsAt(points, atPoint, angle);
    return points;
  }

  /**
   Returns points of rectangle.
   @param {object} rect The source rectangle.
   @returns {object[]} The points of rectangle.
   @function @private
  */
  __getRectanglePoints(rect: any) {
    return [
      { x: rect.x, y: rect.y },
      { x: rect.x, y: rect.y + rect.height },
      { x: rect.x + rect.width, y: rect.y + rect.height },
      { x: rect.x + rect.width, y: rect.y }
    ];
  }

  /**
   Rotates points counterclockwise.
   @param {object[]} points An array that contains points to rotate.
   @param {object} atPoint The rotation center.
   @param {number} alpha The rotation angle.
   @function @private
  */
  __rotatePointsAt(points: any, atPoint: any, alpha: number) {
    if (alpha == 0)
      return;
    alpha = -Math.PI / 180 * alpha;
    var sin = Math.sin(alpha);
    var cos = Math.cos(alpha);
    var x, y;
    for (var i = 0; i < points.length; i++) {
      x = points[i].x - atPoint.x;
      y = points[i].y - atPoint.y;
      points[i].x = (x * cos + y * sin + atPoint.x);
      points[i].y = (-x * sin + y * cos + atPoint.y);
    }
  }

  /**
   Returns the bounding box for points.
   @param {object[]} points An array that contains points.
   @returns {object} The bounding box.
   @function @private
  */
  __getBoundingBoxForPoints(points: any) {
    if (points.length == 0) {
      return { x: 0, y: 0, width: 0, height: 0 };
    }

    var x1 = points[0].x;
    var x2 = x1;
    var y1 = points[0].y;
    var y2 = y1;
    for (var i = 1; i < points.length; i++) {
      var x = points[i].x;
      var y = points[i].y;
      if (x1 > x)
        x1 = x;
      else if (x2 < x)
        x2 = x;
      if (y1 > y)
        y1 = y;
      else if (y2 < y)
        y2 = y;
    }

    return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
  }

}
