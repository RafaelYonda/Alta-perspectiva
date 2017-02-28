import { Component, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
    selector: 'app',
    templateUrl: 'js/app/app.component.html',
    providers: [AuthenticationService]

})
export class AppComponent {   

    constructor(elm: ElementRef, private _authService: AuthenticationService) {

        var username = elm.nativeElement.getAttribute('username');
        var token = elm.nativeElement.getAttribute('token');       
       
        if (username && username != "") {
            localStorage.setItem('currentUser', username);
            localStorage.setItem('auth_token', token);
            this._authService.getLoggedinObj().subscribe(res => {
                localStorage.setItem('currentUserObject', res);
            });
        }
        else {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('currentUserObject');
        }
    }
    ngOnInit() {
       
    }
}