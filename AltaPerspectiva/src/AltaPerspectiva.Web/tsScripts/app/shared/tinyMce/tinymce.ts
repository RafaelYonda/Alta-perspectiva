import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

declare var tinymce: any;
@Component({
    selector: 'alta-tiny-component',
    template: `<textarea id="tinyid"></textarea>`
})
export class AltaTinyComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Output() onEditorKeyup = new EventEmitter<any>();

    editor;

    ngAfterViewInit() {
        tinymce.init({
            selector: '#tinyid',
            plugins: ['link', 'paste', 'table','image'],
            skin_url: 'Scripts/assets/skins/lightgray',
            toolbar1: 'undo redo | styleselect | bold italic | link image',
            setup: editor => {
                this.editor = editor;
                editor.on('keyup', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                });
            },
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}