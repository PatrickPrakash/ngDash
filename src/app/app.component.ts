import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {
  MatSlideToggle,
  MatSlideToggleChange,
} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
  isChecked: boolean = false;

  @ViewChild('parent') parent: any;

  run(event: MatSlideToggleChange): void {
    this.isChecked = event.checked;
    if (this.isChecked) {
      this.renderer.addClass(this.parent.nativeElement, 'dark-theme');
    } else {
      this.renderer.removeClass(this.parent.nativeElement, 'dark-theme');
    }
  }
}
