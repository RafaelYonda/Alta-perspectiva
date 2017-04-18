import { Component, Input } from '@angular/core';
import {Question } from '../../services/models';

@Component({
    selector: 'question-header',
    templateUrl: 'question-header.component.html',
    styleUrls: ['question-header.component.css'],
})
export class QuestionHeaderComponent {
    @Input() question: Question;

    ngOnInit() {        
    }
}