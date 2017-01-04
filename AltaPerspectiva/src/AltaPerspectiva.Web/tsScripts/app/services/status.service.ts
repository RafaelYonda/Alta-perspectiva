import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {QuestionMenu, Category, Question, User, Answer, AnswerViewModel, Comment, Like, Config } from './models';

@Injectable()
export class StatusService  {

    constructor(private _http: Http) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));

        let options = new RequestOptions({ headers: headers });
    }
    

    getStatusByQuestion(questionId: string): Observable<Comment[]> {
        return this._http.get('/questions/api/question/' + questionId +'/questionlike')
            .map(this.extractData)
            .catch(this.handleError);
    }
    addQuestionLike(like: Like): Observable<Like> {
        return this._http.post('/questions/api/question/' + like.questionId + '/like', like)
            .map(this.extractData)
            .catch(this.handleError);
    }
    addLikeUserDetails(questionId: string): Observable<any> {
        console.log(questionId +' in addLikeUserDetails');
        return this._http.get('/questions/api/question/' + questionId + '/questionlike', null)
            .map(this.extractData)
            .catch(this.handleError);

    }

    private extractData(res: Response) {       
        let body;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}