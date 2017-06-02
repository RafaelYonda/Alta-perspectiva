import { Component } from '@angular/core';
import {SITE_URL} from '../../../globals'
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CommunicationService } from '../../services/communication.service';
import { LogInObj, User } from '../../services/models';

//Comment added
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
import {QuestionMenu, Question, Answer, Comment, AnswerViewModel, Like, DateName} from '../../services/models';
@Component({
    selector: 'ap-tab-panel',
    templateUrl: 'tab-panel.component.html',

    providers: [QuestionResolver, QuestionAnswerService, AuthenticationService]
})
export class TabPanelComponent {
    isLoading = false;
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
    
    constructor(private _route: ActivatedRoute, private router: Router, private questionAnswerService: QuestionAnswerService, private questionService: QuestionResolver, private authService: AuthenticationService, private commServ: CommunicationService) {
        this.route = _route;
        var user: User = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }

    
    ngOnInit() {
        var currentUser = localStorage.getItem('auth_token');
        this.authService.getLoggedinObj().subscribe((res:any) => {
            if (res && currentUser != null) {
                this._logObj = new LogInObj();
            this._logObj.user = new User();
            this._logObj.user.name = res.name;
            this._logObj.user.imageUrl = res.imageUrl;
            this._logObj.isLoggedIn = true;
            this._logObj.user.userId = res.userId;
            }
        });

        this.sub = this.route.params.subscribe((params:any) => {
            this.showLoader();

            this.id = params['id']; // (+) converts string 'id' to a number 

            this.questionAnswerService.getQuestionsByCategory(this.id).subscribe(res => {
                this.questions = res;
                for (var q = 0; q < this.questions.length; q++) {
                    // answers[0] is the best answer
                    this.questions[q].bestAnswer = this.questions[q].answers[0];

                    if (this.questions[q].bestAnswer && this.questions[q].bestAnswer.text) {
                       // var temp = this.questions[q].bestAnswer.text.substring(0, 200);
                       // this.questions[q].bestAnswer.text = temp;
                        this.readMoreLink = " <a href ='/question/detail/" + this.questions[q].id + "'>read more...</a>";
                        this.questions[q].shareUrl = encodeURI(SITE_URL+"/question/detail/" + this.questions[q].id);
                    }
                }
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
                this.hideLoader();
            });
        });
    }

    ShowModal(questionId:string) {
        console.log(questionId);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    showLoader() {
        // console.log('showloader started');
        this.isLoading = true;
    }

    hideLoader() {
        this.isLoading = false;
    }
    hideMenu() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    }
    gotoProfile() {
        this.router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    }
}
