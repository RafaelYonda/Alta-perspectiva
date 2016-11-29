import { Component } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {QuestionMenu, Question, Answer, DateName} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService]
})
export class QuestionBodyComponent{
    _router: any;
    route: any;   
    id: number;
    private sub: any;
    questions: Question[];

    answerList: Answer[];
    questionList: Question[];
    error: any;
    answer: string;

    constructor(private questionService: QuestionAnswerService, router: Router, route: ActivatedRoute) {
        this._router = router;
        this.route = route;
        this.answerList = questionService.getAnswersByQuestion(2);        
        this.questions = [];
    }

    ngOnInit() {
        //=====Question Load======
        this.questionService.getQuestions().subscribe(res => {
            var temques = [];
            res.forEach(function (el) {
                console.log(this);
                //console.log(el);
                var question = new Question();
                question.body = el.body;
                question.title = el.title;
                question.user = {
                    userid: 1, name: 'Rafael Yonda', occupassion: 'Industrial engineer', imageUrl: "../../../../images/avatar.png"
                };
                question.responseCount = '1';
                temques.push(question);
            });
            console.log(res[0]);
            console.log(temques);

            this.questions = temques;
        }); 
        ///route resolve servivce to get data
        this.route.data
            .subscribe(res => this.questionList = res, error => this.error = error);
    }

    GoToQuestionDetails() {
        this._router.navigateByUrl('questionDetail', { skipLocationChange: true });
    }
}