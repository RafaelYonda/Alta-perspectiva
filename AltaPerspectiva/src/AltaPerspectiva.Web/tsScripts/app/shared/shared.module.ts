import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { RouterModule } from '@angular/router';

import { ApSearchComponent } from './search/apsearch.component';
import { CommentComponent } from './comment/comment.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { StatusComponent } from './status/status.component';
import { AppCkEditorComponent } from './apCkEditor.component';


@NgModule({
    imports: [BrowserModule, FormsModule, CKEditorModule, RouterModule],
    providers: [
        { provide: 'Window', useValue: window }
    ],
    declarations: [
        ApSearchComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent
    ],
    exports: [
        ApSearchComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent
    ]
})
export class SharedModule { }