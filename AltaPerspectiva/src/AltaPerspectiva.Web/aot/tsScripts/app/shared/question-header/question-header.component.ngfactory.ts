/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../tsScripts/app/shared/question-header/question-header.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/router/src/router';
import * as import10 from './question-header.component.css.shim.ngstyle';
import * as import11 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '@angular/common/src/pipes/date_pipe';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/i18n/tokens';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/common/src/directives/ng_if';
export class Wrapper_QuestionHeaderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.QuestionHeaderComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.QuestionHeaderComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_question(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.question = currValue;
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
var renderType_QuestionHeaderComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_QuestionHeaderComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.QuestionHeaderComponent>;
  _QuestionHeaderComponent_0_3:Wrapper_QuestionHeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_QuestionHeaderComponent_Host0,renderType_QuestionHeaderComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'question-header',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_QuestionHeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._QuestionHeaderComponent_0_3 = new Wrapper_QuestionHeaderComponent(this.injectorGet(import9.Router,this.parentIndex));
    this.compView_0.create(this._QuestionHeaderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._QuestionHeaderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.QuestionHeaderComponent) && (0 === requestNodeIndex))) { return this._QuestionHeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._QuestionHeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const QuestionHeaderComponentNgFactory:import8.ComponentFactory<import0.QuestionHeaderComponent> = new import8.ComponentFactory<import0.QuestionHeaderComponent>('question-header',View_QuestionHeaderComponent_Host0,import0.QuestionHeaderComponent);
const styles_QuestionHeaderComponent:any[] = [import10.styles];
var renderType_QuestionHeaderComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_QuestionHeaderComponent,{});
export class View_QuestionHeaderComponent0 extends import2.AppView<import0.QuestionHeaderComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _RouterLinkWithHref_6_3:import11.Wrapper_RouterLinkWithHref;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import12.ViewContainer;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import13.Wrapper_NgIf;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _vc_12:import12.ViewContainer;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import13.Wrapper_NgIf;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _arr_26:any;
  /*private*/ _expr_27:any;
  /*private*/ _expr_28:any;
  _pipe_date_0:import14.DatePipe;
  _pipe_date_0_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_QuestionHeaderComponent0,renderType_QuestionHeaderComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._arr_26 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_27 = import1.UNINITIALIZED;
    this._expr_28 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row row-fix'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'ul',new import3.InlineArray2(2,'class','question-header'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_6_3 = new import11.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import9.Router,this.parentIndex),this.parentView.injectorGet(import15.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import16.LocationStrategy,this.parentIndex));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_10 = new import12.ViewContainer(10,2,this,this._anchor_10);
    this._TemplateRef_10_5 = new import17.TemplateRef_(this,10,this._anchor_10);
    this._NgIf_10_6 = new import13.Wrapper_NgIf(this._vc_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_12 = new import12.ViewContainer(12,2,this,this._anchor_12);
    this._TemplateRef_12_5 = new import17.TemplateRef_(this,12,this._anchor_12);
    this._NgIf_12_6 = new import13.Wrapper_NgIf(this._vc_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_2,'li',new import3.InlineArray2(2,'class','question-info'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_17 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_6,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_6));
    this._pipe_date_0 = new import14.DatePipe(this.parentView.injectorGet(import18.LOCALE_ID,this.parentIndex));
    this._pipe_date_0_0 = import3.pureProxy2(this._pipe_date_0.transform.bind(this._pipe_date_0));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.RouterLinkWithHref) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._RouterLinkWithHref_6_3.context; }
    if (((token === import17.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import20.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6.context; }
    if (((token === import17.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import20.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    const currVal_6_0_0:any = this._arr_26('/question/home',((this.context.question == null)? (null as any): ((this.context.question.categories[0] == null)? (null as any): this.context.question.categories[0].id)));
    this._RouterLinkWithHref_6_3.check_routerLink(currVal_6_0_0,throwOnChange,false);
    this._RouterLinkWithHref_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    const currVal_10_0_0:boolean = (!((this.context.question == null)? (null as any): this.context.question.questionTopics) || (((this.context.question == null)? (null as any): ((this.context.question.questionTopics == null)? (null as any): this.context.question.questionTopics.length)) != 0));
    this._NgIf_10_6.check_ngIf(currVal_10_0_0,throwOnChange,false);
    this._NgIf_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    const currVal_12_0_0:boolean = (!((this.context.question == null)? (null as any): this.context.question.questionLevels) || (((this.context.question == null)? (null as any): ((this.context.question.questionLevels == null)? (null as any): this.context.question.questionLevels.length)) != 0));
    this._NgIf_12_6.check_ngIf(currVal_12_0_0,throwOnChange,false);
    this._NgIf_12_6.ngDoCheck(this,this._anchor_12,throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
    this._vc_12.detectChangesInNestedViews(throwOnChange);
    this._RouterLinkWithHref_6_3.checkHost(this,this,this._el_6,throwOnChange);
    const currVal_27:any = import3.inlineInterpolate(1,' ',((this.context.question.categories[0] == null)? (null as any): this.context.question.categories[0].name),'');
    if (import3.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setText(this._text_7,currVal_27);
      this._expr_27 = currVal_27;
    }
    valUnwrapper.reset();
    const currVal_28:any = import3.inlineInterpolate(1,'',valUnwrapper.unwrap(import3.castByValue(this._pipe_date_0_0,this._pipe_date_0.transform)(((this.context.question == null)? (null as any): this.context.question.createdOn),'MMM, yyyy')),'');
    if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange,this._expr_28,currVal_28))) {
      this.renderer.setText(this._text_15,currVal_28);
      this._expr_28 = currVal_28;
    }
  }
  destroyInternal():void {
    this._vc_10.destroyNestedViews();
    this._vc_12.destroyNestedViews();
    this._RouterLinkWithHref_6_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 10)) { return new View_QuestionHeaderComponent1(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    if ((nodeIndex == 12)) { return new View_QuestionHeaderComponent2(this.viewUtils,this,12,this._anchor_12,this._vc_12); }
    return (null as any);
  }
  handleEvent_6(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_6_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_QuestionHeaderComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_QuestionHeaderComponent1,renderType_QuestionHeaderComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_6 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray2(2,'class','question-info'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n          \n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_3));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6:any = import3.inlineInterpolate(1,' ',((this.parentView.context.question == null)? (null as any): this.parentView.context.question.questionTopicNames[0]),'');
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_4,currVal_6);
      this._expr_6 = currVal_6;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.topicRoute(((this.parentView.context.question == null)? (null as any): ((this.parentView.context.question.categories[0] == null)? (null as any): this.parentView.context.question.categories[0].id)),((this.parentView.context.question == null)? (null as any): ((this.parentView.context.question.questionTopics[0] == null)? (null as any): this.parentView.context.question.questionTopics[0].topicId)))) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_QuestionHeaderComponent2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_QuestionHeaderComponent2,renderType_QuestionHeaderComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_6 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',new import3.InlineArray2(2,'class','question-info'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_0,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n           \n           \n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_3));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5
    ]
    ),[disposable_0]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6:any = import3.inlineInterpolate(1,' ',((this.parentView.context.question == null)? (null as any): this.parentView.context.question.questionLevelNames[0]),'');
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_4,currVal_6);
      this._expr_6 = currVal_6;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.levelRoute(((this.parentView.context.question == null)? (null as any): ((this.parentView.context.question.categories[0] == null)? (null as any): this.parentView.context.question.categories[0].id)),((this.parentView.context.question == null)? (null as any): ((this.parentView.context.question.questionTopics[0] == null)? (null as any): this.parentView.context.question.questionTopics[0].topicId)),((this.parentView.context.question == null)? (null as any): ((this.parentView.context.question.questionLevels[0] == null)? (null as any): this.parentView.context.question.questionLevels[0].levelId)))) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}