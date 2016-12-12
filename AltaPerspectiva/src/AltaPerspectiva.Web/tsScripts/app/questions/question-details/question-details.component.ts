import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
import {QuestionMenu, Question, Answer, Comment, AnswerViewModel, DateName} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
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
                console.log(this.question.comments);
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

    submitLike(questionId: string)
    {
        console.log(questionId);
    }


}