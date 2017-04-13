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
import { QuestionService } from '../../services/question.service';
import { CommunicationService } from '../../services/communication.service';
var TopFiveTopicComponent = (function () {
    function TopFiveTopicComponent(questionService, commServ) {
        this.commServ = commServ;
        this.questionService = questionService;
        this.topFiveTopics = [];
    }
    TopFiveTopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commServ.getCategory().subscribe(function (catId) {
            _this.questionService.getTopFiveTopicsByCategoryId(catId).subscribe(function (res) {
                _this.topFiveTopics = [];
                if (_this.isHomePage) {
                    for (var i = 0; i < res.length; i++) {
                        _this.topFiveTopics.push(res[i]);
                        if (i == 4) {
                            break;
                        }
                    }
                }
                else {
                    _this.topFiveTopics = res;
                }
            });
        });
    };
    return TopFiveTopicComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TopFiveTopicComponent.prototype, "isHomePage", void 0);
TopFiveTopicComponent = __decorate([
    Component({
        selector: 'topfive-topic',
        templateUrl: 'topfive-topic.component.html',
        styleUrls: ['left-menu.css'],
        providers: [QuestionService]
    }),
    __metadata("design:paramtypes", [QuestionService, CommunicationService])
], TopFiveTopicComponent);
export { TopFiveTopicComponent };
