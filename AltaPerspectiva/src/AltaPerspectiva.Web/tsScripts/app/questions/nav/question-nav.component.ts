import { Component, ViewEncapsulation, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';

@Component({
    selector: 'apq-nav',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'question-nav.component.html',
})
export class questionNav {
    @Input() className: string;
    isbackGround = false;

    _logObj: any;
    _authService: AuthenticationService;

    constructor(private authService: AuthenticationService) {
        this._authService = authService;
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