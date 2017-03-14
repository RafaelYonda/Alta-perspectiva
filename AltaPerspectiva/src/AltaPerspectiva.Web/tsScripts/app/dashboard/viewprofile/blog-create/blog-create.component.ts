import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Blog, BlogComment, BlogLike, BlogPost } from '../../../services/models/models.blogpost';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/blog-create/blog-create.component.html',
    providers: [ProfileService, BlogService, AuthenticationService],
})
export class BlogCreateComponent {
    isOwner = false;
    blog: Blog = new Blog();
    blogs: Blog[];
    userId: string;
    constructor(private _route: ActivatedRoute, private profileService: ProfileService, private componentFactoryResolver: ComponentFactoryResolver, private blogService: BlogService, private _authService: AuthenticationService,private router: Router) {
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        this._route.parent.params.subscribe(params => {
            //=============Check Owner Blog==========
            var currentUser = localStorage.getItem('auth_token');
            this._authService.getLoggedinObj().subscribe(res => {
                if (res && currentUser != "null") {

                    if (res.userId == params['userId'])
                        this.isOwner = true;
                }
            });
            ///========================Check Owner Blog===
            this.profileService.GetBlogs(params['userId']).subscribe(res => {
                console.log(res);
                this.userId = params['userId'];
                this.blogs = res;
            });
        });
    }
    goToBlogPost(blogId: string) {
        this.router.navigateByUrl('/dashboard/blog-post/' + blogId, { skipLocationChange: true });
    }
    saveBlog(form: FormGroup) {
        console.log(form);
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        console.log(this.blog);
        if ((this.blog.title.trim() == "") || (this.blog.url.trim() == ""))
            return;
        this.blog.userId = this.userId;
        this.profileService.SaveBlog(this.blog).subscribe(res => {
            console.log(res);
            // this.blogList.push(res);
            this.profileService.GetBlogs(this.userId).subscribe(blist => {
                this.blogs = blist;
            });
            form.reset();
            this.blog = new Blog();
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