import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashImagePreviewComponent } from './dash-image-preview.component';

describe('DashImagePreviewComponent', () => {
  let component: DashImagePreviewComponent;
  let fixture: ComponentFixture<DashImagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashImagePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
