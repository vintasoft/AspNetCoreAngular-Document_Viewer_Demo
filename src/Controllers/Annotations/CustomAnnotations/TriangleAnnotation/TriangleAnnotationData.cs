using System;
using System.Drawing;
using System.Runtime.Serialization;
using System.Security.Permissions;

using Vintasoft.Imaging.Annotation;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// Class that holds information about the annotation that displays a triangle.
    /// </summary>
    [Serializable]
    public class TriangleAnnotationData : PolygonAnnotationData
    {

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="TriangleAnnotationData"/> class.
        /// </summary>
        public TriangleAnnotationData()
            : base()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="TriangleAnnotationData"/> class.
        /// </summary>
        /// <param name="info">The SerializationInfo to populate with data.</param>
        /// <param name="context">The destination for this serialization.</param>
        public TriangleAnnotationData(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            int sdkVersion = 70;
            if (context.Context is int)
                sdkVersion = (int)context.Context;

            if (sdkVersion < 70)
            {
                try
                {
                    PointF firstPoint = (PointF)info.GetValue("FirstPoint", typeof(PointF));
                    PointF secondPoint = (PointF)info.GetValue("SecondPoint", typeof(PointF));
                    PointF thirdPoint = (PointF)info.GetValue("ThirdPoint", typeof(PointF));

                    PointF[] points = new PointF[] { firstPoint, secondPoint, thirdPoint };

                    this.Points.ClearAndAddRange(points);
                }
                catch
                {
                }

                //
                this.Location = (PointF)info.GetValue("Location", typeof(PointF));

                this.FillBrush = new AnnotationSolidBrush(Color.Transparent);
                this.Border = true;
                this.Outline.DashStyle = AnnotationPenDashStyle.Solid;
            }
        }

        #endregion



        #region Methods

        /// <summary>
        /// Creates a new object that is a copy of the current instance.
        /// </summary>
        /// <returns>A new object that is a copy of this instance.</returns>
        public override object Clone()
        {
            TriangleAnnotationData result = new TriangleAnnotationData();
            CopyTo(result);
            return result;
        }


        #region ISerializable Members

        /// <summary>
        /// Populates a SerializationInfo with the data needed to serialize the target object.
        /// </summary>
        /// <param name="info">The SerializationInfo to populate with data.</param>
        /// <param name="context">The destination for this serialization.</param>
        [SecurityPermission(SecurityAction.LinkDemand, Flags = SecurityPermissionFlag.SerializationFormatter)]
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            if (info == null)
                throw new ArgumentNullException("info");

            int sdkVersion = 70;
            if (context.Context is int)
                sdkVersion = (int)context.Context;

            if (sdkVersion >= 70)
            {
                base.GetObjectData(info, context);
            }
            else
            {
                info.AddValue("Guid", this.Guid);
                info.AddValue("CreationTime", this.CreationTime);
                info.AddValue("ModifiedTime", this.ModifiedTime);

                info.AddValue("Location", this.Location);
                info.AddValue("Rotation", this.Rotation);
                info.AddValue("Size", this.Size);
                info.AddValue("Visible", this.IsVisible);
                info.AddValue("HorizontalMirrored", this.HorizontalMirrored);
                info.AddValue("VerticalMirrored", this.VerticalMirrored);

                info.AddValue("Border", this.Border);

                info.AddValue("ZOrder", (int)0);
                info.AddValue("BackColor", Color.Black);

                info.AddValue("Outline", this.Outline);
                info.AddValue("ToolTip", this.ToolTip);

                if (sdkVersion >= 43)
                    info.AddValue("Name", this.Name);

                info.AddValue("FirstPoint", PointF.Empty);
                info.AddValue("SecondPoint", PointF.Empty);
                info.AddValue("ThirdPoint", PointF.Empty);
            }
        }

        #endregion

        #endregion

    }
}