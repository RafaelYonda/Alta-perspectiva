var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { ProfileService } from '../../../services/profile.service';
import { LogInObj } from '../../../services/models';
import { BlogPost, BlogComment } from '../../../services/models/models.blogpost';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
var BlogpostCommentComponent = (function () {
    function BlogpostCommentComponent(commentService, componentFactoryResolver, profileService) {
        this.commentService = commentService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.profileService = profileService;
        this.comment = new BlogComment();
        this.sendCommentCount = new EventEmitter();
    }
    BlogpostCommentComponent.prototype.ngOnInit = function () {
        this.comments = this.blogPost.comments;
        var currentUserName = localStorage.getItem('auth_token');
        this._logObj = localStorage.getItem('currentUserObject');
        if (!this._logObj)
            this._logObj = new LogInObj();
        if (currentUserName != null) {
            this.imageLink = localStorage.getItem('currentUserImage');
        }
        else {
            this.imageLink = '../../profile/avatar.png';
        }
    };
    BlogpostCommentComponent.prototype.submitComment = function (blogPostId) {
        var _this = this;
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }
        if (!this.comment.commentText || this.comment.commentText.trim() == "")
            return;
        this.comment.blogPostId = blogPostId;
        this.comment.userId = this.blogPost.userId;
        this.commentService.addPostComment(this.blogPost.id, this.comment).subscribe(function (res) {
            _this.blogPost.comments.push(res);
            _this.comment.commentText = '';
        });
        this.sendCommentCount.emit(null);
    };
    BlogpostCommentComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    return BlogpostCommentComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", BlogPost)
], BlogpostCommentComponent.prototype, "blogPost", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], BlogpostCommentComponent.prototype, "sendCommentCount", void 0);
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], BlogpostCommentComponent.prototype, "logginAnchor", void 0);
BlogpostCommentComponent = __decorate([
    Component({
        selector: 'blogpost-comment',
        templateUrl: 'post-comment.component.html',
        styleUrls: ['post-comment.component.css'],
        providers: [BlogService]
    }),
    __metadata("design:paramtypes", [BlogService, ComponentFactoryResolver, ProfileService])
], BlogpostCommentComponent);
export { BlogpostCommentComponent };
