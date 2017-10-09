import { Component, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { CommunicationService } from '../../services/communication.service';
import { Level } from '../../services/models';

@Component({
    selector: 'level',
    templateUrl: 'level.component.html',
    providers: [QuestionService]
})
export class LevelComponent {

    levels: Level[];
    questionService: QuestionService;
    categoryId: string;
    topicId:string;

    constructor(questionService: QuestionService, private commServ: CommunicationService) {
        this.questionService = questionService;
        this.levels = [];
    }

    ngOnInit() {
        this.topicId = this.commServ.getTopicId();
        this.commServ.getCategory().subscribe((catId: string) => {
            this.categoryId = catId;
            this.topicId = this.commServ.getTopicId();
            this.questionService.getLevel().subscribe(res => {
                this.levels = res;
            });
        });

    }
}