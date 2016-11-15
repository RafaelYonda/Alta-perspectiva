import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//====question components============
import { QuestionSearchComponent } from './search/question-search.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { questionNav } from './nav/question-nav.component';
import { QuestionHomeComponent } from './question-home.component';
import { AnswerPanelComponent } from './answer-panel/answer-panel.component';
import { QuestionMenuPanelComponent } from './question-menu-panel/question-menu-panel.component';
//================


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot([
        { path: 'question', component: QuestionHomeComponent }])],    
    declarations: [
        //Core Components
        AnswerPanelComponent, QuestionHomeComponent, questionNav, QuestionSearchComponent, QuestionMenuPanelComponent, AutocompleteComponent
    ],
    exports: [
        //RouterModule,
QuestionHomeComponent
        //Core Components
    ]
})
export class QuestionModule { }