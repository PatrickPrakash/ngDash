import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';
@Component({
  selector: 'app-dash-image-upload',
  templateUrl: './dash-image-upload.component.html',
  styleUrls: ['./dash-image-upload.component.scss'],
})
export class DashImageUploadComponent implements OnInit {
  selectedFiles: any;
  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void {}

  selectFile(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement).files;
  }

  uploadFile(): void {
    let file: File = this.selectedFiles[0];
    this.fileUploadService.uploadImage(file).subscribe({
      next: (value) => {
        console.log('Next value ' + value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
