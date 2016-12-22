﻿import { Component, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
    selector: 'app',
    templateUrl: 'js/app/app.component.html',
    providers: [AuthenticationService]

})
export class AppComponent {   

    constructor(elm: ElementRef) {

        var username = elm.nativeElement.getAttribute('username');
        var token = elm.nativeElement.getAttribute('token');       
       
        if (username != "") {
            localStorage.setItem('currentUser', username);
            //localStorage.getItem('auth_token');
            localStorage.setItem('auth_token', token);
        }
        else {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('auth_token');
        }
    }
    ngOnInit() {
       
    }
}