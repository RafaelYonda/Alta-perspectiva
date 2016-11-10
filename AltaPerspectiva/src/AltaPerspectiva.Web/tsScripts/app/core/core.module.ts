﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

//====core components============
import { HomeComponent } from './home.component';
import { ApNav } from './nav/apnav';
import { ApBannerComponent } from './banner/apbanner.component';
import { ApSearchComponent } from './search/apSearch.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabSubpanelComponent } from './tabs/tab-subpanel.component';
//================

import { QuestionModule } from '../questions/question.module';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';

@NgModule({
    imports: [BrowserModule, QuestionModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch:'full' },
            {
                path: 'home', component: HomeComponent,
                children: [
                    { path: '', redirectTo: 'tab'},
                    {
                        path: 'tab', component: TabPanelComponent,
                        children: [
                            { path: '', redirectTo: 'tab' },
                            { path: ':id', component: TabSubpanelComponent },
                        ]
                    }
                ]
            },
            { path: 'question', loadChildren: '../questions/question.module#QuestionModule' },
            { path: 'learn', component: LearnHome },
            { path: 'project', component: ProjectHome },
        ])
    ],
    providers: [
        { provide: 'Window', useValue: window }
    ],
    declarations: [
        //Core Components
        HomeComponent,
        ApNav,
        ApBannerComponent,
        ApSearchComponent,
        TabsComponent,
        TabPanelComponent,
        TabSubpanelComponent,  

        //other app component
        //QuestionHomeComponent,
        LearnHome,
        ProjectHome,
    ],
    exports: [
        RouterModule,
QuestionModule,
        //Core Components
        HomeComponent,
        ApNav,
        ApBannerComponent,
        ApSearchComponent,
        TabsComponent,
        TabPanelComponent,
        TabSubpanelComponent, 

        //other app component
        //QuestionHomeComponent,
        LearnHome,
        ProjectHome
    ]
})
export class CoreModule { }