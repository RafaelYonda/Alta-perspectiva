import { Component, EventEmitter } from '@angular/core';
import { OtherExperience } from '../../../services/models/models.OtherExperience';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'add-otherexperience',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/add-otherexperience.component.html',
    providers: [ProfileService],
})
export class AddOtherExperienceComponent {
    otherExperience: OtherExperience = new OtherExperience();
    constructor(private profileService: ProfileService) {
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