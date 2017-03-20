import { CredentialViewModel } from './models.profile';

export class BlogPost {
    id: string;
    blogId: string;
    userId: string;
    user: UserViewModel;
    title: string;
    description: string;
    blogViewCount: number;
    createdOn: string;
    comments: BlogComment[];
    likes: BlogLike[];
    shareUrl:string;
    constructor() {
        this.comments = new Array();
        this.likes = new Array();
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
    user: UserViewModel;
}


export class BlogLike {
    id: string;
    userId: string;
    user: UserViewModel
    blogPostId: string;
}


export class BlogComment {
    Id: string;
    blogPostId: string;
    userId: string;
    user: UserViewModel
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
