import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: 'ap-banner',
    templateUrl: 'js/app/core/banner/apbanner.component.html',
    //Styles for the tag
    styleUrls: ['js/app/core/banner/carousel.css']
})
export class ApBannerComponent {
    public heroes: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    public images = IMAGES;
    private bannerHeight: Number = 200;
    constructor(private _el: ElementRef) {
    }

    @HostListener('window:scroll', ['$event'])
    track(event) {
        console.debug("Scroll Event", this._el.nativeElement.offsetParent.scrollTop);
        // see http://juristr.com/blog/2016/01/learning-ng2-dynamic-styles/
    }
}
var IMAGES: Image[] = [
    { "title": "iHaz tu preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz tu preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz tu preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz tu preguntas sobre negocios!", "url": "../images/background.png" },
];

