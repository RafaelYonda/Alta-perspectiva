/// <reference path="dashboard.component.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        { path: 'dashboard', component: DashBoardComponent }])
    ],
    declarations: [
        DashBoardComponent
    ],
    exports: [
    ]
})
export class DashBoardModule { }