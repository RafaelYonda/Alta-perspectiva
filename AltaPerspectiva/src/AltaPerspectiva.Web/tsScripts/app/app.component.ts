import { Component, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
@Component({
    selector: 'app',
    templateUrl: 'js/app/app.component.html',
    providers: [AuthenticationService]

})
export class AppComponent {

    @Input() username: string;
    @Input() token: string;

    constructor(elm: ElementRef) {

        var username = elm.nativeElement.getAttribute('username');
        var token = elm.nativeElement.getAttribute('token');
       
        if (username != "")
        {            
            localStorage.setItem('currentUser', JSON.stringify({ username: username }));            
            //localStorage.getItem('auth_token');
            localStorage.setItem('auth_token', JSON.stringify({ auth_token: token }));            
        }
        else
            localStorage.removeItem('currentUser');
    }
    ngOnInit() {
        console.log(this.username);
    }
}