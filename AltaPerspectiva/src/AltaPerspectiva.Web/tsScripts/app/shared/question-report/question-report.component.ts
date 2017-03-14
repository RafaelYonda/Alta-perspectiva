import { Component, EventEmitter, ViewContainerRef } from '@angular/core';
import { QuestionReport} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'question-report',
    templateUrl: 'js/app/shared/question-report/question-report.component.html',
    styleUrls: ['js/app/shared/question-report/question-report.component.css'],
    providers: [QuestionAnswerService]
})
export class QuestionReportComponent {


    constructor(private questionService: QuestionAnswerService, public toastr: ToastsManager, vcr: ViewContainerRef) {
        
    }
    close = new EventEmitter();
    //question: Question;
    questionReports: QuestionReport[];
    questionReport: QuestionReport;
    questionId: string;
    answerId: string;

    onClickedExit() {
        this.close.emit('event');
    }
    ngOnInit() {
       // console.log('My question' + this.question);
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }

    comment: string;
    selectedQuestionReport: string;
    save() {
        
        if (this.selectedQuestionReport==undefined) {
            this.toastr.warning('Please select a cause!!', 'Oops');
        } else {
            this.questionReport = new QuestionReport();
            this.questionReport.title = this.selectedQuestionReport;
            this.questionReport.comment = this.comment;
            this.questionReport.questionId = this.questionId;
            this.questionReport.answerId = this.answerId;
            this.questionService.SaveReport(this.questionReport).subscribe(res => {
                this.close.emit('event');
                this.toastr.success('Ok ..got it.we will look at it', 'success');
            })
            

        }
    };
}