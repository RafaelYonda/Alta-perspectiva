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
import { User } from '../../services/models';
import { ProfileService } from '../../services/profile.service';
var UserInfoComponent = (function () {
    function UserInfoComponent(profileService) {
        this.profileService = profileService;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.userInfoDetails(this.userObj.userId).subscribe(function (res) {
            _this.userObj.userInfoDetails = res;
        });
    };
    UserInfoComponent.prototype.over = function (userId) {
        this.userInfoDetails = null;
        this.userInfoDetails = this.userObj.userInfoDetails;
    };
    UserInfoComponent.prototype.onfocus = function () {
        console.log('HEllo focus');
    };
    return UserInfoComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", User)
], UserInfoComponent.prototype, "userObj", void 0);
__decorate([
    Input(),
    __metadata("design:type", Date)
], UserInfoComponent.prototype, "viewDate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], UserInfoComponent.prototype, "isAnonymous", void 0);
UserInfoComponent = __decorate([
    Component({
        selector: 'user-info',
        templateUrl: 'user-info.component.html',
        providers: [ProfileService]
    }),
    __metadata("design:paramtypes", [ProfileService])
], UserInfoComponent);
export { UserInfoComponent };
