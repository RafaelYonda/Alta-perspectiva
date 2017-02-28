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
    blogs: Blog[];
    userId: string;
    constructor(private _route: ActivatedRoute, private profileService: ProfileService) {
    }
    ngOnInit() {
        this._route.parent.params.subscribe(params => {
            this.profileService.GetBlogs(params['userId']).subscribe(res => {
                console.log(res);
                this.userId = params['userId'];
                this.blogs = res;
            });
        });
    }
    saveBlog() {
        console.log(this.blog);
        if ((this.blog.title.trim() == "") || (this.blog.url.trim() == ""))
            return;
        this.blog.userId = this.userId;
        this.profileService.SaveBlog(this.blog).subscribe(res => {
            console.log(res);
            // this.blogList.push(res);
            this.profileService.GetBlogs(this.userId).subscribe(blist => {
                this.blogs = blist;
            });
            this.blog = new Blog();
        });
    }
}