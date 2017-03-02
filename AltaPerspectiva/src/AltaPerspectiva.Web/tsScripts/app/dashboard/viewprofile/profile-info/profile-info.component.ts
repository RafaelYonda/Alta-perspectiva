﻿import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ConfigService } from '../../../services/config.service';
import { CredentialViewModel } from '../../../services/models/models.profile';
import {User} from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
import { AuthenticationService } from '../../../services/authentication.service';
//Modal
import { AddCredentialComponent } from '../edit-profile/add-credential.component';

@Component({
    selector: 'profile-info',
    templateUrl: 'js/app/dashboard/viewprofile/profile-info/profile-info.component.html',
    providers: [ImageUploadService, ConfigService,AuthenticationService],
})
export class ProfileInfoComponent {
    //@Input() userObj: User;
    isOwner = false;
    isUserHidden = true;
    showDescription = true;
    imageLink: string;
   // profilePath: string = '../../../../profile/';
    hasCredential: boolean;
    hasDescription: boolean;
    credentialParent: CredentialViewModel;
    

    @Output() onUpdated = new EventEmitter<boolean>();

    private _CredentialData = new BehaviorSubject<CredentialViewModel>(null);

    @Input() credential: CredentialViewModel;


    constructor(private _imgService: ImageUploadService, private _configService: ConfigService, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver, private _authService: AuthenticationService) {
    }
    ngOnInit() {    
       
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

        this.getLoggedInUser(this.credential.userId);

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

                if (this.credential.imageUrl && (this.credential.imageUrl != ''))
                    this.imageLink = this.credential.imageUrl;
                else this.imageLink = '../images/userAdd.png';
            //});
        });
        
    }
    onChangeImage(event) {
        var target = event.target || event.srcElement;   
        let file = target["files"];// event.srcElement.files;
        //Upload the image 
        this._imgService
            .upload(file, this.credential.userId)
            .subscribe(res => {
                this.loadData()
            });
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


//   ValidateFileUpload() {

//    var fuData = document.getElementById('fileChooser');
//    var FileUploadPath = fuData.value;


//    if (FileUploadPath == '') {
//        alert("Please upload an image");

//    } else {
//        var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();



//        if (Extension == "gif" || Extension == "png" || Extension == "bmp"
//            || Extension == "jpeg" || Extension == "jpg") {


//            if (fuData.files && fuData.files[0]) {

//                var size = fuData.files[0].size;

//                if (size > MAX_SIZE) {
//                    alert("Maximum file size exceeds");
//                    return;
//                } else {
//                    var reader = new FileReader();

//                    reader.onload = function (e) {
//                        $('#blah').attr('src', e.target.result);
//                    }

//                    reader.readAsDataURL(fuData.files[0]);
//                }
//            }

//        }


//        else {
//            alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP. ");
//        }
//    }
//}
}