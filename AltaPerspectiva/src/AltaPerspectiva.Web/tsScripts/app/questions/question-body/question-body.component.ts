import { Component } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {QuestionMenu, Question, Answer, DateName} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';

export interface ILoader {
    isLoading: boolean;
}

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService]
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
    scrollPage: number = 0;

    constructor(private questionService: QuestionAnswerService, router: Router, route: ActivatedRoute) {
        this._router = router;
        this.route = route;
        //this.answerList = questionService.getAnswersByQuestion(2);        
        this.questions = [];

        /// load spinner for when  component initialize
        this.loader.isLoading = true;
        
    }

    ngOnInit() {        
       
        //========get questions route param======
        this.route.params.subscribe(params => {
            this.showLoader();
            this.id = params['id']; // (+) converts string 'id' to a number 
            var subs: any;
            if(this.id=='0')
                subs = this.questionService.getQuestions();
            else
                subs = this.questionService.getQuestionsByCategory(this.id);
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