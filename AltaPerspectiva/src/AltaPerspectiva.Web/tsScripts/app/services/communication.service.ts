import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { FilterParameter, Comment } from './models';


@Injectable()
export class CommunicationService {
    static instance: CommunicationService;

    constructor() {
        return CommunicationService.instance = CommunicationService.instance || this;
    }
    //=========Comment Change communication========
    private comment: Comment;
    private commentAdded: Subject<Comment> = new Subject<Comment>();
    setComment(comment: Comment): void {
        this.comment = comment;
        this.commentAdded.next(this.comment);
    }
    getComment(): Observable<Comment> {
        return this.commentAdded.asObservable();
    }
    //========Category Change==========
    private categoryId: string;
    private objChange: Subject<string> = new Subject<string>();

    setCategory(catId: string): void {
        this.categoryId = catId;
        this.objChange.next(this.categoryId);
    }

    getCategory(): Observable<string> {
        return this.objChange.asObservable();
    }
    //=========Topic Change===========
    private topicId: string;
    setTopicId(topicId: string) {
        this.topicId = topicId;
    }
    getTopicId() {
        return this.topicId;
    }
    //============Level change==============
    private levelId: string;
    setLevelId(levelId: string) {

        this.levelId = levelId;
    }
    getLevelId() {
        return this.levelId;
    }
    //=============Filter param change=========
    private filterParameter: FilterParameter;
    getFilterParameter() {
        this.filterParameter = new FilterParameter();
        if (this.categoryId) this.filterParameter.categoryId = this.categoryId;
        if (this.topicId) this.filterParameter.topicId = this.topicId;
        if (this.levelId) this.filterParameter.levelId = this.levelId;
        return this.filterParameter;
    }
    //=====Question submitted=======
    private questionSubmitted: Subject<string> = new Subject<string>();

    questionSubmit(question: string): void {
        this.questionSubmitted.next(question);
    }

    informQuestionSubmit(): Observable<string> {
        return this.questionSubmitted.asObservable();
    }

    //==================Comment Count Brodcast===========================

    
    private commentCountAdd: Subject<CommnetCountEventArg> = new Subject<CommnetCountEventArg>();

    setCommentsCount(EventArg: CommnetCountEventArg): void {
        this.commentCountAdd.next(EventArg);
    }

    getCommentsCount(): Observable<CommnetCountEventArg> {
        return this.commentCountAdd.asObservable();
    }
    //==============Toggle Menu Clicked=============
    private toggleClicked: Subject<string> = new Subject<string>();
    setToggleClicked(): void {
        this.toggleClicked.next("False");
    }
    getToggleClicked(): Observable<string> {
        return this.toggleClicked.asObservable();
    }
    //==============User Name Updated=============
    private userUpdated: Subject<string> = new Subject<string>();
    setuserUpdated(): void {
        this.userUpdated.next("False");
    }
    getuserUpdated(): Observable<string> {
        return this.userUpdated.asObservable();
    }
    //==================Blog Count Brodcast===========================
    private blogAddCount: Subject<string> = new Subject<string>();
    setBlogUpdated(): void {
        this.blogAddCount.next("False");
    }
    getBlogUpdated(): Observable<string> {
        return this.blogAddCount.asObservable();
    }
}


//Communication Event Argument only to be used by Communication service
//So no seperate file for class is needed.

export class CommnetCountEventArg
{
    QuestionId: string;
    AnswerId: string;
    Count: number;
}