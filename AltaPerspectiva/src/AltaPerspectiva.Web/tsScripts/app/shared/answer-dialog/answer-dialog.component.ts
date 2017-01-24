import { Component, Input, EventEmitter } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {LogInObj, Question, AnswerViewModel } from '../../services/models';
import { Router } from '@angular/router';

@Component({
    selector: 'answer-dialog',
    templateUrl: 'js/app/shared/answer-dialog/answer-dialog.component.html',
    styleUrls: ['js/app/shared/answer-dialog/answer-dialog.component.css'],
    providers: [QuestionAnswerService]
})
export class AnswerDialogComponent {
    close = new EventEmitter();
    _logObj: LogInObj;
    question: Question;

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
    onClickedExit() {
        this.close.emit('event');
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    submitAnswer(_id: string) {
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;
        this.dataService.addAnswer(this.answerVM).subscribe(res => {

            this.answerVM = res;
            this.answerText = "";
            this._router.navigateByUrl('question/detail/' + this.question.id, { skipLocationChange: true });
            //this.dataService.GetQuestion(_id).subscribe(res => {
            //    this.question = res;
            //})

        });

    }
}