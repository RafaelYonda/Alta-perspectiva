
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../services/image-upload.service';
import { ProfileService } from '../../services/profile.service';
import { CommunicationService } from '../../services/communication.service';

import { ConfigService } from '../../services/config.service';
import { CredentialViewModel, Employment, Education, Place, OtherExperience, ProfileParameter} from '../../services/models/models.profile';
import {LogInObj} from '../../services/models';

import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { CategoryWiseAnswer } from '../../services/models/models.profile';
//=========Modals=========
import { AddEducationComponent } from './edit-profile/add-education.component';
import { AddEmploymentComponent } from './edit-profile/add-employment.component';

import { AddOtherExperienceComponent } from './edit-profile/add-otherexperience.component';
import { AddPlaceComponent } from './edit-profile/add-place.component';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
    templateUrl: 'viewprofile.component.html',
    providers: [ProfileService, ConfigService, AuthenticationService]
})
export class ViewProfileComponent {
    profileParam: ProfileParameter;
    categoryWiseAnswers: CategoryWiseAnswer[];
    route: any;
    imageLink: string;
    _logObj: LogInObj;
    credential: CredentialViewModel = new CredentialViewModel();
    employment: Employment = new Employment();
    education: Education = new Education();
    place: Place = new Place();

    userId: string;
    otherExperience: OtherExperience = new OtherExperience();
    employmentExists: boolean;
    educationExists: boolean;
    placeExists: boolean;
    otherExperienceExists: boolean;

    employmentHtml: string;
    educationHtml: string;
    placeHtml: string;
    othersHtml: string;
    isOwner = false;

    constructor(private profileService: ProfileService, private _route: ActivatedRoute, private commServ: CommunicationService, private _configService: ConfigService, private _router: Router, private componentFactoryResolver: ComponentFactoryResolver, private _authService: AuthenticationService) {
        this._logObj = new LogInObj();
        this.route = _route;
    }
    
    ngOnInit() {
        
        this.userId = this._route.snapshot.params['userId'];

        document.getElementById('question-route').focus();
        if (localStorage.getItem("userId") == this.userId) {
            this.isOwner = true;
        }
        //document.getElementById('question-link').focus();
        this._route.params.subscribe(params => {
            //===========Checkis owner  ==========
            var currentUser = localStorage.getItem('auth_token');
            this._authService.getLoggedinObj().subscribe(res => {
                if (res && currentUser != "null") {
                    this._logObj.isLoggedIn = true;
                    this._logObj.isLoggedIn = true;
                    if (params['userId'] == res.userId)
                        this.isOwner = true;
                    else
                        this.isOwner = false;
                }
            });
            //=====Get user Credential=========

            this.profileService.GetUsercredentialByUserId(params['userId']).subscribe(usr => {
                this.credential = usr;
                this.changeCredentialStatus();                
                this.credential.userId = params['userId'];      // in case credential is null then preserve the userId                              
            });
            //========Statistics=======
            this.profileService.getProfileStatistics(params['userId']).subscribe(profileParam => {
                this.profileParam = profileParam;               
            });
            //========Category=======
            this.profileService.getCategoryWiseAnswer(params['userId']).subscribe(categoryWiseAnswer => {
                this.categoryWiseAnswers = categoryWiseAnswer;
              
            });
            //================ProfileViewCount===
            this.profileService.addProfileViewCount(params['userId']).subscribe(res => {
                console.log(res);
            })

        });
    }   
    onUpdatedProfile(updated:any)
    {
        if (updated)
        {
            this.commServ.setuserUpdated();
            this.refreshData();
        }
            
    }
    refreshData() {
        this.profileService.GetUsercredentialByUserId(this.userId).subscribe(usr => {
            console.log(usr);
            localStorage.setItem('currentUserId', usr.userId);
            localStorage.setItem('currentUserName', usr.firstName +' '+ usr.lastName);
            localStorage.setItem('currentUserImage', usr.imageUrl ? usr.imageUrl : null);
            localStorage.setItem('userId', usr.userId);
            this.credential = usr;
            this.changeCredentialStatus();           
        });
    }

    changeCredentialStatus()
    {
        
        if (this.credential.educations && this.credential.educations.length > 0) {
            this.generateEducationHtml();
        } else {
            this.educationExists = false;         
        }
        if (this.credential.employments && this.credential.employments.length > 0)
        {
            this.generateEmploymentHtml();
        } else {
            this.employmentExists = false;
        }
        if (this.credential.places && this.credential.places.length > 0) {
            this.generatePlaceHtml();
        } else {
            this.placeExists = false;
        }
           
        if (this.credential.otherExperiences && this.credential.otherExperiences.length > 0) {
              this.generateOtherHtml();
        } else {
            this.otherExperienceExists = false;
        }
    }

