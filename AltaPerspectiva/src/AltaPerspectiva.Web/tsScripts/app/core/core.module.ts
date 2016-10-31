/// <reference path="tabs/tab-subpanel.component.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//====core components============
import { HomeComponent } from './home.component';
import { ApNav } from './nav/apnav';
import { ApBannerComponent } from './banner/apbanner.component';
import { ApSearchComponent } from './search/apSearch.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabSubpanelComponent } from './tabs/tab-subpanel.component';

//================

import { QuestionHome } from '../questions/questionhome';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';

@NgModule({
    imports: [BrowserModule, 
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch:'full' },
            {
                path: 'home', component: HomeComponent,
                children: [
                    { path: '', redirectTo: 'tab', pathMatch: 'full'},
                    {
                        path: 'tab', component: TabPanelComponent,
                        children: [
                            { path: '', redirectTo: '1', pathMatch:'full' },
                            { path: ':id', component: TabSubpanelComponent },
                        ]
                    }
                ]
            },
            { path: 'question', component: QuestionHome },
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
        
        QuestionHome,
        LearnHome,
        ProjectHome,
    ],
    exports: [
        RouterModule,

        //Core Components
        HomeComponent,
        ApNav,
        ApBannerComponent,
        ApSearchComponent,
        TabsComponent,
        TabPanelComponent,
        TabSubpanelComponent, 

        QuestionHome,
        LearnHome,
        ProjectHome
    ]
})
export class CoreModule { }