import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { NavDashboard } from './navdashboard/navdashboard.component';
import { DashTab } from './dashtab/dashtab.component';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        { path: 'dashboard', component: DashBoardComponent }])
    ],
    declarations: [
        DashBoardComponent, NavDashboard, DashTab
    ],
    exports: [
    ]
})
export class DashBoardModule { }