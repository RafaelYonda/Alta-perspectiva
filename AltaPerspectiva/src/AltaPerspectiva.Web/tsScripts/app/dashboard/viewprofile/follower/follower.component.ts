import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { User } from '../../../services/models';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'follower.component.html'
})
export class FollowerComponent {
    private sub: any;
    user: User[];
    isLoading = false;
    constructor(private _route: ActivatedRoute,private profileServ: ProfileService) {
        
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(params => {
            this.showLoader();  
            this.profileServ.GetFollowersByUserId(params['userId']).subscribe(usr => {     //Get User Image
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