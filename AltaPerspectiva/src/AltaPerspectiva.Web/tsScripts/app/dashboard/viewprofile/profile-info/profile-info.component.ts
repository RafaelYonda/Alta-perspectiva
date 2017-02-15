import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver,Input } from '@angular/core';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ConfigService } from '../../../services/config.service';
import { CredentialViewModel } from '../../../services/models/models.profile';
import {User} from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';

import { AddCredentialComponent } from '../edit-profile/add-credential.component';
@Component({
    selector: 'profile-info',
    templateUrl: 'js/app/dashboard/viewprofile/profile-info/profile-info.component.html',
    providers: [ImageUploadService, ConfigService],
})
export class ProfileInfoComponent {
    //@Input() userObj: User;
    isUserHidden = true;
    showDescription = true;
    imageLink: string;
    @Input() credential: CredentialViewModel = new CredentialViewModel();
    hasCredential: boolean;
    hasDescription: boolean;
    constructor(private _imgService: ImageUploadService, private _configService: ConfigService, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver) {
    }
    ngOnInit() {

        if (!this.credential.firstName  || !this.credential.lastName || this.credential.firstName.length == 0 ||
            this.credential.lastName.length == 0)
        {
            this.isUserHidden = false;
        }

        this._configService.getConfig().subscribe(res => {      //Get config for image
            this.imageLink = res.profileImage;
            this.hasCredential = this.credential.title ? this.credential.title.trim() != "" ? false : true : false;
            this.hasDescription = this.credential.description ? this.credential.description.trim() != "" ? false : true : false;
            console.log(this.credential);
            if (this.credential.imageUrl && (this.credential.imageUrl != ''))
                this.imageLink += this.credential.imageUrl;
            else this.imageLink = '../images/userAdd.png';
            console.log(this.imageLink);
        });
    }
    onChangeImage(event) {
        let file = event.srcElement.files;
        //Upload the image 
        this._imgService
            .upload(file, this.credential.userId)
            .subscribe(res => {
                this.ngOnInit();
            });
    }
    UpdateUserName() {
        this.isUserHidden = true;
        this.profileService.SaveUserName(this.credential.firstName, this.credential.lastName, this.credential.userId).subscribe(res => {
            
            this.ngOnInit();
        });
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