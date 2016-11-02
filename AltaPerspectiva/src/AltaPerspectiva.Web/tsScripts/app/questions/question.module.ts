import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//====core components============

import { QuestionHomeComponent } from './question-home.component';
import { AnswerPanelComponent } from './answer-panel/answer-panel.component';
//================


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        { path: 'question', component: QuestionHomeComponent }])],    
    declarations: [
        //Core Components
        QuestionHomeComponent
    ],
    exports: [
        //RouterModule,
QuestionHomeComponent
        //Core Components
    ]
})
export class QuestionModule { }