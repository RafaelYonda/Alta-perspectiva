var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment, User } from '../../services/models';
import { loginModalComponent } from '../login-modal/login-modal.component';
import { CommunicationService, CommnetCountEventArg } from '../../services/communication.service';
var CommentComponent = (function () {
    function CommentComponent(commentService, componentFactoryResolver, communicationService) {
        this.commentService = commentService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.communicationService = communicationService;
        this.questionId = '';
        this.answerId = '';
        this.sendCommentCount = new EventEmitter();
        var user = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    CommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var temp = this;
        if (this.isQuestion) {
            this.commentId = this.questionId;
            this.commentService.getCommentByQuestion(temp.questionId).subscribe(function (res) {
                _this.comments = res;
            });
        }
        else {
            this.commentId = this.answerId;
            this.commentService.getCommentByAnswer(temp.answerId).subscribe(function (res) {
                _this.comments = res;
            });
        }
        var currentUserName = localStorage.getItem('auth_token');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
    };
    CommentComponent.prototype.pushComment = function (result) {
        this.commentText = "";
        this.comment = result;
        this.comments.push(this.comment);
        this.eventArg = new CommnetCountEventArg();
        this.eventArg.Count = this.comments.length;
        if (this.isQuestion)
            this.eventArg.QuestionId = this.questionId;
        else
            this.eventArg.AnswerId = this.answerId;
        this.communicationService.setCommentsCount(this.eventArg);
    };
    CommentComponent.prototype.submitComment = function (questionId, answerId) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.comment = new Comment();
        this.comment.commentText = this.commentText;
        if (!this.comment.commentText || this.comment.commentText.trim() == "")
            return;
        if (this.isQuestion) {
            this.comment.questionId = this.questionId;
            this.commentService.addQuestionComment(this.comment).subscribe(function (res) {
                _this.pushComment(res);
            });
        }
        else {
            this.comment.answerId = this.answerId;
            this.commentService.addAnswerComment(this.comment).subscribe(function (res) {
                _this.pushComment(res);
            });
        }
        this.sendCommentCount.emit(null);
    };
    CommentComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    return CommentComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], CommentComponent.prototype, "questionId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CommentComponent.prototype, "answerId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CommentComponent.prototype, "isQuestion", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], CommentComponent.prototype, "sendCommentCount", void 0);
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], CommentComponent.prototype, "logginAnchor", void 0);
CommentComponent = __decorate([
    Component({
        selector: 'ap-comment',
        templateUrl: 'comment.component.html',
        styleUrls: ['comment.component.css'],
        providers: [CommentService]
    }),
    __metadata("design:paramtypes", [CommentService, ComponentFactoryResolver,
        CommunicationService])
], CommentComponent);
export { CommentComponent };
