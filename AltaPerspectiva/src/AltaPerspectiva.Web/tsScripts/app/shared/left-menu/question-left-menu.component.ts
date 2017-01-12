﻿import { Component} from '@angular/core';
import { QuestionAnswerService} from '../../services/question-answer.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/models';
import {QuestionMenu, Answer, DateName} from '../../services/models';

@Component({
    selector: 'question-left-menu',
    templateUrl: 'js/app/shared/question-left-menu.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
    providers: [QuestionAnswerService, CategoryService]
})
export class QuestionMenuPanelComponent {
    isbackGround = false;
    date: DateName = new DateName();
    questionMenuList: QuestionMenu[];
    answerList: Answer[];
    questionService: QuestionAnswerService;
    categories: Category[];
    constructor(questionService: QuestionAnswerService,private categoryService: CategoryService) {
        this.questionService = questionService;                      
    }

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
        });
    }
}