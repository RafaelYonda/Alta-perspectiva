var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { CommunicationService } from '../../services/communication.service';
import { CategoryService } from '../../services/category.service';
import { DateName } from '../../services/models';
var CategoryMenuPanelComponent = (function () {
    function CategoryMenuPanelComponent(questionService, categoryService, commServ) {
        this.categoryService = categoryService;
        this.commServ = commServ;
        this.isbackGround = false;
        this.date = new DateName();
        this.questionService = questionService;
    }
    CategoryMenuPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commServ.getCategory().subscribe(function (logged) {
        });
        this.categoryService.getAllCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    return CategoryMenuPanelComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], CategoryMenuPanelComponent.prototype, "caegoryId", void 0);
CategoryMenuPanelComponent = __decorate([
    Component({
        selector: 'category-left-menu',
        templateUrl: 'category-left-menu.component.html',
        styleUrls: ['left-menu.css'],
        providers: [QuestionAnswerService, CategoryService]
    }),
    __metadata("design:paramtypes", [QuestionAnswerService, CategoryService, CommunicationService])
], CategoryMenuPanelComponent);
export { CategoryMenuPanelComponent };
