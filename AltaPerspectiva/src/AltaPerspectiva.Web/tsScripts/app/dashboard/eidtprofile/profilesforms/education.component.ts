﻿import { Component } from '@angular/core';
import { Education } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'education.component.html',
    styleUrls: [
        'tsScripts/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'tsScripts/app/dashboard/styles/dashboard.buttons.css',
        'tsScripts/app/dashboard/styles/dashboard.forms.css',
        'tsScripts/app/dashboard/styles/dashboard.profile.css',
        'tsScripts/app/dashboard/styles/dashboard.progress.css',
        'tsScripts/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class EducationFormComponent {
    public _headerName: string = 'Education';
    education: Education;
    constructor(private service: ProfileService) {
        this.education = new Education();
        this.service.profile.education = this.education;
    }

    ngOnInit() {
        this.service.GetEducation().subscribe(res => {
            this.education = res;
            console.log(res);
        });
    }
    Submit() {
        if (this.education.id)
            this.service.UpdateEducation(this.education).subscribe(res => {
                console.log(res);
            });
        else
            this.service.SaveEducation(this.education).subscribe(res => {
                console.log(res);
            });
    }
}
