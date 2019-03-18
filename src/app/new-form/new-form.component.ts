import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import  regExpValidator  from '../custom-validators/regular-expression';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  nokiaId = new FormControl('', [Validators.required,regExpValidator(/bob/i)]);
  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getNokiaIdErrorMessage() {
    return this.nokiaId.hasError('required') ? 'You must enter a value' :
        this.nokiaId.hasError('email') ? 'Not a valid email' :
            '';
  }

  
}
