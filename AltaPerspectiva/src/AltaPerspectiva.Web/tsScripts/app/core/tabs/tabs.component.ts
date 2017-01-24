import { Component } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
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
    isAnonymous: boolean;//anonymous added to 
    constructor(private categoryService: CategoryService, private commServ: CommunicationService ,route: Router) {
        this._router = route;
        this.categoryService.getAllCategories().subscribe(res => {

            /// set general category for first time load
            this.commServ.setCategory("1"); 

            this.categories = res;
            this.tabLength = this.categories.length - 6;
            this.transform = 0;
        });
    }
    ngOnInit() {
       

        //console.log('on init');
        //this._router.navigateByUrl('home/tab/1', { skipLocationChange: true });
    }
    //anonymous checkbox
    onChange(event) {
        console.log('anonymous checkbox');
        this.isAnonymous = event;
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
    selectTab(id,sequence) {
        this.categories.forEach(element => {

            if (element.id == id) {
                element.active = 'active';
               
                if (sequence == 1)
                    id = 1; /// to get all latest question
            }
            else element.active = '';
        });
        this.commServ.setCategory(id);
        this._router.navigateByUrl('home/tab/' + id, { skipLocationChange: true });
    }
}
