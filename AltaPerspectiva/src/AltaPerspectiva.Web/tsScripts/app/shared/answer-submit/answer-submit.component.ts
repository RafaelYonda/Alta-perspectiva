import { Component, Input, EventEmitter } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {LogInObj, Question, AnswerViewModel } from '../../services/models';
import { Router } from '@angular/router';

@Component({
    selector: 'answer-submit',
    templateUrl: 'answer-submit.component.html',
    providers: [QuestionAnswerService]
})
export class AnswerSubmitComponent {
    _logObj: LogInObj;
    @Input() question: Question;
    @Input() isFullScreen: boolean;
    @Input() isDetail: boolean;
    close = new EventEmitter();
    isAnonymous: boolean;//anonymous added to 
    answerVM: AnswerViewModel;
    answerText: string;
    constructor(private dataService: QuestionAnswerService, private _router: Router) {
        this._logObj = { isLoggedIn: false, user: { name: "", imageUrl: "", occupassion: "", userid: -1 } };
    }
    ngOnInit() {
        var currentUserName = localStorage.getItem('currentUserName');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
    }
    //anonymous checkbox
    onChange(event) {
        this.isAnonymous = event;
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
