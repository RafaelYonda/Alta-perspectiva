import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ConfigService } from '../../../services/config.service';
import { CredentialViewModel } from '../../../services/models/models.profile';
import {User} from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
import { AuthenticationService } from '../../../services/authentication.service';
//Modal
import { AddCredentialComponent } from '../edit-profile/add-credential.component';
import { PreviewImageComponent } from '../edit-profile/preview-image.component';
import { TwitterComponent } from '../edit-profile/twitter.component';
import { FacebookComponent } from '../edit-profile/facebook.component';
import { LinkedinComponent } from '../edit-profile/linkedin.component';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

//You can also override message,dismiss, toastLife, enableHTML, titleClass, messageClass options for individual toast:

// this.toastr.sucess('This toast will dismiss in 10 seconds.', null, { toastLife: 10000 });
@Component({
    selector: 'profile-info',
    templateUrl: 'profile-info.component.html',
    providers: [ImageUploadService, ConfigService, AuthenticationService],
})
export class ProfileInfoComponent {
    //@Input() userObj: User;    
    isUserHidden = true;
    showDescription = true;
    imageLink: string;
    // profilePath: string = '../../../../profile/';
    hasCredential: boolean;
    hasDescription: boolean;
    credentialParent: CredentialViewModel;
    isImageUpdated:boolean;

    @Input() isOwner: boolean;

    @Output() onUpdated = new EventEmitter<boolean>();

    private _CredentialData = new BehaviorSubject<CredentialViewModel>(null);

    @Input() credential: CredentialViewModel;

    croppedFile:any;
    constructor(private _imgService: ImageUploadService, private _configService: ConfigService, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver, private _authService: AuthenticationService, public toastr: ToastsManager, vcr: ViewContainerRef, private _router: Router) {
        this.toastr.setRootViewContainerRef(vcr);
    }
    ngOnInit() {
        if (this.credential.title )
            this.credential.title = this.credential.title.trim() == '' ? null : this.credential.title.trim();
        if (this.credential.description)
            this.credential.description = this.credential.description.trim() == '' ? null : this.credential.description.trim();
        this.isImageUpdated = false;
    }
    ngOnChanges(changes: SimpleChanges) {
        // only run when property "data" changed
        if (changes['credential']) {
            this.getCredetialOnParentLoaded(this.credential);
        }
    }
    getCredetialOnParentLoaded(data: CredentialViewModel): CredentialViewModel {
        if (!data.userId) return;

        this.credential = data;

        if (!this.credential.firstName || !this.credential.lastName)
            this.isUserHidden = false;

        if (this.credential.imageUrl && (this.credential.imageUrl != ''))
            this.imageLink = this.credential.imageUrl;
        else this.imageLink = '../images/userAdd.png';

        //this.getLoggedInUser(this.credential.userId);

        return data;
    }

    getLoggedInUser(userId: string) {
        var currentUser = localStorage.getItem('auth_token');
        this._authService.getLoggedinObj().subscribe(res => {
            if (res && currentUser != "null") {

                if (userId == res.userId)
                    this.isOwner = true;
            }
        });
    }

    loadData() {
        this.profileService.GetUsercredentialByUserId(this.credential.userId).subscribe(usr => {
            this.credential = usr;
            //this._configService.getConfig().subscribe(res => {      //Get config for image
            //    this.imageLink = res.profileImage;                

            if (this.credential.imageUrl && (this.credential.imageUrl != '')) {
                this.imageLink = this.credential.imageUrl;
                //if (this.isImageUpdated == true) {
                //    this.openpreviewImageDialogBox();

                //}
            }
            else this.imageLink = '../images/userAdd.png';
            //});
        });

    }
    onUploadClick() {     
                this.openpreviewImageDialogBox();
    }

    UpdateUserName() {
        this.isUserHidden = true;
        if (this.credential && ((this.credential.firstName.trim() == "") && (this.credential.lastName.trim() == "")))
            return;
        this.profileService.SaveUserName(this.credential.firstName, this.credential.lastName, this.credential.userId).subscribe(res => {
            this.onUpdated.emit(true);
            this.loadData();
        });
    }
    updateDecription() {
        //this.credential.description = description;
        this.profileService.saveDescription(this.credential).subscribe(res => {
            this.showDescription = true;
            this.loadData();
        });
        //console.log(description);
    }
    @ViewChild('credentialDialogAnchor', { read: ViewContainerRef }) credentialDialogAnchor: ViewContainerRef;
    openCredentialDialogBox() {
        this.credentialDialogAnchor.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AddCredentialComponent);
        let dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.credential = this.credential;
        dialogComponentRef.instance.close.subscribe(() => {
            this.loadData();
            dialogComponentRef.destroy();
        });
    }
    @ViewChild('previewImageDialogAnchor', { read: ViewContainerRef }) previewImageDialogAnchor: ViewContainerRef;
    openpreviewImageDialogBox() {
        this.previewImageDialogAnchor.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PreviewImageComponent);
        let dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
       // dialogComponentRef.instance.imageLink = img;
       // dialogComponentRef.instance.croppedFile = this.croppedFile;
        dialogComponentRef.instance.userId = this.credential.userId;
        dialogComponentRef.instance.close.subscribe(() => {
            this.isImageUpdated = false;
            this.loadData();
            dialogComponentRef.destroy();
        });
    }
    @ViewChild('twitterDialogAnchor', { read: ViewContainerRef }) twitterDialogAnchor: ViewContainerRef;
    opentwitterDialogBox(img: string) {
        this.twitterDialogAnchor.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TwitterComponent);
        let dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.useId = this.credential.userId;
        dialogComponentRef.instance.title = this.credential.twitterLink;
        dialogComponentRef.instance.close.subscribe(() => {
            this.isImageUpdated = false;
            this.loadData();
            dialogComponentRef.destroy();
        });
    }
    twitter() {
        if (!this.credential.twitterLink) {
            this.toastr.error('No tiene enlace!');
        } else {
            window.open(this.credential.twitterLink);
        }
    }
    @ViewChild('facebookDialogAnchor', { read: ViewContainerRef }) facebookDialogAnchor: ViewContainerRef;
    openfacebookDialogBox(img: string) {
        this.facebookDialogAnchor.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(FacebookComponent);
        let dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.useId = this.credential.userId;
        dialogComponentRef.instance.title = this.credential.facebookLink;
        dialogComponentRef.instance.close.subscribe(() => {
            this.isImageUpdated = false;
            this.loadData();
            dialogComponentRef.destroy();
        });
    }
    facebook() {
        if (!this.credential.facebookLink) {
            this.toastr.error('No tiene enlace!');
        } else {
            window.open(this.credential.facebookLink);
        }
    }
    @ViewChild('linkedinDialogAnchor', { read: ViewContainerRef }) linkedinDialogAnchor: ViewContainerRef;
    openlinkedinDialogBox(img: string) {
        this.linkedinDialogAnchor.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LinkedinComponent);
        let dialogComponentRef = this.credentialDialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.useId = this.credential.userId;
        dialogComponentRef.instance.title = this.credential.linkedinLink;
        dialogComponentRef.instance.close.subscribe(() => {
            this.isImageUpdated = false;
            this.loadData();
            dialogComponentRef.destroy();
        });
    }
    linkedin() {
        if (!this.credential.linkedinLink) {
            this.toastr.error('No tiene enlace!');
        } else {
            window.open(this.credential.linkedinLink);
        }
    }
}