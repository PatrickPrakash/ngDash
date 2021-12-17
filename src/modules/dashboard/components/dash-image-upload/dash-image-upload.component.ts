import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../../services/data.service';
import { FileUploadService } from '../../services/file-upload.service';
@Component({
  selector: 'app-dash-image-upload',
  templateUrl: './dash-image-upload.component.html',
  styleUrls: ['./dash-image-upload.component.scss'],
})
export class DashImageUploadComponent implements OnInit {
  public $imageUrl = new BehaviorSubject<string>('');
  selectedFiles: any;
  constructor(
    private fileUploadService: FileUploadService,
    private dataService: DataService
  ) {}

  imageUrl: string = '';

  ngOnInit(): void {}

  @Output()
  getImage = new EventEmitter<string>();

  selectFile(event: Event): void {
    this.selectedFiles = (event.target as HTMLInputElement).files;
  }

  uploadFile(): void {
    let file: File = this.selectedFiles[0];
    this.fileUploadService.uploadImage(file).subscribe({
      next: (body) => {
        this.imageUrl = body;
        console.log('Next', this.imageUrl);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
        this.dataService.setImage(this.imageUrl);
        this.getImage.emit(this.imageUrl);
      },
    });
  }
}
