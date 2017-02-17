import { Component } from '@angular/core';
import { Blog, BlogComment, BlogLike, BlogPost } from '../../../services/models/models.blogpost';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/blog-create/blog-create.component.html',
    providers: [ProfileService],
})
export class BlogCreateComponent {
    blog: Blog = new Blog();
    userId:string;
    constructor(private _route: ActivatedRoute,private profileService: ProfileService) {
    }
    ngOnInit() {
        this._route.parent.params.subscribe(params => {
            this.profileService.GetBlog(params['userId']).subscribe(res => {
                console.log(res);
                this.userId = params['userId'];
                this.blog = res;
            });
        });
        
    }
    saveBlog() {
        console.log(this.blog);
        this.blog.userId = this.userId;
        this.profileService.SaveBlog(this.blog).subscribe(res => {
            console.log(res);
        });
    }
}