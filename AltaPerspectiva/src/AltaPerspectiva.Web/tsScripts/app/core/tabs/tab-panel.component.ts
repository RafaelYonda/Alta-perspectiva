import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Question } from '../../services/models';

@Component({
    selector: 'ap-tab-panel',
    templateUrl: 'js/app/core/tabs/tab-panel.component.html',
    styleUrls: ['js/app/core/tabs/tab-panel.css'],
    providers: [QuestionAnswerService]
})
export class TabPanelComponent {
    id: string;
    private sub: any;
    questions: Question[];

    constructor(private route: ActivatedRoute, private questionAnswerService: QuestionAnswerService) {
        //this.questions = this.questionAnswerService.getQuestionByCategory('');
    }

    ngOnInit() {        
        this.sub = this.route.params.subscribe(params => {

            this.id = params['id']; // (+) converts string 'id' to a number 
            //this.questions = this.questionAnswerService.getQuestionByCategory(params['id']);
            this.questionAnswerService.getQuestionsByCategory(this.id).subscribe(res => {
                this.questions = res;
                //console.log(this.questions);
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
