import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { EditProfileComponent } from './eidtprofile/editprofile.component';
import { ViewProfileComponent } from './viewprofile/viewprofile.component';
import { NavDashboard } from './navdashboard/navdashboard.component';
import { DashTab } from './dashtab/dashtab.component';

import { ContactFormComponent } from './eidtprofile/profilesforms/contact.component';
import { BiographyFormComponent } from './eidtprofile/profilesforms/biography.component';
import { EducationFormComponent } from './eidtprofile/profilesforms/education.component';
import { InsightFormComponent } from './eidtprofile/profilesforms/insight.component';
import { ExperienceFormComponent } from './eidtprofile/profilesforms/experience.component';
import { PracticeFormComponent } from './eidtprofile/profilesforms/practice.component';
import { SkillFormComponent } from './eidtprofile/profilesforms/skills.component';

import { ProfileService } from '../services/profile.service';

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
            { path: 'viewprofile', component: ViewProfileComponent }
        ]
    }
];
export const dashboardRouting: ModuleWithProviders = RouterModule.forRoot(DashBoardroutes);


@NgModule({
    imports: [BrowserModule, FormsModule, dashboardRouting
        //RouterModule.forRoot([
        //{ path: 'dashboard', component: DashBoardComponent }])
    ],
    declarations: [
        DashBoardComponent,
        DashTab, 
        EditProfileComponent,
                ContactFormComponent, BiographyFormComponent, EducationFormComponent, ExperienceFormComponent, InsightFormComponent,  NavDashboard, PracticeFormComponent, SkillFormComponent,
        ViewProfileComponent         
    ],
    exports: [DashBoardComponent],
})
export class DashBoardModule { }

