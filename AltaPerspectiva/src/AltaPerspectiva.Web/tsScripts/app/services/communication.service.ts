import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { FilterParameter } from './models';

@Injectable()
export class CommunicationService {
    //========Category Change==========
    private categoryId: string;
    private topicId: string;
    private levelId: string;

    private filterParameter: FilterParameter;
    
    private objChange: Subject<string> = new Subject<string>();

    setCategory(catId: string): void {
        this.categoryId = catId;
        this.objChange.next(this.categoryId);
    }

    getCategory(): Observable<string> {   
        return this.objChange.asObservable();
    }

    setTopicId(topicId: string) {
       
        this.topicId = topicId;
    }
    getTopicId() {
        return this.topicId;
    }
    setLevelId(levelId: string) {
        
        this.levelId = levelId;
    }
    getLevelId() {
        return this.levelId;
    }

    //setFilterParameter(filterParameter: FilterParameter) {
    //    this.filterParameter = filterParameter;
    //}
    getFilterParameter() {
        this.filterParameter = new FilterParameter();
        if (this.categoryId) this.filterParameter.categoryId = this.categoryId;
        if (this.topicId)this.filterParameter.topicId = this.topicId;
        if(this.levelId) this.filterParameter.levelId = this.levelId;
        return this.filterParameter;
    }
}