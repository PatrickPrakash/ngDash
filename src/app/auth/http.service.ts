import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthModel } from './auth-model.Auth';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200/'
  })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  signUpUrl = 'https://serene-hollows-11661.herokuapp.com/api/v1/signup';

  signInUrl = 'https://serene-hollows-11661.herokuapp.com/api/v1/signin';



  constructor(private http: HttpClient) { }

  signUp(authModel:  any)
  {
    // let body = new HttpParams();
    // body.append('email',email)
    // body.append('password',password);
    //console.log(body.toString());

    return this.http.post<any>(this.signUpUrl,authModel,httpOptions).pipe( catchError(err => of(`${err}`)) );
    }
  }

