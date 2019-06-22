import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ScoreboardService {
    APIURL = "https://ecngod5ft1.execute-api.eu-central-1.amazonaws.com/v1"
    constructor(private httpClient: HttpClient) {}

    getScoreboard(): Observable<any> {
        return this.httpClient.get(this.APIURL + '/trip/ranking');
    }
}