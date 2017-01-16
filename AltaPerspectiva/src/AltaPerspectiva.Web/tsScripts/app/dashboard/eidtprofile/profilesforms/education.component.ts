import { Component } from '@angular/core';
import { Profile, Education } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/education.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class EducationFormComponent {
    public _headerName: string = 'Education';
    education: Education;
    constructor(private service: ProfileService) {
        this.education = new Education();
        this.service.profile.education = this.education;
    }
    Submit() {
        this.service.SaveEducation(this.education).subscribe(res => {
        });
    }
}
