import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Profile} from '../models';

@Injectable()
export class AuthResolver implements Resolve<Profile> {

    constructor(private _http: Http) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));

        let options = new RequestOptions({ headers: headers });
    }
    GetLoggedInUser(): Observable<any> {
        var url = '/userprofile/api/getuser/';
        console.log(url);
        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        //let id = route.params['id'];
        var result = this.GetLoggedInUser();
        console.log(result);
        return result;
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