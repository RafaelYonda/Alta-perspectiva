import { Component } from '@angular/core';
import {Image} from './image.interface';


@Component({
    selector: 'ap-banner',
    templateUrl: 'js/app/core/banner/apbanner.html',
    //Styles for the tag
    styleUrls: ['js/app/core/banner/carousel.css']
})
export class ApBanner {
    public heroes: number[] = [ 1,2,3,4,5,6,7,8];
    public images = IMAGES;
}
var IMAGES: Image[] = [
    { "title": "We are covered", "url": "../images/background.png" },
    { "title": "Generation Gap", "url": "../images/background.png" },
    { "title": "Potter Me", "url": "../images/background.png" },
    { "title": "Pre-School Kids", "url": "../images/background.png" },
];
