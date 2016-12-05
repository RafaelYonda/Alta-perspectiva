import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpModule  } from '@angular/http';

import { CKEditorModule } from 'ng2-ckeditor';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
//====question components============
import { questionNav } from './nav/question-nav.component';
import { QuestionHomeComponent } from './question-home.component';
import { QuestionDetailComponent } from './question-details/question-details.component';
import { QuestionBodyComponent } from './question-body/question-body.component';
import { QuestionMenuPanelComponent } from './question-left-menu/question-left-menu.component';
import { SharedModule } from '../shared/shared.module';
//================services=================\
import { QuestionAnswerService } from '../services/question-answer.service';
import { QuestionResolver } from '../services/resolve.services/question.resolver';


@NgModule({
    providers: [QuestionAnswerService, QuestionResolver],
    imports: [BrowserModule, HttpModule, CKEditorModule, InfiniteScrollModule, FormsModule, SharedModule, RouterModule.forRoot([
        {
            path: 'question', component: QuestionHomeComponent,
            children: [               
                {
                    path: 'home/:id', component: QuestionBodyComponent
                        //resolve: { questionList: QuestionAnswerService}
                },
                {
                    path: 'detail/:id', component: QuestionDetailComponent
                    ,resolve: { question: QuestionResolver }
                }]
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