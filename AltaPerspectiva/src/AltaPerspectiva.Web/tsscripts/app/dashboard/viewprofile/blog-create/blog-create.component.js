var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Blog } from '../../../services/models/models.blogpost';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { BlogService } from '../../../services/blog.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var BlogCreateComponent = (function () {
    function BlogCreateComponent(_route, profileService, componentFactoryResolver, blogService, _authService, router, toastr, vcr) {
        this._route = _route;
        this.profileService = profileService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.blogService = blogService;
        this._authService = _authService;
        this.router = router;
        this.toastr = toastr;
        this.isOwner = false;
        this.blog = new Blog();
    }
    BlogCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this._route.parent.params.subscribe(function (params) {
            var currentUser = localStorage.getItem('auth_token');
            _this._authService.getLoggedinObj().subscribe(function (res) {
                if (res && currentUser != "null") {
                    if (res.userId == params['userId'])
                        _this.isOwner = true;
                }
            });
            _this.profileService.GetBlogs(params['userId']).subscribe(function (res) {
                console.log(res);
                _this.userId = params['userId'];
                _this.blogs = res;
            });
        });
    };
    BlogCreateComponent.prototype.goToBlogPost = function (blogId) {
        window.open('/dashboard/blog-post/' + blogId, 'blank');
    };
    BlogCreateComponent.prototype.saveBlog = function (form) {
        var _this = this;
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
        this.profileService.SaveBlog(this.blog).subscribe(function (res) {
            console.log(res);
            if (res.result == false) {
                _this.toastr.warning('El blog ya existe', 'Oops! ');
                return;
            }
            _this.profileService.GetBlogs(_this.userId).subscribe(function (blist) {
                _this.blogs = blist;
            });
            form.reset();
            _this.blog = new Blog();
        });
    };
    BlogCreateComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    return BlogCreateComponent;
}());
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], BlogCreateComponent.prototype, "logginAnchor", void 0);
BlogCreateComponent = __decorate([
    Component({
        templateUrl: 'blog-create.component.html',
        providers: [ProfileService, BlogService, AuthenticationService],
    }),
    __metadata("design:paramtypes", [ActivatedRoute, ProfileService, ComponentFactoryResolver, BlogService, AuthenticationService, Router, ToastsManager, ViewContainerRef])
], BlogCreateComponent);
export { BlogCreateComponent };
