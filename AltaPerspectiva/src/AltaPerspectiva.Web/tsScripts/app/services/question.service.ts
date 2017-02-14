import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
//import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {QuestionMenu, Category, Question, User, Answer, AnswerViewModel, Comment, Like, Config, Topic, Level, QuestionSaveViewModel} from './models';

@Injectable()
export class QuestionService {
      

    constructor(private _http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        let options = new RequestOptions({ headers: headers });
    }
    GetQuestion(id: string): Observable<Question> {
        console.log(id);
        return this._http.get('/questions/api/questions/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getTopfiveQuestionsByCategory(id: string): Observable<Question[]> {
        return this._http.get('/questions/api/'+id+'/gettopfivequestionbycategoryid')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount(); 
    }
    getTopFiveTopicsByCategoryId(categoryId: string): Observable<Topic[]> {
        return this._http.get('/questions/api/'+categoryId+'/gettopfivetopicsbycategoryid')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount(); 
    }
    getLevel(): Observable<Level[]> {
        return this._http.get('/questions/api/getlevel')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount(); ;
    }
   
    getRelatedTopicsByTopicId(topicId: string): Observable<Topic[]> {
        return this._http.get('/questions/api/'+topicId+'/getrelatedTopicsbytopicId')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount(); ;
    }
    postQuestionBlog(questionId: string) {
        return this._http.post('/questions/api/savequestionasblog/' + questionId, null)
            .map(this.extractData)
            .catch(this.handleError);
    } 
    saveDirectQuestion(question: QuestionSaveViewModel) {
        return this._http.post('/questions/api/savedirectquestion', question)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getQuestionsbyUserId(credentialId: string) {
        return this._http.get('/userprofile/api/questionbyuserid/' + credentialId)
            .map(this.extractData)
            .catch(this.handleError);
    } 
    getAnswerbyUserId(credentialId: string) {
        return this._http.get('userprofile/api/answerbyuserid/' + credentialId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getQuestionsByCategory(categoryId: string): Observable<Question[]> {
        if (categoryId === "1")
            return this._http.get('/questions/api/questions')
                .map(this.extractData)
                .catch(this.handleError);

        else
            return this._http.get('/questions/api/questions/category/' + categoryId)
                .map(this.extractData)
                .catch(this.handleError);

    }

    private extractData(res: Response) {       
        let body;
        console.log(res);
        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }

    private handleError(error: Response | any) {
        console.log(error);
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