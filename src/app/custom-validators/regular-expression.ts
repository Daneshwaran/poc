import { ValidatorFn, AbstractControl } from '@angular/forms';

export default function regExpValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'regExpValue': {value: control.value}} : null;
    };
  }