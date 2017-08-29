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
    isLoading = false;
    constructor(private _route: ActivatedRoute, private profileServ: ProfileService) {

    }
    ngOnInit() {
        this.showLoader();
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(params => {
            this.profileServ.GetFollowingsByUserId(params['userId']).subscribe(usr => {     //Get User Image
                this.user = usr;
                this.hideLoader();
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    showLoader() {
        this.isLoading = true;
    }
    hideLoader() {
        this.isLoading = false;
    }
}