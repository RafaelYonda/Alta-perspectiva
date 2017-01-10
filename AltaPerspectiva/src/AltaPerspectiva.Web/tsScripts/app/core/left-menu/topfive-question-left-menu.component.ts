import { Component} from '@angular/core';
import { QuestionAnswerService} from '../../services/question-answer.service';
//import { CategoryService } from '../../services/category.service';
//import { Category } from '../../services/models';
import {Question, Answer, DateName} from '../../services/models';

@Component({
    selector: 'topfive-question-left-menu',
    templateUrl: 'js/app/core/left-menu/topfive-question-left-menu.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
    providers: [QuestionAnswerService]//, CategoryService]
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