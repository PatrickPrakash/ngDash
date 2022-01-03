import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { ToastService } from 'src/modules/core/services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerService {
  constructor(private toastService: ToastService) {}

  public handleError(err: HttpErrorResponse) {
    let errMessage: string;
    if (err.error instanceof ErrorEvent) {
      errMessage = `An error occured ${err.error.message}`;
    } else {
      errMessage =
        'Server is unreachable at the moment!. Check your internet connection';
    }

    this.toastService.openSnackBar(errMessage);
  }
}
