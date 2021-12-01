import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from '../auth/http.service';
@NgModule({
  declarations: [
    ImagePreviewComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [ImagePreviewComponent,ImageUploadComponent],
  providers: [HttpService]
})
export class DashModule { }
