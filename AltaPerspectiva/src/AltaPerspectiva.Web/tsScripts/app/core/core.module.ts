/// <reference path="../learning/learnhome.ts" />
/// <reference path="../project/projecthome.ts" />
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApNav } from './nav/apnav';
import { QuestionHome } from '../questions/questionhome';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/question', pathMatch: 'full' },
            { path: 'question', component: QuestionHome },
            { path: 'learn', component: LearnHome },
            { path: 'project', component: ProjectHome },
        ])
    ],
    declarations: [ApNav, QuestionHome, LearnHome, ProjectHome,],
    exports: [ApNav, QuestionHome, LearnHome, ProjectHome, RouterModule]
})
export class CoreModule { }