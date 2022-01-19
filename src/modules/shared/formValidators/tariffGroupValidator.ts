import { FormArray, FormGroup, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

export class TariffGroupValidator {
  static networkCodeValidator() {
    return (group: FormGroup) => {
      let formArray = group.get('tariffItem')?.value;
      let networkCode = formArray.map((data: any) => data.network_code);

      if (
        networkCode.some((element: any, index: any) => {
          return networkCode.indexOf(element) !== index;
        })
      ) {
        return null;
      } else {
        return { networkCode: true };
      }
    };
  }

  
}
