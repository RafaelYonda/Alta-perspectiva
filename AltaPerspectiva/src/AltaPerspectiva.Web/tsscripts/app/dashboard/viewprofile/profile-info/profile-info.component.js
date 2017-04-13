var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ConfigService } from '../../../services/config.service';
import { CredentialViewModel } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { AddCredentialComponent } from '../edit-profile/add-credential.component';
import { PreviewImageComponent } from '../edit-profile/preview-image.component';
import { TwitterComponent } from '../edit-profile/twitter.component';
import { FacebookComponent } from '../edit-profile/facebook.component';
import { LinkedinComponent } from '../edit-profile/linkedin.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
var ProfileInfoComponent = (function () {
    function ProfileInfoComponent(_imgService, _configService, profileService, componentFactoryResolver, _authService, toastr, vcr, _router) {
        this._imgService = _imgService;
        this._configService = _configService;
        this.profileService = profileService;
        this.componentFactoryResolver = componentFactoryResolver;
        this._authService = _authService;
        this.toastr = toastr;
        this._router = _router;
        this.isUserHidden = true;
        this.showDescription = true;
        this.onUpdated = new EventEmitter();
        this._CredentialData = new BehaviorSubject(null);
        this.toastr.setRootViewContainerRef(vcr);
    }
    ProfileInfoComponent.prototype.ngOnInit = function () {
        if (this.credential.title)
            this.credential.title = this.credential.title.trim() == '' ? null : this.credential.title.trim();
        if (this.credential.description)
            this.credential.description = this.credential.description.trim() == '' ? null : this.credential.description.trim();
        this.isImageUpdated = false;
    };
    ProfileInfoComponent.prototype.ngOnChanges = function (changes) {
        if (changes['credential']) {
            this.getCredetialOnParentLoaded(this.credential);
        }
    };
    ProfileInfoComponent.prototype.getCredetialOnParentLoaded = function (data) {
        if (!data.userId)
            return;
        this.credential = data;
        if (!this.credential.firstName || !this.credential.lastName)
            this.isUserHidden = false;
        if (this.credential.imageUrl && (this.credential.imageUrl != ''))
            this.imageLink = this.credential.imageUrl;
        else
            this.imageLink = '../images/userAdd.png';
        return data;
    };
    ProfileInfoComponent.prototype.getLoggedInUser = function (userId) {
        var _this = this;
        var currentUser = localStorage.getItem('auth_token');
        this._authService.getLoggedinObj().subscribe(function (res) {
            if (res && currentUser != "null") {
                if (userId == res.userId)
                    _this.isOwner = true;
            }
        });
    };
    ProfileInfoComponent.prototype.loadData = function () {
        var _this = this;
        this.profileService.GetUsercredentialByUserId(this.credential.userId).subscribe(function (usr) {
            _this.credential = usr;
            if (_this.credential.imageUrl && (_this.credential.imageUrl != '')) {
                _this.imageLink = _this.credential.imageUrl;
            }
            else
                _this.imageLink = '../images/userAdd.png';
        });
    };
    ProfileInfoComponent.prototype.onUploadClick = function () {
        this.openpreviewImageDialogBox();
    };
    ProfileInfoComponent.prototype.UpdateUserName = function () {
        var _this = this;
        this.isUserHidden = true;
        if (this.credential && ((this.credential.firstName.trim() == "") && (this.credential.lastName.trim() == "")))
            return;
        this.profileService.SaveUserName(this.credential.firstName, this.credential.lastName, this.credential.userId).subscribe(function (res) {
            _this.onUpdated.emit(true);
            _this.loadData();
        });
    };
    ProfileInfoComponent.prototype.updateDecription = function () {
        var _this = this;
        this.profileService.saveDescription(this.credential).subscribe(function (res) {
            _this.showDescription = true;
            _this.loadData();
        });
    };
    ProfileInfoComponent.prototype.openCredentialDialogBox = function () {
        var _this = this;
        this.credentialDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddCredentialComponent);
        var dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.credential = this.credential;
        dialogComponentRef.instance.close.subscribe(function () {
            _this.loadData();
            dialogComponentRef.destroy();
        });
    };
    ProfileInfoComponent.prototype.openpreviewImageDialogBox = function () {
        var _this = this;
        this.previewImageDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PreviewImageComponent);
        var dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.userId = this.credential.userId;
        dialogComponentRef.instance.close.subscribe(function () {
            _this.isImageUpdated = false;
            _this.loadData();
            dialogComponentRef.destroy();
        });
    };
    ProfileInfoComponent.prototype.opentwitterDialogBox = function (img) {
        var _this = this;
        this.twitterDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TwitterComponent);
        var dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.useId = this.credential.userId;
        dialogComponentRef.instance.title = this.credential.twitterLink;
        dialogComponentRef.instance.close.subscribe(function () {
            _this.isImageUpdated = false;
            _this.loadData();
            dialogComponentRef.destroy();
        });
    };
    ProfileInfoComponent.prototype.twitter = function () {
        if (!this.credential.twitterLink) {
            this.toastr.error('No tiene enlace!');
        }
        else {
            window.open(this.credential.twitterLink);
        }
    };
    ProfileInfoComponent.prototype.openfacebookDialogBox = function (img) {
        var _this = this;
        this.facebookDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(FacebookComponent);
        var dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.useId = this.credential.userId;
        dialogComponentRef.instance.title = this.credential.facebookLink;
        dialogComponentRef.instance.close.subscribe(function () {
            _this.isImageUpdated = false;
            _this.loadData();
            dialogComponentRef.destroy();
        });
    };
    ProfileInfoComponent.prototype.facebook = function () {
        if (!this.credential.facebookLink) {
            this.toastr.error('No tiene enlace!');
        }
        else {
            window.open(this.credential.facebookLink);
        }
    };
    ProfileInfoComponent.prototype.openlinkedinDialogBox = function (img) {
        var _this = this;
        this.linkedinDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LinkedinComponent);
        var dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.useId = this.credential.userId;
        dialogComponentRef.instance.title = this.credential.linkedinLink;
        dialogComponentRef.instance.close.subscribe(function () {
            _this.isImageUpdated = false;
            _this.loadData();
            dialogComponentRef.destroy();
        });
    };
    ProfileInfoComponent.prototype.linkedin = function () {
        if (!this.credential.linkedinLink) {
            this.toastr.error('No tiene enlace!');
        }
        else {
            window.open(this.credential.linkedinLink);
        }
    };
    return ProfileInfoComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ProfileInfoComponent.prototype, "isOwner", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ProfileInfoComponent.prototype, "onUpdated", void 0);
__decorate([
    Input(),
    __metadata("design:type", CredentialViewModel)
], ProfileInfoComponent.prototype, "credential", void 0);
__decorate([
    ViewChild('credentialDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ProfileInfoComponent.prototype, "credentialDialogAnchor", void 0);
__decorate([
    ViewChild('previewImageDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ProfileInfoComponent.prototype, "previewImageDialogAnchor", void 0);
__decorate([
    ViewChild('twitterDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ProfileInfoComponent.prototype, "twitterDialogAnchor", void 0);
__decorate([
    ViewChild('facebookDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ProfileInfoComponent.prototype, "facebookDialogAnchor", void 0);
__decorate([
    ViewChild('linkedinDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ProfileInfoComponent.prototype, "linkedinDialogAnchor", void 0);
ProfileInfoComponent = __decorate([
    Component({
        selector: 'profile-info',
        templateUrl: 'profile-info.component.html',
        providers: [ImageUploadService, ConfigService, AuthenticationService],
    }),
    __metadata("design:paramtypes", [ImageUploadService, ConfigService, ProfileService, ComponentFactoryResolver, AuthenticationService, ToastsManager, ViewContainerRef, Router])
], ProfileInfoComponent);
export { ProfileInfoComponent };
