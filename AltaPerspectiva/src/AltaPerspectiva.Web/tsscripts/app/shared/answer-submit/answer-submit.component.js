var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, ViewContainerRef } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { ProfileService } from '../../services/profile.service';
import { SITE_URL } from '../../../globals';
import { Question, AnswerViewModel, User } from '../../services/models';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var AnswerSubmitComponent = (function () {
    function AnswerSubmitComponent(dataService, _router, profileService, _authService, toastr, vcr) {
        this.dataService = dataService;
        this._router = _router;
        this.profileService = profileService;
        this._authService = _authService;
        this.toastr = toastr;
        this.site_url = SITE_URL;
        this.isDraft = false;
        this.close = new EventEmitter();
        var user = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    AnswerSubmitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getLoggedinObj().subscribe(function (res) {
            _this._logObj.user.name = res.name;
            _this._logObj.user.imageUrl = res.imageUrl;
            _this._logObj.user.occupassion = res.occupation;
        });
        if (this.isDraft)
            this.showDraftedQuestion();
        if (this.question) {
            this.question.shareUrl = this.site_url + 'question/detail/' + this.question.id;
        }
    };
    AnswerSubmitComponent.prototype.onChange = function (event) {
        this.isAnonymous = event;
    };
    AnswerSubmitComponent.prototype.showDraftedQuestion = function () {
        this.answerVM = this.question.bestAnswer;
        this.answerText = this.answerVM.text;
    };
    AnswerSubmitComponent.prototype.publishDraft = function (_id) {
        var _this = this;
        this.answerVM.text = this.answerText;
        this.answerVM.questionId = _id;
        this.profileService.SaveDraftedQuestions(this.answerVM).subscribe(function (res) {
            _this._router.navigateByUrl('question/detail/' + _this.question.id, { skipLocationChange: true });
        });
    };
    AnswerSubmitComponent.prototype.submitAnswer = function (_id) {
        var _this = this;
        if (this.answerText == null) {
            this.toastr.warning('Please write some answer!!', 'Oops');
            return;
        }
        if (this.isDetail)
            this.close.emit();
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;
        this.dataService.addAnswer(this.answerVM).subscribe(function (res) {
            _this.answerVM = res;
            _this.answerText = "";
            if (!_this.isDetail)
                _this._router.navigateByUrl('question/detail/' + _this.question.id, { skipLocationChange: true });
            else
                _this.close.emit();
        });
    };
    AnswerSubmitComponent.prototype.submitAnswerAsDraft = function (_id) {
        var _this = this;
        if (this.answerText == null) {
            return;
        }
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;
        this.answerVM.isDrafted = true;
        this.dataService.addAnswer(this.answerVM).subscribe(function (res) {
            _this.answerVM = res;
            _this.answerText = "";
            _this.isAnonymous = false;
            if (!_this.isDetail)
                _this._router.navigateByUrl('question/detail/' + _this.question.id, { skipLocationChange: true });
            else
                _this.close.emit();
        });
    };
    return AnswerSubmitComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Question)
], AnswerSubmitComponent.prototype, "question", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AnswerSubmitComponent.prototype, "isFullScreen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AnswerSubmitComponent.prototype, "isDetail", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AnswerSubmitComponent.prototype, "isDraft", void 0);
AnswerSubmitComponent = __decorate([
    Component({
        selector: 'answer-submit',
        templateUrl: 'answer-submit.component.html',
        providers: [QuestionAnswerService, ProfileService]
    }),
    __metadata("design:paramtypes", [QuestionAnswerService,
        Router,
        ProfileService,
        AuthenticationService, ToastsManager, ViewContainerRef])
], AnswerSubmitComponent);
export { AnswerSubmitComponent };
