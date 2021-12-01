import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  selectedFiles: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectFile(event: Event) : void {
    this.selectedFiles = (event.target as HTMLInputElement).files;
}

}
