import { Component, EventEmitter } from '@angular/core';
import { Question} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
@Component({
    selector: 'dlg',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css'],
    providers: [QuestionAnswerService]
})
export class DialogComponent {
    close = new EventEmitter();
    question: Question;
    //QuestionEditModal

    //Edit question popup
    showQuestionEditForm: boolean
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
        console.log('My question'+this.question);
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value =='dialogModal')
            this.close.emit('event');
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