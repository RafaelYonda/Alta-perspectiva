import { Component } from '@angular/core';
import { Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../services/image-upload.service';
import { ProfileService } from '../../services/profile.service';
import { ConfigService } from '../../services/config.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/viewprofile.component.html',
    styleUrls: ['js/app/dashboard/viewprofile/viewprofile.component.css',
        'js/app/dashboard/styles/dashboard.buttons.css',
        'js/app/dashboard/styles/dashboard.forms.css',
        'js/app/dashboard/styles/dashboard.profile.css',
        'js/app/dashboard/styles/dashboard.progress.css',
        'js/app/dashboard/styles/dashboard.status.css'],
    providers: [ProfileService, ConfigService]
})
export class ViewProfileComponent {
    contact: Contact;
    biography: Biography;
    education: Education;
    experience: Experience;
    skills: Skills;
    practiceArea: PracticeArea;
    insight: Insight

    route: any;
    imageLink: string;
    constructor(private profileService: ProfileService, private _route: ActivatedRoute, private _configService: ConfigService) {
        //this.skills = { skillName: "", skillArea: [], userId: '0' };
        //this.practiceArea = { PracticeAreaName: "", practiceArea: [], userId: '0' };
        this.route = _route;
    }
    ngOnInit() {
        this.fillData();
        this.SetImage();
    }
    SetImage() {
        this._configService.getConfig().subscribe(res => {
            this.imageLink = res.profileImage;
            var user = this.profileService.GetUser().subscribe(usr => {
                if (usr.imageUrl != '')
                    this.imageLink += '/' + usr.imageUrl;
                else this.imageLink = '../images/userAdd.png';
            });
        });
    }
    fillData() {
        this.route.data
            .subscribe(res => {
                console.log(res);
                //***for Unknown reason res obeject is retuening 'question'  Object... need to investigate later***
                this.contact = res.question.contractInformation;
                this.biography = res.question.biography;
                this.education = res.question.education;
                this.experience = res.question.experience;
                this.skills = res.question.insight;
                this.practiceArea = res.question.practiceArea;
                this.insight = res.question.skill;
                console.log(this.contact);
                //this.question = res.question;
                //console.log(this.question.comments);
            });
    }
}