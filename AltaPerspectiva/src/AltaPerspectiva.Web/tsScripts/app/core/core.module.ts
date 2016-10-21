import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//====core components============
import { HomeComponent } from './home.component';
import { ApNav } from './nav/apnav';
import { ApBannerComponent } from './banner/apbanner.component';
import { ApSearchComponent } from './search/apSearch.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPanelComponent } from './tabs/tab-panel.component'
//================

import { QuestionHome } from '../questions/questionhome';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';

@NgModule({
    imports: [BrowserModule, 
        RouterModule.forRoot([
            {
                path: '', component: HomeComponent,
                children: [
                    { path: '', redirectTo: '/category/1', pathMatch: 'full' },
                    { path: 'category/1', component: TabPanelComponent },
                    { path: 'category/:id', component: TabPanelComponent},
                ]
            },
            { path: 'question', component: QuestionHome },
            { path: 'learn', component: LearnHome },
            { path: 'project', component: ProjectHome },
        ])
    ],
    declarations: [HomeComponent, ApNav, ApBannerComponent, ApSearchComponent, TabsComponent, TabPanelComponent,     //Core Components
        QuestionHome, LearnHome, ProjectHome,],
    exports: [RouterModule,
        HomeComponent, ApNav, ApBannerComponent, ApSearchComponent, TabsComponent, TabPanelComponent,   //Core Components
        QuestionHome, LearnHome, ProjectHome ]
})
export class CoreModule { }