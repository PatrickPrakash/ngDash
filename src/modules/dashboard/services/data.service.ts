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
  }

  getImage(): string {
    return this.$getImageUrl.getValue();
  }
}
