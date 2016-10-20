import { Component } from '@angular/core';

@Component({
    selector:'ap-tabs',
    templateUrl: 'js/app/core/tabs/tabs.component.html',
})
export class TabsComponent {
    catagories: any = [
        { id: 1, name: 'categoty1', icon: 'icon1', active:true },
        { id: 2, name: 'categoty2', icon: 'icon2' },
        { id: 3, name: 'categoty3', icon: 'icon3'  },
        { id: 4, name: 'categoty4', icon: 'icon4'  },
        { id: 5, name: 'categoty5', icon: 'icon5' }
    ];
}
