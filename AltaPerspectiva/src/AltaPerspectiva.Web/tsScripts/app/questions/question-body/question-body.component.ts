import { Component } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { CategoryService } from '../../services/category.service';
import { ConfigService } from '../../services/config.service';
import {QuestionMenu, Question, Answer, Category, DateName, TotalCount, Config} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';

export interface ILoader {
    isLoading: boolean;
}

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService, CategoryService, ConfigService]
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
    categorySelected: Category;
    

    scrollPage: number = 0;
    config: Config;
    totalCount: TotalCount;

    constructor(private questionService: QuestionAnswerService, private categoryService: CategoryService, private configService: ConfigService, router: Router, route: ActivatedRoute) {
        this._router = router;
        this.route = route;

        //this.answerList = questionService.getAnswersByQuestion(2);        
        this.questions = [];

        /// load spinner for when  component initialize
        this.loader.isLoading = true;
        
    }

    ngOnInit() {     

        this.configService.getConfig().subscribe(r => {
            this.config = r;
        });
        
        this.loadCategories();

        //get questions by route param using category id.
        this.route.params.subscribe(params => {
            this.showLoader();
            this.id = params['id'];
            var subs: any;

            // param id = 0, default route, it is ver tidas
            if (this.id == '0')
            {               
                // questions loaded by latest, without categoryId
                subs = this.questionService.getQuestions();
            }
            else
            {
                // questions loaded by category id
                subs = this.questionService.getQuestionsByCategory(this.id);

                /// if page directly loads from url, then categories gets undefiend                
                this.loadCategories();              
            }

            subs.subscribe(res => {               
                this.questions = res;               
                this.hideLoader();    
            });
        });        
        
    }    

    loadCategories() {

        this.categoryService.getAllCategories().subscribe(res => {

            this.categories = res;

            if (this.id == '0')
                this.categorySelected = this.categories.find(x => x.sequence == 1);
            else
                this.categorySelected = this.categories.find(x => x.id == this.id);

            if (this.categorySelected && this.categorySelected.image)
                this.categorySelected.image = this.config.categoryImage.concat(this.categorySelected.image);

            this.categoryService.getTotalCount(this.categorySelected.id).subscribe(x => {
                this.totalCount = x;
            });
        });
    }

    addFollower(categoryId: string)
    {
        this.categoryService.addAddFollower(categoryId).subscribe(res => {
            this.totalCount.totalUsers += 1;
        });
    }

    getQuestionNotAnswered(categoryId: string)
    {
        this.questionService.getQuestionsNotAnswered(categoryId).subscribe(res => {
            this.questions = res;
        });
    }

    getQuestionsAnswered(categoryId: string)
    {
        this.questionService.getQuestyionsAnswered(categoryId).subscribe(res => {
            this.questions = res;
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