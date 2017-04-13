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
import { User } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
var QuestionFullscreenComponent = (function () {
    function QuestionFullscreenComponent(router, _route) {
        this.router = router;
        this._route = _route;
        this.route = _route;
        var user = new User();
        this._logObj = { isLoggedIn: false, user: user };
    }
    QuestionFullscreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        var currentUserName = localStorage.getItem('auth_token');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
        this.route.data
            .subscribe(function (res) {
            _this.question = res.question;
            console.log(_this.question);
        });
    };
    QuestionFullscreenComponent.prototype.hideMenu = function () {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    };
    QuestionFullscreenComponent.prototype.gotoProfile = function () {
        this.router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    };
    return QuestionFullscreenComponent;
}());
QuestionFullscreenComponent = __decorate([
    Component({
        templateUrl: 'question-fullscreen.component.html',
        providers: [QuestionResolver]
    }),
    __metadata("design:paramtypes", [Router, ActivatedRoute])
], QuestionFullscreenComponent);
export { QuestionFullscreenComponent };
