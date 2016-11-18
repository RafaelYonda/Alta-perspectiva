/// <reference path="question-panel/question-panel.component.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//====question components============
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { questionNav } from './nav/question-nav.component';
import { QuestionHomeComponent } from './question-home.component';
import { QuestionPanelComponent } from './question-panel/question-panel.component';
import { QuestionMenuPanelComponent } from './question-menu-panel/question-menu-panel.component';
import { SharedModule } from '../shared/shared.module';
//================


@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule, RouterModule.forRoot([
        { path: 'question', component: QuestionHomeComponent }])],    
    declarations: [
        //Core Components
        QuestionPanelComponent, QuestionHomeComponent, questionNav,QuestionMenuPanelComponent, AutocompleteComponent
    ],
    exports: [
        //RouterModule,
QuestionHomeComponent
        //Core Components
    ]
})
export class QuestionModule { }