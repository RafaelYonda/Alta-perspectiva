import { Component, ViewEncapsulation, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'ap-nav',
    encapsulation: ViewEncapsulation.None,
    providers: [AuthenticationService],
    templateUrl: 'js/app/core/nav/apnav.html'
})
export class ApNav {
    @Input() className: string;
    isbackGround = false;
    _logObj: any;

    constructor(private authService: AuthenticationService) {
        this._logObj = authService.getLoggedinObj();
    }
}

export class LogInObj {
    notifyCount: number;
    user: User;
}
export class User {
    userid: number;
    name: string;
    occupassion: string;
    imageUrl: string;
}