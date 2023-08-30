using System.Collections.Generic;
using System.Globalization;
using System.Text;
using Vintasoft.Imaging.Annotation;
using Vintasoft.Imaging.Annotation.Web.Services;


namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// A custom formatter for serializing annotations to and from Vintasoft JSON format.
    /// </summary>
    public class CustomAnnotationJsonFormatter : AnnotationJsonFormatter
    {

        /// <summary>
        /// Serializes an annotation data to a JSON string.
        /// </summary>
        /// <param name="annotationData">Annotation data to serialize.</param>
        /// <returns>
        /// The annotation data as JSON string.
        /// </returns>
        protected override string SerializeAnnotationData(AnnotationData annotationData)
        {
            // get JSON string with information about properties of base annotation data
            string jsonStringWithAnnoData = base.SerializeAnnotationData(annotationData);

            StringBuilder sb = new StringBuilder(jsonStringWithAnnoData);
            // if triangle annotation is serializing
            if (annotationData is TriangleAnnotationData)
            {
                sb.Append(", ");
                SerializeLinesAnnotationData(annotationData as LinesAnnotationData, sb);
                sb.Append(", ");
                sb.Append(string.Format("\"type\": \"{0}\"", "TriangleAnnotation"));
            }
            // if mark annotation is serializing
            else if (annotationData is MarkAnnotationData)
            {
                MarkAnnotationData markAnnotation = annotationData as MarkAnnotationData;
                sb.Append(", ");
                sb.Append(string.Format("\"markType\": \"{0}\" ", markAnnotation.MarkType));
                sb.Append(", ");
                sb.Append(string.Format("\"type\": \"{0}\"", "MarkAnnotation"));
            }
            // return annotation data serialized as JSON string
            return sb.ToString();
        }

        /// <summary>
        /// Deserializes an annotation data from JSON string
        /// </summary>
        /// <param name="annotationInfo">Dictionary that contains information about names and values
        /// of annotation properties.</param>
        /// <returns>
        /// The annotation data.
        /// </returns>
        protected override AnnotationData DeserializeAnnotationData(Dictionary<string, object> annotationInfo)
        {
            // deserialize annotation data
            AnnotationData annotationData = base.DeserializeAnnotationData(annotationInfo);

            // if annotation data was not deserialized
            if (annotationData == null)
            {
                string type = annotationInfo["type"].ToString();
                switch (type)
                {
                    case "MarkAnnotation":
                        annotationData = new MarkAnnotationData();
                        string markType = annotationInfo["markType"].ToString();
                        int markTypeInt = int.Parse(markType, CultureInfo.InvariantCulture);
                        (annotationData as MarkAnnotationData).MarkType = (MarkAnnotationType)markTypeInt;
                        DeserializeAnnotationProperties(annotationData, annotationInfo);
                        break;

                    case "TriangleAnnotation":
                        annotationData = new TriangleAnnotationData();
                        DeserializeLinesAnnotation(annotationData as LinesAnnotationData, annotationInfo);
                        break;
                }
            }
            // return annotation data
            return annotationData;
        }

    }
}