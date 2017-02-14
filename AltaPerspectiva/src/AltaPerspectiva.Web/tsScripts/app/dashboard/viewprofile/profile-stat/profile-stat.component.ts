import { Component, Input } from '@angular/core';
import { ProfileParameter } from '../../../services/models/models.profileparameter';
@Component({
    selector: 'profile-stat',
    templateUrl: 'js/app/dashboard/viewprofile/profile-stat/profile-stat.component.html'
})
export class ProfileStatComponent {
    @Input() profileParam: ProfileParameter;
}