import { Component,EventEmitter } from '@angular/core';
import {Question } from '../../services/models';

@Component({
    selector: 'answer-dialog',
    templateUrl: 'js/app/shared/answer-dialog/answer-dialog.component.html',
    styleUrls: ['js/app/shared/answer-dialog/answer-dialog.component.css'],
})
export class AnswerDialogComponent {
    close = new EventEmitter();
    question: Question;
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