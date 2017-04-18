import { Component } from '@angular/core';
import { Experience, DateName } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'experience.component.html',
    styleUrls: [
        'tsScripts/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'tsScripts/app/dashboard/styles/dashboard.buttons.css',
        'tsScripts/app/dashboard/styles/dashboard.forms.css',
        'tsScripts/app/dashboard/styles/dashboard.profile.css',
        'tsScripts/app/dashboard/styles/dashboard.progress.css',
        'tsScripts/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class ExperienceFormComponent {
    public _headerName: string = 'Experience';
    experience: Experience;
    constructor(private service: ProfileService) {
        this.experience = new Experience();
        this.service.profile.experience = this.experience;
    }

    ngOnInit() {
        this.service.GetExperience().subscribe(res => {
            this.experience = res;
            console.log(res);
        });
    }
    Submit() {
        if (this.experience.id)
            this.service.UpdateExperience(this.experience).subscribe(res => {
                console.log(res);
            });
        else
            this.service.SaveExperience(this.experience).subscribe(res => {
                console.log(res);
            });
    }
}
