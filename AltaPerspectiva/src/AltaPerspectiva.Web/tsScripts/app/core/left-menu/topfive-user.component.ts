import { Component} from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import {User} from '../../services/models';

@Component({
    selector: 'topfive-user',
    templateUrl: 'js/app/core/left-menu/topfive-user.component.html',
    styleUrls: ['js/app/shared/styles/left-menu.css'],
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