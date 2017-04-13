var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
var NavDashboard = (function () {
    function NavDashboard(authService) {
        this.authService = authService;
        this.isbackGround = false;
        this._authService = authService;
        this._logObj = authService.getLoggedinObj();
    }
    return NavDashboard;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], NavDashboard.prototype, "className", void 0);
NavDashboard = __decorate([
    Component({
        selector: 'ap-navdashboard',
        encapsulation: ViewEncapsulation.None,
        providers: [AuthenticationService],
        templateUrl: 'navdashboard.component.html',
        styleUrls: ['navdashboard.component.css'],
    }),
    __metadata("design:paramtypes", [AuthenticationService])
], NavDashboard);
export { NavDashboard };
var LogInObj = (function () {
    function LogInObj() {
    }
    return LogInObj;
}());
export { LogInObj };
var User = (function () {
    function User() {
    }
    return User;
}());
export { User };
