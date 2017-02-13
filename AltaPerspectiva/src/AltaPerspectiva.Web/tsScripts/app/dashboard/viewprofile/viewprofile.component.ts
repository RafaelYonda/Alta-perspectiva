import { Component } from '@angular/core';
import { Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../services/image-upload.service';
import { ProfileService } from '../../services/profile.service';
import { ConfigService } from '../../services/config.service';
import { CredentialViewModel } from '../../services/models/models.profile';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/viewprofile.component.html',
    providers: [ProfileService, ConfigService]
})
export class ViewProfileComponent {
    route: any;
    imageLink: string;
    credential: CredentialViewModel = new CredentialViewModel();
    constructor(private profileService: ProfileService, private _route: ActivatedRoute, private _configService: ConfigService, private _router: Router) {
        this.route = _route;
    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.profileService.GetUsercredentialByUserId(params['userId']).subscribe(usr => {
                this.credential = usr;
                console.log(this.credential);
            });
        });
        //document.getElementById("question").focus();
        //var user = this.profileService.GetUserCredential().subscribe(usr => {     //Get User Image
        //    this.credential = usr;
        //    console.log(usr);
        //    this._router.navigateByUrl('dashboard/viewprofile/user-question/' + usr.id, { skipLocationChange: true });

        //});
        //this.SetImage();
    }
}