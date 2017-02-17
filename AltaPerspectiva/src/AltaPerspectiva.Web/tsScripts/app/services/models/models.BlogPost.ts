import { CredentialViewModel } from './models.profile';
export class BlogPost {
    id: string;
    title: string;
    description: string;
    userId: string;
    blogViewCount: number;
    blogComments: BlogComment[];
    blogLike: BlogLike[];
    constructor() {
        this.blogComments = new Array();
        this.blogLike = new Array();
    }
}
export class Blog {
    id: string;
    userId: string;
    title: string;
    url: string;
    description: string;
    blogs: BlogPost[];
    credential: CredentialViewModel;
}
export class BlogLike {
    id: string;
    userId: string;
    blogPostId: string;
}
export class BlogComment {
    userId: string;
    commentText: string;
    createdOn: Date;
}
