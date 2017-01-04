import { Component, Input, ElementRef } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {  Question, Like} from '../../services/models';

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
    constructor(private statusService: StatusService) {
    }
    submitLike(questionId: string) {
        console.log(questionId);
        this.like = new Like();
        this.like.questionId = questionId;
        this.statusService.addQuestionLike(this.like).subscribe(res => {
            this.like.userId = res.userId;
            var douplicateLike = this.questionObj.likes.find(x => x.userId == res.userId && x.questionId == questionId);
            if (douplicateLike == undefined) {
                this.questionObj.likes.push(this.like);
            }
        });
    }
    submitLikeUserDetails(questionId: string) {
        this.statusService.addLikeUserDetails(questionId).subscribe(res => {
            console.log(res);
            this.likedUsers = res;
        });
        // this.like = new Like();
        // this.like.questionId = questionId;       

        //  this.questionAnswerService.addQuestionLike(this.like).subscribe(res => {
        //    this.questions.find(x=>x.id==questionId).likes.push(this.like);
        //  });
    }
}