import { Component, Input } from '@angular/core';
import { CategoryWiseAnswer } from '../../../services/models/models.categorywiseanswer';
@Component({
    selector: 'profile-category',
    templateUrl: 'js/app/dashboard/viewprofile/profile-category/profile-category.component.html'
})
export class ProfileCategoryComponent {
    @Input() categoryWiseAnswers: CategoryWiseAnswer[];
}