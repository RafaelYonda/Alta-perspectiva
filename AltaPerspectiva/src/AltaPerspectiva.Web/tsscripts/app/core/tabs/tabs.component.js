var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
var TabsComponent = (function () {
    function TabsComponent(categoryService, commServ, route) {
        var _this = this;
        this.categoryService = categoryService;
        this.commServ = commServ;
        this.tabLength = 6;
        this._router = route;
        this.categoryService.getAllCategories().subscribe(function (res) {
            _this.commServ.setCategory("1");
            _this.categories = res;
            _this.tabLength = _this.categories.length - 6;
            _this.transform = 0;
        });
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.onChange = function (event) {
        this.isAnonymous = event;
    };
    TabsComponent.prototype.leftclick = function () {
        if (this.tabLength <= -2)
            return;
        this.transform = this.transform - 170;
        this.translate = 'translateX(' + this.transform + 'px)';
        this.tabLength--;
    };
    TabsComponent.prototype.rightclick = function () {
        if (this.tabLength >= (this.categories.length - 6))
            return;
        this.transform = this.transform + 170;
        this.translate = 'translateX(' + this.transform + 'px)';
        this.tabLength++;
    };
    TabsComponent.prototype.getTransform = function () {
        return this.translate;
    };
    TabsComponent.prototype.selectTab = function (id, sequence) {
        this.categories.forEach(function (element) {
            if (element.id == id) {
                element.active = 'active';
                if (sequence == 1)
                    id = "1";
            }
            else
                element.active = '';
        });
        this.commServ.setCategory(id);
        this._router.navigateByUrl('home/tab/' + id, { skipLocationChange: true });
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    Component({
        selector: 'ap-tabs',
        templateUrl: 'tabs.component.html',
        styleUrls: ['tabs.css'],
        providers: [CategoryService]
    }),
    __metadata("design:paramtypes", [CategoryService, CommunicationService, Router])
], TabsComponent);
export { TabsComponent };
