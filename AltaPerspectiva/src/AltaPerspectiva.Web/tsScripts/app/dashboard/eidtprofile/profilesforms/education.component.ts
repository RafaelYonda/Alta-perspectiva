﻿import { Component } from '@angular/core';
import { Profile, Education } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/education.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css',
    ],
    providers: [ProfileService]
})
export class EducationFormComponent {
    education: Education;
    constructor(private service: ProfileService) {
        this.education = new Education();
        console.log(service.profile);
        this.service.profile.education = this.education;
        //var d = this.education.startDate.setFullYear(2016)
    }
}