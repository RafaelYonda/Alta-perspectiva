/// <reference path="search-dropdown.component.ts" />
import { Component, Input, ElementRef, ViewChild, Output, EventEmitter  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApSearchDropDownComponent } from './search-dropdown.component';

import { CategoryService } from '../../services/category.service'
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Category, Question, Keyword, AskQuestionViewModel,Topic,Level,QuestionSaveViewModel } from '../../services/models';

@Component({
    selector: 'ap-search',
    templateUrl: 'apSearch.component.html',
    styleUrls: ['tsScripts/app/shared/search/search.css'],
    providers: [CategoryService, QuestionAnswerService]
})
export class ApSearchComponent {
    @ViewChild(ApSearchDropDownComponent) searchDropDown: ApSearchDropDownComponent
    public elementRef;
    title: string;
    //body: string;
    result: string;
    keywords: Keyword[];
    @Input() placeBottom: string = '';
    @Output() onQuestionSubmit = new EventEmitter<boolean>();
    //topics:Topic[];
    //levels:Level[];
    questionSaveViewModel: QuestionSaveViewModel;

    constructor(private router: Router, private categoryService: CategoryService, private questionsService: QuestionAnswerService, private myElement: ElementRef) {
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

    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value && (value == 'search-box') || (value == 'adv-search'))
            this.removeModal();
    }
    //=============Submit Question===========
    question: Question;

    submitQuestion() {
        this.searchDropDown.submitEmitter.subscribe(() => {
            this.onQuestionSubmit.emit(true);
            this.removeModal();
        });
        this.searchDropDown.submitQuestion();
    }

    //=============Category Show=============
    categories: Category[];
    categoryMatched: string = "";
    categoryID: string = '-1';
    public icon: string;
    public visible = true;

    showMatchedCatogries(title: string) {
        console.log("Category Matched");
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
        this.router.navigate(['/question/detail/' + item.id]);
    }
    //=======Question mark movment====
    showQuestion = false;
    questionLeftposition = 20;
    movequestionMark(event) {
        var textWidth = document.getElementById('temp-text').clientWidth;
        var key = event.keyCode || event.charCode;
        textWidth = (textWidth + 20) < 30 ? (textWidth + 10) : (textWidth + 7);
        if (textWidth > 635)
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
        form.style.paddingTop = '10px';
        this.isOnModal = true;
    }
    removeModal() {
        this.filteredQuestionList = [];
        this.categoryMatched = "";
        document.getElementById("search-box").className = this.placeBottom +" z-search" ;
        //document.getElementById("search-box").className = this.searchClass;
        var form = document.getElementById("search-panel");
        form.style.marginTop = '0';
        this.resetquestionMark();
        this.isOnModal = false;
        this.title = '';
    }
}