import { Component } from '@angular/core';
import { Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight } from '../../../services/models';
import {Question} from '../../../services/models';
import { QuestionAnswerService } from '../../../services/question-answer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ProfileService } from '../../../services/profile.service';
import { ConfigService } from '../../../services/config.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/profiletabs/project-profile.component.html',
    providers: [QuestionAnswerService]
})
export class ProjectlProfileComponent { }