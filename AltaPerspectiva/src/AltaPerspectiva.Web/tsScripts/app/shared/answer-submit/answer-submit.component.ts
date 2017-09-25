﻿import { Component, Input, EventEmitter, ViewContainerRef } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { ProfileService } from '../../services/profile.service';
import { SITE_URL } from '../../../globals';
import {LogInObj, Question, AnswerViewModel, User } from '../../services/models';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

@Component({
    selector: 'answer-submit',
    templateUrl: 'answer-submit.component.html',
    providers: [QuestionAnswerService, ProfileService]
})
export class AnswerSubmitComponent {
    site_url: string = SITE_URL;
    _logObj: LogInObj;
    @Input()
    question: Question;
    @Input()
    isFullScreen: boolean;
    @Input()
    isDetail: boolean;
    @Input()
    isDraft = false;
    close = new EventEmitter();
    isAnonymous: boolean; //anonymous added to 
    answerVM: AnswerViewModel;
    answerText: string;
    shareurl: string;

    constructor(private dataService: QuestionAnswerService,
        private _router: Router,
        private fb: FacebookService,
        private profileService: ProfileService,
        private _authService: AuthenticationService, public toastr: ToastsManager, vcr: ViewContainerRef)

    {
        var user: User = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        this._authService.getLoggedinObj().subscribe(res => {
            this._logObj.user.name = res.name;
            this._logObj.user.imageUrl = res.imageUrl;
            this._logObj.user.occupassion = res.occupation;
        });
        var API_URL = '/SocialShare/ShareQuestionInSocialMedia/';
        this.shareurl = SITE_URL + API_URL + this.question.id.toString();
        if (this.isDraft)
            this.showDraftedQuestion();

        if (this.question) {
            this.question.shareUrl = this.site_url +'question/detail/' + this.question.id;
        }
    }
    //anonymous checkbox
    onChange(event: boolean) {
        this.isAnonymous = event;
    }
    showDraftedQuestion() {
        this.answerVM = this.question.bestAnswer;
        this.answerText = this.answerVM.text;
    }
    publishDraft(_id: string) {
        this.answerVM.text = this.answerText;
        this.answerVM.questionId = _id;
        this.profileService.SaveDraftedQuestions(this.answerVM).subscribe(res => {
            this._router.navigateByUrl('question/detail/' + this.question.id, { skipLocationChange: true });
        });
    }
    submitAnswer(_id: string) {
        if (this.answerText == null) {
             this.toastr.warning('Please write some answer!!', 'Oops');
            return;
        }
        if (this.isDetail)
            this.close.emit();
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;
        this.dataService.addAnswer(this.answerVM).subscribe(res => {
            this.answerVM = res;
            this.answerText = "";
            if (!this.isDetail)
                this._router.navigateByUrl('question/detail/' + this.question.id, { skipLocationChange: true });
            else
                this.close.emit();
        });
    }
    socialShare() {
        console.log("share FB");
        let initParams: InitParams = {
            appId: '510199349333959',
            xfbml: true,
            cookie: true,
            version: 'v2.10'
        };
        var API_URL = '/SocialShare/ShareQuestionInSocialMedia/';
        this.fb.init(initParams);
        var urlId = this.question.id.toString();
        let params: UIParams = {
            href: SITE_URL + API_URL + urlId,
            method: 'share',
            display: 'popup',
            name: this.question.title,
            description: this.question.title
        };
        console.log(params);
        this.fb.ui(params)
            .then((res: UIResponse) => console.log(res))
            .catch((e: any) => console.error(e));
    }
    submitAnswerAsDraft(_id: string) {
        if (this.answerText == null) {
            return;
        }

        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;
        this.answerVM.isDrafted = true;

        this.dataService.addAnswer(this.answerVM).subscribe(res => {
            this.answerVM = res;
            this.answerText = "";
            this.isAnonymous = false;
            if (!this.isDetail)
                this._router.navigateByUrl('question/detail/' + this.question.id, { skipLocationChange: true });
            else
                this.close.emit();
        });
    }
}
