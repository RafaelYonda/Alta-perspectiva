import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApNav } from './app/core/apnav';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ApNav],
    bootstrap: [AppComponent, ApNav]
})
export class AppModule { }