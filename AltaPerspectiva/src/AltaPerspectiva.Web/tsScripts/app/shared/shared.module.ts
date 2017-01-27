/// <reference path="search/search-dropdown.component.ts" />
import { NgModule } from '@angular/core';
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
import { CKEditorModule } from 'ng2-ckeditor';
import {QuestionReportComponent} from "./question-report/question-report.component";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, PopoverModule, CKEditorModule],
    providers: [
        { provide: 'Window', useValue: window }, CommunicationService
    ],
    declarations: [
        ApSearchComponent, ApSearchDropDownComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent, QuestionHeaderComponent, CategoryMenuPanelComponent, TopFiveUserComponent, TopFiveQuestionLeftMenuComponent, RelatedQuestionMenu, TopFiveTopicComponent, RelatedTopicComponent, LevelComponent, DialogComponent, AnswerDialogComponent, AnswerSubmitComponent, QuestionPanelComponent, QuestionReportComponent
        //Plug ins

    ],
    exports: [
        ApSearchComponent, ApSearchDropDownComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent, QuestionHeaderComponent, CategoryMenuPanelComponent, TopFiveUserComponent, TopFiveQuestionLeftMenuComponent, RelatedQuestionMenu, TopFiveTopicComponent, RelatedTopicComponent, LevelComponent, DialogComponent, AnswerDialogComponent, AnswerSubmitComponent, QuestionPanelComponent, QuestionReportComponent
    ],
    entryComponents: [DialogComponent, AnswerDialogComponent, QuestionReportComponent]
})
export class SharedModule { }