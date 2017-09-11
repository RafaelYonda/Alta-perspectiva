import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { QuestionService } from '../../services/question.service';
import { CategoryService } from '../../services/category.service';
import { ConfigService } from '../../services/config.service';
import { loginModalComponent } from '../../shared/login-modal/login-modal.component';
import { AuthenticationService } from '../../services/authentication.service';
import {QuestionMenu, Question, Answer, Category, Like, DateName, TotalCount, Config, LogInObj, FilterParameter, Topic, User} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';

export interface ILoader {
    isLoading: boolean;
}

@Component({
    selector: "question-body",
    templateUrl: 'question-body.component.html',
    providers: [QuestionAnswerService, CategoryService, ConfigService, QuestionService]
})
export class QuestionBodyComponent {
    throttle: any;
    scrollDistance: any;
    FilterParam = "Filtra tus preguntas";// "Select a filter";
    showMoreTopic = false;
    topFiveTopics: Topic[] = new Array<Topic>();
    questionPage = 0;

    topics: Topic[];
    loader: ILoader = { isLoading: false };
    _router: any;
    route: any;
    //  id: string;
    private sub: any;
    questions: Question[] = [];
    _logObj: LogInObj;
    answerList: Answer[];
    questionList: Question[];
    error: any;
    answer: string;
    categories: Category[];
    categorySelected: Category = new Category();

    scrollPage: number = 0;
    config: Config;
    totalCount: TotalCount;


    description = "This is a test";
    like: Like;
    //categoryId
    categoryId: string;
    topicId: string;
    topicName: string;
    levelId: string;
    levelName: string;
    filterParameter: FilterParameter;
    constructor(private questioAnswernService: QuestionAnswerService, private componentFactoryResolver: ComponentFactoryResolver, private authService: AuthenticationService, private categoryService: CategoryService, private configService: ConfigService, router: Router, route: ActivatedRoute, private commServ: CommunicationService, private questionService: QuestionService) {
        this._router = router;
        this.route = route;
        this.questions = new Array<Question>();

        /// load spinner for when  component initialize
        this.loader.isLoading = true;
        var user: User = new User();
        user.userId = '-1';
        this._logObj = { isLoggedIn: false, user: user };
        this.filterParameter = new FilterParameter();
        this.filterParameter.latestQuestion = false;
        this.filterParameter.mostLikedQuestion = false;
        this.filterParameter.questionWithAnswer = false;
        this.filterParameter.questionWithoutAnswer = false;
    }
    onQuestionSubmitted(even: any) {
        var subs = this.questioAnswernService.getQuestions();
        subs.subscribe((res: any) => {
            this.commServ.setCategory(this.categoryId);
            this.questions = res;
            this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            this.hideLoader();
        });
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        var currentUserName = localStorage.getItem('auth_token');
        var currentUserImage = localStorage.getItem('currentUserImage');
        this.commServ.informQuestionSubmit().subscribe((res: any) => {
            this.showLoader();
            this.onQuestionSubmitted(res);
        });
        this.authService.getLoggedinObj().subscribe((res: any) => {
            if (res && currentUserName != null) {
                this._logObj = new LogInObj();
                this._logObj.user = new User();
                this._logObj.user.name = res.name;
                this._logObj.user.imageUrl = res.imageUrl;
                this._logObj.isLoggedIn = true;
                this._logObj.user.userId = res.userId;
            }
        });

        //this.configService.getConfig().subscribe((r: any) => {
        //    this.config = r;
        //});

        //this.loadCategories();

        //get questions by route param using category id.
        this.route.params.subscribe((params: any) => {
            this.topicId = params['topicId'];
            this.categoryId = params['categoryId'];
            this.levelId = params['levelId'];
            this.description = this._router.url;
            this.filterParameter.categoryId = this.categoryId;

            if (this.topicId) {
                this.commServ.setTopicId(this.topicId);
                this.filterParameter.topicId = this.topicId;
                this.questioAnswernService.GetTopicName(this.topicId).subscribe(res => {
                    if (res.result != '') {
                        this.topicName = res.result
                    } else {
                        this.topicName = undefined;
                    }
                })
            }
            else {
                this.filterParameter.topicId = '0';
            }
            if (this.levelId) {
                this.commServ.setLevelId(this.levelId);
                this.filterParameter.levelId = this.levelId;
                this.questioAnswernService.GetLevelName(this.levelId).subscribe(res => {
                    if (res.result != '') {
                        this.levelName = res.result
                    } else {
                        this.levelName = undefined;
                    }
                })
            } else {
                this.filterParameter.levelId = '0';
            }
            this.questionService.getTopFiveTopicsByCategoryId(this.categoryId).subscribe((res: any) => {
                this.topics = res;
                this.topFiveTopics = new Array<Topic>();
                var count = 0;
                for (let item of this.topics) {
                    this.topFiveTopics.push(item);
                    count++;
                    if (count > 4)
                        break;
                }
                this.showMoreTopic = true;
            });
            this.showLoader();
            this.questions = new Array<Question>();     // make the question list empty
            this.filterParameter.questionWithAnswer = false;
            this.filterParameter.questionWithoutAnswer = false;
            this.filterParameter.mostLikedQuestion = false;
            this.filterParameter.latestQuestion = false;
            this.filterParameter.mostViewedQuestion = false;
            this.questionPage = 0;
            this.LoadFilteredQuestions();
        });
    }
    LoadFilteredQuestions() {
         this.questioAnswernService.FilterbyCategoryTopicNLevel(this.filterParameter, this.questionPage).subscribe((res: any) => {
            if (this.questionPage > 0 && res && res.length > 0 && this.questions ) {
                this.questions = this.questions.concat(res);
            }
            else if (res && res.length >= 0 && this.questionPage<1) {
                this.questions = res;
            }
            this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            this.hideLoader();
            //==========Load Other dependencies after questions load==========
            this.loadCategories();
            this.commServ.setCategory(this.categoryId);
        });
    }
    loadCategories() {
        this.categoryService.getAllCategories().subscribe((res: any) => {

            this.categories = res;

            if (this.categoryId == '1')
                this.categorySelected = this.categories.find(x => x.sequence == 1);
            else
                this.categorySelected = this.categories.find(x => x.id == this.categoryId);
            if (this.categorySelected && this.categorySelected.image)
                this.categorySelected.image = this.categorySelected.image;
            this.questioAnswernService.FilterCountCategoryTopicNLevel(this.filterParameter).subscribe(countResult => {
                this.totalCount = countResult;
            });
        });
    }

