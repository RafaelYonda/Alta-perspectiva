var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
import { Question, QuestionFollowing } from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
var loginModalComponent = (function () {
    function loginModalComponent(dataService, router) {
        this.dataService = dataService;
        this.close = new EventEmitter();
        this._router = router;
    }
    loginModalComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    loginModalComponent.prototype.ngOnInit = function () {
        this.isFollowing = true;
    };
    loginModalComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    loginModalComponent.prototype.QuestionFollowing = function (question) {
        var _this = this;
        var questionFollowing = new QuestionFollowing();
        questionFollowing.questionId = question.id;
        questionFollowing.answerId = question.bestAnswer.id;
        questionFollowing.followedUserId = question.bestAnswer.userId;
        console.log(questionFollowing);
        this.dataService.QuestionFollowing(questionFollowing).subscribe(function (res) {
            console.log('successfullt passed');
            if (_this.isFollowing == true) {
                _this.isFollowing = false;
            }
            else {
                _this.isFollowing = true;
            }
        });
    };
    loginModalComponent.prototype.onQuestionDetailClicked = function (showEditForm) {
        this.showQuestionEditForm = showEditForm;
        this.editTitle = this.question.title;
        this.editBody = this.question.body;
    };
    loginModalComponent.prototype.updateQuestion = function () {
        var _this = this;
        var qv = new Question();
        qv.title = this.editTitle;
        qv.body = this.editBody;
        qv.id = this.question.id;
        this.dataService.updateQuestion(qv).subscribe(function (res) {
            _this.question.title = _this.editTitle;
            _this.question.body = _this.editBody;
            _this.showQuestionEditForm = false;
            _this.editTitle = '';
            _this.editTitle = '';
            _this._router.navigateByUrl('question/home/1', { skipLocationChange: true });
        });
    };
    return loginModalComponent;
}());
loginModalComponent = __decorate([
    Component({
        selector: 'dlg',
        templateUrl: 'login-modal.component.html',
        styleUrls: ['login-modal.component.css'],
        providers: [QuestionAnswerService]
    }),
    __metadata("design:paramtypes", [QuestionAnswerService, Router])
], loginModalComponent);
export { loginModalComponent };
