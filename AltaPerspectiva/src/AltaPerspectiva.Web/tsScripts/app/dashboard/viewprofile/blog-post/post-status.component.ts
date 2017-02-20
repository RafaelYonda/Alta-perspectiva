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
        if (this.blogPost.blogComments) {            
            this.CommentCount = this.blogPost.blogComments.length;
        }       
    }

    submitLike(postId: string) {
        this.like = new BlogLike();
        this.blogService.getPostAlreadyLiked(this.blogPost.id).subscribe(res => {
            if (res == true) return;
            else {
                this.blogService.addPostLike(this.blogPost.id, this.like).subscribe(res => {
                    this.blogPost.blogLike.push(this.like);
                });
            }
        });
    }

    showLikeUserDetails() {
        this.blogService.showLikeUserDetailsByBlogPost(this.blogPost.id).subscribe(res => {
            this.likedUsers = res;
        });
    }
}