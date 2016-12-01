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

    constructor(private router: Router, private categoryService: CategoryService, private questionsService: QuestionAnswerService, myElement: ElementRef) {
        this.elementRef = myElement;
        //this.categories = this.categoryService.getCategories();
        this.body = "<p>Question details</p>";
        
    }  

    submitQuestion() {      
        
        this.question = new Question();
        this.question.title = this.title;
        this.question.body = this.body;
        this.question.categoryId.push(this.categoryID);
        
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
     
     //public questionList = ["What are some amazing pictures one has to see twice to understand?",
     //    "What is x2−−√x2 equal to?",
     //    "If you were on death row, and were given the chance to listen to one last song before your execution, what would it be?",
     //    "What is the most satisfying passive-aggressive thing you have ever done to a really mean or rude person?",
     //    "What is the biggest mistake made by a multi-billion dollar company?",
     //    "What song do you currently play on repeat?",
     //    "What movie can you watch all the time and never get tired of watching?",
     //    "What medical condition do you have that you thought was absolutely normal?",
     //    "What is the biggest mistake that a big company has made?",
     //    "What is the best song to listen to after a stressful day at work?",
     //    "What is the toughest coding question that you faced in an interview?",
     //    "What song would you choose to go out to?",
     //    "What are some plane hacks?",
     //    "Why is BMW successful?",
     //    "Which is the worst car ever made?"
     //];

    public questionList = [];
    
    filterQuestions() {
        console.log(this.questionList);
        if (this.title !== "") {
            this.filteredQuestionList = this.questionList.filter(function (el) {
                console.log(el);
                return el.title.toLowerCase().indexOf(this.title.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.filteredQuestionList = [];
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