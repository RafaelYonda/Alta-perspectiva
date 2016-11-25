import { Component } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {QuestionMenu,Question, Answer, DateName} from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService]
})
export class QuestionBodyComponent {
    _router: any;
    route: any;
    date: DateName;
    id: number;
    private sub: any;

    answerList: Answer[];
    questionList: Question[];

    error: any;
    constructor(questionService: QuestionAnswerService, router: Router ,route:ActivatedRoute) {
        this._router = router;
        this.answerList = questionService.getAnswersByQuestion(2);  
        console.log(this.answerList);
        this.date= new DateName();
    }

    ngOnInit() {
        this.route.data
            .subscribe(res => this.questionList = res, error => this.error = error).flatmaplates();
        console.log("Route resolve data:");

    }

    GoToQuestionDetails() {
        this._router.navigateByUrl('questionDetail', { skipLocationChange: true });
    }
}