import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
export class TariffValidator {
  static zoneValidator(data: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Try to implement a custom validator using dependency injecting a service
      //   let networkData: any;
      //   const injector = Injector.create({
      //     providers: [
      //       { provide: TariffService, useClass: TariffService, deps: [] },
      //     ],
      //   });

      //   const tariffService = injector.get(TariffService);
      //   tariffService
      //     .getNetworkOpData()
      //     .subscribe((data) => (networkData = data));
      //   console.log(networkData);
      if (data.includes(control.value)) {
        console.log(data);
        console.log('Validation is false');
        return { zone: true };
      }
      console.log('Validation is true');
      return null;
    };
  }
  static networkCodeValidator(dupCodes: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(dupCodes);

      if (dupCodes.includes(control.value)) {
        return { networkCode: true };
      } else {
        return null;
      }
    };
  }
}
