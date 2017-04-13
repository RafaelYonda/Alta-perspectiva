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
import { ProfileService } from '../../services/profile.service';
import { CommunicationService } from '../../services/communication.service';
import { Router } from '@angular/router';
var TopFiveUserComponent = (function () {
    function TopFiveUserComponent(profileService, commServ, _router) {
        this.profileService = profileService;
        this.commServ = commServ;
        this._router = _router;
        this.topFiveUsers = [];
    }
    TopFiveUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commServ.getCategory().subscribe(function (catId) {
            _this.profileService.GetTopFiveUserByCategory(catId).subscribe(function (res) {
                _this.topFiveUsers = res;
            });
        });
    };
    TopFiveUserComponent.prototype.userover = function (userId) {
        var _this = this;
        this.userInfoDetails = null;
        console.log(userId);
        this.profileService.userInfoDetails(userId).subscribe(function (res) {
            _this.userInfoDetails = res;
        });
    };
    TopFiveUserComponent.prototype.gotoProfile = function (userId) {
        this._router.navigateByUrl('/dashboard/viewprofile/' + userId + '/user-question');
    };
    TopFiveUserComponent.prototype.goToAllUser = function () {
        this._router.navigateByUrl('question/all-user');
    };
    return TopFiveUserComponent;
}());
TopFiveUserComponent = __decorate([
    Component({
        selector: 'topfive-user',
        templateUrl: 'topfive-user.component.html',
        styleUrls: ['left-menu.css'],
        providers: [ProfileService]
    }),
    __metadata("design:paramtypes", [ProfileService, CommunicationService, Router])
], TopFiveUserComponent);
export { TopFiveUserComponent };
