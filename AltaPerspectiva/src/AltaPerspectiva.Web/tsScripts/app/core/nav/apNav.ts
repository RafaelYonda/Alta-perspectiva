import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver, Input, ViewEncapsulation} from '@angular/core';

import {LogInObj, User} from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfileService } from '../../services/profile.service';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CredentialViewModel } from '../../services/models/models.profile';
import { CommunicationService } from '../../services/communication.service';

@Component({
    selector: 'ap-nav',
    encapsulation: ViewEncapsulation.None,
    providers: [AuthenticationService, ProfileService],
    templateUrl: 'apnav.html',
    styleUrls: ['apNav.css'],
})
export class ApNav {
    @Input() className: string;    
    isbackGround = false;
    _logObj: LogInObj;
    _authService: AuthenticationService;
    credential: CredentialViewModel = new CredentialViewModel();
    

    constructor(private authService: AuthenticationService, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver, private _router: Router, private commServ: CommunicationService) {
        this._authService = authService;
        
    }
    ngOnInit() {
        
        var currentUser = localStorage.getItem('auth_token');  
        if (currentUser == null)
        {
            var user: User = new User();
            this._logObj = { isLoggedIn: false, user: user };
            return;
        }
            
        this._authService.getLoggedinObj().subscribe(res => {
            this._logObj = new LogInObj();
            this._logObj.user = new User();
            this._logObj.user.name = res.name;
            this._logObj.user.imageUrl = res.imageUrl;
            this._logObj.isLoggedIn = true;
            this._logObj.user.userId = res.userId;
        });

        this.commServ.getToggleClicked().subscribe((res: string) => {
            console.log("Toggle CLicked");
            this.togglemenu();
        });
    }

    gotoProfile() {
        this._router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    }
    togglemenu() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.add("expand");
    }
    
}