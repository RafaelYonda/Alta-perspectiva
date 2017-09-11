import { Component} from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../services/models';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-tabs',
    templateUrl: 'tabs.component.html',
    styleUrls: ['tabs.css'],
    providers: [CategoryService]
})
export class TabsComponent {
    categories: Category[];    
    tabLength = 6;
    transform: number;
    translate: string;
    _router: Router;
    isAnonymous: boolean;//anonymous added to 
    constructor(private categoryService: CategoryService, private commServ: CommunicationService, route: Router) {
        this._router = route;
        this.categoryService.getAllCategories().subscribe(res => {

            /// set general category for first time load
            this.commServ.setCategory("1"); 

            this.categories = res;
            //this.tabLength = this.categories.length - 6;
            this.tabLength = this.categories.length-1;
            this.transform = 0;
        });
    }
    ngOnInit() {
    }
    //anonymous checkbox
    onChange(event:boolean) {      
        this.isAnonymous = event;
    }
     firstTabPosition = 0;
    leftclick() {
        
        if (this.firstTabPosition < this.categories.length-2) {
            var elem = document.getElementById('tabsContainer').children[this.firstTabPosition];
            this.transform = this.transform - elem.clientWidth-20;
            console.log("Left");
            console.log(this.transform);
            console.log(this.firstTabPosition);
            this.translate = 'translateX(' + this.transform + 'px)';
            this.firstTabPosition++;
        }
        else
            return;
       
        
    }

    rightclick() {      
        
        if (this.firstTabPosition > 0) {
            this.firstTabPosition--;
            var elem = document.getElementById('tabsContainer').children[this.firstTabPosition];
            this.transform = this.transform + elem.clientWidth+20;
            console.log("Right");
            console.log(this.transform);
            console.log(this.firstTabPosition);
            this.translate = 'translateX(' + this.transform + 'px)';
            
        }
        else
            return;
        //return tabs are at its right most position
        //if (this.tabLength >= this.categories.length)
        //    return;
        
        //this.transform = this.transform + elem.clientWidth;
        //this.translate = 'translateX(' + this.transform + 'px)';
        //if (this.firstTabPosition > 0)
        //    this.firstTabPosition--;
    }
    getTransform() {
        return this.translate;
    }
    selectTab(id:string,sequence:number) {
        this.categories.forEach(element => {
            if (element.id == id) {
                element.active = 'active';
               
                if (sequence == 1)
                    id = "1"; /// to get all latest question
            }
            else element.active = '';
        });
        this.commServ.setCategory(id);
        this._router.navigateByUrl('home/tab/' + id, { skipLocationChange: true });
    }
}
