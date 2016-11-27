import { Component, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from '../../services/category.service'
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Category, Question, AskQuestionViewModel } from '../../services/models';

@Component({
    selector: 'ap-search',
    templateUrl: 'js/app/shared/search/apSearch.component.html',
    styleUrls: ['js/app/shared/search/search.css'],
    providers: [CategoryService, QuestionAnswerService]
})



export class ApSearchComponent {
   
    //@Input() placeBottom: string;
    @Input() placeBottom: string = '';
    public icon: string;
    public visible = true;
    categories: Category[];
    question: Question;
    questionVM: AskQuestionViewModel;
    result: string;

    constructor(private router: Router, private categoryService: CategoryService, private questionsService: QuestionAnswerService, myElement: ElementRef) {
        this.elementRef = myElement;
        this.categories = this.categoryService.getCategories();
        this.questionVM = new AskQuestionViewModel("","","");             
    }  

    submitQuestion() {
        console.log("Form submit");
        this.question.title = this.questionVM.title;
        this.question.questionBody = this.questionVM.details;

        this.questionsService.addQuestions(this.question).subscribe(res => {
            this.question = res;
            this.router.navigate(['/question/home']);
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

    //=============Autocomplete Codesd===================
     
     public countries = ["What are some amazing pictures one has to see twice to understand?",
         "What is x2−−√x2 equal to?",
         "If you were on death row, and were given the chance to listen to one last song before your execution, what would it be?",
         "What is the most satisfying passive-aggressive thing you have ever done to a really mean or rude person?",
         "What is the biggest mistake made by a multi-billion dollar company?",
         "What song do you currently play on repeat?",
         "What movie can you watch all the time and never get tired of watching?",
         "What medical condition do you have that you thought was absolutely normal?",
         "What is the biggest mistake that a big company has made?",
         "What is the best song to listen to after a stressful day at work?",
         "What is the toughest coding question that you faced in an interview?",
         "What song would you choose to go out to?",
         "What are some plane hacks?",
         "Why is BMW successful?",
         "Which is the worst car ever made?"
     ];


    public filteredQuestionList = [];
    filterQuestions() {
        if (this.questionVM.title !== "") {
            this.filteredQuestionList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.questionVM.questionTitle.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.filteredQuestionList = [];
        }
    }

    selectQuestionDetails(item) {
        this.questionVM.title = item;
        this.filteredQuestionList = [];
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