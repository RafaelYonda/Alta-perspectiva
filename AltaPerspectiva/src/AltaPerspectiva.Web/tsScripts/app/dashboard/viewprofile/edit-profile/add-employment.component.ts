import { Component, EventEmitter } from '@angular/core';
import { Employment } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'add-employment',
    templateUrl: 'add-employment.component.html',
    providers: [ProfileService],
})
export class AddEmploymentComponent {
    employment: Employment = new Employment();
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
    onEmploymentSubmit() {
         this.profileService.AddEmployment(this.employment).subscribe(res => {
            this.close.emit('event');
         });
    }
    DeleteEmployment() {
        this.profileService.DeleteEmployment(this.employment).subscribe(res => {
            this.employment = new Employment();
            this.close.emit('event');
        });
    }
}