import { Component, Input, ElementRef, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { BlogPost, BlogLike, BlogComment } from '../../../services/models/models.blogpost';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SITE_URL } from '../../../../globals';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
@Component({
    selector: 'post-status',
    templateUrl: 'post-status.component.html',
    styleUrls: ['post-status.component.css'],
    providers: [BlogService]
})
export class PostStatusComponent {
    @Input() blogPost: BlogPost;

    commentId: string;
    CommentCount: number;
    like: BlogLike;
    likedUsers: any;
    blogText: string;

    constructor(private blogService: BlogService, private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {

        this.blogPost.shareUrl = encodeURI(SITE_URL+"/dashboard/blog-post/" + this.blogPost.blogId);
        if (this.blogPost.description)
        {
            this.blogText = this.blogPost.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,200);
        }       
        this.blogService.IncreaseBlogPostViewCount(this.blogPost).subscribe(res => {
            if (this.blogPost.blogViewCount && res==true) {
                this.blogPost.blogViewCount = this.blogPost.blogViewCount + 1;
            }
        })
       
    }

    submitLike(postId: string) {
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
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
    @ViewChild('logginAnchor', { read: ViewContainerRef }) logginAnchor: ViewContainerRef;
    ShowNotLoggedIn() {
        this.logginAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        let dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
}