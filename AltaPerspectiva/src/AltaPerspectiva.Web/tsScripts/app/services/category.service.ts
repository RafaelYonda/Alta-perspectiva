import { Injectable } from '@angular/core';
import { Category } from './models';

@Injectable()
export class CategoryService{
    getCategories(): Category[] {
        return [
            { id: 1, name: 'Ver todas', icon: 'icon-star', active: 'active' },
            { id: 2, name: 'Finanzas', icon: 'icon-chart', active: '' },
            { id: 3, name: 'Gestión humana', icon: 'icon-users', active: '' },
            { id: 4, name: 'Liderazgo', icon: 'icon-people', active: '' },
            { id: 5, name: 'Procesos', icon: 'icon-process', active: '' },
            { id: 6, name: 'Estrategia', icon: 'icon-dice', active: '' },
            { id: 8, name: 'Gestión humana', icon: 'icon-users', active: '' },
            { id: 9, name: 'Liderazgo', icon: 'icon-people', active: '' },
            { id: 10, name: 'Finanzas', icon: 'icon-chart', active: '' }
        ];
    }
}