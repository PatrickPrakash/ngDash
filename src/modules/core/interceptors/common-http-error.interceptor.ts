import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { ToastService } from 'src/modules/core/services/toast.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class CommonHttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastService: ToastService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errMessage = '';
        if (error.error instanceof ErrorEvent) {
          errMessage = `An error occured ${error.error.message}`;
          this.toastService.openSnackBar(errMessage);
        } else {
          // Handle Multiple Backend Error Responses
          switch (error.status) {
            case 400:
              errMessage = 'Bad Request';
              break;
            case 401:
              errMessage = 'You must be logged in (Unauthorized Request)';
              break;
            case 402:
              errMessage = 'You are Unauthorized to request this permission';
              break;
            case 403:
              errMessage = 'Invalid Credentials';
              break;
            case 500:
              errMessage = 'Internal Server Error';
              break;
            case 422:
              errMessage = 'Server Validation Error';
              break;
            default:
              errMessage = 'Something unexpected occured';
          }
          if (errMessage) {
            this.toastService.openSnackBar(errMessage); // If server returned a error message and if error message exist thm display toast.
          }
        }
        return throwError(() => new Error(errMessage)); // Throw a error messsage to console
      })
    );
  }
}
