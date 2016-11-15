import { Component, Input } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/category';
import { Router } from '@angular/router';

@Component({
    selector: 'apq-search',
    templateUrl: 'js/app/questions/search/question-search.component.html',
    styleUrls: ['js/app/questions/search/search.css'],
    providers: [CategoryService]
})
export class QuestionSearchComponent {
    _router: Router;
    //@Input() placeBottom: string;
    @Input() placeBottom: string = 'bottom-float';
    public icon: string;
    public visible = false;
    categories: Category[];
    constructor(private categoryService: CategoryService, route: Router) {
        this._router = route;
        this.categories = this.categoryService.getCategories();
    }
    public search = () => {
        this._router.navigateByUrl('/question');
    }
    public selectCategory = (icon) => {
        this.icon = icon;
        this.visible = true;
        console.log(event);
    }
}