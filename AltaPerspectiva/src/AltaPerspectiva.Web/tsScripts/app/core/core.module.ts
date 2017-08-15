import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {HttpModule  } from '@angular/http';
import { CommunicationService } from '../services/communication.service';
import { WindowRefService } from '../services/window-ref.service';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
//====core components============
import { HomeComponent } from './home.component';
import { ApBannerComponent } from './banner/apbanner.component';
//import { ApSearchComponent } from './search/apSearch.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { FormsModule } from '@angular/forms';
//================
import { SharedModule } from '../shared/shared.module';
import { QuestionModule } from '../questions/question.module';
import { routing } from './core.route';
import {PopoverModule} from "ngx-popover";

@NgModule({
    imports: [BrowserModule, HttpModule, SharedModule, QuestionModule, FormsModule, routing, PopoverModule, InfiniteScrollModule
    ],
    providers: [
       CommunicationService, WindowRefService
    ],
    declarations: [
        //Core Components
        HomeComponent,
        ApBannerComponent,
        //ApSearchComponent,
        TabsComponent,
        TabPanelComponent,        
        //other app component
        //QuestionHomeComponent,
        //question left menu

       //category
       // QuestionMenuPanelComponent
        
    ],
    exports: [
        RouterModule,
        QuestionModule,
        //Core Components
        HomeComponent,
        ApBannerComponent,
        TabsComponent,
        TabPanelComponent,        
        //other app component
        //question left menu
        //category
      //  QuestionMenuPanelComponent
        


    ],
})
export class CoreModule { }