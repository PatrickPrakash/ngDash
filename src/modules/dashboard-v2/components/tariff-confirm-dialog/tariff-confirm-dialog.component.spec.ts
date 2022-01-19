import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffConfirmDialogComponent } from './tariff-confirm-dialog.component';

describe('TariffConfirmDialogComponent', () => {
  let component: TariffConfirmDialogComponent;
  let fixture: ComponentFixture<TariffConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffConfirmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
