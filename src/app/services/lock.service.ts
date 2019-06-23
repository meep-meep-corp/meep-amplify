import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LockService {
    APIURL = "https://r10un8lg3b.execute-api.us-east-1.amazonaws.com/v1"
    constructor(private http: HttpClient) {}

    lock(userid: string, vehicleId: string, type: string = 'scooter', provider: string = 'mobility'): Observable<any> {
        console.log(vehicleId);
        return this.http.post(this.APIURL + '/vehicle/lock/' + type + ':' + provider + ':' + vehicleId, { user: userid });
    }

    unlock(userid: string, vehicleId: string, type: string = 'scooter', provider: string = 'mobility'): Observable<any> {
        console.log(vehicleId);
        return this.http.post(this.APIURL + '/vehicle/unlock/' + type + ':' + provider + ':' + vehicleId, { user: userid });
    }
}