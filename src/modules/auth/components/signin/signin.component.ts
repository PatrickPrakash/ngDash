import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/my-error-state-matcher';
MyErrorStateMatcher;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor() {}

  emailHolder = new FormControl('', [Validators.required, Validators.email]);
  passwordHolder = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {}

  Submit() {}
}
