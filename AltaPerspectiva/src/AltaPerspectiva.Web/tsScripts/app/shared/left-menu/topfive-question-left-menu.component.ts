import { Component} from '@angular/core';
import { QuestionService} from '../../services/question.service';
import { CommunicationService } from '../../services/communication.service';
import {Question, Answer, DateName} from '../../services/models';

@Component({
    selector: 'topfive-question-left-menu',
    templateUrl: 'js/app/shared/left-menu/topfive-question-left-menu.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
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
            console.log(catId);
            this.questionService.getTopfiveQuestionsByCategory(catId).subscribe(res => {
                this.topFiveQuestions = res;
                console.log(res);
            });
            console.log('Welcome %s', catId);
        });
        
    }
}