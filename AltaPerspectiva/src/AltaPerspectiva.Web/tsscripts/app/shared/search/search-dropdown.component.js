var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Question } from '../../services/models';
var ApSearchDropDownComponent = (function () {
    function ApSearchDropDownComponent(router, categoryService, questionsService) {
        this.router = router;
        this.categoryService = categoryService;
        this.questionsService = questionsService;
        this.submitEmitter = new EventEmitter();
        this.categoryID = '-1';
        this.topicID = '-1';
        this.levelID = '-1';
    }
    ApSearchDropDownComponent.prototype.ngOnInit = function () {
    };
    ApSearchDropDownComponent.prototype.onCategoryChange = function (categoryId) {
        var _this = this;
        this.categoryID = categoryId;
        this.questionsService.getTopicByCategoryid(this.categoryID).subscribe(function (res) {
            _this.topics = res;
        });
    };
    ApSearchDropDownComponent.prototype.onTopicChange = function (topicId) {
        var _this = this;
        this.topicID = topicId;
        this.questionsService.getlevel().subscribe(function (res) {
            _this.levels = res;
            _this.levelID = _this.levels[0].id;
        });
    };
    ApSearchDropDownComponent.prototype.onLevelChange = function (levelId) {
        this.levelID = levelId;
    };
    ApSearchDropDownComponent.prototype.onChange = function (isChecked) {
        this.isAnonymous = isChecked;
    };
    ApSearchDropDownComponent.prototype.submitQuestion = function () {
        var _this = this;
        this.question = new Question();
        this.question.title = this.title;
        this.question.body = this.body;
        this.question.topicId = this.topicID == '-1' ? '' : this.topicID;
        this.question.levelId = this.levelID == '-1' ? '' : this.levelID;
        this.question.isAnonymous = this.isAnonymous;
        if (this.categoryID != '-1')
            this.question.categoryIds.push(this.categoryID);
        else
            this.question.categoryIds.push(this.categories[0].id);
        this.questionsService.saveQuestionSaveViewModel(this.question).subscribe(function (res) {
            _this.question = res;
            console.log(_this.router.url);
            if (_this.router.url == "/question/home/1")
                _this.submitEmitter.emit("submitted");
            else
                _this.router.navigate(['/question/home/1']);
        });
    };
    return ApSearchDropDownComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], ApSearchDropDownComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], ApSearchDropDownComponent.prototype, "categories", void 0);
ApSearchDropDownComponent = __decorate([
    Component({
        selector: 'search-dropdown',
        templateUrl: 'search-dropdown.component.html',
        styleUrls: ['search.css'],
        providers: [CategoryService, QuestionAnswerService]
    }),
    __metadata("design:paramtypes", [Router, CategoryService, QuestionAnswerService])
], ApSearchDropDownComponent);
export { ApSearchDropDownComponent };
