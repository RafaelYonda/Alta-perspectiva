﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { CommentComponent } from './comment/comment.component';

import { UserInfoComponent } from './user-info/user-info.component';
import { QuestionHeaderComponent } from './question-header/question-header.component';
import { StatusComponent } from './status/status.component';
import { AppCkEditorComponent } from './apCkEditor.component'; 
import { AnswerDialogComponent } from './answer-dialog/answer-dialog.component';
import { AnswerSubmitComponent } from './answer-submit/answer-submit.component';
import { QuestionPanelComponent } from './question-panel/question-panel.component';
import { loginModalComponent } from './login-modal/login-modal.component';
//Search panel
import { ApSearchComponent } from './search/apsearch.component';
import { ApSearchDropDownComponent } from './search/search-dropdown.component';

/*Left Menu*/
import { CategoryMenuPanelComponent } from './left-menu/category-left-menu.component';
import { TopFiveQuestionLeftMenuComponent } from './left-menu/topfive-question-left-menu.component';
import { RelatedQuestionMenu } from './left-menu/related-question-left-menu.component';
import { TopFiveUserComponent } from './left-menu/topfive-user.component';
import { TopFiveTopicComponent } from './left-menu/topfive-topic.component';
import { RelatedTopicComponent } from './left-menu/related-topic.component';
import { LevelComponent } from './left-menu/level.component';
import { CommunicationService } from '../services/communication.service';
/*Plug in components*/
import {PopoverModule} from "ngx-popover";
import {DialogComponent} from "./dialog-modal/dialog.component";
import {LikeComponent} from "./like-modal/like.component";
import { CKEditorModule } from 'ng2-ckeditor';
import {QuestionReportComponent} from "./question-report/question-report.component";
import { QuillModule } from 'ngx-quill';
//import { ClipboardModule } from 'ngx-clipboard';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, PopoverModule, QuillModule, CKEditorModule/*, ClipboardModule*/],
    providers: [
        { provide: 'Window', useValue: window }, CommunicationService
    ],
    declarations: [
        ApSearchComponent, ApSearchDropDownComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent, QuestionHeaderComponent, CategoryMenuPanelComponent, TopFiveUserComponent, TopFiveQuestionLeftMenuComponent, RelatedQuestionMenu, TopFiveTopicComponent, RelatedTopicComponent, LevelComponent, DialogComponent, loginModalComponent, AnswerDialogComponent, AnswerSubmitComponent, QuestionPanelComponent, QuestionReportComponent, NavBarComponent, LikeComponent

    ],
    exports: [
        ApSearchComponent, ApSearchDropDownComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent, QuestionHeaderComponent, CategoryMenuPanelComponent, TopFiveUserComponent, TopFiveQuestionLeftMenuComponent, RelatedQuestionMenu, TopFiveTopicComponent, RelatedTopicComponent, LevelComponent, DialogComponent, loginModalComponent, AnswerDialogComponent, AnswerSubmitComponent, QuestionPanelComponent, QuestionReportComponent, NavBarComponent, LikeComponent
    ],
    entryComponents: [DialogComponent, AnswerDialogComponent, QuestionReportComponent, loginModalComponent, LikeComponent]
})
export class SharedModule { }