import { Component, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { CommunicationService } from '../../services/communication.service';
import { Topic } from '../../services/models';

@Component({
    selector: 'related-topic',
    templateUrl: 'js/app/shared/left-menu/related-topic.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
    providers: [QuestionService]
})
export class RelatedTopicComponent {

    relatedTopics: Topic[];
    questionService: QuestionService;

    constructor(questionService: QuestionService, private commServ: CommunicationService) {
        this.questionService = questionService;
        this.relatedTopics = [];
    }

    ngOnInit() {
        this.commServ.getCategory().subscribe((topicId: string) => {
            this.questionService.getRelatedTopicsByTopicId(topicId).subscribe(res => {
                this.relatedTopics = res;
            });
        });

    }
}