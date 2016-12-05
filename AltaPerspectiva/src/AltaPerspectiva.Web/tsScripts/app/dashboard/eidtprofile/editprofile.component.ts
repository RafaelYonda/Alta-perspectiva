import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile, Contact } from '../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/editprofile.component.html',
    styleUrls: ['js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class EditProfileComponent {
    //profile: Profile;
    constructor(private service: ProfileService) {
    }
    Submit() {
        //console.log(this.service.profile);
        this.service.SaveProfile();
    }
}
