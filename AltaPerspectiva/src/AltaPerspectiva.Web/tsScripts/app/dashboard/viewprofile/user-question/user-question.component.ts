import { Component } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import {Question} from '../../../services/models';
@Component({
    templateUrl: 'user-question.component.html',
    providers: [QuestionService]
})
export class UserQuestionComponent {
    questions: Question[];
    readMoreLink: string;
    private sub: any;

    constructor(private questionService: QuestionService, private profileService: ProfileService, private _route: ActivatedRoute) { }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(params => {
            this.questionService.getQuestionsbyUserId(params['userId']).subscribe(res => {
                this.questions = res;
                for (var q = 0; q < this.questions.length; q++) {
                    this.questions[q].bestAnswer = this.questions[q].answers[0];
                    if (this.questions[q].bestAnswer && this.questions[q].bestAnswer.text) {
                        this.readMoreLink = " <a href ='/question/detail/" + this.questions[q].id + "'>read more...</a>";
                        this.questions[q].shareUrl = encodeURI("http://www.altaperspectiva.com//question/detail/" + this.questions[q].id);
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