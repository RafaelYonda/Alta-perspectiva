import { Component, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import {User, Comment } from '../../services/models';

@Component({
    selector: 'user-info',
    templateUrl: 'js/app/shared/user-info/user-info.component.html',
    styleUrls: ['js/app/shared/user-info/user-info.component.css'],
    providers: [CommentService]
})
export class UserInfoComponent {
    commentText: string;
    comment: Comment;
    comments: Comment[];
    userObj: User;
    @Input() user: any;
    @Input() viewDate: Date;
    constructor() {
        this.userObj = this.user;
        console.log(this.user);
    }
}