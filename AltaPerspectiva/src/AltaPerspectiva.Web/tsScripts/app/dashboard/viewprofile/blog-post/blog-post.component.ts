﻿import { Component } from '@angular/core';
import { Blog, BlogComment, BlogLike, BlogPost,UserViewModel } from '../../../services/models/models.blogpost';
import {UserInfoDetails} from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/blog-post/blog-post.component.html',
    providers: [ProfileService],
})
export class BlogPostComponent {
    blogId:string;
    blog: Blog;
    blogPost: BlogPost = new BlogPost();
    blogposts: BlogPost[];
    userInfoDetails: UserInfoDetails
    constructor(private _route: ActivatedRoute, private profileService: ProfileService) {
        //this.userInfoDetails.imageUrl
        //this.userInfoDetails.fullName;
        ;
    }
    ngOnInit() {
        //this.blogPost.description
        //this.blogPost.title = "Add Title Post";
        this._route.params.subscribe(params => {
            this.profileService.GetBlogById(params['blogId']).subscribe(res => {
                console.log(res);
                this.blogId = params['blogId'];
                this.blog = res;
                this.profileService.GetBlogPostsByBlogId(this.blogId).subscribe(res => {
                    console.log(res);
                    this.blogposts = res;
                });
               // this.SetBlogPosts(res.id);
            });
        });
    }
    //SetBlogPosts(blogId: string) {
    //    this.profileService.GetBlogPostByBlogId(blogId).subscribe(res => {
    //        console.log(res);
    //        this.blogposts = res;
    //    });
    //}
    //SetUserInfo(userId: string) {
    //    this.profileService.userInfoDetails(userId).subscribe(res => {
    //        console.log(res);
    //        this.userInfoDetails = res;
    //    });
    //}
    saveBlogPost() {
        this.blogPost.blogId = this.blogId;
        console.log(this.blogPost);
        this.profileService.SaveBlogPost(this.blogPost).subscribe(res => {
            console.log(res);
            this.profileService.GetBlogPostsByBlogId(this.blogId).subscribe(res => {
                console.log(res);
                this.blogposts = res;
            });
        });
        
    }
    
        

     
}