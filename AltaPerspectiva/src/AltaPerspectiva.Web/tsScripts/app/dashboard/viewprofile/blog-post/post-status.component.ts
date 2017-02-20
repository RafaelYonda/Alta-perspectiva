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
    @Input() blogPost: BlogPost;

    commentId: string;
    CommentCount: number;
    like: BlogLike;
    likedUsers: any;
    constructor(private blogService: BlogService) {
    }

    ngOnInit() {
        console.log(this.blogPost.likes.length);
        //if (this.blogPost.comments) {
        //    this.CommentCount = this.blogPost.comments.length;
        //}     
        this.blogService.IncreaseBlogPostViewCount(this.blogPost).subscribe(res => {
            if (this.blogPost.blogViewCount && res==true) {
                this.blogPost.blogViewCount = this.blogPost.blogViewCount + 1;
            }
        })
    }

    submitLike(postId: string) {
        this.like = new BlogLike();
        this.like.userId = this.blogPost.userId;
        this.like.blogPostId = this.blogPost.id;
        this.blogService.getPostAlreadyLiked(this.blogPost.id).subscribe(res => {
            if (res == true) return;

            this.blogService.addPostLike(this.blogPost.id, this.like).subscribe(res => {
                this.blogPost.likes.push(this.like);
            });

        });
    }

    showLikeUserDetails() {
        this.blogService.showLikeUserDetailsByBlogPost(this.blogPost.id).subscribe(res => {
            this.likedUsers = res;
        });
    }
}