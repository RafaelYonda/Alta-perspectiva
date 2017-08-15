// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AuthResolver } from './services/resolve.services/auth.resolver';

// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './core/core.module#CoreModule', resolve: { question: AuthResolver } },
    { path: 'question', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'questionDetails', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashBoardModule' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);