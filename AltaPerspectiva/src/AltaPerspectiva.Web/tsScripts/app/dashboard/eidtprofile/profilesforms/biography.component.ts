﻿import { Component } from '@angular/core';
import { Profile, Biography } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/biography.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class BiographyFormComponent {
    public _headerName: string = 'Biography';
    biography: Biography;
    constructor(private service: ProfileService) {
        this.biography = new Biography();
        console.log(service.profile);
        this.service.profile.biography = this.biography;
    }
    Submit() {
        this.service.SaveBiography(this.biography).subscribe(res => {
        });
    }
}
