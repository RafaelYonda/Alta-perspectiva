import { Injectable } from '@angular/core';
import {LogInObj, User} from './models';

@Injectable()
export class AuthenticationService{

    getLoggedinObj(): LogInObj {
        var isLoggedin = false;// 
        if (localStorage.getItem('currentUser'))
            isLoggedin = true;
        var logObj: LogInObj = {
            user: {
                userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png"
            },
            notifyCount: 3,
            isLoggedIn: isLoggedin
        }
        if (isLoggedin)
            return logObj;
        else {
            logObj.isLoggedIn = false;
            logObj.user = new User();
            return logObj;
        }
    }
}