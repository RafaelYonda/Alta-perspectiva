import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {QuestionMenu, Category, Question, User, Answer} from './models';

@Injectable()
export class QuestionAnswerService {

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
        var answerList: Answer[] = [];
        for (var i:number = 0; i < 4; i++) {
            var x: Answer = {
                id: i,
                questionId: id,
                user: { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" },
                answerText: 'Answer for question' + i + 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere',
                date: new Date(),
                topics:'Strategy'
            };
            answerList.push(x);
        }
        return answerList;
    }
    GetQuestion(id: number) {
        var answers = this.getAnswersByQuestion(1);
        var question = new Question();
        question.id = id.toString();
        question.title = 'What is balanced score card';
        question.user = { userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png" };
        question.date = new Date();
        question.questionBody = 'Question...Question ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam elementum consectetur. Nam sem sem, tincidunt sit amet congue et, venenatis in massa. Nunc massa lectus, vulputate in diam vel, euismod ornare purus. Curabitur vitae turpis quis quam imperdiet facilisis. In lacinia interdum velit, vel tempus mauris tempus id. Vestibulum ullamcorper lacus id dictum scelerisque. Fusce id nulla accumsan, tincidunt mi vel, facilisis diam. Nullam rhoncus, nibh eget tempus posuere';
        question.subTitle = 'Strategy';
        question.answers = answers;
        return question;
    }
    
    constructor(private _http: Http) {

        let headers = new Headers({ 'Content-Type': 'application/json' });        
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));

        let options = new RequestOptions({ headers: headers });
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
        let body = res.json();
        return body.data || {};
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