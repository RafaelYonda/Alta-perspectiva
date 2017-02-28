import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { QuestionService } from '../../../services/question.service';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { Category, Question, QuestionSaveViewModel } from '../../../services/models';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/direct-question/direct-question.component.html',
    providers: [CategoryService, QuestionService]
})
export class DirectQuestionComponent {
    private sub: any;
    questionAskedToUser:string;
    questions: Question[];
    categories: Category[];
    selectedCategory: Category;
    question: QuestionSaveViewModel = new QuestionSaveViewModel();
    constructor(private categoryService: CategoryService, private _route: ActivatedRoute, private questionsService: QuestionService, private componentFactoryResolver: ComponentFactoryResolver) {
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this.sub = this._route.parent.params.subscribe(params => {
            this.questionAskedToUser = params['userId'];
        });

        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
        });
        this.questionsService.GetDirectQuestion(this.questionAskedToUser).subscribe(res => {
            console.log(res);
            this.questions = res;
        });
    }
    selectCategory(cat: Category) {
        this.selectedCategory = cat;
        this.question.categoryIds.push(cat.id);
    }
    submitQuestion() {
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        console.log(this.questionAskedToUser);
        this.question.questionAskedToUser = this.questionAskedToUser;
        
        this.questionsService.saveDirectQuestion(this.question).subscribe(res => {
            this.question = res;
            this.ngOnInit();
            console.log(res);


        });
    }
    @ViewChild('logginAnchor', { read: ViewContainerRef }) logginAnchor: ViewContainerRef;
    ShowNotLoggedIn() {
        this.logginAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        let dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
}