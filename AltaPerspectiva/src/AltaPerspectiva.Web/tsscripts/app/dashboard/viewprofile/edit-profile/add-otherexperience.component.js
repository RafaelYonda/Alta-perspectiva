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
import { OtherExperience } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
import { CategoryService } from '../../../services/category.service';
var AddOtherExperienceComponent = (function () {
    function AddOtherExperienceComponent(profileService, categoryService) {
        this.profileService = profileService;
        this.categoryService = categoryService;
        this.otherExperience = new OtherExperience();
        this.close = new EventEmitter();
    }
    AddOtherExperienceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getAllCategories().subscribe(function (res) {
            _this.categories = res.sort();
        });
    };
    AddOtherExperienceComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    AddOtherExperienceComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    AddOtherExperienceComponent.prototype.saveOtherExperience = function () {
        var _this = this;
        console.log(this.otherExperience);
        this.profileService.AddOtherExperience(this.otherExperience).subscribe(function (res) {
            _this.close.emit('event');
            console.log(res);
        });
    };
    AddOtherExperienceComponent.prototype.DeleteOtherExperience = function () {
        var _this = this;
        this.profileService.DeleteOtherExperience(this.otherExperience).subscribe(function (res) {
            _this.otherExperience = new OtherExperience();
            _this.close.emit('event');
            console.log(res);
        });
    };
    return AddOtherExperienceComponent;
}());
AddOtherExperienceComponent = __decorate([
    Component({
        selector: 'add-otherexperience',
        templateUrl: 'add-otherexperience.component.html',
        providers: [ProfileService, CategoryService],
    }),
    __metadata("design:paramtypes", [ProfileService, CategoryService])
], AddOtherExperienceComponent);
export { AddOtherExperienceComponent };
