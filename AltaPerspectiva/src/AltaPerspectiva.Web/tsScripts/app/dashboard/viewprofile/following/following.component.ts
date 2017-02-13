import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { User } from '../../../services/models';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/following/following.component.html'
})
export class FollowingComponent {
    private sub: any;
    user: User[];
    constructor(private _route: ActivatedRoute, private profileServ: ProfileService) {

    }
    ngOnInit() {
        this.sub = this._route.parent.params.subscribe(params => {
            this.profileServ.GetFollowersByUserId(params['userId']).subscribe(usr => {     //Get User Image
                this.user = usr;
                console.log(this.user);
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}