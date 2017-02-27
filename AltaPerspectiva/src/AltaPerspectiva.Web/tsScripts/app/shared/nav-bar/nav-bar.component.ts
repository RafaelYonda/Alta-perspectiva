/// <reference path="../left-menu/category-left-menu.component.ts" />
import {LogInObj, User} from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, ViewEncapsulation} from '@angular/core';

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
                this._logObj.user.imageUrl = res.imageUrl;
                this._logObj.isLoggedIn = true;
                this._logObj.user.userId = res.userId;

                localStorage.setItem('currentUserName', this._logObj.user.name);
                localStorage.setItem('currentUserImage', this._logObj.user.imageUrl);
            }
        });
    }
    goToDashBoard() {
        this._router.navigateByUrl('home/tab/1', { skipLocationChange: true });
    }
   
}