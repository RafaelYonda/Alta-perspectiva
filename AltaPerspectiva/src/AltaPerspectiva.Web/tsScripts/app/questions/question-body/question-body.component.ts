import { Component } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {QuestionMenu, Question, Answer, DateName} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService]
})
export class QuestionBodyComponent{
    _router: any;
    route: any;   
    id: number;
    private sub: any;

    answerList: Answer[];
    questionList: Question[];
    error: any;
    answer: string;

    constructor(questionService: QuestionAnswerService, router: Router, route: ActivatedRoute) {
        this._router = router;
        this.route = route;
        this.answerList = questionService.getAnswersByQuestion(2);        
    }

    ngOnInit() {
        ///route resolve servivce to get data
        this.route.data
            .subscribe(res => this.questionList = res, error => this.error = error);
    }

    GoToQuestionDetails() {
        this._router.navigateByUrl('questionDetail', { skipLocationChange: true });
    }
}