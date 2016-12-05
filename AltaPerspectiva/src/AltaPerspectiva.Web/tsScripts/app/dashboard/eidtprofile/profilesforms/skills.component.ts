import { Component } from '@angular/core';
import { Profile, Skills } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/skills.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css',
    ],
    providers: [ProfileService]
})
export class SkillFormComponent {
    skills: Skills;
    constructor(private service: ProfileService) {
        this.skills = new Skills();
        console.log(service.profile);
        this.service.profile.skills = this.skills;
    }
}

