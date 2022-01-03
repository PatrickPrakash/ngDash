import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorHandlerService } from './services/http-error-handler.service';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule],
  providers: [HttpErrorHandlerService],
})
export class CoreModule {}
