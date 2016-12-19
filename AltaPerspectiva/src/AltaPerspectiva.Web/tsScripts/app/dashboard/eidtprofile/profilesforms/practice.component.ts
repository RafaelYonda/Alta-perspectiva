﻿import { Component } from '@angular/core';
import { Profile, PracticeArea } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/practice.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class PracticeFormComponent {
    public _headerName: string = 'Practice Area';
    practiceArea: PracticeArea;
    constructor(private service: ProfileService) {
        this.practiceArea = new PracticeArea();
        console.log(service.profile);
        this.service.profile.practiceArea = this.practiceArea;
    }
    Submit() {
        this.service.SavePracticeArea(this.practiceArea).subscribe(res => {
            console.log(res);
        });
    }
}
