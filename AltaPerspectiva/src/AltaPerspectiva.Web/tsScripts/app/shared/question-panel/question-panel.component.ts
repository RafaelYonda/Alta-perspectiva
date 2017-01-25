import { Component, Input, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Question } from '../../services/models';
import { AnswerDialogComponent } from '../answer-dialog/answer-dialog.component';
import { DialogComponent } from '../dialog-modal/dialog.component';


@Component({
    selector: 'question-panel',
    templateUrl: 'js/app/shared/question-panel/question-panel.component.html',
})
export class QuestionPanelComponent {
    @Input() question: Question;
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    @ViewChild('answerAnchor', { read: ViewContainerRef }) answerAnchor: ViewContainerRef;
    answerDialogBox(question: Question) {
        // Close any already open dialogs
        this.answerAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AnswerDialogComponent);
        let dialogComponentRef = this.answerAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question; // Not sure about the translation here
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
    @ViewChild('dialogAnchor', { read: ViewContainerRef }) dialogAnchor: ViewContainerRef;
    openDialogBox(question: Question) {
        // Close any already open dialogs
        this.dialogAnchor.clear();

        let dialogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
        let dialogComponentRef = this.dialogAnchor.createComponent(dialogComponentFactory);
        dialogComponentRef.instance.question = question; // Not sure about the translation here
        dialogComponentRef.instance.close.subscribe(() => {
            dialogComponentRef.destroy();
        });
    }
}