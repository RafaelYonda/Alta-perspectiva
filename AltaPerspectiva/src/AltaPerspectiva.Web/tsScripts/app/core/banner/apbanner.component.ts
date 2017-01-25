import { Component, HostListener, ElementRef, Inject} from '@angular/core';


@Component({
    selector: 'ap-banner',
    templateUrl: 'js/app/core/banner/apbanner.component.html',
    //Styles for the tag
    styleUrls: ['js/app/core/banner/carousel.css'],
})
export class ApBannerComponent {
    public images = IMAGES;
    private bannerHeight: Number = 200;
    _window: any;
    constructor(private _el: ElementRef, @Inject('Window') window: Window) {
        this._window = window;
    }

    moveValue: string;
    movePosition: number=0;
    slideImage(move: number) {
        this.movePosition = move;
        this.moveValue = move*(-25)+"%";
    }

    @HostListener('window:scroll', ['$event'])
    track(event) {
        var searchPanel = document.getElementById('search-box');
        //var categoryPanel = document.getElementById('leftPanel');
        var doc = this._el.nativeElement;
        var nodeBanner = doc.childNodes[0];
        if (this._window.scrollY > 250) {
            searchPanel.style.top = '0'; 
            searchPanel.style.paddingTop = '15px';
            this._el.nativeElement.parentNode.classList.add("fixed-top");
            //categoryPanel.classList.add('fixed-category');
            this._el.nativeElement.childNodes[0].classList.add("fixed-height");
        }
        else {
            searchPanel.style.removeProperty('top');
            this._el.nativeElement.parentNode.classList.remove("fixed-top");
            //categoryPanel.classList.remove('fixed-category');
            this._el.nativeElement.childNodes[0].classList.remove("fixed-height");
        }
        // see http://juristr.com/blog/2016/01/learning-ng2-dynamic-styles/
    }
}
var IMAGES: Image[] = [
    { "title": "iHaz preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz preguntas sobre negocios!", "url": "../images/background.png" },
];
