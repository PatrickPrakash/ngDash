import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  $getImageUrl = new BehaviorSubject<string>('');

  setImage(imageUrl: string): void {
    this.$getImageUrl.next(imageUrl);
    this.$getImageUrl.subscribe();
    // console.log('image url', this.imageUrl);
  }

  // getImage(): string {
  //   return this.imageUrl;
  // }

  getImage(): string {
    return this.$getImageUrl.getValue();
  }
}
