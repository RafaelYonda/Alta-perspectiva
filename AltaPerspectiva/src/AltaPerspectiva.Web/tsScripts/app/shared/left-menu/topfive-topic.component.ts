import { Component, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { CommunicationService } from '../../services/communication.service';
import { Topic } from '../../services/models';

@Component({
    selector: 'topfive-topic',
    templateUrl: 'js/app/shared/left-menu/topfive-topic.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
    providers: [QuestionService]
})
export class TopFiveTopicComponent {
    @Input() isHomePage: boolean;
    topFiveTopics: Topic[];
    questionService: QuestionService;
    topicId:string;
    levelId:string;
    constructor(questionService: QuestionService, private commServ: CommunicationService) {
        this.questionService = questionService;
        this.topFiveTopics = [];

    }

    ngOnInit() {

        this.commServ.getCategory().subscribe((catId: string) => {
            this.questionService.getTopFiveTopicsByCategoryId(catId).subscribe(res => {
                this.topFiveTopics = [];
                if (this.isHomePage) {
                    for (var i = 0; i < res.length; i++) {
                        this.topFiveTopics.push(res[i]);
                        if (i == 4) {
                            break;
                        }
                    }
                } else {
                    this.topFiveTopics = res;
                }
                

            });
        });

    }
}