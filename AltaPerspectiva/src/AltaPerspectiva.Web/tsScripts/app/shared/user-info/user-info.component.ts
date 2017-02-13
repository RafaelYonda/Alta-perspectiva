import { Component, Input } from '@angular/core';
import {User, Comment, UserInfoDetails} from '../../services/models';
import { ProfileService } from '../../services/profile.service';
import {PopoverModule} from "ngx-popover";
@Component({
    selector: 'user-info',
    templateUrl: 'js/app/shared/user-info/user-info.component.html',
    styleUrls: ['js/app/shared/user-info/user-info.component.css'],
    providers: [ProfileService]
})
export class UserInfoComponent {
    @Input() userObj: User;
    @Input() viewDate: Date;
    @Input() isAnonymous: boolean;
    userInfoDetails: UserInfoDetails
    constructor(private profileService: ProfileService) {
        
    }
    over(userId: string) {
        this.userInfoDetails = null;
        console.log(userId);
        this.profileService.userInfoDetails(userId).subscribe(res => {
            console.log(res);
            this.userInfoDetails = res;

        });
    }
    onfocus() {
        console.log('HEllo focus');
    }
}