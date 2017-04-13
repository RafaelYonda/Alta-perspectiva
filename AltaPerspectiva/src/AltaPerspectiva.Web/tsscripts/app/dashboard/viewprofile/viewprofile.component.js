var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { ConfigService } from '../../services/config.service';
import { CredentialViewModel, Employment, Education, Place, OtherExperience } from '../../services/models/models.profile';
import { LogInObj } from '../../services/models';
import { AddEducationComponent } from './edit-profile/add-education.component';
import { AddEmploymentComponent } from './edit-profile/add-employment.component';
import { AddOtherExperienceComponent } from './edit-profile/add-otherexperience.component';
import { AddPlaceComponent } from './edit-profile/add-place.component';
import { AuthenticationService } from '../../services/authentication.service';
var ViewProfileComponent = (function () {
    function ViewProfileComponent(profileService, _route, _configService, _router, componentFactoryResolver, _authService) {
        this.profileService = profileService;
        this._route = _route;
        this._configService = _configService;
        this._router = _router;
        this.componentFactoryResolver = componentFactoryResolver;
        this._authService = _authService;
        this.credential = new CredentialViewModel();
        this.employment = new Employment();
        this.education = new Education();
        this.place = new Place();
        this.otherExperience = new OtherExperience();
        this.isOwner = false;
        this._logObj = new LogInObj();
        this.route = _route;
    }
    ViewProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = this._route.snapshot.params['userId'];
        document.getElementById('question-route').focus();
        this._route.params.subscribe(function (params) {
            var currentUser = localStorage.getItem('auth_token');
            _this._authService.getLoggedinObj().subscribe(function (res) {
                if (res && currentUser != "null") {
                    _this._logObj.isLoggedIn = true;
                    _this._logObj.isLoggedIn = true;
                    if (params['userId'] == res.userId)
                        _this.isOwner = true;
                    else
                        _this.isOwner = false;
                }
            });
            _this.profileService.GetUsercredentialByUserId(params['userId']).subscribe(function (usr) {
                _this.credential = usr;
                _this.changeCredentialStatus();
                _this.credential.userId = params['userId'];
            });
            _this.profileService.getProfileStatistics(params['userId']).subscribe(function (profileParam) {
                _this.profileParam = profileParam;
            });
            _this.profileService.getCategoryWiseAnswer(params['userId']).subscribe(function (categoryWiseAnswer) {
                _this.categoryWiseAnswers = categoryWiseAnswer;
            });
            _this.profileService.addProfileViewCount(params['userId']).subscribe(function (res) {
                console.log(res);
            });
        });
    };
    ViewProfileComponent.prototype.onUpdatedProfile = function (updated) {
        if (updated)
            this.refreshData();
    };
    ViewProfileComponent.prototype.refreshData = function () {
        var _this = this;
        this.profileService.GetUsercredentialByUserId(this.userId).subscribe(function (usr) {
            _this.credential = usr;
            _this.changeCredentialStatus();
        });
    };
    ViewProfileComponent.prototype.changeCredentialStatus = function () {
        if (this.credential.educations && this.credential.educations.length > 0) {
            this.generateEducationHtml();
        }
        else {
            this.educationExists = false;
        }
        if (this.credential.employments && this.credential.employments.length > 0) {
            this.generateEmploymentHtml();
        }
        else {
            this.employmentExists = false;
        }
        if (this.credential.places && this.credential.places.length > 0) {
            this.generatePlaceHtml();
        }
        else {
            this.placeExists = false;
        }
        if (this.credential.otherExperiences && this.credential.otherExperiences.length > 0) {
            this.generateOtherHtml();
        }
        else {
            this.otherExperienceExists = false;
        }
    };
    ViewProfileComponent.prototype.generateEmploymentHtml = function () {
        this.employmentExists = true;
        this.employmentHtml = " " + this.credential.employments[0].position.concat(" En ")
            .concat(this.credential.employments[0].companyName ? this.credential.employments[0].companyName : "").concat("&nbsp")
            .concat(this.credential.employments[0].startDate ? this.credential.employments[0].startDate.toString() : "")
            .concat(this.credential.employments[0].isCurrentlyWorking ? " presente " : this.credential.employments[0].endDate ? this.credential.employments[0].endDate.toString() : "");
    };
    ViewProfileComponent.prototype.generateEducationHtml = function () {
        this.educationExists = true;
        var primary = this.credential.educations[0].schoolName;
        if (this.credential.educations[0].concentration) {
            if (this.credential.educations[0].concentration.length > 1) {
                primary = primary.concat("&nbsp;").concat(this.credential.educations[0].concentration);
            }
        }
        var secondary = "";
        if (this.credential.educations[0].secondaryConcentration) {
            if (this.credential.educations[0].secondaryConcentration.length > 1) {
                secondary = "<br />".concat("&nbsp;&nbsp;&nbsp;&nbsp;").concat(this.credential.educations[0].secondaryConcentration);
            }
        }
        var degree = "";
        if (this.credential.educations[0].degreeType) {
            if (this.credential.educations[0].degreeType.length > 1) {
                degree = "<br />".concat("&nbsp;&nbsp;&nbsp;&nbsp;").concat(this.credential.educations[0].degreeType);
            }
        }
        var graduationYear = "";
        if (this.credential.educations[0].graduationYear) {
            graduationYear = "<br />".concat("&nbsp;&nbsp;&nbsp;&nbsp;").concat(this.credential.educations[0].graduationYear.toString());
        }
        var editHtml = "<a (click)='openEmploymentDialogAnchor()' class='edit'><i class='fa fa-edit'></i></a>";
        if (secondary == "" && degree == "" && graduationYear == "") {
            this.educationHtml = primary;
        }
        else {
            this.educationHtml = primary.concat(" & ").concat(secondary).concat(degree).concat(graduationYear);
        }
    };
    ViewProfileComponent.prototype.generatePlaceHtml = function () {
        this.placeExists = true;
        var place = this.credential.places[0];
        var placeHtml = "";
        if (place.isCurrentyLiving) {
            placeHtml = " Vive en " + place.locationName;
        }
        else {
            if (place.locationName) {
                placeHtml = " de " + place.locationName;
            }
        }
        this.placeHtml = placeHtml;
    };
    ViewProfileComponent.prototype.generateOtherHtml = function () {
        this.otherExperienceExists = true;
        var otherExperience = this.credential.otherExperiences[0];
        var placeHtml = "";
        if (otherExperience.description) {
            placeHtml = otherExperience.description;
        }
        this.othersHtml = placeHtml;
    };
    ViewProfileComponent.prototype.openEducationDialogAnchor = function () {
        var _this = this;
        if (!this.credential.id)
            return;
        this.educationDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddEducationComponent);
        var dialogComponentRef = this.educationDialogAnchor.createComponent(dialogComponentFactory);
        if (this.educationExists)
            this.education = this.credential.educations[0];
        dialogComponentRef.instance.education = this.education;
        dialogComponentRef.instance.education.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
            _this.refreshData();
        });
    };
    ViewProfileComponent.prototype.openEmploymentDialogAnchor = function () {
        var _this = this;
        if (!this.credential.id)
            return;
        this.employmentDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddEmploymentComponent);
        var dialogComponentRef = this.employmentDialogAnchor.createComponent(dialogComponentFactory);
        if (this.employmentExists)
            this.employment = this.credential.employments[0];
        dialogComponentRef.instance.employment = this.employment;
        dialogComponentRef.instance.employment.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
            _this.refreshData();
        });
    };
    ViewProfileComponent.prototype.openOtherexperienceDialogAnchor = function () {
        var _this = this;
        if (!this.credential.id)
            return;
        this.otherexperienceDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddOtherExperienceComponent);
        var dialogComponentRef = this.otherexperienceDialogAnchor.createComponent(dialogComponentFactory);
        if (this.otherExperienceExists)
            this.otherExperience = this.credential.otherExperiences[0];
        dialogComponentRef.instance.otherExperience = this.otherExperience;
        dialogComponentRef.instance.otherExperience.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
            _this.refreshData();
        });
    };
    ViewProfileComponent.prototype.openPlaceDialogAnchor = function () {
        var _this = this;
        if (!this.credential.id)
            return;
        this.placeDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddPlaceComponent);
        var dialogComponentRef = this.placeDialogAnchor.createComponent(dialogComponentFactory);
        if (this.placeExists)
            this.place = this.credential.places[0];
        dialogComponentRef.instance.place = this.place;
        dialogComponentRef.instance.place.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
            _this.refreshData();
        });
    };
    ViewProfileComponent.prototype.scrolToCredentials = function () {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
        document.getElementById('other-credentials').scrollIntoView();
    };
    ViewProfileComponent.prototype.hideMenu = function () {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
        document.getElementById('profile-info').scrollIntoView();
    };
    return ViewProfileComponent;
}());
__decorate([
    ViewChild('educationDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ViewProfileComponent.prototype, "educationDialogAnchor", void 0);
__decorate([
    ViewChild('employmentDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ViewProfileComponent.prototype, "employmentDialogAnchor", void 0);
__decorate([
    ViewChild('otherexperienceDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ViewProfileComponent.prototype, "otherexperienceDialogAnchor", void 0);
__decorate([
    ViewChild('placeDialogAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ViewProfileComponent.prototype, "placeDialogAnchor", void 0);
ViewProfileComponent = __decorate([
    Component({
        templateUrl: 'viewprofile.component.html',
        providers: [ProfileService, ConfigService, AuthenticationService]
    }),
    __metadata("design:paramtypes", [ProfileService, ActivatedRoute, ConfigService, Router, ComponentFactoryResolver, AuthenticationService])
], ViewProfileComponent);
export { ViewProfileComponent };
