import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, ViewEncapsulation} from '@angular/core';

import {LogInObj, User} from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfileService } from '../../services/profile.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CredentialViewModel } from '../../services/models/models.profile';
import { CommunicationService } from '../../services/communication.service';

@Component({
    selector: 'all-users',
    providers: [AuthenticationService, ProfileService],
    templateUrl: 'all-user.html',
    styleUrls: ['all-user.css'],
})
export class AllUserComponent {
    loader = true;
    @Input() className: string;
    isbackGround = false;
    _logObj: LogInObj;
    _authService: AuthenticationService;
    credential: CredentialViewModel = new CredentialViewModel();
    user: User[];
    userName:string;

    constructor(private authService: AuthenticationService, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver, private _router: Router, private commServ: CommunicationService) {
    }
    ngOnInit() {
        this.profileService.GetTopHundredUser().subscribe(res => {
            this.user = res;
                this.loader = false;
        });
        this.userName = '';
        this.user = [];
        window.scroll(0,0);
    }
    onKeyPress() {
        this.loader = true;
        console.log(this.userName);
        if (this.userName) {
            this.profileService.GetUsers(this.userName).subscribe(res => {
                this.user = [];
                this.user = res;
                this.loader = false;
            });
        }
    }
}