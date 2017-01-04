import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { AuthenticationService } from '../../services/authentication.service';
import { LogInObj } from '../../services/models';

//Comment added
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
//import { QuestionAnswerService } from '../../services/question-answer.service';
import {QuestionMenu, Question, Answer, Comment, AnswerViewModel, Like, DateName} from '../../services/models';
@Component({
    selector: 'ap-tab-panel',
    templateUrl: 'js/app/core/tabs/tab-panel.component.html',
    styleUrls: ['js/app/core/tabs/tab-panel.css'],

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
    like: Like;
    likedUsers:any;
    
    constructor(private _route: ActivatedRoute, private router: Router, private questionAnswerService: QuestionAnswerService, private questionService: QuestionResolver, private authService: AuthenticationService) {
        //this.questions = this.questionAnswerService.getQuestionByCategory('');
        this.route = _route;
        this._logObj = { isLoggedIn: false, user: { name: "", imageUrl: "", occupassion: "", userid: -1 } };
    }
    ngOnInit() {   
        var currentUser = localStorage.getItem('auth_token');
        console.log(this._logObj);
        this.authService.getLoggedinObj().subscribe(res => {
            if (res && currentUser != "null") {
                this._logObj.user.name = res.name;
                this._logObj.user.imageUrl = '../../../../profile/' + res.imageUrl;
                this._logObj.isLoggedIn = true;
                
            }
            console.log(res);
        });

        this.sub = this.route.params.subscribe(params => {
           
            this.id = params['id']; // (+) converts string 'id' to a number 
            //this.questions = this.questionAnswerService.getQuestionByCategory(params['id']);
            this.questionAnswerService.getQuestionsByCategory(this.id).subscribe(res => {
                this.questions = res;
                for (var q = 0; q< this.questions.length; q++)
                {                    
                    this.questions[q].lastAnswer = this.questions[q].answers[this.questions[q].answers.length - 1];

                    if (this.questions[q].lastAnswer) {

                        var temp = this.questions[q].lastAnswer.text.substring(0, 200);
                        this.questions[q].lastAnswer.text = temp;
                        this.readMoreLink = " <a href ='/question/detail/" + this.questions[q].id +"'>read more...</a>";
                        this.questions[q].shareUrl = encodeURI("http://altap.azurewebsites.net//question/detail/" + this.questions[q].id);
                    }
                }
                this.questions.forEach(x => x.lastAnswer = x.answers[x.answers.length - 1]);
                //console.log(this.questions);
            });
        }); 
    }
 submitLike(questionId: string) {
        console.log(questionId);
        this.like = new Like();
        this.like.questionId = questionId;       

        this.questionAnswerService.addQuestionLike(this.like).subscribe(res => {
            this.like.userId = res.userId ;    
            console.log(res);
            console.log(this.questions.find(x => x.id == questionId).likes);
           var douplicateLike= this.questions.find(x => x.id == questionId).likes.find(x => x.userId == res.userId &&x.questionId==questionId);
            console.log(douplicateLike);
           if (douplicateLike==undefined) {
               this.questions.find(x=>x.id==questionId).likes.push(this.like);
           }
        });
    }

 submitLikeUserDetails(questionId: string) {
        console.log(questionId);

  this.questionAnswerService.addLikeUserDetails(questionId).subscribe(res => {
      console.log(res);
      this.likedUsers = res;
  });
       // this.like = new Like();
       // this.like.questionId = questionId;       

      //  this.questionAnswerService.addQuestionLike(this.like).subscribe(res => {
        //    this.questions.find(x=>x.id==questionId).likes.push(this.like);
      //  });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
