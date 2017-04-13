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
import { QuestionAnswerService } from '../../services/question-answer.service';
import { CategoryService } from '../../services/category.service';
import { CommunicationService } from '../../services/communication.service';
import { Router, ActivatedRoute } from '@angular/router';
var RelatedQuestionMenu = (function () {
    function RelatedQuestionMenu(questionService, categoryService, router, route, commServ) {
        this.commServ = commServ;
        this.questionService = questionService;
        this._router = router;
        this.route = route;
        this.questions = [];
    }
    RelatedQuestionMenu.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            var subs;
            if (_this.id == '0' || _this.id == 'undefined' || _this.id == undefined)
                subs = _this.questionService.getQuestions();
            else
                subs = _this.questionService.getRelatedQuestions(_this.id);
            subs.subscribe(function (res) {
                _this.questions = res;
            });
        });
    };
    return RelatedQuestionMenu;
}());
RelatedQuestionMenu = __decorate([
    Component({
        selector: 'related-question-left-menu',
        templateUrl: 'related-question-left-menu.component.html',
        styleUrls: ['left-menu.css'],
        providers: [QuestionAnswerService, CategoryService]
    }),
    __metadata("design:paramtypes", [QuestionAnswerService, CategoryService, Router, ActivatedRoute, CommunicationService])
], RelatedQuestionMenu);
export { RelatedQuestionMenu };
