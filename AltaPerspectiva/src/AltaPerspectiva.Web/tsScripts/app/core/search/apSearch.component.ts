import { Component } from '@angular/core';

@Component({
    selector: 'ap-search',
    templateUrl: 'js/app/core/search/apSearch.component.html',
    styleUrls: ['js/app/core/search/search.css']
})
export class ApSearchComponent {
    public search = () => {
        location.replace('/question');
    }
}