/// <reference path="category.ts" />
import { Component } from '@angular/core';
import { CategoryService } from './services/category.service'
import { Category } from './category'

@Component({
    templateUrl: 'js/app/core/home.component.html',
    providers: [CategoryService]
})
export class HomeComponent {
    categories: Category[];

    constructor(private categoryService: CategoryService) { }

    getCategories(): void {
        this.categories = this.categoryService.getCategories();
    }
}
