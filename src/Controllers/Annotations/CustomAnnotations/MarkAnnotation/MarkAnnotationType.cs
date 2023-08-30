namespace AspNetCoreAngularDocumentViewerDemo.Controllers
{
    /// <summary>
    /// Specifies the available types of mark annotation.
    /// </summary>
    public enum MarkAnnotationType : int
    {
        /// <summary>
        /// The rectangle.
        /// </summary>
        Rectangle = 0,

        /// <summary>
        /// The tick.
        /// </summary>
        Tick = 1,

        /// <summary>
        /// The star.
        /// </summary>
        Star = 2,

        /// <summary>
        /// The cross.
        /// </summary>
        Cross = 3,
    }
}
