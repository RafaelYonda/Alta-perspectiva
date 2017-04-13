import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TabPanelComponent } from './tabs/tab-panel.component';
export var routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: '', redirectTo: 'tab/1' },
            { path: 'tab/:id', component: TabPanelComponent },
        ]
    },
];
export var routing = RouterModule.forRoot(routes);
