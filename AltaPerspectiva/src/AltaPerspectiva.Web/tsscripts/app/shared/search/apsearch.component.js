var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, Output, EventEmitter, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApSearchDropDownComponent } from './search-dropdown.component';
import { loginModalComponent } from '../login-modal/login-modal.component';
import { CommunicationService } from '../../services/communication.service';
import { CategoryService } from '../../services/category.service';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { WindowRefService } from '../../services/window-ref.service';
var ApSearchComponent = (function () {
    function ApSearchComponent(componentFactoryResolver, router, categoryService, questionsService, commServ, myElement, windowRef) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.router = router;
        this.categoryService = categoryService;
        this.questionsService = questionsService;
        this.commServ = commServ;
        this.myElement = myElement;
        this.windowRef = windowRef;
        this.title = '';
        this.placeBottom = '';
        this.onQuestionSubmit = new EventEmitter();
        this.categoryMatched = "";
        this.categoryID = '-1';
        this.visible = true;
        this.selectCategory = function (icon) {
            _this.icon = icon;
            _this.visible = true;
        };
        this.filteredQuestionList = [];
        this.showQuestion = false;
        this.questionLeftposition = 20;
        this.isOnModal = false;
        this.elementRef = myElement;
        this.window = windowRef.nativeWindow;
    }
    ApSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionsService.getQuestionsForSearch().subscribe(function (res) {
            var resList = new Array();
            res.forEach(function (el) {
                resList.push(el);
            });
            _this.questionList = resList;
        });
        this.categoryService.getAllCategories().subscribe(function (res) {
            _this.categories = res;
            _this.categories = _this.categories.filter(function (item) { return item.sequence != 1; });
        });
        this.categoryService.getAllKeywords().subscribe(function (res) {
            _this.keywords = res;
        });
    };
    ApSearchComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement;
        var idAttr = target['id'];
        if (idAttr && (idAttr == 'search-box') || (idAttr == 'adv-search'))
            this.removeModal();
    };
    ApSearchComponent.prototype.submitQuestion = function () {
        var _this = this;
        if (this.title.trim() == "")
            return false;
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return false;
        }
        this.removeModal();
        this.searchDropDown.submitEmitter.subscribe(function () {
            _this.commServ.questionSubmit(_this.title);
        });
        this.searchDropDown.submitQuestion();
    };
    ApSearchComponent.prototype.ShowNotLoggedIn = function () {
        this.logginAnchor.clear();
        var dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        var dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        this.removeModal();
        dialogComponentRef.instance.close.subscribe(function () {
            dialogComponentRef.destroy();
        });
    };
    ApSearchComponent.prototype.showMatchedCatogries = function (title) {
        var _this = this;
        var keywordsInQuestionTitle = title ? title.split(' ') : [];
        this.categoryMatched = "";
        keywordsInQuestionTitle.forEach(function (str) {
            var matched = _this.keywords.find(function (x) { return x.text.toLowerCase() == str.toLocaleLowerCase(); });
            if (matched) {
                var cat = _this.categories.find(function (c) { return c.id == matched.categoryId; });
                _this.categoryMatched += (cat == null ? "" : cat.name + " ");
                console.log(_this.categoryMatched);
            }
        });
    };
    ApSearchComponent.prototype.showDetailsQuestionsPanel = function (input) {
        this.removeModal();
    };
    ApSearchComponent.prototype.selectQuestionDetails = function (item) {
        this.filteredQuestionList = [];
        this.categoryMatched = "";
        this.removeModal();
        this.router.navigate(['/question/detail/' + item.id]);
    };
    ApSearchComponent.prototype.movequestionMark = function (event) {
        var textWidth = document.getElementById('temp-text').clientWidth;
        var maxWidth = document.getElementById('title').clientWidth;
        textWidth = (textWidth + 20) < 30 ? (textWidth + 10) : (textWidth + 7);
        if (textWidth > maxWidth - 22)
            return;
        this.showQuestion = true;
        var form = document.getElementById("question-end");
        this.questionLeftposition = textWidth;
        form.style.left = this.questionLeftposition.toString() + 'px';
    };
    ApSearchComponent.prototype.resetquestionMark = function () {
        this.showQuestion = false;
        var form = document.getElementById("question-end");
        this.questionLeftposition = 20;
        form.style.left = this.questionLeftposition.toString() + 'px';
    };
    ApSearchComponent.prototype.trimSpace = function (event) {
        if (event.keyCode == 32) {
            this.title = this.title.trim();
        }
        console.log(this.title);
    };
    ApSearchComponent.prototype.filterQuestions = function (event) {
        this.movequestionMark(event);
        var tempTitle = this.title;
        this.showMatchedCatogries(this.title);
        if (tempTitle !== "" && tempTitle.length > 1) {
            this.filteredQuestionList = this.questionList.filter(function (el) {
                var indx = el.title.toLowerCase().indexOf(tempTitle.toLowerCase()) > -1;
                return indx;
            });
        }
        else {
            this.filteredQuestionList = [];
            this.categoryMatched = "";
        }
    };
    ApSearchComponent.prototype.addQuestionMark = function () {
        var input = document.getElementById("title");
    };
    ApSearchComponent.prototype.showModal = function () {
        if (this.title == '')
            this.title = ' ';
        this.movequestionMark({});
        this.searchClass = document.getElementById("search-box").className;
        document.getElementById("search-box").className = "modal-overlay z-modal";
        var form = document.getElementById("search-box");
        form.style.paddingTop = '5px';
        this.isOnModal = true;
    };
    ApSearchComponent.prototype.removeModal = function () {
        this.filteredQuestionList = [];
        this.categoryMatched = "";
        this.resetquestionMark();
        this.isOnModal = false;
        this.title = '';
        document.getElementById("search-box").className = this.placeBottom + " search-xs";
        var form = document.getElementById("search-panel");
        form.style.marginTop = '0';
        if (window.innerWidth < 767)
            return false;
    };
    return ApSearchComponent;
}());
__decorate([
    ViewChild(ApSearchDropDownComponent),
    __metadata("design:type", ApSearchDropDownComponent)
], ApSearchComponent.prototype, "searchDropDown", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ApSearchComponent.prototype, "placeBottom", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ApSearchComponent.prototype, "onQuestionSubmit", void 0);
__decorate([
    ViewChild('logginAnchor', { read: ViewContainerRef }),
    __metadata("design:type", ViewContainerRef)
], ApSearchComponent.prototype, "logginAnchor", void 0);
ApSearchComponent = __decorate([
    Component({
        selector: 'ap-search',
        templateUrl: 'apSearch.component.html',
        styleUrls: ['search.css'],
        providers: [CategoryService, QuestionAnswerService]
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver, Router, CategoryService, QuestionAnswerService, CommunicationService, ElementRef, WindowRefService])
], ApSearchComponent);
export { ApSearchComponent };
