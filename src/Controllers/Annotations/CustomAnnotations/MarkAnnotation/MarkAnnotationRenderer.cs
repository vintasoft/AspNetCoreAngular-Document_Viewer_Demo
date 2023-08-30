using System.Drawing;

using Vintasoft.Imaging;
using Vintasoft.Imaging.Annotation.Rendering;
using Vintasoft.Imaging.Drawing;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// Determines how to render the mark annotation.
    /// </summary>
    public class MarkAnnotationRenderer : AnnotationRenderer
    {

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="MarkAnnotationRenderer"/> class.
        /// </summary>
        /// <param name="annotationData">Object that stores the annotation data.</param>
        public MarkAnnotationRenderer(MarkAnnotationData annotationData)
            : base(annotationData)
        {
        }

        #endregion



        #region Properties

        /// <summary>
        /// Gets an annotation data.
        /// </summary>
        MarkAnnotationData MarkAnnoData
        {
            get
            {
                return (MarkAnnotationData)Data;
            }
        }

        #endregion



        #region Methods

        /// <summary>
        /// Returns a drawing box of annotation, in the image space.
        /// </summary>
        /// <param name="drawingSurface">The object that provides information about drawing surface.</param>
        /// <returns>Drawing box of annotation, in the image space.</returns>
        public override RectangleF GetDrawingBox(DrawingSurface drawingSurface)
        {
            using (IGraphicsPath path = GetAsGraphicsPath(DrawingFactory.Default))
            {
                using (IDrawingPen pen = DrawingFactory.Default.CreatePen(Data.Outline))
                {
                    // create transformation that allows to get correct bounding box
                    AffineMatrix transform = AffineMatrix.CreateRotation(MarkAnnoData.Rotation);
                    transform.Translate(MarkAnnoData.Location.X, MarkAnnoData.Location.Y);

                    return path.GetBounds(pen, transform);
                }
            }
        }

        /// <summary>
        /// Returns a mark annotation as <see cref="IGraphicsPath"/> in content space.
        /// </summary>
        public virtual IGraphicsPath GetAsGraphicsPath(DrawingFactory drawingFactory)
        {
            IGraphicsPath path = drawingFactory.CreateGraphicsPath();

            PointF[] referencePoints = MarkAnnoData.GetReferencePointsInContentSpace();

            switch (MarkAnnoData.MarkType)
            {
                case MarkAnnotationType.Tick:
                    path.AddCurve(referencePoints);
                    break;
                default:
                    path.AddPolygon(referencePoints);
                    break;
            }

            return path;
        }

        /// <summary>
        /// Renders the annotation on the <see cref="T:Vintasoft.Imaging.Drawing.DrawingEngine" />
        /// in the coordinate space of annotation.
        /// </summary>
        /// <param name="drawingEngine">The <see cref="T:Vintasoft.Imaging.Drawing.DrawingEngine" /> to render on.</param>
        /// <param name="drawingSurface">The object that provides information about drawing surface.</param>
        protected override void RenderInContentSpace(DrawingEngine drawingEngine, DrawingSurface drawingSurface)
        {
            using (IGraphicsPath path = GetAsGraphicsPath(drawingEngine.DrawingFactory))
            {
                if (Data.FillBrush != null)
                {
                    using (IDrawingBrush brush = drawingEngine.DrawingFactory.CreateBrush(Data.FillBrush))
                        drawingEngine.FillPath(brush, path);
                }
                if (Data.Border)
                {
                    using (IDrawingPen pen = drawingEngine.DrawingFactory.CreatePen(Data.Outline))
                        drawingEngine.DrawPath(pen, path);
                }
            }
        }

        #endregion

    }
}
