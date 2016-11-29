import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
import {QuestionMenu, Question,Answer, DateName} from '../../services/models';

@Component({
    selector: "question-details",
    templateUrl: 'js/app/questions/question-details/question-details.component.html',
    styleUrls: ['js/app/questions/question-details/question-details.css'],
    providers: [QuestionResolver]
})
export class QuestionDetailComponent {
    date: DateName;
    route: any;
    error: any;
    id: string;
    private sub: any;
    question: Question;
    constructor(private _route: ActivatedRoute, private questionService: QuestionResolver) {
        this.route = _route;
        //this.question = questionService.getFakeQuestion();
        this.date= new DateName();
    }
    ngOnInit() {
        this.route.data
            .subscribe(res => {
                this.question = res.question;
                console.log(this.question);
                console.log(this.question.answers);
            });
       
        //this.sub = this.route.params.subscribe(params => {
        //    this.id = params['id'] ;
        //    console.log(params['id']);
            
        //    this.questionService.GetQuestion(this.id).subscribe(res => {
        //        this.question = res;
        //        console.log(this.question );
        //    });
        //});
    }
}