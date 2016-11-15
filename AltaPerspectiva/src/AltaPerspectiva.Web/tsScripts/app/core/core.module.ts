﻿/// <reference path="core.route.ts" />
import { NgModule } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
//================

import { QuestionModule } from '../questions/question.module';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';
import { routing } from './core.route';

@NgModule({
    imports: [BrowserModule, QuestionModule,FormsModule,routing
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