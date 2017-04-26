var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Question } from '../../services/models';
import { Router } from '@angular/router';
var QuestionHeaderComponent = (function () {
    function QuestionHeaderComponent(_router) {
        this._router = _router;
    }
    QuestionHeaderComponent.prototype.topicRoute = function (categoryId, topicId) {
        if (!topicId) {
            topicId = '0';
        }
        this._router.navigateByUrl('/question/home/' + categoryId + '/' + topicId + '/' + 0);
    };
    QuestionHeaderComponent.prototype.levelRoute = function (categoryId, topicId, levelId) {
        if (!topicId) {
            topicId = '0';
        }
        this._router.navigateByUrl('/question/home/' + categoryId + '/' + topicId + '/' + levelId);
    };
    QuestionHeaderComponent.prototype.ngOnInit = function () {
    };
    return QuestionHeaderComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Question)
], QuestionHeaderComponent.prototype, "question", void 0);
QuestionHeaderComponent = __decorate([
    Component({
        selector: 'question-header',
        templateUrl: 'question-header.component.html',
        styleUrls: ['question-header.component.css'],
    }),
    __metadata("design:paramtypes", [Router])
], QuestionHeaderComponent);
export { QuestionHeaderComponent };