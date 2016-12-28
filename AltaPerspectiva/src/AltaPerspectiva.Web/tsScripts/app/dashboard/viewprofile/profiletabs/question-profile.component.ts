import { Component } from '@angular/core';
import { Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight } from '../../../services/models';
import {Question} from '../../../services/models';
import { QuestionAnswerService } from '../../../services/question-answer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageUploadService } from '../../../services/image-upload.service';
import { ProfileService } from '../../../services/profile.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/profiletabs/question-profile.component.html',
    providers: [QuestionAnswerService]
})
export class QuestionProfileComponent {
    questions: Question[];
    constructor(private questionService: QuestionAnswerService) {

    }
    ngOnInit() {
        var subs: any;
        subs = this.questionService.getQuestionsForUser();
        //subs = this.questionService.getQuestionsByCategory('2c0c97ff-00b7-4a3e-9dfd-0dd69ceafd0f');
        subs.subscribe(res => {
            console.log(res);
            this.questions = res;
            this.questions.forEach(x => x.lastAnswer = x.answers[x.answers.length - 1]);
        });
    }
}