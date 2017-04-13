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
import * as import0 from './search-dropdown.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/category.service';
import * as import7 from '../../services/question-answer.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/router/src/router';
import * as import13 from './search.css.shim.ngstyle';
import * as import14 from '../../../../node_modules/@angular/forms/src/directives/select_control_value_accessor.ngfactory';
import * as import15 from '../../../../node_modules/@angular/forms/src/directives/select_multiple_control_value_accessor.ngfactory';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import19 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import20 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import24 from '@angular/forms/src/directives/select_control_value_accessor';
import * as import25 from '@angular/forms/src/directives/select_multiple_control_value_accessor';
import * as import26 from '@angular/common/src/directives/ng_for';
import * as import27 from '@angular/forms/src/directives/default_value_accessor';
import * as import28 from '@angular/forms/src/directives/control_value_accessor';
import * as import29 from '@angular/forms/src/directives/ng_model';
import * as import30 from '@angular/forms/src/directives/ng_control';
import * as import31 from '@angular/forms/src/directives/ng_control_status';
var Wrapper_ApSearchDropDownComponent = (function () {
    function Wrapper_ApSearchDropDownComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.ApSearchDropDownComponent(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
    }
    Wrapper_ApSearchDropDownComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ApSearchDropDownComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ApSearchDropDownComponent.prototype.check_title = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.title = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ApSearchDropDownComponent.prototype.check_categories = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.categories = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_ApSearchDropDownComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ApSearchDropDownComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ApSearchDropDownComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ApSearchDropDownComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ApSearchDropDownComponent;
}());
export { Wrapper_ApSearchDropDownComponent };
var renderType_ApSearchDropDownComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_ApSearchDropDownComponent_Host0 = (function (_super) {
    __extends(View_ApSearchDropDownComponent_Host0, _super);
    function View_ApSearchDropDownComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ApSearchDropDownComponent_Host0, renderType_ApSearchDropDownComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ApSearchDropDownComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'search-dropdown', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ApSearchDropDownComponent0(this.viewUtils, this, 0, this._el_0);
        this._CategoryService_0_3 = new import6.CategoryService(this.injectorGet(import11.Http, this.parentIndex));
        this._QuestionAnswerService_0_4 = new import7.QuestionAnswerService(this.injectorGet(import11.Http, this.parentIndex));
        this._ApSearchDropDownComponent_0_5 = new Wrapper_ApSearchDropDownComponent(this.injectorGet(import12.Router, this.parentIndex), this._CategoryService_0_3, this._QuestionAnswerService_0_4);
        this.compView_0.create(this._ApSearchDropDownComponent_0_5.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._ApSearchDropDownComponent_0_5.context);
    };
    View_ApSearchDropDownComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.CategoryService) && (0 === requestNodeIndex))) {
            return this._CategoryService_0_3;
        }
        if (((token === import7.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_4;
        }
        if (((token === import0.ApSearchDropDownComponent) && (0 === requestNodeIndex))) {
            return this._ApSearchDropDownComponent_0_5.context;
        }
        return notFoundResult;
    };
    View_ApSearchDropDownComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApSearchDropDownComponent_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ApSearchDropDownComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ApSearchDropDownComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ApSearchDropDownComponent_Host0;
}(import2.AppView));
export var ApSearchDropDownComponentNgFactory = new import10.ComponentFactory('search-dropdown', View_ApSearchDropDownComponent_Host0, import0.ApSearchDropDownComponent);
var styles_ApSearchDropDownComponent = [import13.styles];
var renderType_ApSearchDropDownComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_ApSearchDropDownComponent, {});
var View_ApSearchDropDownComponent0 = (function (_super) {
    __extends(View_ApSearchDropDownComponent0, _super);
    function View_ApSearchDropDownComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ApSearchDropDownComponent0, renderType_ApSearchDropDownComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
        _this._map_55 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_56 = import1.UNINITIALIZED;
        return _this;
    }
    View_ApSearchDropDownComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'dropdown-block'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'select', new import3.InlineArray8(6, 'class', 'question-control', 'id', 'Category', 'name', 'category'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'option', new import3.InlineArray2(2, 'selected', ''), null);
        this._NgSelectOption_5_3 = new import14.Wrapper_NgSelectOption(new import21.ElementRef(this._el_5), this.renderer, null);
        this._NgSelectMultipleOption_5_4 = new import15.Wrapper_NgSelectMultipleOption(new import21.ElementRef(this._el_5), this.renderer, null);
        this._text_6 = this.renderer.createText(this._el_5, 'Selecciona la etapa de tu negocio ', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n        ', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_8 = new import16.ViewContainer(8, 3, this, this._anchor_8);
        this._TemplateRef_8_5 = new import22.TemplateRef_(this, 8, this._anchor_8);
        this._NgFor_8_6 = new import17.Wrapper_NgFor(this._vc_8.vcRef, this._TemplateRef_8_5, this.parentView.injectorGet(import23.IterableDiffers, this.parentIndex), this.ref);
        this._text_9 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_1, 'select', new import3.InlineArray8(6, 'class', 'question-control', 'id', 'topics', 'name', 'topics'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'option', new import3.InlineArray2(2, 'selected', ''), null);
        this._NgSelectOption_13_3 = new import14.Wrapper_NgSelectOption(new import21.ElementRef(this._el_13), this.renderer, null);
        this._NgSelectMultipleOption_13_4 = new import15.Wrapper_NgSelectMultipleOption(new import21.ElementRef(this._el_13), this.renderer, null);
        this._text_14 = this.renderer.createText(this._el_13, 'Selecciona la tematica', null);
        this._text_15 = this.renderer.createText(this._el_11, '\n        ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_16 = new import16.ViewContainer(16, 11, this, this._anchor_16);
        this._TemplateRef_16_5 = new import22.TemplateRef_(this, 16, this._anchor_16);
        this._NgFor_16_6 = new import17.Wrapper_NgFor(this._vc_16.vcRef, this._TemplateRef_16_5, this.parentView.injectorGet(import23.IterableDiffers, this.parentIndex), this.ref);
        this._text_17 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_18 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_1, 'select', new import3.InlineArray8(6, 'class', 'question-control', 'id', 'levels', 'name', 'levels'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'option', new import3.InlineArray2(2, 'selected', ''), null);
        this._NgSelectOption_21_3 = new import14.Wrapper_NgSelectOption(new import21.ElementRef(this._el_21), this.renderer, null);
        this._NgSelectMultipleOption_21_4 = new import15.Wrapper_NgSelectMultipleOption(new import21.ElementRef(this._el_21), this.renderer, null);
        this._text_22 = this.renderer.createText(this._el_21, 'Selecciona tu solicitud', null);
        this._text_23 = this.renderer.createText(this._el_19, '\n        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_19, null);
        this._vc_24 = new import16.ViewContainer(24, 19, this, this._anchor_24);
        this._TemplateRef_24_5 = new import22.TemplateRef_(this, 24, this._anchor_24);
        this._NgFor_24_6 = new import17.Wrapper_NgFor(this._vc_24.vcRef, this._TemplateRef_24_5, this.parentView.injectorGet(import23.IterableDiffers, this.parentIndex), this.ref);
        this._text_25 = this.renderer.createText(this._el_19, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_1, 'textarea', new import3.InlineArray16(10, 'class', 'question-control', 'cols', '86', 'name', 'body', 'placeholder', 'Agrega detalle de tu pregunta - Opcional', 'rows', '6'), null);
        this._DefaultValueAccessor_27_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import21.ElementRef(this._el_27));
        this._NG_VALUE_ACCESSOR_27_4 = [this._DefaultValueAccessor_27_3.context];
        this._NgModel_27_5 = new import19.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_27_4);
        this._NgControl_27_6 = this._NgModel_27_5.context;
        this._NgControlStatus_27_7 = new import20.Wrapper_NgControlStatus(this._NgControl_27_6);
        this._text_28 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_1, 'input', new import3.InlineArray2(2, 'type', 'checkbox'), null);
        this._text_30 = this.renderer.createText(this._el_1, ' ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_1, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(this._el_31, 'Preguntar anónimo', null);
        this._text_33 = this.renderer.createText(this._el_1, '\n', null);
        this._text_34 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_3, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_3));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_11));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_19, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_19));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_27));
        this._NgModel_27_5.subscribe(this, this.eventHandler(this.handleEvent_27), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_29, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_29));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._anchor_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._text_34
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_ApSearchDropDownComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.NgSelectOption) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._NgSelectOption_5_3.context;
        }
        if (((token === import25.NgSelectMultipleOption) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._NgSelectMultipleOption_5_4.context;
        }
        if (((token === import22.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import26.NgFor) && (8 === requestNodeIndex))) {
            return this._NgFor_8_6.context;
        }
        if (((token === import24.NgSelectOption) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._NgSelectOption_13_3.context;
        }
        if (((token === import25.NgSelectMultipleOption) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._NgSelectMultipleOption_13_4.context;
        }
        if (((token === import22.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import26.NgFor) && (16 === requestNodeIndex))) {
            return this._NgFor_16_6.context;
        }
        if (((token === import24.NgSelectOption) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._NgSelectOption_21_3.context;
        }
        if (((token === import25.NgSelectMultipleOption) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._NgSelectMultipleOption_21_4.context;
        }
        if (((token === import22.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import26.NgFor) && (24 === requestNodeIndex))) {
            return this._NgFor_24_6.context;
        }
        if (((token === import27.DefaultValueAccessor) && (27 === requestNodeIndex))) {
            return this._DefaultValueAccessor_27_3.context;
        }
        if (((token === import28.NG_VALUE_ACCESSOR) && (27 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_27_4;
        }
        if (((token === import29.NgModel) && (27 === requestNodeIndex))) {
            return this._NgModel_27_5.context;
        }
        if (((token === import30.NgControl) && (27 === requestNodeIndex))) {
            return this._NgControl_27_6;
        }
        if (((token === import31.NgControlStatus) && (27 === requestNodeIndex))) {
            return this._NgControlStatus_27_7.context;
        }
        return notFoundResult;
    };
    View_ApSearchDropDownComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = (0 - 1);
        this._NgSelectOption_5_3.check_value(currVal_5_0_0, throwOnChange, false);
        this._NgSelectOption_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = (0 - 1);
        this._NgSelectMultipleOption_5_4.check_value(currVal_5_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_5_4.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_8_0_0 = this.context.categories;
        this._NgFor_8_6.check_ngForOf(currVal_8_0_0, throwOnChange, false);
        this._NgFor_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        var currVal_13_0_0 = (0 - 1);
        this._NgSelectOption_13_3.check_value(currVal_13_0_0, throwOnChange, false);
        this._NgSelectOption_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_13_1_0 = (0 - 1);
        this._NgSelectMultipleOption_13_4.check_value(currVal_13_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_13_4.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_16_0_0 = this.context.topics;
        this._NgFor_16_6.check_ngForOf(currVal_16_0_0, throwOnChange, false);
        this._NgFor_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        var currVal_21_0_0 = (0 - 1);
        this._NgSelectOption_21_3.check_value(currVal_21_0_0, throwOnChange, false);
        this._NgSelectOption_21_3.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_21_1_0 = (0 - 1);
        this._NgSelectMultipleOption_21_4.check_value(currVal_21_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_21_4.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_24_0_0 = this.context.levels;
        this._NgFor_24_6.check_ngForOf(currVal_24_0_0, throwOnChange, false);
        this._NgFor_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        this._DefaultValueAccessor_27_3.ngDoCheck(this, this._el_27, throwOnChange);
        var currVal_27_1_0 = 'body';
        this._NgModel_27_5.check_name(currVal_27_1_0, throwOnChange, false);
        var currVal_27_1_1 = this.context.body;
        this._NgModel_27_5.check_model(currVal_27_1_1, throwOnChange, false);
        var currVal_27_1_2 = this._map_55(true);
        this._NgModel_27_5.check_options(currVal_27_1_2, throwOnChange, false);
        this._NgModel_27_5.ngDoCheck(this, this._el_27, throwOnChange);
        this._NgControlStatus_27_7.ngDoCheck(this, this._el_27, throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatus_27_7.checkHost(this, this, this._el_27, throwOnChange);
        var currVal_56 = false;
        if (import3.checkBinding(throwOnChange, this._expr_56, currVal_56)) {
            this.renderer.setElementProperty(this._el_29, 'checked', currVal_56);
            this._expr_56 = currVal_56;
        }
    };
    View_ApSearchDropDownComponent0.prototype.destroyInternal = function () {
        this._vc_8.destroyNestedViews();
        this._vc_16.destroyNestedViews();
        this._vc_24.destroyNestedViews();
        this._NgSelectOption_5_3.ngOnDestroy();
        this._NgSelectMultipleOption_5_4.ngOnDestroy();
        this._NgSelectOption_13_3.ngOnDestroy();
        this._NgSelectMultipleOption_13_4.ngOnDestroy();
        this._NgSelectOption_21_3.ngOnDestroy();
        this._NgSelectMultipleOption_21_4.ngOnDestroy();
        this._NgModel_27_5.ngOnDestroy();
    };
    View_ApSearchDropDownComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 8)) {
            return new View_ApSearchDropDownComponent1(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        if ((nodeIndex == 16)) {
            return new View_ApSearchDropDownComponent2(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        if ((nodeIndex == 24)) {
            return new View_ApSearchDropDownComponent3(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        return null;
    };
    View_ApSearchDropDownComponent0.prototype.handleEvent_3 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onCategoryChange(this._el_3.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ApSearchDropDownComponent0.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onTopicChange(this._el_11.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ApSearchDropDownComponent0.prototype.handleEvent_19 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onLevelChange(this._el_19.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ApSearchDropDownComponent0.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_27_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.body = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ApSearchDropDownComponent0.prototype.handleEvent_29 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onChange(this._el_29.checked) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ApSearchDropDownComponent0;
}(import2.AppView));
export { View_ApSearchDropDownComponent0 };
var View_ApSearchDropDownComponent1 = (function (_super) {
    __extends(View_ApSearchDropDownComponent1, _super);
    function View_ApSearchDropDownComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ApSearchDropDownComponent1, renderType_ApSearchDropDownComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_ApSearchDropDownComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import14.Wrapper_NgSelectOption(new import21.ElementRef(this._el_0), this.renderer, null);
        this._NgSelectMultipleOption_0_4 = new import15.Wrapper_NgSelectMultipleOption(new import21.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ApSearchDropDownComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import25.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_ApSearchDropDownComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.id;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit.id;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = import3.inlineInterpolate(1, '\n            ', this.context.$implicit.name, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_ApSearchDropDownComponent1.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_ApSearchDropDownComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ApSearchDropDownComponent1;
}(import2.AppView));
var View_ApSearchDropDownComponent2 = (function (_super) {
    __extends(View_ApSearchDropDownComponent2, _super);
    function View_ApSearchDropDownComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ApSearchDropDownComponent2, renderType_ApSearchDropDownComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_ApSearchDropDownComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import14.Wrapper_NgSelectOption(new import21.ElementRef(this._el_0), this.renderer, null);
        this._NgSelectMultipleOption_0_4 = new import15.Wrapper_NgSelectMultipleOption(new import21.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ApSearchDropDownComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import25.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_ApSearchDropDownComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = ((this.context.$implicit == null) ? null : this.context.$implicit.id);
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = ((this.context.$implicit == null) ? null : this.context.$implicit.id);
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = import3.inlineInterpolate(1, '\n            ', ((this.context.$implicit == null) ? null : this.context.$implicit.topicName), '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_ApSearchDropDownComponent2.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_ApSearchDropDownComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ApSearchDropDownComponent2;
}(import2.AppView));
var View_ApSearchDropDownComponent3 = (function (_super) {
    __extends(View_ApSearchDropDownComponent3, _super);
    function View_ApSearchDropDownComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ApSearchDropDownComponent3, renderType_ApSearchDropDownComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import1.UNINITIALIZED;
        return _this;
    }
    View_ApSearchDropDownComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import14.Wrapper_NgSelectOption(new import21.ElementRef(this._el_0), this.renderer, null);
        this._NgSelectMultipleOption_0_4 = new import15.Wrapper_NgSelectMultipleOption(new import21.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ApSearchDropDownComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import24.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import25.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_ApSearchDropDownComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.id;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit.id;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = import3.inlineInterpolate(1, '\n            ', this.context.$implicit.levelName, '\n        ');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_ApSearchDropDownComponent3.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_ApSearchDropDownComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ApSearchDropDownComponent3;
}(import2.AppView));
