import { Component, Input } from '@angular/core';
import {User, Comment } from '../../services/models';

@Component({
    selector: 'user-info',
    templateUrl: 'js/app/shared/user-info/user-info.component.html',
    styleUrls: ['js/app/shared/user-info/user-info.component.css'],
})
export class UserInfoComponent {
    @Input() userObj: User;
    @Input() viewDate: Date;
}