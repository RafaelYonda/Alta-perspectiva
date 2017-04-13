import { RouterModule } from '@angular/router';
import { LearnHome } from './learning/learnHome';
import { ProjectHome } from './project/projectHome';
import { AuthResolver } from './services/resolve.services/auth.resolver';
export var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './core/core.module#CoreModule', resolve: { question: AuthResolver } },
    { path: 'question', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'questionDetails', loadChildren: './questions/question.module#QuestionModule' },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashBoardModule' },
    { path: 'learn', component: LearnHome },
    { path: 'project', component: ProjectHome }
];
export var appRouting = RouterModule.forRoot(routes);
