import { Component } from '@angular/core';
import { QuestionAnswerService } from '../services/question-answer.service';
import { Http} from '@angular/http';

@Component({
    templateUrl: 'js/app/core/home.component.html',
    providers: [QuestionAnswerService]
})
export class HomeComponent {
    constructor(private questionServe: QuestionAnswerService) {
        setInterval(() => this.myTimer(questionServe), 70000000);
    }
    myTimer(serv) {
        console.log('Test');
        serv.keepalive().subscribe(response => {
            console.log(response);
        });
    }
}
