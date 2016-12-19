import { Injectable } from '@angular/core';
import {Profile, Contact, Keyword} from './models';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileService {
    static instance: ProfileService;
    profile: Profile;
    //constructor() {
       
    //}
    constructor(private _http: Http) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));

        let options = new RequestOptions({ headers: headers });
        this.profile = new Profile();
        return ProfileService.instance = ProfileService.instance || this;
    }
    //constructor() {
    //    this.profile = new Profile();
    //}
    //getProfileObj(): Profile {
    //    return ProfileService.profile;
    //}questions/api/categories/keywords
    SaveProfile(contact: Contact): Observable<Contact> {
        console.log(contact);
        return this._http.post('/questions/api/categories/contact', contact)
        //return this._http.get('/questions/api/categories/keywords')
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