import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable()
export class ProfileService {
    constructor(){}

    getProfileInfo(): Observable<any> {
        return this.mockProfileInfo();
    }

    mockProfileInfo(): Observable<any> {
        return of([
            {
                property: 'Name',
                value: 'Orvium'
              },
              {
                property: 'City',
                value: 'Zurich'
              },
              {
                property: 'Country',
                value: 'Switzerland'
              },
              {
                property: 'Birthdate',
                value: '25-01-2099'
              },
        ])
    }
}