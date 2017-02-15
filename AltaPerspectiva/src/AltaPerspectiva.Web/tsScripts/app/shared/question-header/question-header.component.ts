import { Component, Input } from '@angular/core';
import {Question } from '../../services/models';

@Component({
    selector: 'question-header',
    templateUrl: 'js/app/shared/question-header/question-header.component.html',
    styleUrls: ['js/app/shared/question-header/question-header.component.css'],
})
export class QuestionHeaderComponent {
    @Input() question: Question;
}