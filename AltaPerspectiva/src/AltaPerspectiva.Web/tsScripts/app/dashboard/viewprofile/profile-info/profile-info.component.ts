import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ConfigService } from '../../../services/config.service';
import { CredentialViewModel } from '../../../services/models/models.profile';
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
    showDescription = true;
    imageLink: string;
    credential: CredentialViewModel = new CredentialViewModel();
    hasCredential: boolean;
    hasDescription: boolean;
    constructor(private _imgService: ImageUploadService, private _configService: ConfigService, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver) {
    }
    ngOnInit() {
        this._configService.getConfig().subscribe(res => {      //Get config for image
            console.log(res);
            this.imageLink = res.profileImage;
            var user = this.profileService.GetUserCredential().subscribe(usr => {     //Get User Image
                this.credential = usr;
                this.hasCredential = this.credential.title.trim() != "" ? false : true;
                this.hasDescription = this.credential.description.trim() != "" ? false : true;
                console.log(usr);
                if (usr.imageUrl && (usr.imageUrl != ''))
                    this.imageLink += usr.imageUrl;
                else this.imageLink = '../images/userAdd.png';
                console.log(this.imageLink);
            });
        });
    }
    onChangeImage(event) {
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
    updateDecription() {
        //this.credential.description = description;
        this.profileService.saveDescription(this.credential).subscribe(res => {
            this.showDescription = true;
            this.ngOnInit();
        });
        //console.log(description);
    }
    @ViewChild('credentialDialogAnchor', { read: ViewContainerRef }) credentialDialogAnchor: ViewContainerRef;
    openCredentialDialogBox() {
        console.log('AddCredentialComponent');
        // Close any already open dialogs
        this.credentialDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddCredentialComponent);
        let dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.credential = this.credential;
        //dialogComponentRef.instance.question = question; // Not sure about the translation here
        dialogComponentRef.instance.close.subscribe(() => {
            this.ngOnInit();
            dialogComponentRef.destroy();
        });
    }
}