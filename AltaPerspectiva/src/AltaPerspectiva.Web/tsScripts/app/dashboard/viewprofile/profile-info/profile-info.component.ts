import { Component } from '@angular/core';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ConfigService } from '../../../services/config.service';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'profile-info',
    templateUrl: 'js/app/dashboard/viewprofile/profile-info/profile-info.component.html',
    providers: [ImageUploadService, ConfigService]
})
export class ProfileInfoComponent {
    username='Rafael Yonda'
    isHidden = true;
    imageLink: string;
    constructor(private _imgService: ImageUploadService, private _configService: ConfigService, private profileService: ProfileService) {
    }
    ngOnInit() {
        this._configService.getConfig().subscribe(res => {      //Get config for image
            this.imageLink = res.profileImage;
            var user = this.profileService.GetUser().subscribe(usr => {     //Get User Image
                console.log(usr);
                if (usr.imageUrl&&(usr.imageUrl != ''))
                    this.imageLink += '/' + usr.imageUrl;
                else this.imageLink = '../images/userAdd.png';
            });
        });
    }
    onChange(event) {
        let file = event.srcElement.files;
        //Upload the image 
        this._imgService
            .upload(file)
            .subscribe(res => {
                this.ngOnInit();
            });
    }
    UpdateUserName() {
        console.log(this.username);
    }
}