import { Component, OnInit } from '@angular/core';
import { TariffDetails } from '../../models/tariff-details';
import { TariffMockDetails } from '../../models/tariff-mock-data';
@Component({
  selector: 'app-tariff-display-update',
  templateUrl: './tariff-display-update.component.html',
  styleUrls: ['./tariff-display-update.component.scss'],
})
export class TariffDisplayUpdateComponent {
  constructor() {}

  tariffMockDetails = TariffMockDetails;
}
