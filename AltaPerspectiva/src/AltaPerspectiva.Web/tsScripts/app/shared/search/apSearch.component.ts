import { Component, Input, ElementRef,  Output, EventEmitter, ViewContainerRef, ComponentFactoryResolver, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApSearchDropDownComponent } from './search-dropdown.component';
import { loginModalComponent } from '../login-modal/login-modal.component';
import { CommunicationService } from '../../services/communication.service';
import { CategoryService } from '../../services/category.service';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Category, Question, Keyword, AskQuestionViewModel,Topic,Level,QuestionSaveViewModel } from '../../services/models';

@Component({
    selector: 'ap-search',
    templateUrl: 'js/app/shared/search/apSearch.component.html',
    styleUrls: ['js/app/shared/search/search.css'],
    providers: [CategoryService, QuestionAnswerService]
})
export class ApSearchComponent {
    @ViewChild(ApSearchDropDownComponent) searchDropDown: ApSearchDropDownComponent
    public elementRef;
    title: string='';
    //body: string;
    result: string;
    keywords: Keyword[];
    @Input() placeBottom: string = '';
    @Output() onQuestionSubmit = new EventEmitter<boolean>();
    //topics:Topic[];
    //levels:Level[];
    questionSaveViewModel: QuestionSaveViewModel;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,private router: Router, private categoryService: CategoryService, private questionsService: QuestionAnswerService, private commServ: CommunicationService , private myElement: ElementRef) {
        this.elementRef = myElement;
    }
    ngOnInit() {
        this.questionsService.getQuestionsForSearch().subscribe(res => {
            var resList = [];
            res.forEach(function (el) {
                resList.push(el);
            });
            this.questionList = resList;
        });
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
        });
        this.categoryService.getAllKeywords().subscribe(res => {
            this.keywords = res;
        });
    }

    handleClick(event: Event) {
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        //removel the modal on clicking out side the panel
        var idAttr = target['id'];
        if (idAttr && (idAttr == 'search-box') || (idAttr == 'adv-search'))
            this.removeModal();
    }
    //=============Submit Question===========
    question: Question;

    submitQuestion() {
        var user = localStorage.getItem('auth_token');
        if (!user) {
            this.ShowNotLoggedIn();
            return false;
        }
        this.removeModal();        
        this.searchDropDown.submitEmitter.subscribe(() => {
            //this.onQuestionSubmit.emit(true);
            this.commServ.questionSubmit(this.title);
        });
        this.searchDropDown.submitQuestion();
    }
    @ViewChild('logginAnchor', { read: ViewContainerRef }) logginAnchor: ViewContainerRef;
    ShowNotLoggedIn() {
        this.logginAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
        let dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
        this.removeModal();
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
    //=============Category Show=============
    categories: Category[];
    categoryMatched: string = "";
    categoryID: string = '-1';
    public icon: string;
    public visible = true;

    showMatchedCatogries(title: string) {
        
        var keywordsInQuestionTitle = title? title.split(' '):[]; //Get words from question to find keywords
        this.categoryMatched = "";
        keywordsInQuestionTitle.forEach(str => {

            var matched = this.keywords.find(x => x.text.toLowerCase() == str.toLocaleLowerCase());
            if (matched) {
                var cat = this.categories.find(c => c.id == matched.categoryId);
                this.categoryMatched += (cat == null ? "" : cat.name + " ");
                console.log(this.categoryMatched);
            }
        });
    }

    public selectCategory = (icon) => {
        this.icon = icon;
        this.visible = true;
    }
    //=============Question show=============
    public questionList = [];
    searchClass: string;
    //placeBottom: string;
    public filteredQuestionList: any = [];

    showDetailsQuestionsPanel(input: HTMLInputElement) {
        this.removeModal();
    }
    selectQuestionDetails(item) {
        this.filteredQuestionList = [];
        this.categoryMatched = "";
        this.removeModal();
        this.router.navigate(['/question/detail/' + item.id]);
    }
    //=======Question mark movment====
    showQuestion = false;
    questionLeftposition = 20;
    movequestionMark(event) {
        var textWidth = document.getElementById('temp-text').clientWidth;
        console.log(textWidth);
        var key = event.keyCode || event.charCode;
        textWidth = (textWidth + 20) < 30 ? (textWidth + 10) : (textWidth + 7);
        if (textWidth > 642)
            return;
        console.log(textWidth);
        //==============
        this.showQuestion = true;
        var form = document.getElementById("question-end");
        
            this.questionLeftposition = textWidth;
        form.style.left = this.questionLeftposition.toString() + 'px';
        console.log(form.style.left);
    }
    resetquestionMark() {
        this.showQuestion = false;
        var form = document.getElementById("question-end");
        this.questionLeftposition = 20;
        form.style.left = this.questionLeftposition.toString() + 'px';
    }
    //=======/Question mark movment=====
    trimSpace(event: KeyboardEvent) {
        if (event.keyCode == 32)
        {
            this.title = this.title.trim();
            this.title += " ";
        }
    }
    filterQuestions(event) {
        this.movequestionMark(event);
        var tempTitle = this.title;
        this.showMatchedCatogries(this.title);
        //  search after 3rd letter
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
    }
    addQuestionMark() {
        var input = document.getElementById("title");
    }
    isOnModal = false;
    showModal() {
        this.searchClass = document.getElementById("search-box").className;
        document.getElementById("search-box").className = "modal-overlay z-modal";
        var form = document.getElementById("search-box");
        form.style.paddingTop = '5px';
        this.isOnModal = true;
    }
    removeModal() {
        this.filteredQuestionList = [];
        this.categoryMatched = "";        
        this.resetquestionMark();
        this.isOnModal = false;
        this.title = '';

        //CSS change==============
        document.getElementById("search-box").className = this.placeBottom;
        var form = document.getElementById("search-panel");
        form.style.marginTop = '0';

        if (window.innerWidth < 767)
            return false;
        

    }
}