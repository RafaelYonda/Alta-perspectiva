import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './app/core/core.module'
import { AppComponent } from './app/app.component';
import { appRouting } from './app.route';

@NgModule({
    imports: [BrowserModule, CoreModule, appRouting],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }