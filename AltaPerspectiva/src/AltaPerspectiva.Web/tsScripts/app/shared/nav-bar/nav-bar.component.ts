import { LogInObj, User } from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { AUTH_SITE_URL, isIE } from '../../../globals';
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, ViewEncapsulation } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

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
    showUserInfo = false;     //show right bar log in info only when data available
    _logObj: LogInObj;
    _authService: AuthenticationService;
    authUrl = AUTH_SITE_URL + '/Manage/ChangePassword';

    constructor(private authService: AuthenticationService, private commServ: CommunicationService, private componentFactoryResolver: ComponentFactoryResolver, private _router: Router) {
        window.navigator.userAgent
        this._authService = authService;
        var user: User = new User();
        //user.userid = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        this.commServ.getuserUpdated().subscribe((res: any) => {
            this.getUser();
        });
        var currentUser = localStorage.getItem('auth_token');
        if (currentUser == null) {
            this.showUserInfo = true;
            var user: User = new User();
            this._logObj = { isLoggedIn: false, user: user };
            return;
        }

        else {

            var userId = localStorage.getItem('currentUserId');
            //Get the user if not loaded yet
            if (!userId)
                this.getUser();
            else {
                this.loadforIE();
                this._logObj = new LogInObj();
                this._logObj.user = new User();
                this._logObj.user.userId = localStorage.getItem('currentUserId');
                this._logObj.user.name = localStorage.getItem('currentUserName');
                this._logObj.user.imageUrl = localStorage.getItem('currentUserImage');
                this._logObj.isLoggedIn = true;
                this.showUserInfo = true;                
            }
        }

    }
    reload() {
        window.location.replace('/');
    }
    getUser() {
        this._authService.getLoggedinObj().subscribe(res => {
            this.showUserInfo = true;
            this._logObj = new LogInObj();
            this._logObj.user = new User();
            this._logObj.user.name = res.name;
            this._logObj.user.imageUrl = res.imageUrl;
            this._logObj.isLoggedIn = true;
            this._logObj.user.userId = res.userId;
            this.loadforIE();
        });
    }
    loadforIE() {
        var reloadIE = localStorage.getItem('reloadIE');
        if (reloadIE)
        {
            localStorage.setItem('reloadIE', '1');
            window.location.reload();
        }
    }
    gotoProfile() {
        this._router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    }
    togglemenu() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.add("expand");
    }
}