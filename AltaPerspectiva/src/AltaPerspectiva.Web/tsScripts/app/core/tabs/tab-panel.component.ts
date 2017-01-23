import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { AuthenticationService } from '../../services/authentication.service';
import { LogInObj } from '../../services/models';
import { DialogComponent } from '../../shared/dialog-modal/dialog.component';

//Comment added
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
import {QuestionMenu, Question, Answer, Comment, AnswerViewModel, Like, DateName} from '../../services/models';
@Component({
    selector: 'ap-tab-panel',
    templateUrl: 'js/app/core/tabs/tab-panel.component.html',

    providers: [QuestionResolver, QuestionAnswerService, AuthenticationService]
})
export class TabPanelComponent {
    id: string;
    private sub: any;
    questions: Question[];
    shareUrl: string;
    _logObj: LogInObj;
    readMoreLink: string;
    //Comment
    comment: Comment;
    question: Question;
    route: any;
    error: any;
    //Like


    @ViewChild('dialogAnchor', { read: ViewContainerRef }) dialogAnchor: ViewContainerRef;
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private _route: ActivatedRoute, private router: Router, private questionAnswerService: QuestionAnswerService, private questionService: QuestionResolver, private authService: AuthenticationService) {
        this.route = _route;
        this._logObj = { isLoggedIn: false, user: { name: "", imageUrl: "", occupassion: "", userid: -1 } };
    }
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
    ngOnInit() {
        var currentUser = localStorage.getItem('auth_token');
        this.authService.getLoggedinObj().subscribe(res => {
            if (res && currentUser != "null") {
                this._logObj.user.name = res.name;
                this._logObj.user.imageUrl = '../../../../profile/' + res.imageUrl;
                this._logObj.isLoggedIn = true;
            }
        });

        this.sub = this.route.params.subscribe(params => {

            this.id = params['id']; // (+) converts string 'id' to a number 

            this.questionAnswerService.getQuestionsByCategory(this.id).subscribe(res => {
                this.questions = res;
                for (var q = 0; q < this.questions.length; q++) {
                    // answers[0] is the best answer
                    this.questions[q].bestAnswer = this.questions[q].answers[0];

                    if (this.questions[q].bestAnswer && this.questions[q].bestAnswer.text) {
                        var temp = this.questions[q].bestAnswer.text.substring(0, 200);
                        this.questions[q].bestAnswer.text = temp;
                        this.readMoreLink = " <a href ='/question/detail/" + this.questions[q].id + "'>read more...</a>";
                        this.questions[q].shareUrl = encodeURI("http://altap.azurewebsites.net//question/detail/" + this.questions[q].id);
                    }
                }
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            });
        });
    }
    ShowModal(questionId) {
        console.log(questionId);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
