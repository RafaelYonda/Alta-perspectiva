import { Component,Input, EventEmitter, Output, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Question, QuestionFollowing} from '../../services/models';
import { QuestionAnswerService } from '../../services/question-answer.service';
import { Router } from '@angular/router';
//import { loginModalComponent } from '../login-modal/login-modal.component';
@Component({
    selector: 'like',
    templateUrl: 'js/app/shared/like-modal/like.component.html',
   // styleUrls: ['js/app/shared/dialog-modal/dialog.component.css'],
    providers: [QuestionAnswerService]
})
export class LikeComponent {
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
    _router: Router;
    //onClickedExit() {
    //    this.close.emit('event');
    //}
    constructor(private dataService: QuestionAnswerService, router: Router, private componentFactoryResolver: ComponentFactoryResolver) {
        this._router = router;
    }
    ngOnInit() {
        //console.log('My question' + this.question);
       // this.isFollowing = true;
    }
    
    
    
    //@ViewChild('logginAnchor', { read: ViewContainerRef }) logginAnchor: ViewContainerRef;
    //ShowNotLoggedIn() {
    //    this.logginAnchor.clear();

    //    let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(loginModalComponent);
    //    let dialogComponentRef = this.logginAnchor.createComponent(dialogComponentFactory);
    //    dialogComponentRef.instance.close.subscribe(() => {
    //        dialogComponentRef.destroy();
    //    });
    //}
}