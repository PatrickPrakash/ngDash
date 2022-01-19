import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
export class TariffValidator {
  static zoneValidator(data: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (data.includes(control.value)) {
        return { zone: true };
      }

      return null;
    };
  }
  static networkCodeValidator(dupCodes: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (dupCodes.includes(control.value)) {
        return { networkCode: true };
      } else {
        return null;
      }
    };
  }
}
