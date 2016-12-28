import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
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
    shareUrl: string;

    constructor(private route: ActivatedRoute, private router: Router, private questionAnswerService: QuestionAnswerService) {
        //this.questions = this.questionAnswerService.getQuestionByCategory('');
    }

    ngOnInit() {        
        this.sub = this.route.params.subscribe(params => {
            this.shareUrl = this.router.url;
            this.id = params['id']; // (+) converts string 'id' to a number 
            //this.questions = this.questionAnswerService.getQuestionByCategory(params['id']);
            this.questionAnswerService.getQuestionsByCategory(this.id).subscribe(res => {
                this.questions = res;
                this.questions.forEach(x => x.lastAnswer = x.answers[x.answers.length - 1]);
                //console.log(this.questions);
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
