import { Component, ViewEncapsulation,Input } from '@angular/core';

@Component({
    selector: 'ap-nav',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'js/app/core/nav/apnav.html'
})
export class ApNav {
    @Input() className: string;
    isbackGround = false;
}