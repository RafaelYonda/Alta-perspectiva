import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './app/core/core.module'
import { AppComponent } from './app/app.component';

@NgModule({
    imports: [BrowserModule, CoreModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }