import { Component, Input, ElementRef } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {  Question, Like} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
@Component({
    selector: 'ap-status',
    templateUrl: 'js/app/shared/status/status.component.html',
    styleUrls: ['js/app/shared/status/status.component.css'],
    providers: [StatusService]
})
export class StatusComponent {
    @Input() questionObj: Question;
    like: Like;
    likedUsers: any;
    constructor(private statusService: StatusService,private dataService: QuestionAnswerService) {
    }
    submitLike(answerId: string,questionId:string) {         
        this.like = new Like();
        this.like.answerId = answerId;
        this.like.questionId = questionId;

        this.dataService.addAnswerLike(this.like).subscribe(res => {
            this.like.userId = res.userId ;       
            var douplicateLike = this.questionObj.answers[0].likes.find(x => x.answerId == answerId);
            if (douplicateLike == undefined) {
                    this.questionObj.answers[0].likes.push(this.like);
            }
        });
    }
    submitLikeUserDetails(answerId: string,questionId:string) {       
        this.statusService.addLikeUserDetailsByAnswer(answerId,questionId).subscribe(res => {           
            this.likedUsers = res;
        });       
    }
}