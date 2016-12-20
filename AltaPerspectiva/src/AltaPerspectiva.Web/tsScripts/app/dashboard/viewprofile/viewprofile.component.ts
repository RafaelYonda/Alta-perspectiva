import { Component } from '@angular/core';
import { ImageUploadService } from '../../services/image-upload.service';
import { Profile } from '../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/viewprofile.component.html',
    //styleUrls: ['js/app/dashboard/eidtprofile/editprofile.component.css',
    //    'js/app/dashboard/styles/dashboard.buttons.css',
    //    'js/app/dashboard/styles/dashboard.forms.css',
    //    'js/app/dashboard/styles/dashboard.profile.css',
    //    'js/app/dashboard/styles/dashboard.progress.css',
    //    'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ImageUploadService]
})
export class ViewProfileComponent {

}