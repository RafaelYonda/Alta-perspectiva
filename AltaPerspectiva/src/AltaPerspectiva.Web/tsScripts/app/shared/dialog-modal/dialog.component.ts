
import { Component, Input, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Question, QuestionFollowing, QuestionReport} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
import { loginModalComponent } from '../login-modal/login-modal.component';
//QuestionReport
import { QuestionReportComponent } from '../../shared/question-report/question-report.component';
@Component({
    selector: 'dlg',
    templateUrl: 'js/app/shared/dialog-modal/dialog.component.html',
    styleUrls: ['js/app/shared/dialog-modal/dialog.component.css'],
    providers: [QuestionAnswerService]
})
export class DialogComponent {
    close = new EventEmitter();
    question: Question;
    //QuestionEditModal
    questionReports: QuestionReport[];
    //Edit question popup
    showQuestionEditForm: boolean
    isFollowing: boolean
    editTitle: string
    editBody: string
    _router: Router;
    onClickedExit() {
        this.close.emit('event');
    }
    constructor(private dataService: QuestionAnswerService, router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
        this._router = router;
    }
    ngOnInit() {
        //console.log('My question' + this.question);
        this.isFollowing = true;
        var user = localStorage.getItem('auth_token');
        if (user) {
            this.isFollowing = !this.question.bestAnswer.isFollowing;
        }
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        // var idAttr = event.srcElement.attributes.id;
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        //removel the modal on clicking out side the panel
        var idAttr = target['id'];

        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    QuestionFollowing(question: Question) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }

        let questionFollowing = new QuestionFollowing();
        questionFollowing.questionId = question.id;
        questionFollowing.answerId = question.bestAnswer.id;
        questionFollowing.followedUserId = question.bestAnswer.userId;

        console.log(questionFollowing);

        this.dataService.QuestionFollowing(questionFollowing).subscribe(res => {
            //console.log('successfullt passed')
            if (this.isFollowing == true) {
                this.isFollowing = false;
            } else {
                this.isFollowing = true;
            }
        })
    }
    //<a (click)="QuestionFollowing(question?.id,question?.bestAnswer?.id)" > <img src="../images/FollowingImage.jpg" /></a>
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
            this.editTitle = '';
            this._router.navigateByUrl('question/home/1', { skipLocationChange: true })
        });
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
    @ViewChild('questionReport', { read: ViewContainerRef }) questionReport: ViewContainerRef;

    onQuestionReportClicked(showQuestionReportModal: any) {

        this.questionReport.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(QuestionReportComponent);
        let dialogComponentRef = this.questionReport.createComponent(dialogComponentFactory);

        this.dataService.GetReport(showQuestionReportModal.answerId).subscribe(res => {
            this.questionReports = res;
            dialogComponentRef.instance.questionReports = this.questionReports;
            dialogComponentRef.instance.questionId = showQuestionReportModal.questionId;
            dialogComponentRef.instance.answerId = showQuestionReportModal.answerId;

        });


        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }


}