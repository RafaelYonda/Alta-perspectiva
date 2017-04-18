import { Component } from '@angular/core';
import { Insight } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'insight.component.html',
    styleUrls: [
        'tsScripts/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'tsScripts/app/dashboard/styles/dashboard.buttons.css',
        'tsScripts/app/dashboard/styles/dashboard.forms.css',
        'tsScripts/app/dashboard/styles/dashboard.profile.css',
        'tsScripts/app/dashboard/styles/dashboard.progress.css',
        'tsScripts/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class InsightFormComponent {
    public _headerName: string = 'Insight';
    insight: Insight;
    constructor(private service: ProfileService) {
        this.insight = new Insight();
        this.service.profile.insight = this.insight;
    }

    ngOnInit() {
        this.service.GetInsight().subscribe(res => {
            this.insight = res;
            console.log(res);
        });
    }

    Submit() {
        if (this.insight.id)
            this.service.UpdateInsight(this.insight).subscribe(res => {
                console.log(res);
            });
        else
            this.service.SaveInsight(this.insight).subscribe(res => {
                console.log(res);
            });
    }
}
