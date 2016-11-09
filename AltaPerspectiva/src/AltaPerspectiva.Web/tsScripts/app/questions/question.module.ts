import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//====question components============

import { QuestionSearchComponent } from './search/question-search.component';
import { questionNav } from './nav/question-nav.component';
import { QuestionHomeComponent } from './question-home.component';
import { AnswerPanelComponent } from './answer-panel/answer-panel.component';
import { QuestionMenuPanelComponent } from './question-menu-panel/question-menu-panel.component';

//================


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        { path: 'question', component: QuestionHomeComponent }])],    
    declarations: [
        //Core Components
        AnswerPanelComponent, QuestionHomeComponent, questionNav, QuestionSearchComponent, QuestionMenuPanelComponent
    ],
    exports: [
        //RouterModule,
QuestionHomeComponent
        //Core Components
    ]
})
export class QuestionModule { }