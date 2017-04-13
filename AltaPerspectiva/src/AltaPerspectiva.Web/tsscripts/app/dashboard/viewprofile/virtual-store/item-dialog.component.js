var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { ProductComment } from '../../../services/models/models.profile';
import { ActivatedRoute } from '@angular/router';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { AuthenticationService } from '../../../services/authentication.service';
var ItemDialogComponent = (function () {
    function ItemDialogComponent(_route, profileServ, componentFactoryResolver, _authService) {
        this._route = _route;
        this.profileServ = profileServ;
        this.componentFactoryResolver = componentFactoryResolver;
        this._authService = _authService;
        this.close = new EventEmitter();
        this.comment = new ProductComment();
    }
    ItemDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.comment.virtualStoreId = this.virtualStore.id;
        this._authService.getLoggedinObj().subscribe(function (res) {
            _this.comment.userViewModel = res;
        });
    };
    ItemDialogComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    ItemDialogComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    ItemDialogComponent.prototype.ngOnDestroy = function () {
    };
    ItemDialogComponent.prototype.postComment = function () {
        var _this = this;
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        if (this.comment.commentText == "")
            return;
        this.profileServ.SaveVirtualStoreProductComment(this.comment).subscribe(function (res) {
            _this.virtualStore.productComments.push(_this.comment);
            _this.comment = new ProductComment();
            _this.ngOnInit();
        });
    };
    ItemDialogComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    return ItemDialogComponent;
}());
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ItemDialogComponent.prototype, "logginAnchor", void 0);
ItemDialogComponent = __decorate([
    Component({
        templateUrl: 'item-dialog.component.html',
        providers: [AuthenticationService]
    }),
    __metadata("design:paramtypes", [ActivatedRoute, ProfileService, ComponentFactoryResolver, AuthenticationService])
], ItemDialogComponent);
export { ItemDialogComponent };
