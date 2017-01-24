import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild  } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { CategoryService } from '../../services/category.service';
import { ConfigService } from '../../services/config.service';
import {QuestionMenu, Question, Answer, Category, Like, DateName, TotalCount, Config, LogInObj} from '../../services/models';
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
    constructor(private router: Router, private _route: ActivatedRoute) {
        this.route = _route;
    }
    ngOnInit() {
        this.route.data
            .subscribe(res => {
                this.question = res.question;
                console.log(this.question);
                });
    }
}