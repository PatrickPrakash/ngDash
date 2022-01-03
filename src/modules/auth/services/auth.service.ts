import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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
  constructor(private http: HttpClient, private router: Router) {}

  /** SIGNUP: Post request function for signup auth */

  signUp(userModel: user): Observable<user> {
    return this.http.post<user>(
      `${environment.apiendpoint}/signup`,
      userModel,
      httpOptions
    );
  }

  /** SIGNIN: Post request function for signin auth */

  signIn(userModel: user): Observable<user> {
    return this.http.post<user>(
      `${environment.apiendpoint}/signin`,
      userModel,
      httpOptions
    );
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
