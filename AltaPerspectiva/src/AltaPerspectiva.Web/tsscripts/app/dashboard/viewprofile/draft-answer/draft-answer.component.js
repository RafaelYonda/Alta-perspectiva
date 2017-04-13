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
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { AnswerViewModel } from '../../../services/models';
import { Router } from '@angular/router';
var DraftAnswerComponent = (function () {
    function DraftAnswerComponent(_route, profileService, _router) {
        this._route = _route;
        this.profileService = profileService;
        this._router = _router;
    }
    DraftAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(function (params) {
            _this.profileService.GetDraftedQuestions().subscribe(function (res) {
                _this.questions = res;
                _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
            });
        });
    };
    DraftAnswerComponent.prototype.publishAnswer = function (_id) {
        var _this = this;
        this.answerVM = new AnswerViewModel();
        this.answerVM = this.questions.find(function (x) { return x.id == _id; }).bestAnswer;
        this.profileService.PostDraftAnswer(this.answerVM).subscribe(function (res) {
            _this._router.navigateByUrl('question/detail/' + _this.answerVM.questionId, { skipLocationChange: true });
        });
    };
    return DraftAnswerComponent;
}());
DraftAnswerComponent = __decorate([
    Component({
        templateUrl: 'draft-answer.component.html',
        providers: [ProfileService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute, ProfileService, Router])
], DraftAnswerComponent);
export { DraftAnswerComponent };
