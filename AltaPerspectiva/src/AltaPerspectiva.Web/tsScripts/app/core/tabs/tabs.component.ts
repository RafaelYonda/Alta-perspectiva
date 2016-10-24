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
    transform: number;
    translate: string;
    constructor(private categoryService: CategoryService) {
        this.categories = this.categoryService.getCategories();
        this.transform = 0;
    }
    leftclick() {
        console.log("Left click");
        this.transform = this.transform - 170;
        this.translate = 'translateX(' + this.transform + 'px)';
        console.log(this.translate);
    }

    rightclick() {
        console.log("right click");
        this.transform = this.transform + 170;
        this.translate = 'translateX(' + this.transform + 'px)';
        console.log(this.translate);
    }
    getTransform() {
        return this.translate;
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
