import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ApSearchComponent } from './search/apsearch.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    providers: [
        { provide: 'Window', useValue: window }
    ],
    declarations: [
        ApSearchComponent,
    ],
    exports: [
        ApSearchComponent,
    ]
})
export class SharedModule { }