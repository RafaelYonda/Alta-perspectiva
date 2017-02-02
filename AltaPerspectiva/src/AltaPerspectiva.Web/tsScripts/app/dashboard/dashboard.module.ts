import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { EditProfileComponent } from './eidtprofile/editprofile.component';
import { NavDashboard } from './navdashboard/navdashboard.component';

import { ContactFormComponent } from './eidtprofile/profilesforms/contact.component';
import { BiographyFormComponent } from './eidtprofile/profilesforms/biography.component';
import { EducationFormComponent } from './eidtprofile/profilesforms/education.component';
import { InsightFormComponent } from './eidtprofile/profilesforms/insight.component';
import { ExperienceFormComponent } from './eidtprofile/profilesforms/experience.component';
import { PracticeFormComponent } from './eidtprofile/profilesforms/practice.component';
import { SkillFormComponent } from './eidtprofile/profilesforms/skills.component';

import { ViewProfileComponent } from './viewprofile/viewprofile.component';
import { ProfileInfoComponent } from './viewprofile/profile-info/profile-info.component';
import { ProfileStatComponent } from './viewprofile/profile-stat/profile-stat.component';


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


const DashBoardroutes: Routes = [
    {
        path: 'dashboard', component: DashBoardComponent,
        children: [
            { path: '', redirectTo: 'viewprofile' },
            {
                path: 'editprofile', component: EditProfileComponent,
                children: [
                    { path: '', redirectTo: 'contact' }, 
                    { path: 'contact', component: ContactFormComponent },
                    { path: 'biography', component: BiographyFormComponent },
                    { path: 'education', component: EducationFormComponent },
                    { path: 'experience', component: ExperienceFormComponent },
                    { path: 'insight', component: InsightFormComponent },
                    { path: 'practice', component: PracticeFormComponent },
                    { path: 'skill', component: SkillFormComponent },

                ]
            },
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
    imports: [BrowserModule, FormsModule, dashboardRouting, ToastModule
    ],
    declarations: [
        DashBoardComponent,
        EditProfileComponent,
                ContactFormComponent, BiographyFormComponent, EducationFormComponent, ExperienceFormComponent, InsightFormComponent,  NavDashboard, PracticeFormComponent, SkillFormComponent,
        ViewProfileComponent,
        ProfileInfoComponent, ProfileStatComponent, UserAnswerComponent, UserQuestionComponent, FollowingComponent, FollowerComponent, BookmarkComponent, BlogCreateComponent, BlogPostComponent
    ],
    exports: [DashBoardComponent],
})
export class DashBoardModule { }

