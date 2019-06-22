import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LockService {
    APIURL = "https://ecngod5ft1.execute-api.eu-central-1.amazonaws.com/v1"
    constructor(private http: HttpClient) {}

    lock(userid: string): Observable<any> {
        return this.http.post(this.APIURL + '/vehicle/lock/scooter:tier:2412', { user: userid });
    }

    unlock(userid: string): Observable<any> {
        return this.http.post(this.APIURL + '/vehicle/unlock/scooter:tier:2412', { user: userid });
    }
}