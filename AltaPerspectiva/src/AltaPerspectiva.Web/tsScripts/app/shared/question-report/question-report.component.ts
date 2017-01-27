import { Component, EventEmitter } from '@angular/core';
import { Question} from '../../services/models';

@Component({
    selector: 'question-report',
    templateUrl: 'js/app/shared/question-report/question-report.component.html',
    styleUrls: ['js/app/shared/question-report/question-report.component.css'],
})
export class QuestionReportComponent {
    close = new EventEmitter();
    question: Question;

    onClickedExit() {
        this.close.emit('event');
    }
    ngOnInit() {
        console.log('My question' + this.question);
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
}