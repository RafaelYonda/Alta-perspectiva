import { Component} from '@angular/core';
//import { QuestionAnswerService} from '../../services/question-answer.service';
import { ProfileService } from '../../services/profile.service';
//import { Category } from '../../services/models';
import {User} from '../../services/models';

@Component({
    selector: 'topfive-user',
    templateUrl: 'js/app/core/left-menu/topfive-user.component.html',
    styleUrls: ['js/app/core/left-menu/topfive-user.component.css'],
    providers: [ProfileService]//, CategoryService]
})
export class TopFiveUserComponent {

    topFiveUsers:User[];
    userService: ProfileService;

    constructor(questionService: ProfileService) {
        this.userService = questionService;                      
    }

    ngOnInit() {
        this.userService.GetTopFiveUser().subscribe(res => {
           this.topFiveUsers = res;
        });
    }
}