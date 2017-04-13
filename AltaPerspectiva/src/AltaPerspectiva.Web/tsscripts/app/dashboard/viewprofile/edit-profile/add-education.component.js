var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
import { Education } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
var AddEducationComponent = (function () {
    function AddEducationComponent(profileService) {
        this.profileService = profileService;
        this.education = new Education();
        this.close = new EventEmitter();
    }
    AddEducationComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    AddEducationComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    AddEducationComponent.prototype.saveEducation = function () {
        var _this = this;
        console.log(this.education);
        this.profileService.AddEducation(this.education).subscribe(function (res) {
            _this.close.emit('event');
            console.log(res);
        });
    };
    AddEducationComponent.prototype.DeleteEducation = function () {
        var _this = this;
        this.profileService.DeleteEducation(this.education).subscribe(function (res) {
            _this.education = new Education();
            _this.close.emit('event');
        });
    };
    return AddEducationComponent;
}());
AddEducationComponent = __decorate([
    Component({
        selector: 'add-education',
        templateUrl: 'add-education.component.html',
        providers: [ProfileService],
    }),
    __metadata("design:paramtypes", [ProfileService])
], AddEducationComponent);
export { AddEducationComponent };
