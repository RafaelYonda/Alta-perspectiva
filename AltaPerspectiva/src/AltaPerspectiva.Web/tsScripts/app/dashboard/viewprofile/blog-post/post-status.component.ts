import { Component, Input, ElementRef, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { BlogPost, BlogLike, BlogComment } from '../../../services/models/models.blogpost';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SITE_URL } from '../../../../globals';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

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
    shareurl: string;

    constructor(private blogService: BlogService, private componentFactoryResolver: ComponentFactoryResolver, private fb: FacebookService) {
    }

    ngOnInit() {

        this.blogPost.shareUrl = encodeURI(SITE_URL +"/SocialShare/ShareBlog/" + this.blogPost.id);
        if (this.blogPost.description)
        {
            this.blogText = this.blogPost.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,200);
        }       
        this.blogService.IncreaseBlogPostViewCount(this.blogPost).subscribe(res => {
            if (this.blogPost.blogViewCount && res==true) {
                this.blogPost.blogViewCount = this.blogPost.blogViewCount + 1;
            }
        })
        this.shareurl = this.blogPost.shareUrl;
        console.log('Blog post share url = ' + this.shareurl);
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
    socialShare() {
       // console.log("share FB");
        let initParams: InitParams = {
            appId: '510199349333959',
            xfbml: true,
            cookie: true,
            version: 'v2.10'
        };
        var API_URL = '/SocialShare/ShareBlog/' 
        this.fb.init(initParams);
        var urlId =  this.blogPost.id.toString();
        let params: UIParams = {
            //href: SITE_URL + "/question/detail/" + this.questionObj.id,
            href: SITE_URL + API_URL + urlId,
            method: 'share',
            display: 'popup',
            name: this.blogPost.title,
            description: this.blogPost.description
        };
        console.log(params);
        this.fb.ui(params)
            .then((res: UIResponse) => console.log(res))
            .catch((e: any) => console.error(e));
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