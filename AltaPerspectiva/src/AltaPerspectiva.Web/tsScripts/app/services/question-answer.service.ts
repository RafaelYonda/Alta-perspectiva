import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {QuestionMenu, Category, Question, User, Answer, AnswerViewModel, Comment, Like, Config, Topic, Level, QuestionSaveViewModel, FilterParameter, QuestionReport} from './models';

@Injectable()
export class QuestionAnswerService implements Resolve<Question> {

    
  
    GetQuestion(id: string): Observable<Question> {
        console.log(id);
        return this._http.get('/questions/api/questions/' + id)
            .map(this.extractData)
            .catch(this.handleError);
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
    getmorequestionbyviewcount(categoryId:string): Observable<Question[]> {
        return this._http.get('/questions/api/' + categoryId +'/getmorequestionbyviewcount')
            .map(this.extractData)
            .catch(this.handleError);
    }
    //bestquestionbytotallike
    getbestquestionbytotallike(categoryId: string): Observable<Question[]> {
        return this._http.get('/questions/api/' + categoryId + '/bestquestionbytotallike')
            .map(this.extractData)
            .catch(this.handleError);
    }
    //GetLatestQuestionByDate
    GetLatestQuestionByDate(categoryId: string): Observable<Question[]> {
        return this._http.get('/questions/api/' + categoryId + '/getlatestquestionbydate', null)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getQuestions(): Observable<Question[]> {
        return this._http.get('/questions/api/questions')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getQuestionByTopciNCategoryId(topicId:string,categoryId:string): Observable<Question[]> {
        return this._http.get('/questions/api/'+topicId+'/questions/'+categoryId)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getQuestionsForSearch(): Observable<Question[]> {
        return this._http.get('/questions/api/questions/search')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getQuestionsForUser(): Observable<Question[]> {
        return this._http.get('/questions/api/questions')
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

    getRelatedQuestions(questionId: string): Observable<Question[]> {
        return this._http.get('/questions/api/questions/reatedquestions/' + questionId)
            .map(this.extractData)
            .catch(this.handleError);
    }



    getQuestionsNotAnswered(categoryId: string): Observable<Question[]> {
        return this._http.get('/questions/api/questions/notanswered/' + categoryId)
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
    }

    getQuestyionsAnswered(categoryId: string): Observable<Question[]> {
        return this._http.get('/questions/api/questions/answered/' + categoryId)
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();

    }
    //
    getbookmark(): Observable<Question[]> {
        return this._http.get('/questions/api/getbookmark')
            .map(this.extractData)
            .catch(this.handleError);
    }
    addQuestions(question: Question): Observable<Question> {

        return this._http.post('/questions/api/questions', question)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addAnswer(answer: AnswerViewModel): Observable<AnswerViewModel> {
        return this._http.post('/questions/api/question/' + answer.questionId + '/answer', answer)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addQuestionComment(comment: Comment): Observable<Comment> {
        return this._http.post('/questions/api/question/' + comment.questionId + '/comment', comment)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addQuestionLike(like: Like): Observable<Like> {       
        return this._http.post('/questions/api/question/' + like.questionId + '/like', like)
            .map(this.extractData)
            .catch(this.handleError);
    }
   
    increaseQuestionViewCount(id: string): Observable<boolean> {
        return this._http.post('/questions/api/question/' + id + '/viewcount', null)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addAnswerComment(comment: Comment): Observable<Comment> {
        return this._http.post('/questions/api/question/answer/' + comment.answerId + '/comment', comment)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getQuestionAlreadyLiked(questionId: string): Observable<any> {
        return this._http.get('/questions/api/question/' + questionId + '/getqestionalreadyLiked',null)
            .map(this.extractData)
            .catch(this.handleError);
    }
     getAnswerAlreadyLiked(answerId: string): Observable<any> {
        return this._http.get('/questions/api/question/getansweralreadyliked/'+ answerId ,null)
            .map(this.extractData)
            .catch(this.handleError);
    }
    addAnswerLike(like: Like): Observable<Like> {
        return this._http.post('/questions/api/question/answer/' + like.answerId + '/like', like)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    addLikeUserDetails(questionId: string): Observable<any> {
         return this._http.get('/questions/api/question/' + questionId + '/questionlike',null)
            .map(this.extractData)
            .catch(this.handleError);
    }

     getTopFiveQuestion(): Observable<Question[]> {
             return this._http.get('/questions/api/gettopfivequestion',null)
                .map(this.extractData)
                .catch(this.handleError);

     }

     getTopicByCategoryid(categoryId:string): Observable<Topic[]> {
             return this._http.get('/questions/api/'+categoryId+'/gettopicbycategoryid',null)
                .map(this.extractData)
                .catch(this.handleError);

     }
     getlevel(): Observable<Level[]> {
             return this._http.get('/questions/api/getlevel',null)
                .map(this.extractData)
                .catch(this.handleError);

     }

     saveQuestionSaveViewModel(model:Question):Observable<any> {      
         return this._http.post('/questions/api/savequestion', model)
            .map(this.extractData)
            .catch(this.handleError);
     }

     updateQuestion(model: Question): Observable<any> {
         return this._http.post('/questions/api/' + model.id + '/updatequestion', model)
             .map(this.extractData)
             .catch(this.handleError);
     }
       

    addBookMark(questionId:string):Observable<any> {      
         return this._http.post('/questions/api/'+questionId+'/addbookmark', null)
            .map(this.extractData)
            .catch(this.handleError);
     }


    //GetLatestAnswer and
    //GetBestAnswer
    GetLatestAnswer(questionId: string): Observable<Question> {
        return this._http.get('/questions/api/questions/' + questionId + '/getlatestanswer', null)
            .map(this.extractData)
            .catch(this.handleError);
    }
    //GetBestAnswer
    GetBestAnswer(questionId: string): Observable<Question> {
        return this._http.get('/questions/api/questions/' + questionId + '/getbestanswer', null)
            .map(this.extractData)
            .catch(this.handleError);
    }


    //Filtered parameter
    FilterbyCategoryTopicNLevel(filterParameter:FilterParameter): Observable<Question[]> {
        return this._http.get('/questions/api/FilterbyCategoryTopicNLevel?categoryId='+filterParameter.categoryId+'&topicId='+filterParameter.topicId+'&levelId='+filterParameter.levelId, null)
            .map(this.extractData)
            .catch(this.handleError);
    }

    GetLevelName(levelId: string): Observable<string> {
        return this._http.get('/questions/api/getlevelname/'+levelId, null)
            .map(this.extractData)
            .catch(this.handleError);
    }
    GetTopicName(topicId: string): Observable<string> {
        return this._http.get('/questions/api/GetTopicName/' + topicId, null)
            .map(this.extractData)
            .catch(this.handleError);
    }

    GetReport(answerId:string): Observable<QuestionReport[]> {
        return this._http.get('/questions/api/getreport/' + answerId, null)
            .map(this.extractData)
            .catch(this.handleError);
    }
    SaveReport(questionReport: QuestionReport): Observable<any> {
        return this._http.post('/questions/api/savereport', questionReport)
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