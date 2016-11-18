import { Component} from '@angular/core';
import { QuestionAnswerService} from '../../services/questionanswer.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/category'
import {QuestionMenu, Answer, DateName} from '../../services/models';

@Component({
    selector: 'question-panel',
    templateUrl: 'js/app/questions/question-menu-panel/question-menu-panel.component.html',
    styleUrls: ['js/app/questions/question-menu-panel/question-menu-panel.css'],
    providers: [QuestionAnswerService, CategoryService]
})
export class QuestionMenuPanelComponent {
    isbackGround = false;
    date: DateName = new DateName();
    questionMenuList: QuestionMenu[];
    answerList: Answer[];
    questionService: QuestionAnswerService;
    categories: Category[];
    constructor(questionService: QuestionAnswerService, categoryService: CategoryService) {
        this.questionService = questionService;
        this.questionMenuList = questionService.getQuestionListByString("");
        this.answerList = questionService.getAnswersByQuestion(2);
        this.categories = categoryService.getCategories();
    }

}