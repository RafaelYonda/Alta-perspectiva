import { Injectable } from '@angular/core';
import {User, Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight, Keyword} from './models';
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

    GetContact() {
        return this.GetSingleProfile('userprofile/api/getcontractinformation')
    }
    GetBiography() {
        return this.GetSingleProfile('userprofile/api/getbiography')
    }
    GetEducation() {
        return this.GetSingleProfile('userprofile/api/geteducation')
    }
    GetExperience() {
        return this.GetSingleProfile('userprofile/api/getexperience')
    }
    GetSkills() {
        return this.GetSingleProfile('userprofile/api/getskill')
    }
    GetPracticeArea() {
        return this.GetSingleProfile('userprofile/api/getpracticeArea')
    }
    GetInsight() {
        return this.GetSingleProfile('userprofile/api/getinsight')
    }
    //#endregion

    //#region ==========Save user profile single
    //SaveProfile(profileObj: any, url: string): Observable<any> {

    //    return this._http.post(url, profileObj)
    //        .map(this.extractData)
    //        .catch(this.handleError);
    //}

    SaveUserName(firstName: string) {
        let model = new FormData();
        model.append("firstName", firstName);
        model.append("lastName", '');
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
    //#endregion

    //#region =========Update user profile single========
    UpdateProfile(profileObj: any, url: string): Observable<any> {
        console.log(profileObj);
        console.log(url);
        return this._http.post(url, profileObj)
            .map(this.extractData)
            .catch(this.handleError);
    }
    UpdateContact(contact: Contact) {
        return this.UpdateProfile(contact, 'userprofile/api/updatecontact');
    }
    UpdateBiography(biography: Biography) {
        return this.UpdateProfile(biography, 'userprofile/api/updatebiography');
    }
    UpdateEducation(education: Education) {
        return this.UpdateProfile(education, 'userprofile/api/updateeducation');
    }
    UpdateExperience(experience: Experience) {
        return this.UpdateProfile(experience, 'userprofile/api/updateexperience');
    }
    UpdateInsight(insight: Insight) {
        return this.UpdateProfile(insight, 'userprofile/api/updateinsight');
    }
    //#endregion

    //Get user profiles
    GetProfile(url: string): Observable<any> {
        url = 'userprofile/api/getuserprofile';

        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    GetUser(): Observable<User> {
        var url = 'userprofile/api/getuser';
        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    GetTopFiveUser(): Observable<User[]> {

        return this._http.get('userprofile/api/gettopFiveUser')
            .map(this.extractData)
            .catch(this.handleError);
    }

    GetTopFiveUserByCategory(id): Observable<User[]> {

        return this._http.get('userprofile/api/' + id + '/gettopFiveUserbycategoryid')
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