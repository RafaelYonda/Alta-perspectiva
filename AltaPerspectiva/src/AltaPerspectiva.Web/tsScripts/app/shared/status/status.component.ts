﻿import { Component, Input, ElementRef, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { StatusService } from '../../services/status.service';
import { SITE_URL } from '../../../globals';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Question, Answer, Like, User } from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { QuestionService } from '../../services/question.service';
import { loginModalComponent } from '../login-modal/login-modal.component';
import { CommunicationService, CommnetCountEventArg } from '../../services/communication.service';
import { LikeComponent } from '../like-modal/like.component';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';
@Component({
    selector: 'ap-status',
    templateUrl: 'status.component.html',
    providers: [StatusService, QuestionService]
})
export class StatusComponent {
    @Input() questionObj: Question;
    @Input() answerObj: Answer;
    @Input() isQuestion: any;

    @Output() onQuestionDetailClicked = new EventEmitter<boolean>();
    @Output() onQuestionReportClicked = new EventEmitter<any>();

    answerTagsRemoved: string;
    fbImageTag: string;

    commentId: string;
    CommentCount: number;
    like: Like;
    likedUsers: User[];
    loggedinUser: User;
    twitterShareTitle: string;
    shareurl: string;
    isQuestionEditable = false;
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private fb: FacebookService, private _authService: AuthenticationService, private statusService: StatusService, private dataService: QuestionAnswerService, private communicationService: CommunicationService, private questionService: QuestionService, public toastr: ToastsManager) {

    }

    ngOnInit() {
        
        //this._authService.getLoggedinObj().subscribe(res => {
        //    this.loggedinUser = res;
        //});
        this.getLoggedinObjct();
        this.questionObj.shareUrl = encodeURI(SITE_URL + "/question/detail/" + this.questionObj.id);
        if (this.questionObj.bestAnswer && this.questionObj.bestAnswer.text) {
            var temp = this.questionObj.bestAnswer.text.replace(/<\/?[^>]+(>|$)/g, "");
            this.answerTagsRemoved = temp.replace("&nbsp;", " ");
        }
        if (this.isQuestion) {
            this.commentId = this.questionObj.id;
            this.CommentCount = this.questionObj.comments ?this.questionObj.comments.length : 0;
        }
        else {
            this.commentId = this.answerObj.id;
            this.CommentCount = this.answerObj.comments ? this.answerObj.comments.length : 0;
            if (this.answerObj.text) {
                var temp = this.answerObj.text.replace(/<\/?[^>]+(>|$)/g, "");
                this.answerObj.answerTagsRemoved = temp.replace("&nbsp;", " ");
            }
        }

        this.communicationService.getCommentsCount().subscribe((eventArg: CommnetCountEventArg) => {

            if (this.isQuestion) {
                if (this.questionObj.id == eventArg.QuestionId)
                    this.CommentCount = eventArg.Count;
            }
            else {
                if (this.answerObj.id == eventArg.AnswerId)
                    this.CommentCount = eventArg.Count;
            }
        });
        //share url=======
        var API_URL = this.isQuestion ? '/SocialShare/ShareQuestionInSocialMedia/' : '/SocialShare/ShareAnswerInSocialMedia/';
        var urlId = this.isQuestion ? this.questionObj.id.toString() : this.answerObj.id.toString();
        this.shareurl = SITE_URL + API_URL + urlId
        this.twitterShareTitle = this.questionObj.title;
        if (this.twitterShareTitle.length > 36) {
            this.twitterShareTitle = this.twitterShareTitle.substring(0, 36) + '...';
        } else {
            this.twitterShareTitle = this.twitterShareTitle + '...';
        }
    }
    socialShare() {
        console.log("share FB");
        let initParams: InitParams = {
            appId: '510199349333959',
            xfbml: true,
            cookie: true,
            version: 'v2.10'
        };
        var API_URL = this.isQuestion ? '/SocialShare/ShareQuestionInSocialMedia/' :'/SocialShare/ShareAnswerInSocialMedia/'
        this.fb.init(initParams);
        var urlId = this.isQuestion ? this.questionObj.id.toString() : this.answerObj.id.toString();
        let params: UIParams = {
            //href: SITE_URL + "/question/detail/" + this.questionObj.id,
            href: SITE_URL + API_URL + urlId,
            method: 'share',
            display: 'popup',
            name: this.questionObj.title,
            description: this.questionObj.title
        };
        console.log(params);
        this.fb.ui(params)
            .then((res: UIResponse) => console.log(res))
            .catch((e: any) => console.error(e));
    }

    linkedinShare() {
        
    }
    getLoggedinObjct() {
        var currentUser = localStorage.getItem('auth_token');
        if (currentUser == null) {
            this.loggedinUser = null;
            return;
        }

        else {
            var userId = localStorage.getItem('currentUserId');
            //Get the user if not loaded yet
            if (!userId)
                this.getUser();
            else {
                this.loggedinUser = new User();
                this.loggedinUser.userId = userId;
                this.loggedinUser.name = localStorage.getItem('currentUserName');
                this.loggedinUser.imageUrl = localStorage.getItem('currentUserImage');
                this.setQuestionEditable();
            }
        }
    }
    getUser() {
        this._authService.getLoggedinObj().subscribe(res => {            
            this.loggedinUser = res;
            this.setQuestionEditable();
        });
    }
    setQuestionEditable() {
        //-----if logged in user id and question userId same then make question editable---
        if (this.questionObj.userViewModel.userId)
            if (this.questionObj.userViewModel.userId == this.loggedinUser.userId)
                this.isQuestionEditable = true;
    }
    copyClipboard() {
    }
    postClikced(questionId: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.questionService.postQuestionBlog(questionId).subscribe(res => {
            if (res.result == true) {
                this.toastr.success('Esta pregunta está publicada en tu perfil.', '¡Perfecto!');
            } else {
                this.toastr.warning('Esta pregunta ya está publicada en tu perfil.', 'Advertencia!!!');
            }

        });
    }
    sendCommentCountToApStatus(param: any) {
    }
    bookmarkClicked(questionId: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.dataService.addBookMark(questionId).subscribe(res => {
            if (res.result == true) {
                this.toastr.success('El marcador se ha agregado correctamente.', '¡Perfecto!');
            } else {
                this.toastr.warning('Ya has marcado esta pregunta.', 'Advertencia!!!');
            }
        });
    }

    questionEditClicked() {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        if (this.loggedinUser.userId != this.questionObj.userViewModel.userId)
            this.toastr.error("Esta pregunta no la puedes editar.");
        else
            this.onQuestionDetailClicked.emit(true);
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
    }

    submitLike(answerId: string, questionId: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.like = new Like();
        this.like.answerId = answerId;
        this.like.questionId = questionId;
        //Question
        if (answerId == null && questionId != null) {
            //this.dataService.getQuestionAlreadyLiked(questionId).subscribe(res => {            
            //    if (res.result == true) return; 
            //    else {
            this.dataService.addQuestionLike(this.like).subscribe(res => {
                if (res.result == true) {
                    this.questionObj.likes.push(this.like);
                }

            });

            //    }              
            //});
        }
        ///Answer
        else if (answerId != null || questionId != null) {
            //this.dataService.getAnswerAlreadyLiked(answerId).subscribe(res => {
            //    if (res.result == true) return;
            //    else {
            //        this.dataService.addAnswerLike(this.like).subscribe(res => {
            //            this.questionObj.answers.find(x => x.id == answerId).likes.push(this.like);
            //        });
            //    }
            //}
            this.dataService.addAnswerLike(this.like).subscribe(res => {
                if (res.result == true) {
                    this.questionObj.answers.find(x => x.id == answerId).likes.push(this.like);
                }
            });

        }
    }

    showLikeUserDetails(answerId: string, questionId: string) {

    }
    questionReportClicked(questionId: string, answerId: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }
        this.onQuestionReportClicked.emit({ questionId: questionId, answerId: answerId });
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
    @ViewChild('likeAnchor', { read: ViewContainerRef }) likeAnchor: ViewContainerRef;
    ShowLikeCount() {
        this.logginAnchor.clear();
        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LikeComponent);
        let dialogComponentRef = this.likeAnchor.createComponent(dialogComponentFactory);
        if (this.isQuestion) {
            this.statusService.showLikeUserDetailsByQuestion(this.questionObj.id).subscribe(res => {
                this.likedUsers = res;
                dialogComponentRef.instance.likedUsers = this.likedUsers;
                dialogComponentRef.instance.close.subscribe(() => {
                    dialogComponentRef.destroy();
                });
            });
        }
        else {
            this.statusService.showLikeUserDetailsByAnswer(this.answerObj.id).subscribe(res => {
                this.likedUsers = res;

                //let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LikeComponent);
                //let dialogComponentRef = this.likeAnchor.createComponent(dialogComponentFactory);
                dialogComponentRef.instance.likedUsers = this.likedUsers;
                dialogComponentRef.instance.close.subscribe(() => {
                    dialogComponentRef.destroy();
                });
            });
        }

    }
}