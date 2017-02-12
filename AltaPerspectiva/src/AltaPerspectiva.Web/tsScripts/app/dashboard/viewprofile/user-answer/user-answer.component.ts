import { Component } from '@angular/core';
//import { QuestionAnswerService } from '../../../services/question-answer.service';
import { QuestionService } from '../../../services/question.service';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import {Question} from '../../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/user-answer/user-answer.component.html',
    providers: [QuestionService]
})
export class UserAnswerComponent {
    private sub: any;
    questions: Question[];
    readMoreLink: string;

    constructor(private questionService: QuestionService, private _route: ActivatedRoute, private profileService: ProfileService) { }
    ngOnInit() {
        this.sub = this._route.params.subscribe(params => {
            this.questionService.getAnswerbyCredentialId(params['credentialId']).subscribe(res => {
                this.questions = res;
                for (var q = 0; q < this.questions.length; q++) {
                    // answers[0] is the best answer
                    this.questions[q].bestAnswer = this.questions[q].answers[0];

                    if (this.questions[q].bestAnswer && this.questions[q].bestAnswer.text) {
                        // var temp = this.questions[q].bestAnswer.text.substring(0, 200);
                        // this.questions[q].bestAnswer.text = temp;
                        this.readMoreLink = " <a href ='/question/detail/" + this.questions[q].id + "'>read more...</a>";
                        this.questions[q].shareUrl = encodeURI("http://altap.azurewebsites.net/question/detail/" + this.questions[q].id);
                    }
                }
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}