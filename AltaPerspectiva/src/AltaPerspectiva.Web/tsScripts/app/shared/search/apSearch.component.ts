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
    
    filterQuestions() {
        console.log(this.questionList);
        if (this.title !== "" && this.title.length>2) {
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