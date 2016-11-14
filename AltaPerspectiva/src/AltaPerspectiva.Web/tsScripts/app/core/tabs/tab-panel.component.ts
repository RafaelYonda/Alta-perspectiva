import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'ap-tab-panel',
    templateUrl: 'js/app/core/tabs/tab-panel.component.html',
    styleUrls: ['js/app/core/tabs/tab-panel.css'],
})

export class TabPanelComponent {
    _router: any;
    constructor(private router: Router) {
        this._router = router;
    }
    ngOnInit() {
        console.log(localStorage.getItem('currentUser'));
        this._router.navigateByUrl('home/tab/1', { skipLocationChange: true });
    }
}