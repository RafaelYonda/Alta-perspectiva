import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ap-tab-subpanel',
    templateUrl: 'js/app/core/tabs/tab-subpanel.component.html',
})
export class TabSubpanelComponent {
    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
