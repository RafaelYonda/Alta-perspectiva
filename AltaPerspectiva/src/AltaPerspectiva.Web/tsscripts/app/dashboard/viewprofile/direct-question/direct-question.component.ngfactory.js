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
import * as import0 from './direct-question.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_container';
import * as import6 from '../../../services/category.service';
import * as import7 from '../../../services/question.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/router/src/router_state';
import * as import13 from '@angular/core/src/linker/component_factory_resolver';
import * as import14 from 'ng2-toastr/src/toast-manager';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import17 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import18 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import19 from '../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import20 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import21 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import22 from '@angular/core/src/change_detection/change_detection_util';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import26 from '@angular/forms/src/directives/default_value_accessor';
import * as import27 from '@angular/forms/src/directives/validators';
import * as import28 from '@angular/forms/src/validators';
import * as import29 from '@angular/forms/src/directives/control_value_accessor';
import * as import30 from '@angular/forms/src/directives/ng_model';
import * as import31 from '@angular/forms/src/directives/ng_control';
import * as import32 from '@angular/forms/src/directives/ng_control_status';
import * as import33 from '@angular/forms/src/directives/ng_form';
import * as import34 from '@angular/forms/src/directives/control_container';
import * as import35 from '@angular/common/src/directives/ng_for';
import * as import36 from '../../../shared/user-info/user-info.component';
import * as import37 from '../../../services/profile.service';
import * as import38 from '../../../shared/user-info/user-info.component.ngfactory';
import * as import39 from '@angular/core/src/security';
import * as import40 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import41 from '@angular/common/src/directives/ng_if';
var Wrapper_DirectQuestionComponent = (function () {
    function Wrapper_DirectQuestionComponent(p0, p1, p2, p3, p4, p5) {
        this._changed = false;
        this.context = new import0.DirectQuestionComponent(p0, p1, p2, p3, p4, p5);
    }
    Wrapper_DirectQuestionComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DirectQuestionComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_DirectQuestionComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_DirectQuestionComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DirectQuestionComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_DirectQuestionComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DirectQuestionComponent;
}());
export { Wrapper_DirectQuestionComponent };
var renderType_DirectQuestionComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_DirectQuestionComponent_Host0 = (function (_super) {
    __extends(View_DirectQuestionComponent_Host0, _super);
    function View_DirectQuestionComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_DirectQuestionComponent_Host0, renderType_DirectQuestionComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_DirectQuestionComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import5.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_DirectQuestionComponent0(this.viewUtils, this, 0, this._el_0);
        this._CategoryService_0_5 = new import6.CategoryService(this.injectorGet(import11.Http, this.parentIndex));
        this._QuestionService_0_6 = new import7.QuestionService(this.injectorGet(import11.Http, this.parentIndex));
        this._DirectQuestionComponent_0_7 = new Wrapper_DirectQuestionComponent(this._CategoryService_0_5, this.injectorGet(import12.ActivatedRoute, this.parentIndex), this._QuestionService_0_6, this.injectorGet(import13.ComponentFactoryResolver, this.parentIndex), this.injectorGet(import14.ToastsManager, this.parentIndex), this._vc_0.vcRef);
        this.compView_0.create(this._DirectQuestionComponent_0_7.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._DirectQuestionComponent_0_7.context);
    };
    View_DirectQuestionComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.CategoryService) && (0 === requestNodeIndex))) {
            return this._CategoryService_0_5;
        }
        if (((token === import7.QuestionService) && (0 === requestNodeIndex))) {
            return this._QuestionService_0_6;
        }
        if (((token === import0.DirectQuestionComponent) && (0 === requestNodeIndex))) {
            return this._DirectQuestionComponent_0_7.context;
        }
        return notFoundResult;
    };
    View_DirectQuestionComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DirectQuestionComponent_0_7.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_DirectQuestionComponent_Host0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
    };
    View_DirectQuestionComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    };
    return View_DirectQuestionComponent_Host0;
}(import1.AppView));
export var DirectQuestionComponentNgFactory = new import10.ComponentFactory('ng-component', View_DirectQuestionComponent_Host0, import0.DirectQuestionComponent);
var styles_DirectQuestionComponent = ['.from-md[_ngcontent-%COMP%] {\n        width: 60%;\n        margin: 10px auto 65px;\n    }\n\n    .btn-select[_ngcontent-%COMP%] {\n        text-align: left !important;\n    }\n\n    .bottom-margin[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n\n    .caret[_ngcontent-%COMP%] {\n        margin-top: 8px;\n    }\n    .direct-naswer[_ngcontent-%COMP%]{\n        margin-left:15%;\n    }\n    .question-list[_ngcontent-%COMP%]{\n\n    }\n    .question-list[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\n        margin-top:10px;\n        margin-bottom:10px;\n    }'];
var renderType_DirectQuestionComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_DirectQuestionComponent, {});
var View_DirectQuestionComponent0 = (function (_super) {
    __extends(View_DirectQuestionComponent0, _super);
    function View_DirectQuestionComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_DirectQuestionComponent0, renderType_DirectQuestionComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
        _this._map_45 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_46 = import22.UNINITIALIZED;
        return _this;
    }
    View_DirectQuestionComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_logginAnchor_0 = new import15.QueryList();
        this._viewQuery_answerAnchor_1 = new import15.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_1 = new import5.ViewContainer(1, null, this, this._el_1);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_3 = new import5.ViewContainer(3, null, this, this._el_3);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = import3.createRenderElement(this.renderer, parentRenderNode, 'form', import3.EMPTY_INLINE_ARRAY, null);
        this._NgForm_5_3 = new import16.Wrapper_NgForm(null, null);
        this._ControlContainer_5_4 = this._NgForm_5_3.context;
        this._NgControlStatusGroup_5_5 = new import17.Wrapper_NgControlStatusGroup(this._ControlContainer_5_4);
        this._text_6 = this.renderer.createText(this._el_5, '\n    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'form-group from-md'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'input', new import3.InlineArray16(14, 'autocomplete', 'off', 'class', 'form-control bottom-margin', 'id', 'title', 'name', 'titleName', 'placeholder', 'Pregúntame aquí…', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_9_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import23.ElementRef(this._el_9));
        this._RequiredValidator_9_4 = new import19.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_9_5 = [this._RequiredValidator_9_4.context];
        this._NG_VALUE_ACCESSOR_9_6 = [this._DefaultValueAccessor_9_3.context];
        this._NgModel_9_7 = new import20.Wrapper_NgModel(this._ControlContainer_5_4, this._NG_VALIDATORS_9_5, null, this._NG_VALUE_ACCESSOR_9_6);
        this._NgControl_9_8 = this._NgModel_9_7.context;
        this._NgControlStatus_9_9 = new import17.Wrapper_NgControlStatus(this._NgControl_9_8);
        this._text_10 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_7, 'textarea', new import3.InlineArray8(6, 'class', 'form-control bottom-margin', 'placeholder', 'Agrega detalle de tu pregunta', 'rows', '5'), null);
        this._DefaultValueAccessor_12_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import23.ElementRef(this._el_12));
        this._NG_VALUE_ACCESSOR_12_4 = [this._DefaultValueAccessor_12_3.context];
        this._NgModel_12_5 = new import20.Wrapper_NgModel(this._ControlContainer_5_4, null, null, this._NG_VALUE_ACCESSOR_12_4);
        this._NgControl_12_6 = this._NgModel_12_5.context;
        this._NgControlStatus_12_7 = new import17.Wrapper_NgControlStatus(this._NgControl_12_6);
        this._text_13 = this.renderer.createText(this._el_7, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_7, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary pull-right', 'type', 'submit'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_14, 'Enviar pregunta\n        ', null);
        this._text_17 = this.renderer.createText(this._el_7, '\n    ', null);
        this._text_18 = this.renderer.createText(this._el_5, '\n    ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_5, 'div', new import3.InlineArray2(2, 'class', 'clearfix'), null);
        this._text_20 = this.renderer.createText(this._el_5, '\n', null);
        this._text_21 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._anchor_22 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_22 = new import5.ViewContainer(22, null, this, this._anchor_22);
        this._TemplateRef_22_5 = new import24.TemplateRef_(this, 22, this._anchor_22);
        this._NgFor_22_6 = new import21.Wrapper_NgFor(this._vc_22.vcRef, this._TemplateRef_22_5, this.parentView.injectorGet(import25.IterableDiffers, this.parentIndex), this.ref);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_5));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_9, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_9));
        this._NgModel_9_7.subscribe(this, this.eventHandler(this.handleEvent_9), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_12));
        this._NgModel_12_5.subscribe(this, this.eventHandler(this.handleEvent_12), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_14, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_14));
        this._viewQuery_logginAnchor_0.reset([this._vc_1.vcRef]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_0.first;
        this._viewQuery_answerAnchor_1.reset([this._vc_3.vcRef]);
        this.context.answerAnchor = this._viewQuery_answerAnchor_1.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
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
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._anchor_22
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_DirectQuestionComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.DefaultValueAccessor) && (9 === requestNodeIndex))) {
            return this._DefaultValueAccessor_9_3.context;
        }
        if (((token === import27.RequiredValidator) && (9 === requestNodeIndex))) {
            return this._RequiredValidator_9_4.context;
        }
        if (((token === import28.NG_VALIDATORS) && (9 === requestNodeIndex))) {
            return this._NG_VALIDATORS_9_5;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_9_6;
        }
        if (((token === import30.NgModel) && (9 === requestNodeIndex))) {
            return this._NgModel_9_7.context;
        }
        if (((token === import31.NgControl) && (9 === requestNodeIndex))) {
            return this._NgControl_9_8;
        }
        if (((token === import32.NgControlStatus) && (9 === requestNodeIndex))) {
            return this._NgControlStatus_9_9.context;
        }
        if (((token === import26.DefaultValueAccessor) && (12 === requestNodeIndex))) {
            return this._DefaultValueAccessor_12_3.context;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (12 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_12_4;
        }
        if (((token === import30.NgModel) && (12 === requestNodeIndex))) {
            return this._NgModel_12_5.context;
        }
        if (((token === import31.NgControl) && (12 === requestNodeIndex))) {
            return this._NgControl_12_6;
        }
        if (((token === import32.NgControlStatus) && (12 === requestNodeIndex))) {
            return this._NgControlStatus_12_7.context;
        }
        if (((token === import33.NgForm) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._NgForm_5_3.context;
        }
        if (((token === import34.ControlContainer) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._ControlContainer_5_4;
        }
        if (((token === import32.NgControlStatusGroup) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 20)))) {
            return this._NgControlStatusGroup_5_5.context;
        }
        if (((token === import24.TemplateRef) && (22 === requestNodeIndex))) {
            return this._TemplateRef_22_5;
        }
        if (((token === import35.NgFor) && (22 === requestNodeIndex))) {
            return this._NgFor_22_6.context;
        }
        return notFoundResult;
    };
    View_DirectQuestionComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatusGroup_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._DefaultValueAccessor_9_3.ngDoCheck(this, this._el_9, throwOnChange);
        var currVal_9_1_0 = '';
        this._RequiredValidator_9_4.check_required(currVal_9_1_0, throwOnChange, false);
        this._RequiredValidator_9_4.ngDoCheck(this, this._el_9, throwOnChange);
        var currVal_9_2_0 = 'titleName';
        this._NgModel_9_7.check_name(currVal_9_2_0, throwOnChange, false);
        var currVal_9_2_1 = this.context.title;
        this._NgModel_9_7.check_model(currVal_9_2_1, throwOnChange, false);
        this._NgModel_9_7.ngDoCheck(this, this._el_9, throwOnChange);
        this._NgControlStatus_9_9.ngDoCheck(this, this._el_9, throwOnChange);
        this._DefaultValueAccessor_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_12_1_0 = this.context.body;
        this._NgModel_12_5.check_model(currVal_12_1_0, throwOnChange, false);
        var currVal_12_1_1 = this._map_45(true);
        this._NgModel_12_5.check_options(currVal_12_1_1, throwOnChange, false);
        this._NgModel_12_5.ngDoCheck(this, this._el_12, throwOnChange);
        this._NgControlStatus_12_7.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_22_0_0 = this.context.questions;
        this._NgFor_22_6.check_ngForOf(currVal_22_0_0, throwOnChange, false);
        this._NgFor_22_6.ngDoCheck(this, this._anchor_22, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_22.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_5_5.checkHost(this, this, this._el_5, throwOnChange);
        this._RequiredValidator_9_4.checkHost(this, this, this._el_9, throwOnChange);
        this._NgControlStatus_9_9.checkHost(this, this, this._el_9, throwOnChange);
        this._NgControlStatus_12_7.checkHost(this, this, this._el_12, throwOnChange);
        var currVal_46 = !this._NgModel_9_7.context.valid;
        if (import3.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setElementProperty(this._el_14, 'disabled', currVal_46);
            this._expr_46 = currVal_46;
        }
    };
    View_DirectQuestionComponent0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this._vc_3.destroyNestedViews();
        this._vc_22.destroyNestedViews();
        this._NgModel_9_7.ngOnDestroy();
        this._NgModel_12_5.ngOnDestroy();
        this._NgForm_5_3.ngOnDestroy();
    };
    View_DirectQuestionComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 22)) {
            return new View_DirectQuestionComponent1(this.viewUtils, this, 22, this._anchor_22, this._vc_22);
        }
        return null;
    };
    View_DirectQuestionComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_5_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_DirectQuestionComponent0.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_9_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.title = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DirectQuestionComponent0.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_12_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.body = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_DirectQuestionComponent0.prototype.handleEvent_14 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.submitQuestion() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DirectQuestionComponent0;
}(import1.AppView));
export { View_DirectQuestionComponent0 };
var View_DirectQuestionComponent1 = (function (_super) {
    __extends(View_DirectQuestionComponent1, _super);
    function View_DirectQuestionComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_DirectQuestionComponent1, renderType_DirectQuestionComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_29 = import22.UNINITIALIZED;
        _this._expr_30 = import22.UNINITIALIZED;
        return _this;
    }
    View_DirectQuestionComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'tab question-list'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'h1', new import3.InlineArray2(2, 'class', 'question-title'), null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'article-details'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'user-info', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_8 = new import38.View_UserInfoComponent0(this.viewUtils, this, 8, this._el_8);
        this._ProfileService_8_3 = new import37.ProfileService(this.parentView.injectorGet(import11.Http, this.parentIndex));
        this._UserInfoComponent_8_4 = new import38.Wrapper_UserInfoComponent(this._ProfileService_8_3);
        this.compView_8.create(this._UserInfoComponent_8_4.context);
        this._text_9 = this.renderer.createText(this._el_6, '\n        ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_6, 'p', new import3.InlineArray2(2, 'class', 'answer-text'), null);
        this._text_11 = this.renderer.createText(this._el_6, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray2(2, 'class', 'answer-button'), null);
        this._text_16 = this.renderer.createText(this._el_15, 'Responder', null);
        this._text_17 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_18 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_19 = new import5.ViewContainer(19, 0, this, this._anchor_19);
        this._TemplateRef_19_5 = new import24.TemplateRef_(this, 19, this._anchor_19);
        this._NgFor_19_6 = new import21.Wrapper_NgFor(this._vc_19.vcRef, this._TemplateRef_19_5, this.parentView.injectorGet(import25.IterableDiffers, this.parentIndex), this.parentView.ref);
        this._text_20 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'style', 'margin-bottom:30px'), null);
        this._text_22 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_15, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_15));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._el_21,
            this._text_22
        ]), [disposable_0]);
        return null;
    };
    View_DirectQuestionComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.ProfileService) && (8 === requestNodeIndex))) {
            return this._ProfileService_8_3;
        }
        if (((token === import36.UserInfoComponent) && (8 === requestNodeIndex))) {
            return this._UserInfoComponent_8_4.context;
        }
        if (((token === import24.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import35.NgFor) && (19 === requestNodeIndex))) {
            return this._NgFor_19_6.context;
        }
        return notFoundResult;
    };
    View_DirectQuestionComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_8_0_0 = this.context.$implicit.userViewModel;
        this._UserInfoComponent_8_4.check_userObj(currVal_8_0_0, throwOnChange, false);
        var currVal_8_0_1 = ((this.context.$implicit == null) ? null : this.context.$implicit.createdOn);
        this._UserInfoComponent_8_4.check_viewDate(currVal_8_0_1, throwOnChange, false);
        var currVal_8_0_2 = ((this.context.$implicit == null) ? null : this.context.$implicit.isAnonymous);
        this._UserInfoComponent_8_4.check_isAnonymous(currVal_8_0_2, throwOnChange, false);
        this._UserInfoComponent_8_4.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_19_0_0 = this.context.$implicit.answers;
        this._NgFor_19_6.check_ngForOf(currVal_19_0_0, throwOnChange, false);
        this._NgFor_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        var currVal_29 = import3.inlineInterpolate(1, '\n        ', this.context.$implicit.title, '\n    ');
        if (import3.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setText(this._text_4, currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = this.context.$implicit.body;
        if (import3.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setElementProperty(this._el_10, 'innerHTML', this.viewUtils.sanitizer.sanitize(import39.SecurityContext.HTML, currVal_30));
            this._expr_30 = currVal_30;
        }
        this.compView_8.internalDetectChanges(throwOnChange);
    };
    View_DirectQuestionComponent1.prototype.destroyInternal = function () {
        this._vc_19.destroyNestedViews();
        this.compView_8.destroy();
    };
    View_DirectQuestionComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DirectQuestionComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 19)) {
            return new View_DirectQuestionComponent2(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        return null;
    };
    View_DirectQuestionComponent1.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.answerDialogBox(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_DirectQuestionComponent1;
}(import1.AppView));
var View_DirectQuestionComponent2 = (function (_super) {
    __extends(View_DirectQuestionComponent2, _super);
    function View_DirectQuestionComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_DirectQuestionComponent2, renderType_DirectQuestionComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_DirectQuestionComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import5.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import24.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import40.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5
        ]), null);
        return null;
    };
    View_DirectQuestionComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import41.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_DirectQuestionComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.$implicit;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_DirectQuestionComponent2.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_DirectQuestionComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_DirectQuestionComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_DirectQuestionComponent3(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_DirectQuestionComponent2;
}(import1.AppView));
var View_DirectQuestionComponent3 = (function (_super) {
    __extends(View_DirectQuestionComponent3, _super);
    function View_DirectQuestionComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_DirectQuestionComponent3, renderType_DirectQuestionComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_12 = import22.UNINITIALIZED;
        _this._expr_13 = import22.UNINITIALIZED;
        return _this;
    }
    View_DirectQuestionComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'article-details direct-naswer'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'user-info', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_4 = new import38.View_UserInfoComponent0(this.viewUtils, this, 4, this._el_4);
        this._ProfileService_4_3 = new import37.ProfileService(this.parentView.parentView.parentView.injectorGet(import11.Http, this.parentView.parentView.parentIndex));
        this._UserInfoComponent_4_4 = new import38.Wrapper_UserInfoComponent(this._ProfileService_4_3);
        this.compView_4.create(this._UserInfoComponent_4_4.context);
        this._text_5 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'p', new import3.InlineArray2(2, 'class', 'answer-text'), null);
        this._text_7 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_8 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8
        ]), null);
        return null;
    };
    View_DirectQuestionComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import37.ProfileService) && (4 === requestNodeIndex))) {
            return this._ProfileService_4_3;
        }
        if (((token === import36.UserInfoComponent) && (4 === requestNodeIndex))) {
            return this._UserInfoComponent_4_4.context;
        }
        return notFoundResult;
    };
    View_DirectQuestionComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.userViewModel);
        this._UserInfoComponent_4_4.check_userObj(currVal_4_0_0, throwOnChange, false);
        var currVal_4_0_1 = ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.createdOn);
        this._UserInfoComponent_4_4.check_viewDate(currVal_4_0_1, throwOnChange, false);
        this._UserInfoComponent_4_4.ngDoCheck(this, this._el_4, throwOnChange);
        var currVal_12 = import3.inlineInterpolate(1, '', ((this.parentView.context.$implicit == null) ? null : this.parentView.context.$implicit.id), '');
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = this.parentView.context.$implicit.text;
        if (import3.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementProperty(this._el_6, 'innerHTML', this.viewUtils.sanitizer.sanitize(import39.SecurityContext.HTML, currVal_13));
            this._expr_13 = currVal_13;
        }
        this.compView_4.internalDetectChanges(throwOnChange);
    };
    View_DirectQuestionComponent3.prototype.destroyInternal = function () {
        this.compView_4.destroy();
    };
    View_DirectQuestionComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_DirectQuestionComponent3;
}(import1.AppView));
