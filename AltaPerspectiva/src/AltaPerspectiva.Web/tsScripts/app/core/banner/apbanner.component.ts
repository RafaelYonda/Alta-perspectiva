import { Component, HostListener, ElementRef,Inject} from '@angular/core';


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
    _window: any;
    constructor(private _el: ElementRef, @Inject('Window') window: Window) {
        this._window = window;
    }

    @HostListener('window:scroll', ['$event'])
    track(event) {
        //var doc = this._el.nativeElement.offsetParent;
        var doc = this._el.nativeElement;
        var nodeBanner = doc.childNodes[0];
        console.debug(this._window.scrollY);
        if (this._window.scrollY > 200) {
            console.debug(this._el.nativeElement.parentNode);
            console.debug(((this._el.nativeElement.parentNode).parentNode).parentNode);
            console.debug(this._el.nativeElement.childNodes[1]);

            this._el.nativeElement.parentNode.classList.add("fixed-top");
            ((this._el.nativeElement.parentNode).parentNode).parentNode.classList.add("parent-padding");
            this._el.nativeElement.childNodes[1].classList.add("fixed-height");
        }
        else {
            this._el.nativeElement.parentNode.classList.remove("fixed-top");
            ((this._el.nativeElement.parentNode).parentNode).parentNode.classList.remove("parent-padding");
            this._el.nativeElement.childNodes[1].classList.remove("fixed-height");
        }
            
        // see http://juristr.com/blog/2016/01/learning-ng2-dynamic-styles/
    }
}
var IMAGES: Image[] = [
    { "title": "iHaz tu preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz tu preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz tu preguntas sobre negocios!", "url": "../images/background.png" },
    { "title": "iHaz tu preguntas sobre negocios!", "url": "../images/background.png" },
];

