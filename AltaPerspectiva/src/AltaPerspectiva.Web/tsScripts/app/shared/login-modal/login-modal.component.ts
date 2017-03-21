import { Component, EventEmitter } from '@angular/core';
import { Question, QuestionFollowing} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
@Component({
    selector: 'dlg',
    templateUrl: 'js/app/shared/login-modal/login-modal.component.html',
    styleUrls: ['js/app/shared/login-modal/login-modal.component.css'],
    providers: [QuestionAnswerService]
})
export class loginModalComponent {
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
        //var idAttr = event.srcElement.attributes.id;
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        //removel the modal on clicking out side the panel
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

        console.log(questionFollowing);

        this.dataService.QuestionFollowing(questionFollowing).subscribe(res => {
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