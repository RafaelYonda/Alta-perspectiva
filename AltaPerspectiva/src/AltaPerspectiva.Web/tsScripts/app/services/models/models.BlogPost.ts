import { CredentialViewModel } from './models.profile';
export class BlogPost {
    id: string;
    title: string;
    description: string;
    userId: string;
    blogId:string;
    blogViewCount: number;
    createdOn:string;
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
    userViewModel: UserViewModel;
}
export class BlogLike {
    id: string;
    userId: string;
    blogPostId: string;
}
export class BlogComment {
    blogPostId: string;
    userId: string;
    commentText: string;
    createdOn: Date;
}
export class UserViewModel {
    userid: string;
    name: string;
    occupassion: string;
    imageUrl: string;
    credentialId: string;
}
