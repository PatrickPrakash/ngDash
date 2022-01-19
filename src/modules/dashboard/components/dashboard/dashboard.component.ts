import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/modules/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  imageUrl: string = '';
  progressBarValue = 0;

  ngOnInit(): void {}

  logOut() {
    this.authService.logOut();
  }

  getSetImage(event: string): void {
    this.imageUrl = event;
  }

  setProgress(progressNumber: number): void {
    this.progressBarValue = progressNumber;
  }
}
