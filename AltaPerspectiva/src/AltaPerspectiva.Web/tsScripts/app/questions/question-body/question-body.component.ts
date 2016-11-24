import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerService } from '../../services/questionAnswer.service';
import {QuestionMenu, Answer, DateName} from '../../services/models';

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService]
})
export class QuestionPanelComponent {
    date: DateName;
    id: number;
    private sub: any;
    answerList: Answer[];
    constructor(questionService: QuestionAnswerService) {
        this.answerList = questionService.getAnswersByQuestion(2);
        console.log(this.answerList);
        this.date= new DateName();
    }
}