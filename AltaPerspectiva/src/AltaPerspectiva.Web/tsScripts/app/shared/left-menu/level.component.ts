import { Component, Input } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { CommunicationService } from '../../services/communication.service';
import { Level } from '../../services/models';

@Component({
    selector: 'level',
    templateUrl: 'js/app/shared/left-menu/level.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
    providers: [QuestionService]
})
export class LevelComponent {

    levels: Level[];
    questionService: QuestionService;

    constructor(questionService: QuestionService, private commServ: CommunicationService) {
        this.questionService = questionService;
        this.levels = [];
    }

    ngOnInit() {
        this.commServ.getCategory().subscribe((catId: string) => {
            this.questionService.getLevel().subscribe(res => {
                this.levels = res;
            });
        });

    }
}