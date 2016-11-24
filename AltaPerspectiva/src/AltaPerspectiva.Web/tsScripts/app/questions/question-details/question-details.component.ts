import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {QuestionMenu, Question,Answer, DateName} from '../../services/models';

@Component({
    selector: "question-details",
    templateUrl: 'js/app/questions/question-details/question-details.component.html',
    styleUrls: ['js/app/questions/question-details/question-details.css'],
    providers: [QuestionAnswerService]
})
export class QuestionDetailComponent {
    date: DateName;
    id: number;
    private sub: any;
    question: Question;
    constructor(questionService: QuestionAnswerService) {
        this.question = questionService.GetQuestion(2);
        console.log(this.question);
        this.date= new DateName();
    }
}