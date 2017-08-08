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
var QuestionAnswerService = (function () {
    function QuestionAnswerService(_http) {
        this._http = _http;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        var options = new RequestOptions({ headers: headers });
    }
    QuestionAnswerService.prototype.keepalive = function () {
        return this._http.get('/questions/api/keepalive')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.QuestionFollowing = function (questionFollowing) {
        return this._http.post('/questions/api/' + questionFollowing.questionId + '/addquestionfollowing', questionFollowing)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.GetQuestion = function (id) {
        console.log(id);
        return this._http.get('/questions/api/questions/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.resolve = function (route) {
        return this._http.get('/questions/api/questions')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getmorequestionbyviewcount = function (categoryId) {
        return this._http.get('/questions/api/' + categoryId + '/getmorequestionbyviewcount')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getbestquestionbytotallike = function (categoryId) {
        return this._http.get('/questions/api/' + categoryId + '/bestquestionbytotallike')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.GetLatestQuestionByDate = function (categoryId) {
        return this._http.get('/questions/api/' + categoryId + '/getlatestquestionbydate', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getQuestions = function () {
        return this._http.get('/questions/api/questions')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getQuestionByTopciNCategoryId = function (topicId, categoryId) {
        return this._http.get('/questions/api/' + topicId + '/questions/' + categoryId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getQuestionsForSearch = function () {
        return this._http.get('/questions/api/questions/search')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getQuestionsForUser = function () {
        return this._http.get('/questions/api/questions')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getQuestionsByCategory = function (categoryId) {
        if (categoryId === "1")
            return this._http.get('/questions/api/questions')
                .map(this.extractData)
                .catch(this.handleError);
        else
            return this._http.get('/questions/api/questions/category/' + categoryId)
                .map(this.extractData)
                .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getRelatedQuestions = function (questionId) {
        return this._http.get('/questions/api/questions/relatedquestions/' + questionId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getQuestionsNotAnswered = function (categoryId) {
        return this._http.get('/questions/api/questions/notanswered/' + categoryId)
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
    };
    QuestionAnswerService.prototype.getQuestyionsAnswered = function (categoryId) {
        return this._http.get('/questions/api/questions/answered/' + categoryId)
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
    };
    QuestionAnswerService.prototype.getbookmark = function () {
        return this._http.get('/questions/api/getbookmark')
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.addQuestions = function (question) {
        return this._http.post('/questions/api/questions', question)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.addAnswer = function (answer) {
        return this._http.post('/questions/api/question/' + answer.questionId + '/answer', answer)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.SaveDraftedAnswers = function (answer) {
        return this._http.post('/questions/api/savedraftedanswers', answer)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.addQuestionComment = function (comment) {
        return this._http.post('/questions/api/question/' + comment.questionId + '/comment', comment)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.addQuestionLike = function (like) {
        return this._http.post('/questions/api/question/' + like.questionId + '/like', like)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.increaseQuestionViewCount = function (id) {
        return this._http.post('/questions/api/question/' + id + '/viewcount', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.addAnswerComment = function (comment) {
        return this._http.post('/questions/api/question/answer/' + comment.answerId + '/comment', comment)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getQuestionAlreadyLiked = function (questionId) {
        return this._http.get('/questions/api/question/' + questionId + '/getqestionalreadyLiked', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getAnswerAlreadyLiked = function (answerId) {
        return this._http.get('/questions/api/question/getansweralreadyliked/' + answerId, null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.addAnswerLike = function (like) {
        return this._http.post('/questions/api/question/answer/' + like.answerId + '/like', like)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.addLikeUserDetails = function (questionId) {
        return this._http.get('/questions/api/question/' + questionId + '/questionlike', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getTopFiveQuestion = function () {
        return this._http.get('/questions/api/gettopfivequestion', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getTopicByCategoryid = function (categoryId) {
        return this._http.get('/questions/api/' + categoryId + '/gettopicbycategoryid', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.getlevel = function () {
        return this._http.get('/questions/api/getlevel', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.saveQuestionSaveViewModel = function (model) {
        return this._http.post('/questions/api/savequestion', model)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.updateQuestion = function (model) {
        return this._http.post('/questions/api/' + model.id + '/updatequestion', model)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.addBookMark = function (questionId) {
        return this._http.post('/questions/api/' + questionId + '/addbookmark', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.GetLatestAnswer = function (questionId) {
        return this._http.get('/questions/api/questions/' + questionId + '/getlatestanswer', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.GetBestAnswer = function (questionId) {
        return this._http.get('/questions/api/questions/' + questionId + '/getbestanswer', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.GetAnswersByQuestionId = function (questionId) {
        return this._http.get('/questions/api/questions/' + questionId + '/getanswers', null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.FilterbyCategoryTopicNLevel = function (filterParameter) {
        return this._http.get('/questions/api/FilterbyCategoryTopicNLevel?categoryId=' + filterParameter.categoryId + '&topicId=' + filterParameter.topicId + '&levelId=' + filterParameter.levelId, null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.GetLevelName = function (levelId) {
        return this._http.get('/questions/api/getlevelname/' + levelId, null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.GetTopicName = function (topicId) {
        return this._http.get('/questions/api/GetTopicName/' + topicId, null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.GetReport = function (answerId) {
        return this._http.get('/questions/api/getreport/' + answerId, null)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.SaveReport = function (questionReport) {
        return this._http.post('/questions/api/savereport', questionReport)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionAnswerService.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    QuestionAnswerService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        window.location.replace("/signin");
        return Observable.throw(errMsg);
    };
    return QuestionAnswerService;
}());
QuestionAnswerService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], QuestionAnswerService);
export { QuestionAnswerService };
