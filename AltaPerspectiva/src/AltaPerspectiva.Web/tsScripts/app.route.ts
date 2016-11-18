
// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnHome } from './app/learning/learnHome';
import { ProjectHome } from './app/project/projectHome';
// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './core/core.module#CoreModule'},
    { path: 'question', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashBoardModule' },
    { path: 'learn', component: LearnHome },
    { path: 'project', component: ProjectHome }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);