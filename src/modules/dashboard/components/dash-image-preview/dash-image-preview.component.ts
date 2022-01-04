import { Component, Input, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-dash-image-preview',
  templateUrl: './dash-image-preview.component.html',
  styleUrls: ['./dash-image-preview.component.scss'],
})
export class DashImagePreviewComponent implements OnInit {
  constructor() {}

  @Input()
  imageUrl: string = '';

  @Input()
  progressBarValue: number = 0;

  ngOnInit(): void {}
}
