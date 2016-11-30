import { Injectable } from '@angular/core';
import { Category } from './models';
import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class CategoryService {
    public catagories: Category[]
    constructor(private _http: Http) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));

        let options = new RequestOptions({ headers: headers });
    }
    getAllCategories(): Observable<Category[]> {
        return this._http.get('/questions/api/categories/')
            .map(this.extractData)
            .catch(this.handleError);
        //return [
        //    { id: 1, name: 'Ver todas', icon: 'icon-star', active: 'active' },
        //    { id: 2, name: 'Finanzas', icon: 'icon-chart', active: '' },
        //    { id: 3, name: 'Gestión humana', icon: 'icon-users', active: '' },
        //    { id: 4, name: 'Liderazgo', icon: 'icon-people', active: '' },
        //    { id: 5, name: 'Procesos', icon: 'icon-process', active: '' },
        //    { id: 6, name: 'Estrategia', icon: 'icon-dice', active: '' },
        //    { id: 8, name: 'Gestión humana', icon: 'icon-users', active: '' },
        //    { id: 9, name: 'Liderazgo', icon: 'icon-people', active: '' },
        //    { id: 10, name: 'Finanzas', icon: 'icon-chart', active: '' }
        //];
    }

    getCategories(): Category[] {

        return [
            { id: 1, name: 'Ver todas', icon: 'icon-star', active: 'active' },
            { id: 2, name: 'Finanzas', icon: 'icon-chart', active: '' },
            { id: 3, name: 'Gestión humana', icon: 'icon-users', active: '' },
            { id: 4, name: 'Liderazgo', icon: 'icon-people', active: '' },
            { id: 5, name: 'Procesos', icon: 'icon-process', active: '' },
            { id: 6, name: 'Estrategia', icon: 'icon-dice', active: '' },
            { id: 8, name: 'Gestión humana', icon: 'icon-users', active: '' },
            { id: 9, name: 'Liderazgo', icon: 'icon-people', active: '' },
            { id: 10, name: 'Finanzas', icon: 'icon-chart', active: '' }
        ];
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