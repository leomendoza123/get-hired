import { AbstractControl, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';

export class PhoneValidator {

  // Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
  static validCostaRicaPhone = (phoneControl: AbstractControl): {[key: string]: any} | null => {
        try {
          const phoneUtil = new PhoneNumberUtil();
          const phoneNumber = '' + phoneControl.value + '';
          const region = 'CR';
          const pNumber = phoneUtil.parseAndKeepRawInput(phoneNumber, region);
          const isValidNumber = phoneUtil.isValidNumber(pNumber);
          console.log (phoneNumber, isValidNumber)
          if (isValidNumber) {
            return undefined;
          } else {
            return {
                validCountryPhone: true
              };
          }
        } catch (e) {
          return {
            validCountryPhone: true
          };
        }
    }
}

