// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CoreModule } from './core/core.module';
import { LearnHome } from './learning/learnHome';
import { ProjectHome } from './project/projectHome';
import { AuthResolver } from './services/resolve.services/auth.resolver';

// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './core/core.module#CoreModule', resolve: { question: AuthResolver } },
    { path: 'question', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'questionDetails', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashBoardModule' },
    { path: 'learn', component: LearnHome },
    { path: 'project', component: ProjectHome }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);