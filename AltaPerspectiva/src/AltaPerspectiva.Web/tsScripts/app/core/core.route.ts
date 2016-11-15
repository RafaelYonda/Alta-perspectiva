// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApNav } from './nav/apnav';
import { ApBannerComponent } from './banner/apbanner.component';
import { ApSearchComponent } from './search/apSearch.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
import { TabSubpanelComponent } from './tabs/tab-subpanel.component';
import { QuestionModule } from '../questions/question.module';
// Route Configuration
export const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
            children: [
                { path: '', redirectTo: 'tab' },
                {
                    path: 'tab', component: TabPanelComponent,
                    children: [
                        { path: '', redirectTo: 'tab' },
                        { path: ':id', component: TabSubpanelComponent },
                    ]
                }
            ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);