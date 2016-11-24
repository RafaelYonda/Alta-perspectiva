import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Question } from '../../services/models';

@Component({
    selector: 'ap-tab-subpanel',
    templateUrl: 'js/app/core/tabs/tab-subpanel.component.html',
    styleUrls: ['js/app/core/tabs/tab-panel.css'],
    providers: [QuestionAnswerService]
})
export class TabSubpanelComponent {
    id: number;
    private sub: any;
    questions: Question[];

    constructor(private route: ActivatedRoute, private questionAnswerService: QuestionAnswerService) {
        //this.questions = this.questionAnswerService.getQuestionByCategory('');
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            //this.questions = this.questionAnswerService.getQuestionByCategory(params['id']);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
