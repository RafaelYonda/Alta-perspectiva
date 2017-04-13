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
import { Place } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
var AddPlaceComponent = (function () {
    function AddPlaceComponent(profileService) {
        this.profileService = profileService;
        this.place = new Place();
        this.close = new EventEmitter();
    }
    AddPlaceComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    AddPlaceComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    AddPlaceComponent.prototype.savePlace = function () {
        var _this = this;
        console.log(this.place);
        this.profileService.AddPlace(this.place).subscribe(function (res) {
            _this.close.emit('event');
            console.log(res);
        });
    };
    AddPlaceComponent.prototype.DeletePlace = function () {
        var _this = this;
        this.profileService.DeletePlace(this.place).subscribe(function (res) {
            _this.place = new Place();
            _this.close.emit('event');
            console.log(res);
        });
    };
    return AddPlaceComponent;
}());
AddPlaceComponent = __decorate([
    Component({
        selector: 'add-place',
        templateUrl: 'add-place.component.html',
        providers: [ProfileService],
    }),
    __metadata("design:paramtypes", [ProfileService])
], AddPlaceComponent);
export { AddPlaceComponent };
