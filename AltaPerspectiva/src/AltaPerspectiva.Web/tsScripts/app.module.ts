/// <reference path="app/dashboard/dashboard.module.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './app/core/core.module'
import { AppComponent } from './app/app.component';
import { appRouting } from './app.route';
import { DashBoardModule } from './app/dashboard/dashboard.module';



@NgModule({
    imports: [BrowserModule, CoreModule, DashBoardModule, appRouting],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }