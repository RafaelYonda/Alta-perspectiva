import { Component, ViewEncapsulation,Input } from '@angular/core';

@Component({
    selector: 'apq-nav',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'js/app/questions/nav/question-nav.component.html',
})
export class questionNav {
    @Input() className: string;
    isbackGround = false;
}