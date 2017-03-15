import { Component, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild, EventEmitter,Output } from '@angular/core';
import { Question, QuestionReport } from '../../services/models';
import { AnswerDialogComponent } from '../answer-dialog/answer-dialog.component';
import { DialogComponent } from '../dialog-modal/dialog.component';
import { loginModalComponent } from '../login-modal/login-modal.component';
import { QuestionAnswerService } from '../../services/question-answer.service';

//QuestionReport
import { QuestionReportComponent } from '../../shared/question-report/question-report.component';
@Component({
    selector: 'question-panel',
    templateUrl: 'js/app/shared/question-panel/question-panel.component.html',
    providers: [QuestionAnswerService]
})
export class QuestionPanelComponent {
    @Input() question: Question;

    //Question report
    questionReports: QuestionReport[];
    //Edit question popup
    showQuestionEditForm: boolean
    editTitle: string
    editBody: string
    clippedAnswer: string;
    sendCommentCountToApStatus = new EventEmitter<any>()
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private dataService: QuestionAnswerService) { }

    ngOnInit() {
        if (!this.question.bestAnswer)
            return;
            if (!this.question.bestAnswer.text)
                return;

        
        var imgPos = this.question.bestAnswer.text.indexOf("img");

        if (imgPos >-1 && imgPos < 350)
        {
            var length = this.question.bestAnswer.text.indexOf(">", imgPos)
            length = length + 350;
            this.clippedAnswer = this.question.bestAnswer.text.substring(0, length);
        }
        else
            this.clippedAnswer = this.question.bestAnswer.text.substring(0, 350);
        this.clippedAnswer = this.clippedAnswer + '</p>';
        //==========Insert link read more====
        var lastParagraph = this.clippedAnswer.lastIndexOf('</p>');
        var x = 
            this.clippedAnswer = this.clippedAnswer.substr(0, lastParagraph) + '<span><a (click)="openDialogBox(question)">...(Read more)</a></span>' + '</p>';
        console.log(this.clippedAnswer);
    }

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
            this.question.title = res.title;
            this.question.body = this.editBody;
            this.showQuestionEditForm = false;

        });
    }
    sendCommentCount(param:any) {
        console.log('sendCommentCount');
        this.sendCommentCountToApStatus.emit(null);
    }

    @ViewChild('logginAnchor', { read: ViewContainerRef }) logginAnchor: ViewContainerRef;
    ShowNotLoggedIn() {
        this.logginAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        let dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
    answerDialogBoxIfNoAnswer(question: Question) {
        if (!question.bestAnswer && question.answerCount < 1)
            this.answerDialogBox(question);
    }
    @ViewChild('answerAnchor', { read: ViewContainerRef }) answerAnchor: ViewContainerRef;
    answerDialogBox(question: Question) {
        var token = localStorage.getItem('auth_token');
        if (!token)
        {
            this.ShowNotLoggedIn();
            return;
        }
        // Close any already open dialogs
        this.answerAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AnswerDialogComponent);
        let dialogComponentRef = this.answerAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question; // Not sure about the translation here
        dialogComponentRef.instance.isDetail = false;
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
    @ViewChild('dialogAnchor', { read: ViewContainerRef }) dialogAnchor: ViewContainerRef;
    openDialogBox(question: Question) {
        // Close any already open dialogs
        this.dialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
        let dialogComponentRef = this.dialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question; // Not sure about the translation here
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }

    @ViewChild('questionReport', { read: ViewContainerRef }) questionReport: ViewContainerRef;
    onQuestionReportClicked(showQuestionReportModal: any) {
        //console.log('onQuestionReportClicked->onQuestionReportClicked->onQuestionReportClicked->onQuestionReportClicked');
        console.log(showQuestionReportModal);
        this.questionReport.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(QuestionReportComponent);
        let dialogComponentRef = this.questionReport.createComponent(dialogComponentFactory);

        this.dataService.GetReport(showQuestionReportModal.answerId).subscribe(res => {
            this.questionReports = res;
            dialogComponentRef.instance.questionReports = this.questionReports;
            dialogComponentRef.instance.questionId = showQuestionReportModal.questionId;
            dialogComponentRef.instance.answerId = showQuestionReportModal.answerId;

        })


        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
}