import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'error-message-dialog-content',
  templateUrl: './error-message-dialog.html'
})
export class ErrorMessageDialogContent {

  public errorData: any;


  constructor(public activeModal: NgbActiveModal) {
  }


  ngOnInit() {
    let htmlMarkup: string = '';
    if (typeof this.errorData == "string") {
      htmlMarkup = this.errorData;
    }
    else if (typeof this.errorData == "object") {
      if (this.errorData.errorMessage != undefined) {
        htmlMarkup = this.errorData.errorMessage;
      }
      else if (this.errorData.error != undefined) {
        htmlMarkup = this.errorData.error;
      }
      else if (this.errorData.responseJSON != undefined) {
        if (this.errorData.responseJSON.Message != null && this.errorData.responseJSON.MessageDetail != null) {
          htmlMarkup = this.errorData.responseJSON.Message + "<br /><br />" + this.errorData.responseJSON.MessageDetail;
        }
        else {
          htmlMarkup = this.errorData.responseJSON.ExceptionMessage;
        }
      }
      else if (this.errorData.responseText != undefined) {
        if (this.errorData.responseText.Message != undefined && this.errorData.responseText.MessageDetail != undefined) {
          htmlMarkup = this.errorData.responseText.Message + "<br /><br />" + this.errorData.responseText.MessageDetail;
        }
        else {
          htmlMarkup = this.errorData.responseText;
        }
      }
      else {
        htmlMarkup = "Unknown error";
      }
    }

    let errorMessageElement: HTMLElement | null = document.getElementById("errorMessage");
    if (errorMessageElement != null)
      errorMessageElement.innerHTML = htmlMarkup;
    else
      alert(htmlMarkup);
  }

  /**
   Closes the dialog.
   */
  public closeDialog() {
    this.activeModal.close();
  }

}


@Component({
  selector: 'error-message-dialog',
  templateUrl: './error-message-dialog.html'
})
export class ErrorMessageDialog {

  public errorData: any;
  private _modalReference: NgbModalRef | null;


  constructor(private modalService: NgbModal) {
    this._modalReference = null;
  }


  public open() {
    this._modalReference = this.modalService.open(ErrorMessageDialogContent);
    this._modalReference.componentInstance.errorData = this.errorData;
  }

  /**
   Closes the dialog.
  */
  public closeDialog() {
    if (this._modalReference != null)
      this._modalReference.componentInstance.closeDialog();
  }

}
