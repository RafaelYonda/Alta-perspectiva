import { Component } from '@angular/core';
import { Profile, Insight } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/insight.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css',
    ],
    providers: [ProfileService]
})
export class InsightFormComponent {
    insight: Insight;
    constructor(private service: ProfileService) {
        this.insight = new Insight();
        console.log(service.profile);
        this.service.profile.insight = this.insight;
    }
}
