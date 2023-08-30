import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'block-ui-dialog-content',
  templateUrl: './block-ui-dialog.html'
})
export class BlockUiDialogContent {

  public message: object | null;


  constructor(public activeModal: NgbActiveModal) {
    this.message = null;
  }

}


@Component({
  selector: 'block-ui-dialog',
  templateUrl: './block-ui-dialog.html'
})
export class BlockUiDialog {

  public message: string | null;
  private _modalReference: NgbModalRef | null;


  constructor(private modalService: NgbModal) {
    this.message = null;
    this._modalReference = null;
  }


  public open() {
    // create options, which prevents dialog from closing by mouse click and ESC key, for modal dialog
    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    // create and open dialog
    this._modalReference = this.modalService.open(BlockUiDialogContent, ngbModalOptions);
    this._modalReference.componentInstance.message = this.message;
  }

  public close() {
    if (this._modalReference != null)
      this._modalReference.close();
  }

}
