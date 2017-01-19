import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommunicationService {
    //========Category Change==========
    private categoryId: string;
    private objChange: Subject<string> = new Subject<string>();

    setCategory(catId: string): void {
        this.categoryId = catId;
        this.objChange.next(catId);
    }

    getCategory(): Observable<string> {        
        return this.objChange.asObservable();
    }

    //===========Question Change==
    private questionId: string;
    private questionChange: Subject<string> = new Subject<string>();

    setQuestionId(questionId: string): void {
        console.log('Question Id: ', questionId);
        this.questionId = questionId;
        this.questionChange.next(questionId);
    }

    getQuestionId(): Observable<string> {
        return this.questionChange.asObservable();
    }
}