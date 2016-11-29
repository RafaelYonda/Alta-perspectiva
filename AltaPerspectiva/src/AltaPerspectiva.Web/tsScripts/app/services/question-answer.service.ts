import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {QuestionMenu, Category, Question, User, Answer} from './models';

@Injectable()
export class QuestionAnswerService implements Resolve<Question> {


    getQuestionListByString(searchParam: string): QuestionMenu[] {
        var questionList: QuestionMenu[] = [];
        for (var i = 0; i < 4; i++) {
            var x: QuestionMenu = {
                id: i,
                questiontext: 'This is question ' + i,
                questionDetails: 'This is question Details' + i
            };
            questionList.push(x);
        }
        return questionList;
    }
    getAnswersByQuestion(id: number): Answer[] {
        //=======demo comments======
        var comments = [{
                id: 1,
                user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
                time: new Date(),
                commentText: 'Answer Comment...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur '
            },
            {
                id: 2,
                user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
                time: new Date(),
                commentText: 'Answer Comment...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur '
            }, {
                id: 3,
                user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
                time: new Date(),
                commentText: 'Answer Comment...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur '
            }]
        //======================

        var answerList: Answer[] = [];
        for (var i: number = 0; i < 4; i++) {
            var x: Answer = {
                id: i,
                questionId: id,
                user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
                answerText: 'Answer for question' + i + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere',
                date: new Date(),
                topics: 'Strategy',
                likeCount: i,
                commentCount: i + 1,
                comments: comments
            };
            answerList.push(x);
        }
        return answerList;
    }
    GetQuestion(id: string): Observable<Question> {
        console.log(id);
        return this._http.get('/questions/api/questions/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getFakeQuestion() {
       // =======demo comments======
        var comments = [{
            id: 1,
            user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
            time: new Date(),
            commentText: 'Question Comment...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur '
        },
            {
                id: 2,
                user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
                time: new Date(),
                commentText: 'Question Comment...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur '
            }, {
                id: 3,
                user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
                time: new Date(),
                commentText: 'Question Comment...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur '
            }]
        //======================

        var answers = this.getAnswersByQuestion(1);
        var question = new Question();
        question.id = '2';
        question.title = 'What is balanced score card';
        question.user = { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" };
        question.date = new Date();
        question.body = 'Question...Question ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere';
        question.categoryId.push("1");
        question.answers = answers;
        question.likeCount = 1
        question.commentCount = 3;
        question.comments = comments;
        return question;

    }
        

    constructor(private _http: Http) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));

        let options = new RequestOptions({ headers: headers });
    }

    resolve(route: ActivatedRouteSnapshot): Observable<Question> {
        return this._http.get('/questions/api/questions')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getQuestions(): Observable<Question[]> {
        return this._http.get('/questions/api/questions')
            .map(this.extractData)
            .catch(this.handleError);
    }

    addQuestions(question: Question): Observable<Question> {

        return this._http.post('/questions/api/questions', question)
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