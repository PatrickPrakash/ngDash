import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-image-preview',
  templateUrl: './dash-image-preview.component.html',
  styleUrls: ['./dash-image-preview.component.scss'],
})
export class DashImagePreviewComponent implements OnInit {
  constructor() {}

  @Input()
  imageUrl: string = '';

  ngOnInit(): void {}
}
