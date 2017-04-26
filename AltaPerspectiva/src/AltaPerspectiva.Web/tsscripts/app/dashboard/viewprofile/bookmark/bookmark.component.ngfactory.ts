/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './bookmark.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/question.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '../../../services/profile.service';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../shared/question-panel/question-panel.component';
import * as import18 from '../../../services/question-answer.service';
import * as import19 from '../../../shared/question-panel/question-panel.component.ngfactory';
import * as import20 from '@angular/core/src/linker/component_factory_resolver';
export class Wrapper_BookmarkComponent {
  /*private*/ _eventHandler:Function;
  context:import0.BookmarkComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.BookmarkComponent(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_BookmarkComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_BookmarkComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.BookmarkComponent>;
  _QuestionService_0_3:import5.QuestionService;
  _BookmarkComponent_0_4:Wrapper_BookmarkComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BookmarkComponent_Host0,renderType_BookmarkComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BookmarkComponent0(this.viewUtils,this,0,this._el_0);
    this._QuestionService_0_3 = new import5.QuestionService(this.injectorGet(import9.Http,this.parentIndex));
    this._BookmarkComponent_0_4 = new Wrapper_BookmarkComponent(this._QuestionService_0_3,this.injectorGet(import10.ActivatedRoute,this.parentIndex),this.injectorGet(import11.ProfileService,this.parentIndex));
    this.compView_0.create(this._BookmarkComponent_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._BookmarkComponent_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import5.QuestionService) && (0 === requestNodeIndex))) { return this._QuestionService_0_3; }
    if (((token === import0.BookmarkComponent) && (0 === requestNodeIndex))) { return this._BookmarkComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BookmarkComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._BookmarkComponent_0_4.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BookmarkComponentNgFactory:import8.ComponentFactory<import0.BookmarkComponent> = new import8.ComponentFactory<import0.BookmarkComponent>('ng-component',View_BookmarkComponent_Host0,import0.BookmarkComponent);
const styles_BookmarkComponent:any[] = ([] as any[]);
var renderType_BookmarkComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_BookmarkComponent,{});
export class View_BookmarkComponent0 extends import1.AppView<import0.BookmarkComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import12.ViewContainer;
  _TemplateRef_0_5:any;
  _NgFor_0_6:import13.Wrapper_NgFor;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BookmarkComponent0,renderType_BookmarkComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import12.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import14.TemplateRef_(this,0,this._anchor_0);
    this._NgFor_0_6 = new import13.Wrapper_NgFor(this._vc_0.vcRef,this._TemplateRef_0_5,this.parentView.injectorGet(import15.IterableDiffers,this.parentIndex),this.ref);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._anchor_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import16.NgFor) && (0 === requestNodeIndex))) { return this._NgFor_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.questions;
    this._NgFor_0_6.check_ngForOf(currVal_0_0_0,throwOnChange,false);
    this._NgFor_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 0)) { return new View_BookmarkComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}
class View_BookmarkComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import17.QuestionPanelComponent>;
  _QuestionAnswerService_2_3:import18.QuestionAnswerService;
  _QuestionPanelComponent_2_4:import19.Wrapper_QuestionPanelComponent;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_BookmarkComponent1,renderType_BookmarkComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'question-panel',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import19.View_QuestionPanelComponent0(this.viewUtils,this,2,this._el_2);
    this._QuestionAnswerService_2_3 = new import18.QuestionAnswerService(this.parentView.injectorGet(import9.Http,this.parentIndex));
    this._QuestionPanelComponent_2_4 = new import19.Wrapper_QuestionPanelComponent(this.parentView.injectorGet(import20.ComponentFactoryResolver,this.parentIndex),this._QuestionAnswerService_2_3);
    this.compView_2.create(this._QuestionPanelComponent_2_4.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.QuestionAnswerService) && (2 === requestNodeIndex))) { return this._QuestionAnswerService_2_3; }
    if (((token === import17.QuestionPanelComponent) && (2 === requestNodeIndex))) { return this._QuestionPanelComponent_2_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.$implicit;
    this._QuestionPanelComponent_2_4.check_question(currVal_2_0_0,throwOnChange,false);
    this._QuestionPanelComponent_2_4.ngDoCheck(this,this._el_2,throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}