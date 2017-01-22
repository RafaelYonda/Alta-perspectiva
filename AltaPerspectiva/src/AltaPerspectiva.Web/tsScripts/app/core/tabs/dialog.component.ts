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
}