import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { DashImageComponent } from './dash-image/dash-image.component';

@NgModule({
  declarations: [
    ImagePreviewComponent,
    ImageUploadComponent,
    DashImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [ImagePreviewComponent,ImageUploadComponent,DashImageComponent],
  providers: []
})
export class DashModule { }
