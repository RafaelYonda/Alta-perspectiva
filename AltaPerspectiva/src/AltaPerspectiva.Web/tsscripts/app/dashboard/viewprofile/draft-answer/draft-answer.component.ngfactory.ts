/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './draft-answer.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/profile.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import18 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import19 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from 'ngx-quill/src/quill-editor.component';
import * as import21 from '../../../../../node_modules/ngx-quill/src/quill-editor.component.ngfactory';
import * as import22 from '../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import23 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import24 from '@angular/core/src/change_detection/change_detection_util';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from '@angular/common/src/directives/ng_if';
import * as import27 from '@angular/forms/src/directives/validators';
import * as import28 from '@angular/forms/src/validators';
import * as import29 from '@angular/forms/src/directives/control_value_accessor';
import * as import30 from '@angular/forms/src/directives/ng_model';
import * as import31 from '@angular/forms/src/directives/ng_control';
import * as import32 from '@angular/forms/src/directives/ng_control_status';
import * as import33 from '@angular/forms/src/directives/ng_form';
import * as import34 from '@angular/forms/src/directives/control_container';
export class Wrapper_DraftAnswerComponent {
  /*private*/ _eventHandler:Function;
  context:import0.DraftAnswerComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.DraftAnswerComponent(p0,p1,p2);
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
var renderType_DraftAnswerComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_DraftAnswerComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.DraftAnswerComponent>;
  _ProfileService_0_3:import5.ProfileService;
  _DraftAnswerComponent_0_4:Wrapper_DraftAnswerComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DraftAnswerComponent_Host0,renderType_DraftAnswerComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_DraftAnswerComponent0(this.viewUtils,this,0,this._el_0);
    this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import9.Http,this.parentIndex));
    this._DraftAnswerComponent_0_4 = new Wrapper_DraftAnswerComponent(this.injectorGet(import10.ActivatedRoute,this.parentIndex),this._ProfileService_0_3,this.injectorGet(import11.Router,this.parentIndex));
    this.compView_0.create(this._DraftAnswerComponent_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._DraftAnswerComponent_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import5.ProfileService) && (0 === requestNodeIndex))) { return this._ProfileService_0_3; }
    if (((token === import0.DraftAnswerComponent) && (0 === requestNodeIndex))) { return this._DraftAnswerComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DraftAnswerComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const DraftAnswerComponentNgFactory:import8.ComponentFactory<import0.DraftAnswerComponent> = new import8.ComponentFactory<import0.DraftAnswerComponent>('ng-component',View_DraftAnswerComponent_Host0,import0.DraftAnswerComponent);
const styles_DraftAnswerComponent:any[] = ([] as any[]);
var renderType_DraftAnswerComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_DraftAnswerComponent,{});
export class View_DraftAnswerComponent0 extends import1.AppView<import0.DraftAnswerComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import12.ViewContainer;
  _TemplateRef_0_5:any;
  _NgFor_0_6:import13.Wrapper_NgFor;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_DraftAnswerComponent0,renderType_DraftAnswerComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
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
    if ((nodeIndex == 0)) { return new View_DraftAnswerComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}
