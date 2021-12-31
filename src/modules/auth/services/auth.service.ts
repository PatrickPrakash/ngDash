import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import {
  HandleError,
  HttpErrorHandlerService,
} from 'src/modules/core/services/http-error-handler.service';
import { user } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Variables
  apiendpoint = 'https://serene-hollows-11661.herokuapp.com/api/v1';
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService,
    private router: Router
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('AuthHandler');
  }

  /** SIGNUP: Post request function for signup auth */

  signUp(userModel: user): Observable<user> {
    return this.http
      .post<user>(`${this.apiendpoint}/signup`, userModel, httpOptions)
      .pipe(catchError(this.handleError('signup', userModel)));
  }

  /** SIGNIN: Post request function for signin auth */

  signIn(userModel: user): Observable<user> {
    return this.http
      .post<user>(`${this.apiendpoint}/signin`, userModel, httpOptions)
      .pipe(catchError(this.handleError('signin', userModel)));
  }

  isLoggedIn(): boolean {
    let authToken = sessionStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  getToken() {
    return sessionStorage.getItem('access_token');
  }

  logOut() {
    let removeToken = sessionStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/signin']);
    }
  }
}
