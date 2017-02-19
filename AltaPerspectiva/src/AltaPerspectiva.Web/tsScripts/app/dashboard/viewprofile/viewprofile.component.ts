
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../services/image-upload.service';
import { ProfileService } from '../../services/profile.service';

import { ConfigService } from '../../services/config.service';
import { CredentialViewModel, Employment, Education, Place, OtherExperience, ProfileParameter} from '../../services/models/models.profile';



import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { CategoryWiseAnswer } from '../../services/models/models.profile';
//Modals
import { AddEducationComponent } from './edit-profile/add-education.component';
import { AddEmploymentComponent } from './edit-profile/add-employment.component';//done

import { AddOtherExperienceComponent } from './edit-profile/add-otherexperience.component';
import { AddPlaceComponent } from './edit-profile/add-place.component';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/viewprofile.component.html',
    providers: [ProfileService, ConfigService]
})
export class ViewProfileComponent {
    profileParam: ProfileParameter;
    categoryWiseAnswers: CategoryWiseAnswer[];
    route: any;
    imageLink: string;

    credential: CredentialViewModel = new CredentialViewModel();
    employment: Employment = new Employment();
    education: Education = new Education();
    place: Place = new Place();

    userId: string;
    otherExperience: OtherExperience = new OtherExperience();
    //employmentExists: boolean;
    //educationExists: boolean;
    //placeExists: boolean;
    //otherExperienceExists: boolean;

    employmentHtml: string;
    educationHtml: string;
    placeHtml: string;
    othersHtml: string;


    constructor(private profileService: ProfileService, private _route: ActivatedRoute, private _configService: ConfigService, private _router: Router, private componentFactoryResolver: ComponentFactoryResolver ) {
        this.route = _route;
    }
    @ViewChild(ProfileInfoComponent) profileInfo: ProfileInfoComponent
    ngOnInit() {

        this.userId = this._route.snapshot.params['userId'];

        document.getElementById('question-route').focus();
        //document.getElementById('question-link').focus();
        this._route.params.subscribe(params => {
            
            this.profileService.GetUsercredentialByUserId(params['userId']).subscribe(usr => {
                this.credential = usr;
                this.changeCredentialStatus();
                this.profileInfo.credential = this.credential;
                this.credential.userId = params['userId'];      // in case credential is null then preserve the userId
                this.profileInfo.ngOnInit();               
            });
            //========Statistics=======
            this.profileService.getProfileParameter(params['userId']).subscribe(profileParam => {
                this.profileParam = profileParam;
                console.log(profileParam);
            });
            //========Category=======
            this.profileService.getCategoryWiseAnswer(params['userId']).subscribe(categoryWiseAnswer => {
                this.categoryWiseAnswers = categoryWiseAnswer;
                console.log(categoryWiseAnswer);
            });
            //================ProfileViewCount
            this.profileService.ProfileViewCount(params['userId']).subscribe(res => {
                
            })

        });
    }   
    changeCredentialStatus() {
        console.log('changeCredentialStatus');
        

    }
    //refreshData() {
    //    this.profileService.GetUsercredentialByUserId(this.userId).subscribe(usr => {
    //        this.credential = usr;

    //        this.changeCredentialStatus();

    //        this.profileInfo.credential = this.credential;
    //        this.profileInfo.ngOnInit();
    //    });
    //}

    //changeCredentialStatus()
    //{
        
    //    if (this.credential.educations && this.credential.educations.length > 0)
    //    {
    //        this.generateEducationHtml();
    //    }
    //    if (this.credential.employments && this.credential.employments.length > 0)
    //    {
    //        //this.generateEmploymentHtml();
    //    }
    //    if (this.credential.places && this.credential.places.length > 0)
    //        this.placeExists = true;
    //    if (this.credential.otherExperience && this.credential.otherExperience.length > 0)
    //        this.otherExperienceExists = true;
    //}

    //generateEmploymentHtml() {

    //    this.employmentExists = true;                

    //    //this.employmentHtml = this.credential.employments[0].position.concat(" at ")
    //    //    .concat(this.credential.employments[0].companyName ? this.credential.employments[0].companyName : "").concat(" <br/> ")
    //    //    .concat(this.credential.employments[0].startDate.getFullYear().toString()).concat("-")
    //    //    .concat( this.credential.employments[0].isCurrentlyWorking ? "present" : this.credential.employments[0].endDate.getFullYear().toString());
    //}

    //generateEducationHtml()
    //{
    //    /// set education flag to make it visible
    //    this.educationExists = true;

    //    var primary = "<i class='fa fa-university'></i> ";

    //    if (this.credential.educations[0].concentration) {
    //        if (this.credential.educations[0].concentration.length > 1) {
    //           primary = primary.concat(this.credential.educations[0].concentration);
    //        }
    //    }

    //    var secondary = "";   

    //    if (this.credential.educations[0].secondaryConcentration) {
    //        if (this.credential.educations[0].secondaryConcentration.length > 1) {
    //            secondary = this.credential.educations[0].secondaryConcentration;
    //        }
    //    }

    //    var degree = "";

    //    if (this.credential.educations[0].degreeType) {
    //        if (this.credential.educations[0].degreeType.length > 1) {
    //            degree = "<br /> ".concat( this.credential.educations[0].degreeType);
    //        }
    //    }

    //    this.educationHtml = primary.concat(" & ").concat(secondary).concat(degree);
    //}


    @ViewChild('educationDialogAnchor', { read: ViewContainerRef }) educationDialogAnchor: ViewContainerRef;
    openEducationDialogAnchor() {

        this.educationDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddEducationComponent);
        let dialogComponentRef = this.educationDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.education = this.education;

        dialogComponentRef.instance.education.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
           // this.refreshData();
        });
    }

    @ViewChild('employmentDialogAnchor', { read: ViewContainerRef }) employmentDialogAnchor: ViewContainerRef;
    openEmploymentDialogAnchor() {

        this.employmentDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddEmploymentComponent);
        let dialogComponentRef = this.employmentDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.employment = this.employment;
        dialogComponentRef.instance.employment.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
        });
    }
    @ViewChild('otherexperienceDialogAnchor', { read: ViewContainerRef }) otherexperienceDialogAnchor: ViewContainerRef;
    openOtherexperienceDialogAnchor() {

        this.otherexperienceDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddOtherExperienceComponent);
        let dialogComponentRef = this.otherexperienceDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.otherExperience = this.otherExperience;
        dialogComponentRef.instance.otherExperience.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
        });
    }
    @ViewChild('placeDialogAnchor', { read: ViewContainerRef }) placeDialogAnchor: ViewContainerRef;
    openPlaceDialogAnchor() {

        this.placeDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddPlaceComponent);
        let dialogComponentRef = this.placeDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.place = this.place;
        dialogComponentRef.instance.place.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
        });
    }
   
}