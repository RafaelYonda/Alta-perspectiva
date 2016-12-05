import { Component } from '@angular/core';
import { Profile, PracticeArea } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/practice.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css',
    ],
    providers: [ProfileService]
})
export class PracticeFormComponent {
    practiceArea: PracticeArea;
    constructor(private service: ProfileService) {
        this.practiceArea = new PracticeArea();
        console.log(service.profile);
        this.service.profile.practiceArea = this.practiceArea;
    }
}
