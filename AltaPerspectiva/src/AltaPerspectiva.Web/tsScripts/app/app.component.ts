import { Component, Input, ElementRef, ViewContainerRef } from '@angular/core';
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
                localStorage.setItem('currentUserId', res.userId);
                localStorage.setItem('currentUserName', res.name);
                localStorage.setItem('currentUserImage', res.imageUrl ? res.imageUrl : null);
            });
        }
        else {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('currentUserId');
            localStorage.removeItem('currentUserName');
            localStorage.removeItem('currentUserImage');
        }
    }
    ngOnInit() {
       
    }
}