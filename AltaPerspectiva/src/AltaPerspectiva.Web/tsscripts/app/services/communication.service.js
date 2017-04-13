var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FilterParameter } from './models';
var CommunicationService = CommunicationService_1 = (function () {
    function CommunicationService() {
        this.commentAdded = new Subject();
        this.objChange = new Subject();
        this.questionSubmitted = new Subject();
        this.commentCountAdd = new Subject();
        this.toggleClicked = new Subject();
        return CommunicationService_1.instance = CommunicationService_1.instance || this;
    }
    CommunicationService.prototype.setComment = function (comment) {
        this.comment = comment;
        this.commentAdded.next(this.comment);
    };
    CommunicationService.prototype.getComment = function () {
        return this.commentAdded.asObservable();
    };
    CommunicationService.prototype.setCategory = function (catId) {
        this.categoryId = catId;
        this.objChange.next(this.categoryId);
    };
    CommunicationService.prototype.getCategory = function () {
        return this.objChange.asObservable();
    };
    CommunicationService.prototype.setTopicId = function (topicId) {
        this.topicId = topicId;
    };
    CommunicationService.prototype.getTopicId = function () {
        return this.topicId;
    };
    CommunicationService.prototype.setLevelId = function (levelId) {
        this.levelId = levelId;
    };
    CommunicationService.prototype.getLevelId = function () {
        return this.levelId;
    };
    CommunicationService.prototype.getFilterParameter = function () {
        this.filterParameter = new FilterParameter();
        if (this.categoryId)
            this.filterParameter.categoryId = this.categoryId;
        if (this.topicId)
            this.filterParameter.topicId = this.topicId;
        if (this.levelId)
            this.filterParameter.levelId = this.levelId;
        return this.filterParameter;
    };
    CommunicationService.prototype.questionSubmit = function (question) {
        this.questionSubmitted.next(question);
    };
    CommunicationService.prototype.informQuestionSubmit = function () {
        return this.questionSubmitted.asObservable();
    };
    CommunicationService.prototype.setCommentsCount = function (EventArg) {
        this.commentCountAdd.next(EventArg);
    };
    CommunicationService.prototype.getCommentsCount = function () {
        return this.commentCountAdd.asObservable();
    };
    CommunicationService.prototype.setToggleClicked = function () {
        this.toggleClicked.next("False");
    };
    CommunicationService.prototype.getToggleClicked = function () {
        return this.toggleClicked.asObservable();
    };
    return CommunicationService;
}());
CommunicationService = CommunicationService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CommunicationService);
export { CommunicationService };
var CommnetCountEventArg = (function () {
    function CommnetCountEventArg() {
    }
    return CommnetCountEventArg;
}());
export { CommnetCountEventArg };
var CommunicationService_1;
