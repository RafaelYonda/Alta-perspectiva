/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../tsScripts/app/core/banner/apbanner.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '../../../../../tsScripts/app/services/window-ref.service';
import * as import10 from './carousel.css.shim.ngstyle';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '@angular/core/src/security';
export class Wrapper_ApBannerComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ApBannerComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.ApBannerComponent(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'window:scroll')) {
      const pd_sub_0:any = ((<any>this.context.track($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_ApBannerComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ApBannerComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ApBannerComponent>;
  _ApBannerComponent_0_3:Wrapper_ApBannerComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ApBannerComponent_Host0,renderType_ApBannerComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ap-banner',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ApBannerComponent0(this.viewUtils,this,0,this._el_0);
    this._ApBannerComponent_0_3 = new Wrapper_ApBannerComponent(new import8.ElementRef(this._el_0),this.injectorGet(import9.WindowRefService,this.parentIndex));
    this.compView_0.create(this._ApBannerComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'scroll','window'),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ApBannerComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ApBannerComponent) && (0 === requestNodeIndex))) { return this._ApBannerComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ApBannerComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._ApBannerComponent_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const ApBannerComponentNgFactory:import7.ComponentFactory<import0.ApBannerComponent> = new import7.ComponentFactory<import0.ApBannerComponent>('ap-banner',View_ApBannerComponent_Host0,import0.ApBannerComponent);
const styles_ApBannerComponent:any[] = [import10.styles];
var renderType_ApBannerComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_ApBannerComponent,{});
export class View_ApBannerComponent0 extends import1.AppView<import0.ApBannerComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  _text_38:any;
  /*private*/ _expr_39:any;
  /*private*/ _expr_40:any;
  /*private*/ _expr_41:any;
  /*private*/ _expr_42:any;
  /*private*/ _expr_43:any;
  /*private*/ _expr_44:any;
  /*private*/ _expr_45:any;
  /*private*/ _expr_46:any;
  /*private*/ _expr_47:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ApBannerComponent0,renderType_ApBannerComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_39 = import11.UNINITIALIZED;
    this._expr_40 = import11.UNINITIALIZED;
    this._expr_41 = import11.UNINITIALIZED;
    this._expr_42 = import11.UNINITIALIZED;
    this._expr_43 = import11.UNINITIALIZED;
    this._expr_44 = import11.UNINITIALIZED;
    this._expr_45 = import11.UNINITIALIZED;
    this._expr_46 = import11.UNINITIALIZED;
    this._expr_47 = import11.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','carousel'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_0,'ul',new import3.InlineArray2(2,'class','slides'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'li',new import3.InlineArray2(2,'class','slide-item'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'img',new import3.InlineArray2(2,'alt',''),(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_5,'h2',new import3.InlineArray2(2,'class','hidden-xs'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_5,'h3',new import3.InlineArray2(2,'class','hidden-xs'),(null as any));
    this._text_13 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_14 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_3,'li',new import3.InlineArray2(2,'class','slide-item'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_15,'img',new import3.InlineArray2(2,'alt',''),(null as any));
    this._text_18 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_15,'h2',new import3.InlineArray2(2,'class','hidden-xs'),(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'',(null as any));
    this._text_21 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_15,'h3',new import3.InlineArray2(2,'class','hidden-xs'),(null as any));
    this._text_23 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._text_24 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_3,'li',new import3.InlineArray2(2,'class','slide-item'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'\n            ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_25,'img',new import3.InlineArray2(2,'alt',''),(null as any));
    this._text_28 = this.renderer.createText(this._el_25,'\n            ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_25,'div',new import3.InlineArray2(2,'style','padding-left:55px;'),(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'\n                ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_29,'h2',new import3.InlineArray2(2,'class','hidden-xs'),(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'',(null as any));
    this._text_33 = this.renderer.createText(this._el_29,'\n                ',(null as any));
    this._el_34 = import3.createRenderElement(this.renderer,this._el_29,'h3',new import3.InlineArray2(2,'class','hidden-xs'),(null as any));
    this._text_35 = this.renderer.createText(this._el_29,'\n            ',(null as any));
    this._text_36 = this.renderer.createText(this._el_25,'\n            \n        ',(null as any));
    this._text_37 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_38 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._text_37,
      this._text_38
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_39:any = import3.inlineInterpolate(1,'',this.context.images[0].url,'');
    if (import3.checkBinding(throwOnChange,this._expr_39,currVal_39)) {
      this.renderer.setElementProperty(this._el_7,'src',this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL,currVal_39));
      this._expr_39 = currVal_39;
    }
    const currVal_40:any = import3.inlineInterpolate(1,'',this.context.images[0].title,'');
    if (import3.checkBinding(throwOnChange,this._expr_40,currVal_40)) {
      this.renderer.setText(this._text_10,currVal_40);
      this._expr_40 = currVal_40;
    }
    const currVal_41:any = this.context.images[0].desccription;
    if (import3.checkBinding(throwOnChange,this._expr_41,currVal_41)) {
      this.renderer.setElementProperty(this._el_12,'innerHTML',this.viewUtils.sanitizer.sanitize(import12.SecurityContext.HTML,currVal_41));
      this._expr_41 = currVal_41;
    }
    const currVal_42:any = import3.inlineInterpolate(1,'',this.context.images[1].url,'');
    if (import3.checkBinding(throwOnChange,this._expr_42,currVal_42)) {
      this.renderer.setElementProperty(this._el_17,'src',this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL,currVal_42));
      this._expr_42 = currVal_42;
    }
    const currVal_43:any = import3.inlineInterpolate(1,'',this.context.images[1].title,'');
    if (import3.checkBinding(throwOnChange,this._expr_43,currVal_43)) {
      this.renderer.setText(this._text_20,currVal_43);
      this._expr_43 = currVal_43;
    }
    const currVal_44:any = this.context.images[1].desccription;
    if (import3.checkBinding(throwOnChange,this._expr_44,currVal_44)) {
      this.renderer.setElementProperty(this._el_22,'innerHTML',this.viewUtils.sanitizer.sanitize(import12.SecurityContext.HTML,currVal_44));
      this._expr_44 = currVal_44;
    }
    const currVal_45:any = import3.inlineInterpolate(1,'',this.context.images[2].url,'');
    if (import3.checkBinding(throwOnChange,this._expr_45,currVal_45)) {
      this.renderer.setElementProperty(this._el_27,'src',this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL,currVal_45));
      this._expr_45 = currVal_45;
    }
    const currVal_46:any = import3.inlineInterpolate(1,'',this.context.images[2].title,'');
    if (import3.checkBinding(throwOnChange,this._expr_46,currVal_46)) {
      this.renderer.setText(this._text_32,currVal_46);
      this._expr_46 = currVal_46;
    }
    const currVal_47:any = this.context.images[2].desccription;
    if (import3.checkBinding(throwOnChange,this._expr_47,currVal_47)) {
      this.renderer.setElementProperty(this._el_34,'innerHTML',this.viewUtils.sanitizer.sanitize(import12.SecurityContext.HTML,currVal_47));
      this._expr_47 = currVal_47;
    }
  }
}