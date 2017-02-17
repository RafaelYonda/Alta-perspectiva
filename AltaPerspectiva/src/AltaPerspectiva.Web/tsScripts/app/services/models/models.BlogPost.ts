export class BlogPost {
    id: string;
    title: string;
    description: string;
    userId: string;
    blogViewCount: number;
    blogComments: BlogComment[];
}
export class Blog {
    id: string;
    userId: string;
    title: string;
    url: string;
    description: string;
    blogs: BlogPost[];
}
export class BlogComment {
    id: string;
    userId: string;
    commentText: string;
    commentDate: Date;
    blogPostId: string;
}
export class BlogLike {
    id: string;
    userId: string;
    blogPostId: string;
}