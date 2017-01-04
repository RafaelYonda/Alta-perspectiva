import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HttpModule  } from '@angular/http';


//====core components============
import { HomeComponent } from './home.component';
import { ApNav } from './nav/apnav';
import { ApBannerComponent } from './banner/apbanner.component';
//import { ApSearchComponent } from './search/apSearch.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPanelComponent } from './tabs/tab-panel.component';


import { FormsModule } from '@angular/forms';
//================
import { SharedModule } from '../shared/shared.module';
import { QuestionModule } from '../questions/question.module';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';
import { routing } from './core.route';

//New component added to module
import { TopFiveQuestionLeftMenuComponent } from './left-menu/topfive-question-left-menu.component';

@NgModule({
    imports: [BrowserModule, HttpModule, SharedModule, QuestionModule, FormsModule, routing
    ],
    providers: [
        { provide: 'Window', useValue: window }
    ],
    declarations: [
        //Core Components
        HomeComponent,
        ApNav,
        ApBannerComponent,
        //ApSearchComponent,
        TabsComponent,
        TabPanelComponent,        

        //other app component
        //QuestionHomeComponent,
        LearnHome,
        ProjectHome,
        //question left menu
        TopFiveQuestionLeftMenuComponent
    ],
    exports: [
        RouterModule,
        QuestionModule,
        //Core Components
        HomeComponent,
        ApNav,
        ApBannerComponent,
        TabsComponent,
        TabPanelComponent,        

        //other app component
        LearnHome,
        ProjectHome,

        //question left menu
        TopFiveQuestionLeftMenuComponent

    ]
})
export class CoreModule { }