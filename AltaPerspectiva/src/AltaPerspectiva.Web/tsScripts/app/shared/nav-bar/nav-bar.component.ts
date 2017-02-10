/// <reference path="../left-menu/category-left-menu.component.ts" />
import { Component, ViewEncapsulation, Input } from '@angular/core';
import {LogInObj, User} from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

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

    constructor(private authService: AuthenticationService) {
        this._authService = authService;
        var user: User = new User();
        user.userid = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        var currentUser = localStorage.getItem('auth_token');  
        this._authService.getLoggedinObj().subscribe(res => {
            if (res && currentUser != "null") {
                this._logObj.user.name = res.name;
                this._logObj.user.imageUrl ='../../../../profile/'+ res.imageUrl;
                this._logObj.isLoggedIn = true;
                localStorage.setItem('currentUserName', this._logObj.user.name);
                localStorage.setItem('currentUserImage', this._logObj.user.imageUrl);
            }
        });
    }
    goToDashBoard() {
        this._router.navigateByUrl('home/tab/1', { skipLocationChange: true });
    }
}