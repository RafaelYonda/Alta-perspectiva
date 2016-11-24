import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { ApSearchComponent } from './search/apsearch.component';
import { AppCkEditorComponent } from './apCkEditor.component';


@NgModule({
    imports: [BrowserModule, FormsModule],
    providers: [
        { provide: 'Window', useValue: window }
    ],
    declarations: [
        ApSearchComponent, AppCkEditorComponent
    ],
    exports: [
        ApSearchComponent, AppCkEditorComponent
    ]
})
export class SharedModule { }