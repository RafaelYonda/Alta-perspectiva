import { Component,Input} from '@angular/core';
import { QuestionService} from '../../services/question.service';
import { CommunicationService } from '../../services/communication.service';
import {Question, Answer, DateName} from '../../services/models';

@Component({
    selector: 'topfive-question-left-menu',
    templateUrl: 'topfive-question-left-menu.component.html',
    providers: [QuestionService]
})
export class TopFiveQuestionLeftMenuComponent {

    topFiveQuestions:Question[];
    questionService: QuestionService;

    constructor(questionService: QuestionService, private commServ: CommunicationService) {
        this.questionService = questionService;     
        this.topFiveQuestions = [];                 
    }

    ngOnInit() {
        this.commServ.getCategory().subscribe((catId: string) => {            
            this.questionService.getTopfiveQuestionsByCategory(catId).subscribe(res => {
                this.topFiveQuestions = res;
            });            
        });
        
    }
}