import {LogInObj, User} from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'nav-bar',
    encapsulation: ViewEncapsulation.None,
    providers: [AuthenticationService],
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.css'],
})
export class NavBarComponent {
    @Input() className: string;    
    @Input() hideSearch: boolean;
    isbackGround = false;
    _logObj: LogInObj;
    _authService: AuthenticationService;

    constructor(private authService: AuthenticationService, private componentFactoryResolver: ComponentFactoryResolver, private _router: Router) {
        
        this._authService = authService;
        var user: User = new User();
        //user.userid = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        
        var currentUser = localStorage.getItem('auth_token');
        if (currentUser == null) {
            var user: User = new User();
            this._logObj = { isLoggedIn: false, user: user };
            return;
        }

        else {
            this._logObj = new LogInObj();
            this._logObj.user = new User();
            this._logObj.user.name = localStorage.getItem('currentUserName');
            this._logObj.user.imageUrl = localStorage.getItem('currentUserImage');
            this._logObj.isLoggedIn = true;
            this._logObj.user.userId = localStorage.getItem('currentUserId');
            console.log(this._logObj);
        }
        //this._authService.getLoggedinObj().subscribe(res => {
        //    this._logObj = new LogInObj();
        //    this._logObj.user = new User();
        //    this._logObj.user.name = res.name;
        //    this._logObj.user.imageUrl = res.imageUrl;
        //    this._logObj.isLoggedIn = true;
        //    this._logObj.user.userId = res.userId;
        //});
    }
    gotoProfile() {
        this._router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    }
    togglemenu() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.add("expand");
    }
}