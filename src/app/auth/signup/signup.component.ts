import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HttpService } from '../http.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AuthModel } from '../auth-model.Auth';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  authModel :  AuthModel = {
    email: '',
    password: ''
  };
;
  constructor(private _snackBar: MatSnackBar, private httpService: HttpService) { }

  emailHolder = new FormControl('', [Validators.required, Validators.email]);
  passwordHolder = new FormControl('',[Validators.required, Validators.minLength(5)]);

  matcher = new MyErrorStateMatcher();

 

  Submit(): void {
    // this.email.invalid ? this.openSnackBar('Email you entered is invalid') : this.password.invalid  ? this.openSnackBar('Password you entered is invalid') :  this.email.invalid && this.password.invalid ? this.openSnackBar('Credentials Invalid') : this.httpService.signUp(this.email.value,this.password.value).subscribe(value => console.log(value));
   
    this.authModel!.email = this.emailHolder.value;
    this.authModel!.password = this.passwordHolder.value;

   this.httpService.signUp(this.authModel).subscribe(res => console.log("Response"+res));
    
  }

  openSnackBar(message: string)
  {
    this._snackBar.open(message,'Close', { duration: 5000}); //Snackbar closes quickly need to fix
  }

}
