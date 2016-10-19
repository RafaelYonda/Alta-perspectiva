import { Component } from '@angular/core';

@Component({
    selector: 'ap-banner',
    templateUrl: 'js/app/core/banner/apbanner.html',
    //Styles for the tag
    styleUrls: ['js/app/core/banner/carousel.css']
})
export class ApBanner {
    public heroes: number[] = [ 1,2,3,4,5,6,7,8];
}

