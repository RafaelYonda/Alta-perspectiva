/// <reference path="../../services/category.service.ts" />
import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service'

@Component({
    selector: 'ap-tab-panel',
    templateUrl: 'js/app/core/tabs/tab-panel.component.html',
    providers: [CategoryService]
})

export class TabPanelComponent {

}