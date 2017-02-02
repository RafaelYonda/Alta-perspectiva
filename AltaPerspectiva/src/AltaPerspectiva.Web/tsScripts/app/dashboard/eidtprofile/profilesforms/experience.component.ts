import { Component, ViewContainerRef } from '@angular/core';
import { Experience, DateName } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/experience.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class ExperienceFormComponent {
    public _headerName: string = 'Experience';
    experience: Experience;
    constructor(private service: ProfileService, public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.experience = new Experience();
        this.service.profile.experience = this.experience;
        this.toastr.setRootViewContainerRef(vRef);
    }

    ngOnInit() {
        this.service.GetExperience().subscribe(res => {
            this.experience = res;
            this.showSuccess();
            console.log(res);
        });
    }
    Submit() {
        if (this.experience.id)
            this.service.UpdateExperience(this.experience).subscribe(res => {
                this.showSuccess();
                console.log(res);
            });
        else
            this.service.SaveExperience(this.experience).subscribe(res => {
                console.log(res);
            });
    }
    showSuccess() {
        this.toastr.success('Experience saved successfully!', 'Success!');
    }
}
