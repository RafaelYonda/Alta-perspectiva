import { Component} from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CommunicationService } from '../../services/communication.service';
import {User} from '../../services/models';
import {UserInfoDetails} from '../../services/models/models.profile';
import { CredentialViewModel } from '../../services/models/models.profile';
import { Router } from '@angular/router';
@Component({
    selector: 'topfive-user',
    templateUrl: 'topfive-user.component.html',
    providers: [ProfileService]
})
export class TopFiveUserComponent {

    topFiveUsers:User[];
    //userService: ProfileService;
    userInfoDetails: UserInfoDetails;
    constructor(private profileService: ProfileService, private commServ: CommunicationService, private _router: Router) {
        this.topFiveUsers = [];
        //this.userService = profileService;                      
    }

    ngOnInit() {
        
        this.commServ.getCategory().subscribe((catId: string) => {
            this.profileService.GetTopFiveUserByCategory(catId).subscribe(res => {
                this.topFiveUsers = res;
            });
        });
    }
    userover(userId: string) {
        this.userInfoDetails = null;
        this.profileService.userInfoDetails(userId).subscribe(res => {
            this.userInfoDetails = res;

        });
    }
    gotoProfile(userId:string) {
        this._router.navigateByUrl('/dashboard/viewprofile/' + userId + '/user-answer');
    }
    goToAllUser() {
        this._router.navigateByUrl('question/all-user');
    }
}