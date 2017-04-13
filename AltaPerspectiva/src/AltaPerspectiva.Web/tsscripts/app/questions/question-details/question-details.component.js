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
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
import { Question, Comment, AnswerViewModel, Like, DateName, User, QuestionFollowing } from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { AnswerDialogComponent } from '../../shared/answer-dialog/answer-dialog.component';
import { loginModalComponent } from '../../shared/login-modal/login-modal.component';
import { QuestionReportComponent } from '../../shared/question-report/question-report.component';
var QuestionDetailComponent = (function () {
    function QuestionDetailComponent(router, _route, questionService, dataService, authService, componentFactoryResolver) {
        this.router = router;
        this._route = _route;
        this.questionService = questionService;
        this.dataService = dataService;
        this.authService = authService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = _route;
        this.date = new DateName();
        var user = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    QuestionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        var currentUserName = localStorage.getItem('auth_token');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
        this.route.data
            .subscribe(function (res) {
            _this.question = res.question;
            _this.dataService.increaseQuestionViewCount(_this.question.id).subscribe(function (res) {
                _this.question.viewCount += 1;
            });
        });
    };
    QuestionDetailComponent.prototype.QuestionFollowing = function (answer) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        var questionFollowing = new QuestionFollowing();
        questionFollowing.questionId = answer.questionId;
        questionFollowing.answerId = answer.id;
        questionFollowing.followedUserId = answer.userId;
        console.log(questionFollowing);
        this.dataService.QuestionFollowing(questionFollowing).subscribe(function (res) {
            console.log('successfullt passed');
            var isFollowing = _this.question.answers.find(function (x) { return x.id == answer.id; }).isFollowing;
            if (isFollowing == true) {
                _this.question.answers.find(function (x) { return x.id == answer.id; }).isFollowing = false;
            }
            else {
                _this.question.answers.find(function (x) { return x.id == answer.id; }).isFollowing = true;
            }
        });
    };
    QuestionDetailComponent.prototype.onChange = function (event) {
        this.isAnonymous = event;
    };
    QuestionDetailComponent.prototype.submitAnswer = function (_id) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;
        this.dataService.addAnswer(this.answerVM).subscribe(function (res) {
            _this.answerVM = res;
            _this.answerText = "";
            _this.isAnonymous = false;
            _this.dataService.GetQuestion(_id).subscribe(function (res) {
                _this.question = res;
            });
        });
    };
    QuestionDetailComponent.prototype.answerDialogBox = function (question) {
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
            _this.dataService.GetQuestion(_this.question.id).subscribe(function (res) {
                _this.question = res;
            });
        });
    };
    QuestionDetailComponent.prototype.submitAnswerAsDraft = function (_id) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
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
            _this.dataService.GetQuestion(_id).subscribe(function (res) {
                _this.question = res;
            });
        });
    };
    QuestionDetailComponent.prototype.submitComment = function (questionId) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.comment = new Comment();
        this.comment.questionId = questionId;
        this.comment.commentText = this.commentText;
        this.dataService.addQuestionComment(this.comment).subscribe(function (res) {
            _this.commentText = "";
            _this.comment = res;
            _this.question.comments.push(_this.comment);
        });
    };
    QuestionDetailComponent.prototype.submitCommentForAnswer = function (answerId) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.comment = new Comment();
        this.comment.answerId = answerId;
        this.comment.commentText = this.commentAnswerText;
        this.dataService.addAnswerComment(this.comment).subscribe(function (res) {
            _this.commentText = "";
            _this.comment = res;
            _this.question.answers.find(function (x) { return x.id == answerId; }).comments.push(_this.comment);
        });
    };
    QuestionDetailComponent.prototype.submitLike = function (questionId) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.like = new Like();
        this.like.questionId = questionId;
        this.dataService.addQuestionLike(this.like).subscribe(function (res) {
            _this.question.likes.push(_this.like);
        });
    };
    QuestionDetailComponent.prototype.submitLikeForAnswer = function (answerId, questionId) {
        var _this = this;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.like = new Like();
        this.like.questionId = questionId;
        this.like.answerId = answerId;
        this.dataService.addAnswerLike(this.like).subscribe(function (res) {
            _this.like.userId = res.userId;
            console.log(res);
            console.log(_this.question.answers.find(function (x) { return x.id == answerId; }).likes);
            var douplicateLike = _this.question.answers.find(function (x) { return x.id == answerId; }).likes.find(function (x) { return x.userId == res.userId && x.answerId == answerId; });
            console.log(douplicateLike);
            if (douplicateLike == undefined) {
                _this.question.answers.find(function (x) { return x.id == answerId; }).likes.push(_this.like);
            }
        });
    };
    QuestionDetailComponent.prototype.onQuestionDetailClicked = function (showEditForm) {
        this.showQuestionEditForm = showEditForm;
        this.editTitle = this.question.title;
        this.editBody = this.question.body;
    };
    QuestionDetailComponent.prototype.onQuestionReportClicked = function (showQuestionReportModal) {
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
    QuestionDetailComponent.prototype.updateQuestion = function () {
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
    QuestionDetailComponent.prototype.GetLatestAnswer = function (questionId) {
        var _this = this;
        console.log('GetLatestAnswer ' + questionId);
        this.dataService.GetLatestAnswer(questionId).subscribe(function (res) {
            _this.question = res;
        });
    };
    QuestionDetailComponent.prototype.hideMenu = function () {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    };
    QuestionDetailComponent.prototype.gotoProfile = function () {
        this.router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    };
    QuestionDetailComponent.prototype.GetBestAnswer = function (questionId) {
        var _this = this;
        console.log('GetBestAnswer ' + questionId);
        this.dataService.GetBestAnswer(questionId).subscribe(function (res) {
            _this.question = res;
        });
    };
    QuestionDetailComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    return QuestionDetailComponent;
}());
__decorate([
    ViewChild('answerAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], QuestionDetailComponent.prototype, "answerAnchor", void 0);
__decorate([
    ViewChild('questionReport', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], QuestionDetailComponent.prototype, "questionReport", void 0);
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], QuestionDetailComponent.prototype, "logginAnchor", void 0);
QuestionDetailComponent = __decorate([
    Component({
        selector: "question-details",
        templateUrl: 'question-details.component.html',
        providers: [QuestionResolver, QuestionAnswerService, AuthenticationService]
    }),
    __metadata("design:paramtypes", [Router, ActivatedRoute, QuestionResolver,
        QuestionAnswerService, AuthenticationService, ComponentFactoryResolver])
], QuestionDetailComponent);
export { QuestionDetailComponent };
