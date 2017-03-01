/// <reference path="../../../services/models/models.profile.ts" />
import { Component, EventEmitter } from '@angular/core';
import { Education } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'add-education',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/add-education.component.html',
    providers: [ProfileService],
})
export class AddEducationComponent {
    education: Education = new Education();
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
    saveEducation() {

        console.log(this.education);
        this.profileService.AddEducation(this.education).subscribe(res => {
            this.close.emit('event');
            console.log(res);
        });
    }
    DeleteEducation() {
        this.profileService.DeleteEducation(this.education).subscribe(res => {
            this.education = new Education();
            this.close.emit('event');
        })
    }
}