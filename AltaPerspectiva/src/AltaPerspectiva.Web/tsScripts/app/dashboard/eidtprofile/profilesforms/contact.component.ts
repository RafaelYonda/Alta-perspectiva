import { Component } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { CategoryService } from '../../../services/category.service';
import { Contact } from '../../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/eidtprofile/profilesforms/contact.component.html',
    styleUrls: [
        'js/app/dashboard/styles/dashboard.forms.css', 'js/app/dashboard/eidtprofile/editprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService, CategoryService]
})
export class ContactFormComponent {
    public _headerName: string = 'Contact Info';
    contact: Contact;
    constructor(private service: ProfileService, private catServ: CategoryService) {
        this.contact = new Contact();
        this.service.profile.contact = this.contact;
    }
    ngOnInit() {
        this.service.GetContact().subscribe(res => {
            this.contact = res;
            console.log(res);
        });
    }
    Submit() {
        if (this.contact.id)
            this.service.UpdateContact(this.contact).subscribe(res => {
                console.log(res);
            });
        else
            this.service.SaveContact(this.contact).subscribe(res => {
                console.log(res);
            });
    }
}
