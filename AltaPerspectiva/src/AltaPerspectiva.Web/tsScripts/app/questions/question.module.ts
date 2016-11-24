/// <reference path="question-details/question-details.component.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//====question components============
import { questionNav } from './nav/question-nav.component';
import { QuestionHomeComponent } from './question-home.component';
import { QuestionDetailComponent } from './question-details/question-details.component';
import { QuestionPanelComponent } from './question-body/question-body.component';
import { QuestionMenuPanelComponent } from './question-left-menu/question-left-menu.component';
import { SharedModule } from '../shared/shared.module';
//================


@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule, RouterModule.forRoot([
        { path: 'question', component: QuestionHomeComponent }])],    
    declarations: [
        //Core Components
        QuestionPanelComponent, QuestionHomeComponent, questionNav, QuestionMenuPanelComponent, QuestionDetailComponent
    ],
    exports: [
        //RouterModule,
//QuestionHomeComponent
        //Core Components
    ]
})
export class QuestionModule { }