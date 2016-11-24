import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {QuestionMenu, Answer, DateName} from '../../services/models';
import { Router } from '@angular/router';

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService]
})
export class QuestionPanelComponent {
    _router: any;
    date: DateName;
    id: number;
    private sub: any;
    answerList: Answer[];
    constructor(questionService: QuestionAnswerService, router: Router) {
        this._router = router;
        this.answerList = questionService.getAnswersByQuestion(2);
        console.log(this.answerList);
        this.date= new DateName();
    }

    GoToQuestionDetails() {
        this._router.navigateByUrl('questionDetail', { skipLocationChange: true });
    }
}