import { Component, EventEmitter, ViewContainerRef } from '@angular/core';
import { CredentialViewModel } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'linkedin',
    templateUrl: 'linkedin.component.html',
    providers: [ProfileService],
})
export class LinkedinComponent {
    title: string;
    useId: string;
    constructor(private profileService: ProfileService, public toastr: ToastsManager, vcr: ViewContainerRef) {
    }
    close = new EventEmitter();

    onClickedExit() {
        this.close.emit('event');
    }
    handleClick(event: any) {
        //removel the modal on clicking out side the panel
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    saveTitle() {
        var credential = new CredentialViewModel();
        credential.userId = this.useId;
        credential.linkedinLink = this.title;
        this.profileService.SaveSocialLink(credential).subscribe(res => {
            this.toastr.success('Actualizado correctamente.');
            this.close.emit('event');
            this.title = '';
        });
    }
    DeleteTitle() {
        var credential = new CredentialViewModel();
        credential.userId = this.useId;
        credential.linkedinLink = 'linkedin';
        this.profileService.DeleteSocialLink(credential).subscribe(res => {
            this.toastr.warning('Borrado exitosamente.');
            this.close.emit('event');
            this.title = '';
        });
    }

}