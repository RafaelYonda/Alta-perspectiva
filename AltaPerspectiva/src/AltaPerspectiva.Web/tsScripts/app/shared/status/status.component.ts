﻿import { Component, Input, ElementRef } from '@angular/core';
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
    @Input() isQuestion: any;

    commentId: string;
    CommentCount: number;
    like: Like;
    likedUsers: any;
    constructor(private statusService: StatusService, private dataService: QuestionAnswerService) {
    }
    ngOnInit() {
        console.log(this.isQuestion);
        if (this.isQuestion)
        {
            this.commentId = this.questionObj.id;
            this.CommentCount = this.questionObj.comments.length;
        }
        else
        {
            this.commentId = this.answerObj.id;
            this.CommentCount = this.answerObj.comments.length;
        }
    }
    submitLike(answerId: string,questionId:string) {         
        this.like = new Like();
        this.like.answerId = answerId;
        this.like.questionId = questionId;
        //Question
         if (answerId == null && questionId != null) {
                    this.dataService.getQuestionAlreadyLiked(questionId).subscribe(res => {            
                            
                         if(res.result==false)  this.questionObj.answers[0].likes.push(this.like);               
                    });
                }
        ///Answer
        else if (answerId != null || questionId != null) {
            this.dataService.getAnswerAlreadyLiked(answerId).subscribe(res => {  
if(res.result==true)                          
                    if(res.result==false) this.questionObj.answers[0].likes.push(this.like);
                }
            );
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