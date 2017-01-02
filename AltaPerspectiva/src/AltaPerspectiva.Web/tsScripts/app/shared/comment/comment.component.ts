import { Component, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from '../../services/category.service'
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Category, Question, Keyword, AskQuestionViewModel } from '../../services/models';

@Component({
    selector: 'ap-commnet',
    templateUrl: 'js/app/shared/comment/comment.component.html',
    styleUrls: ['js/app/shared/comment/comment.component.css'],
    //providers: [CategoryService, QuestionAnswerService]
})
export class CommentComponent {
    @Input() placeBottom: string = '';
}