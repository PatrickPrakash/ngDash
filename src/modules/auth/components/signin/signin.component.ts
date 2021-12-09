import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/modules/core/services/toast.service';
import { AuthService } from '../../services/auth.service';
import { MyErrorStateMatcher } from '../../shared/my-error-state-matcher';
MyErrorStateMatcher;

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
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  public errorHandling = (control: string, error: string) => {
    return this.signInForm?.controls[control].hasError(error);
  };

  ngOnInit(): void {}

  Submit() {
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value).subscribe({
        next: (value: any) => {
          console.log(value);
          if (
            (value.email == '' && value.password == '') ||
            value.email == '' ||
            value.password == ''
          ) {
            this.toastService.openSnackBar('Signed In failed');
          } else {
            this.toastService.openSnackBar('Signed In Successfully');
            localStorage.setItem('access_token', value.token);
            console.log(value.token);
            this.router.navigateByUrl('/dashboard');
          }
        },
        error: (err) => {
          console.warn(err);
          this.toastService.openSnackBar(
            'Login failed - Unexpected error occured'
          );
        },
      });
    }
  }
}
