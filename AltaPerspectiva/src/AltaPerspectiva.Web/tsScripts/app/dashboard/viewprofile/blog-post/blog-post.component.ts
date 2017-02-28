/// <reference path="../../../services/blog.service.ts" />
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Blog, BlogComment, BlogLike, BlogPost,UserViewModel } from '../../../services/models/models.blogpost';
import {UserInfoDetails} from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
import { BlogService } from '../../../services/blog.service';
import { BlogpostDetailComponent } from './blogpost-detail.component';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/blog-post/blog-post.component.html',
    providers: [ProfileService, BlogService, AuthenticationService],
})
export class BlogPostComponent {
    isOwner = false;
    blogId:string;
    blog: Blog;
    blogPost: BlogPost= new BlogPost();
    blogposts: BlogPost[];
    userInfoDetails: UserInfoDetails
    constructor(private _route: ActivatedRoute, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver, private blogService: BlogService, private _authService: AuthenticationService) {
    }
    ngOnInit() {
        //this.blogPost.description
        //this.blogPost.title = "Add Title Post";
        
        
        this.isEditDescription = false;
        this.isEditTitle = false;
        this._route.params.subscribe(params => {
            //=============Check Owner Blog==========
            this.blogService.getBlogById(params['blogId']).subscribe(blog => {
                var currentUser = localStorage.getItem('auth_token');
                this._authService.getLoggedinObj().subscribe(res => {
                    if (res && currentUser != "null") {

                        if (res.userId == blog.userId)
                            this.isOwner = true;
                    }
                });
            });
            ///========================Check Owner Blog===

            this.profileService.GetBlogById(params['blogId']).subscribe(res => {
                console.log(res);
                this.blogId = params['blogId'];
                this.blog = res;
                this.profileService.GetBlogPostsByBlogId(this.blogId).subscribe(res => {
                    this.blogposts = res;
                    console.log(this.blogposts);
                });
               // this.SetBlogPosts(res.id);
            });
        });
    }
    isEditDescription: boolean;
    isEditTitle: boolean;
    updateDescription() {

        this.profileService.UpdateBlog(this.blog).subscribe(res => {
            this.isEditDescription = false;
        });
    }
    updateTitle() {
        if (this.blog.title.trim()== "")
            return;
        this.profileService.UpdateBlog(this.blog).subscribe(res => {
            this.isEditTitle = false;
        });
    }
    
    saveBlogPost() {
        if ((this.blogPost.description.trim() == "") || (this.blogPost.title.trim() == ""))
            return;
        this.blogPost.blogId = this.blogId;        
        this.profileService.SaveBlogPost(this.blogPost).subscribe(res => {
            console.log(res);
            this.profileService.GetBlogPostsByBlogId(this.blogId).subscribe(res => {
                console.log(res);
                this.blogposts = res;
            });
        });
        // clear form
        this.blogPost = new BlogPost();
    }
    @ViewChild('blogPostDetail', { read: ViewContainerRef }) blogPostDetailDialogAnchor: ViewContainerRef;
    openPostDetailDialog(post: BlogPost) {
        this.blogPostDetailDialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(BlogpostDetailComponent);
        let dialogComponentRef = this.blogPostDetailDialogAnchor.createComponent(dialogComponentFactory);
        console.log(post);
        dialogComponentRef.instance.post = post;

        //dialogComponentRef.instance.education.credentialId = this.credential.id;
        dialogComponentRef.instance.close.subscribe(() => {
            //this.loadData();
            dialogComponentRef.destroy();
            //this.refreshData();
        });
    }
}