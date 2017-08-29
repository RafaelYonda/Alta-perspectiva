import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { QuestionService } from '../../../services/question.service';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { AnswerDialogComponent } from '../../../shared/answer-dialog/answer-dialog.component';
import { Category, Question, QuestionSaveViewModel } from '../../../services/models';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Component({
    templateUrl: 'direct-question.component.html',
    providers: [CategoryService, QuestionService]
})
export class DirectQuestionComponent {
    private sub: any;
    questionAskedToUser:string;
    questions: Question[];
    categories: Category[];
    selectedCategory: Category;
    question: QuestionSaveViewModel = new QuestionSaveViewModel();
    title: string;
    body:string;
    constructor(private categoryService: CategoryService, private _route: ActivatedRoute, private questionsService: QuestionService, private componentFactoryResolver: ComponentFactoryResolver, public toastr: ToastsManager, vcr: ViewContainerRef) {
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
            this.questions = res;
        });
    }
    submitQuestion() {
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        this.question.categoryIds.push(this.categories[0].id);
        this.question.title = this.title;
        this.question.body = this.body;
        this.question.questionAskedToUser = this.questionAskedToUser;
        
        this.questionsService.saveDirectQuestion(this.question).subscribe(res => {
            this.toastr.success('Answer saved successfully!', 'success');
            this.title = '';
            this.body = '';
            //this.question = res;
            this.ngOnInit();
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

    @ViewChild('answerAnchor', { read: ViewContainerRef }) answerAnchor: ViewContainerRef;

    answerDialogBox(question: Question) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        // Close any already open dialogs
        this.answerAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AnswerDialogComponent);
        let dialogComponentRef = this.answerAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question;
        dialogComponentRef.instance.isDetail = true;
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
            this.ngOnInit();
        });
    }
}