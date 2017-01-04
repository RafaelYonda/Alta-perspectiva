import { Component} from '@angular/core';
import { QuestionAnswerService} from '../../services/question-answer.service';
//import { CategoryService } from '../../services/category.service';
//import { Category } from '../../services/models';
//import {QuestionMenu, Answer, DateName} from '../../services/models';

@Component({
    selector: 'topfive-question-left-menu',
    templateUrl: 'js/app/core/left-menu/topfive-question-left-menu.component.html',
    styleUrls: ['js/app/core/left-menu/topfive-question-left-menu.component.css'],
    providers: [QuestionAnswerService]//, CategoryService]
})
export class TopFiveQuestionLeftMenuComponent {
    isbackGround = false;
   // date: DateName = new DateName();
   // questionMenuList: QuestionMenu[];
    //answerList: Answer[];
    questionService: QuestionAnswerService;
    //categories: Category[];
    constructor(questionService: QuestionAnswerService) {
        this.questionService = questionService;                      
    }

    ngOnInit() {
       // this.categoryService.getAllCategories().subscribe(res => {
        //    this.categories = res;
        //});
    }
}