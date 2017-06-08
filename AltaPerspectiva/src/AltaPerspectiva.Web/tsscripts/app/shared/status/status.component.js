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
import { StatusService } from '../../services/status.service';
import { SITE_URL } from '../../../globals';
import { Question, Answer, Like } from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { QuestionService } from '../../services/question.service';
import { loginModalComponent } from '../login-modal/login-modal.component';
import { CommunicationService } from '../../services/communication.service';
import { LikeComponent } from '../like-modal/like.component';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var StatusComponent = (function () {
    function StatusComponent(componentFactoryResolver, _authService, statusService, dataService, communicationService, questionService, toastr) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._authService = _authService;
        this.statusService = statusService;
        this.dataService = dataService;
        this.communicationService = communicationService;
        this.questionService = questionService;
        this.toastr = toastr;
        this.onQuestionDetailClicked = new EventEmitter();
        this.onQuestionReportClicked = new EventEmitter();
    }
    StatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.getLoggedinObj().subscribe(function (res) {
            _this.loggedinUser = res;
        });
        this.questionObj.shareUrl = encodeURI(SITE_URL + "/question/detail/" + this.questionObj.id);
        if (this.questionObj.bestAnswer && this.questionObj.bestAnswer.text) {
            var temp = this.questionObj.bestAnswer.text.replace(/<\/?[^>]+(>|$)/g, "");
            this.answerTagsRemoved = temp.replace("&nbsp;", " ");
        }
        if (this.isQuestion) {
            this.commentId = this.questionObj.id;
            this.CommentCount = this.questionObj.comments.length;
        }
        else {
            this.commentId = this.answerObj.id;
            this.CommentCount = this.answerObj.comments ? this.answerObj.comments.length : 0;
            if (this.answerObj.text) {
                var temp = this.answerObj.text.replace(/<\/?[^>]+(>|$)/g, "");
                this.answerObj.answerTagsRemoved = temp.replace("&nbsp;", " ");
            }
        }
        this.communicationService.getCommentsCount().subscribe(function (eventArg) {
            if (_this.isQuestion) {
                if (_this.questionObj.id == eventArg.QuestionId)
                    _this.CommentCount = eventArg.Count;
            }
            else {
                if (_this.answerObj.id == eventArg.AnswerId)
                    _this.CommentCount = eventArg.Count;
            }
        });
    };
    StatusComponent.prototype.copyClipboard = function () {
    };
    StatusComponent.prototype.postClikced = function (questionId) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.questionService.postQuestionBlog(questionId).subscribe(function (res) {
            if (res.result == true) {
                _this.toastr.success('Esta pregunta está publicada en tu perfil.', '¡Perfecto!');
            }
            else {
                _this.toastr.warning('Esta pregunta ya está publicada en tu perfil.', 'Advertencia!!!');
            }
        });
    };
    StatusComponent.prototype.sendCommentCountToApStatus = function (param) {
        console.log('sendCommentCountToApStatus');
    };
    StatusComponent.prototype.bookmarkClicked = function (questionId) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.dataService.addBookMark(questionId).subscribe(function (res) {
            console.log(res);
            if (res.result == true) {
                _this.toastr.success('El marcador se ha agregado correctamente.', '¡Perfecto!');
            }
            else {
                _this.toastr.warning('Ya has marcado esta pregunta.', 'Advertencia!!!');
            }
        });
    };
    StatusComponent.prototype.questionDetailClicked = function () {
        if (this.loggedinUser.userId != this.questionObj.userViewModel.userId)
            this.toastr.error("Esta pregunta no la puedes editar.");
        else
            this.onQuestionDetailClicked.emit(true);
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
    };
    StatusComponent.prototype.submitLike = function (answerId, questionId) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.like = new Like();
        this.like.answerId = answerId;
        this.like.questionId = questionId;
        if (answerId == null && questionId != null) {
            this.dataService.getQuestionAlreadyLiked(questionId).subscribe(function (res) {
                if (res.result == true)
                    return;
                else {
                    _this.dataService.addQuestionLike(_this.like).subscribe(function (res) {
                        _this.questionObj.likes.push(_this.like);
                    });
                }
            });
        }
        else if (answerId != null || questionId != null) {
            this.dataService.getAnswerAlreadyLiked(answerId).subscribe(function (res) {
                if (res.result == true)
                    return;
                else {
                    _this.dataService.addAnswerLike(_this.like).subscribe(function (res) {
                        _this.questionObj.answers.find(function (x) { return x.id == answerId; }).likes.push(_this.like);
                    });
                }
            });
        }
    };
    StatusComponent.prototype.showLikeUserDetails = function (answerId, questionId) {
    };
    StatusComponent.prototype.questionReportClicked = function (questionId, answerId) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        console.log('questionReportClicked->' + questionId + '->' + answerId);
        this.onQuestionReportClicked.emit({ questionId: questionId, answerId: answerId });
    };
    StatusComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    StatusComponent.prototype.ShowLikeCount = function () {
        var _this = this;
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LikeComponent);
        var dialogComponentRef = this.likeAnchor.createComponent(dialogComponentFactory);
        console.log('show like');
        if (this.isQuestion) {
            this.statusService.showLikeUserDetailsByQuestion(this.questionObj.id).subscribe(function (res) {
                _this.likedUsers = res;
                dialogComponentRef.instance.likedUsers = _this.likedUsers;
                dialogComponentRef.instance.close.subscribe(function () {
                    dialogComponentRef.destroy();
                });
            });
        }
        else {
            this.statusService.showLikeUserDetailsByAnswer(this.answerObj.id).subscribe(function (res) {
                _this.likedUsers = res;
                dialogComponentRef.instance.likedUsers = _this.likedUsers;
                dialogComponentRef.instance.close.subscribe(function () {
                    dialogComponentRef.destroy();
                });
            });
        }
    };
    return StatusComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Question)
], StatusComponent.prototype, "questionObj", void 0);
__decorate([
    Input(),
    __metadata("design:type", Answer)
], StatusComponent.prototype, "answerObj", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], StatusComponent.prototype, "isQuestion", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], StatusComponent.prototype, "onQuestionDetailClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], StatusComponent.prototype, "onQuestionReportClicked", void 0);
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], StatusComponent.prototype, "logginAnchor", void 0);
__decorate([
    ViewChild('likeAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], StatusComponent.prototype, "likeAnchor", void 0);
StatusComponent = __decorate([
    Component({
        selector: 'ap-status',
        templateUrl: 'status.component.html',
        styleUrls: ['status.component.css'],
        providers: [StatusService, QuestionService]
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver, AuthenticationService, StatusService, QuestionAnswerService, CommunicationService, QuestionService, ToastsManager])
], StatusComponent);
export { StatusComponent };
