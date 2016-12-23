import { Component } from '@angular/core';
import { Profile, Experience, DateName } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/experience.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class ExperienceFormComponent {
    //dateName: DateName;
    //months: string[];
    public _headerName: string = 'Experience';
    experience: Experience;
    constructor(private service: ProfileService) {
        //this.months = this.dateName.monthNames;
        this.experience = new Experience();
        console.log(service.profile);
        this.service.profile.experience = this.experience;
    }
    Submit() {
        this.service.SaveExperience(this.experience).subscribe(res => {
            console.log(res);
        });
    }
}
