import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
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

  uploadImage(file: File): Observable<any> {
    let formData = new FormData();
    formData.append('file', file);

    return this.httpClient.post(environment.APIENDPOINT, formData, {
      observe: 'body',
      responseType: 'text',
      reportProgress: true,
    });
  }
}
