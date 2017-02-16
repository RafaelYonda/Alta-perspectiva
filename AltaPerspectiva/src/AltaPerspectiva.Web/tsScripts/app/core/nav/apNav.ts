import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, ViewEncapsulation} from '@angular/core';
import {LogInObj, User} from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfileService } from '../../services/profile.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CredentialViewModel } from '../../services/models/models.profile';
import { LoginComponent } from '../../shared/login/login.component';

@Component({
    selector: 'ap-nav',
    encapsulation: ViewEncapsulation.None,
    providers: [AuthenticationService, ProfileService],
    templateUrl: 'js/app/core/nav/apnav.html',
    styleUrls: ['js/app/core/nav/apNav.css'],
})
export class ApNav {
    @Input() className: string;
    _router: Router;
    isbackGround = false;
    _logObj: LogInObj;
    _authService: AuthenticationService;
    credential: CredentialViewModel = new CredentialViewModel();

    constructor(private authService: AuthenticationService, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver) {
        this._authService = authService;
        var user: User = new User();
        //user.userid = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        
        var currentUser = localStorage.getItem('auth_token');  
        this._authService.getLoggedinObj().subscribe(res => {
            if (res && currentUser != "null") {
                this._logObj.user.name = res.name;
                this._logObj.user.imageUrl ='../../../../profile/'+ res.imageUrl;
                this._logObj.isLoggedIn = true;
                this._logObj.user.userid = res.userId;

                localStorage.setItem('currentUserName', this._logObj.user.name);
                localStorage.setItem('currentUserImage', this._logObj.user.imageUrl);
            }
        });
    }
    onLogin() {
        console.log("working");
    }
    @ViewChild('loginDialogAnchor', { read: ViewContainerRef }) loginDialogAnchor: ViewContainerRef;
    openLoginDialogAnchor() {

        this.loginDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LoginComponent);
        let dialogComponentRef = this.loginDialogAnchor.createComponent(dialogComponentFactory);
      //  dialogComponentRef.instance.education = this.education;

       // dialogComponentRef.instance.education.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
        });
    }
}