import { Component } from '@angular/core';
import { Profile, Biography } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/biography.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css',
    ],
    providers: [ProfileService]
})
export class BiographyFormComponent {
    biography: Biography;
    constructor(private service: ProfileService) {
        this.biography = new Biography();
        console.log(service.profile);
        this.service.profile.biography = this.biography;
    }
}
