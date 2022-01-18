//Create a asyncvalidator
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
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
      console.log(formArray);

      if (formArray) {
        let networkCode = formArray.map((data: any) => data.network_code);

        if (
          this.tariffService.isNetworkCodeCheckDuplicate(
            control.value,
            networkCode
          )
        ) {
          console.log('Running code check duplicate');
          return of({ networkCode: true });
        }
      }
      console.log('Both conditions unsatisfied');

      return of(null);
    };
  }
}
