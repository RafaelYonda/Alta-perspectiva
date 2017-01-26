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
import { QuestionFullscreenComponent } from './question-fullscreen/question-fullscreen.component'; 
import { SharedModule } from '../shared/shared.module';
import { CommunicationService } from '../services/communication.service';
//================services=================
import { QuestionAnswerService } from '../services/question-answer.service';
import { QuestionResolver } from '../services/resolve.services/question.resolver';


@NgModule({
    providers: [QuestionAnswerService, QuestionResolver, CommunicationService],
    imports: [BrowserModule, HttpModule, CKEditorModule, InfiniteScrollModule, FormsModule, SharedModule,  RouterModule.forRoot([
        {
            path: 'question', component: QuestionHomeComponent,
            children: [               
                {
                    path: 'home/:categoryId', component: QuestionBodyComponent
                        //resolve: { questionList: QuestionAnswerService}
                },                
                {
                    path: 'home/:categoryId/:topicId/:levelId', component: QuestionBodyComponent
                        //resolve: { questionList: QuestionAnswerService}
                },
                {
                    path: 'detail/:id', component: QuestionDetailComponent
                    ,resolve: { question: QuestionResolver }
                },
                {
                    path: 'questionfullscreen/:id', component: QuestionFullscreenComponent,
                    resolve: { question: QuestionResolver }
                }]
        }
    ]
    )],
    declarations: [
        //Core Components
        QuestionBodyComponent, QuestionHomeComponent, questionNav, QuestionMenuPanelComponent, QuestionDetailComponent, QuestionFullscreenComponent
    ],
    exports: [QuestionMenuPanelComponent
    ]
})
export class QuestionModule {
    ngInit() {

    }
}