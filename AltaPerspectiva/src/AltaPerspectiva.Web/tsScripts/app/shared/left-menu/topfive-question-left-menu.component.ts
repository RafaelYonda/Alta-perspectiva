import { Component} from '@angular/core';
import { QuestionAnswerService} from '../../services/question-answer.service';
import {Question, Answer, DateName} from '../../services/models';

@Component({
    selector: 'topfive-question-left-menu',
    templateUrl: 'js/app/shared/left-menu/topfive-question-left-menu.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
    providers: [QuestionAnswerService]
})
export class TopFiveQuestionLeftMenuComponent {

    topFiveQuestions:Question[];
    questionService: QuestionAnswerService;

    constructor(questionService: QuestionAnswerService) {
        this.questionService = questionService;                      
    }

    ngOnInit() {
        this.questionService.getTopFiveQuestion().subscribe(res => {
           this.topFiveQuestions = res;
        });
    }
}