import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionResolver } from '../../services/resolve.services/question.resolver';
import { QuestionMenu, Question, Answer, Comment, AnswerViewModel, Like, DateName, LogInObj, User, QuestionReport, QuestionFollowing } from '../../services/models';
import { AuthenticationService } from '../../services/authentication.service';
import { QuestionAnswerService } from '../../services/question-answer.service';
//import { RelatedQuestionMenu } from '../question-left-menu/related-question-left-menu.component';
import { AnswerDialogComponent } from '../../shared/answer-dialog/answer-dialog.component';
import { loginModalComponent } from '../../shared/login-modal/login-modal.component';
//QuestionReport
import { QuestionReportComponent } from '../../shared/question-report/question-report.component';
@Component({
    selector: "question-details",
    templateUrl: 'question-details.component.html',
    providers: [QuestionResolver, QuestionAnswerService, AuthenticationService]
})
export class QuestionDetailComponent {
    date: DateName;
    route: any;
    error: any;
    id: string;
    _logObj: LogInObj;

    answerText: string;
    answerVM: AnswerViewModel;

    comment: Comment;
    commentText: string;
    commentAnswerText: string;

    like: Like;


    private sub: any;
    question: Question;

    showQuestionEditForm: boolean
    editTitle: string
    editBody: string

    isAnonymous: boolean;//anonymous added to 

    //Question report
    questionReports: QuestionReport[];
    //isFollowing: boolean;

    constructor(private router: Router, private _route: ActivatedRoute, private questionService: QuestionResolver,
        private dataService: QuestionAnswerService, private authService: AuthenticationService, private componentFactoryResolver: ComponentFactoryResolver) {
        this.route = _route;
        this.date = new DateName();
        var user: User = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        var currentUserName = localStorage.getItem('auth_token');
        var currentUserImage = localStorage.getItem('currentUserImage');
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
        this.route.data
            .subscribe((res: any) => {
                this.question = res.question;
                // save number of views of question
                this.dataService.increaseQuestionViewCount(this.question.id).subscribe((res: any) => {
                    this.question.viewCount += 1;
                });
                this.dataService.GetAnswersByQuestionId(this.question.id).subscribe((res: any) => {
                    this.question.answers = res;
                });
            });
    }
    QuestionFollowing(answer: AnswerViewModel) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }

        let questionFollowing = new QuestionFollowing();
        questionFollowing.questionId = answer.questionId;
        questionFollowing.answerId = answer.id;
        questionFollowing.followedUserId = answer.userId;


        this.dataService.QuestionFollowing(questionFollowing).subscribe((res: any) => {

            var isFollowing = this.question.answers.find(x => x.id == answer.id).isFollowing;
            for (var i = 0; i < this.question.answers.length; i++) {
                if (this.question.answers[i].userId == questionFollowing.followedUserId) {
                    this.question.answers[i].isFollowing = !(isFollowing == true);
                }
            }


        })
    }
    //anonymous checkbox
    onChange(event: boolean) {
        this.isAnonymous = event;
    }
    submitAnswer(_id: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;

        this.dataService.addAnswer(this.answerVM).subscribe(res => {

            this.answerVM = res;
            this.answerText = "";
            this.isAnonymous = false;
            this.dataService.GetQuestion(_id).subscribe(res => {
                this.question = res;
            });

        });
    }

    @ViewChild('answerAnchor', { read: ViewContainerRef }) answerAnchor: ViewContainerRef;

    answerDialogBox(question: Question) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        // Close any already open dialogs
        this.answerAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AnswerDialogComponent);
        let dialogComponentRef = this.answerAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question;
        dialogComponentRef.instance.isDetail = true;
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
            //this.dataService.GetQuestion(this.question.id).subscribe(res => {
            //    this.question = res;
            //});
            this.dataService.GetAnswersByQuestionId(this.question.id).subscribe((res: any) => {
                this.question.answers = res;
            });
        });
    }
    submitAnswerAsDraft(_id: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.answerVM = new AnswerViewModel();
        this.answerVM.questionId = _id;
        this.answerVM.text = this.answerText;
        this.answerVM.isAnonymous = this.isAnonymous;
        this.answerVM.isDrafted = true;

        this.dataService.addAnswer(this.answerVM).subscribe(res => {
            this.answerVM = res;
            this.answerText = "";
            this.isAnonymous = false;
            this.dataService.GetQuestion(_id).subscribe(res => {
                this.question = res;
            })
        });
    }

    submitComment(questionId: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
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
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.comment = new Comment();
        this.comment.answerId = answerId;
        this.comment.commentText = this.commentAnswerText;

        this.dataService.addAnswerComment(this.comment).subscribe(res => {
            this.commentText = "";
            this.comment = res;
            this.question.answers.find(x => x.id == answerId).comments.push(this.comment);

        });
    }

    submitLike(questionId: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.like = new Like();
        this.like.questionId = questionId;

        this.dataService.addQuestionLike(this.like).subscribe(res => {
            this.question.likes.push(this.like);
        });
    }

    submitLikeForAnswer(answerId: string, questionId: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.like = new Like();
        this.like.questionId = questionId;
        this.like.answerId = answerId;

        this.dataService.addAnswerLike(this.like).subscribe(res => {
            this.like.userId = res.userId;
            var douplicateLike = this.question.answers.find(x => x.id == answerId).likes.find(x => x.userId == res.userId && x.answerId == answerId);
            if (douplicateLike == undefined) {
                this.question.answers.find(x => x.id == answerId).likes.push(this.like);
            }

        });
    }

    onQuestionDetailClicked(showEditForm: boolean) {
        this.showQuestionEditForm = showEditForm;
        this.editTitle = this.question.title;
        this.editBody = this.question.body;
    }

    @ViewChild('questionReport', { read: ViewContainerRef }) questionReport: ViewContainerRef;

    onQuestionReportClicked(showQuestionReportModal: any) {

        this.questionReport.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(QuestionReportComponent);
        let dialogComponentRef = this.questionReport.createComponent(dialogComponentFactory);

        this.dataService.GetReport(showQuestionReportModal.answerId).subscribe(res => {
            this.questionReports = res;
            dialogComponentRef.instance.questionReports = this.questionReports;
            dialogComponentRef.instance.questionId = showQuestionReportModal.questionId;
            dialogComponentRef.instance.answerId = showQuestionReportModal.answerId;

        });


        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }


    updateQuestion() {
        var qv = new Question();
        qv.title = this.editTitle;
        qv.body = this.editBody;
        qv.id = this.question.id;

        this.dataService.updateQuestion(qv).subscribe(res => {
            this.question.title = res.title;
            this.question.body = this.editBody;
            this.showQuestionEditForm = false;

        });
    }

    GetLatestAnswer(questionId: string) {
        this.dataService.GetLatestAnswer(questionId).subscribe(res => {
            this.question = res;
        })
    }
    hideMenu() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    }
    gotoProfile() {
        this.router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    }
    GetBestAnswer(questionId: string) {
        this.dataService.GetBestAnswer(questionId).subscribe(res => {
            this.question = res;
        })
    }
    @ViewChild('logginAnchor', { read: ViewContainerRef }) logginAnchor: ViewContainerRef;
    ShowNotLoggedIn() {
        this.logginAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        let dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
}