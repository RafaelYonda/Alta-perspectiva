var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LogInObj, User } from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, ComponentFactoryResolver, Input, ViewEncapsulation } from '@angular/core';
var NavBarComponent = (function () {
    function NavBarComponent(authService, componentFactoryResolver, _router) {
        this.authService = authService;
        this.componentFactoryResolver = componentFactoryResolver;
        this._router = _router;
        this.isbackGround = false;
        this._authService = authService;
        var user = new User();
        this._logObj = { isLoggedIn: false, user: user };
    }
    NavBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currentUser = localStorage.getItem('auth_token');
        if (currentUser == null) {
            var user = new User();
            this._logObj = { isLoggedIn: false, user: user };
            return;
        }
        this._authService.getLoggedinObj().subscribe(function (res) {
            _this._logObj = new LogInObj();
            _this._logObj.user = new User();
            _this._logObj.user.name = res.name;
            _this._logObj.user.imageUrl = res.imageUrl;
            _this._logObj.isLoggedIn = true;
            _this._logObj.user.userId = res.userId;
        });
    };
    NavBarComponent.prototype.gotoProfile = function () {
        this._router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    };
    NavBarComponent.prototype.togglemenu = function () {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.add("expand");
    };
    return NavBarComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NavBarComponent.prototype, "className", void 0);
NavBarComponent = __decorate([
    Component({
        selector: 'nav-bar',
        encapsulation: ViewEncapsulation.None,
        providers: [AuthenticationService],
        templateUrl: 'nav-bar.component.html',
        styleUrls: ['nav-bar.component.css'],
    }),
    __metadata("design:paramtypes", [AuthenticationService, ComponentFactoryResolver, Router])
], NavBarComponent);
export { NavBarComponent };
