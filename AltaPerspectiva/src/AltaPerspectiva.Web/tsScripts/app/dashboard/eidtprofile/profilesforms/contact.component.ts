import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Profile, Contact } from '../../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/contact.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css'
    ],
    providers: [ProfileService]
})
export class ContactFormComponent {
    contact: Contact;
    constructor(private service: ProfileService) {
        this.contact = new Contact();
        console.log(service.profile);
        this.service.profile.contact = this.contact;
        //ProfileService.profile.contact = this.contact;
    }
    onChangeModel($event) {
        //console.log(this.contact);
        
        //console.log(ProfileService.profile.contact);
    }
}
