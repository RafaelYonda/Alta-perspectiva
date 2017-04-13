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
import { QuestionAnswerService } from '../../services/question-answer.service';
import { QuestionService } from '../../services/question.service';
import { CategoryService } from '../../services/category.service';
import { ConfigService } from '../../services/config.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Category, Like, LogInObj, FilterParameter, User } from '../../services/models';
import { Router, ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
var QuestionBodyComponent = (function () {
    function QuestionBodyComponent(questioAnswernService, authService, categoryService, configService, router, route, commServ, questionService) {
        this.questioAnswernService = questioAnswernService;
        this.authService = authService;
        this.categoryService = categoryService;
        this.configService = configService;
        this.commServ = commServ;
        this.questionService = questionService;
        this.FilterParam = "Filtra tus preguntas";
        this.showMoreTopic = false;
        this.topFiveTopics = new Array();
        this.loader = { isLoading: false };
        this.categorySelected = new Category();
        this.scrollPage = 0;
        this.description = "This is a test";
        this._router = router;
        this.route = route;
        this.questions = new Array();
        this.loader.isLoading = true;
        var user = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
    }
    QuestionBodyComponent.prototype.onQuestionSubmitted = function (even) {
        var _this = this;
        var subs = this.questioAnswernService.getQuestions();
        subs.subscribe(function (res) {
            _this.commServ.setCategory(_this.categoryId);
            _this.questions = res;
            _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
            _this.hideLoader();
        });
    };
    QuestionBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        var currentUserName = localStorage.getItem('auth_token');
        var currentUserImage = localStorage.getItem('currentUserImage');
        this.commServ.informQuestionSubmit().subscribe(function (res) {
            _this.showLoader();
            _this.onQuestionSubmitted(res);
        });
        this.authService.getLoggedinObj().subscribe(function (res) {
            if (res && currentUserName != null) {
                _this._logObj = new LogInObj();
                _this._logObj.user = new User();
                _this._logObj.user.name = res.name;
                _this._logObj.user.imageUrl = res.imageUrl;
                _this._logObj.isLoggedIn = true;
                _this._logObj.user.userId = res.userId;
            }
        });
        this.configService.getConfig().subscribe(function (r) {
            _this.config = r;
        });
        this.loadCategories();
        this.route.params.subscribe(function (params) {
            _this.topicId = params['topicId'];
            _this.categoryId = params['categoryId'];
            _this.levelId = params['levelId'];
            _this.description = _this._router.url;
            _this.filterParameter = new FilterParameter();
            _this.filterParameter.categoryId = _this.categoryId;
            if (_this.topicId) {
                _this.commServ.setTopicId(_this.topicId);
                _this.filterParameter.topicId = _this.topicId;
                _this.questioAnswernService.GetTopicName(_this.topicId).subscribe(function (res) {
                    if (res.result != '') {
                        _this.topicName = res.result;
                    }
                    else {
                        _this.topicName = undefined;
                    }
                });
            }
            else {
                _this.filterParameter.topicId = '0';
            }
            if (_this.levelId) {
                _this.commServ.setLevelId(_this.levelId);
                _this.filterParameter.levelId = _this.levelId;
                _this.questioAnswernService.GetLevelName(_this.levelId).subscribe(function (res) {
                    if (res.result != '') {
                        _this.levelName = res.result;
                    }
                    else {
                        _this.levelName = undefined;
                    }
                });
            }
            else {
                _this.filterParameter.levelId = '0';
            }
            _this.showLoader();
            var subs;
            if (_this.categoryId == '1') {
                subs = _this.questioAnswernService.FilterbyCategoryTopicNLevel(_this.filterParameter);
            }
            else {
                subs = _this.questioAnswernService.FilterbyCategoryTopicNLevel(_this.filterParameter);
                _this.loadCategories();
            }
            subs.subscribe(function (res) {
                _this.questionService.getTopFiveTopicsByCategoryId(_this.categoryId).subscribe(function (res) {
                    _this.topics = res;
                    _this.topFiveTopics = new Array();
                    var count = 0;
                    for (var _i = 0, _a = _this.topics; _i < _a.length; _i++) {
                        var item = _a[_i];
                        _this.topFiveTopics.push(item);
                        count++;
                        if (count > 4)
                            break;
                    }
                    _this.showMoreTopic = true;
                });
                _this.loadCategories();
                _this.commServ.setCategory(_this.categoryId);
                _this.questions = res;
                _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
                _this.hideLoader();
            });
        });
    };
    QuestionBodyComponent.prototype.GetLatestQuestionByDate = function (categoryId) {
        var _this = this;
        this.FilterParam = "Preguntas más recientes";
        this.showLoader();
        this.categorySelected = this.categories.find(function (x) { return x.id == categoryId; });
        var subs = this.questioAnswernService.GetLatestQuestionByDate(categoryId).subscribe(function (res) {
            _this.questions = res;
            _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
            _this.hideLoader();
        });
    };
    QuestionBodyComponent.prototype.getbestquestionbytotallike = function (categoryId) {
        var _this = this;
        this.FilterParam = "Preguntas con más Me gusta";
        this.showLoader();
        var subs = this.questioAnswernService.getbestquestionbytotallike(categoryId).subscribe(function (res) {
            _this.questions = res;
            _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
            _this.hideLoader();
        });
    };
    QuestionBodyComponent.prototype.getmorequestionbyviewcount = function (categoryId) {
        var _this = this;
        this.FilterParam = "Preguntas más vistas";
        this.showLoader();
        this.categorySelected = this.categories.find(function (x) { return x.id == categoryId; });
        var subs = this.questioAnswernService.getmorequestionbyviewcount(categoryId).subscribe(function (res) {
            console.log(res);
            _this.questions = res;
            _this.hideLoader();
            _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
        });
    };
    QuestionBodyComponent.prototype.loadCategories = function () {
        var _this = this;
        this.categoryService.getAllCategories().subscribe(function (res) {
            _this.categories = res;
            if (_this.categoryId == '1')
                _this.categorySelected = _this.categories.find(function (x) { return x.sequence == 1; });
            else
                _this.categorySelected = _this.categories.find(function (x) { return x.id == _this.categoryId; });
            if (_this.categorySelected && _this.categorySelected.image)
                _this.categorySelected.image = _this.categorySelected.image;
            _this.categoryService.getTotalCount(_this.categorySelected.id).subscribe(function (x) {
                _this.totalCount = x;
            });
        });
    };
    QuestionBodyComponent.prototype.addFollower = function (categoryId) {
        var _this = this;
        this.categoryService.addAddFollower(categoryId).subscribe(function (res) {
            _this.totalCount.totalUsers += 1;
        });
    };
    QuestionBodyComponent.prototype.getQuestionNotAnswered = function (categoryId) {
        var _this = this;
        this.showLoader();
        this.questioAnswernService.getQuestionsNotAnswered(categoryId).subscribe(function (res) {
            _this.questions = res;
            _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
            _this.hideLoader();
        });
    };
    QuestionBodyComponent.prototype.getQuestionsAnswered = function (categoryId) {
        var _this = this;
        this.showLoader();
        this.questioAnswernService.getQuestyionsAnswered(categoryId).subscribe(function (res) {
            _this.questions = res;
            _this.questions.forEach(function (x) { return x.bestAnswer = x.answers[0]; });
            _this.hideLoader();
        });
    };
    QuestionBodyComponent.prototype.toggleShowMoreTopic = function () {
        if (this.showMoreTopic == true) {
            this.showMoreTopic = false;
            this.topFiveTopics = this.topics;
        }
        else {
            this.showMoreTopic = true;
            this.topFiveTopics = new Array();
            var count = 0;
            for (var _i = 0, _a = this.topics; _i < _a.length; _i++) {
                var item = _a[_i];
                this.topFiveTopics.push(item);
                count++;
                if (count > 4)
                    break;
            }
        }
    };
    QuestionBodyComponent.prototype.showLoader = function () {
        this.loader.isLoading = true;
    };
    QuestionBodyComponent.prototype.hideLoader = function () {
        this.loader.isLoading = false;
    };
    QuestionBodyComponent.prototype.onScrollDown = function () {
        this.scrollPage = this.scrollPage + 1;
    };
    QuestionBodyComponent.prototype.submitLike = function (questionId) {
        var _this = this;
        this.like = new Like();
        this.like.questionId = questionId;
        this.questioAnswernService.addQuestionLike(this.like).subscribe(function (res) {
            _this.questions.find(function (x) { return x.id == questionId; }).likes.push(_this.like);
        });
    };
    QuestionBodyComponent.prototype.hideMenu = function () {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    };
    QuestionBodyComponent.prototype.gotoProfile = function () {
        this._router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    };
    return QuestionBodyComponent;
}());
QuestionBodyComponent = __decorate([
    Component({
        selector: "question-body",
        templateUrl: 'question-body.component.html',
        providers: [QuestionAnswerService, CategoryService, ConfigService, QuestionService]
    }),
    __metadata("design:paramtypes", [QuestionAnswerService, AuthenticationService, CategoryService, ConfigService, Router, ActivatedRoute, CommunicationService, QuestionService])
], QuestionBodyComponent);
export { QuestionBodyComponent };
