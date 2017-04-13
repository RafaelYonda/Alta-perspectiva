var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { BlogPost, BlogLike } from '../../../services/models/models.blogpost';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
var PostStatusComponent = (function () {
    function PostStatusComponent(blogService, componentFactoryResolver) {
        this.blogService = blogService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    PostStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogPost.shareUrl = encodeURI("http://altap.azurewebsites.net/dashboard/blog-post/" + this.blogPost.id);
        if (this.blogPost.description) {
            this.blogText = this.blogPost.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0, 200);
        }
        this.blogService.IncreaseBlogPostViewCount(this.blogPost).subscribe(function (res) {
            if (_this.blogPost.blogViewCount && res == true) {
                _this.blogPost.blogViewCount = _this.blogPost.blogViewCount + 1;
            }
        });
    };
    PostStatusComponent.prototype.submitLike = function (postId) {
        var _this = this;
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        this.like = new BlogLike();
        this.like.userId = this.blogPost.userId;
        this.like.blogPostId = this.blogPost.id;
        this.blogService.getPostAlreadyLiked(this.blogPost.id).subscribe(function (res) {
            if (res == true)
                return;
            _this.blogService.addPostLike(_this.blogPost.id, _this.like).subscribe(function (res) {
                _this.blogPost.likes.push(_this.like);
            });
        });
    };
    PostStatusComponent.prototype.showLikeUserDetails = function () {
        var _this = this;
        this.blogService.showLikeUserDetailsByBlogPost(this.blogPost.id).subscribe(function (res) {
            _this.likedUsers = res;
        });
    };
    PostStatusComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    return PostStatusComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", BlogPost)
], PostStatusComponent.prototype, "blogPost", void 0);
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], PostStatusComponent.prototype, "logginAnchor", void 0);
PostStatusComponent = __decorate([
    Component({
        selector: 'post-status',
        templateUrl: 'post-status.component.html',
        styleUrls: ['post-status.component.css'],
        providers: [BlogService]
    }),
    __metadata("design:paramtypes", [BlogService, ComponentFactoryResolver])
], PostStatusComponent);
export { PostStatusComponent };
