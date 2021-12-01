import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';

import { HttpService } from './http.service';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports : [
    SigninComponent,
    SignupComponent,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher,},
    {provide: HttpService}
  ]
})
export class AuthModule { }
