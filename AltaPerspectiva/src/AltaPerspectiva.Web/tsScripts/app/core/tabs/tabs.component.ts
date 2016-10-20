import { Component } from '@angular/core';

@Component({
    selector:'ap-tabs',
    templateUrl: 'js/app/core/tabs/tabs.component.html',
})
export class TabsComponent {
    catagories: any = [
        { id: 1, name: 'categoty1', icon: 'icon1', active:'active' },
        { id: 2, name: 'categoty2', icon: 'icon2',active:''},
        { id: 3, name: 'categoty3', icon: 'icon3',active:''},
        { id: 4, name: 'categoty4', icon: 'icon4',active:''},
        { id: 5, name: 'categoty5', icon: 'icon5',active:''}
    ];
    selectTab(id){
        console.log(id);
        this.catagories.forEach(element => {
            if(element.id==id){
                element.active='active';
            }
            else element.active='';
        });
    }
}
