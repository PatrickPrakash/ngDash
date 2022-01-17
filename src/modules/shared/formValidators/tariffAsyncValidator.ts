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
        console.log('Validation is false');
        return of(null);
      } else {
        console.log('Validation is true');

        return of({ zone: true });
      }
    };
  }
}
