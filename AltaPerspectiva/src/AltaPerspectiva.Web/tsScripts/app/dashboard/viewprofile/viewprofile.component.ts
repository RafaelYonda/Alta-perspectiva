import { Component } from '@angular/core';
import { Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight } from '../../services/models';
import { ImageUploadService } from '../../services/image-upload.service';
import { ProfileService } from '../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/viewprofile.component.html',
    styleUrls: ['js/app/dashboard/viewprofile/viewprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService]
})
export class ViewProfileComponent {
    contact: Contact;
    biography: Biography;
    education: Education;
    experience: Experience;
    skills: Skills;
    practiceArea: PracticeArea;
    insight: Insight


    constructor(private service: ProfileService) {
        console.log('Profile');
        //var x = this.contact.addressLine1
    }
    ngOnInit() {
        console.log('On init');
        this.service.GetContact().subscribe(res => {
            console.log(res);
        });
    }
}