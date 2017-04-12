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
    styleUrls: ['left-menu.css'],
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
                //for (var i = 0; i < this.topFiveUsers.length; i++) {
                //    this.profileService.userInfoDetails(this.topFiveUsers[i].userId).subscribe(res2 => {
                //         console.log(res2);
                //        this.topFiveUsers[i].userInfoDetails = res2;

                //    });
                //}
                
            });
        });
    }
    userover(userId: string) {
        this.userInfoDetails = null;
        //this.userInfoDetails = this.topFiveUsers.find(x => x.userId == userId).userInfoDetails;
        console.log(userId);
        this.profileService.userInfoDetails(userId).subscribe(res => {
            // console.log(res);
            this.userInfoDetails = res;

        });
    }
    gotoProfile(userId:string) {
        this._router.navigateByUrl('/dashboard/viewprofile/' +userId + '/user-question');
    }
    goToAllUser() {
        this._router.navigateByUrl('question/all-user');
    }
}