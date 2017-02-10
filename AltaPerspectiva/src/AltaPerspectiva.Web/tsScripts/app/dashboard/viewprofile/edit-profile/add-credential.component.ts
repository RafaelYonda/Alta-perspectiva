import { Component, EventEmitter } from '@angular/core';
import { CredentialViewModel } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'add-credential',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/add-credential.component.html',
    providers: [ProfileService],
})
export class AddCredentialComponent {
    constructor(private profileService:ProfileService) { }
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
    saveCredential(titile: string) {
        var credential: CredentialViewModel = new CredentialViewModel();
        credential.title = titile;
        console.log(titile);
        this.profileService.saveCredentialTitle(credential).subscribe(res => {
            console.log(res);
        });
    }
}