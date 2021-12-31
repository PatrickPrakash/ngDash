import { Component, Renderer2, ViewChild } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private renderer: Renderer2) {}
  isChecked: boolean = false;
  whichMode: string = 'light_mode';

  @ViewChild('parent') parent: any;

  run(event: MatSlideToggleChange): void {
    this.isChecked = event.checked;
    if (this.isChecked) {
      this.renderer.addClass(this.parent.nativeElement, 'dark-theme');
      this.renderer.addClass(document.body, 'dark-background');
      this.whichMode = 'dark_mode';
    } else {
      this.renderer.removeClass(this.parent.nativeElement, 'dark-theme');
      this.renderer.removeClass(document.body, 'dark-background');
      this.whichMode = 'light_mode';
    }
  }

}
