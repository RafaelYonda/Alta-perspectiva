﻿import { Component, Input, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import {LogInObj, User } from '../../../services/models';
import { BlogPost, BlogLike, BlogComment } from '../../../services/models/models.blogpost';

@Component({
    selector: 'blogpost-comment',
    templateUrl: 'js/app/dashboard/viewprofile/blog-post/post-comment.component.html',
    styleUrls: ['js/app/dashboard/viewprofile/blog-post/post-comment.component.css'],
    providers: [BlogService]
})
export class BlogpostCommentComponent {

    commentText: string;
    comment: BlogComment;
    comments: BlogComment[];    

    _logObj: LogInObj;

    @Input() blogPost: BlogPost;

    @Output() sendCommentCount = new EventEmitter<any>();

    constructor(private commentService: BlogService) {
        var user: User = new User();
        user.userid = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        
        this.commentService.getPostCommentsByPostId(this.blogPost.id).subscribe(res => {
            this.comments = res;
        });
            
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
    submitComment(blogPostId: string) {

        if (this.comment.commentText.trim() == "")
            return;

        this.comment = new BlogComment();
        this.comment.blogPostId = blogPostId;
        this.comment.commentText = this.commentText;        
        
        this.commentService.addPostComment(this.comment).subscribe(res => {
            this.pushComment(res);
        });

        this.sendCommentCount.emit(null);
    }
}