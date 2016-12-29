import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
import {QuestionMenu, Question, Answer, Comment, AnswerViewModel, Like, DateName} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { RelatedQuestionMenu } from '../question-left-menu/related-question-left-menu.component';

@Component({
    selector: "question-details",
    templateUrl: 'js/app/questions/question-details/question-details.component.html',
    styleUrls: ['js/app/questions/question-details/question-details.css'],
    providers: [QuestionResolver, QuestionAnswerService]
})
export class QuestionDetailComponent {
    date: DateName;
    route: any;
    error: any;
    id: string;

    answerText: string;
    answerVM: AnswerViewModel;

    comment: Comment;
    commentText: string;
    commentAnswerText: string;

    like: Like;


    private sub: any;
    question: Question;
    constructor(private router: Router, private _route: ActivatedRoute, private questionService: QuestionResolver,
        private dataService: QuestionAnswerService) {
        this.route = _route;
        //this.question = questionService.getFakeQuestion();
        this.date = new DateName();
    }
    ngOnInit() {       

        this.route.data
            .subscribe(res => {
                this.question = res.question;
                // save number of views of question
                this.dataService.increaseQuestionViewCount(this.question.id).subscribe(res => {
                    this.question.viewCount += 1;
                });
            });
    }

    submitAnswer(_id: string) {

        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;

        this.dataService.addAnswer(this.answerVM).subscribe(res => {

            this.answerVM = res;
            this.answerText = "";
            this.question.answers.push(this.answerVM);
           
        });

    }

    submitComment(questionId: string)
    {
        this.comment = new Comment();
        this.comment.questionId = questionId;
        this.comment.commentText = this.commentText;

        this.dataService.addQuestionComment(this.comment).subscribe(res => {
            this.commentText = "";
            this.comment = res;
            this.question.comments.push(this.comment);     
              
        });
    }

    submitCommentForAnswer(answerId: string) {
        this.comment = new Comment();        
        this.comment.answerId = answerId;
        this.comment.commentText = this.commentAnswerText;

        this.dataService.addAnswerComment(this.comment).subscribe(res => {
            this.commentText = "";
            this.comment = res;
            this.question.answers.find(x => x.id == answerId).comments.push(this.comment);

        });
    }

    submitLike(questionId: string)
    {
        this.like = new Like();
        this.like.questionId = questionId;       

        this.dataService.addQuestionLike(this.like).subscribe(res => {
            this.question.likes.push(this.like);
        });
    }

    submitLikeForAnswer(answerId: string) {
        this.like = new Like();
        this.like.answerId = answerId;

        this.dataService.addAnswerLike(this.like).subscribe(res => {
            this.question.answers.find(x => x.id == answerId).likes.push(this.like);
        });
    }


}