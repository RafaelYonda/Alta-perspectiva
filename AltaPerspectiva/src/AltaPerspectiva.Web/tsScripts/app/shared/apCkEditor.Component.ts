import { Component,Input } from '@angular/core';

@Component({
    selector: 'ck-editor',
    template: `<ckeditor [(ngModel)]="ckeditorContent" (changed)="onChange($event)"
                [config]="{ removeButtons : 'Outdent,Indent,About,SpecialChar,Styles,Format,Source,NumberedList,BulletedList,Scayt,Blockquote,Anchor,Table'}"
                debounce="500">
               </ckeditor>`
})
export class AppCkEditorComponent {
   ckeditorContent: string = "";
    constructor() {
        this.ckeditorContent = "<p>Question details</p>";
    }
    onChange(value:Event) {
    }
}