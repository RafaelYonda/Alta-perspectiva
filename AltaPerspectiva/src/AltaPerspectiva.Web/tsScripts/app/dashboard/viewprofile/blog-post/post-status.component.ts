import { Component, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { BlogPost, BlogLike, BlogComment } from '../../../services/models/models.blogpost';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'post-status',
    templateUrl: 'js/app/dashboard/viewprofile/blog-post/post-status.component.html',
    styleUrls: ['js/app/dashboard/viewprofile/blog-post/post-status.component.css'],
    providers: [BlogService]
})
export class PostStatusComponent {
    @Input() blogpost: BlogPost;

    @Output() onQuestionDetailClicked = new EventEmitter<boolean>();
    @Output() onQuestionReportClicked = new EventEmitter<any>();

    commentId: string;
    CommentCount: number;
    like: BlogLike;
    likedUsers: any;
    constructor(private blogService: BlogService) {
        //this.blogpost.blogLike
    }

    ngOnInit() {
        if (this.blogpost) {
            this.commentId = this.blogpost.id;
            this.CommentCount = this.blogpost.blogComments.length;
        }
        //else {
        //    this.commentId = this.answerObj.id;
        //    this.CommentCount = this.answerObj.comments ? this.answerObj.comments.length : 0;
        //}
    }


    submitLike(postId: string) {
        this.like = new BlogLike();
        this.blogService.getPostAlreadyLiked(this.blogpost.id).subscribe(res => {
            if (res == true) return;
            else {
                this.blogService.addPostLike(this.blogpost.id, this.like).subscribe(res => {
                    this.blogpost.blogLike.push(this.like);
                });
            }
        });
    }

    showLikeUserDetails() {
        this.blogService.showLikeUserDetailsByBlogPost(this.blogpost.id).subscribe(res => {
            this.likedUsers = res;
        });
    }
}