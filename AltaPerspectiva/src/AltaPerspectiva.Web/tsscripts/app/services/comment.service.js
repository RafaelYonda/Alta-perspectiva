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
var CommentService = (function () {
    function CommentService(_http) {
        this._http = _http;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        var options = new RequestOptions({ headers: headers });
    }
    CommentService.prototype.GetQuestion = function (id) {
        console.log(id);
        return this._http.get('/questions/api/questions/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.getCommentByAnswer = function (answerId) {
        return this._http.get('/questions/api/questions/answer/' + answerId + '/comments')
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.getCommentByQuestion = function (questionId) {
        return this._http.get('/questions/api/questions/' + questionId + '/comments')
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.addQuestionComment = function (comment) {
        return this._http.post('/questions/api/question/' + comment.questionId + '/comment', comment)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.addAnswerComment = function (comment) {
        return this._http.post('/questions/api/question/answer/' + comment.answerId + '/comment', comment)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommentService.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    CommentService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return CommentService;
}());
CommentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], CommentService);
export { CommentService };
