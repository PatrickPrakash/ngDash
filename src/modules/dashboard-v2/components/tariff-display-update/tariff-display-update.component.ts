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
  tariffDataDetails: TariffDetails[] = [
    {
      zone: '',
      country: '',
      increment_type: '',
      network_code: 0,
      network_operator: '',
    },
  ];

  constructor(private tariffService: TariffService) {}
  ngOnInit(): void {
    this.tariffDataDetails.splice(0, 1); // Remove the first value from the array when component is initialized
    console.log(this.tariffDataDetails);
    this.tariffService.tariffData.subscribe((data) => {
      (this.tariffDataDetails = data), console.log(this.tariffDataDetails);
    });
  }

  removeItem(data: any): void {
    this.tariffDataDetails?.splice(this.tariffDataDetails.indexOf(data), 1);
  }

  addItem(): void {
    this.tariffDataDetails?.push({
      zone: '',
      country: '',
      increment_type: '',
      network_code: 0,
      network_operator: '',
    });
    this.tariffService.updateData(this.tariffDataDetails);
    console.log(this.tariffDataDetails);
  }

  handleDataChange(event: any, type: any, item: any): void {
    switch (type) {
      case 'zone':
        this.tariffDataDetails!![item].zone = event.target.value;
        this.tariffService.updateData(this.tariffDataDetails);
        break;
      case 'country':
        this.tariffDataDetails!![item].country = event.target.value;
        this.tariffService.updateData(this.tariffDataDetails);
        break;
      case 'network_operator':
        this.tariffDataDetails!![item].network_operator = event.target.value;
        this.tariffService.updateData(this.tariffDataDetails);
        break;

      case 'network_code':
        this.tariffDataDetails!![item].network_code = event.target.value;
        this.tariffService.updateData(this.tariffDataDetails);
        break;

      case 'increment_type':
        this.tariffDataDetails!![item].increment_type = event.target.value;
        this.tariffService.updateData(this.tariffDataDetails);
        break;

      default:
    }
  }
}
