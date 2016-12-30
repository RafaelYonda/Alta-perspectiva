import { Injectable } from '@angular/core';
import {User,Profile, Contact, Biography, Education, Experience, Skills, PracticeArea, Insight, Keyword} from './models';
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

    SaveProfile(profileObj: any,url:string): Observable<any> {
        console.log(profileObj); 
        return this._http.post(url, profileObj)
            .map(this.extractData)
            .catch(this.handleError);
    }

    SaveContact(contact: Contact) {
        return this.SaveProfile(contact, 'userprofile/api/setcontractinformation')
    }
   
    SaveBiography(biography: Biography) {
        return this.SaveProfile(biography, 'userprofile/api/setbiography')
    }
    SaveEducation(education: Education) {
        education.timeFrameFrom = new Date(education.startDate == null ? 1 : education.startDate, 1);
        education.timeFrameTo = new Date(education.endDate == null ? 1 : education.endDate, 1);
        return this.SaveProfile(education, 'userprofile/api/seteducation')
    }
    SaveExperience(experience: Experience) {
        experience.timePeriodFrom = new Date(experience.startYear == null ? 1 : experience.startYear, experience.startMonth == null ? 1 : experience.startMonth);
        experience.timePeriodTo = new Date(experience.endYear, experience.endMonth);
        return this.SaveProfile(experience, 'userprofile/api/setexperience')
    }
    SaveSkills(skills: Skills) {
        return this.SaveProfile(skills, 'userprofile/api/setskill')
    }
    DeleteSkills(skills: Skills) {
        return this.SaveProfile(skills, 'userprofile/api/deleteskill')
    }
    SavePracticeArea(praqcticeArea: PracticeArea) {
        return this.SaveProfile(praqcticeArea, 'userprofile/api/setpracticeArea')
    }
    SaveInsight(insight: Insight) {
        insight.publicationDate = new Date(insight.dateYear, insight.dateMonth);
        return this.SaveProfile(insight, 'userprofile/api/setinsight')
    }
    private extractData(res: Response) {
        let body;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }

    GetUser(): Observable<User> {
       var  url = 'userprofile/api/getuser';
        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    GetProfile(url: string): Observable<any> {
        url = 'userprofile/api/getuserprofile';
        console.log(url);
        return this._http.get(url )
            .map(this.extractData)
            .catch(this.handleError);
    }
    GetContact() {
        return this.GetProfile('userprofile/api/getuserprofile')
    }
    GetBiography() {
        return this.GetProfile('userprofile/api/getbiography')
    }
    GetEducation() {
        return this.GetProfile('userprofile/api/geteducation')
    }
    GetExperience() {
        return this.GetProfile('userprofile/api/getexperience')
    }
    GetSkills() {
        return this.GetProfile('userprofile/api/getskill')
    }
    GetPracticeArea() {
        return this.GetProfile('userprofile/api/getpracticeArea')
    }
    GetInsight() {
        return this.GetProfile('userprofile/api/getinsight')
    }


    //Update added 
     UpdateProfile(profileObj: any,url: string): Observable<any> {
         console.log(profileObj);
        console.log(url);
        return this._http.get(url )
            .map(this.extractData)
            .catch(this.handleError);
    }
    UpdateContact(contact: Contact) {
        return this.UpdateProfile(contact,'userprofile/api/updatecontact');
    }
     UpdateBiography(biography: Biography) {
        return this.UpdateProfile(biography,'userprofile/api/updatebiography');
    }
    UpdateEducation(education: Education) {
        return this.UpdateProfile(education,'userprofile/api/updateeducation');
    }
    UpdateExperience(experience: Experience) {
        return this.UpdateProfile(experience,'userprofile/api/updateexperience');
    }
    UpdateInsight(insight: Insight) {
            return this.UpdateProfile(insight,'userprofile/api/updateinsight');
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