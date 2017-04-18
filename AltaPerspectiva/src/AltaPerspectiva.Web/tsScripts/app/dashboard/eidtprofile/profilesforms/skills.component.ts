import { Component } from '@angular/core';
import { Skills } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'skills.component.html',
    styleUrls: [
        'tsScripts/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'tsScripts/app/dashboard/styles/dashboard.buttons.css',
        'tsScripts/app/dashboard/styles/dashboard.forms.css',
        'tsScripts/app/dashboard/styles/dashboard.profile.css',
        'tsScripts/app/dashboard/styles/dashboard.progress.css',
        'tsScripts/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class SkillFormComponent {
    public _headerName: string = 'Skill';
    skills: Skills;
    constructor(private service: ProfileService) {
        this.skills = new Skills();
        this.service.profile.skills = this.skills;
    }
    Submit() {
        this.service.SaveSkills(this.skills).subscribe(res => {
        });
    }
    remove(skillRemoved) {
        var index = this.skills.skillArea.indexOf(skillRemoved);
        if (index > -1) {
            this.skills.skillArea.splice(index, 1);
        }
        this.skills.skillName = skillRemoved;
        this.service.DeleteSkills(this.skills).subscribe(res => {
        });
    }

    ngOnInit() {
        this.service.GetPracticeArea().subscribe(res => {
            this.skills.skillArea = res;
            console.log(res);
        });
    }
}

