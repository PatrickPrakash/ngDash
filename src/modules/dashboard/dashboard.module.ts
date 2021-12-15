import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { DashImagePreviewComponent } from './components/dash-image-preview/dash-image-preview.component';
import { DashImageUploadComponent } from './components/dash-image-upload/dash-image-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashImagePreviewComponent,
    DashImageUploadComponent,
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    MaterialModule,
    HttpClientModule,
    CoreModule,
  ],
})
export class DashboardModule {}
