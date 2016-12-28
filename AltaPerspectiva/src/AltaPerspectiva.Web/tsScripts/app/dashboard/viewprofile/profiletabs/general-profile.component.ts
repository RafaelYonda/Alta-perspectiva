import { Component } from '@angular/core';
import { Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight } from '../../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ProfileService } from '../../../services/profile.service';
import { ConfigService } from '../../../services/config.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/profiletabs/general-profile.component.html',
    styleUrls: ['js/app/dashboard/viewprofile/viewprofile.component.css'],
    providers: [ProfileService, ConfigService]
})
export class GeneralProfileComponent {
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
    }
    
    fillData() {
        this.route.data
            .subscribe(res => {
                //***for Unknown reason res obeject is retuening 'question'  Object... need to investigate later***
                this.contact = res.question.contractInformation;
                this.biography = res.question.biography;
                this.education = res.question.education;
                this.experience = res.question.experience;
                this.skills = res.question.insight;
                this.practiceArea = res.question.practiceArea;
                this.insight = res.question.skill;
            });
    }
}