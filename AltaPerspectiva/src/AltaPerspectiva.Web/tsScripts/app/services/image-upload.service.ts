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

    postWithFile(files: Image[]): Observable<any> {

        console.log(files);
        let headers = new Headers();
        let formData: FormData = new FormData();
        formData.append('files', files[0], files[0].title);
        // For multiple files
        // for (let i = 0; i < files.length; i++) {
        //     formData.append(`files[]`, files[i], files[i].name);
        // }

        //if (postData !== "" && postData !== undefined && postData !== null) {
        //    for (var property in postData) {
        //        if (postData.hasOwnProperty(property)) {
        //            formData.append(property, postData[property]);
        //        }
        //    }
        //}
        //console.log(formData);
        return this.http.post('userprofile/api/fileupload', formData)
            .map(this.extractData)
            .catch(this.handleError);
        //var returnReponse = new Promise((resolve, reject) => {
        //    this.http.post('userprofile/api/fileupload', formData).subscribe(
        //        res => {
        //            this.responseData = res.json();
        //            //resolve(this.responseData);
        //        },
        //        error => {
        //            //this.router.navigate(['/login']);
        //            reject(error);
        //        }
        //        );
        //});
        //return returnReponse;
    }

    upload(fileToUpload: any) {
        console.log(fileToUpload);
        let input = new FormData();
        input.append("file", fileToUpload[0]);
        console.log(input);
        return this.http
            .post("/userprofile/api/fileupload", input);
    }
    private extractData(res: Response) {
        let body;

        // check if empty, before call json
        if (res.text()) {
            body = res.json();
        }

        return body || {};
    }

    public makeFileRequest(files: File[]): Observable<any> {
        console.log(files);
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            console.log(formData);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.onerror = function () {
                console.log("Error while calling Web API");
            }
            //xhr.setRequestHeader("Content-type", "image");
            xhr.setRequestHeader("content-type",
                "undefined");

            //xhr.upload.onprogress = (event) => {
            //    this.progress = Math.round(event.loaded / event.total * 100);

            //    this.progressObserver.next(this.progress);
            //};

            xhr.open('POST', 'userprofile/api/fileupload', true);
            xhr.send(formData);
        });
    }
public updateFileRequest(files: File[]): Observable<any> {
        console.log(files);
        return Observable.create(observer => {
            let formData: FormData = new FormData(),
                xhr: XMLHttpRequest = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            console.log(formData);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.onerror = function () {
                console.log("Error while calling Web API");
            }
            //xhr.setRequestHeader("Content-type", "image");
            xhr.setRequestHeader("content-type",
                "undefined");

            //xhr.upload.onprogress = (event) => {
            //    this.progress = Math.round(event.loaded / event.total * 100);

            //    this.progressObserver.next(this.progress);
            //};

            xhr.open('POST', 'userprofile/api/updateuserimage', true);
            xhr.send(formData);
        });
    }
}