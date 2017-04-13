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
import { QuestionService } from '../../services/question.service';
import { CommunicationService } from '../../services/communication.service';
var LevelComponent = (function () {
    function LevelComponent(questionService, commServ) {
        this.commServ = commServ;
        this.questionService = questionService;
        this.levels = [];
    }
    LevelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.topicId = this.commServ.getTopicId();
        this.commServ.getCategory().subscribe(function (catId) {
            _this.categoryId = catId;
            _this.topicId = _this.commServ.getTopicId();
            _this.questionService.getLevel().subscribe(function (res) {
                _this.levels = res;
            });
        });
    };
    return LevelComponent;
}());
LevelComponent = __decorate([
    Component({
        selector: 'level',
        templateUrl: 'level.component.html',
        styleUrls: ['left-menu.css'],
        providers: [QuestionService]
    }),
    __metadata("design:paramtypes", [QuestionService, CommunicationService])
], LevelComponent);
export { LevelComponent };
