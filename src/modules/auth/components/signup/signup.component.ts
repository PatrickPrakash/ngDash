import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/my-error-state-matcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  emailHolder = new FormControl('', [Validators.required, Validators.email]);
  passwordHolder = new FormControl('',[Validators.required, Validators.minLength(5)]);

  matcher = new MyErrorStateMatcher();


  ngOnInit(): void {
  }

  Submit()
  {
    
  }

}
