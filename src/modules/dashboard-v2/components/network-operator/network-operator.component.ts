import { Component, OnInit } from '@angular/core';
import { networkOperator } from '../../models/network-operator-data';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-network-operator',
  templateUrl: './network-operator.component.html',
  styleUrls: ['./network-operator.component.scss'],
})
export class NetworkOperatorComponent {
  constructor(private fb: FormBuilder) {}

  network_operator_data: networkOperator = {
    network_operator: '',
    zone_details: [
      {
        zoneName: 'A',
        zonePrice: 10,
      },
      {
        zoneName: 'A',
        zonePrice: 100,
      },
      {
        zoneName: 'A',
        zonePrice: 1000,
      },
      {
        zoneName: 'A',
        zonePrice: 10000,
      },
      {
        zoneName: 'A',
        zonePrice: 100000,
      },
    ],
  };

  networkOperatorForm = this.fb.group({
    network_operator: [''],
    zone_details: this.fb.group({
      zoneName: [''],
      zonePrice: [''],
    }),
  });

  logData(): void {
    // Set the data from form
    this.network_operator_data.network_operator =
      this.networkOperatorForm.get('network_operator')?.value;
    // Push the data to the array
    this.network_operator_data.zone_details.push(
      this.networkOperatorForm.get('zone_details')?.value
    );
  }

  deleteDataItem(data: any): void {
    this.network_operator_data.zone_details.splice(
      this.network_operator_data.zone_details.indexOf(data),
      1
    );
  }
}
