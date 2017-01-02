import { Component, ViewEncapsulation, Input } from '@angular/core';
import {LogInObj, User} from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-nav',
    encapsulation: ViewEncapsulation.None,
    providers: [AuthenticationService],
    templateUrl: 'js/app/core/nav/apnav.html',
    styleUrls: ['js/app/core/nav/apNav.css'],
})
export class ApNav {
    @Input() className: string;
    _router: Router;
    isbackGround = false;
    _logObj: LogInObj;
    _authService: AuthenticationService;

    constructor(private authService: AuthenticationService) {
        this._authService = authService;
        this._logObj = { isLoggedIn: false, user: { name: "", imageUrl: "", occupassion: "", userid: -1 } };
    }
    ngOnInit() {
        var currentUser = localStorage.getItem('auth_token');  
        console.log(this._logObj);
        this._authService.getLoggedinObj().subscribe(res => {
            if (res && currentUser != "null") {
                this._logObj.user.name = res.name;
                this._logObj.user.imageUrl ='../../../../profile/'+ res.imageUrl;
                this._logObj.isLoggedIn = true;
                localStorage.setItem('currentUserName', this._logObj.user.name);
                localStorage.setItem('currentUserImage', this._logObj.user.imageUrl);
            }
            console.log(res);
        });
        console.log(this._logObj);
    }
    goToDashBoard() {
        this._router.navigateByUrl('home/tab/1', { skipLocationChange: true });
    }
}


//export class LogInObj {
//    notifyCount: number;
//    user: User;
//}
//export class User {
//    userid: number;
//    name: string;
//    occupassion: string;
//    imageUrl: string;
//}