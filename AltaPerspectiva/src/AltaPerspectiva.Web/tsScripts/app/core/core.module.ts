import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApNav } from './nav/apnav';
import { HomeComponent } from './home.component';
import { QuestionHome } from '../questions/questionhome';
import { LearnHome } from '../learning/learnHome';
import { ProjectHome } from '../project/projectHome';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'question', component: QuestionHome },
            { path: 'learn', component: LearnHome },
            { path: 'project', component: ProjectHome },
        ])
    ],
    declarations: [ApNav, HomeComponent, QuestionHome, LearnHome, ProjectHome,],
    exports: [ApNav, HomeComponent, QuestionHome, LearnHome, ProjectHome, RouterModule]
})
export class CoreModule { }