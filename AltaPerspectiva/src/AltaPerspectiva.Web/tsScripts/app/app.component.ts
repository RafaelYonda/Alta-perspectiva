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
    constructor(elm: ElementRef) {
        var username = elm.nativeElement.getAttribute('username');
        console.log(elm.nativeElement.getAttribute('username'));
        if (username != "")
            localStorage.setItem('currentUser', JSON.stringify({ username: elm.nativeElement.getAttribute('username') }));
        else localStorage.removeItem('currentUser');
    }
    ngOnInit() {
        console.log(this.username);
    }
}