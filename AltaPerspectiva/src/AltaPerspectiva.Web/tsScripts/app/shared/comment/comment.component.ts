import { Component, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import {LogInObj, Comment } from '../../services/models';

@Component({
    selector: 'ap-comment',
    templateUrl: 'js/app/shared/comment/comment.component.html',
    styleUrls: ['js/app/shared/comment/comment.component.css'],
    providers: [CommentService]
})
export class CommentComponent {
    commentText: string;
    comment: Comment;
    comments: Comment[];
    _logObj: LogInObj;
    @Input() questionId: string = '';
    constructor(private commentService: CommentService) {
        this._logObj = { isLoggedIn: false, user: { name: "", imageUrl: "", occupassion: "", userid: -1 } };
    }
    ngOnInit() {
        var currentUserName = localStorage.getItem('currentUserName');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }

        this.commentService.getCommentByQuestion(this.questionId).subscribe(res => {
            this.comments = res;
        }); 
    }

    submitComment(questionId: string) {
        this.comment = new Comment();
        this.comment.questionId = questionId;
        this.comment.commentText = this.commentText;

        this.commentService.addQuestionComment(this.comment).subscribe(res => {
            this.commentText = "";
            this.comment = res;
            this.comments.push(this.comment);

        });
    }
}