﻿import { Component, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from '../../services/category.service'
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Category, Question, Keyword, AskQuestionViewModel } from '../../services/models';

@Component({
    selector: 'ap-search',
    templateUrl: 'js/app/shared/search/apSearch.component.html',
    styleUrls: ['js/app/shared/search/search.css'],
    providers: [CategoryService, QuestionAnswerService]
})



export class ApSearchComponent {
   
    //@Input() placeBottom: string;
    ckeditorContent: string;
    public filteredQuestionList: any = [];
    @Input() placeBottom: string = '';
    public icon: string;
    public visible = true;
    categories: Category[];
    question: Question; 

    title: string;
    categoryID: string;
    body: string;                 
    result: string;

    categoryMatched: string ="";
    keywords: Keyword[];

    constructor(private router: Router, private categoryService: CategoryService, private questionsService: QuestionAnswerService,private myElement: ElementRef) {
        this.elementRef = myElement;
    }  

    submitQuestion() {
       
        this.question = new Question();
        this.question.title = this.title;
        this.question.body = this.body;
        this.question.categoryIds.push(this.categoryID);
        
        this.questionsService.addQuestions(this.question).subscribe(res => {
            console.log(res);
            this.question = res;
            this.router.navigate(['/question/home/0']);
        }); 
    }

    ngOnInit() {
        this.questionsService.getQuestions().subscribe(res => {
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
    
    public elementRef;
    public selectCategory = (icon) => {
        this.icon = icon;
        this.visible = true;
    }


    showDetailsQuestionsPanel(input: HTMLInputElement) {                
        this.filteredQuestionList = [];
    }
   

    public questionList = [];


    showMatchedCatogries(title: string)
    {
        if(title.length < 3)
            return;

        var keywordsInQuestionTitle = title.split(' ');
        console.log('split text');
        console.log(keywordsInQuestionTitle);
        if (keywordsInQuestionTitle.length > 1)
        {
            this.categoryMatched = "";
            keywordsInQuestionTitle.forEach(str => {

                var matched = this.keywords.find(x => x.text.toLowerCase() == str.toLocaleLowerCase());
                if (matched) {
                    var cat = this.categories.find(c => c.id == matched.categoryId);
                    this.categoryMatched += (cat == null ? "" : cat.name + " ");
                }
                
            })
           
        }
    }
    searchClass: string;
    showModal() {

        var form = document.getElementById("search-panel");
        var viewportOffset = form.getBoundingClientRect();
        // these are relative to the viewport, i.e. the window
        var top = Math.floor(viewportOffset.top);
        if (top > 0) {
            this.searchClass = document.getElementById("search-box").className;
            document.getElementById("search-box").className = "modal-container z-modal";
            form.style.marginTop = String(top) + "px";
        }
        console.log(top);
    }
    removeModal() {
        document.getElementById("search-box").className = this.placeBottom;
        var form = document.getElementById("search-panel");
        form.style.marginTop = '0';
        console.log("Remove " + this.searchClass);
    }
    filterQuestions() {
        
        //search after 3rd letter
        this.showMatchedCatogries(this.title);        

        if (this.title !== "" && this.title.length>2) {
            this.filteredQuestionList = this.questionList.filter(function (el) {
               return el.title.toLowerCase().indexOf(this.title.toLowerCase()) > -1;
            }.bind(this));
            this.showModal();

           
        }
        else
        {
            this.filteredQuestionList = [];
            console.log("Remove " + this.searchClass);
            this.removeModal();
        }
    }

    selectQuestionDetails(item) {
        //this.title = item;
        this.filteredQuestionList = [];
        this.router.navigate(['/question/detail/'+item.id]);
        
    }

    handleClick(event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredQuestionList = [];
        }
    }
}