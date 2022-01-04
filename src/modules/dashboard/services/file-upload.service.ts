import {
  HttpClient,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, Observable, last, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
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
  constructor(private httpClient: HttpClient) {}

  fileUploadProgress: any;

  getUploadProgress(): number {
    return this.fileUploadProgress;
  }

  uploadImage(file: File): Observable<any> {
    let formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post(environment.APIENDPOINT, formData, {
      reportProgress: true,
      responseType: 'text',
      observe: 'events',
    });
  }
}
