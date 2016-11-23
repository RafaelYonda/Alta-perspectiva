import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { EditProfileComponent } from './eidtprofile/editprofile.component';
import { ContactFormComponent } from './eidtprofile/profilesforms/contact.component';
import { BiographyFormComponent } from './eidtprofile/profilesforms/biography.component';
import { NavDashboard } from './navdashboard/navdashboard.component';
import { DashTab } from './dashtab/dashtab.component';


const DashBoardroutes: Routes = [
    {
        path: 'dashboard', component: DashBoardComponent,
        children: [
            { path: '', redirectTo: 'editprofile' },
            {
                path: 'editprofile', component: EditProfileComponent,
                children: [
                    { path: '', redirectTo: 'contact' }, 
                    { path: 'contact', component: ContactFormComponent },
                    { path: 'biography', component: BiographyFormComponent },
                ]
            }
        ]
    }
];
export const dashboardRouting: ModuleWithProviders = RouterModule.forRoot(DashBoardroutes);


@NgModule({
    imports: [BrowserModule, dashboardRouting
        //RouterModule.forRoot([
        //{ path: 'dashboard', component: DashBoardComponent }])
    ],
    declarations: [
        DashBoardComponent, EditProfileComponent, NavDashboard, DashTab, ContactFormComponent, BiographyFormComponent
    ],
    exports: [DashBoardComponent
    ]
})
export class DashBoardModule { }

