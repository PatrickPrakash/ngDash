import { Component, OnInit } from '@angular/core';
import { TariffDetails } from '../../models/tariff-details';
import { TariffMockDetails } from '../../models/tariff-mock-data';
import { TariffService } from '../../services/tariff.service';
@Component({
  selector: 'app-tariff-display-update',
  templateUrl: './tariff-display-update.component.html',
  styleUrls: ['./tariff-display-update.component.scss'],
})
export class TariffDisplayUpdateComponent implements OnInit {
  tariffMockDetails: TariffDetails[] | undefined;


  constructor(private tariffService: TariffService) {}
  ngOnInit(): void {
    console.log(this.tariffMockDetails);
    this.tariffService.tariffData.subscribe((data) => {
      (this.tariffMockDetails = data), console.log(this.tariffMockDetails);
    });
  }

  removeItem(data: any): void {
    this.tariffMockDetails?.splice(this.tariffMockDetails.indexOf(data), 1);
  }

  handleDataChange(event: any, type: any, item: any): void {
    switch (type) {
      case 'zone':
        this.tariffMockDetails!![item].zone = event.target.value;
        this.tariffService.updateData(this.tariffMockDetails);
        break;
      case 'country':
        this.tariffMockDetails!![item].country = event.target.value;
        this.tariffService.updateData(this.tariffMockDetails);
        break;
      case 'network_operator':
        this.tariffMockDetails!![item].network_operator = event.target.value;
        this.tariffService.updateData(this.tariffMockDetails);
        break;

      case 'network_code':
        this.tariffMockDetails!![item].network_code = event.target.value;
        this.tariffService.updateData(this.tariffMockDetails);
        break;

      case 'increment_type':
        this.tariffMockDetails!![item].increment_type = event.target.value;
        this.tariffService.updateData(this.tariffMockDetails);
        break;

      default:
    }
  }
}
