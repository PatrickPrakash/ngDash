//Create a asyncvalidator
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { TariffService } from 'src/modules/dashboard-v2/services/tariff.service';

@Injectable()
export class TariffAsyncValidator {
  constructor(private tariffService: TariffService) {}

  zoneValidator(): AsyncValidatorFn {
    let zoneNames: any;
    this.tariffService.getNetworkDataObservable().subscribe((data) => {
      zoneNames = data;
    });
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      let lastestZoneData: any = zoneNames.zone_details.map(
        (data: any) => data.zoneName
      );

      if (lastestZoneData.includes(control.value)) {
        return of(null);
      } else {
        return of({ zone: true });
      }
    };
    {
    }
  }

  networkCodeValidator(): AsyncValidatorFn {
    return (
      control: AbstractControl
    ):
      | Promise<{ [key: string]: any } | null>
      | Observable<{ [key: string]: any } | null> => {
      let formArray = control.parent?.parent?.value;

      if (formArray) {
        let networkCode = formArray.map((data: any) => data.network_code);

        if (
          this.tariffService.isNetworkCodeCheckDuplicate(
            control.value,
            networkCode
          )
        ) {
          return of({ networkCode: true });
        }
      }

      return of(null);
    };
  }
}
