import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApNav } from './app/core/apnav';

@NgModule({
    imports: [BrowserModule],
    declarations: [ApNav],
    bootstrap: [ApNav]
})
export class AppModule { }