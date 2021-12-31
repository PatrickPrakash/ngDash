import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {
  HandleError,
  HttpErrorHandlerService,
} from 'src/modules/core/services/http-error-handler.service';
import { fileModel } from '../models/fileModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  APIENDPOINT = 'https://ngdash-server.herokuapp.com/upload';
  private handleError: HandleError;

  constructor(
    private httpClient: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError =
      this.httpErrorHandler.createHandleError('FileUploadHandler');
  }

  uploadImage(file: File): Observable<any> {
    let formData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', this.APIENDPOINT, formData, {
      reportProgress: true,
      responseType: 'text',
    });

    return this.httpClient.post(this.APIENDPOINT, formData, {
      observe: 'body',
      responseType: 'text',
      reportProgress: true,
    });
  }
}
