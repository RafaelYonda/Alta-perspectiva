import { Component, Input, EventEmitter } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { ProfileService } from '../../services/profile.service';
import {LogInObj, Question, AnswerViewModel, User } from '../../services/models';
import { Router } from '@angular/router';

@Component({
    selector: 'answer-submit',
    templateUrl: 'js/app/shared/answer-submit/answer-submit.component.html',
    providers: [QuestionAnswerService, ProfileService]
})
export class AnswerSubmitComponent {
    _logObj: LogInObj;
    @Input() question: Question;
    @Input() isFullScreen: boolean;
    @Input() isDetail: boolean;
    @Input() isDraft = false;
    close = new EventEmitter();
    isAnonymous: boolean;//anonymous added to 
    answerVM: AnswerViewModel;
    answerText: string;
    constructor(private dataService: QuestionAnswerService, private _router: Router, private profileService: ProfileService) {
        var user: User = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        var userObj = localStorage.getItem('currentUserObject');
        var currentUserName = localStorage.getItem('currentUser');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
        if (this.isDraft)
            this.showDraftedQuestion();
    }
    //anonymous checkbox
    onChange(event) {
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
    submitAnswerAsDraft(_id: string) {
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
