import { Component } from '@angular/core';
import { Profile, Skills } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/skills.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class SkillFormComponent {
    public _headerName: string = 'Skill';
    skills: Skills;
    constructor(private service: ProfileService) {
        this.skills = new Skills();
        //console.log(service.profile);
        this.service.profile.skills = this.skills;
    }
    ngOnInit() {
        this.skills.skillArea = [];
        this.skills.skillArea.push("Management skill");
        this.skills.skillArea.push("Management skill");
        this.skills.skillArea.push("Management skill");
        this.skills.skillArea.push("Management skill");
        console.log(this.skills.skillArea);
    }
    Submit() {
        this.service.SaveSkills(this.skills).subscribe(res => {
            console.log(res);
        });
    }
    remove(skillRemoved) {
        var index = this.skills.skillArea.indexOf(skillRemoved);
        if (index > -1) {
            this.skills.skillArea.splice(index, 1);
        }
        this.skills.skillName = skillRemoved;
        this.service.DeleteSkills(this.skills).subscribe(res => {
            console.log(res);
        });
    }
}

