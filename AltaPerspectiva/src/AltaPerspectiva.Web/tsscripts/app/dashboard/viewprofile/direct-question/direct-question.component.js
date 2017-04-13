var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { QuestionService } from '../../../services/question.service';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { AnswerDialogComponent } from '../../../shared/answer-dialog/answer-dialog.component';
import { QuestionSaveViewModel } from '../../../services/models';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var DirectQuestionComponent = (function () {
    function DirectQuestionComponent(categoryService, _route, questionsService, componentFactoryResolver, toastr, vcr) {
        this.categoryService = categoryService;
        this._route = _route;
        this.questionsService = questionsService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.toastr = toastr;
        this.question = new QuestionSaveViewModel();
    }
    DirectQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(function (params) {
            _this.questionAskedToUser = params['userId'];
        });
        this.categoryService.getAllCategories().subscribe(function (res) {
            _this.categories = res;
        });
        this.questionsService.GetDirectQuestion(this.questionAskedToUser).subscribe(function (res) {
            console.log(res);
            _this.questions = res;
        });
    };
    DirectQuestionComponent.prototype.submitQuestion = function () {
        var _this = this;
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        this.question.categoryIds.push(this.categories[0].id);
        this.question.title = this.title;
        this.question.body = this.body;
        this.question.questionAskedToUser = this.questionAskedToUser;
        this.questionsService.saveDirectQuestion(this.question).subscribe(function (res) {
            _this.toastr.success('Answer saved successfully!', 'success');
            _this.title = '';
            _this.body = '';
            _this.ngOnInit();
            console.log(res);
        });
    };
    DirectQuestionComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    DirectQuestionComponent.prototype.answerDialogBox = function (question) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.answerAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AnswerDialogComponent);
        var dialogComponentRef = this.answerAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question;
        dialogComponentRef.instance.isDetail = true;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
            _this.ngOnInit();
        });
    };
    return DirectQuestionComponent;
}());
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], DirectQuestionComponent.prototype, "logginAnchor", void 0);
__decorate([
    ViewChild('answerAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], DirectQuestionComponent.prototype, "answerAnchor", void 0);
DirectQuestionComponent = __decorate([
    Component({
        templateUrl: 'direct-question.component.html',
        providers: [CategoryService, QuestionService]
    }),
    __metadata("design:paramtypes", [CategoryService, ActivatedRoute, QuestionService, ComponentFactoryResolver, ToastsManager, ViewContainerRef])
], DirectQuestionComponent);
export { DirectQuestionComponent };
