var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, EventEmitter } from '@angular/core';
import { Question } from '../../services/models';
import { AnswerDialogComponent } from '../answer-dialog/answer-dialog.component';
import { DialogComponent } from '../dialog-modal/dialog.component';
import { loginModalComponent } from '../login-modal/login-modal.component';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { QuestionReportComponent } from '../../shared/question-report/question-report.component';
var QuestionPanelComponent = (function () {
    function QuestionPanelComponent(componentFactoryResolver, dataService) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dataService = dataService;
        this.sendCommentCountToApStatus = new EventEmitter();
    }
    QuestionPanelComponent.prototype.ngOnInit = function () {
        if (!this.question.bestAnswer)
            return;
        if (!this.question.bestAnswer.text)
            return;
        var imgPos = this.question.bestAnswer.text.indexOf("img");
        var imgTag = "";
        if (imgPos > -1 && imgPos < 350) {
            var length = this.question.bestAnswer.text.indexOf(">", imgPos);
            length = length;
            imgTag = this.question.bestAnswer.text.substring(imgPos, length);
            imgTag = '<' + imgTag + 'class="answer-img"' + '>';
        }
        this.clippedAnswer = this.question.bestAnswer.text.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 258);
        this.clippedAnswer = '<p>' + imgTag + this.clippedAnswer + '<span><a (click)="openDialogBox(question)">...(Ver más)</a></span>' + '</p>';
    };
    QuestionPanelComponent.prototype.onQuestionDetailClicked = function (showEditForm) {
        this.showQuestionEditForm = showEditForm;
        this.editTitle = this.question.title;
        this.editBody = this.question.body;
    };
    QuestionPanelComponent.prototype.updateQuestion = function () {
        var _this = this;
        var qv = new Question();
        qv.title = this.editTitle;
        qv.body = this.editBody;
        qv.id = this.question.id;
        this.dataService.updateQuestion(qv).subscribe(function (res) {
            _this.question.title = res.title;
            _this.question.body = _this.editBody;
            _this.showQuestionEditForm = false;
        });
    };
    QuestionPanelComponent.prototype.sendCommentCount = function (param) {
        console.log('sendCommentCount');
        this.sendCommentCountToApStatus.emit(null);
    };
    QuestionPanelComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    QuestionPanelComponent.prototype.answerDialogBoxIfNoAnswer = function (question) {
        if (!question.bestAnswer && question.answerCount < 1)
            this.answerDialogBox(question);
    };
    QuestionPanelComponent.prototype.answerDialogBox = function (question) {
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        this.answerAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AnswerDialogComponent);
        var dialogComponentRef = this.answerAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question;
        dialogComponentRef.instance.isDetail = false;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    QuestionPanelComponent.prototype.openDialogBox = function (question) {
        this.dialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
        var dialogComponentRef = this.dialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    QuestionPanelComponent.prototype.onQuestionReportClicked = function (showQuestionReportModal) {
        var _this = this;
        console.log(showQuestionReportModal);
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
    return QuestionPanelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Question)
], QuestionPanelComponent.prototype, "question", void 0);
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], QuestionPanelComponent.prototype, "logginAnchor", void 0);
__decorate([
    ViewChild('answerAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], QuestionPanelComponent.prototype, "answerAnchor", void 0);
__decorate([
    ViewChild('dialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], QuestionPanelComponent.prototype, "dialogAnchor", void 0);
__decorate([
    ViewChild('questionReport', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], QuestionPanelComponent.prototype, "questionReport", void 0);
QuestionPanelComponent = __decorate([
    Component({
        selector: 'question-panel',
        templateUrl: 'question-panel.component.html',
        providers: [QuestionAnswerService]
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver, QuestionAnswerService])
], QuestionPanelComponent);
export { QuestionPanelComponent };
