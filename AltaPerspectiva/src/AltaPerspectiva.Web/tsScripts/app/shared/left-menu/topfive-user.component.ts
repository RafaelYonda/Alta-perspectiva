import { Component} from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CommunicationService } from '../../services/communication.service';
import {User} from '../../services/models';
import {UserInfoDetails} from '../../services/models/models.profile';
import { CredentialViewModel } from '../../services/models/models.profile';

@Component({
    selector: 'topfive-user',
    templateUrl: 'js/app/shared/left-menu/topfive-user.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
    providers: [ProfileService]
})
export class TopFiveUserComponent {

    topFiveUsers:User[];
    //userService: ProfileService;
    userInfoDetails: UserInfoDetails;
    constructor(private profileService: ProfileService, private commServ: CommunicationService) {
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
        //console.log(userId);
        this.profileService.userInfoDetails(userId).subscribe(res => {
            // console.log(res);
            this.userInfoDetails = res;

        });
    }
}