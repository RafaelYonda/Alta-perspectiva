import { Injectable } from '@angular/core';
import {User, Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight, Keyword,UserInfoDetails} from './models';
import { CredentialViewModel }     from './models/models.profile';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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