﻿import { Component, HostListener, ElementRef, Inject} from '@angular/core';
import { WindowRefService } from '../../services/window-ref.service';

@Component({
    selector: 'ap-banner',
    templateUrl: 'apbanner.component.html',
    //Styles for the tag
    styleUrls: ['carousel.css'],
})
export class ApBannerComponent {
    public images = IMAGES;
    private bannerHeight: Number = 200;
    _window: Window;
    constructor(private _el: ElementRef, windowRef: WindowRefService) {
        this._window = windowRef.nativeWindow;
    }

    moveValue: string;
    movePosition: number=0;
    slideImage(move: number) {
        this.movePosition = move;
        this.moveValue = move*(-25)+"%";
    }

    @HostListener('window:scroll', ['$event'])
    track(event: Event) {
        var width = window.innerWidth;
        if (width < 767)
            return false;
        var searchPanel = document.getElementById('search-box');
        var tabPanel = document.getElementById('tabs');
        //var categoryPanel = document.getElementById('leftPanel');
        var doc = this._el.nativeElement;
        var nodeBanner = doc.childNodes[0];
        if (this._window.scrollY > 270) {
            searchPanel.style.top = '10px'; 
            searchPanel.classList.remove("z-search");
            tabPanel.classList.add("on-scroll-padding");
            this._el.nativeElement.parentNode.classList.add("fixed-top");
            this._el.nativeElement.childNodes[0].classList.add("fixed-height");
        }
        else {
            searchPanel.style.removeProperty('top');
            searchPanel.classList.add("z-search");
            this._el.nativeElement.parentNode.classList.remove("fixed-top");
            tabPanel.classList.remove("on-scroll-padding");
            this._el.nativeElement.childNodes[0].classList.remove("fixed-height");
        }
        // see http://juristr.com/blog/2016/01/learning-ng2-dynamic-styles/
    }
}
interface Image {
    title: string;
    desccription: string;
    url: string;
}
var IMAGES: Image[] = new Array<Image>();
IMAGES=[
    
    {
        title: "¿Cuál es la etapa de tu negocio?",
        desccription: "Ideación<br/>Start up<br/>Crecimiento<br/>Sostenimiento<br/>Expansión",
        url: "../images/BANNER-FINAL.png"
    },
    {
        title: "¿Cuál es tu necesidad?",
        desccription: "Comunicación gráfica<br/>Ideas de negocios<br/>Pensamiento estratégico<br/>Mercadeo<br/>Planeación financiera...",
        url: "../images/Backcground_2.png"
    },
    {
        title: "Conecta y comparte tu conocimiento",
        desccription: "Conceptos <br/>Experiencias<br/>Herramientas",
        url: "../images/Backcground_3.png"
    },
    //{ "title": "iHaz preguntas sobre negocios!", "url": "../images/Backcground_4.png" }
];
