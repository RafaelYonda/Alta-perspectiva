import { Component, EventEmitter } from '@angular/core';
import { Place } from '../../../services/models/models.Place';
import { ProfileService } from '../../../services/profile.service';
@Component({
    selector: 'add-place',
    templateUrl: 'js/app/dashboard/viewprofile/edit-profile/add-place.component.html',
    providers: [ProfileService],
})
export class AddPlaceComponent {
    place: Place = new Place();
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
    savePlace() {
        console.log(this.place);
        this.profileService.AddPlace(this.place).subscribe(res => {
            this.close.emit('event');
            console.log(res);
        });
    }
    
}