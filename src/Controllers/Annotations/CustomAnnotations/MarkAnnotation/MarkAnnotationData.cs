using System;
using System.ComponentModel;
using System.Drawing;
using System.Runtime.Serialization;
using System.Security.Permissions;

using Vintasoft.Imaging;
using Vintasoft.Imaging.Annotation;
using Vintasoft.Imaging.Annotation.Rendering;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// Class that holds information about the annotation that displays a mark.
    /// </summary>
    [Serializable]
    public class MarkAnnotationData : AnnotationData
    {

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="MarkAnnotationData"/> class.
        /// </summary>
        public MarkAnnotationData()
            : base()
        {
            FillBrush = new AnnotationSolidBrush(Color.Black);
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="AnnotationData"/> class.
        /// </summary>
        /// <param name="info">The SerializationInfo to populate with data.</param>
        /// <param name="context">The destination for this serialization.</param>
        public MarkAnnotationData(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            _markType = (MarkAnnotationType)info.GetValue("MarkType", typeof(int));
        }


        /// <summary>
        /// Initializes the <see cref="MarkAnnotationData"/> class.
        /// </summary>
        static MarkAnnotationData()
        {
            // register renderer form this annotation
            AnnotationRendererFactory.RegisterRendererForAnnotationData(typeof(MarkAnnotationData), typeof(MarkAnnotationRenderer));
        }

        #endregion



        #region Properties

        MarkAnnotationType _markType = MarkAnnotationType.Tick;
        /// <summary>
        /// Gets or sets a mark type.
        /// </summary>
        [Description("The mark type.")]
        [DefaultValue(MarkAnnotationType.Tick)]
        public MarkAnnotationType MarkType
        {
            get
            {
                return _markType;
            }
            set
            {
                if (_markType != value)
                {
                    ObjectPropertyChangingEventArgs changingArgs =
                        new ObjectPropertyChangingEventArgs("MarkType", _markType, value);
                    if (OnPropertyChanging(changingArgs))
                    {
                        _markType = (MarkAnnotationType)changingArgs.NewValue;
                        OnPropertyChanged(changingArgs.ToChangedEventArgs());
                    }
                }
            }
        }

        #endregion



        #region Methods

        /// <summary>
        /// Returns the bounding box of annotation if annotation will have specified location,
        /// size and rotation.
        /// </summary>
        /// <param name="location">Location, in device-independent pixels (1/96th inch),
        /// of annotation.</param>
        /// <param name="size">Size, in device-independent pixels (1/96th inch),
        /// of annotation</param>
        /// <param name="rotation">Rotation, in degrees, of annotation.</param>
        /// <returns>Bounding box of annotation.</returns>
        public override RectangleF GetBoundingBox(PointF location, SizeF size, float rotation)
        {
            PointF[] points = GetReferencePointsInContentSpace();

            // rotate
            AnnotationsMath.RotatePointsAt(points, PointF.Empty, Rotation);
            // scale
            AnnotationsMath.ScalePoints(points, size.Width / this.Size.Width, size.Height / this.Size.Height);
            // translate
            AnnotationsMath.TranslatePoints(points, location.X, location.Y);

            return AnnotationsMath.GetBoundingBox(points);
        }


        /// <summary>
        /// Gets an array that contains reference points in content space of this annotation.
        /// </summary>
        /// <returns></returns>
        public virtual PointF[] GetReferencePointsInContentSpace()
        {
            float width = Size.Width;
            float height = Size.Height;
            float w = Math.Min(width / 10, height / 10);

            PointF[] points;
            switch (MarkType)
            {
                case MarkAnnotationType.Rectangle:
                    points = new PointF[]{
                        new PointF(-width / 2, -height/2),
                        new PointF(width / 2, -height/2),
                        new PointF(width / 2, height/2),
                        new PointF(-width / 2, height/2)};
                    break;

                case MarkAnnotationType.Tick:
                    points = new PointF[]{
                        new PointF(-width / 2, 0),
                        new PointF(0, height / 4),
                        new PointF(width / 2, -height / 2),
                        new PointF(0, height / 2),
                        new PointF(-width / 2, 0)};
                    break;

                case MarkAnnotationType.Cross:
                    points = new PointF[]{
                        new PointF(-width / 2, -w),
                        new PointF(-w, -w),
                        new PointF(-w, -height/2),
                        new PointF(w, -height/2),
                        new PointF(w, -w),
                        new PointF(width/2, -w),
                        new PointF(width/2, w),
                        new PointF(w, w),
                        new PointF(w, height/2),
                        new PointF(-w, height/2),
                        new PointF(-w, w),
                        new PointF(-width/2, w)};
                    break;

                case MarkAnnotationType.Star:
                    points = new PointF[]{
                        new PointF(-width / 2, 0),
                        new PointF(-w, -w),
                        new PointF(0, -height/2),
                        new PointF(w, -w),
                        new PointF(width/2, 0),
                        new PointF(w, w),
                        new PointF(0, height/2),
                        new PointF(-w, w),
                        new PointF(-width/2, 0)};
                    break;

                default:
                    throw new NotImplementedException();
            }

            AffineMatrix m = new AffineMatrix();
            if (HorizontalMirrored)
                m.Scale(-1, 1);
            if (VerticalMirrored)
                m.Scale(1, -1);
            if (!m.IsIdentity)
                PointFAffineTransform.TransformPoints(m, points);

            return points;
        }


        /// <summary>
        /// Populates a SerializationInfo with the data needed to serialize the target object.
        /// </summary>
        /// <param name="info">The SerializationInfo to populate with data.</param>
        /// <param name="context">The destination for this serialization.</param>
        [SecurityPermission(SecurityAction.LinkDemand, Flags = SecurityPermissionFlag.SerializationFormatter)]
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue("MarkType", (int)MarkType);
        }


        /// <summary>
        /// Creates a new object that is a copy of the current instance.
        /// </summary>
        /// <returns>A new object that is a copy of this instance.</returns>
        public override object Clone()
        {
            MarkAnnotationData data = new MarkAnnotationData();
            CopyTo(data);
            return data;
        }

        /// <summary>
        /// Copies the state of the current object to the target object.
        /// </summary>
        /// <param name="obj">Object to copy the state of the current object to.</param>
        public override void CopyTo(AnnotationData obj)
        {
            MarkAnnotationData typedTarget = (MarkAnnotationData)obj;
            base.CopyTo(typedTarget);
            typedTarget.MarkType = MarkType;
        }

        #endregion

    }
}
