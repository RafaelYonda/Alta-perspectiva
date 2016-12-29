import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
//import { Question } from '../../services/models';

//Comment added
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
//import { QuestionAnswerService } from '../../services/question-answer.service';
import {QuestionMenu, Question, Answer, Comment, AnswerViewModel, Like, DateName} from '../../services/models';
@Component({
    selector: 'ap-tab-panel',
    templateUrl: 'js/app/core/tabs/tab-panel.component.html',
    styleUrls: ['js/app/core/tabs/tab-panel.css'],
    providers: [QuestionResolver,QuestionAnswerService]
})
export class TabPanelComponent {
    id: string;
    private sub: any;
    questions: Question[];
    shareUrl: string;

    //Comment
    comment: Comment;
    commentText: string;
    question: Question;
     route: any;
    error: any;
    //Like
    like: Like;
    
    constructor(private _route: ActivatedRoute, private router: Router, private questionAnswerService: QuestionAnswerService,private questionService: QuestionResolver) {
        //this.questions = this.questionAnswerService.getQuestionByCategory('');
         this.route = _route;
    }

    ngOnInit() {   
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
                        this.questions[q].lastAnswer.text = temp + " <a [routerLink]=\"['/question/detail', question.id]\">read more...</a>";
                        this.questions[q].shareUrl = encodeURI("http://altap.azurewebsites.net//question/detail/" + this.questions[q].id);
                    }
                }
                this.questions.forEach(x => x.lastAnswer = x.answers[x.answers.length - 1]);
                //console.log(this.questions);
            });
        }); 
    }
    //Added Comment Code
    submitComment(questionId: string)
    {
        this.comment = new Comment();
        this.comment.questionId = questionId;
        this.comment.commentText = this.commentText;

        this.questionAnswerService.addQuestionComment(this.comment).subscribe(res => {
            this.commentText = "";
            this.comment = res;
            this.questions.find(x=>x.id ==questionId).comments.push(this.comment);     
              
        });
    }
 submitLike(questionId: string) {
        console.log(questionId);
        this.like = new Like();
        this.like.questionId = questionId;       

        this.questionAnswerService.addQuestionLike(this.like).subscribe(res => {
            this.questions.find(x=>x.id==questionId).likes.push(this.like);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
