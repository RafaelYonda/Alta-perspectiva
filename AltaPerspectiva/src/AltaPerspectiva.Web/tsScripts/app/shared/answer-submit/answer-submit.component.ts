import { Component, Input } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import {LogInObj, Question, AnswerViewModel } from '../../services/models';
import { Router } from '@angular/router';

@Component({
    selector: 'answer-submit',
    templateUrl: 'js/app/shared/answer-submit/answer-submit.component.html',
    providers: [QuestionAnswerService]
})
export class AnswerSubmitComponent {
    _logObj: LogInObj;
    @Input() question: Question;

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
    submitAnswer(_id: string) {
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;
        this.dataService.addAnswer(this.answerVM).subscribe(res => {
            this.answerVM = res;
            this.answerText = "";
            this._router.navigateByUrl('question/detail/' + this.question.id, { skipLocationChange: true });
            

        });

    }
}