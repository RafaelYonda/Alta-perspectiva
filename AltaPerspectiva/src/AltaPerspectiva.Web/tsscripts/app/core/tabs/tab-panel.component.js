var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CommunicationService } from '../../services/communication.service';
import { LogInObj, User } from '../../services/models';
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
var TabPanelComponent = (function () {
    function TabPanelComponent(_route, router, questionAnswerService, questionService, authService, commServ) {
        this._route = _route;
        this.router = router;
        this.questionAnswerService = questionAnswerService;
        this.questionService = questionService;
        this.authService = authService;
        this.commServ = commServ;
        this.isLoading = false;
        this.route = _route;
        var user = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    TabPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = localStorage.getItem('auth_token');
        this.authService.getLoggedinObj().subscribe(function (res) {
            if (res && currentUser != null) {
                _this._logObj = new LogInObj();
                _this._logObj.user = new User();
                _this._logObj.user.name = res.name;
                _this._logObj.user.imageUrl = res.imageUrl;
                _this._logObj.isLoggedIn = true;
                _this._logObj.user.userId = res.userId;
            }
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.showLoader();
            _this.id = params['id'];
            _this.questionAnswerService.getQuestionsByCategory(_this.id).subscribe(function (res) {
                _this.questions = res;
                for (var q = 0; q < _this.questions.length; q++) {
                    _this.questions[q].bestAnswer = _this.questions[q].answers[0];
                    if (_this.questions[q].bestAnswer && _this.questions[q].bestAnswer.text) {
                        _this.readMoreLink = " <a href ='/question/detail/" + _this.questions[q].id + "'>read more...</a>";
                        _this.questions[q].shareUrl = encodeURI("http://altap.azurewebsites.net//question/detail/" + _this.questions[q].id);
                    }
                }
                _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
                _this.hideLoader();
            });
        });
    };
    TabPanelComponent.prototype.ShowModal = function (questionId) {
        console.log(questionId);
    };
    TabPanelComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TabPanelComponent.prototype.showLoader = function () {
        this.isLoading = true;
    };
    TabPanelComponent.prototype.hideLoader = function () {
        this.isLoading = false;
    };
    TabPanelComponent.prototype.hideMenu = function () {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    };
    TabPanelComponent.prototype.gotoProfile = function () {
        this.router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    };
    return TabPanelComponent;
}());
TabPanelComponent = __decorate([
    Component({
        selector: 'ap-tab-panel',
        templateUrl: 'tab-panel.component.html',
        providers: [QuestionResolver, QuestionAnswerService, AuthenticationService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Router, QuestionAnswerService, QuestionResolver, AuthenticationService, CommunicationService])
], TabPanelComponent);
export { TabPanelComponent };
