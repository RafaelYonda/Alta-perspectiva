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
    updateDescription() {

        this.profileService.UpdateBlog(this.blog).subscribe(res => {
            this.isEditDescription = false;
        });
    }
    updateTitle() {

        this.profileService.UpdateBlog(this.blog).subscribe(res => {
            this.isEditTitle = false;
        });
    }
    
    //saveBlogPost() {
    //    this.post.blogId = this.blogId;
    //    console.log(this.post);
    //    this.profileService.SaveBlogPost(this.post).subscribe(res => {
    //        console.log(res);
    //        this.profileService.GetBlogPostsByBlogId(this.blogId).subscribe(res => {
    //            console.log(res);
    //            this.blogposts = res;
    //        });
    //    });
        
    //}
    onClickedExit() {
        this.close.emit('event');
    }
}