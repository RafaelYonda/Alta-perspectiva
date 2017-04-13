var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from './question-report.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_container';
import * as import6 from '../../services/question-answer.service';
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
var Wrapper_QuestionReportComponent = (function () {
    function Wrapper_QuestionReportComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.QuestionReportComponent(p0, p1, p2);
    }
    Wrapper_QuestionReportComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_QuestionReportComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_QuestionReportComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_QuestionReportComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_QuestionReportComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_QuestionReportComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_QuestionReportComponent;
}());
export { Wrapper_QuestionReportComponent };
var renderType_QuestionReportComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_QuestionReportComponent_Host0 = (function (_super) {
    __extends(View_QuestionReportComponent_Host0, _super);
    function View_QuestionReportComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionReportComponent_Host0, renderType_QuestionReportComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionReportComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'question-report', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import5.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_QuestionReportComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionAnswerService_0_5 = new import6.QuestionAnswerService(this.injectorGet(import10.Http, this.parentIndex));
        this._QuestionReportComponent_0_6 = new Wrapper_QuestionReportComponent(this._QuestionAnswerService_0_5, this.injectorGet(import11.ToastsManager, this.parentIndex), this._vc_0.vcRef);
        this.compView_0.create(this._QuestionReportComponent_0_6.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._QuestionReportComponent_0_6.context);
    };
    View_QuestionReportComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_5;
        }
        if (((token === import0.QuestionReportComponent) && (0 === requestNodeIndex))) {
            return this._QuestionReportComponent_0_6.context;
        }
        return notFoundResult;
    };
    View_QuestionReportComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._QuestionReportComponent_0_6.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_QuestionReportComponent_Host0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
    };
    View_QuestionReportComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    };
    return View_QuestionReportComponent_Host0;
}(import1.AppView));
export var QuestionReportComponentNgFactory = new import9.ComponentFactory('question-report', View_QuestionReportComponent_Host0, import0.QuestionReportComponent);
var styles_QuestionReportComponent = [import12.styles];
var renderType_QuestionReportComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_QuestionReportComponent, {});
var View_QuestionReportComponent0 = (function (_super) {
    __extends(View_QuestionReportComponent0, _super);
    function View_QuestionReportComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionReportComponent0, renderType_QuestionReportComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionReportComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal', 'id', 'dialogModal'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'dialog'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'header', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'question-title'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._vc_8 = new import5.ViewContainer(8, 6, this, this._anchor_8);
        this._TemplateRef_8_5 = new import17.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import13.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
        this._text_9 = this.renderer.createText(this._el_6, '\n                ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._vc_10 = new import5.ViewContainer(10, 6, this, this._anchor_10);
        this._TemplateRef_10_5 = new import17.TemplateRef_(this, 10, this._anchor_10);
        this._NgIf_10_6 = new import13.Wrapper_NgIf(this._vc_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_12 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_13 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'exit-button'), null);
        this._text_15 = this.renderer.createText(this._el_14, 'x', null);
        this._text_16 = this.renderer.createText(this._el_2, '\n\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'panel-article'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'div', new import3.InlineArray2(2, 'class', 'details-container'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n                ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'article-details'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._vc_23 = new import5.ViewContainer(23, 21, this, this._anchor_23);
        this._TemplateRef_23_5 = new import17.TemplateRef_(this, 23, this._anchor_23);
        this._NgIf_23_6 = new import13.Wrapper_NgIf(this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_21, '\n                ', null);
        this._text_25 = this.renderer.createText(this._el_19, '\n            ', null);
        this._text_26 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_17, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_28 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_17, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_29, '\n                ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'placeholder', 'Comments(optional)', 'type', 'text'), null);
        this._DefaultValueAccessor_31_3 = new import14.Wrapper_DefaultValueAccessor(this.renderer, new import18.ElementRef(this._el_31));
        this._NG_VALUE_ACCESSOR_31_4 = [this._DefaultValueAccessor_31_3.context];
        this._NgModel_31_5 = new import15.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_31_4);
        this._NgControl_31_6 = this._NgModel_31_5.context;
        this._NgControlStatus_31_7 = new import16.Wrapper_NgControlStatus(this._NgControl_31_6);
        this._text_32 = this.renderer.createText(this._el_29, '\n            ', null);
        this._text_33 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_17, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_35 = this.renderer.createText(this._el_17, '\n            ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_17, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_37 = this.renderer.createText(this._el_17, '\n        ', null);
        this._text_38 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_2, 'footer', import3.EMPTY_INLINE_ARRAY, null);
        this._text_40 = this.renderer.createText(this._el_39, '\n            ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'button', new import3.InlineArray4(4, 'class', 'btn btn-secondary', 'type', 'button'), null);
        this._text_42 = this.renderer.createText(this._el_41, '\n                ', null);
        this._text_43 = this.renderer.createText(this._el_41, '\n                Cerrar\n            ', null);
        this._text_44 = this.renderer.createText(this._el_39, '\n            ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_39, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'button'), null);
        this._text_46 = this.renderer.createText(this._el_45, '\n                ', null);
        this._text_47 = this.renderer.createText(this._el_45, '\n                Guardar\n            ', null);
        this._text_48 = this.renderer.createText(this._el_39, '\n        ', null);
        this._text_49 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_50 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_14));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_31, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_31));
        this._NgModel_31_5.subscribe(this, this.eventHandler(this.handleEvent_31), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_41, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_41));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_45, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_45));
        this.init(null, (this.renderer.directRenderer ? null : [
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
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_QuestionReportComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import19.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        if (((token === import17.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import19.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        if (((token === import17.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import19.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import20.DefaultValueAccessor) && (31 === requestNodeIndex))) {
            return this._DefaultValueAccessor_31_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (31 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_31_4;
        }
        if (((token === import22.NgModel) && (31 === requestNodeIndex))) {
            return this._NgModel_31_5.context;
        }
        if (((token === import23.NgControl) && (31 === requestNodeIndex))) {
            return this._NgControl_31_6;
        }
        if (((token === import24.NgControlStatus) && (31 === requestNodeIndex))) {
            return this._NgControlStatus_31_7.context;
        }
        return notFoundResult;
    };
    View_QuestionReportComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8_0_0 = this.context.answerId;
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        var currVal_10_0_0 = !this.context.answerId;
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        var currVal_23_0_0 = this.context.questionReports;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        this._DefaultValueAccessor_31_3.ngDoCheck(this, this._el_31, throwOnChange);
        var currVal_31_1_0 = this.context.comment;
        this._NgModel_31_5.check_model(currVal_31_1_0, throwOnChange, false);
        this._NgModel_31_5.ngDoCheck(this, this._el_31, throwOnChange);
        this._NgControlStatus_31_7.ngDoCheck(this, this._el_31, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatus_31_7.checkHost(this, this, this._el_31, throwOnChange);
    };
    View_QuestionReportComponent0.prototype.destroyInternal = function () {
        this._vc_8.destroyNestedViews();
        this._vc_10.destroyNestedViews();
        this._vc_23.destroyNestedViews();
        this._NgModel_31_5.ngOnDestroy();
    };
    View_QuestionReportComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 8)) {
            return new View_QuestionReportComponent1(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 10)) {
            return new View_QuestionReportComponent2(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        if ((nodeIndex == 23)) {
            return new View_QuestionReportComponent3(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        return null;
    };
    View_QuestionReportComponent0.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionReportComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionReportComponent0.prototype.handleEvent_31 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_31_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.comment = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionReportComponent0.prototype.handleEvent_41 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionReportComponent0.prototype.handleEvent_45 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.save() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionReportComponent0;
}(import1.AppView));
export { View_QuestionReportComponent0 };
var View_QuestionReportComponent1 = (function (_super) {
    __extends(View_QuestionReportComponent1, _super);
    function View_QuestionReportComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionReportComponent1, renderType_QuestionReportComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionReportComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n                    ¿Por qué quieres reportar esta información?\n                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), null);
        return null;
    };
    View_QuestionReportComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionReportComponent1;
}(import1.AppView));
var View_QuestionReportComponent2 = (function (_super) {
    __extends(View_QuestionReportComponent2, _super);
    function View_QuestionReportComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionReportComponent2, renderType_QuestionReportComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionReportComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n                    ¿ Informe de preguntas?\n\n                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2
        ]), null);
        return null;
    };
    View_QuestionReportComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionReportComponent2;
}(import1.AppView));
var View_QuestionReportComponent3 = (function (_super) {
    __extends(View_QuestionReportComponent3, _super);
    function View_QuestionReportComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionReportComponent3, renderType_QuestionReportComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionReportComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new import5.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import17.TemplateRef_(this, 4, this._anchor_4);
        this._NgFor_4_6 = new import25.Wrapper_NgFor(this._vc_4.vcRef, this._TemplateRef_4_5, this.parentView.parentView.injectorGet(import26.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_5 = this.renderer.createText(this._el_0, '\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5
        ]), null);
        return null;
    };
    View_QuestionReportComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import27.NgFor) && (4 === requestNodeIndex))) {
            return this._NgFor_4_6.context;
        }
        return notFoundResult;
    };
    View_QuestionReportComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = this.parentView.context.questionReports;
        this._NgFor_4_6.check_ngForOf(currVal_4_0_0, throwOnChange, false);
        this._NgFor_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
    };
    View_QuestionReportComponent3.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
    };
    View_QuestionReportComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionReportComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_QuestionReportComponent4(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    };
    return View_QuestionReportComponent3;
}(import1.AppView));
var View_QuestionReportComponent4 = (function (_super) {
    __extends(View_QuestionReportComponent4, _super);
    function View_QuestionReportComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_QuestionReportComponent4, renderType_QuestionReportComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_12 = import29.UNINITIALIZED;
        return _this;
    }
    View_QuestionReportComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'name', 'questionReport', 'type', 'radio'), null);
        this._DefaultValueAccessor_2_3 = new import14.Wrapper_DefaultValueAccessor(this.renderer, new import18.ElementRef(this._el_2));
        this._RadioControlValueAccessor_2_4 = new import28.Wrapper_RadioControlValueAccessor(this.renderer, new import18.ElementRef(this._el_2), this.parentView.parentView.parentView.injectorGet(import30.RadioControlRegistry, this.parentView.parentView.parentIndex), this.injector(2));
        this._NG_VALUE_ACCESSOR_2_5 = [
            this._DefaultValueAccessor_2_3.context,
            this._RadioControlValueAccessor_2_4.context
        ];
        this._NgModel_2_6 = new import15.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_2_5);
        this._NgControl_2_7 = this._NgModel_2_6.context;
        this._NgControlStatus_2_8 = new import16.Wrapper_NgControlStatus(this._NgControl_2_7);
        this._text_3 = this.renderer.createText(this._el_0, '', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_0, '\n\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray8(8, 'ngModelChange', null, 'input', null, 'blur', null, 'change', null), this.eventHandler(this.handleEvent_2));
        this._NgModel_2_6.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5
        ]), [disposable_0]);
        return null;
    };
    View_QuestionReportComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.DefaultValueAccessor) && (2 === requestNodeIndex))) {
            return this._DefaultValueAccessor_2_3.context;
        }
        if (((token === import30.RadioControlValueAccessor) && (2 === requestNodeIndex))) {
            return this._RadioControlValueAccessor_2_4.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_2_5;
        }
        if (((token === import22.NgModel) && (2 === requestNodeIndex))) {
            return this._NgModel_2_6.context;
        }
        if (((token === import23.NgControl) && (2 === requestNodeIndex))) {
            return this._NgControl_2_7;
        }
        if (((token === import24.NgControlStatus) && (2 === requestNodeIndex))) {
            return this._NgControlStatus_2_8.context;
        }
        return notFoundResult;
    };
    View_QuestionReportComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = 'questionReport';
        this._RadioControlValueAccessor_2_4.check_name(currVal_2_1_0, throwOnChange, false);
        var currVal_2_1_1 = import3.inlineInterpolate(1, '', ((this.context.$implicit == null) ? null : this.context.$implicit.title), '');
        this._RadioControlValueAccessor_2_4.check_value(currVal_2_1_1, throwOnChange, false);
        this._RadioControlValueAccessor_2_4.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_2_0 = 'questionReport';
        this._NgModel_2_6.check_name(currVal_2_2_0, throwOnChange, false);
        var currVal_2_2_1 = this.parentView.parentView.context.selectedQuestionReport;
        this._NgModel_2_6.check_model(currVal_2_2_1, throwOnChange, false);
        this._NgModel_2_6.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_8.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_8.checkHost(this, this, this._el_2, throwOnChange);
        var currVal_12 = import3.inlineInterpolate(1, ' ', ((this.context.$implicit == null) ? null : this.context.$implicit.title), '');
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setText(this._text_3, currVal_12);
            this._expr_12 = currVal_12;
        }
    };
    View_QuestionReportComponent4.prototype.destroyInternal = function () {
        this._RadioControlValueAccessor_2_4.ngOnDestroy();
        this._NgModel_2_6.ngOnDestroy();
    };
    View_QuestionReportComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionReportComponent4.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_2_3.handleEvent(eventName, $event) && result);
        result = (this._RadioControlValueAccessor_2_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.selectedQuestionReport = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionReportComponent4;
}(import1.AppView));
