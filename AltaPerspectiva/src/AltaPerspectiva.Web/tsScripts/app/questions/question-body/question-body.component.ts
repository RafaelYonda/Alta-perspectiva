import { Component } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { CategoryService } from '../../services/category.service';
import {QuestionMenu, Question, Answer, Category, DateName} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';

export interface ILoader {
    isLoading: boolean;
}

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService, CategoryService]
})
export class QuestionBodyComponent{

    loader: ILoader = { isLoading: false };
    _router: any;
    route: any;   
    id: string;
    private sub: any;
    questions: Question[];

    answerList: Answer[];
    questionList: Question[];
    error: any;
    answer: string;
    categories: Category[];
    categorySelected: string;
    

    scrollPage: number = 0;

    constructor(private questionService: QuestionAnswerService, private categoryService: CategoryService, router: Router, route: ActivatedRoute) {
        this._router = router;
        this.route = route;

        //this.answerList = questionService.getAnswersByQuestion(2);        
        this.questions = [];

        /// load spinner for when  component initialize
        this.loader.isLoading = true;
        
    }

    ngOnInit() {        

        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;

            if (this.id == '0')
                this.categorySelected = this.categories.find(x => x.sequence == 1).name;
            else
                this.categorySelected = this.categories.find(x => x.id == this.id).name;

            
        });
        

        //get questions by route param using category id.
        this.route.params.subscribe(params => {
            this.showLoader();
            this.id = params['id'];
            var subs: any;

            // param id = 0, default route, it is ver tidas
            if (this.id == '0') {               
                subs = this.questionService.getQuestions();
            }
            else {
                subs = this.questionService.getQuestionsByCategory(this.id);
                this.categorySelected = this.categories.find(x => x.id == this.id).name;
            }

            subs.subscribe(res => {               
                this.questions = res;   
                this.hideLoader();    
            });
        });        
        
    }    

    showLoader() {
        console.log('showloader started');
        this.loader.isLoading = true;
    }
    hideLoader() {
        this.loader.isLoading = false;
    }

    onScrollDown() {
        console.log('scrolled!!');
        this.scrollPage = this.scrollPage + 1;
        console.log(this.scrollPage);
    }
}