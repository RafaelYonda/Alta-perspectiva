var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Profile } from './models';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var ProfileService = ProfileService_1 = (function () {
    function ProfileService(_http) {
        this._http = _http;
        var headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        var options = new RequestOptions({ headers: headers });
        this.profile = new Profile();
        return ProfileService_1.instance = ProfileService_1.instance || this;
    }
    ProfileService.prototype.GetSingleProfile = function (url) {
        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.userInfoDetails = function (userId) {
        return this._http.get('userprofile/api/userinfodetails/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.SaveUserName = function (firstName, lastName, userId) {
        var model = new FormData();
        model.append("firstName", firstName);
        model.append("lastName", lastName);
        model.append("userId", userId);
        return this._http.post('userprofile/api/credential/savefirstnamelastname', model)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.saveCredential = function (profileObj, url) {
        return this._http.post(url, profileObj)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.saveCredentialTitle = function (credential) {
        return this.saveCredential(credential, 'userprofile/api/credential/update');
    };
    ProfileService.prototype.saveDescription = function (credential) {
        return this.saveCredential(credential, 'userprofile/api/credential/update');
    };
    ProfileService.prototype.GetUserCredential = function () {
        var url = 'userprofile/api/credential/getusercredential';
        return this._http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetTopFiveUserByCategory = function (id) {
        return this._http.get('userprofile/api/' + id + '/gettopFiveUserbycategoryid')
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetTopHundredUser = function () {
        return this._http.get('userprofile/api/gettophundreduser')
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetFollowersByUserId = function (userId) {
        return this._http.get('userprofile/api/followerbyuserid/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetFollowingsByUserId = function (userId) {
        return this._http.get('userprofile/api/followingbyuserId/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetUsercredentialByUserId = function (userId) {
        return this._http.get("userprofile/api/credential/getusercredentialbyuserid/" + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.getProfileStatistics = function (userId) {
        return this._http.get('userprofile/api/getprofileparameter/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.getCategoryWiseAnswer = function (userId) {
        return this._http.get('userprofile/api/categorywiseanswer/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.getVirtualStoreItems = function (userId) {
        return this._http.get('admin/virtualstore/getitems/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.SaveVirtualStoreProductComment = function (productComment) {
        return this._http.post('admin/virtualstore/saveproductcomment', productComment)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.addProfileViewCount = function (userId) {
        return this._http.post('userprofile/api/profileviewcount/' + userId, userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.AddEmployment = function (employment) {
        return this._http.post('userprofile/api/employment/addemployment', employment)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.AddEducation = function (education) {
        return this._http.post('userprofile/api/education/addeducation', education)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.AddPlace = function (place) {
        return this._http.post('userprofile/api/place/addplace', place)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.AddOtherExperience = function (otherExperience) {
        return this._http.post('userprofile/api/OtherExperience/addOtherExperience', otherExperience)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetBlogs = function (userId) {
        return this._http.get('blog/api/getblogs/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetBlogById = function (id) {
        return this._http.get('blog/api/getblogbyid/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.SaveBlog = function (blog) {
        return this._http.post('blog/api/saveblog', blog)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.UpdateBlog = function (blog) {
        return this._http.post('blog/api/updateblog', blog)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetBlogPosts = function (userId) {
        return this._http.get('blog/api/getblogpost/' + userId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetBlogPostsByBlogId = function (blogId) {
        return this._http.get('blog/api/getblogpostsbyblogid/' + blogId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.SaveBlogPost = function (blogPost) {
        return this._http.post('blog/api/saveblogpost', blogPost)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.DeleteBlogPost = function (blogPostId) {
        return this._http.post('blog/api/deleteblogpost/' + blogPostId, blogPostId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetDraftedQuestions = function () {
        return this._http.get('/questions/api/getdraftedquestions')
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.SaveDraftedQuestions = function (answerViewModel) {
        return this._http.get('/questions/api/savedraftedquestions', answerViewModel)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.DeleteEducation = function (education) {
        return this._http.post('userprofile/api/education/deleteeducation', education)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.DeleteEmployment = function (employment) {
        return this._http.post('userprofile/api/education/deleteemployment', employment)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.DeleteOtherExperience = function (other) {
        return this._http.post('userprofile/api/OtherExperience/deleteOtherExperience', other)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.DeletePlace = function (place) {
        return this._http.post('userprofile/api/place/deleteplace', place)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.PostDraftAnswer = function (answerViewModel) {
        return this._http.post('/questions/api/savedraftedanswers', answerViewModel)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.SaveSocialLink = function (credentialViewModel) {
        return this._http.post('/userprofile/api/savesociallink', credentialViewModel)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.DeleteSocialLink = function (credentialViewModel) {
        return this._http.post('/userprofile/api/deletesociallink', credentialViewModel)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.GetUsers = function (userName) {
        return this._http.post('userprofile/api/getusers/' + userName, userName)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProfileService.prototype.extractData = function (res) {
        var body;
        if (res.text()) {
            body = res.json();
        }
        return body || {};
    };
    ProfileService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        window.location.replace("/signin");
        return Observable.throw(errMsg);
    };
    return ProfileService;
}());
ProfileService = ProfileService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ProfileService);
export { ProfileService };
var ProfileService_1;
