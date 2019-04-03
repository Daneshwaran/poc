import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PeoplePickerQuery } from '../modal/people-picker-query';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { mergeMap } from 'rxjs/operators';
import { FormDigestResponse } from '../modal/people-picker-response';
import { Injectable } from '@angular/core';

const PEOPLE_PICKER_URL =
  '_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface.ClientPeoplePickerSearchUser';
@Injectable()
export class SPService{
    constructor(private http:HttpClient){}
    public getUserSuggestions(query:PeoplePickerQuery):Observable<any>{
        return this.http.post(`${environment.web}/_api/contextinfo`,'').pipe(
            mergeMap((xRequest:FormDigestResponse)=>{
                const digest = xRequest.FormDigestValue;
                const headers = new HttpHeaders({
                    accept:'application/json;odata=verbose',
                    'x-RequestDigest':digest
                });
                const httpsOptions = {
                    headers: headers
                };
                return this.http.post(
                    `${environment.web}${PEOPLE_PICKER_URL}`,
                    query,
                    httpsOptions
                )
            })
        )
    }
}