/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../tsScripts/app/shared/question-report/question-report.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_container';
import * as import6 from '../../../../../tsScripts/app/services/question-answer.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from 'ng2-toastr/src/toast-manager';
import * as import12 from './question-report.component.css.shim.ngstyle';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import15 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import16 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/common/src/directives/ng_if';
import * as import20 from '@angular/forms/src/directives/default_value_accessor';
import * as import21 from '@angular/forms/src/directives/control_value_accessor';
import * as import22 from '@angular/forms/src/directives/ng_model';
import * as import23 from '@angular/forms/src/directives/ng_control';
import * as import24 from '@angular/forms/src/directives/ng_control_status';
import * as import25 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import26 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import27 from '@angular/common/src/directives/ng_for';
import * as import28 from '../../../../node_modules/@angular/forms/src/directives/radio_control_value_accessor.ngfactory';
import * as import29 from '@angular/core/src/change_detection/change_detection_util';
import * as import30 from '@angular/forms/src/directives/radio_control_value_accessor';
export class Wrapper_QuestionReportComponent {
  /*private*/ _eventHandler:Function;
  context:import0.QuestionReportComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.QuestionReportComponent(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
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
var renderType_QuestionReportComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_QuestionReportComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _vc_0:import5.ViewContainer;
  compView_0:import1.AppView<import0.QuestionReportComponent>;
  _QuestionAnswerService_0_5:import6.QuestionAnswerService;
  _QuestionReportComponent_0_6:Wrapper_QuestionReportComponent;
  _el_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_QuestionReportComponent_Host0,renderType_QuestionReportComponent_Host,import7.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'question-report',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._vc_0 = new import5.ViewContainer(0,(null as any),this,this._el_0);
    this.compView_0 = new View_QuestionReportComponent0(this.viewUtils,this,0,this._el_0);
    this._QuestionAnswerService_0_5 = new import6.QuestionAnswerService(this.injectorGet(import10.Http,this.parentIndex));
    this._QuestionReportComponent_0_6 = new Wrapper_QuestionReportComponent(this._QuestionAnswerService_0_5,this.injectorGet(import11.ToastsManager,this.parentIndex),this._vc_0.vcRef);
    this.compView_0.create(this._QuestionReportComponent_0_6.context);
    this._el_1 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this.init(this._el_1,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import9.ComponentRef_<any>(0,this,this._el_0,this._QuestionReportComponent_0_6.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import6.QuestionAnswerService) && (0 === requestNodeIndex))) { return this._QuestionAnswerService_0_5; }
    if (((token === import0.QuestionReportComponent) && (0 === requestNodeIndex))) { return this._QuestionReportComponent_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._QuestionReportComponent_0_6.ngDoCheck(this,this._el_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._vc_0.nativeElement,ctx);
    this._vc_0.visitNestedViewRootNodes(cb,ctx);
    cb(this._el_1,ctx);
  }
}
export const QuestionReportComponentNgFactory:import9.ComponentFactory<import0.QuestionReportComponent> = new import9.ComponentFactory<import0.QuestionReportComponent>('question-report',View_QuestionReportComponent_Host0,import0.QuestionReportComponent);
const styles_QuestionReportComponent:any[] = [import12.styles];
var renderType_QuestionReportComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_QuestionReportComponent,{});
export class View_QuestionReportComponent0 extends import1.AppView<import0.QuestionReportComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import5.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import13.Wrapper_NgIf;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import5.ViewContainer;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import13.Wrapper_NgIf;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _anchor_23:any;
  /*private*/ _vc_23:import5.ViewContainer;
  _TemplateRef_23_5:any;
  _NgIf_23_6:import13.Wrapper_NgIf;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _DefaultValueAccessor_31_3:import14.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_31_4:any[];
  _NgModel_31_5:import15.Wrapper_NgModel;
  _NgControl_31_6:any;
  _NgControlStatus_31_7:import16.Wrapper_NgControlStatus;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  _text_49:any;
  _text_50:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_QuestionReportComponent0,renderType_QuestionReportComponent,import7.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray4(4,'class','modal-overlay z-modal','id','dialogModal'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','dialog'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray2(2,'class','question-title'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6,(null as any));
    this._vc_8 = new import5.ViewContainer(8,6,this,this._anchor_8);
    this._TemplateRef_8_5 = new import17.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import13.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_6,(null as any));
    this._vc_10 = new import5.ViewContainer(10,6,this,this._anchor_10);
    this._TemplateRef_10_5 = new import17.TemplateRef_(this,10,this._anchor_10);
    this._NgIf_10_6 = new import13.Wrapper_NgIf(this._vc_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_12 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_13 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','exit-button'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'x',(null as any));
    this._text_16 = this.renderer.createText(this._el_2,'\n\n        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','panel-article'),(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_17,'div',new import3.InlineArray2(2,'class','details-container'),(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'\n                ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_19,'div',new import3.InlineArray2(2,'class','article-details'),(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'\n                    ',(null as any));
    this._anchor_23 = this.renderer.createTemplateAnchor(this._el_21,(null as any));
    this._vc_23 = new import5.ViewContainer(23,21,this,this._anchor_23);
    this._TemplateRef_23_5 = new import17.TemplateRef_(this,23,this._anchor_23);
    this._NgIf_23_6 = new import13.Wrapper_NgIf(this._vc_23.vcRef,this._TemplateRef_23_5);
    this._text_24 = this.renderer.createText(this._el_21,'\n                ',(null as any));
    this._text_25 = this.renderer.createText(this._el_19,'\n            ',(null as any));
    this._text_26 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_17,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_28 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_17,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'\n                ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_29,'input',new import3.InlineArray8(6,'class','form-control','placeholder','Comments(optional)','type','text'),(null as any));
    this._DefaultValueAccessor_31_3 = new import14.Wrapper_DefaultValueAccessor(this.renderer,new import18.ElementRef(this._el_31));
    this._NG_VALUE_ACCESSOR_31_4 = [this._DefaultValueAccessor_31_3.context];
    this._NgModel_31_5 = new import15.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_31_4);
    this._NgControl_31_6 = this._NgModel_31_5.context;
    this._NgControlStatus_31_7 = new import16.Wrapper_NgControlStatus(this._NgControl_31_6);
    this._text_32 = this.renderer.createText(this._el_29,'\n            ',(null as any));
    this._text_33 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._el_34 = import3.createRenderElement(this.renderer,this._el_17,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_35 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._el_36 = import3.createRenderElement(this.renderer,this._el_17,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_37 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._text_38 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,this._el_2,'footer',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_40 = this.renderer.createText(this._el_39,'\n            ',(null as any));
    this._el_41 = import3.createRenderElement(this.renderer,this._el_39,'button',new import3.InlineArray4(4,'class','btn btn-secondary','type','button'),(null as any));
    this._text_42 = this.renderer.createText(this._el_41,'\n                ',(null as any));
    this._text_43 = this.renderer.createText(this._el_41,'\n                Cerrar\n            ',(null as any));
    this._text_44 = this.renderer.createText(this._el_39,'\n            ',(null as any));
    this._el_45 = import3.createRenderElement(this.renderer,this._el_39,'button',new import3.InlineArray4(4,'class','btn btn-primary','type','button'),(null as any));
    this._text_46 = this.renderer.createText(this._el_45,'\n                ',(null as any));
    this._text_47 = this.renderer.createText(this._el_45,'\n                Guardar\n            ',(null as any));
    this._text_48 = this.renderer.createText(this._el_39,'\n        ',(null as any));
    this._text_49 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_50 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_14,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_14));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_31,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_31));
    this._NgModel_31_5.subscribe(this,this.eventHandler(this.handleEvent_31),true);
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_41,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_41));
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_45,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_45));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._anchor_23,
      this._text_24,
      this._text_25,
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
      this._el_36,
      this._text_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._text_48,
      this._text_49,
      this._text_50
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import19.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    if (((token === import17.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import19.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6.context; }
    if (((token === import17.TemplateRef) && (23 === requestNodeIndex))) { return this._TemplateRef_23_5; }
    if (((token === import19.NgIf) && (23 === requestNodeIndex))) { return this._NgIf_23_6.context; }
    if (((token === import20.DefaultValueAccessor) && (31 === requestNodeIndex))) { return this._DefaultValueAccessor_31_3.context; }
    if (((token === import21.NG_VALUE_ACCESSOR) && (31 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_31_4; }
    if (((token === import22.NgModel) && (31 === requestNodeIndex))) { return this._NgModel_31_5.context; }
    if (((token === import23.NgControl) && (31 === requestNodeIndex))) { return this._NgControl_31_6; }
    if (((token === import24.NgControlStatus) && (31 === requestNodeIndex))) { return this._NgControlStatus_31_7.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_8_0_0:any = this.context.answerId;
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    const currVal_10_0_0:boolean = !this.context.answerId;
    this._NgIf_10_6.check_ngIf(currVal_10_0_0,throwOnChange,false);
    this._NgIf_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    const currVal_23_0_0:any = this.context.questionReports;
    this._NgIf_23_6.check_ngIf(currVal_23_0_0,throwOnChange,false);
    this._NgIf_23_6.ngDoCheck(this,this._anchor_23,throwOnChange);
    this._DefaultValueAccessor_31_3.ngDoCheck(this,this._el_31,throwOnChange);
    const currVal_31_1_0:any = this.context.comment;
    this._NgModel_31_5.check_model(currVal_31_1_0,throwOnChange,false);
    this._NgModel_31_5.ngDoCheck(this,this._el_31,throwOnChange);
    this._NgControlStatus_31_7.ngDoCheck(this,this._el_31,throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
    this._vc_23.detectChangesInNestedViews(throwOnChange);
    this._NgControlStatus_31_7.checkHost(this,this,this._el_31,throwOnChange);
  }
  destroyInternal():void {
    this._vc_8.destroyNestedViews();
    this._vc_10.destroyNestedViews();
    this._vc_23.destroyNestedViews();
    this._NgModel_31_5.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 8)) { return new View_QuestionReportComponent1(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    if ((nodeIndex == 10)) { return new View_QuestionReportComponent2(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    if ((nodeIndex == 23)) { return new View_QuestionReportComponent3(this.viewUtils,this,23,this._anchor_23,this._vc_23); }
    return (null as any);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.handleClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_14(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onClickedExit()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_31(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_31_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.comment = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_41(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onClickedExit()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_45(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.save()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_QuestionReportComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import5.ViewContainer) {
    super(View_QuestionReportComponent1,renderType_QuestionReportComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n                    ¿Por qué quieres reportar esta información?\n                ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_QuestionReportComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import5.ViewContainer) {
    super(View_QuestionReportComponent2,renderType_QuestionReportComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n                    ¿ Informe de preguntas?\n\n                ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_QuestionReportComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import5.ViewContainer;
  _TemplateRef_4_5:any;
  _NgFor_4_6:import25.Wrapper_NgFor;
  _text_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import5.ViewContainer) {
    super(View_QuestionReportComponent3,renderType_QuestionReportComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','left-panel-list'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n                        ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_4 = new import5.ViewContainer(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import17.TemplateRef_(this,4,this._anchor_4);
    this._NgFor_4_6 = new import25.Wrapper_NgFor(this._vc_4.vcRef,this._TemplateRef_4_5,this.parentView.parentView.injectorGet(import26.IterableDiffers,this.parentView.parentIndex),this.parentView.ref);
    this._text_5 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import27.NgFor) && (4 === requestNodeIndex))) { return this._NgFor_4_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = this.parentView.context.questionReports;
    this._NgFor_4_6.check_ngForOf(currVal_4_0_0,throwOnChange,false);
    this._NgFor_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 4)) { return new View_QuestionReportComponent4(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    return (null as any);
  }
}
class View_QuestionReportComponent4 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _DefaultValueAccessor_2_3:import14.Wrapper_DefaultValueAccessor;
  _RadioControlValueAccessor_2_4:import28.Wrapper_RadioControlValueAccessor;
  _NG_VALUE_ACCESSOR_2_5:any[];
  _NgModel_2_6:import15.Wrapper_NgModel;
  _NgControl_2_7:any;
  _NgControlStatus_2_8:import16.Wrapper_NgControlStatus;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  /*private*/ _expr_12:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import5.ViewContainer) {
    super(View_QuestionReportComponent4,renderType_QuestionReportComponent,import7.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import8.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_12 = import29.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import9.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'input',new import3.InlineArray4(4,'name','questionReport','type','radio'),(null as any));
    this._DefaultValueAccessor_2_3 = new import14.Wrapper_DefaultValueAccessor(this.renderer,new import18.ElementRef(this._el_2));
    this._RadioControlValueAccessor_2_4 = new import28.Wrapper_RadioControlValueAccessor(this.renderer,new import18.ElementRef(this._el_2),this.parentView.parentView.parentView.injectorGet(import30.RadioControlRegistry,this.parentView.parentView.parentIndex),this.injector(2));
    this._NG_VALUE_ACCESSOR_2_5 = [
      this._DefaultValueAccessor_2_3.context,
      this._RadioControlValueAccessor_2_4.context
    ]
    ;
    this._NgModel_2_6 = new import15.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_2_5);
    this._NgControl_2_7 = this._NgModel_2_6.context;
    this._NgControlStatus_2_8 = new import16.Wrapper_NgControlStatus(this._NgControl_2_7);
    this._text_3 = this.renderer.createText(this._el_0,'',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n\n                        ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray8(8,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any),'change',(null as any)),this.eventHandler(this.handleEvent_2));
    this._NgModel_2_6.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.DefaultValueAccessor) && (2 === requestNodeIndex))) { return this._DefaultValueAccessor_2_3.context; }
    if (((token === import30.RadioControlValueAccessor) && (2 === requestNodeIndex))) { return this._RadioControlValueAccessor_2_4.context; }
    if (((token === import21.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_2_5; }
    if (((token === import22.NgModel) && (2 === requestNodeIndex))) { return this._NgModel_2_6.context; }
    if (((token === import23.NgControl) && (2 === requestNodeIndex))) { return this._NgControl_2_7; }
    if (((token === import24.NgControlStatus) && (2 === requestNodeIndex))) { return this._NgControlStatus_2_8.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DefaultValueAccessor_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_2_1_0:any = 'questionReport';
    this._RadioControlValueAccessor_2_4.check_name(currVal_2_1_0,throwOnChange,false);
    const currVal_2_1_1:any = import3.inlineInterpolate(1,'',((this.context.$implicit == null)? (null as any): this.context.$implicit.title),'');
    this._RadioControlValueAccessor_2_4.check_value(currVal_2_1_1,throwOnChange,false);
    this._RadioControlValueAccessor_2_4.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_2_2_0:any = 'questionReport';
    this._NgModel_2_6.check_name(currVal_2_2_0,throwOnChange,false);
    const currVal_2_2_1:any = this.parentView.parentView.context.selectedQuestionReport;
    this._NgModel_2_6.check_model(currVal_2_2_1,throwOnChange,false);
    this._NgModel_2_6.ngDoCheck(this,this._el_2,throwOnChange);
    this._NgControlStatus_2_8.ngDoCheck(this,this._el_2,throwOnChange);
    this._NgControlStatus_2_8.checkHost(this,this,this._el_2,throwOnChange);
    const currVal_12:any = import3.inlineInterpolate(1,' ',((this.context.$implicit == null)? (null as any): this.context.$implicit.title),'');
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setText(this._text_3,currVal_12);
      this._expr_12 = currVal_12;
    }
  }
  destroyInternal():void {
    this._RadioControlValueAccessor_2_4.ngOnDestroy();
    this._NgModel_2_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_2_3.handleEvent(eventName,$event) && result);
    result = (this._RadioControlValueAccessor_2_4.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.parentView.parentView.context.selectedQuestionReport = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}