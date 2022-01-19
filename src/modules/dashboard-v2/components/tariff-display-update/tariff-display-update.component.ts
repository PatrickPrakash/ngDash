import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { TariffDetails } from '../../models/tariff-details';
import { TariffService } from '../../services/tariff.service';
import { TariffAsyncValidator } from 'src/modules/shared/formValidators/tariffAsyncValidator';
import { networkOperator } from '../../models/network-operator-data';
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

      data.forEach((element) => {
        this.TariffItem().push(this.newTariffValueForm(element));
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
      zone: this.fb.control('', {
        updateOn: 'submit',
        asyncValidators: this.tariffAsyncValidator.zoneValidator(),
      }),
      country: this.fb.control('', null, null),
      increment_type: this.fb.control(
        '',
        RxwebValidators.oneOf({ matchValues: ['KB', 'MB'] })
      ),
      network_code: this.fb.control('', RxwebValidators.unique()),
      network_operator: this.fb.control(''),
    });
  }

  newTariffValueForm(element: any): FormGroup {
    return this.fb.group({
      zone: this.fb.control(element.zone, {
        updateOn: 'submit',
        asyncValidators: this.tariffAsyncValidator.zoneValidator(),
      }),
      country: [element.country],
      increment_type: [
        element.increment_type,
        RxwebValidators.oneOf({ matchValues: ['KB', 'MB'] }),
      ],
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
    for (const tariff of this.TariffItem().controls) {
      //Manually Validate all the neccesary controls on submission
      tariff.get('zone')?.updateValueAndValidity();
      tariff.get('network_code')?.updateValueAndValidity();
      tariff.get('increment_type')?.updateValueAndValidity();
    }

    if (this.tariffForm.valid) {
      console.log(this.tariffForm.value);
    }
  }
}
