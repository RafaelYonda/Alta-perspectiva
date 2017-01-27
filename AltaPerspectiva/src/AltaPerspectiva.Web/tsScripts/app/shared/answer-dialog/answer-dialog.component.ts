import { Component, EventEmitter, ViewChild } from '@angular/core';
import {Question } from '../../services/models';
import {AnswerSubmitComponent } from '../answer-submit/answer-submit.component';

@Component({
    selector: 'answer-dialog',
    templateUrl: 'js/app/shared/answer-dialog/answer-dialog.component.html',
    styleUrls: ['js/app/shared/answer-dialog/answer-dialog.component.css'],
})
export class AnswerDialogComponent {
    isDetail: boolean;
    close = new EventEmitter();
    question: Question;
    @ViewChild(AnswerSubmitComponent) anserSubmit: AnswerSubmitComponent
    ngOnInit() {
        this.anserSubmit.close.subscribe(() => {
            this.close.emit('event');
        });
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
}