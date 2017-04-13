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
var QuestionResolver = (function () {
    function QuestionResolver(_http) {
        this._http = _http;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        var options = new RequestOptions({ headers: headers });
    }
    QuestionResolver.prototype.resolve = function (route) {
        var id = route.params['id'];
        var result = this.GetQuestion(id);
        console.log(result);
        return result;
    };
    QuestionResolver.prototype.GetQuestion = function (id) {
        console.log(id);
        return this._http.get('/questions/api/questions/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    QuestionResolver.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    QuestionResolver.prototype.handleError = function (error) {
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
    return QuestionResolver;
}());
QuestionResolver = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], QuestionResolver);
export { QuestionResolver };
