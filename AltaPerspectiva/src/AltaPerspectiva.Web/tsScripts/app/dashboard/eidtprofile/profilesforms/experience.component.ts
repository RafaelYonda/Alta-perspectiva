import { Component } from '@angular/core';
import { Profile, Experience, DateName } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/experience.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css',
    ],
    providers: [ProfileService]
})
export class ExperienceFormComponent {
    //dateName: DateName;
    //months: string[];
    experience: Experience;
    constructor(private service: ProfileService) {
        //this.months = this.dateName.monthNames;
        this.experience = new Experience();
        console.log(service.profile);
        this.service.profile.experience = this.experience;
    }
}
