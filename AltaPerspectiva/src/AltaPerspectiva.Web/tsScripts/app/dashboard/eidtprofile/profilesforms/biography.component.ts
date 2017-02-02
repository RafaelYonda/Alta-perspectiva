import { Component, ViewContainerRef } from '@angular/core';
import { Profile, Biography } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
    constructor(private service: ProfileService,public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.biography = new Biography();
        this.service.profile.biography = this.biography;
        this.toastr.setRootViewContainerRef(vRef);
    }
    ngOnInit() {
        this.service.GetBiography().subscribe(res => {
            this.biography = res;
            console.log(res);
        });
    }
    Submit() {
        if (this.biography.id)
            this.service.UpdateBiography(this.biography).subscribe(res => {
                console.log(res);
                this.showSuccess();
            });
        else
            this.service.SaveBiography(this.biography).subscribe(res => {
                console.log(res);
                this.showSuccess();
            });
    }
    showSuccess() {
        this.toastr.success('Biography saved successfully!', 'Success!');
    }
}
