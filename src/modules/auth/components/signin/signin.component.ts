import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/my-error-state-matcher';
MyErrorStateMatcher;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

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
    
  }
}
