var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
var ImageUploadService = (function () {
    function ImageUploadService(http) {
        this.http = http;
        this.http = http;
    }
    ImageUploadService.prototype.upload = function (fileToUpload, userId) {
        var _urlParams = new URLSearchParams();
        var model = new FormData();
        model.append("file", fileToUpload);
        model.append("userId", userId);
        return this.http
            .post("/userprofile/api/credential/saveuserimage/", model);
    };
    ImageUploadService.prototype.uploadCroppedImage = function (fileBase64, userId, imageName) {
        var _urlParams = new URLSearchParams();
        var model = new FormData();
        model.append("file", fileBase64);
        model.append("userId", userId);
        model.append("imageName", imageName);
        return this.http
            .post("/userprofile/api/credential/saveusercroppedimage/", model);
    };
    ImageUploadService.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    return ImageUploadService;
}());
ImageUploadService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ImageUploadService);
export { ImageUploadService };
