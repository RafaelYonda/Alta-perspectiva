var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter } from '@angular/core';
import { BlogPost } from '../../../services/models/models.blogpost';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
var BlogpostDetailComponent = (function () {
    function BlogpostDetailComponent(_route, profileService) {
        this._route = _route;
        this.profileService = profileService;
        this.post = new BlogPost();
        this.close = new EventEmitter();
    }
    BlogpostDetailComponent.prototype.ngOnInit = function () {
        console.log(this.post);
    };
    BlogpostDetailComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    };
    BlogpostDetailComponent.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    return BlogpostDetailComponent;
}());
BlogpostDetailComponent = __decorate([
    Component({
        templateUrl: 'blogpost-detail.component.html',
        providers: [ProfileService],
    }),
    __metadata("design:paramtypes", [ActivatedRoute, ProfileService])
], BlogpostDetailComponent);
export { BlogpostDetailComponent };
