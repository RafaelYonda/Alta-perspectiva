/// <reference path="../../services/comment.service.ts" />
import { Component, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import {  Question} from '../../services/models';

@Component({
    selector: 'ap-status',
    templateUrl: 'js/app/shared/status/status.component.html',
    styleUrls: ['js/app/shared/status/status.component.css'],
})
export class StatusComponent {
    @Input() questionId: string = '';

    ngOnInit() {
        
    }
}