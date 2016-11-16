﻿import { Component, ViewEncapsulation, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';

@Component({
    selector: 'ap-nav',
    encapsulation: ViewEncapsulation.None,
    providers: [AuthenticationService],
    templateUrl: 'js/app/core/nav/apnav.html',
    styleUrls: ['js/app/core/nav/apNav.css'],
})
export class ApNav {
    @Input() className: string;
    isbackGround = false;
    _logObj: any;
    _authService: AuthenticationService;
    
    constructor(private authService: AuthenticationService) {
        this._authService = authService;
        this._logObj = authService.getLoggedinObj();
    }
    //LogIn() {
    //    console.log("Log in");
    //    this._authService.tempLogin();
    //} LogOut() {
    //    this._authService.logout();
    //}
}

export class LogInObj {
    notifyCount: number;
    user: User;
}
export class User {
    userid: number;
    name: string;
    occupassion: string;
    imageUrl: string;
}