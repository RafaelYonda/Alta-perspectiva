var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener, ElementRef } from '@angular/core';
import { WindowRefService } from '../../services/window-ref.service';
var ApBannerComponent = (function () {
    function ApBannerComponent(_el, windowRef) {
        this._el = _el;
        this.images = IMAGES;
        this.bannerHeight = 200;
        this.movePosition = 0;
        this._window = windowRef.nativeWindow;
    }
    ApBannerComponent.prototype.slideImage = function (move) {
        this.movePosition = move;
        this.moveValue = move * (-25) + "%";
    };
    ApBannerComponent.prototype.track = function (event) {
        var width = window.innerWidth;
        if (width < 767)
            return false;
        var searchPanel = document.getElementById('search-box');
        var tabPanel = document.getElementById('tabs');
        var doc = this._el.nativeElement;
        var nodeBanner = doc.childNodes[0];
        if (this._window.scrollY > 270) {
            searchPanel.style.top = '0';
            searchPanel.style.paddingTop = '5px';
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
    };
    return ApBannerComponent;
}());
__decorate([
    HostListener('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], ApBannerComponent.prototype, "track", null);
ApBannerComponent = __decorate([
    Component({
        selector: 'ap-banner',
        templateUrl: 'apbanner.component.html',
        styleUrls: ['carousel.css'],
    }),
    __metadata("design:paramtypes", [ElementRef, WindowRefService])
], ApBannerComponent);
export { ApBannerComponent };
var IMAGES = new Array();
IMAGES = [
    {
        title: "¿Cuál es la etapa de tu negocio?",
        desccription: "Ideación<br/>Start up<br/>Crecimiento<br/>Sostenimiento<br/>Expansión",
        url: "../images/Backcground_1.png"
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
];
