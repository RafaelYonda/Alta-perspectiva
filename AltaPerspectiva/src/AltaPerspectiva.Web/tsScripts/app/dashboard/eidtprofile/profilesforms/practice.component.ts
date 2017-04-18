import { Component } from '@angular/core';
import { PracticeArea } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'practice.component.html',
    styleUrls: [
        'tsScripts/app/dashboard/styles/dashboard.forms.css', 'tsScripts/app/dashboard/eidtprofile/editprofile.component.css',
        'tsScripts/app/dashboard/styles/dashboard.buttons.css',
        'tsScripts/app/dashboard/styles/dashboard.forms.css',
        'tsScripts/app/dashboard/styles/dashboard.profile.css',
        'tsScripts/app/dashboard/styles/dashboard.progress.css',
        'tsScripts/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class PracticeFormComponent {
    public _headerName: string = 'Practice Area';
    practiceArea: PracticeArea;
    constructor(private service: ProfileService) {
        this.practiceArea = new PracticeArea();
        this.service.profile.practiceArea = this.practiceArea;
    }
    remove(skillRemoved) {
        var index = this.practiceArea.practiceArea.indexOf(skillRemoved);
        if (index > -1) {
            this.practiceArea.practiceArea.splice(index, 1);
        }
    }
    Submit() {
        this.service.SavePracticeArea(this.practiceArea).subscribe(res => {
        });
    }

    ngOnInit() {
        this.service.GetPracticeArea().subscribe(res => {
            this.practiceArea.practiceArea = res;
            console.log(res);
        });
    }
}
