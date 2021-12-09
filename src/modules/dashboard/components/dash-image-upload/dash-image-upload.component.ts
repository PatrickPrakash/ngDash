import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-image-upload',
  templateUrl: './dash-image-upload.component.html',
  styleUrls: ['./dash-image-upload.component.scss'],
})
export class DashImageUploadComponent implements OnInit {
  selectedFiles: any;
  constructor() {}

  ngOnInit(): void {}

  selectFile(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement).files;
  }

  uploadFile(): void {
    let file = this.selectedFiles[0];
    let token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXZsaSIsInN1YiI6IjYxYTYxNmVlNjUxMzNlMDAxOGQzYzUwMyIsImlhdCI6MTYzODM0OTcxMjM2MiwiZXhwIjoxNjM4NDM2MTEyMzYyfQ.BemaM1106lZSNXBy9OqTORm9jW-aIgcipkg5GlUJ4t0';
  }
}
