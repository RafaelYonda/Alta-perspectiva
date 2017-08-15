import { RouterModule } from '@angular/router';
import { AuthResolver } from './services/resolve.services/auth.resolver';
export var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './core/core.module#CoreModule', resolve: { question: AuthResolver } },
    { path: 'question', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'questionDetails', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashBoardModule' }
];
export var appRouting = RouterModule.forRoot(routes);
