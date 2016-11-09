import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerService } from '../../services/questionAnswer.service';
import {QuestionMenu, Answer, DateName} from '../../services/models';

@Component({
    selector: "answer-panel",
    templateUrl: 'js/app/questions/answer-panel/answer-panel.component.html',
    providers: [QuestionAnswerService]
})
export class AnswerPanelComponent {
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