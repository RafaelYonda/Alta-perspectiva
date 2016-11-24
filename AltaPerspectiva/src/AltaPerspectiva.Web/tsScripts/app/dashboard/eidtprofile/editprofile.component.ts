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
    profile: Profile;
    profileService: ProfileService;
    constructor(service: ProfileService) {
        this.profileService = service;
        this.profile = service.profile;
        this.profile.contact = new Contact();
    }
    Submit() {
        this.profileService.SaveProfile();
    }
}
