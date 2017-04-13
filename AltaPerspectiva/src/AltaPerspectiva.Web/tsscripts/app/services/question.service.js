var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var QuestionService = (function () {
    function QuestionService(_http) {
        this._http = _http;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        var options = new RequestOptions({ headers: headers });
    }
    QuestionService.prototype.GetQuestion = function (id) {
        return this._http.get('/questions/api/questions/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.getTopfiveQuestionsByCategory = function (id) {
        return this._http.get('/questions/api/' + id + '/gettopfivequestionbycategoryid')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
    };
    QuestionService.prototype.getTopFiveTopicsByCategoryId = function (categoryId) {
        return this._http.get('/questions/api/' + categoryId + '/gettopfivetopicsbycategoryid')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
    };
    QuestionService.prototype.getLevel = function () {
        return this._http.get('/questions/api/getlevel')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
        ;
    };
    QuestionService.prototype.getRelatedTopicsByTopicId = function (topicId) {
        return this._http.get('/questions/api/' + topicId + '/getrelatedTopicsbytopicId')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
        ;
    };
    QuestionService.prototype.postQuestionBlog = function (questionId) {
        return this._http.post('/questions/api/savesharequestion/' + questionId, questionId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.saveDirectQuestion = function (question) {
        return this._http.post('/questions/api/savedirectquestion', question)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.getQuestionsbyUserId = function (credentialId) {
        return this._http.get('/userprofile/api/questionbyuserid/' + credentialId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.getAnswerbyUserId = function (credentialId) {
        return this._http.get('userprofile/api/answerbyuserid/' + credentialId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.getBookmarkUserId = function (userId) {
        return this._http.get('/questions/api/getbookmark/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.getPostedQuestionUserId = function (userId) {
        return this._http.get("/questions/api/getsharequestion/" + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.getQuestionsByCategory = function (categoryId) {
        if (categoryId === "1")
            return this._http.get('/questions/api/questions')
                .map(this.extractData)
                .catch(this.handleError);
        else
            return this._http.get('/questions/api/questions/category/' + categoryId)
                .map(this.extractData)
                .catch(this.handleError);
    };
    QuestionService.prototype.GetDirectQuestion = function (questionAskedToUser) {
        return this._http.get('/questions/api/getdirectquestion/' + questionAskedToUser)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionService.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    QuestionService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    };
    return QuestionService;
}());
QuestionService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], QuestionService);
export { QuestionService };
