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
import { QuestionService } from '../../../services/question.service';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
var UserQuestionComponent = (function () {
    function UserQuestionComponent(questionService, profileService, _route) {
        this.questionService = questionService;
        this.profileService = profileService;
        this._route = _route;
    }
    UserQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(function (params) {
            _this.questionService.getQuestionsbyUserId(params['userId']).subscribe(function (res) {
                _this.questions = res;
                for (var q = 0; q < _this.questions.length; q++) {
                    _this.questions[q].bestAnswer = _this.questions[q].answers[0];
                    if (_this.questions[q].bestAnswer && _this.questions[q].bestAnswer.text) {
                        _this.readMoreLink = " <a href ='/question/detail/" + _this.questions[q].id + "'>read more...</a>";
                        _this.questions[q].shareUrl = encodeURI("http://altap.azurewebsites.net//question/detail/" + _this.questions[q].id);
                    }
                }
                _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
            });
        });
    };
    UserQuestionComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return UserQuestionComponent;
}());
UserQuestionComponent = __decorate([
    Component({
        templateUrl: 'user-question.component.html',
        providers: [QuestionService]
    }),
    __metadata("design:paramtypes", [QuestionService, ProfileService, ActivatedRoute])
], UserQuestionComponent);
export { UserQuestionComponent };
