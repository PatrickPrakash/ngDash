import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastService } from 'src/modules/core/services/toast.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastService: ToastService
  ) {}

  public errorHandling = (control: string, error: string) => {
    return this.signUpForm?.controls[control].hasError(error);
  };

  signUpForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {}

  Submit() {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value).subscribe({
        next: (value) => {
          if (
            (value.email == '' && value.password == '') ||
            value.email == '' ||
            value.password == ''
          ) {
            this.toastService.openSnackBar('Enter valid credentials!');
          } else {
            this.toastService.openSnackBar('Signed Up Successfully');
            this.router.navigateByUrl('/signin');
          }
        },
        error: (err) => {
          console.warn(err);
        },
      });
    }
  }
}
