import { Component, OnInit } from '@angular/core';
import { networkOperator } from '../../models/network-operator-data';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { TariffService } from '../../services/tariff.service';
@Component({
  selector: 'app-network-operator',
  templateUrl: './network-operator.component.html',
  styleUrls: ['./network-operator.component.scss'],
})
export class NetworkOperatorComponent {
  constructor(private fb: FormBuilder, private tariffService: TariffService) {}

  network_operator_data: networkOperator = {
    network_operator: '',
    zone_details: [],
  };

  networkOperatorForm = this.fb.group({
    network_operator: ['', [Validators.required]],
    zone_details: this.fb.group({
      zoneName: ['', [Validators.required]],
      zonePrice: ['', [Validators.required]],
    }),
  });

  addNetworkData(): void {
    //Send the data only when the form is valid
    if (this.networkOperatorForm.valid) {
      // Set the data from form
      this.network_operator_data.network_operator =
        this.networkOperatorForm.get('network_operator')?.value;
      // Push the data to the array
      this.network_operator_data.zone_details.push(
        this.networkOperatorForm.get('zone_details')?.value
      );

      this.tariffService.setNetworkOpData(this.network_operator_data); // Sends the data to the network replySubject
    }
  }

  deleteDataItem(data: any): void {
    this.network_operator_data.zone_details.splice(
      this.network_operator_data.zone_details.indexOf(data),
      1
    );
    this.tariffService.setNetworkOpData(this.network_operator_data); // Sends the data to the network replySubject
  }
}
