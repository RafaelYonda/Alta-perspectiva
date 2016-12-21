import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Config } from './models';

@Injectable()
export class ConfigService {

    constructor(private _http: Http) {       
    }

    getConfig(): Observable<Config> {
        return this._http.get('/questions/api/questions/config')
            .map(this.extractData)
            .catch(this.handleError)
            .publishReplay(1)
            .refCount();  ;
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