import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/models';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-tabs',
    templateUrl: 'js/app/core/tabs/tabs.component.html',
    styleUrls: ['js/app/core/tabs/tabs.css'],
    providers: [CategoryService]
})
export class TabsComponent {
    categories: Category[];
    tabLength = 6;
    transform: number;
    translate: string;
    _router: Router;
    constructor(private categoryService: CategoryService, route: Router) {
        this._router = route;

        //====
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
            this.categories.forEach(function (el) {
                el.active = 'zzz';
            });
            this.categories[0].active = 'active';
            this.tabLength = this.categories.length - 6;
            this.transform = 0;
        });
    }
    ngOnInit() {
        

    }
    leftclick() {
        //return tabs are at its left most position
        console.log(this.tabLength);
        if (this.tabLength <= 0)
            return;
        this.transform = this.transform - 170;
        this.translate = 'translateX(' + this.transform + 'px)';
        this.tabLength--;
    }

    rightclick() {
        console.log(this.tabLength);
        //return tabs are at its right most position
        if (this.tabLength >= (this.categories.length - 6))
            return;
        this.transform = this.transform + 170;
        this.translate = 'translateX(' + this.transform + 'px)';
        this.tabLength++;
    }
    getTransform() {
        return this.translate;
    }
    selectTab(id) {
        this.categories.forEach(element => {
            if (element.id == id) {
                element.active = 'active';
            }
            else element.active = '';
        });
        this._router.navigateByUrl('home/tab/' + id, { skipLocationChange: true });
    }
}
