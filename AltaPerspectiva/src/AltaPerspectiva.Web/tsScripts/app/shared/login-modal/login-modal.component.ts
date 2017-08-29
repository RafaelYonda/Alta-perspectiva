﻿import { Component, EventEmitter } from '@angular/core';
import { Question, QuestionFollowing} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
@Component({
    selector: 'dlg',
    templateUrl: 'login-modal.component.html',
    styleUrls: ['login-modal.component.css'],
    providers: [QuestionAnswerService]
})
export class loginModalComponent {
    close = new EventEmitter();
    question: Question;
    showQuestionEditForm: boolean
    isFollowing: boolean
    editTitle: string
    editBody: string
    _router: Router;
    onClickedExit() {
        this.close.emit('event');
    }
    constructor(private dataService: QuestionAnswerService, router: Router) {
        this._router = router;
    }
    ngOnInit() {
        this.isFollowing = true;
    }
    handleClick(event: any) {
        //removel the modal on clicking out side the panel
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value =='dialogModal')
            this.close.emit('event');
    }
    QuestionFollowing(question: Question) {
        let questionFollowing = new QuestionFollowing();
        questionFollowing.questionId = question.id;
        questionFollowing.answerId = question.bestAnswer.id;
        questionFollowing.followedUserId = question.bestAnswer.userId;
        this.dataService.QuestionFollowing(questionFollowing).subscribe(res => {
            if (this.isFollowing == true) {
                this.isFollowing = false;
            } else {
                this.isFollowing = true;
            }
        })
    }
    //Edit Question Popup
    onQuestionDetailClicked(showEditForm: boolean) {
        this.showQuestionEditForm = showEditForm;
        this.editTitle = this.question.title;
        this.editBody = this.question.body;
    }
    updateQuestion() {
        var qv = new Question();
        qv.title = this.editTitle;
        qv.body = this.editBody;
        qv.id = this.question.id;

        this.dataService.updateQuestion(qv).subscribe(res => {
            this.question.title = this.editTitle;
            this.question.body = this.editBody;
            this.showQuestionEditForm = false;
            this.editTitle = '';
            this.editTitle='';
            this._router.navigateByUrl('question/home/1', { skipLocationChange: true })
        });
    }

}