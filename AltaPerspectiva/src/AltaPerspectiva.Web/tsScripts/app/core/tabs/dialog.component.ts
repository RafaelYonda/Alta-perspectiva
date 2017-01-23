import { Component, EventEmitter } from '@angular/core';
import { Question} from '../../services/models';

@Component({
    selector: 'dlg',
    templateUrl: 'js/app/core/tabs/dialog.component.html',
    styleUrls: ['js/app/core/tabs/dialog.component.css'],
})
export class DialogComponent {
    close = new EventEmitter();
    question: Question;

    onClickedExit() {
        this.close.emit('event');
    }
    ngOnInit() {
        console.log(this.question);
    }
    handleClick(event) {
        //removel the modal on clicking out side the panel
        var idAttr = event.srcElement.attributes.id;
        var value = idAttr ? idAttr.nodeValue : undefined;
        if (value =='dialogModal')
            this.close.emit('event');
    }
}