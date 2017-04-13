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
import { CredentialViewModel } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
var AddCredentialComponent = (function () {
    function AddCredentialComponent(profileService) {
        this.profileService = profileService;
        this.credential = new CredentialViewModel();
        this.close = new EventEmitter();
    }
    AddCredentialComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    AddCredentialComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    AddCredentialComponent.prototype.saveCredentialTitle = function () {
        var _this = this;
        this.profileService.saveCredentialTitle(this.credential).subscribe(function (res) {
            _this.close.emit('event');
        });
    };
    AddCredentialComponent.prototype.DeleteCredentialTitle = function () {
        var _this = this;
        this.credential.title = "";
        this.profileService.saveCredentialTitle(this.credential).subscribe(function (res) {
            _this.close.emit('event');
        });
    };
    return AddCredentialComponent;
}());
AddCredentialComponent = __decorate([
    Component({
        selector: 'add-credential',
        templateUrl: 'add-credential.component.html',
        providers: [ProfileService],
    }),
    __metadata("design:paramtypes", [ProfileService])
], AddCredentialComponent);
export { AddCredentialComponent };
