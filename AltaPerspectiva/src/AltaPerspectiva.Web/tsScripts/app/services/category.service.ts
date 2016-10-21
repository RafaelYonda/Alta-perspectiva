import { Injectable } from '@angular/core';
import { Category } from './category'

@Injectable()
export class CategoryService{
    getCategories(): Category[] {
        return [
            { id: 1, name: 'categoty1', icon: 'icon1', active: 'active' },
            { id: 2, name: 'categoty2', icon: 'icon2', active: '' },
            { id: 3, name: 'categoty3', icon: 'icon3', active: '' },
            { id: 4, name: 'categoty4', icon: 'icon4', active: '' },
            { id: 5, name: 'categoty5', icon: 'icon5', active: '' }
        ];
    }
}