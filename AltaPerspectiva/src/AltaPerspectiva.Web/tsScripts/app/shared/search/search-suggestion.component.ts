﻿import { Component, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from '../../services/category.service'
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Category, Question, Keyword, AskQuestionViewModel,Topic,Level,QuestionSaveViewModel } from '../../services/models';

@Component({
    selector: 'ap-search',
    templateUrl: 'js/app/shared/search/apSearch.component.html',
    styleUrls: ['js/app/shared/search/search.css'],
    providers: [CategoryService, QuestionAnswerService]
})
export class ApSearchComponent {
    public elementRef;
    title: string;
    body: string;
    result: string;
    keywords: Keyword[];
    @Input() placeBottom: string = '';
    topics:Topic[];
    levels:Level[];
    questionSaveViewModel: QuestionSaveViewModel;
    isAnonymous:boolean;
    onCategoryChange(categoryId) {
        this.categoryID = categoryId;
        this.questionsService.getTopicByCategoryid(this.categoryID).subscribe(res => {
            this.topics = res;
         });
    }
    onTopicChange(topicId) {
        console.log(topicId);
        this.topicID = topicId;
         this.questionsService.getlevel().subscribe(res => {
            this.levels = res;
             this.levelID = this.levels[0].id;
         });
    }
    onLevelChange(levelId) {
        console.log(levelId);
        this.levelID = levelId;
    }
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
    onChange(event) {
        
        this.isAnonymous = event;
        console.log(" : " + this.isAnonymous );
    }
    //=============Submit Question===========
    question: Question;

    submitQuestion() {        
        this.question = new Question();        
        this.question.title = this.title;
        this.question.body = this.body;
        this.question.topicId = this.topicID == '-1' ? '' : this.topicID;
        this.question.levelId = this.levelID=='-1'?'':this.levelID;
        this.question.isAnonymous = this.isAnonymous;
        //CategoryID=-1 is for placeholder .So will not be added to question while savings
        if (this.categoryID != '-1')
            this.question.categoryIds.push(this.categoryID);
        else
            this.question.categoryIds.push(this.categories[0].id);

        this.questionsService.saveQuestionSaveViewModel(this.question).subscribe(res => {
            console.log('in ok');
            this.question = res;
            this.router.navigate(['/question/home/1']);

        });
    }

    //=============Category Show=============
    categories: Category[];
    categoryMatched: string = "";
    categoryID: string = '-1';
    topicID: string = '-1';
    levelID: string = '-1';
   // body: string = '';
    public icon: string;
    public visible = true;

    showMatchedCatogries(title: string) {
        //if (title.length < 3)
        //    return;
        var keywordsInQuestionTitle = title.split(' '); //Get words from question to find keywords
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
    movequestionMark() {
        this.showQuestion = true;
        var form = document.getElementById("question-end");
        this.questionLeftposition = this.questionLeftposition+7;
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
    filterQuestions() {
        this.movequestionMark();
        var tempTitle = this.title;
       
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
        document.getElementById("search-box").className = this.placeBottom +" z-header";
        //document.getElementById("search-box").className = this.searchClass;
        var form = document.getElementById("search-panel");
        form.style.marginTop = '0';
        this.resetquestionMark();
        this.isOnModal = false;
        this.title = '';
    }
}