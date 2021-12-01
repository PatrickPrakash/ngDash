import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthModel } from './auth-model.Auth';

import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';


let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  signUpUrl = 'https://serene-hollows-11661.herokuapp.com/api/v1/signup';

  signInUrl = 'https://serene-hollows-11661.herokuapp.com/api/v1/signin';

  fileUploadUrl = 'https://serene-hollows-11661.herokuapp.com/api/v1/upload';


  constructor(private http: HttpClient) { }

  signUp(authModel:  any)
  {
    
    return this.http.post<any>(this.signUpUrl,authModel,httpOptions).pipe( catchError(err => of(`${err}`)) );
  }

    
    fileUpload(file: File, token: string)
    {

      httpOptions.headers = httpOptions.headers.set('Authorization', token);

      return this.http.post<File>(this.fileUploadUrl,file,httpOptions).pipe(catchError(err => of(`${err}`)))

    }

  }

