import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TariffDetails } from '../../models/tariff-details';
import { TariffService } from '../../services/tariff.service';
import { TariffValidator } from '../../../shared/formValidators/tariff-validator';
import { networkOperator } from '../../models/network-operator-data';
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

  networkDataDetails: networkOperator = {
    network_operator: '',
    zone_details: [],
  };

  constructor(private tariffService: TariffService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.tariffService.tariffData.subscribe((data) => {
      this.TariffItem().clear(); // Clear all previous form data if new data arrives
      data.forEach((element) => {
        // For each data from the sheetData greata temporary group and add push data into the formArray
        let tariffItemData = this.fb.group({
          zone: this.fb.control(
            element.zone,
            TariffValidator.zoneValidator(
              this.networkDataDetails.zone_details.map(
                (value) => value.zoneName
              )
            )
          ),
          country: this.fb.control(element.country),
          increment_type: this.fb.control(element.increment_type),
          network_code: this.fb.control(element.network_code),
          network_operator: this.fb.control(element.network_operator),
        });
        this.TariffItem().push(tariffItemData);
      });
    });

    this.tariffService
      .getNetworkOpData()
      .subscribe((data) => (this.networkDataDetails = data));
  }

  tariffForm = this.fb.group({
    tariffItem: this.fb.array([]),
  });

  newTariffItem(): FormGroup {
    return this.fb.group({
      zone: this.fb.control(
        '',
        TariffValidator.zoneValidator(
          this.networkDataDetails.zone_details.map((value) => value.zoneName)
        )
      ),
      country: this.fb.control(''),
      increment_type: this.fb.control(''),
      network_code: this.fb.control(''),
      network_operator: this.fb.control(''),
    });
  }

  TariffItem(): FormArray {
    return this.tariffForm.get('tariffItem') as FormArray;
  }

  addTariffItem(): void {
    this.TariffItem().push(this.newTariffItem());
  }

  removeTariffItem(index: any): void {
    this.TariffItem().removeAt(index);
  }

  submitTariffData(): void {
    console.log(this.tariffForm.get('tariffItem')?.value);
  }
}
