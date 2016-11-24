import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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


    constructor(private _http: Http) { }

    loadData(): Promise<Question[]> {
        return this._http.get('/api/persons')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();
        return data || [];
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage
            : error.message
                ? error.message
                : error._body
                    ? error._body
                    : error.status
                        ? `${error.status} - ${error.statusText}`
                        : 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }

}