    // #region=======Button Clicked Functions===========
    GetLatestQuestionByDate(categoryId: string) {
        this.FilterParam = "Preguntas más recientes";   //"The latest question";
        this.showLoader();
        this.categorySelected = this.categories.find(x => x.id == categoryId);
        this.questionPage = 0;
        this.filterParameter.latestQuestion = true;
        this.filterParameter.mostLikedQuestion = false;
        this.filterParameter.mostViewedQuestion = false;
        this.LoadFilteredQuestions();
    }
    getbestquestionbytotallike(categoryId: string) {
        this.FilterParam = "Preguntas con más Me gusta";
        this.showLoader();
        this.questionPage = 0;
        this.filterParameter.mostLikedQuestion = true;
        this.filterParameter.latestQuestion = false;
        this.filterParameter.mostViewedQuestion = false;
        this.LoadFilteredQuestions();
    }
    getmorequestionbyviewcount(categoryId: string) {
        this.FilterParam = "Preguntas más vistas";
        this.showLoader();
        this.questionPage = 0;
        this.categorySelected = this.categories.find(x => x.id == categoryId);
        this.filterParameter.mostViewedQuestion = true;
        this.filterParameter.latestQuestion = false;
        this.filterParameter.mostLikedQuestion = false;
        this.LoadFilteredQuestions();
    }
    getQuestionNotAnswered(categoryId: string) {
        this.showLoader();
        this.questionPage = 0;
        this.filterParameter.questionWithAnswer = false;
        this.filterParameter.questionWithoutAnswer = true;
        this.LoadFilteredQuestions();
    }
    getQuestionsAnswered(categoryId: string) {
        this.showLoader();
        this.questionPage = 0;
        this.filterParameter.questionWithAnswer = true;
        this.filterParameter.questionWithoutAnswer = false;
        this.LoadFilteredQuestions();
    }

    addFollower(categoryId: string) {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return;
        }  
        this.categoryService.addAddFollower(categoryId).subscribe((res: any) => {
            console.log(res);
            this.totalCount.totalFollowers += res.count;
        });
    }
    // #endregion
    @ViewChild('logginAnchor', { read: ViewContainerRef }) logginAnchor: ViewContainerRef;
    ShowNotLoggedIn() {
        this.logginAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        let dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }

    toggleShowMoreTopic() {
        if (this.showMoreTopic == true) {
            this.showMoreTopic = false;
            this.topFiveTopics = this.topics;
        } else {
            this.showMoreTopic = true;

            this.topFiveTopics = new Array<Topic>();
            var count = 0;
            for (let item of this.topics) {
                this.topFiveTopics.push(item);
                count++;
                if (count > 4)
                    break;
            }
        }
    }

    showLoader() {
        this.loader.isLoading = true;
    }

    hideLoader() {
        this.loader.isLoading = false;
    }

    onScroll() {
        this.questionPage = this.questionPage + 1;
        this.LoadFilteredQuestions();
    }
    hideMenu() {
        var leftMenu = document.getElementById('toggleMenu');
        leftMenu.classList.remove("expand");
    }
    gotoProfile() {
        this._router.navigateByUrl('/dashboard/viewprofile/' + this._logObj.user.userId + '/user-question');
    }
}