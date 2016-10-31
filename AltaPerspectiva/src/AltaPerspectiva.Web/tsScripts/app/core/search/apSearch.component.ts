import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { Category } from '../../services/category'

@Component({
    selector: 'ap-search',
    templateUrl: 'js/app/core/search/apSearch.component.html',
    styleUrls: ['js/app/core/search/search.css'],
    providers: [CategoryService]
})
export class ApSearchComponent {
    public icon: string;
    public visible = false;
    categories: Category[];
    constructor(private categoryService: CategoryService) {
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
}