import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/**
 A helper that helps to open file.
*/
export class OpenFileHelper {

  _docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS;
  _fileId: string = '';
  _showErrorMessageFunc: Function;



  constructor(private modalService: NgbModal, docViewer: Vintasoft.Imaging.DocumentViewer.WebDocumentViewerJS, showErrorMessageFunc: Function) {
    this._docViewer = docViewer;
    this._showErrorMessageFunc = showErrorMessageFunc;
  }



  /**
   * Opens the default image file in image viewer.
   * @param fileId The identifier of default image file.
   */
  openDefaultImageFile(fileId: string) {
    if (fileId == null || fileId === "")
      throw new Error("The identifier of default image file cannot be null or empty.");

    var that = this;


    /**
     * Request for opening the file is executed successfully.
     * @param data Information about opened file.
     */
    function __openFile_success(data: any) {
    }

    /**
     * Request for opening the file is failed.
     * @param data Information about error.
     */
    function __openFile_error(data: any) {
      // copy the file from global folder to the session folder
      Vintasoft.Imaging.VintasoftFileAPI.copyFile("UploadedImageFiles/" + that._fileId, __onCopyFile_success, __onCopyFile_error);
    }

    /**
     * Request for copying of file is executed successfully.
     * @param data Information about copied file.
     */
    function __onCopyFile_success(data: any) {
      // get image viewer
      let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = that._docViewer.get_ImageViewer();
      // open file from session folder and add images from file to the image viewer
      imageViewer.get_Images().openFile(data.fileId);
    }

    /**
     * Request for copying of file is failed.
     * @param data Information about error.
     */
    function __onCopyFile_error(data: any) {
      that._showErrorMessageFunc(data);
    }


    this._fileId = fileId;
    let imageViewer: Vintasoft.Imaging.UI.WebImageViewerJS = this._docViewer.get_ImageViewer();
    // try to open file from session folder and add images from file to the image viewer
    imageViewer.get_Images().openFile(this._fileId, __openFile_success, __openFile_error);
  }

}
