import { Component, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import {LogInObj, Comment } from '../../services/models';

@Component({
    selector: 'ap-comment',
    templateUrl: 'comment.component.html',
    styleUrls: ['comment.component.css'],
    providers: [CommentService]
})
export class CommentComponent {
    commentText: string;
    comment: Comment;
    comments: Comment[];
    commentId: string;
    _logObj: LogInObj;
    @Input() questionId: string = '';
    @Input() answerId: string = '';
    @Input() isQuestion: any;
    constructor(private commentService: CommentService) {
        this._logObj = { isLoggedIn: false, user: { name: "", imageUrl: "", occupassion: "", userid: -1 } };
    }
    ngOnInit() {
        var temp = this;
        if (this.isQuestion) {
            this.commentId = this.questionId;
            this.commentService.getCommentByQuestion(temp.questionId).subscribe(res => {
                this.comments = res;
            });
        }

        else
        {
            this.commentId = this.answerId;
            this.commentService.getCommentByAnswer(temp.answerId).subscribe(res => {
                this.comments = res;
            });
        }
            
        var currentUserName = localStorage.getItem('currentUserName');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
    }

    pushComment(result) {
        this.commentText = "";
        this.comment = result;
        this.comments.push(this.comment);
    }
    submitComment(questionId: string, answerId: string) {
        this.comment = new Comment();
        
        this.comment.commentText = this.commentText;
        if (this.comment.commentText.trim() == "")
            return;

        if (this.isQuestion) {
            this.comment.questionId = this.questionId;
            this.commentService.addQuestionComment(this.comment).subscribe(res => {
                this.pushComment(res)
            });
        }

        else
        {
            this.comment.answerId = this.answerId;
            this.commentService.addAnswerComment(this.comment).subscribe(res => {
                this.pushComment(res)
            });
        }
    }
}