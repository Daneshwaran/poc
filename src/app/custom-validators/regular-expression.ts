import { ValidatorFn, AbstractControl } from '@angular/forms';

export default function regExpValidator(nameRe: RegExp,errorType:string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {[errorType]: {value: control.value}} : null;
    };
  }