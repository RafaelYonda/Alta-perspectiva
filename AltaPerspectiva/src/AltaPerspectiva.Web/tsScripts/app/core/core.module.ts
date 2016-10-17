import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApNav } from './nav/apnav';

@NgModule({
    //imports: [
    //    RouterModule.forRoot([
    //        { path: 'hero/:id', component: HeroDetailComponent },
    //    ])
    //],
    declarations: [ ApNav],
    exports: [ApNav]
})
export class CoreModule { }