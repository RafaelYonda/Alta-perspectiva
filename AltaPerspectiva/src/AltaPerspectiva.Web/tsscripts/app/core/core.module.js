var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommunicationService } from '../services/communication.service';
import { WindowRefService } from '../services/window-ref.service';
import { HomeComponent } from './home.component';
import { ApNav } from './nav/apnav';
import { ApBannerComponent } from './banner/apbanner.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { QuestionModule } from '../questions/question.module';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';
import { routing } from './core.route';
import { PopoverModule } from "ngx-popover";
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    NgModule({
        imports: [BrowserModule, HttpModule, SharedModule, QuestionModule, FormsModule, routing, PopoverModule
        ],
        providers: [
            CommunicationService, WindowRefService
        ],
        declarations: [
            HomeComponent,
            ApNav,
            ApBannerComponent,
            TabsComponent,
            TabPanelComponent,
            LearnHome,
            ProjectHome,
        ],
        exports: [
            RouterModule,
            QuestionModule,
            HomeComponent,
            ApNav,
            ApBannerComponent,
            TabsComponent,
            TabPanelComponent,
            LearnHome,
            ProjectHome,
        ],
    })
], CoreModule);
export { CoreModule };
