import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { appRouting } from './app.route';
import { DashBoardModule } from './dashboard/dashboard.module';



@NgModule({
    imports: [BrowserModule, CoreModule, DashBoardModule, appRouting],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }