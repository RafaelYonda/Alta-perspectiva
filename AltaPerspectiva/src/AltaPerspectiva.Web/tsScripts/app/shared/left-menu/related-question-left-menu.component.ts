import {Component} from '@angular/core';
import {QuestionAnswerService} from '../../services/question-answer.service';
import { CategoryService } from '../../services/category.service';
import { CommunicationService } from '../../services/communication.service';
import {QuestionMenu, Category, Question} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';

@Component({
    selector: 'related-question-left-menu',
    templateUrl: 'js/app/shared/left-menu/related-question-left-menu.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
    providers: [QuestionAnswerService, CategoryService, CommunicationService]
})
    export class RelatedQuestionMenu {
    questions: Question[];
    id: string;
    _router: any;
    route: any;
   
    questionService: QuestionAnswerService; 

    constructor(questionService: QuestionAnswerService, categoryService: CategoryService, router: Router, route: ActivatedRoute, private commServ: CommunicationService) {
        this.questionService = questionService; 
        this._router = router;
        this.route = route;
        //this.answerList = questionService.getAnswersByQuestion(2);        
        this.questions = [];
       
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
           
            this.id = params['id']; // (+) converts string 'id' to a number 
            var subs: any;
           
            if (this.id == '0' || this.id == 'undefined' || this.id == undefined) 
                subs = this.questionService.getQuestions();        
            else 
                subs = this.questionService.getRelatedQuestions(this.id);
            
            subs.subscribe(res => {
                this.questions = res;
                              
            });

        }); 
    }
}