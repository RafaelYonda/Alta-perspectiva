import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild  } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { CategoryService } from '../../services/category.service';
import { ConfigService } from '../../services/config.service';
import {QuestionMenu, Question, Answer, Category, Like, DateName, TotalCount, Config,User, LogInObj} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
import { DialogComponent } from '../../shared/dialog-modal/dialog.component';
import { AnswerDialogComponent } from '../../shared/answer-dialog/answer-dialog.component';

@Component({
    //selector: "question-body",
    templateUrl: 'js/app/questions/question-fullscreen/question-fullscreen.component.html',
    //styleUrls: ['js/app/questions/question-fullscreen/question-fullscreen.css'],
    providers: [QuestionResolver]
})
export class QuestionFullscreenComponent {
    question: Question;
    route: any;
	_logObj: LogInObj;
    constructor(private router: Router, private _route: ActivatedRoute) {
        this.route = _route;
		var user: User = new User();
		this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
	window.scrollTo(0, 0);
    var currentUserName = localStorage.getItem('auth_token'); 
    var currentUserImage = localStorage.getItem('currentUserImage');
	if (currentUserName != null)
        {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
        this.route.data
            .subscribe(res => {
                this.question = res.question;
                console.log(this.question);
                });
    }

	    hideMenu() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    }
    gotoProfile() {
        this.router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    }
}