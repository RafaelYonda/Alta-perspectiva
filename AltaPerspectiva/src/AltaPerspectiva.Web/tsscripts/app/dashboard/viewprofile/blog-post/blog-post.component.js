var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { BlogPost } from '../../../services/models/models.blogpost';
import { User } from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
import { BlogService } from '../../../services/blog.service';
import { BlogpostDetailComponent } from './blogpost-detail.component';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
var BlogPostComponent = (function () {
    function BlogPostComponent(_route, profileService, componentFactoryResolver, blogService, _authService) {
        this._route = _route;
        this.profileService = profileService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.blogService = blogService;
        this._authService = _authService;
        this.isOwner = false;
        this.blogPost = new BlogPost();
        var user = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    BlogPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        var currentUserName = localStorage.getItem('auth_token');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
        this.isEditDescription = false;
        this.isEditTitle = false;
        this._route.params.subscribe(function (params) {
            _this.blogService.getBlogById(params['blogId']).subscribe(function (blog) {
                var currentUser = localStorage.getItem('auth_token');
                _this._authService.getLoggedinObj().subscribe(function (res) {
                    if (res && currentUser != "null") {
                        if (res.userId == blog.userId)
                            _this.isOwner = true;
                    }
                });
            });
            _this.profileService.GetBlogById(params['blogId']).subscribe(function (res) {
                console.log(res);
                _this.blogId = params['blogId'];
                _this.blog = res;
                _this.profileService.GetBlogPostsByBlogId(_this.blogId).subscribe(function (res) {
                    _this.blogposts = res;
                    console.log(_this.blogposts);
                });
            });
        });
    };
    BlogPostComponent.prototype.updateDescription = function () {
        var _this = this;
        this.profileService.UpdateBlog(this.blog).subscribe(function (res) {
            _this.isEditDescription = false;
        });
    };
    BlogPostComponent.prototype.updateTitle = function () {
        var _this = this;
        if (this.blog.title.trim() == "")
            return;
        this.profileService.UpdateBlog(this.blog).subscribe(function (res) {
            _this.isEditTitle = false;
        });
    };
    BlogPostComponent.prototype.saveBlogPost = function () {
        var _this = this;
        if ((this.blogPost.description.trim() == "") || (this.blogPost.title.trim() == ""))
            return;
        this.blogPost.blogId = this.blogId;
        this.profileService.SaveBlogPost(this.blogPost).subscribe(function (res) {
            console.log(res);
            _this.profileService.GetBlogPostsByBlogId(_this.blogId).subscribe(function (res) {
                console.log(res);
                _this.blogposts = res;
            });
        });
        this.blogPost = new BlogPost();
    };
    BlogPostComponent.prototype.openPostDetailDialog = function (post) {
        this.blogPostDetailDialogAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(BlogpostDetailComponent);
        var dialogComponentRef = this.blogPostDetailDialogAnchor.createComponent(dialogComponentFactory);
        console.log(post);
        dialogComponentRef.instance.post = post;
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    BlogPostComponent.prototype.hideMenu = function () {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    };
    return BlogPostComponent;
}());
__decorate([
    ViewChild('blogPostDetail', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], BlogPostComponent.prototype, "blogPostDetailDialogAnchor", void 0);
BlogPostComponent = __decorate([
    Component({
        templateUrl: 'blog-post.component.html',
        providers: [ProfileService, BlogService, AuthenticationService],
    }),
    __metadata("design:paramtypes", [ActivatedRoute, ProfileService, ComponentFactoryResolver, BlogService, AuthenticationService])
], BlogPostComponent);
export { BlogPostComponent };
