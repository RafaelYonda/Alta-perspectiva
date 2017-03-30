import { Component, EventEmitter, ViewContainerRef } from '@angular/core';
import { CredentialViewModel } from '../../../services/models/models.profile';
import { ProfileService } from '../../../services/profile.service';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'twitter',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/twitter.component.html',
    providers: [ProfileService],
})
export class TwitterComponent {
    title: string;
    useId:string;
    constructor(private profileService: ProfileService, public toastr: ToastsManager) {
    }
    close = new EventEmitter();

    onClickedExit() {
        this.close.emit('event');
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        //var idAttr = event.srcElement.attributes.id;
        var target = event.target || event.srcElement;      //Firefox does not have srcElement
        //removel the modal on clicking out side the panel
        var idAttr = target['id'];
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value == 'dialogModal')
            this.close.emit('event');
    }
    saveTitle() {
        console.log(this.title);
        var credential = new CredentialViewModel();
        credential.userId = this.useId;
        credential.twitterLink = this.title;
        this.profileService.SaveSocialLink(credential).subscribe(res => {
            this.toastr.success('Updated successfully!');
            this.close.emit('event');
            this.title = '';
        });
    }
    DeleteTitle() {
        console.log('Deleted with userId');
        console.log(this.title);
        var credential = new CredentialViewModel();
        credential.userId = this.useId;
        credential.twitterLink = 'twitter';
        this.profileService.DeleteSocialLink(credential).subscribe(res => {
            this.toastr.warning('Deleted successfully!');
            this.close.emit('event');
            this.title = '';
        });
    }
    
}