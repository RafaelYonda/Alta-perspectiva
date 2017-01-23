import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { RouterModule } from '@angular/router';

import { ApSearchComponent } from './search/apsearch.component';
import { CommentComponent } from './comment/comment.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { QuestionHeaderComponent } from './question-header/question-header.component';
import { StatusComponent } from './status/status.component';
import { AppCkEditorComponent } from './apCkEditor.component';
/*Left Menu*/
import { CategoryMenuPanelComponent } from './left-menu/category-left-menu.component';
import { TopFiveQuestionLeftMenuComponent } from './left-menu/topfive-question-left-menu.component';
import { RelatedQuestionMenu } from './left-menu/related-question-left-menu.component';
import { TopFiveUserComponent } from './left-menu/topfive-user.component';
import { TopFiveTopicComponent } from './left-menu/topfive-topic.component';
import { RelatedTopicComponent } from './left-menu/related-topic.component';
import { LevelComponent } from './left-menu/level.component';
import { CommunicationService } from '../services/communication.service';
/*popover*/
import {PopoverModule} from "ngx-popover";
@NgModule({
    imports: [BrowserModule, FormsModule, CKEditorModule, RouterModule,PopoverModule],
    providers: [
        { provide: 'Window', useValue: window }, CommunicationService
    ],
    declarations: [
        ApSearchComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent, QuestionHeaderComponent, CategoryMenuPanelComponent, TopFiveUserComponent, TopFiveQuestionLeftMenuComponent, RelatedQuestionMenu, TopFiveTopicComponent,RelatedTopicComponent,LevelComponent
    ],
    exports: [
        ApSearchComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent, QuestionHeaderComponent, CategoryMenuPanelComponent, TopFiveUserComponent, TopFiveQuestionLeftMenuComponent, RelatedQuestionMenu, TopFiveTopicComponent,RelatedTopicComponent,LevelComponent
    ]
})
export class SharedModule { }