import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DashBoardComponent } from './dashboard.component';
import { NavDashboard } from './navdashboard/navdashboard.component';

import { ViewProfileComponent } from './viewprofile/viewprofile.component';
import { ProfileInfoComponent } from './viewprofile/profile-info/profile-info.component';
import { ProfileStatComponent } from './viewprofile/profile-stat/profile-stat.component'; 
import { ProfileCategoryComponent } from './viewprofile/profile-category/profile-category.component';
import { DirectQuestionComponent } from './viewprofile/direct-question/direct-question.component';
//Edit Profile Forms +Modal
import { AddCredentialComponent } from './viewprofile/edit-profile/add-credential.component';
import { AddEducationComponent } from './viewprofile/edit-profile/add-education.component';
import { AddEmploymentComponent } from './viewprofile/edit-profile/add-employment.component';//Done 

import { AddOtherExperienceComponent } from './viewprofile/edit-profile/add-otherexperience.component';
import { AddPlaceComponent } from './viewprofile/edit-profile/add-place.component';

import { UserAnswerComponent } from './viewprofile/user-answer/user-answer.component';
import { UserQuestionComponent } from './viewprofile/user-question/user-question.component';
import { FollowingComponent } from './viewprofile/following/following.component';
import { FollowerComponent } from './viewprofile/follower/follower.component';
import { BookmarkComponent } from './viewprofile/bookmark/bookmark.component';
import { BlogCreateComponent } from './viewprofile/blog-create/blog-create.component';
import { BlogPostComponent } from './viewprofile/blog-post/blog-post.component'; 
import { PostStatusComponent } from './viewprofile/blog-post/post-status.component'; 
import { PostedQuestionComponent } from './viewprofile/posted-question/posted-question.component';

import { ProfileService } from '../services/profile.service';
import { ProfileResolver } from '../services/resolve.services/profile.resolver';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { QuillModule } from 'ngx-quill';
import {PopoverModule} from "ngx-popover";

const DashBoardroutes: Routes = [
    {
        path: 'dashboard', component: DashBoardComponent,
        children: [
            { path: '', redirectTo: 'viewprofile/-1' },
            
            {
                path: 'viewprofile/:userId', component: ViewProfileComponent,
                children: [
                    { path: '', redirectTo: 'user-question' },
                    { path: 'user-question', component: UserQuestionComponent},
                    { path: 'user-answer', component: UserAnswerComponent},
                    { path: 'follower', component: FollowerComponent },
                    { path: 'following', component: FollowingComponent },
                    { path: 'bookmark', component: BookmarkComponent },
                    { path: 'blog-create', component: BlogCreateComponent },
                    { path: 'direct-question', component: DirectQuestionComponent }, 
                    //{ path: 'blog-post', component: PostedQuestionComponent }
                ]
            }
            ,{ path: 'blog-post/:blogId', component: BlogPostComponent }
        ]
    }
];
export const dashboardRouting: ModuleWithProviders = RouterModule.forRoot(DashBoardroutes);
@NgModule({
    providers: [ProfileResolver],
    imports: [BrowserModule, FormsModule, dashboardRouting, ToastModule, QuillModule, SharedModule, PopoverModule
    ],
    declarations: [
        DashBoardComponent, NavDashboard,
        ViewProfileComponent,
        ProfileInfoComponent, ProfileStatComponent, ProfileCategoryComponent, UserAnswerComponent, UserQuestionComponent, DirectQuestionComponent, FollowingComponent, FollowerComponent, BookmarkComponent, BlogCreateComponent, BlogPostComponent, PostStatusComponent, PostedQuestionComponent,
        //Edit Profile
        AddCredentialComponent, AddEmploymentComponent, AddEducationComponent, AddOtherExperienceComponent, AddPlaceComponent
    ],
    exports: [DashBoardComponent],
    entryComponents: [AddCredentialComponent, AddEmploymentComponent, AddEducationComponent, AddOtherExperienceComponent, AddPlaceComponent]
})
export class DashBoardModule { }

