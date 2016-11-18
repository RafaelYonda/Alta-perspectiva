import { Component, Input, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { Category } from '../../services/category'

@Component({
    selector: 'ap-search',
    templateUrl: 'js/app/shared/search/apSearch.component.html',
    styleUrls: ['js/app/shared/search/search.css'],
    providers: [CategoryService]
})
export class ApSearchComponent {
    //@Input() placeBottom: string;
    @Input() placeBottom: string = '';
    public icon: string;
    public visible = true;
    categories: Category[];
    constructor(private categoryService: CategoryService, myElement: ElementRef) {
        this.elementRef = myElement;
        this.categories = this.categoryService.getCategories();
    }
    public search = () => {
        location.replace('/question');
    }
    public filteredList = [];
    public elementRef;
    public selectCategory = (icon) => {
        this.icon = icon;
        this.visible = true;
    }
    showPanel(input: HTMLInputElement) {
        console.log("Drop down");
        input.value = null;
        this.filteredList = [];
    }
    //=============Autocomplete Codesd===================
     public query = '';
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


    filter() {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.filteredList = [];
        }
    }

    select(item) {
        this.query = item;
        this.filteredList = [];
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
            this.filteredList = [];
        }
    }
}