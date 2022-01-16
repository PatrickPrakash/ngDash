import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export class TariffValidator {
  static zoneValidator(data: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!data.includes(control.value)) {
        console.log(data);
        console.log('Validation is false');
        return { zone: true };
      }
      console.log('Validation is true');
      return null;
    };
  }
}
