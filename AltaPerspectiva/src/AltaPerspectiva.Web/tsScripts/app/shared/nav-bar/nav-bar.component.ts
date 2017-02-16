/// <reference path="../left-menu/category-left-menu.component.ts" />
import {LogInObj, User} from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, ViewEncapsulation} from '@angular/core';

import { LoginComponent } from '../../shared/login/login.component';
import { RegisterComponent } from '../../shared/login/register.component';
@Component({
    selector: 'nav-bar',
    encapsulation: ViewEncapsulation.None,
    providers: [AuthenticationService],
    templateUrl: 'js/app/shared/nav-bar/nav-bar.component.html',
    styleUrls: ['js/app/shared/nav-bar/nav-bar.css'],
})
export class NavBarComponent {
    @Input() className: string;
    _router: Router;
    isbackGround = false;
    _logObj: LogInObj;
    _authService: AuthenticationService;

    constructor(private authService: AuthenticationService, private componentFactoryResolver: ComponentFactoryResolver) {
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
                this._logObj.user.imageUrl = '../../../../profile/' + res.imageUrl;
                this._logObj.isLoggedIn = true;
                this._logObj.user.userid = res.userId;

                localStorage.setItem('currentUserName', this._logObj.user.name);
                localStorage.setItem('currentUserImage', this._logObj.user.imageUrl);
            }
        });
    }
    goToDashBoard() {
        this._router.navigateByUrl('home/tab/1', { skipLocationChange: true });
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
    @ViewChild('registerDialogAnchor', { read: ViewContainerRef }) registerDialogAnchor: ViewContainerRef;
    openRegisterDialogAnchor() {

        this.registerDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(RegisterComponent);
        let dialogComponentRef = this.registerDialogAnchor.createComponent(dialogComponentFactory);
        //  dialogComponentRef.instance.education = this.education;

        // dialogComponentRef.instance.education.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
        });
    }
}