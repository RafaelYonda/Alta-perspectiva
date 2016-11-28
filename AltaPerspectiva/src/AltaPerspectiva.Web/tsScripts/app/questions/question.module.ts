
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpModule  } from '@angular/http';

//====question components============
import { questionNav } from './nav/question-nav.component';
import { QuestionHomeComponent } from './question-home.component';
import { QuestionDetailComponent } from './question-details/question-details.component';
import { QuestionBodyComponent } from './question-body/question-body.component';
import { QuestionMenuPanelComponent } from './question-left-menu/question-left-menu.component';
import { SharedModule } from '../shared/shared.module';
//================services=================\
import { QuestionAnswerService } from '../services/question-answer.service';


@NgModule({
    providers: [ QuestionAnswerService],
    imports: [BrowserModule, HttpModule, FormsModule, SharedModule, RouterModule.forRoot([
        {
            path: 'question', component: QuestionHomeComponent,
            children: [
                { path: 'home', component: QuestionBodyComponent },
                { path: 'detail', component: QuestionDetailComponent }]
        }
    ]
    )],
    declarations: [
        //Core Components
        QuestionBodyComponent, QuestionHomeComponent, questionNav, QuestionMenuPanelComponent, QuestionDetailComponent
    ],
    exports: [
        //RouterModule,
        //QuestionHomeComponent
        //Core Components
    ]
})
export class QuestionModule { }