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
    username: string;
    token: string

    constructor(elm: ElementRef, private _authService: AuthenticationService, public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);

        this.username = elm.nativeElement.getAttribute('username');
        this.token = elm.nativeElement.getAttribute('token');       

        this.setLocalStorage();
    }
    setLocalStorage() {
        if (this.username && this.username != "") {
            localStorage.setItem('currentUser', this.username);
            localStorage.setItem('auth_token', this.token);
            this._authService.getLoggedinObj().subscribe(res => {
                localStorage.setItem('currentUserId', res.userId);
                localStorage.setItem('currentUserName', res.name);
                localStorage.setItem('currentUserImage', res.imageUrl ? res.imageUrl : null);
                localStorage.setItem('userId', res.userId);
            });
        }
        else {
            localStorage.removeItem('currentUser');
            localStorage.removeItem('auth_token');
            localStorage.removeItem('currentUserId');
            localStorage.removeItem('currentUserName');
            localStorage.removeItem('currentUserImage');
            localStorage.removeItem("userId");
        }
        var componentObj = this;
        setTimeout(function () {
            componentObj.setLocalStorage();
        }, 20000);
    }
    ngOnInit() {
       
    }
}