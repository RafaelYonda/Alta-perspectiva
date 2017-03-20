import { Component, Input, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { ProfileService } from '../../../services/profile.service';
import {LogInObj, User } from '../../../services/models';
import { BlogPost, BlogLike, BlogComment } from '../../../services/models/models.blogpost';
import { loginModalComponent } from '../../../shared/login-modal/login-modal.component';
import { CredentialViewModel }     from '../../../services/models/models.profile';
@Component({
    selector: 'blogpost-comment',
    templateUrl: 'js/app/dashboard/viewprofile/blog-post/post-comment.component.html',
    styleUrls: ['js/app/dashboard/viewprofile/blog-post/post-comment.component.css'],
    providers: [BlogService]
})
export class BlogpostCommentComponent {

    commentText: string;
    comment: BlogComment = new BlogComment();
    comments: BlogComment[];

    _logObj: LogInObj;
    imageLink:string;
    @Input() blogPost: BlogPost;

    @Output() sendCommentCount = new EventEmitter<any>();

    constructor(private commentService: BlogService, private componentFactoryResolver: ComponentFactoryResolver, private profileService: ProfileService) {
        //var user: User = new User();
        //user.userId = '-1';
        //this._logObj = { isLoggedIn: false, user: user };
    }
    ngOnInit() {
        this.comments = this.blogPost.comments;
            
        var currentUserName = localStorage.getItem('auth_token');
        this._logObj = localStorage.getItem('currentUserObject') as any;
        if (!this._logObj)
            this._logObj = new LogInObj();
        if (currentUserName != null) {
            this.imageLink = localStorage.getItem('urrentUserImage');
        } else {
            this.imageLink = '../../images/avatar.png';
        }
    }

    submitComment(blogPostId: string) {
        var token = localStorage.getItem('auth_token');
        if (!token) {
            this.ShowNotLoggedIn();
            return;
        }

        if (!this.comment.commentText|| this.comment.commentText.trim() == "")
            return;
        this.comment.blogPostId = blogPostId;
        this.comment.userId = this.blogPost.userId;
        this.commentService.addPostComment(this.blogPost.id, this.comment).subscribe(res => {
            //  this.pushComment(res);
            this.blogPost.comments.push(res);
            this.comment.commentText = '';
        });

        this.sendCommentCount.emit(null);
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