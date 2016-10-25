import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service'
import { Category } from '../../services/category'

@Component({
    selector:'ap-tabs',
    templateUrl: 'js/app/core/tabs/tabs.component.html',
    styleUrls: ['js/app/core/tabs/tabs.css'],
    providers: [CategoryService]
})
export class TabsComponent {   
    categories: Category[];
    tabLength=6;
    transform: number;
    translate: string;
    constructor(private categoryService: CategoryService) {
        this.categories = this.categoryService.getCategories();
        this.tabLength=this.categories.length-6;
        this.transform = 0;
    }
    leftclick() {
        //return tabs are at its left most position
        if(this.tabLength<=0)
            return;
        this.transform = this.transform - 170;
        this.translate = 'translateX(' + this.transform + 'px)';
        this.tabLength--;
    }

    rightclick() {
        //return tabs are at its right most position
        if(this.tabLength>=(this.categories.length-6))
            return;
        this.transform = this.transform + 170;
        this.translate = 'translateX(' + this.transform + 'px)';
        this.tabLength++;
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
