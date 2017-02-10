import { Component } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { QuestionService } from '../../services/question.service';
import { CategoryService } from '../../services/category.service';
import { ConfigService } from '../../services/config.service';
import {QuestionMenu, Question, Answer, Category, Like, DateName, TotalCount, Config, LogInObj, FilterParameter, Topic, User} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';

export interface ILoader {
    isLoading: boolean;
}

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    //styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService, CategoryService, ConfigService, QuestionService]
})
export class QuestionBodyComponent {

    loader: ILoader = { isLoading: false };
    _router: any;
    route: any;
  //  id: string;
    private sub: any;
    questions: Question[];
    _logObj: LogInObj;
    answerList: Answer[];
    questionList: Question[];
    error: any;
    answer: string;
    categories: Category[];
    categorySelected: Category;
    topFiveTopics: Topic[];

    scrollPage: number = 0;
    config: Config;
    totalCount: TotalCount;

    twitterButton;
    tags = 'Hello, World';
    description = "This is a test";
    like: Like;
    //categoryId
    topicId: string;
    categoryId: string;
    levelId: string;

    filterParameter: FilterParameter;
    constructor(private questioAnswernService: QuestionAnswerService, private categoryService: CategoryService, private configService: ConfigService, router: Router, route: ActivatedRoute, private commServ: CommunicationService, private questionService: QuestionService) {
        this._router = router;
        this.route = route;

        //this.answerList = questionService.getAnswersByQuestion(2);        
        this.questions = [];

        /// load spinner for when  component initialize
        this.loader.isLoading = true;
        var user: User = new User();
        user.userid = -1
        this._logObj = { isLoggedIn: false, user: user };

    }
    onQuestionSubmitted(event) {
        console.log("Submit on question");
        var subs=this.questioAnswernService.getQuestions();
        subs.subscribe(res => {
            this.commServ.setCategory(this.categoryId);
            this.questions = res;
            this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            this.hideLoader();
        });
    }
    ngOnInit() {
        window.scrollTo(0,0);
        var currentUserName = localStorage.getItem('currentUserName');
        var currentUserImage = localStorage.getItem('currentUserImage');
        console.log(currentUserName);
        if (currentUserName != null) {
            this._logObj.user.name = currentUserName;
            this._logObj.user.imageUrl = currentUserImage;
        }
        this.configService.getConfig().subscribe(r => {
            this.config = r;
        });

        this.loadCategories();

        //get questions by route param using category id.
        this.route.params.subscribe(params => {

           // this.id = params['id']; //For the First time it will be 1
            this.topicId = params['topicId'];
            this.categoryId = params['categoryId'];
            this.levelId = params['levelId'];
            this.description = this._router.url;

            this.filterParameter = new FilterParameter();
            this.filterParameter.categoryId = this.categoryId;
            //this.filterParameter.topicId = this.topicId;
            //this.filterParameter.levelId = this.levelId;

            if (this.topicId) {
                this.commServ.setTopicId(this.topicId);
                this.filterParameter.topicId = this.topicId;
            }
            else {
                this.filterParameter.topicId = '0';
            }


            if (this.levelId) {
                this.commServ.setLevelId(this.levelId);
                this.filterParameter.levelId = this.levelId;
            } else {
                this.filterParameter.levelId = '0';
            }
                

            this.showLoader();
            var subs: any;

          //  this.id = params['id'];

            // param id = 0, default route, it is ver tidas
            if (this.categoryId == '1') {
                subs = this.questioAnswernService.FilterbyCategoryTopicNLevel(this.filterParameter);

                // questions loaded by latest, without categoryId
               // subs = this.questioAnswernService.getQuestions();

            }

            else {
              //  this.filterParameter = this.commServ.getFilterParameter();
                // questions loaded by category id
                // subs = this.questioAnswernService.getQuestionsByCategory(this.id);
                subs = this.questioAnswernService.FilterbyCategoryTopicNLevel(this.filterParameter);

                /// if page directly loads from url, then categories gets undefiend                
                this.loadCategories();
            }

            subs.subscribe(res => {
                this.questionService.getTopFiveTopicsByCategoryId(this.categoryId).subscribe(res => {
                    this.topFiveTopics = res;
                });
                this.commServ.setCategory(this.categoryId);
                this.questions = res;
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
                this.hideLoader();
            });
        });

    }
    GetLatestQuestionByDate(categoryId: string) {
        this.categorySelected = this.categories.find(x => x.id == categoryId);
        var subs = this.questioAnswernService.GetLatestQuestionByDate(categoryId).subscribe(
            res => {

                this.questions = res;

                //  this.loadCategories();
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            }
        );
    }
    getbestquestionbytotallike(categoryId: string) {

        var subs = this.questioAnswernService.getbestquestionbytotallike(categoryId).subscribe(
            res => {

                this.questions = res;

                //   this.loadCategories();
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);

            }
        );
    }
    getmorequestionbyviewcount(categoryId: string) {
        this.categorySelected = this.categories.find(x => x.id == categoryId);
        var subs = this.questioAnswernService.getmorequestionbyviewcount(categoryId).subscribe(
            res => {
                console.log(res);
                this.questions = res;

                //  this.loadCategories();
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);
            }
        );
    }

    loadCategories() {

        this.categoryService.getAllCategories().subscribe(res => {

            this.categories = res;

            if (this.categoryId == '1')
                this.categorySelected = this.categories.find(x => x.sequence == 1);
            else
                this.categorySelected = this.categories.find(x => x.id == this.categoryId);

            if (this.categorySelected && this.categorySelected.image)
                this.categorySelected.image = this.config.categoryImage.concat(this.categorySelected.image);

            this.categoryService.getTotalCount(this.categorySelected.id).subscribe(x => {
                this.totalCount = x;
            });
        });
    }

    addFollower(categoryId: string) {
        this.categoryService.addAddFollower(categoryId).subscribe(res => {
            this.totalCount.totalUsers += 1;
        });
    }

    getQuestionNotAnswered(categoryId: string) {
        this.questioAnswernService.getQuestionsNotAnswered(categoryId).subscribe(res => {
            this.questions = res;
            this.questions.forEach(x => x.bestAnswer = x.answers[0]);
        });
    }

    getQuestionsAnswered(categoryId: string) {
        this.questioAnswernService.getQuestyionsAnswered(categoryId).subscribe(res => {
            this.questions = res;
            this.questions.forEach(x => x.bestAnswer = x.answers[0]);
        });
    }

    showLoader() {
       // console.log('showloader started');
        this.loader.isLoading = true;
    }

    hideLoader() {
        this.loader.isLoading = false;
    }

    onScrollDown() {
       // console.log('scrolled!!');
        this.scrollPage = this.scrollPage + 1;
       // console.log(this.scrollPage);
    }
    submitLike(questionId: string) {
        this.like = new Like();
        this.like.questionId = questionId;

        this.questioAnswernService.addQuestionLike(this.like).subscribe(res => {
            this.questions.find(x => x.id == questionId).likes.push(this.like);
        });
    }


}