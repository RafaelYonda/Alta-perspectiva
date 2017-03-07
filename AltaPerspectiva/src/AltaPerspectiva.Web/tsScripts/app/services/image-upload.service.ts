import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Headers, Response, Request, RequestMethod, URLSearchParams, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';
declare var $: any;

@Injectable()
export class ImageUploadService {
    requestUrl: string;
    responseData: any;
    handleError: any;

    constructor(
        private http: Http
    ) {
        this.http = http;
    }

    upload(fileToUpload: any, userId: string) {
        let _urlParams = new URLSearchParams();
        let model = new FormData();
        model.append("file", fileToUpload);
        model.append("userId", userId);
        return this.http
            .post("/userprofile/api/credential/saveuserimage/", model);
    }
    uploadCroppedImage(fileBase64: string, userId: string, imageName:string) {
        let _urlParams = new URLSearchParams();
        let model = new FormData();
        model.append("file", fileBase64);
        model.append("userId", userId);
        model.append("imageName", imageName);
        return this.http
            .post("/userprofile/api/credential/saveusercroppedimage/", model);
    }
    private extractData(res: Response) {
        let body;
        
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }
}