    generateEmploymentHtml() {

        this.employmentExists = true;                

        this.employmentHtml = " " + this.credential.employments[0].position.concat(" En ")
            .concat(this.credential.employments[0].companyName ? this.credential.employments[0].companyName : "").concat("&nbsp")
                              .concat(this.credential.employments[0].startDate ? this.credential.employments[0].startDate.toString():"")
            .concat(this.credential.employments[0].isCurrentlyWorking ? " presente " : this.credential.employments[0].endDate ? this.credential.employments[0].endDate.toString():"");
    }
    generateEducationHtml()
    {
        /// set education flag to make it visible
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

        var editHtml = "<a (click)='openEmploymentDialogAnchor()' class='edit'><i class='fa fa-edit'></i></a>"
        if (secondary == "" && degree == "" && graduationYear=="") {
            this.educationHtml = primary;
        } else {
            this.educationHtml = primary.concat(" & ").concat(secondary).concat(degree).concat(graduationYear);
        }
    }
    generatePlaceHtml() {
        this.placeExists = true;
        let place = this.credential.places[0];
        var placeHtml = "";
        if (place.isCurrentyLiving) {
            placeHtml = " Vive en " + place.locationName ;
        } else {
            if (place.locationName) {
                placeHtml = " de " + place.locationName;
            }
            
        }
        this.placeHtml = placeHtml;
    }
    generateOtherHtml() {
        this.otherExperienceExists = true;
        let otherExperience = this.credential.otherExperiences[0];
        var placeHtml = "";
        if (otherExperience.description) {
            placeHtml = otherExperience.description;
        } 
        this.othersHtml = placeHtml;
    }

    @ViewChild('educationDialogAnchor', { read: ViewContainerRef }) educationDialogAnchor: ViewContainerRef;
    openEducationDialogAnchor() {
        if (!this.credential.id) return;
        this.educationDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddEducationComponent);
        let dialogComponentRef = this.educationDialogAnchor.createComponent(dialogComponentFactory);
        if (this.educationExists)
            this.education = this.credential.educations[0];
        dialogComponentRef.instance.education = this.education;

        dialogComponentRef.instance.education.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
            this.refreshData();
        });
    }

    @ViewChild('employmentDialogAnchor', { read: ViewContainerRef }) employmentDialogAnchor: ViewContainerRef;
    openEmploymentDialogAnchor() {
        if (!this.credential.id) return;
        this.employmentDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddEmploymentComponent);
        let dialogComponentRef = this.employmentDialogAnchor.createComponent(dialogComponentFactory);
        if (this.employmentExists)
            this.employment = this.credential.employments[0];
        dialogComponentRef.instance.employment = this.employment;
        dialogComponentRef.instance.employment.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
            this.refreshData();
        });
    }
    @ViewChild('otherexperienceDialogAnchor', { read: ViewContainerRef }) otherexperienceDialogAnchor: ViewContainerRef;
    openOtherexperienceDialogAnchor() {
        if (!this.credential.id) return;
        this.otherexperienceDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddOtherExperienceComponent);
        let dialogComponentRef = this.otherexperienceDialogAnchor.createComponent(dialogComponentFactory);
        if (this.otherExperienceExists)
            this.otherExperience = this.credential.otherExperiences[0];
        dialogComponentRef.instance.otherExperience = this.otherExperience;
        dialogComponentRef.instance.otherExperience.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
            this.refreshData();
        });
    }
    @ViewChild('placeDialogAnchor', { read: ViewContainerRef }) placeDialogAnchor: ViewContainerRef;
    openPlaceDialogAnchor() {
        if (!this.credential.id) return;
        this.placeDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddPlaceComponent);
        let dialogComponentRef = this.placeDialogAnchor.createComponent(dialogComponentFactory);
        if (this.placeExists)
            this.place = this.credential.places[0];
        dialogComponentRef.instance.place = this.place;
        dialogComponentRef.instance.place.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
            this.refreshData();
        });
    }
    
    scrolToCredentials() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
        document.getElementById('other-credentials').scrollIntoView();
    }
    hideMenu() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
        document.getElementById('profile-info').scrollIntoView();
    }
   
}