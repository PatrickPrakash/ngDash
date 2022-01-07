import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffUploadComponent } from './tariff-upload.component';

describe('TariffUploadComponent', () => {
  let component: TariffUploadComponent;
  let fixture: ComponentFixture<TariffUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
