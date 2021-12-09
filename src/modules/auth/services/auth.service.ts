import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('AuthHandler');
  }

  /* SIGNUP: Send the post request for signup auth */

  signUp(userModel: user): Observable<user> {
    return this.http
      .post<user>(`${this.apiendpoint}/signup`, userModel, httpOptions)
      .pipe(catchError(this.handleError('signup', userModel)));
  }
}
