import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//====core components============

import { QuestionHomeComponent } from './question-home.component';

//================

@NgModule({
    imports: [BrowserModule, 
        //RouterModule.forRoot([
        //    { path: '', redirectTo: 'home', pathMatch:'full' },
        //    { path: 'question', component: QuestionHome },
        //    { path: 'learn', component: LearnHome },
        //    { path: 'project', component: ProjectHome },
        //])
    ],
    declarations: [
        //Core Components
    ],
    exports: [
        //RouterModule,

        //Core Components
    ]
})
export class CoreModule { }