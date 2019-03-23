import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import regExpValidator from '../custom-validators/regular-expression';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  nokiaId = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), regExpValidator(/[A-Z]/, "capital"), regExpValidator(/[a-z]/, "small"), regExpValidator(/[!@#\`\$%\^\&*\)\(+=._-]/, "special")]);
  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  getNokiaIdErrorMessage() {
    return this.nokiaId.hasError('capital') ? 'Nokia ID should not have capital letters' :
      this.nokiaId.hasError('small') ? 'Nokia ID should not have small letters' :
        this.nokiaId.hasError('special') ? 'Nokia ID should not have special characters' :
          this.nokiaId.hasError('required') ? 'You must enter a value' :
            this.nokiaId.hasError('minlength') ? 'Minimum 6 digits' :
              this.nokiaId.hasError('maxlength') ? 'Maximum 6 digits' :
                '';
  }

}
