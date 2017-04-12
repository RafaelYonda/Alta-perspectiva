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
    //constructor() {
    //topic
    // <!--<a[routerLink]="['/question/home',question?.categories[0]?.id,question?.questionTopics[0]?.topicId,question?.questionLevels[0]?.levelId]" > {{question ?.questionTopicNames[0]}}</a>-->
    //level
    //<a[routerLink]="['/question/home',question?.categories[0]?.id,question?.questionTopics[0]?.topicId,question?.questionLevels[0]?.levelId]" > {{question ?.questionLevelNames[0]}}</a>-->

    //}
    topicRoute(categoryId: string, topicId: string) {
        //  console.log(this.question);

        if (!topicId) {
            topicId = '0';
        }

        this._router.navigateByUrl('/question/home/' + categoryId + '/' + topicId + '/' + 0);
    }
    levelRoute(categoryId: string, topicId: string,levelId: string){
      //  console.log(this.question);

        if (!topicId) {
            topicId = '0';
        }
      
        this._router.navigateByUrl('/question/home/' + categoryId + '/' + topicId+'/'+levelId);
    }
    ngOnInit() {
       // console.log(this.question);
    }
}