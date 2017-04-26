/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './profile-category.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import15 from '@angular/router/src/router';
import * as import16 from '@angular/router/src/router_state';
import * as import17 from '@angular/common/src/location/location_strategy';
import * as import18 from '@angular/router/src/directives/router_link';
import * as import19 from '@angular/core/src/security';
export class Wrapper_ProfileCategoryComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ProfileCategoryComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.ProfileCategoryComponent();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_categoryWiseAnswers(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.categoryWiseAnswers = currValue;
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
var renderType_ProfileCategoryComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_ProfileCategoryComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.ProfileCategoryComponent>;
  _ProfileCategoryComponent_0_3:Wrapper_ProfileCategoryComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ProfileCategoryComponent_Host0,renderType_ProfileCategoryComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'profile-category',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ProfileCategoryComponent0(this.viewUtils,this,0,this._el_0);
    this._ProfileCategoryComponent_0_3 = new Wrapper_ProfileCategoryComponent();
    this.compView_0.create(this._ProfileCategoryComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._ProfileCategoryComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ProfileCategoryComponent) && (0 === requestNodeIndex))) { return this._ProfileCategoryComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ProfileCategoryComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ProfileCategoryComponentNgFactory:import8.ComponentFactory<import0.ProfileCategoryComponent> = new import8.ComponentFactory<import0.ProfileCategoryComponent>('profile-category',View_ProfileCategoryComponent_Host0,import0.ProfileCategoryComponent);
const styles_ProfileCategoryComponent:any[] = ['.profile-cat-img[_ngcontent-%COMP%] {\n        float: left;\n        height: 30px;\n        width: 30px;\n        border-radius: 10%;\n        margin-right: 12px;\n    }\n\n    .statistic-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n        list-style: none;\n    }\n\n    .profile-rightmenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 12px;\n        font-weight: 700;\n    }\n    .profile-rightmenu[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n        line-height:10px;\n    }\n    .profile-rightmenu[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n        font-size:10px;\n    }\n    .profile-rightmenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n        margin-bottom:20px;\n    }'];
var renderType_ProfileCategoryComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_ProfileCategoryComponent,{});
export class View_ProfileCategoryComponent0 extends import2.AppView<import0.ProfileCategoryComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _vc_6:import9.ViewContainer;
  _TemplateRef_6_5:any;
  _NgFor_6_6:import10.Wrapper_NgFor;
  _text_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ProfileCategoryComponent0,renderType_ProfileCategoryComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','statistic-panel'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Etapas de mi negocio',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_6 = new import9.ViewContainer(6,1,this,this._anchor_6);
    this._TemplateRef_6_5 = new import11.TemplateRef_(this,6,this._anchor_6);
    this._NgFor_6_6 = new import10.Wrapper_NgFor(this._vc_6.vcRef,this._TemplateRef_6_5,this.parentView.injectorGet(import12.IterableDiffers,this.parentIndex),this.ref);
    this._text_7 = this.renderer.createText(this._el_1,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._anchor_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import13.NgFor) && (6 === requestNodeIndex))) { return this._NgFor_6_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_6_0_0:any = this.context.categoryWiseAnswers;
    this._NgFor_6_6.check_ngForOf(currVal_6_0_0,throwOnChange,false);
    this._NgFor_6_6.ngDoCheck(this,this._anchor_6,throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_6.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 6)) { return new View_ProfileCategoryComponent1(this.viewUtils,this,6,this._anchor_6,this._vc_6); }
    return (null as any);
  }
}
class View_ProfileCategoryComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _RouterLink_4_3:import14.Wrapper_RouterLink;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _RouterLinkWithHref_8_3:import14.Wrapper_RouterLinkWithHref;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  /*private*/ _expr_19:any;
  _arr_20:any;
  _arr_21:any;
  /*private*/ _expr_22:any;
  /*private*/ _expr_23:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_ProfileCategoryComponent1,renderType_ProfileCategoryComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_19 = import1.UNINITIALIZED;
    this._arr_20 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._arr_21 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_22 = import1.UNINITIALIZED;
    this._expr_23 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'ul',new import3.InlineArray2(2,'class','profile-rightmenu'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'img',new import3.InlineArray2(2,'class','profile-cat-img'),(null as any));
    this._RouterLink_4_3 = new import14.Wrapper_RouterLink(this.parentView.parentView.injectorGet(import15.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import16.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import17.LocationStrategy,this.parentView.parentIndex));
    this._text_5 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_2,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_8_3 = new import14.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import15.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import16.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import17.LocationStrategy,this.parentView.parentIndex));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_2,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'',(null as any));
    this._text_14 = this.renderer.createText(this._el_12,'Respuestas',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_4));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.RouterLink) && (4 === requestNodeIndex))) { return this._RouterLink_4_3.context; }
    if (((token === import18.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = this._arr_20('/question/home',((this.context.$implicit == null)? (null as any): this.context.$implicit.categoryId));
    this._RouterLink_4_3.check_routerLink(currVal_4_0_0,throwOnChange,false);
    this._RouterLink_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    const currVal_8_0_0:any = this._arr_21('/question/home',((this.context.$implicit == null)? (null as any): this.context.$implicit.categoryId));
    this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0,throwOnChange,false);
    this._RouterLinkWithHref_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    const currVal_19:any = import3.inlineInterpolate(1,'',((this.context.$implicit == null)? (null as any): this.context.$implicit.imageUrl),'');
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import19.SecurityContext.URL,currVal_19));
      this._expr_19 = currVal_19;
    }
    this._RouterLinkWithHref_8_3.checkHost(this,this,this._el_8,throwOnChange);
    const currVal_22:any = import3.inlineInterpolate(1,' ',((this.context.$implicit == null)? (null as any): this.context.$implicit.categoryName),'');
    if (import3.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setText(this._text_9,currVal_22);
      this._expr_22 = currVal_22;
    }
    const currVal_23:any = import3.inlineInterpolate(1,'',((this.context.$implicit == null)? (null as any): this.context.$implicit.answerCount),' ');
    if (import3.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setText(this._text_13,currVal_23);
      this._expr_23 = currVal_23;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_8_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLink_4_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_8_3.handleEvent(eventName,$event) && result);
    return result;
  }
}