import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//====core components============
import { HomeComponent } from './home.component';
import { ApNav } from './nav/apnav';
import { ApBannerComponent } from './banner/apbanner.component';
import { ApSearchComponent } from './search/apSearch.component';
import { TabsComponent } from './tabs/tabs.component';
//================

import { QuestionHome } from '../questions/questionhome';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';

@NgModule({
    imports: [BrowserModule, 
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'question', component: QuestionHome },
            { path: 'learn', component: LearnHome },
            { path: 'project', component: ProjectHome },
        ])
    ],
    declarations: [HomeComponent, ApNav, ApBannerComponent, ApSearchComponent, TabsComponent,     //Core Components
        QuestionHome, LearnHome, ProjectHome,],
    exports: [RouterModule,
        HomeComponent, ApNav, ApBannerComponent, ApSearchComponent, TabsComponent,    //Core Components
        QuestionHome, LearnHome, ProjectHome ]
})
export class CoreModule { }