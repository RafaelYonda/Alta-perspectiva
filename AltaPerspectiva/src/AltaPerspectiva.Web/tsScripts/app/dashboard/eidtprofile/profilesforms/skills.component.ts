import { Component, ViewContainerRef } from '@angular/core';
import { Skills } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
    constructor(private service: ProfileService, public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.skills = new Skills();
        this.service.profile.skills = this.skills;
        this.toastr.setRootViewContainerRef(vRef);
    }
    Submit() {
        this.service.SaveSkills(this.skills).subscribe(res => {
            this.showSuccess();
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
    showSuccess() {
        this.toastr.success('Biography saved successfully!', 'Success!');
    }
}

