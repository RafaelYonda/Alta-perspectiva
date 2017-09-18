import { Component } from '@angular/core';
//import { QuestionAnswerService } from '../../../services/question-answer.service';
import { QuestionService } from '../../../services/question.service';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import {Question} from '../../../services/models';
@Component({
    templateUrl: 'user-answer.component.html',
    providers: [QuestionService]
})
export class UserAnswerComponent {
    private sub: any;
    questions: Question[] = [];
    readMoreLink: string;
    isLoading = false;
    answerPage = 0;
    userId: string;
    constructor(private questionService: QuestionService, private _route: ActivatedRoute, private profileService: ProfileService) { }
    ngOnInit() {
        this.showLoader();
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(params => {
            this.userId = params['userId'];
            console.log(this.userId);
            this.UpdateAnswerByUserId();
        });
    }

    onScroll() {
        console.log('scroll');
        this.answerPage = this.answerPage + 1;
        this.UpdateAnswerByUserId();
    }
    UpdateAnswerByUserId() {
        console.log(this.answerPage);
        this.questionService.getAnswerbyUserId(this.userId, this.answerPage).subscribe(res => {
            this.questions = this.questions.concat(res);
            this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            this.hideLoader();
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    showLoader() {
        this.isLoading = true;
    }
    hideLoader() {
        this.isLoading = false;
    }
}