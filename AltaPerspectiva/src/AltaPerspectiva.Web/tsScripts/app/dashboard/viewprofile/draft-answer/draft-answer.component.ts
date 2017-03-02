import { Component } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import {Question, LogInObj, AnswerViewModel} from '../../../services/models';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/draft-answer/draft-answer.component.html',
    providers: [ProfileService]
})
export class DraftAnswerComponent {
    private sub: any;
    questions: Question[];
    readMoreLink: string;
    _logObj: LogInObj;
    answerVMs: AnswerViewModel[];
    answerText: string;
    constructor(private _route: ActivatedRoute, private profileService: ProfileService, private _router: Router) { }
    ngOnInit() {
        window.scrollTo(0, 0);
        
        this.sub = this._route.parent.params.subscribe(params => {
            this.profileService.GetDraftedQuestions().subscribe(res => {
                this.questions = res;
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            });
        });

        //var userObj = localStorage.getItem('currentUserObject');
        //var currentUserName = localStorage.getItem('currentUser');
        //var currentUserImage = localStorage.getItem('currentUserImage');
        //if (currentUserName != null) {
        //    this._logObj.user.name = currentUserName;
        //    this._logObj.user.imageUrl = currentUserImage;
        //}
    }
    publishAnswer(_id: string) {
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isDrafted = true;

        this.profileService.PostDraftAnswer(this.answerVM).subscribe(res => {
           // this.ngOnInit();
            this._router.navigateByUrl('question/detail/' + this.answerVM.questionId, { skipLocationChange: true });
        });
    }
}