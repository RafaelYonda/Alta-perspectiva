import { Component } from '@angular/core';
import { CredentialViewModel } from '../../../services/models/models.profile';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/blog-post/blog-post.component.html'
})
export class BlogPostComponent {
    credential: CredentialViewModel = new CredentialViewModel();
    constructor() {
    }
    ngOnInit() {
    }
}