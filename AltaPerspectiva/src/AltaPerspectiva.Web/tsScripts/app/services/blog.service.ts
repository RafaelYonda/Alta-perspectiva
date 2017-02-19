import { Injectable } from '@angular/core';
import { BlogLike, Blog, BlogComment, BlogPost} from './models/models.blogpost';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class BlogService {

    constructor(private _http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        let options = new RequestOptions({ headers: headers });
    }
    addPostLike(postIdId: string, like: BlogLike): Observable<any> {
        return this._http.post('/questions/api/categories/addfollowers/' + postIdId, null)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getPostLikeByPostId(): Observable<BlogLike> {
        return this._http.get('/questions/api/categories/')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();        
    }
    getPostAlreadyLiked(postId: string): Observable<boolean> {
        return this._http.get('/questions/api/categories/')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
    }
    showLikeUserDetailsByBlogPost(postId: string): Observable<boolean> {
        return this._http.get('/questions/api/categories/')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
    }
    addPostComment( comment: BlogComment): Observable<any> {
        return this._http.post('/questions/api/categories/addfollowers/' , null)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getPostCommentsByPostId(postId: string): Observable<BlogComment[]> {
        return this._http.get('/questions/api/categories/')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();
    }
   
    private extractData(res: Response) {
        let body;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}