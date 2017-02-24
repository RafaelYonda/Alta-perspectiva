import { Component, Input, OnInit } from '@angular/core';
import {User, Comment} from '../../services/models';
import {UserInfoDetails} from '../../services/models/models.profile';
import { ProfileService } from '../../services/profile.service';
import {PopoverModule} from "ngx-popover";
@Component({
    selector: 'user-info',
    templateUrl: 'js/app/shared/user-info/user-info.component.html',
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
       // this.userInfoDetails = null;
      //  console.log(this.userObj);
        this.profileService.userInfoDetails(this.userObj.userId).subscribe(res => {
            // console.log(res);
            this.userObj.userInfoDetails = res;
        });

    }

    over(userId: string) {
        this.userInfoDetails = null;
        this.userInfoDetails = this.userObj.userInfoDetails;
    }
    onfocus() {
        console.log('HEllo focus');
    }
}