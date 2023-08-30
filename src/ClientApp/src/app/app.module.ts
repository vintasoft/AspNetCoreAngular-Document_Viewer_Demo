import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DocumentViewerDemoComponent } from './document-viewer-demo/document-viewer-demo';

import { ImageViewerSettingsDialog, ImageViewerSettingsDialogContent } from './dialogs/image-viewer-settings-dialog';
import { AnnotationSettingsDialog, AnnotationSettingsDialogContent } from './dialogs/annotation-settings-dialog';
import { BlockUiDialog, BlockUiDialogContent } from './dialogs/block-ui-dialog';
import { ErrorMessageDialog, ErrorMessageDialogContent } from './dialogs/error-message-dialog';

@NgModule({
  declarations: [
    AppComponent,
    DocumentViewerDemoComponent,
    ImageViewerSettingsDialog,
    ImageViewerSettingsDialogContent,
    AnnotationSettingsDialog,
    AnnotationSettingsDialogContent,
    BlockUiDialog,
    BlockUiDialogContent,
    ErrorMessageDialog,
    ErrorMessageDialogContent
  ],
  entryComponents: [
    ImageViewerSettingsDialog,
    ImageViewerSettingsDialogContent,
    AnnotationSettingsDialog,
    AnnotationSettingsDialogContent,
    BlockUiDialog,
    BlockUiDialogContent,
    ErrorMessageDialog,
    ErrorMessageDialogContent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DocumentViewerDemoComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
