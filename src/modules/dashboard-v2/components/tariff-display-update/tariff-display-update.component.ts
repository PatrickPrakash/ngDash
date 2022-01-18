import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TariffDetails } from '../../models/tariff-details';
import { TariffService } from '../../services/tariff.service';
import { TariffValidator } from '../../../shared/formValidators/tariff-validator';
import { TariffAsyncValidator } from 'src/modules/shared/formValidators/tariffAsyncValidator';
import { networkOperator } from '../../models/network-operator-data';
import { combineLatest, map, of } from 'rxjs';
import { TariffGroupValidator } from 'src/modules/shared/formValidators/tariffGroupValidator';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
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

  constructor(
    private tariffService: TariffService,
    private fb: FormBuilder,
    private tariffAsyncValidator: TariffAsyncValidator,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.tariffService.tariffData.subscribe((data) => {
      this.TariffItem().clear(); // Clear all previous form data if new data arrives
      let dupCodes = this.tariffService.getNetworkCodeDuplicates(); //get the networkCodes

      data.forEach((element) => {
        // For each data from the sheetData greata temporary group and add push data into the formArray
        // let tariffItemData = this.fb.group({
        //   zone: [element.zone, null, this.tariffAsyncValidator.zoneValidator()],
        //   country: [element.country],
        //   increment_type: [element.increment_type],
        //   network_code: [
        //     element.network_code,
        //     // TariffValidator.networkCodeValidator(dupCodes),
        //     // null,
        //     RxwebValidators.unique(),
        //     // this.tariffAsyncValidator.networkCodeValidator(),
        //   ],
        //   network_operator: [element.network_operator],
        // });
        this.TariffItem().push(this.newTariffValueForm(element));
      });
    });

    this.tariffService
      .getNetworkOpData()
      .subscribe((data) => (this.networkDataDetails = data));
  }

  tariffForm = this.fb.group(
    {
      tariffItem: this.fb.array([]),
    }
    // {
    //   validators: TariffGroupValidator.networkCodeValidator,
    //   asyncValidators: null,
    // }
    // { updateOn: 'submit' }
  );

  newTariffItem(): FormGroup {
    let dupCodes = this.tariffService.getNetworkCodeDuplicates();
    return this.fb.group(
      {
        zone: this.fb.control(
          '',
          null,
          this.tariffAsyncValidator.zoneValidator()
        ),
        country: this.fb.control(''),
        increment_type: this.fb.control(''),
        network_code: this.fb.control('', RxwebValidators.unique()),
        network_operator: this.fb.control(''),
      }
      // { updateOn: 'submit' }
    );
  }

  newTariffValueForm(element: any): FormGroup {
    return this.fb.group({
      zone: [element.zone, null, this.tariffAsyncValidator.zoneValidator()],
      country: [element.country],
      increment_type: [element.increment_type],
      network_code: [element.network_code, RxwebValidators.unique()],
      network_operator: [element.network_operator],
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
    console.log(this.tariffForm.status);
    if (this.tariffForm.valid) {
      console.log('It is valid');
    }
  }
}
