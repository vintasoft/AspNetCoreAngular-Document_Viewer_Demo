using System;
using System.Drawing;

namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary> 
    /// Annotations math.
    /// </summary>
    internal static class AnnotationsMath
    {
     
        internal static RectangleF GetBoundingBox(PointF[] points)
        {
            if (points.Length == 0)
                return RectangleF.Empty;
            float x1, x2, y1, y2;
            x1 = x2 = points[0].X;
            y1 = y2 = points[0].Y;
            for (int i = 1; i < points.Length; i++)
            {
                float x = points[i].X;
                float y = points[i].Y;
                if (x1 > x)
                    x1 = x;
                if (x2 < x)
                    x2 = x;
                if (y1 > y)
                    y1 = y;
                if (y2 < y)
                    y2 = y;
            }
            return new RectangleF(x1, y1, x2 - x1, y2 - y1);
        }

        internal static void RotatePointsAt(PointF[] points, PointF atPoint, float alpha)
        {
            float sin = (float)Math.Sin(-GradToRad(alpha));
            float cos = (float)Math.Cos(-GradToRad(alpha));
            float x, y;
            for (int i = 0; i < points.Length; i++)
            {
                x = points[i].X - atPoint.X;
                y = points[i].Y - atPoint.Y;
                points[i].X = x * cos + y * sin + atPoint.X;
                points[i].Y = -x * sin + y * cos + atPoint.Y;
            }
        }

        internal static void TranslatePoints(PointF[] points, float dx, float dy)
        {
            for (int i = 0; i < points.Length; i++)
            {
                points[i].X += dx;
                points[i].Y += dy;
            }
        }

        internal static float GradToRad(float grad)
        {
            return (float)(Math.PI / 180.0) * grad;
        }

        internal static void ScalePoints(PointF[] points, float sx, float sy)
        {
            for (int i = 0; i < points.Length; i++)
            {
                points[i].X *= sx;
                points[i].Y *= sy;
            }
        }

    }
}
