import { Component, EventEmitter } from '@angular/core';
import { OtherExperience } from '../../../services/models/models.OtherExperience';
import { Category} from '../../../services/models';
import { ProfileService } from '../../../services/profile.service';
import { CategoryService } from '../../../services/category.service';
@Component({
    selector: 'add-otherexperience',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/add-otherexperience.component.html',
    providers: [ProfileService, CategoryService],
})
export class AddOtherExperienceComponent {
    otherExperience: OtherExperience = new OtherExperience();
    categories: Category[];

    constructor(private profileService: ProfileService, private categoryService: CategoryService) {
    }
    
    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
        });
    }

    close = new EventEmitter();

    onClickedExit() {
        this.close.emit('event');
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }

   

    saveOtherExperience() {
        console.log(this.otherExperience);
    }
    
}