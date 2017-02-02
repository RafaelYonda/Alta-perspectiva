﻿import { Component, Input, ElementRef, EventEmitter,Output } from '@angular/core';
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

    @Output() onQuestionDetailClicked = new EventEmitter<boolean>();
    @Output() onQuestionReportClicked = new EventEmitter<any>();

    commentId: string;
    CommentCount: number;
    like: Like;
    likedUsers: any;
    constructor(private statusService: StatusService, private dataService: QuestionAnswerService) {
    }

    ngOnInit() {
        if (this.isQuestion)
        {
            this.commentId = this.questionObj.id;
            this.CommentCount = this.questionObj.comments.length;
        }
        else
        {
            this.commentId = this.answerObj.id;
            this.CommentCount = this.answerObj.comments? this.answerObj.comments.length:0;
        }
    } 
    bookmarkClicked(questionId: string) {
           this.dataService.addBookMark(questionId).subscribe(res => {
                 console.log(questionId + 'saved as bookmark');
          });
    }

    questionDetailClicked()
    {
        this.onQuestionDetailClicked.emit(true);
    }

    submitLike(answerId: string,questionId:string) {         
        this.like = new Like();
        this.like.answerId = answerId;
        this.like.questionId = questionId;
        //Question
         if (answerId == null && questionId != null) {
                    this.dataService.getQuestionAlreadyLiked(questionId).subscribe(res => {            
                        if (res.result == true) return; 
                        else {
                            this.dataService.addQuestionLike(this.like).subscribe(res => {
                                this.questionObj.likes.push(this.like);
                            });
                            
                        }              
                    });
                }
        ///Answer
        else if (answerId != null || questionId != null) {
             this.dataService.getAnswerAlreadyLiked(answerId).subscribe(res => {
                 if (res.result == true) return;
                    else {
                        this.dataService.addAnswerLike(this.like).subscribe(res => {
                            this.questionObj.answers.find(x => x.id == answerId).likes.push(this.like);
                        });
                    }
                }
            );
        }
    }

    showLikeUserDetails(answerId: string, questionId: string) {
        if (this.isQuestion) {
            this.statusService.showLikeUserDetailsByQuestion(this.questionObj.id).subscribe(res => {
                this.likedUsers = res;
            });
        }
        else {
            this.statusService.showLikeUserDetailsByAnswer(this.answerObj.id).subscribe(res => {
                this.likedUsers = res;
            });
        }
    }
    questionReportClicked(questionId: string,answerId:string) {
        console.log('questionReportClicked->' + questionId + '->' + answerId);
        this.onQuestionReportClicked.emit({ questionId: questionId, answerId: answerId });
    }
}