class View_DraftAnswerComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _NgForm_3_3:import17.Wrapper_NgForm;
  _ControlContainer_3_4:any;
  _NgControlStatusGroup_3_5:import18.Wrapper_NgControlStatusGroup;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _vc_12:import12.ViewContainer;
  _TemplateRef_12_5:any;
  _NgIf_12_6:import19.Wrapper_NgIf;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _vc_14:import12.ViewContainer;
  _TemplateRef_14_5:any;
  _NgIf_14_6:import19.Wrapper_NgIf;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  compView_21:import1.AppView<import20.QuillEditorComponent>;
  _QuillEditorComponent_21_3:import21.Wrapper_QuillEditorComponent;
  _RequiredValidator_21_4:import22.Wrapper_RequiredValidator;
  _NG_VALIDATORS_21_5:any[];
  _NG_VALUE_ACCESSOR_21_6:any[];
  _NgModel_21_7:import23.Wrapper_NgModel;
  _NgControl_21_8:any;
  _NgControlStatus_21_9:import18.Wrapper_NgControlStatus;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  /*private*/ _expr_48:any;
  _arr_49:any;
  _arr_50:any;
  _arr_51:any;
  _map_52:any;
  _map_53:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_DraftAnswerComponent1,renderType_DraftAnswerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_48 = import24.UNINITIALIZED;
    this._arr_49 = import3.pureProxy3((p0:any,p1:any,p2:any):any[] => {
      return [
        p0,
        p1,
        p2
      ]
      ;
    });
    this._arr_50 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._arr_51 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._map_52 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {toolbar: p0};
    });
    this._map_53 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {standalone: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','tab'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_0,'form',new import3.InlineArray4(4,'class','form-horizontal ','role','form'),(null as any));
    this._NgForm_3_3 = new import17.Wrapper_NgForm((null as any),(null as any));
    this._ControlContainer_3_4 = this._NgForm_3_3.context;
    this._NgControlStatusGroup_3_5 = new import18.Wrapper_NgControlStatusGroup(this._ControlContainer_3_4);
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','modal-header'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_5,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n                ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._vc_12 = new import12.ViewContainer(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import14.TemplateRef_(this,12,this._anchor_12);
    this._NgIf_12_6 = new import19.Wrapper_NgIf(this._vc_12.vcRef,this._TemplateRef_12_5);
    this._text_13 = this.renderer.createText(this._el_10,'\n                ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._vc_14 = new import12.ViewContainer(14,10,this,this._anchor_14);
    this._TemplateRef_14_5 = new import14.TemplateRef_(this,14,this._anchor_14);
    this._NgIf_14_6 = new import19.Wrapper_NgIf(this._vc_14.vcRef,this._TemplateRef_14_5);
    this._text_15 = this.renderer.createText(this._el_10,'\n            ',(null as any));
    this._text_16 = this.renderer.createText(this._el_5,'\n            ',(null as any));
    this._text_17 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._text_18 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','modal-body'),(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'\n            ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_19,'quill-editor',new import3.InlineArray4(4,'name','answerField','required',''),(null as any));
    this.compView_21 = new import21.View_QuillEditorComponent0(this.viewUtils,this,21,this._el_21);
    this._QuillEditorComponent_21_3 = new import21.Wrapper_QuillEditorComponent(new import25.ElementRef(this._el_21));
    this._RequiredValidator_21_4 = new import22.Wrapper_RequiredValidator();
    this._NG_VALIDATORS_21_5 = [
      this._QuillEditorComponent_21_3.context,
      this._RequiredValidator_21_4.context
    ]
    ;
    this._NG_VALUE_ACCESSOR_21_6 = [this._QuillEditorComponent_21_3.context];
    this._NgModel_21_7 = new import23.Wrapper_NgModel(this._ControlContainer_3_4,this._NG_VALIDATORS_21_5,(null as any),this._NG_VALUE_ACCESSOR_21_6);
    this._NgControl_21_8 = this._NgModel_21_7.context;
    this._NgControlStatus_21_9 = new import18.Wrapper_NgControlStatus(this._NgControl_21_8);
    this.compView_21.create(this._QuillEditorComponent_21_3.context);
    this._text_22 = this.renderer.createText(this._el_19,'\n        ',(null as any));
    this._text_23 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'style','text-align:left;'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'button',new import3.InlineArray8(6,'class','btn btn-primary','data-dismiss','modal','type','button'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'Publish Answer',(null as any));
    this._text_28 = this.renderer.createText(this._el_24,'           \n        ',(null as any));
    this._text_29 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_30 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_3,new import3.InlineArray4(4,'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_3));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_21,new import3.InlineArray2(2,'ngModelChange',(null as any)),this.eventHandler(this.handleEvent_21));
    this._NgModel_21_7.subscribe(this,this.eventHandler(this.handleEvent_21),true);
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_26,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_26));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
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
      this._anchor_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._text_29,
      this._text_30
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import26.NgIf) && (12 === requestNodeIndex))) { return this._NgIf_12_6.context; }
    if (((token === import14.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import26.NgIf) && (14 === requestNodeIndex))) { return this._NgIf_14_6.context; }
    if (((token === import20.QuillEditorComponent) && (21 === requestNodeIndex))) { return this._QuillEditorComponent_21_3.context; }
    if (((token === import27.RequiredValidator) && (21 === requestNodeIndex))) { return this._RequiredValidator_21_4.context; }
    if (((token === import28.NG_VALIDATORS) && (21 === requestNodeIndex))) { return this._NG_VALIDATORS_21_5; }
    if (((token === import29.NG_VALUE_ACCESSOR) && (21 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_21_6; }
    if (((token === import30.NgModel) && (21 === requestNodeIndex))) { return this._NgModel_21_7.context; }
    if (((token === import31.NgControl) && (21 === requestNodeIndex))) { return this._NgControl_21_8; }
    if (((token === import32.NgControlStatus) && (21 === requestNodeIndex))) { return this._NgControlStatus_21_9.context; }
    if (((token === import33.NgForm) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._NgForm_3_3.context; }
    if (((token === import34.ControlContainer) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._ControlContainer_3_4; }
    if (((token === import32.NgControlStatusGroup) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 29)))) { return this._NgControlStatusGroup_3_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NgForm_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this._NgControlStatusGroup_3_5.ngDoCheck(this,this._el_3,throwOnChange);
    const currVal_12_0_0:boolean = !this.parentView.context.isAnonymous;
    this._NgIf_12_6.check_ngIf(currVal_12_0_0,throwOnChange,false);
    this._NgIf_12_6.ngDoCheck(this,this._anchor_12,throwOnChange);
    const currVal_14_0_0:any = this.parentView.context.isAnonymous;
    this._NgIf_14_6.check_ngIf(currVal_14_0_0,throwOnChange,false);
    this._NgIf_14_6.ngDoCheck(this,this._anchor_14,throwOnChange);
    const currVal_21_0_0:any = this._map_52(this._arr_51(this._arr_49('bold','italic','underline'),this._arr_50('link','image')));
    this._QuillEditorComponent_21_3.check_modules(currVal_21_0_0,throwOnChange,false);
    this._QuillEditorComponent_21_3.ngDoCheck(this,this._el_21,throwOnChange);
    const currVal_21_1_0:any = '';
    this._RequiredValidator_21_4.check_required(currVal_21_1_0,throwOnChange,false);
    this._RequiredValidator_21_4.ngDoCheck(this,this._el_21,throwOnChange);
    const currVal_21_2_0:any = 'answerField';
    this._NgModel_21_7.check_name(currVal_21_2_0,throwOnChange,false);
    const currVal_21_2_1:any = this.context.$implicit.bestAnswer.text;
    this._NgModel_21_7.check_model(currVal_21_2_1,throwOnChange,false);
    const currVal_21_2_2:any = this._map_53(true);
    this._NgModel_21_7.check_options(currVal_21_2_2,throwOnChange,false);
    this._NgModel_21_7.ngDoCheck(this,this._el_21,throwOnChange);
    this._NgControlStatus_21_9.ngDoCheck(this,this._el_21,throwOnChange);
    this._vc_12.detectChangesInNestedViews(throwOnChange);
    this._vc_14.detectChangesInNestedViews(throwOnChange);
    this._NgControlStatusGroup_3_5.checkHost(this,this,this._el_3,throwOnChange);
    const currVal_48:any = import3.inlineInterpolate(1,'',this.context.$implicit.title,'');
    if (import3.checkBinding(throwOnChange,this._expr_48,currVal_48)) {
      this.renderer.setText(this._text_8,currVal_48);
      this._expr_48 = currVal_48;
    }
    this._RequiredValidator_21_4.checkHost(this,this.compView_21,this._el_21,throwOnChange);
    this._NgControlStatus_21_9.checkHost(this,this.compView_21,this._el_21,throwOnChange);
    this.compView_21.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._QuillEditorComponent_21_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._vc_12.destroyNestedViews();
    this._vc_14.destroyNestedViews();
    this.compView_21.destroy();
    this._QuillEditorComponent_21_3.ngOnDestroy();
    this._NgModel_21_7.ngOnDestroy();
    this._NgForm_3_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 12)) { return new View_DraftAnswerComponent2(this.viewUtils,this,12,this._anchor_12,this._vc_12); }
    if ((nodeIndex == 14)) { return new View_DraftAnswerComponent3(this.viewUtils,this,14,this._anchor_14,this._vc_14); }
    return (null as any);
  }
  handleEvent_3(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._NgForm_3_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_21(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.context.$implicit.bestAnswer.text = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_26(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.publishAnswer(this.context.$implicit.id)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_DraftAnswerComponent2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_DraftAnswerComponent2,renderType_DraftAnswerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','img-container'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n                ',(null as any));
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
class View_DraftAnswerComponent3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import12.ViewContainer) {
    super(View_DraftAnswerComponent3,renderType_DraftAnswerComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','img-container'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'img',new import3.InlineArray4(4,'class','user-image ','src','../../../../profile/Anonymous.png'),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}