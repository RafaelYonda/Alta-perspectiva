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
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var TwitterComponent = (function () {
    function TwitterComponent(profileService, toastr) {
        this.profileService = profileService;
        this.toastr = toastr;
        this.close = new EventEmitter();
    }
    TwitterComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    TwitterComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    TwitterComponent.prototype.saveTitle = function () {
        var _this = this;
        var credential = new CredentialViewModel();
        credential.userId = this.useId;
        credential.twitterLink = this.title;
        this.profileService.SaveSocialLink(credential).subscribe(function (res) {
            _this.toastr.success('Updated successfully!');
            _this.close.emit('event');
            _this.title = '';
        });
    };
    TwitterComponent.prototype.DeleteTitle = function () {
        var _this = this;
        console.log('Deleted with userId');
        console.log(this.title);
        var credential = new CredentialViewModel();
        credential.userId = this.useId;
        credential.twitterLink = 'twitter';
        this.profileService.DeleteSocialLink(credential).subscribe(function (res) {
            _this.toastr.warning('Deleted successfully!');
            _this.close.emit('event');
            _this.title = '';
        });
    };
    return TwitterComponent;
}());
TwitterComponent = __decorate([
    Component({
        selector: 'twitter',
        templateUrl: 'twitter.component.html',
        providers: [ProfileService],
    }),
    __metadata("design:paramtypes", [ProfileService, ToastsManager])
], TwitterComponent);
export { TwitterComponent };