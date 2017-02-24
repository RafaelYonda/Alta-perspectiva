import { Component, EventEmitter } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { User } from '../../../services/models';
import { ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'js/app/dashboard/viewprofile/virtual-store/item-dialog.component.html'
})
export class ItemDialogComponent {
    private sub: any;
    user: User[];
    close = new EventEmitter();
    constructor(private _route: ActivatedRoute,private profileServ: ProfileService) {
    }
    ngOnInit() {
        window.scrollTo(0, 0);
       
    }
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
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}