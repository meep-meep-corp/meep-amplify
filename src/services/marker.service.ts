import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MarkerEventService {
    protected _eventSubject = new Subject();
    public triggered = this._eventSubject.asObservable();

    dispatchEvent(marker) {
        this._eventSubject.next(marker);
    }
    
}