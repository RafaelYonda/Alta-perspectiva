import { Component,Input, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Question, QuestionFollowing, User} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
@Component({
    selector: 'like',
    templateUrl: 'like.component.html',
    providers: [QuestionAnswerService]
})
export class LikeComponent {
    close = new EventEmitter();
    likedUsers: User[];
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
  
    
    constructor(private dataService: QuestionAnswerService,private componentFactoryResolver: ComponentFactoryResolver) {
    }
    ngOnInit() {
    }
}