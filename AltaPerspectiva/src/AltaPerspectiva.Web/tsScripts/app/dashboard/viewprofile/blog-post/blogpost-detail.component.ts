import { Component, EventEmitter } from '@angular/core';
import { Blog, BlogComment, BlogLike, BlogPost,UserViewModel } from '../../../services/models/models.blogpost';
import {UserInfoDetails} from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/blog-post/blogpost-detail.component.html',
    providers: [ProfileService],
})
export class BlogpostDetailComponent {
    blogId:string;
    blog: Blog;
    post: BlogPost = new BlogPost();
    blogposts: BlogPost[];
    userInfoDetails: UserInfoDetails
    close = new EventEmitter();
    constructor(private _route: ActivatedRoute, private profileService: ProfileService) {
    }
    ngOnInit() {
        console.log(this.post);
    }
    isEditDescription: boolean;
    isEditTitle: boolean;
  
    handleClick(event) {
        //removel the modal on clicking out side the panel
        //var idAttr = event.srcElement.attributes.id;
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        //removel the modal on clicking out side the panel
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    onClickedExit() {
        this.close.emit('event');
    }
}