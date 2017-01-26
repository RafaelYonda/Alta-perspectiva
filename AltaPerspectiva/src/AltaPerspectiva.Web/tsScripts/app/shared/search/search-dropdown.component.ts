import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CategoryService } from '../../services/category.service'
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Category, Question, Keyword, AskQuestionViewModel,Topic,Level,QuestionSaveViewModel } from '../../services/models';

@Component({
    selector: 'search-dropdown',
    templateUrl: 'js/app/shared/search/search-dropdown.component.html',
    styleUrls: ['js/app/shared/search/search.css'],
    providers: [CategoryService, QuestionAnswerService]
})
export class ApSearchDropDownComponent {
    @Input() title: string;
    categoryID: string = '-1';
    categories: Category[];
    topicID: string = '-1';
    topics: Topic[];
    levelID: string = '-1';
    levels: Level[];
    body: string;
      
    questionSaveViewModel: QuestionSaveViewModel;
    question: Question;
    isAnonymous:boolean;

    constructor(private router: Router, private categoryService: CategoryService, private questionsService: QuestionAnswerService) {
    }
    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(res => {
            this.categories = res;
        });
    }

    onCategoryChange(categoryId) {
        this.categoryID = categoryId;
        this.questionsService.getTopicByCategoryid(this.categoryID).subscribe(res => {
            this.topics = res;
        });
    }
    onTopicChange(topicId) {
        this.topicID = topicId;
        this.questionsService.getlevel().subscribe(res => {
            this.levels = res;
            this.levelID = this.levels[0].id;
        });
    }
    onLevelChange(levelId) {
        this.levelID = levelId;
    }
    onChange(isChecked) {
        this.isAnonymous = isChecked;
    }

    submitQuestion() {        
        this.question = new Question();        
        this.question.title = this.title;
        this.question.body = this.body;
        this.question.topicId = this.topicID == '-1' ? '' : this.topicID;
        this.question.levelId = this.levelID=='-1'?'':this.levelID;
        this.question.isAnonymous = this.isAnonymous;
        if (this.categoryID != '-1')
            this.question.categoryIds.push(this.categoryID);
        else
            this.question.categoryIds.push(this.categories[0].id);

        this.questionsService.saveQuestionSaveViewModel(this.question).subscribe(res => {
            this.question = res;
            this.router.navigate(['/question/home/1']);

        });
    }
}