import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import regExpValidator from '../custom-validators/regular-expression';
import { SPService } from '../services/sp.service';
import { PeoplePickerUser } from '../modal/people-picker-response';
import { PeoplePickerQuery } from '../modal/people-picker-query';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  spuser = new FormControl('', [Validators.required]);
  nokiaId = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), regExpValidator(/[A-Z]/, "capital"), regExpValidator(/[a-z]/, "small"), regExpValidator(/[!@#\`\$%\^\&*\)\(+=._-]/, "special")]);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder,private spService:SPService) { }
  public users: PeoplePickerUser[];
  public multipleUsers: PeoplePickerUser[];
  public BASE_PHOTO_URL: 'https://nokia.sharepoint.com/_layouts/15/userphoto.aspx?size=S&accountname=';
 // spuser: PeoplePickerUser;
  spusers: PeoplePickerUser[];

  peoplePickerQuery: PeoplePickerQuery = {
    queryParams: {
      QueryString: '',
      MaximumEntitySuggestions: 10,
      AllowEmailAddresses: true,
      AllowOnlyEmailAddresses: false,
      PrincipalSource: 15,
      PrincipalType: 1,
      SharePointGroupID: 0
    }
  };
  filteredCountriesMultiple: any[];

  filterSPUserSingle(event) {
    this.filterSPUsers(event.query, 'single');
  }

  filterSPUserMultiple(event) {
    this.filterSPUsers(event.query, 'multiple');
  }
  filterSPUsers(query, type) {
    this.peoplePickerQuery = Object.assign({
      queryParams: {
        QueryString: query,
        MaximumEntitySuggestions: 10,
        AllowEmailAddresses: true,
        AllowOnlyEmailAddresses: false,
        PrincipalSource: 15,
        PrincipalType: 1,
        SharePointGroupID: 0
      }
    });

    this.spService
      .getUserSuggestions(this.peoplePickerQuery)
      .subscribe((result: any) => {
        if (type === 'single') {
          this.users = [];
          const allUsers: PeoplePickerUser[] = JSON.parse(
            result.d.ClientPeoplePickerSearchUser
          );
          allUsers.forEach(user => {
            this.users = [...this.users, user];
          });
        } else {
          this.multipleUsers = [];
          const allUsers: PeoplePickerUser[] = JSON.parse(
            result.d.ClientPeoplePickerSearchUser
          );
          allUsers.forEach(user => {
            this.multipleUsers = [...this.multipleUsers, user];
          });
        }
      });
  }
  ngOnInit() {

    this.users = [];
    this.multipleUsers = [];
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
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
