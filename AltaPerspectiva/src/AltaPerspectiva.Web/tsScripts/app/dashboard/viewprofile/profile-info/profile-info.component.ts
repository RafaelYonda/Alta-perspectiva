import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ConfigService } from '../../../services/config.service';
import { ProfileService } from '../../../services/profile.service';

import { AddCredentialComponent } from '../edit-profile/add-credential.component';
@Component({
    selector: 'profile-info',
    templateUrl: 'js/app/dashboard/viewprofile/profile-info/profile-info.component.html',
    providers: [ImageUploadService, ConfigService],
})
export class ProfileInfoComponent {
    username='Rafael Yonda'
    isHidden = true;
    imageLink: string;
    constructor(private _imgService: ImageUploadService, private _configService: ConfigService, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver) {
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
        this.profileService.SaveUserName(this.username).subscribe(res => {
            this.ngOnInit();
        });
        console.log(this.username);
    }
    @ViewChild('credentialDialogAnchor', { read: ViewContainerRef }) credentialDialogAnchor: ViewContainerRef;
    openCredentialDialogBox() {
        console.log('AddCredentialComponent');
        // Close any already open dialogs
        this.credentialDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddCredentialComponent);
        let dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        //dialogComponentRef.instance.question = question; // Not sure about the translation here
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
}