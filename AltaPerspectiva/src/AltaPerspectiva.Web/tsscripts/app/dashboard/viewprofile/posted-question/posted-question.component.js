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
var PostedQuestionComponent = (function () {
    function PostedQuestionComponent(questionService, _route, profileService) {
        this.questionService = questionService;
        this._route = _route;
        this.profileService = profileService;
    }
    PostedQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(function (params) {
            _this.questionService.getPostedQuestionUserId(params['userId']).subscribe(function (res) {
                _this.questions = res;
                _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
            });
        });
    };
    PostedQuestionComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return PostedQuestionComponent;
}());
PostedQuestionComponent = __decorate([
    Component({
        templateUrl: 'posted-question.component.html',
        providers: [QuestionService]
    }),
    __metadata("design:paramtypes", [QuestionService, ActivatedRoute, ProfileService])
], PostedQuestionComponent);
export { PostedQuestionComponent };
