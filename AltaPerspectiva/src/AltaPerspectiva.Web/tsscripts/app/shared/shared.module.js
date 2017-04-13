var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { loginModalComponent } from './login-modal/login-modal.component';
import { ApSearchComponent } from './search/apsearch.component';
import { ApSearchDropDownComponent } from './search/search-dropdown.component';
import { CategoryMenuPanelComponent } from './left-menu/category-left-menu.component';
import { TopFiveQuestionLeftMenuComponent } from './left-menu/topfive-question-left-menu.component';
import { RelatedQuestionMenu } from './left-menu/related-question-left-menu.component';
import { TopFiveUserComponent } from './left-menu/topfive-user.component';
import { TopFiveTopicComponent } from './left-menu/topfive-topic.component';
import { RelatedTopicComponent } from './left-menu/related-topic.component';
import { LevelComponent } from './left-menu/level.component';
import { CommunicationService } from '../services/communication.service';
import { PopoverModule } from "ngx-popover";
import { DialogComponent } from "./dialog-modal/dialog.component";
import { LikeComponent } from "./like-modal/like.component";
import { CKEditorModule } from 'ng2-ckeditor';
import { QuestionReportComponent } from "./question-report/question-report.component";
import { QuillModule } from 'ngx-quill';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WindowRefService } from '../services/window-ref.service';
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    NgModule({
        imports: [BrowserModule, ToastModule, FormsModule, RouterModule, PopoverModule, QuillModule, CKEditorModule],
        providers: [
            WindowRefService, CommunicationService
        ],
        declarations: [
            ApSearchComponent, ApSearchDropDownComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent, QuestionHeaderComponent, CategoryMenuPanelComponent, TopFiveUserComponent, TopFiveQuestionLeftMenuComponent, RelatedQuestionMenu, TopFiveTopicComponent, RelatedTopicComponent, LevelComponent, DialogComponent, loginModalComponent, AnswerDialogComponent, AnswerSubmitComponent, QuestionPanelComponent, QuestionReportComponent, NavBarComponent, LikeComponent
        ],
        exports: [
            ApSearchComponent, ApSearchDropDownComponent, AppCkEditorComponent, CommentComponent, StatusComponent, UserInfoComponent, QuestionHeaderComponent, CategoryMenuPanelComponent, TopFiveUserComponent, TopFiveQuestionLeftMenuComponent, RelatedQuestionMenu, TopFiveTopicComponent, RelatedTopicComponent, LevelComponent, DialogComponent, loginModalComponent, AnswerDialogComponent, AnswerSubmitComponent, QuestionPanelComponent, QuestionReportComponent, NavBarComponent, LikeComponent
        ],
        entryComponents: [DialogComponent, AnswerDialogComponent, QuestionReportComponent, loginModalComponent, LikeComponent]
    })
], SharedModule);
export { SharedModule };
