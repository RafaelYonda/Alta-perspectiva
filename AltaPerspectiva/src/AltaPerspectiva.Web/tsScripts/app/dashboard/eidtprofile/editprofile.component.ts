import { Component, ViewContainerRef } from '@angular/core';
import { ImageUploadService } from '../../services/image-upload.service';
import { Profile } from '../../services/models';
import { ConfigService } from '../../services/config.service';
import { ProfileService } from '../../services/profile.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
    constructor(public toastr: ToastsManager, vRef: ViewContainerRef, private _imgService: ImageUploadService, private _configService: ConfigService, private profileService: ProfileService) {
        var imgageLocation = _configService.getConfig();
        var imageName = '';
        this.toastr.setRootViewContainerRef(vRef);
    }
    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!');
    }
    ngOnInit() {
        this._configService.getConfig().subscribe(res => {      //Get config for image
            this.imageLink = res.profileImage;
            var user = this.profileService.GetUser().subscribe(usr => {     //Get User Image
                if (usr.imageUrl != '')
                    this.imageLink += '/' + usr.imageUrl;
                else this.imageLink = '../images/userAdd.png';
            });
        });
    }
    changeHeader(headerName: string) {
        this._headerName = headerName;
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
}