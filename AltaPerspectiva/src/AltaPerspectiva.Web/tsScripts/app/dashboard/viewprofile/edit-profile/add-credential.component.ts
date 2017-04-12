﻿import { Component, EventEmitter } from '@angular/core';
import { CredentialViewModel } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'add-credential',
    templateUrl: 'add-credential.component.html',
    providers: [ProfileService],
})
export class AddCredentialComponent {
    credential: CredentialViewModel = new CredentialViewModel();
    constructor(private profileService: ProfileService) {
    }
    close = new EventEmitter();
    
    onClickedExit() {
        this.close.emit('event');
    }
    handleClick(event:any) {
        //removel the modal on clicking out side the panel
       // var idAttr = event.srcElement.attributes.id;
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        //removel the modal on clicking out side the panel
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    saveCredentialTitle() {
        this.profileService.saveCredentialTitle(this.credential).subscribe(res => {
            this.close.emit('event');            
        });
    }
    DeleteCredentialTitle() {
        this.credential.title = "";
        this.profileService.saveCredentialTitle(this.credential).subscribe(res => {
            this.close.emit('event');            
        });
    }
}