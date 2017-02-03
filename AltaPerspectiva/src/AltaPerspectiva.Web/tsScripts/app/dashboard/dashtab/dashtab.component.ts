import { Component, ViewEncapsulation, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Http, Headers, Response } from '@angular/http';

@Component({
    selector: 'dash-tab',
    encapsulation: ViewEncapsulation.None,
    providers: [AuthenticationService],
    templateUrl: 'js/app/dashboard/dashtab/dashtab.component.html',
    styleUrls: ['js/app/dashboard/dashtab/dashtab.component.css'],
})
export class DashTab {
    @Input() className: string;
    isbackGround = false;
    _logObj: any;
    _authService: AuthenticationService;

    constructor(private authService: AuthenticationService) {
        this._authService = authService;
        this._logObj = authService.getLoggedinObj();
    }
}