var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
var LikeComponent = (function () {
    function LikeComponent(dataService, componentFactoryResolver) {
        this.dataService = dataService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.close = new EventEmitter();
    }
    LikeComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    LikeComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    LikeComponent.prototype.ngOnInit = function () {
    };
    return LikeComponent;
}());
LikeComponent = __decorate([
    Component({
        selector: 'like',
        templateUrl: 'like.component.html',
        providers: [QuestionAnswerService]
    }),
    __metadata("design:paramtypes", [QuestionAnswerService, ComponentFactoryResolver])
], LikeComponent);
export { LikeComponent };
