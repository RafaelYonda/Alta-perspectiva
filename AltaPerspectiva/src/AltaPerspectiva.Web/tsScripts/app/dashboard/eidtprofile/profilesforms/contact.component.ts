import { Component } from '@angular/core'; 
import { ProfileService } from '../../../services/profile.service';
import { CategoryService } from '../../../services/category.service';
import { Profile, Contact } from '../../../services/models';
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
        console.log(service.profile);
        this.service.profile.contact = this.contact;
    }
    Submit() {
        //console.log(this.service.profile);
        console.log(this.contact);
        //this.catServ.getAllCategories();
        //this.catServ.getAllCategories().subscribe(res => {
        //    console.log(res);
        //    //this.categories = res;
        //});
        this.service.SaveProfile(this.contact).subscribe(res => {
            console.log(res);
            //this.categories = res;
        });
    }
}
