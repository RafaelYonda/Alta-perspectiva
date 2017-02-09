import { Component, EventEmitter } from '@angular/core';
@Component({
    selector: 'add-credential',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/add-credential.component.html'
})
export class AddCredentialComponent {
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
}