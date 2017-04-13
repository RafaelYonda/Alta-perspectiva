var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var AppComponent = (function () {
    function AppComponent(elm, _authService, toastr, vRef) {
        this._authService = _authService;
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vRef);
        var username = elm.nativeElement.getAttribute('username');
        var token = elm.nativeElement.getAttribute('token');
        if (username && username != "") {
            localStorage.setItem('currentUser', username);
            localStorage.setItem('auth_token', token);
            this._authService.getLoggedinObj().subscribe(function (res) {
                localStorage.setItem('currentUserObject', res);
                localStorage.setItem('currentUserImage', res.imageUrl ? res.imageUrl : null);
            });
        }
        else {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('currentUserObject');
            localStorage.removeItem('currentUserImage');
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app',
        templateUrl: 'app.component.html',
        providers: [AuthenticationService]
    }),
    __metadata("design:paramtypes", [ElementRef, AuthenticationService, ToastsManager, ViewContainerRef])
], AppComponent);
export { AppComponent };
