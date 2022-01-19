import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TariffDetails } from '../../models/tariff-details';
import { TariffService } from '../../services/tariff.service';
import { TariffAsyncValidator } from 'src/modules/shared/formValidators/tariffAsyncValidator';
import { networkOperator } from '../../models/network-operator-data';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { MatDialog } from '@angular/material/dialog';
import { TariffConfirmDialogComponent } from '../tariff-confirm-dialog/tariff-confirm-dialog.component';
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
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.tariffService.tariffData.subscribe({
      next: (data) => {
        this.TariffItem().clear(); // Clear all previous form data if new data arrives
        data.forEach((element) => {
          this.TariffItem().push(this.newTariffValueForm(element));
        });
      },
      complete: () => {},
    });

    this.tariffService
      .getNetworkOpData()
      .subscribe((data) => (this.networkDataDetails = data));
  }

  progressMode: any = 'determinate';

  tariffForm = this.fb.group({
    tariffItem: this.fb.array([]),
  });

  newTariffItem(): FormGroup {
    return this.fb.group({
      zone: this.fb.control('', {
        updateOn: 'submit',
        validators: Validators.required,
        asyncValidators: this.tariffAsyncValidator.zoneValidator(),
      }),
      country: this.fb.control('', Validators.required),
      increment_type: this.fb.control('', [
        Validators.required,
        RxwebValidators.oneOf({ matchValues: ['KB', 'MB'] }),
      ]),
      network_code: this.fb.control('', [
        Validators.required,
        RxwebValidators.unique(),
      ]),
      network_operator: this.fb.control('', Validators.required),
    });
  }

  newTariffValueForm(element: any): FormGroup {
    return this.fb.group({
      zone: this.fb.control(element.zone, {
        updateOn: 'submit',
        validators: Validators.required,
        asyncValidators: this.tariffAsyncValidator.zoneValidator(),
      }),
      country: [element.country, Validators.required],
      increment_type: [
        element.increment_type,
        [
          RxwebValidators.oneOf({ matchValues: ['KB', 'MB'] }),
          Validators.required,
        ],
      ],
      network_code: [
        element.network_code,
        [Validators.required, RxwebValidators.unique()],
      ],
      network_operator: [element.network_operator, Validators.required],
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

  clearTariffForm(): void {
    this.TariffItem().clear();
  }

  submitTariffData(): void {
    for (const tariff of this.TariffItem().controls) {
      //Manually Validate all the neccesary controls on submission
      tariff.get('zone')?.updateValueAndValidity();
      tariff.get('network_code')?.updateValueAndValidity();
      tariff.get('increment_type')?.updateValueAndValidity();
    }

    if (this.tariffForm.valid && !(this.TariffItem().length == 0)) {
      let dialogRef = this.dialog.open(TariffConfirmDialogComponent, {
        height: '160px',
        width: '300px',
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          let networktariff = {
            ...this.TariffItem().value,
            ...this.networkDataDetails,
          };

          console.log(networktariff);
        }
      });
    }
  }
}
