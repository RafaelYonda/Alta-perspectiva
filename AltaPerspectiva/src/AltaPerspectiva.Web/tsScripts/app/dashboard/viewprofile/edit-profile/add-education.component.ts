/// <reference path="../../../services/models/models.profile.ts" />
import { Component, EventEmitter } from '@angular/core';
import { Education } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'add-education',
    templateUrl: 'add-education.component.html',
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
    handleClick(event: any) {
        //removel the modal on clicking out side the panel
        //var idAttr = event.srcElement.attributes.id;
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        //removel the modal on clicking out side the panel
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    saveEducation() {

        this.profileService.AddEducation(this.education).subscribe(res => {
            this.close.emit('event');
        });
    }
    DeleteEducation() {
        this.profileService.DeleteEducation(this.education).subscribe(res => {
            this.education = new Education();
            this.close.emit('event');
        })
    }
}