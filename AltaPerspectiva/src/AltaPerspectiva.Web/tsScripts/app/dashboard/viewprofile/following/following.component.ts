import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { User } from '../../../services/models';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'following.component.html'
})
export class FollowingComponent {
    private sub: any;
    user: User[];
    constructor(private _route: ActivatedRoute, private profileServ: ProfileService) {

    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(params => {
            this.profileServ.GetFollowingsByUserId(params['userId']).subscribe(usr => {     //Get User Image
                this.user = usr;
                console.log(this.user);
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}