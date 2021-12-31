import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

//Type of the function return by the httpErrorHandler Service
export type HandleError = <T>(
  operation?: string,
  result?: T
) => (error: HttpErrorResponse) => Observable<T>;

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerService {
  constructor() {}

  createHandleError = (serviceName = '') => {
    return <T>(operation = 'operation', result = {} as T) =>
      this.handleError(serviceName, operation, result);
  };

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error); // log the error to console

      const message =
        error.error instanceof ErrorEvent
          ? error.error.message
          : `server returned code ${error.status} with body "${error.error}"`;

      console.log(message);

      return of(result);
    };
  }
}
