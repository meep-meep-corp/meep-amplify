import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfileService {
    APIURL = "https://r10un8lg3b.execute-api.us-east-1.amazonaws.com/v1"
    constructor(private httpClient: HttpClient) {}

    getTripDetails(userid: string): Observable<any> {
        return this.httpClient.get(this.APIURL + '/trip/total/' + userid);
    }
}