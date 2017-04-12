/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../tsScripts/app/dashboard/navdashboard/navdashboard.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../../../../tsScripts/app/services/authentication.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from './navdashboard.component.css.ngstyle';
import * as import12 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location_strategy';
import * as import16 from '@angular/router/src/directives/router_link';
export class Wrapper_NavDashboard {
  /*private*/ _eventHandler:Function;
  context:import0.NavDashboard;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.NavDashboard(p0);
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
var renderType_NavDashboard_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_NavDashboard_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.NavDashboard>;
  _AuthenticationService_0_3:import6.AuthenticationService;
  _NavDashboard_0_4:Wrapper_NavDashboard;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NavDashboard_Host0,renderType_NavDashboard_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ap-navdashboard',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_NavDashboard0(this.viewUtils,this,0,this._el_0);
    this._AuthenticationService_0_3 = new import6.AuthenticationService(this.injectorGet(import10.Http,this.parentIndex));
    this._NavDashboard_0_4 = new Wrapper_NavDashboard(this._AuthenticationService_0_3);
    this.compView_0.create(this._NavDashboard_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._NavDashboard_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import6.AuthenticationService) && (0 === requestNodeIndex))) { return this._AuthenticationService_0_3; }
    if (((token === import0.NavDashboard) && (0 === requestNodeIndex))) { return this._NavDashboard_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NavDashboard_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NavDashboardNgFactory:import9.ComponentFactory<import0.NavDashboard> = new import9.ComponentFactory<import0.NavDashboard>('ap-navdashboard',View_NavDashboard_Host0,import0.NavDashboard);
const styles_NavDashboard:any[] = [import11.styles];
var renderType_NavDashboard:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_NavDashboard,{});
export class View_NavDashboard0 extends import2.AppView<import0.NavDashboard> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _el_28:any;
  _RouterLinkWithHref_28_3:import12.Wrapper_RouterLinkWithHref;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NavDashboard0,renderType_NavDashboard,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','navbar navbar-inverse navbar-fixed-top backgroundset'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','navbar-header'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'button',new import3.InlineArray8(8,'class','navbar-toggle','data-target','.navbar-collapse','data-toggle','collapse','type','button'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'Toggle navigation',(null as any));
    this._text_9 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_5,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_11 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_5,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_13 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_5,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_15 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_16 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray8(8,'asp-action','Index','asp-area','','asp-controller','Home','class','navbar-brand logo'),(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_17,'img',new import3.InlineArray4(4,'class','navbar-brand logo','src','../images/LOGO CUADRADO.png'),(null as any));
    this._text_20 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._text_21 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_22 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_23 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','navbar-collapse collapse'),(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_23,'ul',new import3.InlineArray2(2,'class','nav navbar-nav'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'\n            ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_25,'li',new import3.InlineArray2(2,'class','nav-home'),(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_27,'a',new import3.InlineArray2(2,'routerLink','/'),(null as any));
    this._RouterLinkWithHref_28_3 = new import12.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.LocationStrategy,this.parentIndex));
    this._text_29 = this.renderer.createText(this._el_28,'Alta Perspectiva',(null as any));
    this._text_30 = this.renderer.createText(this._el_25,'\n        ',(null as any));
    this._text_31 = this.renderer.createText(this._el_23,'\n        ',(null as any));
    this._text_32 = this.renderer.createText(this._el_23,'\n    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_1,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_28,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_28));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.RouterLinkWithHref) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._RouterLinkWithHref_28_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_28_0_0:any = '/';
    this._RouterLinkWithHref_28_3.check_routerLink(currVal_28_0_0,throwOnChange,false);
    this._RouterLinkWithHref_28_3.ngDoCheck(this,this._el_28,throwOnChange);
    this._RouterLinkWithHref_28_3.checkHost(this,this,this._el_28,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_28_3.ngOnDestroy();
  }
  handleEvent_28(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_28_3.handleEvent(eventName,$event) && result);
    return result;
  }
}