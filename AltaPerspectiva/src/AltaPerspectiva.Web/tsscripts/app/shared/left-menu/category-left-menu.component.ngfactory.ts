/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './category-left-menu.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/question-answer.service';
import * as import7 from '../../services/category.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '../../services/communication.service';
import * as import13 from './left-menu.css.shim.ngstyle';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import20 from '@angular/router/src/router';
import * as import21 from '@angular/router/src/router_state';
import * as import22 from '@angular/common/src/location/location_strategy';
import * as import23 from '@angular/router/src/directives/router_link';
export class Wrapper_CategoryMenuPanelComponent {
  /*private*/ _eventHandler:Function;
  context:import0.CategoryMenuPanelComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.CategoryMenuPanelComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_caegoryId(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.caegoryId = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_CategoryMenuPanelComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_CategoryMenuPanelComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.CategoryMenuPanelComponent>;
  _QuestionAnswerService_0_3:import6.QuestionAnswerService;
  _CategoryService_0_4:import7.CategoryService;
  _CategoryMenuPanelComponent_0_5:Wrapper_CategoryMenuPanelComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CategoryMenuPanelComponent_Host0,renderType_CategoryMenuPanelComponent_Host,import8.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'category-left-menu',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_CategoryMenuPanelComponent0(this.viewUtils,this,0,this._el_0);
    this._QuestionAnswerService_0_3 = new import6.QuestionAnswerService(this.injectorGet(import11.Http,this.parentIndex));
    this._CategoryService_0_4 = new import7.CategoryService(this.injectorGet(import11.Http,this.parentIndex));
    this._CategoryMenuPanelComponent_0_5 = new Wrapper_CategoryMenuPanelComponent(this._QuestionAnswerService_0_3,this._CategoryService_0_4,this.injectorGet(import12.CommunicationService,this.parentIndex));
    this.compView_0.create(this._CategoryMenuPanelComponent_0_5.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import10.ComponentRef_<any>(0,this,this._el_0,this._CategoryMenuPanelComponent_0_5.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import6.QuestionAnswerService) && (0 === requestNodeIndex))) { return this._QuestionAnswerService_0_3; }
    if (((token === import7.CategoryService) && (0 === requestNodeIndex))) { return this._CategoryService_0_4; }
    if (((token === import0.CategoryMenuPanelComponent) && (0 === requestNodeIndex))) { return this._CategoryMenuPanelComponent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._CategoryMenuPanelComponent_0_5.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const CategoryMenuPanelComponentNgFactory:import10.ComponentFactory<import0.CategoryMenuPanelComponent> = new import10.ComponentFactory<import0.CategoryMenuPanelComponent>('category-left-menu',View_CategoryMenuPanelComponent_Host0,import0.CategoryMenuPanelComponent);
const styles_CategoryMenuPanelComponent:any[] = [import13.styles];
var renderType_CategoryMenuPanelComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_CategoryMenuPanelComponent,{});
export class View_CategoryMenuPanelComponent0 extends import2.AppView<import0.CategoryMenuPanelComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import14.ViewContainer;
  _TemplateRef_10_5:any;
  _NgFor_10_6:import15.Wrapper_NgFor;
  _text_11:any;
  _text_12:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_CategoryMenuPanelComponent0,renderType_CategoryMenuPanelComponent,import8.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray4(4,'class','menu-container','id','category'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','list-title'),(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_2,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Etapas del negocio ',(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_0,'img',new import3.InlineArray4(4,'class','horizontal-border','src','../../../../images/border-horizontal.png'),(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_0,'ul',new import3.InlineArray2(2,'class','left-panel-list'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n        ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_10 = new import14.ViewContainer(10,8,this,this._anchor_10);
    this._TemplateRef_10_5 = new import16.TemplateRef_(this,10,this._anchor_10);
    this._NgFor_10_6 = new import15.Wrapper_NgFor(this._vc_10.vcRef,this._TemplateRef_10_5,this.parentView.injectorGet(import17.IterableDiffers,this.parentIndex),this.ref);
    this._text_11 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._text_12
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import18.NgFor) && (10 === requestNodeIndex))) { return this._NgFor_10_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_10_0_0:any = this.context.categories;
    this._NgFor_10_6.check_ngForOf(currVal_10_0_0,throwOnChange,false);
    this._NgFor_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_10.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 10)) { return new View_CategoryMenuPanelComponent1(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    return (null as any);
  }
}
class View_CategoryMenuPanelComponent1 extends import2.AppView<any> {
  _el_0:any;
  _el_1:any;
  _RouterLinkWithHref_1_3:import19.Wrapper_RouterLinkWithHref;
  _text_2:any;
  _arr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import14.ViewContainer) {
    super(View_CategoryMenuPanelComponent1,renderType_CategoryMenuPanelComponent,import8.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._arr_4 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import10.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_1_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import20.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import21.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import22.LocationStrategy,this.parentView.parentIndex));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_1));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.RouterLinkWithHref) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_4('/question/home',this.context.$implicit.id);
    this._RouterLinkWithHref_1_3.check_routerLink(currVal_1_0_0,throwOnChange,false);
    this._RouterLinkWithHref_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this._RouterLinkWithHref_1_3.checkHost(this,this,this._el_1,throwOnChange);
    const currVal_5:any = import3.inlineInterpolate(1,' ',((this.context.$implicit == null)? (null as any): this.context.$implicit.name),'');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_2,currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_1_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_1_3.handleEvent(eventName,$event) && result);
    return result;
  }
}