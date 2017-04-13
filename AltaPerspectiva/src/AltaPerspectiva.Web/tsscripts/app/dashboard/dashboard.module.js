var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DashBoardComponent } from './dashboard.component';
import { NavDashboard } from './navdashboard/navdashboard.component';
import { ViewProfileComponent } from './viewprofile/viewprofile.component';
import { ProfileInfoComponent } from './viewprofile/profile-info/profile-info.component';
import { ProfileStatComponent } from './viewprofile/profile-stat/profile-stat.component';
import { ProfileCategoryComponent } from './viewprofile/profile-category/profile-category.component';
import { DirectQuestionComponent } from './viewprofile/direct-question/direct-question.component';
import { AddCredentialComponent } from './viewprofile/edit-profile/add-credential.component';
import { AddEducationComponent } from './viewprofile/edit-profile/add-education.component';
import { AddEmploymentComponent } from './viewprofile/edit-profile/add-employment.component';
import { AddOtherExperienceComponent } from './viewprofile/edit-profile/add-otherexperience.component';
import { AddPlaceComponent } from './viewprofile/edit-profile/add-place.component';
import { ItemDialogComponent } from './viewprofile/virtual-store/item-dialog.component';
import { UserAnswerComponent } from './viewprofile/user-answer/user-answer.component';
import { UserQuestionComponent } from './viewprofile/user-question/user-question.component';
import { FollowingComponent } from './viewprofile/following/following.component';
import { FollowerComponent } from './viewprofile/follower/follower.component';
import { BookmarkComponent } from './viewprofile/bookmark/bookmark.component';
import { PostedQuestionComponent } from './viewprofile/posted-question/posted-question.component';
import { BlogCreateComponent } from './viewprofile/blog-create/blog-create.component';
import { BlogPostComponent } from './viewprofile/blog-post/blog-post.component';
import { VirtualStoreComponent } from './viewprofile/virtual-store/virtual-store.component';
import { DraftAnswerComponent } from './viewprofile/draft-answer/draft-answer.component';
import { PostStatusComponent } from './viewprofile/blog-post/post-status.component';
import { BlogpostCommentComponent } from './viewprofile/blog-post/post-comment.component';
import { BlogpostDetailComponent } from './viewprofile/blog-post/blogpost-detail.component';
import { ProfileResolver } from '../services/resolve.services/profile.resolver';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { QuillModule } from 'ngx-quill';
import { PopoverModule } from "ngx-popover";
import { ImageCropperModule } from 'ng2-img-cropper';
import { PreviewImageComponent } from './viewprofile/edit-profile/preview-image.component';
import { TwitterComponent } from './viewprofile/edit-profile/twitter.component';
import { FacebookComponent } from './viewprofile/edit-profile/facebook.component';
import { LinkedinComponent } from './viewprofile/edit-profile/linkedin.component';
var DashBoardroutes = [
    {
        path: 'dashboard', component: DashBoardComponent,
        children: [
            { path: '', redirectTo: 'viewprofile/-1' },
            {
                path: 'viewprofile/:userId', component: ViewProfileComponent,
                children: [
                    { path: '', redirectTo: 'user-question' },
                    { path: 'user-question', component: UserQuestionComponent },
                    { path: 'user-answer', component: UserAnswerComponent },
                    { path: 'follower', component: FollowerComponent },
                    { path: 'following', component: FollowingComponent },
                    { path: 'bookmark', component: BookmarkComponent },
                    { path: 'posted-question', component: PostedQuestionComponent },
                    { path: 'blog-create', component: BlogCreateComponent },
                    { path: 'direct-question', component: DirectQuestionComponent },
                    { path: 'virtual-store', component: VirtualStoreComponent },
                    { path: 'draft-answer', component: DraftAnswerComponent },
                ]
            },
            { path: 'blog-post/:blogId', component: BlogPostComponent }
        ]
    }
];
export var dashboardRouting = RouterModule.forRoot(DashBoardroutes);
var DashBoardModule = (function () {
    function DashBoardModule() {
    }
    return DashBoardModule;
}());
DashBoardModule = __decorate([
    NgModule({
        providers: [ProfileResolver],
        imports: [BrowserModule, FormsModule, dashboardRouting, ToastModule, QuillModule, SharedModule, PopoverModule, ImageCropperModule
        ],
        declarations: [
            DashBoardComponent, NavDashboard,
            ViewProfileComponent,
            ProfileInfoComponent, ProfileStatComponent, ProfileCategoryComponent, UserAnswerComponent, UserQuestionComponent, DirectQuestionComponent, FollowingComponent, FollowerComponent, BookmarkComponent, BlogCreateComponent, BlogPostComponent, VirtualStoreComponent, PostStatusComponent, BlogpostCommentComponent, BlogpostDetailComponent, PostedQuestionComponent, DraftAnswerComponent,
            AddCredentialComponent, AddEmploymentComponent, AddEducationComponent, AddOtherExperienceComponent, AddPlaceComponent, ItemDialogComponent, PreviewImageComponent, TwitterComponent, FacebookComponent, LinkedinComponent
        ],
        exports: [DashBoardComponent],
        entryComponents: [AddCredentialComponent, AddEmploymentComponent, AddEducationComponent, AddOtherExperienceComponent, AddPlaceComponent, BlogpostDetailComponent, ItemDialogComponent, PreviewImageComponent, TwitterComponent, FacebookComponent, LinkedinComponent]
    })
], DashBoardModule);
export { DashBoardModule };
