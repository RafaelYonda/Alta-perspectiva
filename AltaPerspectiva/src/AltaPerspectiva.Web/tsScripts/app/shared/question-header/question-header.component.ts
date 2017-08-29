import { Component, Input } from '@angular/core';
import {Question } from '../../services/models';
import { Router } from '@angular/router';
@Component({
    selector: 'question-header',
    templateUrl: 'question-header.component.html',
    styleUrls: ['question-header.component.css'],
})
export class QuestionHeaderComponent {
    @Input() question: Question;
    categoryId:string;
    topicId: string;
    levelId: string;
    constructor(private _router: Router) {
        
    }
    topicRoute(categoryId: string, topicId: string) {
        if (!topicId) {
            topicId = '0';
        }

        this._router.navigateByUrl('/question/home/' + categoryId + '/' + topicId + '/' + 0);
    }
    levelRoute(categoryId: string, topicId: string,levelId: string){
        if (!topicId) {
            topicId = '0';
        }
      
        this._router.navigateByUrl('/question/home/' + categoryId + '/' + topicId+'/'+levelId);
    }
    ngOnInit() {
    }
}