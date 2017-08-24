﻿import { Component } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { ProfileService } from '../../../services/profile.service';
import { SITE_URL } from '../../../../globals';
import { ActivatedRoute } from '@angular/router';
import {Question} from '../../../services/models';
@Component({
    templateUrl: 'user-question.component.html',
    providers: [QuestionService]
})
export class UserQuestionComponent {
    questions: Question[];
    readMoreLink: string;
    private sub: any;
    isLoading = false;

    constructor(private questionService: QuestionService, private profileService: ProfileService, private _route: ActivatedRoute) {
        
        
    }
    ngOnInit() {
        this.showLoader();
        window.scrollTo(0,0);
        this.sub = this._route.parent.params.subscribe(params => {
            this.questionService.getQuestionsbyUserId(params['userId']).subscribe(res => {
                this.questions = res;
                for (var q = 0; q < this.questions.length; q++) {
                    this.questions[q].bestAnswer = this.questions[q].answers[0];
                    if (this.questions[q].bestAnswer && this.questions[q].bestAnswer.text) {
                        this.readMoreLink = " <a href ='/question/detail/" + this.questions[q].id + "'>read more...</a>";
                        this.questions[q].shareUrl = encodeURI(SITE_URL + this.questions[q].id);
                    }
                }
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
                this.hideLoader();
            });
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    
    showLoader() {
        this.isLoading = true;
    }
    hideLoader() {
        this.isLoading = false;
    }
}