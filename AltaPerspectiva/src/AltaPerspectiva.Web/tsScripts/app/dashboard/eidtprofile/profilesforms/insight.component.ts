import { Component } from '@angular/core';
import { Profile, Insight } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/insight.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class InsightFormComponent {
    public _headerName: string = 'Insight';
    insight: Insight;
    constructor(private service: ProfileService) {
        this.insight = new Insight();
        console.log(service.profile);
        this.service.profile.insight = this.insight;
    }
}
