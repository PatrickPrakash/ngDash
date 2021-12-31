import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { CoreModule } from '../core/core.module';
import { HttpErrorHandlerService } from '../core/services/http-error-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from '../core/services/toast.service';
@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [AuthService, HttpErrorHandlerService, ToastService],
})
export class AuthModule {}
