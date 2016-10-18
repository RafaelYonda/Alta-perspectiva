/// <reference path="proyectos-detail.ts" />
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApNav } from './nav/apnav';
import { ProyectosDetail } from './proyectos-detail';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'proyectos', component: ProyectosDetail },
        ])
    ],
    declarations: [ApNav, ProyectosDetail],
    exports: [ApNav, ProyectosDetail]
})
export class CoreModule { }