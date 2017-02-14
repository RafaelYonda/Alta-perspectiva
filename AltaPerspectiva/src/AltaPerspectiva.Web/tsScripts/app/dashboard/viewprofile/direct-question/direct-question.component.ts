import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { QuestionService } from '../../../services/question.service';
import { Category, Question, QuestionSaveViewModel } from '../../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/direct-question/direct-question.component.html',
    providers: [CategoryService, QuestionService]
})
export class DirectQuestionComponent {
    categories: Category[];
    selectedCategory: Category;
    question: QuestionSaveViewModel = new QuestionSaveViewModel();
    constructor(private categoryService: CategoryService, private questionsService: QuestionService) {
    }
    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
        });
    }
    selectCategory(cat: Category) {
        this.question.categoryId = cat.id;
    }
    submitQuestion() {
        this.questionsService.saveDirectQuestion(this.question).subscribe(res => {
            this.question = res;
            console.log(res);

        });
    }
}