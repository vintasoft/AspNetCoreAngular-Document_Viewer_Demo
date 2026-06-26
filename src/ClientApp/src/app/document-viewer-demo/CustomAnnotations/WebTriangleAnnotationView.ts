/**
 Determines how to display the annotation that displays a triangle and how user can interact with annotation.
*/
export class WebTriangleAnnotationViewJS extends Vintasoft.Imaging.Annotation.UI.WebPolygonAnnotationViewJS {

  constructor() {
    // call the constructor of base class
    super();

    // create the point-based builder for point-based annotation
    var pointBasedAnnotationPointBuilder = new Vintasoft.Imaging.Annotation.UI.WebPointBasedAnnotationPointBuilderJS(this);
    // specify the minimum count of points in annotation
    pointBasedAnnotationPointBuilder.set_MinPointCount(3);
    // specify the maximum count of points in annotation
    pointBasedAnnotationPointBuilder.set_MaxPointCount(3);
    // set the builder for annotation
    this.set_Builder(pointBasedAnnotationPointBuilder);

    // specify that builder should be used as current interaction controller
    this.set_InteractionController(pointBasedAnnotationPointBuilder);

    // specify that we will use transformer that is based on points
    this.set_GripMode(new Vintasoft.Imaging.Annotation.WebAnnotationGripModeEnumJS("Points"));

    // set the None type for the annotation fill brush
    this.get_FillBrush().set_Type(new Vintasoft.Imaging.Annotation.WebBrushStyleEnumJS("None"));
  }

  /**
   Gets annotation type.
  */
  override get_Type() {
    return "TriangleAnnotation";
  }

}
