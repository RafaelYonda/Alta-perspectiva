import { Component, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from '../../services/category.service'
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Category, Question, Keyword, AskQuestionViewModel,Topic } from '../../services/models';

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
    
    onCategoryChange(event) {
        console.log('category Change');
        console.log(event);
       
        let categoryId = '9C8BA604-E77E-CDBD-B3DF-08D439285097';
        this.questionsService.getTopicByCategoryid(categoryId).subscribe(res => {
            console.log(res);
        });

    }
    onTopicChange(event) {
        console.log('Topic Change');
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

    //=============Submit Question===========
    question: Question;

    submitQuestion() {
        this.question = new Question();
        this.question.title = this.title;
        this.question.body = this.body;
        if (this.categoryID != '-1')
            this.question.categoryIds.push(this.categoryID);
        else
            this.question.categoryIds.push(this.categories[0].id);
        this.questionsService.addQuestions(this.question).subscribe(res => {
            console.log(res);
            this.question = res;
            this.router.navigate(['/question/home/0']);
        });
    }

    //=============Category Show=============
    categories: Category[];
    categoryMatched: string = "";
    categoryID: string = '-1';
    public icon: string;
    public visible = true;

    showMatchedCatogries(title: string) {
        if (title.length < 3)
            return;
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
    filterQuestions() {
        this.showMatchedCatogries(this.title);
        var tempTitle = this.title;
        //  search after 3rd letter
        if (this.title !== "" && this.title.length > 2) {
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

    isOnModal = false;
    showModal() {
        var form = document.getElementById("search-panel");
        var viewportOffset = form.getBoundingClientRect();
        // these are relative to the viewport, i.e. the window
        var top = viewportOffset.top;// Math.floor(viewportOffset.top);
        if (top > 0 && !this.isOnModal) {
            this.searchClass = document.getElementById("search-box").className;
            document.getElementById("search-box").className = "modal-container z-modal";
            console.log(top);
            form.style.marginTop = String(top-5) + "px";    //It takes 5px extra for unknown reason.. so -5
            this.isOnModal = true;
        }
    }
    removeModal() {
        this.filteredQuestionList = [];
        this.categoryMatched = "";
        document.getElementById("search-box").className = this.placeBottom +" z-header";
        //document.getElementById("search-box").className = this.searchClass;
        var form = document.getElementById("search-panel");
        form.style.marginTop = '0';
        this.isOnModal = false;
    }
}