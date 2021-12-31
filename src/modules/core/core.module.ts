import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorHandlerService } from './services/http-error-handler.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [HttpErrorHandlerService],
})
export class CoreModule {}
