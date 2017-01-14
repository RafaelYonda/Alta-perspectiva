import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommunicationService {

    private categoryId: string;
    private objChange: Subject<string> = new Subject<string>();

    setCategory(catId: string): void {
        this.categoryId = catId;
        this.objChange.next(catId);
    }

    getCategory(): Observable<string> {        
        return this.objChange.asObservable();
    }
}