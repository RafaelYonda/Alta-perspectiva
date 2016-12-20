import { Component } from '@angular/core';
import { ImageUploadService } from '../../services/image-upload.service';
import { Profile } from '../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/editprofile.component.html',
    styleUrls: ['js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ImageUploadService]
})
export class EditProfileComponent {
    doc: Image;
    _headerName: string ='Contact Info';
    //profile: Profile;
    constructor(private _service: ImageUploadService) {
    }
    //Submit() {
    //    //console.log(this.service.profile);
    //    this.service.SaveProfile();
    //}
    changeHeader(headerName: string) {
        this._headerName = headerName;
    }
    onChange(event) {
        let file = event.srcElement.files;
        this._service
            .upload(file)
            .subscribe(res => {
            console.log(res);
        });
        //let postData = { field1: "field1", field2: "field2" }; // Put your form data variable. This is only example.
        //this._service.postWithFile(file).then(result => {
        //    console.log(result);
        //});
    }
}