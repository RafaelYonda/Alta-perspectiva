import { Component } from '@angular/core';
import { QuestionAnswerService } from '../services/question-answer.service';
import { Http} from '@angular/http';

@Component({
    templateUrl: 'home.component.html',
    providers: [QuestionAnswerService]
})
export class HomeComponent {
    constructor(private questionServe: QuestionAnswerService) {
        setInterval(() => this.myTimer(questionServe), 1080000);
    }
    myTimer(serv:any) {
        serv.keepalive().subscribe((response:any) => {
        });
    }
}
