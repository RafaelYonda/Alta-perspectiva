import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { QuestionService } from '../../../services/question.service';
import { Category, Question, QuestionSaveViewModel } from '../../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/direct-question/direct-question.component.html',
    providers: [CategoryService, QuestionService]
})
export class DirectQuestionComponent {
    questions: Question[];
    categories: Category[];
    selectedCategory: Category;
    question: QuestionSaveViewModel = new QuestionSaveViewModel();
    constructor(private categoryService: CategoryService, private questionsService: QuestionService) {
    }
    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
        });
        this.questionsService.getQuestionsByCategory('7639B416-8D1C-4119-B58E-143CB860E8A6').subscribe(res => {
            console.log(res);
            this.questions = res;
        });
    }
    selectCategory(cat: Category) {
        this.selectedCategory = cat;
        this.question.categoryIds.push(cat.id);
    }
    submitQuestion() {
        this.questionsService.saveDirectQuestion(this.question).subscribe(res => {
            this.question = res;
            this.ngOnInit();
            console.log(res);

        });
    }
}