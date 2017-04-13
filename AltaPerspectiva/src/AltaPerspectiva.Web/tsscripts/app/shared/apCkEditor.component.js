var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var AppCkEditorComponent = (function () {
    function AppCkEditorComponent() {
        this.ckeditorContent = "";
        this.ckeditorContent = "<p>Question details</p>";
    }
    AppCkEditorComponent.prototype.onChange = function (value) {
        console.log(value);
        console.log(this.ckeditorContent);
    };
    return AppCkEditorComponent;
}());
AppCkEditorComponent = __decorate([
    Component({
        selector: 'ck-editor',
        template: "<ckeditor [(ngModel)]=\"ckeditorContent\" (changed)=\"onChange($event)\"\n                [config]=\"{ removeButtons : 'Outdent,Indent,About,SpecialChar,Styles,Format,Source,NumberedList,BulletedList,Scayt,Blockquote,Anchor,Table'}\"\n                debounce=\"500\">\n               </ckeditor>"
    }),
    __metadata("design:paramtypes", [])
], AppCkEditorComponent);
export { AppCkEditorComponent };
