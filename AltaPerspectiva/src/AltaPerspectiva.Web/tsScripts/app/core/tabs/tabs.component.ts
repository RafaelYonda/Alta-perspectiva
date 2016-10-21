import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { Category } from '../../services/category'

@Component({
    selector:'ap-tabs',
    templateUrl: 'js/app/core/tabs/tabs.component.html',
    providers: [CategoryService]
})
export class TabsComponent {
    categories: Category[];

    constructor(private categoryService: CategoryService) {
        this.categories = this.categoryService.getCategories();
    }

    selectTab(id){
        console.log(id);
        this.categories.forEach(element => {
            if(element.id==id){
                element.active='active';
            }
            else element.active='';
        });
    }
}
