import { Component, ElementRef, Inject } from '@angular/core';

@Component({
    selector: 'about-component',
    templateUrl: 'about.component.html',
    styleUrls: ['about.component.css'],
})

export class AboutComponent {

    public message: string;
    
    constructor() {
       
        this.message = 'Hello from AboutComponent constructor';
    }
    
}
