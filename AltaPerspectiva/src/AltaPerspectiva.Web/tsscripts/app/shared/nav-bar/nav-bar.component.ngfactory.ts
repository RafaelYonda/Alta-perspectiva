/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './nav-bar.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/authentication.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/linker/component_factory_resolver';
import * as import12 from '@angular/router/src/router';
import * as import13 from './nav-bar.component.css.ngstyle';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '../search/apsearch.component';
import * as import16 from '../../services/category.service';
import * as import17 from '../../services/question-answer.service';
import * as import18 from '../search/apsearch.component.ngfactory';
import * as import19 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import20 from '@angular/core/src/linker/view_container';
import * as import21 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import22 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import23 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from '../../services/communication.service';
import * as import26 from '../../services/window-ref.service';
import * as import27 from '@angular/router/src/router_state';
import * as import28 from '@angular/common/src/location/location_strategy';
import * as import29 from '@angular/core/src/linker/template_ref';
import * as import30 from '@angular/router/src/directives/router_link';
import * as import31 from '@angular/common/src/directives/ng_if';
import * as import32 from '@angular/common/src/directives/ng_class';
import * as import33 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import34 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import35 from '@angular/forms/src/directives/ng_form';
import * as import36 from '@angular/forms/src/directives/control_container';
import * as import37 from '@angular/forms/src/directives/ng_control_status';
import * as import38 from '@angular/core/src/security';
export class Wrapper_NavBarComponent {
  /*private*/ _eventHandler:Function;
  context:import0.NavBarComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.NavBarComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_className(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.className = currValue;
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
var renderType_NavBarComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_NavBarComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.NavBarComponent>;
  _AuthenticationService_0_3:import6.AuthenticationService;
  _NavBarComponent_0_4:Wrapper_NavBarComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NavBarComponent_Host0,renderType_NavBarComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'nav-bar',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_NavBarComponent0(this.viewUtils,this,0,this._el_0);
    this._AuthenticationService_0_3 = new import6.AuthenticationService(this.injectorGet(import10.Http,this.parentIndex));
    this._NavBarComponent_0_4 = new Wrapper_NavBarComponent(this._AuthenticationService_0_3,this.injectorGet(import11.ComponentFactoryResolver,this.parentIndex),this.injectorGet(import12.Router,this.parentIndex));
    this.compView_0.create(this._NavBarComponent_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._NavBarComponent_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import6.AuthenticationService) && (0 === requestNodeIndex))) { return this._AuthenticationService_0_3; }
    if (((token === import0.NavBarComponent) && (0 === requestNodeIndex))) { return this._NavBarComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NavBarComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NavBarComponentNgFactory:import9.ComponentFactory<import0.NavBarComponent> = new import9.ComponentFactory<import0.NavBarComponent>('nav-bar',View_NavBarComponent_Host0,import0.NavBarComponent);
const styles_NavBarComponent:any[] = [import13.styles];
var renderType_NavBarComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_NavBarComponent,{});
export class View_NavBarComponent0 extends import2.AppView<import0.NavBarComponent> {
  _el_0:any;
  _NgClass_0_3:import14.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import15.ApSearchComponent>;
  _CategoryService_2_3:import16.CategoryService;
  _QuestionAnswerService_2_4:import17.QuestionAnswerService;
  _ApSearchComponent_2_5:import18.Wrapper_ApSearchComponent;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _RouterLinkWithHref_8_3:import19.Wrapper_RouterLinkWithHref;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _el_18:any;
  _RouterLinkWithHref_18_3:import19.Wrapper_RouterLinkWithHref;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _el_22:any;
  _RouterLinkWithHref_22_3:import19.Wrapper_RouterLinkWithHref;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _anchor_26:any;
  /*private*/ _vc_26:import20.ViewContainer;
  _TemplateRef_26_5:any;
  _NgIf_26_6:import21.Wrapper_NgIf;
  _text_27:any;
  _anchor_28:any;
  /*private*/ _vc_28:import20.ViewContainer;
  _TemplateRef_28_5:any;
  _NgIf_28_6:import21.Wrapper_NgIf;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _el_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _el_45:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NavBarComponent0,renderType_NavBarComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','navbar navbar-inverse navbar-fixed-top z-header nav-shadow'),(null as any));
    this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.injectorGet(import22.IterableDiffers,this.parentIndex),this.parentView.injectorGet(import23.KeyValueDiffers,this.parentIndex),new import24.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'ap-search',new import3.InlineArray2(2,'placeBottom','top-fixed'),(null as any));
    this.compView_2 = new import18.View_ApSearchComponent0(this.viewUtils,this,2,this._el_2);
    this._CategoryService_2_3 = new import16.CategoryService(this.parentView.injectorGet(import10.Http,this.parentIndex));
    this._QuestionAnswerService_2_4 = new import17.QuestionAnswerService(this.parentView.injectorGet(import10.Http,this.parentIndex));
    this._ApSearchComponent_2_5 = new import18.Wrapper_ApSearchComponent(this.parentView.injectorGet(import11.ComponentFactoryResolver,this.parentIndex),this.parentView.injectorGet(import12.Router,this.parentIndex),this._CategoryService_2_3,this._QuestionAnswerService_2_4,this.parentView.injectorGet(import25.CommunicationService,this.parentIndex),new import24.ElementRef(this._el_2),this.parentView.injectorGet(import26.WindowRefService,this.parentIndex));
    this.compView_2.create(this._ApSearchComponent_2_5.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','navbar-header'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray8(8,'asp-action','Index','asp-area','','asp-controller','Home','class','navbar-brand logo'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'a',new import3.InlineArray2(2,'routerLink','/'),(null as any));
    this._RouterLinkWithHref_8_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import27.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import28.LocationStrategy,this.parentIndex));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_8,'img',new import3.InlineArray4(4,'class','navbar-brand logo','src','../images/LOGO CUADRADO.png'),(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','navbar-collapse collapse'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_13,'ul',new import3.InlineArray2(2,'class','nav navbar-nav'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_15,'li',new import3.InlineArray2(2,'class','nav-home'),(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_17,'a',new import3.InlineArray2(2,'routerLink','/'),(null as any));
    this._RouterLinkWithHref_18_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import27.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import28.LocationStrategy,this.parentIndex));
    this._text_19 = this.renderer.createText(this._el_18,'Alta Perspectiva',(null as any));
    this._text_20 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_15,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_21,'a',new import3.InlineArray2(2,'routerLink','/question/home/1'),(null as any));
    this._RouterLinkWithHref_22_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import27.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import28.LocationStrategy,this.parentIndex));
    this._text_23 = this.renderer.createText(this._el_22,'Responder',(null as any));
    this._text_24 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._text_25 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._anchor_26 = this.renderer.createTemplateAnchor(this._el_13,(null as any));
    this._vc_26 = new import20.ViewContainer(26,13,this,this._anchor_26);
    this._TemplateRef_26_5 = new import29.TemplateRef_(this,26,this._anchor_26);
    this._NgIf_26_6 = new import21.Wrapper_NgIf(this._vc_26.vcRef,this._TemplateRef_26_5);
    this._text_27 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._anchor_28 = this.renderer.createTemplateAnchor(this._el_13,(null as any));
    this._vc_28 = new import20.ViewContainer(28,13,this,this._anchor_28);
    this._TemplateRef_28_5 = new import29.TemplateRef_(this,28,this._anchor_28);
    this._NgIf_28_6 = new import21.Wrapper_NgIf(this._vc_28.vcRef,this._TemplateRef_28_5);
    this._text_29 = this.renderer.createText(this._el_13,'\n    ',(null as any));
    this._text_30 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_0,'button',new import3.InlineArray16(12,'aria-controls','navbar','aria-expanded','false','class','navbar-toggle collapsed','data-target','#navbar','data-toggle','collapse','type','button'),(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'\n        ',(null as any));
    this._el_33 = import3.createRenderElement(this.renderer,this._el_31,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_34 = this.renderer.createText(this._el_33,'Toggle navigation',(null as any));
    this._text_35 = this.renderer.createText(this._el_31,'\n        ',(null as any));
    this._el_36 = import3.createRenderElement(this.renderer,this._el_31,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_37 = this.renderer.createText(this._el_31,'\n        ',(null as any));
    this._el_38 = import3.createRenderElement(this.renderer,this._el_31,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_39 = this.renderer.createText(this._el_31,'\n        ',(null as any));
    this._el_40 = import3.createRenderElement(this.renderer,this._el_31,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_41 = this.renderer.createText(this._el_31,'\n    ',(null as any));
    this._text_42 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_43 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._text_44 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_45 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'style','margin-top:100px;'),(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_18,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_18));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_22,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_22));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_31,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_31));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._anchor_26,
      this._text_27,
      this._anchor_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._el_45
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.CategoryService) && (2 === requestNodeIndex))) { return this._CategoryService_2_3; }
    if (((token === import17.QuestionAnswerService) && (2 === requestNodeIndex))) { return this._QuestionAnswerService_2_4; }
    if (((token === import15.ApSearchComponent) && (2 === requestNodeIndex))) { return this._ApSearchComponent_2_5.context; }
    if (((token === import30.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3.context; }
    if (((token === import30.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._RouterLinkWithHref_18_3.context; }
    if (((token === import30.RouterLinkWithHref) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) { return this._RouterLinkWithHref_22_3.context; }
    if (((token === import29.TemplateRef) && (26 === requestNodeIndex))) { return this._TemplateRef_26_5; }
    if (((token === import31.NgIf) && (26 === requestNodeIndex))) { return this._NgIf_26_6.context; }
    if (((token === import29.TemplateRef) && (28 === requestNodeIndex))) { return this._TemplateRef_28_5; }
    if (((token === import31.NgIf) && (28 === requestNodeIndex))) { return this._NgIf_28_6.context; }
    if (((token === import32.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 42)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'navbar navbar-inverse navbar-fixed-top z-header nav-shadow';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.context.className;
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = 'top-fixed';
    this._ApSearchComponent_2_5.check_placeBottom(currVal_2_0_0,throwOnChange,false);
    this._ApSearchComponent_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_8_0_0:any = '/';
    this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0,throwOnChange,false);
    this._RouterLinkWithHref_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    const currVal_18_0_0:any = '/';
    this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0,throwOnChange,false);
    this._RouterLinkWithHref_18_3.ngDoCheck(this,this._el_18,throwOnChange);
    const currVal_22_0_0:any = '/question/home/1';
    this._RouterLinkWithHref_22_3.check_routerLink(currVal_22_0_0,throwOnChange,false);
    this._RouterLinkWithHref_22_3.ngDoCheck(this,this._el_22,throwOnChange);
    const currVal_26_0_0:boolean = !this.context._logObj.isLoggedIn;
    this._NgIf_26_6.check_ngIf(currVal_26_0_0,throwOnChange,false);
    this._NgIf_26_6.ngDoCheck(this,this._anchor_26,throwOnChange);
    const currVal_28_0_0:any = this.context._logObj.isLoggedIn;
    this._NgIf_28_6.check_ngIf(currVal_28_0_0,throwOnChange,false);
    this._NgIf_28_6.ngDoCheck(this,this._anchor_28,throwOnChange);
    this._vc_26.detectChangesInNestedViews(throwOnChange);
    this._vc_28.detectChangesInNestedViews(throwOnChange);
    this._RouterLinkWithHref_8_3.checkHost(this,this,this._el_8,throwOnChange);
    this._RouterLinkWithHref_18_3.checkHost(this,this,this._el_18,throwOnChange);
    this._RouterLinkWithHref_22_3.checkHost(this,this,this._el_22,throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_26.destroyNestedViews();
    this._vc_28.destroyNestedViews();
    this.compView_2.destroy();
    this._ApSearchComponent_2_5.ngOnDestroy();
    this._RouterLinkWithHref_8_3.ngOnDestroy();
    this._RouterLinkWithHref_18_3.ngOnDestroy();
    this._RouterLinkWithHref_22_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 26)) { return new View_NavBarComponent1(this.viewUtils,this,26,this._anchor_26,this._vc_26); }
    if ((nodeIndex == 28)) { return new View_NavBarComponent2(this.viewUtils,this,28,this._anchor_28,this._vc_28); }
    return (null as any);
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_8_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_18(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_18_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_22(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_22_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_31(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.togglemenu()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_NavBarComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_NavBarComponent1,renderType_NavBarComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'ul',new import3.InlineArray2(2,'class','nav navbar-nav navbar-right'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_2,'a',new import3.InlineArray2(2,'href','/signin'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Iniciar sesión ',(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_0,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_6,'a',new import3.InlineArray2(2,'href','/signin'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'Regístrate ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._el_7,
      this._text_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_NavBarComponent2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _NgForm_13_3:import33.Wrapper_NgForm;
  _ControlContainer_13_4:any;
  _NgControlStatusGroup_13_5:import34.Wrapper_NgControlStatusGroup;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _el_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  /*private*/ _expr_49:any;
  /*private*/ _expr_50:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import20.ViewContainer) {
    super(View_NavBarComponent2,renderType_NavBarComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_49 = import1.UNINITIALIZED;
    this._expr_50 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','nav navbar-right'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray8(8,'aria-expanded','false','class','dropdown-toggle fixed-height','data-toggle','dropdown','href','#'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'img',new import3.InlineArray2(2,'class','user-image img-circle'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_2,'span',new import3.InlineArray2(2,'class','nav-user-info'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray4(4,'class','dropdown-menu dropdown-menu-right','role','menu'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n                ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_11,'form',new import3.InlineArray4(4,'class','form-horizontal','role','form'),(null as any));
    this._NgForm_13_3 = new import33.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_13_4 = this._NgForm_13_3.context;
    this._NgControlStatusGroup_13_5 = new import34.Wrapper_NgControlStatusGroup(this._ControlContainer_13_4);
    this._text_14 = this.renderer.createText(this._el_13,'\n                    ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_13,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n                        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_15,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_17,'span',new import3.InlineArray2(2,'class','fa fa-user'),(null as any));
    this._text_19 = this.renderer.createText(this._el_17,' ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_17,'a',new import3.InlineArray4(4,'data-toggle','dropdown','for','contain'),(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'Perfil ',(null as any));
    this._text_22 = this.renderer.createText(this._el_15,'\n                    ',(null as any));
    this._text_23 = this.renderer.createText(this._el_13,'\n                    ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_13,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n                        ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_26,'span',new import3.InlineArray2(2,'class','fa fa-key'),(null as any));
    this._text_28 = this.renderer.createText(this._el_26,' ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_26,'a',new import3.InlineArray4(4,'for','contain','href','http://altaauth.azurewebsites.net/Manage/ChangePassword'),(null as any));
    this._text_30 = this.renderer.createText(this._el_29,' Contraseña',(null as any));
    this._text_31 = this.renderer.createText(this._el_29,' ',(null as any));
    this._text_32 = this.renderer.createText(this._el_24,'\n                    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_13,'\n                    ',(null as any));
    this._el_34 = import3.createRenderElement(this.renderer,this._el_13,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_35 = this.renderer.createText(this._el_34,'\n                        ',(null as any));
    this._el_36 = import3.createRenderElement(this.renderer,this._el_34,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_37 = import3.createRenderElement(this.renderer,this._el_36,'span',new import3.InlineArray2(2,'class','fa fa-sign-out'),(null as any));
    this._text_38 = this.renderer.createText(this._el_36,' ',(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,this._el_36,'a',new import3.InlineArray4(4,'for','contain','href','/signout'),(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'Cerrar sesión ',(null as any));
    this._text_41 = this.renderer.createText(this._el_39,' ',(null as any));
    this._text_42 = this.renderer.createText(this._el_34,'\n                    ',(null as any));
    this._text_43 = this.renderer.createText(this._el_13,'\n                ',(null as any));
    this._text_44 = this.renderer.createText(this._el_11,'\n            ',(null as any));
    this._text_45 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray4(4,'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_20,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_20));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
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
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import35.NgForm) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._NgForm_13_3.context; }
    if (((token === import36.ControlContainer) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._ControlContainer_13_4; }
    if (((token === import37.NgControlStatusGroup) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._NgControlStatusGroup_13_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgForm_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    this._NgControlStatusGroup_13_5.ngDoCheck(this,this._el_13,throwOnChange);
    const currVal_49:any = import3.inlineInterpolate(1,'',this.parentView.context._logObj.user.imageUrl,'');
    if (import3.checkBinding(throwOnChange,this._expr_49,currVal_49)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import38.SecurityContext.URL,currVal_49));
      this._expr_49 = currVal_49;
    }
    const currVal_50:any = import3.inlineInterpolate(1,'',this.parentView.context._logObj.user.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_50,currVal_50)) {
      this.renderer.setText(this._text_7,currVal_50);
      this._expr_50 = currVal_50;
    }
    this._NgControlStatusGroup_13_5.checkHost(this,this,this._el_13,throwOnChange);
  }
  destroyInternal():void {
    this._NgForm_13_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_13_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_20(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.gotoProfile()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}