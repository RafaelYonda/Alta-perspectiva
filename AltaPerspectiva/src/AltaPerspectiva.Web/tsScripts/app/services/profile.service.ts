import { Injectable } from '@angular/core';
import {User, Profile, Contact, Biography, Experience, Skills, PracticeArea, Insight, Keyword, } from './models';
import { UserInfoDetails }     from './models/models.profile';
import { Blog, BlogComment, BlogLike, BlogPost } from './models/models.blogpost';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//Models
import { CredentialViewModel }     from './models/models.profile';
import {  ProfileParameter }     from './models/models.ProfileParameter';
import {  Employment }     from './models/models.profile';
import {  Education }     from './models/models.Education';
import {  Place }     from './models/models.Place';
import {  OtherExperience }     from './models/models.OtherExperience';
import {  CategoryWiseAnswer }     from './models/models.CategoryWiseAnswer';

@Injectable()
export class ProfileService {
    static instance: ProfileService;
    profile: Profile;
    constructor(private _http: Http) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));

        let options = new RequestOptions({ headers: headers });
        this.profile = new Profile();
        return ProfileService.instance = ProfileService.instance || this;
    }
    //#region  ======= Get user profiles by type==========
    GetSingleProfile(url: string): Observable<any> {
        //url = 'userprofile/api/getuserprofile';

        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    userInfoDetails(userId: string): Observable<UserInfoDetails> {
        return this._http.get('userprofile/api/userinfodetails/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    }

    SaveUserName(firstName: string, lastName:string,userId:string) {
        let model = new FormData();
        model.append("firstName", firstName);
        model.append("lastName", lastName);
        model.append("userId", userId);
        return this._http.post('userprofile/api/credential/savefirstnamelastname', model)
            .map(this.extractData)
            .catch(this.handleError);
    }
    saveCredential(profileObj: any, url: string): Observable<any> {
        return this._http.post(url, profileObj)
            .map(this.extractData)
            .catch(this.handleError);
    }
    saveCredentialTitle(credential: CredentialViewModel) {
        return this.saveCredential(credential, 'userprofile/api/credential/update');        
    }

    saveDescription(credential: CredentialViewModel) {
        return this.saveCredential(credential, 'userprofile/api/credential/update');
    }
   
    GetUserCredential(): Observable<CredentialViewModel> {
        var url = 'userprofile/api/credential/getusercredential';
        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }
    GetTopFiveUserByCategory(id): Observable<User[]> {

        return this._http.get('userprofile/api/' + id + '/gettopFiveUserbycategoryid')
            .map(this.extractData)
            .catch(this.handleError);
    }

    GetFollowersByUserId(userId): Observable<User[]> {
        return this._http.get('userprofile/api/followerbyuserid/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    GetFollowingsByUserId(userId): Observable<User[]> {
        return this._http.get('userprofile/api/followingbyuserId/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    GetUsercredentialByUserId(userId): Observable<CredentialViewModel> {
        return this._http.get("userprofile/api/credential/getusercredentialbyuserid/" + userId)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getProfileParameter(userId: string): Observable<ProfileParameter> {
        return this._http.get('userprofile/api/getprofileparameter/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getCategoryWiseAnswer(userId: string): Observable<CategoryWiseAnswer[]> {
        return this._http.get('userprofile/api/categorywiseanswer/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    //===========viewcount
    ProfileViewCount(userId: string): Observable<any> {
        return this._http.post('userprofile/api/profileviewcount/'+userId,userId)
            .map(this.extractData).catch(this.handleError);
    }

    AddEmployment(employment: Employment):Observable<any> {
        return this._http.post('userprofile/api/employment/addemployment', employment)
            .map(this.extractData)
            .catch(this.handleError);
    }
    AddEducation(education: Education): Observable<any> {
        return this._http.post('userprofile/api/education/addeducation', education)
            .map(this.extractData)
            .catch(this.handleError);
    }
    AddPlace(place: Place): Observable<any> {
        return this._http.post('userprofile/api/place/addplace', place)
            .map(this.extractData)
            .catch(this.handleError);
    }

    AddOtherExperience(otherExperience: OtherExperience): Observable<any> {
        return this._http.post('userprofile/api/OtherExperience/addOtherExperience', otherExperience)
            .map(this.extractData)
            .catch(this.handleError);
    }
    //=====blog and hi=this post==
    GetBlogs(userId: string): Observable<Blog[]> {
        return this._http.get('blog/api/getblogs/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    GetBlogById(id: string): Observable<Blog> {
        return this._http.get('blog/api/getblogbyid/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    SaveBlog(blog: Blog): Observable<Blog> {
        return this._http.post('blog/api/saveblog', blog)
            .map(this.extractData)
            .catch(this.handleError);
    }
    UpdateBlog(blog: Blog): Observable<Blog> {
        return this._http.post('blog/api/updateblog', blog)
            .map(this.extractData)
            .catch(this.handleError);
    }
    GetBlogPosts(userId: string): Observable<BlogPost[]> {
        return this._http.get('blog/api/getblogpost/'+ userId)
            .map(this.extractData)
            .catch(this.handleError);
    }
    GetBlogPostsByBlogId(blogId: string): Observable<BlogPost[]> {
        return this._http.get('blog/api/getblogpostsbyblogid/' + blogId)
            .map(this.extractData)
            .catch(this.handleError);
    }
   
    SaveBlogPost(blogPost: BlogPost): Observable<any> {
        return this._http.post('blog/api/saveblogpost', blogPost)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    DeleteBlogPost(blogPostId: string): Observable<any> {
        return this._http.post('blog/api/deleteblogpost/' + blogPostId, blogPostId)
            .map(this.extractData)
            .catch(this.handleError);
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