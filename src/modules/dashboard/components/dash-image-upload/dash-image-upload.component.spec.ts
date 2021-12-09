import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashImageUploadComponent } from './dash-image-upload.component';

describe('DashImageUploadComponent', () => {
  let component: DashImageUploadComponent;
  let fixture: ComponentFixture<DashImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashImageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
