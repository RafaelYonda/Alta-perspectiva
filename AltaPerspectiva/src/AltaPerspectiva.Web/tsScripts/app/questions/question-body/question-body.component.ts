import { Component, ViewContainerRef, ComponentFactoryResolver, ViewChild  } from '@angular/core';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { CategoryService } from '../../services/category.service';
import { ConfigService } from '../../services/config.service';
import {QuestionMenu, Question, Answer, Category, Like, DateName, TotalCount, Config, LogInObj} from '../../services/models';
import { Router, ActivatedRoute, Resolve } from '@angular/router';
import { CommunicationService } from '../../services/communication.service';
import { DialogComponent } from '../../shared/dialog-modal/dialog.component';
import { AnswerDialogComponent } from '../../shared/answer-dialog/answer-dialog.component';

export interface ILoader {
    isLoading: boolean;
}

@Component({
    selector: "question-body",
    templateUrl: 'js/app/questions/question-body/question-body.component.html',
    styleUrls: ['js/app/questions/question-body/question-body.css'],
    providers: [QuestionAnswerService, CategoryService, ConfigService]
})
export class QuestionBodyComponent{

    loader: ILoader = { isLoading: false };
    _router: any;
    route: any;   
    id: string;
    private sub: any;
    questions: Question[];
    _logObj: LogInObj;
    answerList: Answer[];
    questionList: Question[];
    error: any;
    answer: string;
    categories: Category[];
    categorySelected: Category;
    

    scrollPage: number = 0;
    config: Config;
    totalCount: TotalCount;

    twitterButton;
    tags = 'Hello, World';
    description = "This is a test";
     like: Like;
    //categoryId
    topicId:string;
    categoryId:string;
    constructor(private questionService: QuestionAnswerService, private categoryService: CategoryService, private configService: ConfigService, router: Router, route: ActivatedRoute, private commServ: CommunicationService, private componentFactoryResolver: ComponentFactoryResolver) {
        this._router = router;
        this.route = route;

        //this.answerList = questionService.getAnswersByQuestion(2);        
        this.questions = [];

        /// load spinner for when  component initialize
        this.loader.isLoading = true;
        this._logObj = { isLoggedIn: false, user: { name: "", imageUrl: "", occupassion: "", userid: -1 } };
        
    }
    @ViewChild('dialogAnchor', { read: ViewContainerRef }) dialogAnchor: ViewContainerRef;
    openDialogBox(question: Question) {
        // Close any already open dialogs
        this.dialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
        let dialogComponentRef = this.dialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question; // Not sure about the translation here
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }

    @ViewChild('answerAnchor', { read: ViewContainerRef }) answerAnchor: ViewContainerRef;
    answerDialogBox(question: Question) {
        // Close any already open dialogs
        this.answerAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AnswerDialogComponent);
        let dialogComponentRef = this.answerAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question; // Not sure about the translation here
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
    ngOnInit() {
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


            this.topicId = params['topicId'];
            this.categoryId = params['categoryId'];
            this.description = this._router.url;

            this.showLoader();
            var subs: any;
            if (this.topicId != undefined && this.categoryId != undefined) {
                subs = this.questionService.getQuestionByTopciNCategoryId(this.topicId, this.categoryId);
                this.loadCategories();
                this.id = this.categoryId;
            } else {
                this.id = params['id'];
                
                // param id = 0, default route, it is ver tidas
                if (this.id == '1')
                {         
                   
                    // questions loaded by latest, without categoryId
                    subs = this.questionService.getQuestions();
                }
                //Question with bookmarks
                else if (this.id == '2') {
                    subs = this.questionService.getbookmark();
                }
                else
                {
                    // questions loaded by category id
                    subs = this.questionService.getQuestionsByCategory(this.id);

                    /// if page directly loads from url, then categories gets undefiend                
                    this.loadCategories();              
                }
            }
            subs.subscribe(res => {             
                this.commServ.setCategory(this.id);       
                this.questions = res;
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);       
                this.hideLoader();    
            });
        });        
        
    }  
    bestquestionbytotallike(categoryId: string) {
        
        var subs = this.questionService.bestquestionbytotallike(categoryId).subscribe(
            res => {
                
                this.questions = res;

             //   this.loadCategories();
                this.questions.forEach(x => x.bestAnswer = x.answers[0]);

            }
        );
    }
    getmorequestionbyviewcount(categoryId: string) {
        this.categorySelected = this.categories.find(x => x.id == categoryId);
        var subs = this.questionService.getmorequestionbyviewcount(categoryId).subscribe(
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

            if (this.id == '1')
                this.categorySelected = this.categories.find(x => x.sequence == 1);
            else
                this.categorySelected = this.categories.find(x => x.id == this.id);

            if (this.categorySelected && this.categorySelected.image)
                this.categorySelected.image = this.config.categoryImage.concat(this.categorySelected.image);

            this.categoryService.getTotalCount(this.categorySelected.id).subscribe(x => {
                this.totalCount = x;
            });
        });
    }

    addFollower(categoryId: string)
    {
        this.categoryService.addAddFollower(categoryId).subscribe(res => {
            this.totalCount.totalUsers += 1;
        });
    }

    getQuestionNotAnswered(categoryId: string)
    {
        this.questionService.getQuestionsNotAnswered(categoryId).subscribe(res => {
            this.questions = res;
            this.questions.forEach(x => x.bestAnswer = x.answers[0]);
        });
    }

    getQuestionsAnswered(categoryId: string)
    {
        this.questionService.getQuestyionsAnswered(categoryId).subscribe(res => {
            this.questions = res;
            this.questions.forEach(x => x.bestAnswer = x.answers[0]);
        });
    }

    showLoader() {
        console.log('showloader started');
        this.loader.isLoading = true;
    }

    hideLoader() {
        this.loader.isLoading = false;
    }

    onScrollDown() {
        console.log('scrolled!!');
        this.scrollPage = this.scrollPage + 1;
        console.log(this.scrollPage);
    }
 submitLike(questionId: string) {
        this.like = new Like();
        this.like.questionId = questionId;       

        this.questionService.addQuestionLike(this.like).subscribe(res => {
            this.questions.find(x=>x.id==questionId).likes.push(this.like);
        });
    }


}