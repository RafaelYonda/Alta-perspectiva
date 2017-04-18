﻿import { Component} from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { CommunicationService } from '../../services/communication.service';
import {User} from '../../services/models';

@Component({
    selector: 'topfive-user',
    templateUrl: 'topfive-user.component.html',
    styleUrls: ['left-menu.css'],
    providers: [ProfileService]
})
export class TopFiveUserComponent {

    topFiveUsers:User[];
    userService: ProfileService;

    constructor(questionService: ProfileService, private commServ: CommunicationService) {
        this.topFiveUsers = [];
        this.userService = questionService;                      
    }

    ngOnInit() {
        this.commServ.getCategory().subscribe((catId: string) => {

            this.userService.GetTopFiveUserByCategory(catId).subscribe(res => {
                this.topFiveUsers = res;
                
            });
        });
    }
}