/// <reference path="../../services/models/models.categorywiseanswer.ts" />
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../services/image-upload.service';
import { ProfileService } from '../../services/profile.service';
import { ProfileParameter } from '../../services/models/models.profileparameter';

import { ConfigService } from '../../services/config.service';
import { CredentialViewModel } from '../../services/models/models.profile';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { CategoryWiseAnswer } from '../../services/models/models.categorywiseanswer';
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
    constructor(private profileService: ProfileService, private _route: ActivatedRoute, private _configService: ConfigService, private _router: Router) {
        this.route = _route;
    }
    @ViewChild(ProfileInfoComponent) profileInfo: ProfileInfoComponent
    ngOnInit() {
        document.getElementById('question-route').focus();
        //document.getElementById('question-link').focus();
        this._route.params.subscribe(params => {
            this.profileService.GetUsercredentialByUserId(params['userId']).subscribe(usr => {
                this.credential = usr;
                this.profileInfo.credential = this.credential;
                this.profileInfo.ngOnInit();
                console.log(this.credential);
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

        });
    }
}