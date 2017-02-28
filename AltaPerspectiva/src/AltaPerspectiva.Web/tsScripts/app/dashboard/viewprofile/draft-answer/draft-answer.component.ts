import { Component } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import {Question} from '../../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/draft-answer/draft-answer.component.html',
    providers: [ProfileService]
})
export class DraftAnswerComponent {
    private sub: any;
    questions: Question[];
    readMoreLink: string;

    constructor(private _route: ActivatedRoute, private profileService: ProfileService) { }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(params => {
            this.profileService.GetDraftedQuestions().subscribe(res => {
                this.questions = res;
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            });
        });
    }
}