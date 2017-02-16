import { Component, EventEmitter } from '@angular/core';
import { Login} from '../../services/models/models.Login';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
@Component({
    selector: 'login',
    templateUrl: 'js/app/shared/login/login.component.html',
    //styleUrls: ['js/app/shared/dialog-modal/dialog.component.css'],
    providers: [QuestionAnswerService]
})
export class LoginComponent {
    close = new EventEmitter();
    login: Login;
    _router: Router;
    onClickedExit() {
        this.close.emit('event');
    }
    constructor(private dataService: QuestionAnswerService, router: Router) {
        this._router = router;
    }
    ngOnInit() {

    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'loginModal')
            this.close.emit('event');
    }
    postLogin() {
        console.log('Login'+this.login);
       
    }

}