import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: 
  [
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
