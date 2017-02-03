import { Component } from '@angular/core';
import { Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../services/image-upload.service';
import { ProfileService } from '../../services/profile.service';
import { ConfigService } from '../../services/config.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/viewprofile.component.html',
    providers: [ProfileService, ConfigService]
})
export class ViewProfileComponent {
    route: any;
    imageLink: string;
    constructor(private profileService: ProfileService, private _route: ActivatedRoute, private _configService: ConfigService) {
        this.route = _route;
    }
    ngOnInit() {
        this.SetImage();
    }
    SetImage() {
        this._configService.getConfig().subscribe(res => {
            this.imageLink = res.profileImage;
            var user = this.profileService.GetUser().subscribe(usr => {
                if (usr.imageUrl != '')
                    this.imageLink += '/' + usr.imageUrl;
                else this.imageLink = '../images/userAdd.png';
            });
        });
    }
}