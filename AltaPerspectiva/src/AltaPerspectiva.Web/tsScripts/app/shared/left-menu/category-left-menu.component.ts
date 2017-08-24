﻿import { Component,Input} from '@angular/core';
import { QuestionAnswerService} from '../../services/question-answer.service';
import { CommunicationService } from '../../services/communication.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/models';
import {QuestionMenu, Answer, DateName} from '../../services/models';

@Component({
    selector: 'category-left-menu',
    templateUrl: 'category-left-menu.component.html',
    styleUrls: ['left-menu.css'],
    providers: [QuestionAnswerService, CategoryService]
})
export class CategoryMenuPanelComponent {
    @Input() caegoryId: string;
    questionService: QuestionAnswerService;
    categories: Category[];
    constructor(questionService: QuestionAnswerService, private categoryService: CategoryService, private commServ: CommunicationService) {
        //this.questionService = questionService;                      
    }

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
        });
    }
}