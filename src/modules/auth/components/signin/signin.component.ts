import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/modules/core/services/toast.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  signInForm = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^[a-zA-Z0-9.]+@[a-zA-Z0-9]+(-)?[a-zA-Z0-9]+(.)?[a-zA-Z0-9]{2,6}?.[a-zA-Z]{2,6}$'
      ),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  public errorHandling = (control: string, error: string) => {
    return this.signInForm?.controls[control].hasError(error);
  };

  ngOnInit(): void {
    //Logging any existing token
  }

  Submit() {
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value).subscribe({
        next: (value: any) => {
          if (
            (value.email == '' && value.password == '') ||
            value.email == '' ||
            value.password == ''
          ) {
            this.toastService.openSnackBar('Enter valid Credentials!');
          } else {
            this.toastService.openSnackBar('Signed In Successfully');
            sessionStorage.setItem('access_token', value.token);
            this.router.navigateByUrl('/dashboardv2');
          }
        },
        error: (err) => {
          console.warn(err);
        },
      });
    }
  }
}
