import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/auth/http.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  selectedFiles: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  selectFile(event: Event) : void {
    this.selectedFiles = (event.target as HTMLInputElement).files;
}

  uploadFile() : void
  {
    let file = this.selectedFiles[0]
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjYXZsaSIsInN1YiI6IjYxYTYxNmVlNjUxMzNlMDAxOGQzYzUwMyIsImlhdCI6MTYzODM0OTcxMjM2MiwiZXhwIjoxNjM4NDM2MTEyMzYyfQ.BemaM1106lZSNXBy9OqTORm9jW-aIgcipkg5GlUJ4t0';
    this.httpService.fileUpload(file,token).subscribe( res => console.log(res.toString))
  }


}
