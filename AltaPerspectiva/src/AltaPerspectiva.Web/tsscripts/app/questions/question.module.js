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
import { HttpModule } from '@angular/http';
import { CKEditorModule } from 'ng2-ckeditor';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { QuestionHomeComponent } from './question-home.component';
import { AllUserComponent } from './all-user/all-user';
import { QuestionDetailComponent } from './question-details/question-details.component';
import { QuestionBodyComponent } from './question-body/question-body.component';
import { QuestionFullscreenComponent } from './question-fullscreen/question-fullscreen.component';
import { SharedModule } from '../shared/shared.module';
import { CommunicationService } from '../services/communication.service';
import { QuestionAnswerService } from '../services/question-answer.service';
import { QuestionResolver } from '../services/resolve.services/question.resolver';
var QuestionModule = (function () {
    function QuestionModule() {
    }
    QuestionModule.prototype.ngInit = function () {
    };
    return QuestionModule;
}());
QuestionModule = __decorate([
    NgModule({
        providers: [QuestionAnswerService, QuestionResolver, CommunicationService],
        imports: [BrowserModule, HttpModule, CKEditorModule, InfiniteScrollModule, FormsModule, SharedModule, RouterModule.forRoot([
                {
                    path: 'question', component: QuestionHomeComponent,
                    children: [
                        {
                            path: 'home/:categoryId', component: QuestionBodyComponent
                        },
                        {
                            path: 'all-user', component: AllUserComponent
                        },
                        {
                            path: 'home/:categoryId/:topicId/:levelId', component: QuestionBodyComponent
                        },
                        {
                            path: 'detail/:id', component: QuestionDetailComponent,
                            resolve: { question: QuestionResolver }
                        },
                        {
                            path: 'questionfullscreen/:id', component: QuestionFullscreenComponent,
                            resolve: { question: QuestionResolver }
                        }
                    ]
                }
            ])],
        declarations: [
            QuestionBodyComponent, QuestionHomeComponent, QuestionDetailComponent, QuestionFullscreenComponent, AllUserComponent
        ],
        exports: []
    })
], QuestionModule);
export { QuestionModule };
