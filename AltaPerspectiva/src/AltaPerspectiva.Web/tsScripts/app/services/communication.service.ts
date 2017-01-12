import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommunicationService {

    private categoryId: string;
    private subject: Subject<string> = new Subject<string>();

    setCategory(logged: string): void {
        this.categoryId = logged;
        this.subject.next(logged);
    }

    getCategory(): Observable<string> {
        return this.subject.asObservable();
    }
}