import { Component, EventEmitter } from '@angular/core';
import { Question} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
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

    //Edit question popup
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
        //console.log('My question' + this.question);
        this.isFollowing = true;
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value =='dialogModal')
            this.close.emit('event');
    }
    QuestionFollowing(question: Question) {
        console.log(question);
        this.dataService.QuestionFollowing(question).subscribe(res => {
            console.log('successfullt passed')
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
            this.editTitle='';
            this._router.navigateByUrl('question/home/1', { skipLocationChange: true })
        });
    }

}