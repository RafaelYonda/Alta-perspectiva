import { Component, Input, OnInit } from '@angular/core';
import {User, Comment} from '../../services/models';
import {UserInfoDetails} from '../../services/models/models.profile';
import { ProfileService } from '../../services/profile.service';
import {PopoverModule} from "ngx-popover";
@Component({
    selector: 'user-info',
    templateUrl: 'user-info.component.html',
    providers: [ProfileService]
})
export class UserInfoComponent implements OnInit {
    @Input() userObj: User;
    @Input() viewDate: Date;
    @Input() isAnonymous: boolean;
    userInfoDetails: UserInfoDetails
    constructor(private profileService: ProfileService) {
        
    }

    ngOnInit() {
        this.profileService.userInfoDetails(this.userObj.userId).subscribe(res => {
            this.userObj.userInfoDetails = res;
            //-----check user Id is equal to logged in user--------
            if (localStorage.getItem("userId") == this.userObj.userId)
                this.isAnonymous = false;            
        });
    }

    over(userId: string) {
        this.userInfoDetails = null;
        this.userInfoDetails = this.userObj.userInfoDetails;
    }
    onfocus() {
    }
}