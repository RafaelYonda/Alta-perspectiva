var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ComponentFactoryResolver, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { CredentialViewModel } from '../../services/models/models.profile';
import { CommunicationService } from '../../services/communication.service';
var AllUserComponent = (function () {
    function AllUserComponent(authService, profileService, componentFactoryResolver, _router, commServ) {
        this.authService = authService;
        this.profileService = profileService;
        this.componentFactoryResolver = componentFactoryResolver;
        this._router = _router;
        this.commServ = commServ;
        this.loader = true;
        this.isbackGround = false;
        this.credential = new CredentialViewModel();
    }
    AllUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileService.GetTopHundredUser().subscribe(function (res) {
            _this.user = res;
            _this.loader = false;
        });
        this.userName = '';
        this.user = [];
        window.scroll(0, 0);
    };
    AllUserComponent.prototype.onKeyPress = function () {
        var _this = this;
        this.loader = true;
        if (this.userName) {
            this.profileService.GetUsers(this.userName).subscribe(function (res) {
                _this.user = [];
                _this.user = res;
                _this.loader = false;
            });
        }
    };
    return AllUserComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AllUserComponent.prototype, "className", void 0);
AllUserComponent = __decorate([
    Component({
        selector: 'all-users',
        providers: [AuthenticationService, ProfileService],
        templateUrl: 'all-user.html',
        styleUrls: ['all-user.css'],
    }),
    __metadata("design:paramtypes", [AuthenticationService, ProfileService, ComponentFactoryResolver, Router, CommunicationService])
], AllUserComponent);
export { AllUserComponent };
