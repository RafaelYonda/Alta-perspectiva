import { Component, EventEmitter } from '@angular/core';
import { Employment } from '../../../services/models/models.Employment';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'add-employment',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/add-employment.component.html',
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
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    onEmploymentSubmit() {
        
    }
    //DeleteCredentialTitle() {
    //    this.credential.title = "";
    //    this.profileService.saveCredentialTitle(this.credential).subscribe(res => {
    //        this.close.emit('event');
    //        console.log(res);
    //    });
    //}
}