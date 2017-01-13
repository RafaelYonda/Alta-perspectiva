import { Component, Input, ElementRef } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {  Question, Answer, Like} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
@Component({
    selector: 'ap-status',
    templateUrl: 'js/app/shared/status/status.component.html',
    styleUrls: ['js/app/shared/status/status.component.css'],
    providers: [StatusService]
})
export class StatusComponent {
    @Input() questionObj: Question;
    @Input() answerObj: Answer;
    like: Like;
    likedUsers: any;
    constructor(private statusService: StatusService,private dataService: QuestionAnswerService) {
    }

    submitLike(answerId: string,questionId:string) {         
        this.like = new Like();
        this.like.answerId = answerId;
        this.like.questionId = questionId;

        if (answerId != null || questionId != null) {



            this.dataService.addAnswerLike(this.like).subscribe(res => {                            
                    this.questionObj.answers[0].likes.push(this.like);
                }
            );
        }

        if (answerId == null && questionId != null) {


            this.dataService.addQuestionLike(this.like).subscribe(res => {            
                    this.questionObj.answers[0].likes.push(this.like);               
            });
        }
    }

    showLikeUserDetails(answerId: string, questionId: string) {
        if (answerId != null) {
            this.statusService.showLikeUserDetailsByQuestion(questionId).subscribe(res => {
                this.likedUsers = res;
            });
        }  
        if (answerId == null) {
            this.statusService.showLikeUserDetailsByAnswer(answerId, questionId).subscribe(res => {
                this.likedUsers = res;
            });
        }    
    }
}