import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ImagePreviewComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ImagePreviewComponent,ImageUploadComponent]
})
export class DashModule { }
