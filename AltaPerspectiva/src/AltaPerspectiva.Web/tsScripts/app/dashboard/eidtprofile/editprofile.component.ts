import { Component } from '@angular/core';
import { ImageUploadService } from '../../services/image-upload.service';
import { Profile } from '../../services/models';
import { ConfigService } from '../../services/config.service';
import { ProfileService } from '../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/editprofile.component.html',
    styleUrls: ['js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ImageUploadService, ConfigService, ProfileService]
})
export class EditProfileComponent {
    doc: Image;
    _headerName: string = 'Contact Info';
    imageLink: string;
    //profile: Profile;
    constructor(private _imgService: ImageUploadService, private _configService: ConfigService, private profileService: ProfileService) {
        var imgageLocation = _configService.getConfig();
        var imageName = '';
    }
    ngOnInit() {
        this._configService.getConfig().subscribe(res => {
            this.imageLink = res.profileImage;
            var user = this.profileService.GetUser().subscribe(usr => {
                console.log(usr.imageUrl);
                if (usr.imageUrl != '')
                    this.imageLink += '/' + usr.imageUrl;
                else this.imageLink = '../images/userAdd.png';
            });
            console.log(res);
            console.log(this.imageLink);
        });
    }
    changeHeader(headerName: string) {
        this._headerName = headerName;
    }
    onChange(event) {
        let file = event.srcElement.files;
        this._imgService
            .upload(file)
            .subscribe(res => {
                this.ngOnInit();
            console.log(res);
            });
        //location.reload();
    }
}