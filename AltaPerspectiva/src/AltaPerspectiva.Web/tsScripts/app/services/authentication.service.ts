import { Injectable } from '@angular/core';
import {LogInObj, User} from './models';

@Injectable()
export class AuthenticationService{

    getLoggedinObj(): LogInObj {  
             
        var logObj: LogInObj = {
            user: null,
            isLoggedIn: false
        };

        //var currentUser = localStorage.getItem('auth_token');       
        var currentUser = {};       

        if (currentUser != "null") {

                logObj.user = {
                    userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png"
                };
                logObj.isLoggedIn = true;

        }
        if (logObj.isLoggedIn)
            return logObj;
        else {
            logObj.isLoggedIn = false;
            logObj.user = new User();
            return logObj;
        }
    }
}