import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { FilterParameter, Comment } from './models';


@Injectable()
export class CommunicationService {
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

    //=============================================
    private commentCountAdd: Subject<number> = new Subject<number>();
    setCommentsCount(count: number): void {
        this.commentCountAdd.next(count);
    }

    getCommentsCount(): Observable<number> {
        return this.commentCountAdd.asObservable();
    }
}