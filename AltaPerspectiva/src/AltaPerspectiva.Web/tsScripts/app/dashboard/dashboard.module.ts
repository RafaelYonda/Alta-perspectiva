/// <reference path="../shared/nav-bar/nav-bar.component.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { DashBoardComponent } from './dashboard.component';
import { NavDashboard } from './navdashboard/navdashboard.component';

import { ViewProfileComponent } from './viewprofile/viewprofile.component';
import { ProfileInfoComponent } from './viewprofile/profile-info/profile-info.component';
import { ProfileStatComponent } from './viewprofile/profile-stat/profile-stat.component';
//Edit Profile Forms 
import { AddCredentialComponent } from './viewprofile/edit-profile/add-credential.component';

import { UserAnswerComponent } from './viewprofile/user-answer/user-answer.component';
import { UserQuestionComponent } from './viewprofile/user-question/user-question.component';
import { FollowingComponent } from './viewprofile/following/following.component';
import { FollowerComponent } from './viewprofile/follower/follower.component';
import { BookmarkComponent } from './viewprofile/bookmark/bookmark.component';
import { BlogCreateComponent } from './viewprofile/blog-create/blog-create.component';
import { BlogPostComponent } from './viewprofile/blog-post/blog-post.component';

import { ProfileService } from '../services/profile.service';
import { ProfileResolver } from '../services/resolve.services/profile.resolver';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { QuillModule } from 'ngx-quill';

const DashBoardroutes: Routes = [
    {
        path: 'dashboard', component: DashBoardComponent,
        children: [
            { path: '', redirectTo: 'viewprofile' },
            
            {
                path: 'viewprofile', component: ViewProfileComponent,
                children: [
                    { path: '', redirectTo: 'user-question' },
                    { path: 'user-question', component: UserQuestionComponent},
                    { path: 'user-answer', component: UserAnswerComponent},
                    { path: 'follower', component: FollowerComponent },
                    { path: 'following', component: FollowingComponent },
                    { path: 'bookmark', component: BookmarkComponent },
                    { path: 'blog-create', component: BlogCreateComponent },
                ]
            },
            { path: 'blog-post', component: BlogPostComponent }
        ]
    }
];
export const dashboardRouting: ModuleWithProviders = RouterModule.forRoot(DashBoardroutes);
@NgModule({
    providers: [ProfileResolver],
    imports: [BrowserModule, FormsModule, dashboardRouting, ToastModule, QuillModule
    ],
    declarations: [
        DashBoardComponent, NavDashboard, NavBarComponent,
        ViewProfileComponent,
        ProfileInfoComponent, ProfileStatComponent, UserAnswerComponent, UserQuestionComponent, FollowingComponent, FollowerComponent, BookmarkComponent, BlogCreateComponent, BlogPostComponent,
        //Edit Profile
        AddCredentialComponent
    ],
    exports: [DashBoardComponent],
    entryComponents: [AddCredentialComponent]
})
export class DashBoardModule { }

