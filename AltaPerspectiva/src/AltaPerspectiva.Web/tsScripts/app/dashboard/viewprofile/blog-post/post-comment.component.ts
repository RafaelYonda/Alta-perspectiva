import { Component, Input, EventEmitter, Output } from '@angular/core';
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
    comment: BlogComment = new BlogComment();
    comments: BlogComment[];    

    _logObj: LogInObj;

    @Input() blogPost: BlogPost;

    @Output() sendCommentCount = new EventEmitter<any>();

    constructor(private commentService: BlogService) {
        var user: User = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        this.comments = this.blogPost.comments;
        //this.commentService.getPostCommentsByPostId(this.blogPost.id).subscribe(res => {
        //    console.log(res);
        //    this.comments = res;
        //});
            
        var currentUserName = localStorage.getItem('currentUserName');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
    }

    //pushComment(result) {
    //    this.commentText = "";
    //    this.comment = result;
    //    this.comments.push(this.comment);
    //}

    submitComment(blogPostId: string) {

        if (this.comment.commentText.trim() == "")
            return;
        this.comment.blogPostId = blogPostId;
        this.comment.userId = this.blogPost.userId;
        this.commentService.addPostComment(this.blogPost.id, this.comment).subscribe(res => {
            //  this.pushComment(res);
            this.blogPost.comments.push(res);
            this.comment.commentText = '';
        });

        this.sendCommentCount.emit(null);
    }
}