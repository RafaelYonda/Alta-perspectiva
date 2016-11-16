import { Component, Input, ElementRef } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { Category } from '../../services/category'

@Component({
    selector: 'ap-search',
    templateUrl: 'js/app/core/search/apSearch.component.html',
    styleUrls: ['js/app/core/search/search.css'],
    providers: [CategoryService]
})
export class ApSearchComponent {
    //@Input() placeBottom: string;
    @Input() placeBottom: string = 'bottom-float';
    public icon: string;
    public visible = false;
    categories: Category[];
    constructor(private categoryService: CategoryService, myElement: ElementRef) {
        this.elementRef = myElement;
        this.categories = this.categoryService.getCategories();
    }
    public search = () => {
        location.replace('/question');
    }
    public selectCategory = (icon) => {
        this.icon = icon;
        this.visible = true;
        console.log(event);
    }

    //=============Autocomplete Codesd===================
     public query = '';
    public countries = ["Albania asdfasda asdfasda asdas asd as asd as ", "Andorra asdf asfasdf asfasf asf a ", "Armenia", "Austria", "Azerbaijan", "Belarus",
        "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
        "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
        "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
        "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
        "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
        "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
        "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
    public filteredList = [];
    public elementRef;

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