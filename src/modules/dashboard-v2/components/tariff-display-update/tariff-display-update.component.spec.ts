import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffDisplayUpdateComponent } from './tariff-display-update.component';

describe('TariffDisplayUpdateComponent', () => {
  let component: TariffDisplayUpdateComponent;
  let fixture: ComponentFixture<TariffDisplayUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariffDisplayUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffDisplayUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
