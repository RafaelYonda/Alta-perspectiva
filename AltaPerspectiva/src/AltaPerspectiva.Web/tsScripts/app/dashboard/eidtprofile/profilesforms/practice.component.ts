import { Component, ViewContainerRef } from '@angular/core';
import { PracticeArea } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
    constructor(private service: ProfileService, public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.practiceArea = new PracticeArea();
        this.service.profile.practiceArea = this.practiceArea;
        this.toastr.setRootViewContainerRef(vRef);
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
            this.showSuccess();
            console.log(res);
        });
    }
    showSuccess() {
        this.toastr.success('Practice Area saved successfully!', 'Success!');
    }
}
