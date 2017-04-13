var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Question, QuestionFollowing } from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
import { loginModalComponent } from '../login-modal/login-modal.component';
import { QuestionReportComponent } from '../../shared/question-report/question-report.component';
var DialogComponent = (function () {
    function DialogComponent(dataService, router, componentFactoryResolver) {
        this.dataService = dataService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.close = new EventEmitter();
        this._router = router;
    }
    DialogComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    DialogComponent.prototype.ngOnInit = function () {
        this.isFollowing = true;
        var user = localStorage.getItem('auth_token');
        if (user) {
            this.isFollowing = !this.question.bestAnswer.isFollowing;
        }
    };
    DialogComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    DialogComponent.prototype.QuestionFollowing = function (question) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        var questionFollowing = new QuestionFollowing();
        questionFollowing.questionId = question.id;
        questionFollowing.answerId = question.bestAnswer.id;
        questionFollowing.followedUserId = question.bestAnswer.userId;
        console.log(questionFollowing);
        this.dataService.QuestionFollowing(questionFollowing).subscribe(function (res) {
            if (_this.isFollowing == true) {
                _this.isFollowing = false;
            }
            else {
                _this.isFollowing = true;
            }
        });
    };
    DialogComponent.prototype.onQuestionDetailClicked = function (showEditForm) {
        this.showQuestionEditForm = showEditForm;
        this.editTitle = this.question.title;
        this.editBody = this.question.body;
    };
    DialogComponent.prototype.updateQuestion = function () {
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
    DialogComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    DialogComponent.prototype.onQuestionReportClicked = function (showQuestionReportModal) {
        var _this = this;
        this.questionReport.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(QuestionReportComponent);
        var dialogComponentRef = this.questionReport.createComponent(dialogComponentFactory);
        this.dataService.GetReport(showQuestionReportModal.answerId).subscribe(function (res) {
            _this.questionReports = res;
            dialogComponentRef.instance.questionReports = _this.questionReports;
            dialogComponentRef.instance.questionId = showQuestionReportModal.questionId;
            dialogComponentRef.instance.answerId = showQuestionReportModal.answerId;
        });
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    return DialogComponent;
}());
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], DialogComponent.prototype, "logginAnchor", void 0);
__decorate([
    ViewChild('questionReport', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], DialogComponent.prototype, "questionReport", void 0);
DialogComponent = __decorate([
    Component({
        selector: 'dlg',
        templateUrl: 'dialog.component.html',
        styleUrls: ['dialog.component.css'],
        providers: [QuestionAnswerService]
    }),
    __metadata("design:paramtypes", [QuestionAnswerService, Router, ComponentFactoryResolver])
], DialogComponent);
export { DialogComponent };
