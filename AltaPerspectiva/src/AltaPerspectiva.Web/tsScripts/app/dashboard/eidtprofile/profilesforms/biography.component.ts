import { Component, EventEmitter, Output } from '@angular/core';
import { Profile, Biography } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'biography.component.html',
    styleUrls: [
        'tsScripts/dashboard/styles/dashboard.forms.css', 'tsScripts/app/dashboard/eidtprofile/editprofile.component.css',
        'tsScripts/app/dashboard/styles/dashboard.buttons.css',
        'tsScripts/app/dashboard/styles/dashboard.forms.css',
        'tsScripts/app/dashboard/styles/dashboard.profile.css',
        'tsScripts/app/dashboard/styles/dashboard.progress.css',
        'tsScripts/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class BiographyFormComponent {
    public _headerName: string = 'Biography';
    biography: Biography;
    @Output() onProfileSubmit = new EventEmitter<string>();
    constructor(private service: ProfileService) {
        this.biography = new Biography();
        this.service.profile.biography = this.biography;
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
                this.onProfileSubmit.emit("Biography Saved successfully");
                console.log(res);
            });
        else
            this.service.SaveBiography(this.biography).subscribe(res => {
                this.onProfileSubmit.emit("Biography Saved successfully");
                console.log(res);
            });
        
    }
}
