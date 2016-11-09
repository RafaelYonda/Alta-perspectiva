import { Component} from '@angular/core';
import { QuestionAnswerService} from '../../services/questionanswer.service';
import {QuestionMenu, Answer, DateName} from '../../services/models';

@Component({
    selector: 'question-panel',
    templateUrl: 'js/app/questions/question-menu-panel/question-menu-panel.component.html',
    providers: [QuestionAnswerService]
})
export class QuestionMenuPanelComponent {
    isbackGround = false;
    date: DateName = new DateName();
    questionMenuList: QuestionMenu[];
    answerList: Answer[];
    questionService: QuestionAnswerService;
    constructor(questionService: QuestionAnswerService) {
        this.questionService = questionService;
        this.questionMenuList = questionService.getQuestionListByString("");
        this.answerList = questionService.getAnswersByQuestion(2);
    }

}