import { Component } from '@angular/core';
import { QuestionAnswerService } from '../services/question-answer.service';
import { Http} from '@angular/http';

@Component({
    templateUrl: 'js/app/core/home.component.html',
    providers: [QuestionAnswerService]
})
export class HomeComponent {
    constructor(private questionServe: QuestionAnswerService ) {
        var myVar = setInterval(this.myTimer(questionServe), 70000000);
    }
    //ngOninit() {
        
    //}
    myTimer(serv) {
        
        serv.keepalive().subscribe(response => {
            var z=setInterval(this.myTimer(serv), 70000000);
            console.log(response);
        });
        console.log('Test');
    }
}
