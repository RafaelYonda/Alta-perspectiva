﻿import { Component, Input, ElementRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    providers: [AuthenticationService]

})
export class AppComponent {   

    constructor(elm: ElementRef, private _authService: AuthenticationService, public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);

        var username = elm.nativeElement.getAttribute('username');
        var token = elm.nativeElement.getAttribute('token');       
       
        if (username && username != "") {
            localStorage.setItem('currentUser', username);
            localStorage.setItem('auth_token', token);
            this._authService.getLoggedinObj().subscribe(res => {
                localStorage.setItem('currentUserObject', res);
                localStorage.setItem('currentUserImage', res.imageUrl ? res.imageUrl : null);
                localStorage.setItem('userId', res.userId);
            });
        }
        else {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('currentUserObject');
            localStorage.removeItem('currentUserImage');
            localStorage.removeItem("userId");
        }
    }
    ngOnInit() {
       
    }
}