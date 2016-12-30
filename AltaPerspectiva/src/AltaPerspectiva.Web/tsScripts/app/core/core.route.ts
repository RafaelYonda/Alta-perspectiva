/// <reference path="../services/resolve.services/auth.resolver.ts" />
// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApNav } from './nav/apnav';
import { ApBannerComponent } from './banner/apbanner.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { QuestionModule } from '../questions/question.module';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent,

        children: [

            { path: '', redirectTo: 'tab/1' },

            { path: 'tab/:id', component: TabPanelComponent},           

        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);