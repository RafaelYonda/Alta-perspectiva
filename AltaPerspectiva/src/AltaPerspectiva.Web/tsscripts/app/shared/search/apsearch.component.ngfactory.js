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
import * as import0 from './apsearch.component';
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
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
import * as import13 from '@angular/router/src/router';
import * as import14 from '../../services/communication.service';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '../../services/window-ref.service';
import * as import17 from './search.css.shim.ngstyle';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '@angular/core/src/linker/view_container';
import * as import20 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import21 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import22 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import23 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import24 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import25 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import26 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import27 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import28 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import29 from '@angular/core/src/linker/template_ref';
import * as import30 from '@angular/forms/src/directives/default_value_accessor';
import * as import31 from '@angular/forms/src/directives/validators';
import * as import32 from '@angular/forms/src/validators';
import * as import33 from '@angular/forms/src/directives/control_value_accessor';
import * as import34 from '@angular/forms/src/directives/ng_model';
import * as import35 from '@angular/forms/src/directives/ng_control';
import * as import36 from '@angular/forms/src/directives/ng_control_status';
import * as import37 from '@angular/common/src/directives/ng_if';
import * as import38 from '@angular/forms/src/directives/ng_form';
import * as import39 from '@angular/forms/src/directives/control_container';
import * as import40 from '@angular/common/src/directives/ng_class';
import * as import41 from './search-dropdown.component';
import * as import42 from './search-dropdown.component.ngfactory';
import * as import43 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import44 from '@angular/common/src/directives/ng_for';
var Wrapper_ApSearchComponent = (function () {
    function Wrapper_ApSearchComponent(p0, p1, p2, p3, p4, p5, p6) {
        this._changed = false;
        this.context = new import0.ApSearchComponent(p0, p1, p2, p3, p4, p5, p6);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_ApSearchComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ApSearchComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_ApSearchComponent.prototype.check_placeBottom = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.placeBottom = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ApSearchComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ApSearchComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ApSearchComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ApSearchComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.onQuestionSubmit.subscribe(_eventHandler.bind(view, 'onQuestionSubmit')));
        }
    };
    return Wrapper_ApSearchComponent;
}());
export { Wrapper_ApSearchComponent };
var renderType_ApSearchComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_ApSearchComponent_Host0 = (function (_super) {
    __extends(View_ApSearchComponent_Host0, _super);
    function View_ApSearchComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ApSearchComponent_Host0, renderType_ApSearchComponent_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ApSearchComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ap-search', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ApSearchComponent0(this.viewUtils, this, 0, this._el_0);
        this._CategoryService_0_3 = new import6.CategoryService(this.injectorGet(import11.Http, this.parentIndex));
        this._QuestionAnswerService_0_4 = new import7.QuestionAnswerService(this.injectorGet(import11.Http, this.parentIndex));
        this._ApSearchComponent_0_5 = new Wrapper_ApSearchComponent(this.injectorGet(import12.ComponentFactoryResolver, this.parentIndex), this.injectorGet(import13.Router, this.parentIndex), this._CategoryService_0_3, this._QuestionAnswerService_0_4, this.injectorGet(import14.CommunicationService, this.parentIndex), new import15.ElementRef(this._el_0), this.injectorGet(import16.WindowRefService, this.parentIndex));
        this.compView_0.create(this._ApSearchComponent_0_5.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._ApSearchComponent_0_5.context);
    };
    View_ApSearchComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.CategoryService) && (0 === requestNodeIndex))) {
            return this._CategoryService_0_3;
        }
        if (((token === import7.QuestionAnswerService) && (0 === requestNodeIndex))) {
            return this._QuestionAnswerService_0_4;
        }
        if (((token === import0.ApSearchComponent) && (0 === requestNodeIndex))) {
            return this._ApSearchComponent_0_5.context;
        }
        return notFoundResult;
    };
    View_ApSearchComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApSearchComponent_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ApSearchComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._ApSearchComponent_0_5.ngOnDestroy();
    };
    View_ApSearchComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ApSearchComponent_Host0;
}(import2.AppView));
export var ApSearchComponentNgFactory = new import10.ComponentFactory('ap-search', View_ApSearchComponent_Host0, import0.ApSearchComponent);
var styles_ApSearchComponent = [import17.styles];
var renderType_ApSearchComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_ApSearchComponent, {});
var View_ApSearchComponent0 = (function (_super) {
    __extends(View_ApSearchComponent0, _super);
    function View_ApSearchComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ApSearchComponent0, renderType_ApSearchComponent, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_52 = import1.UNINITIALIZED;
        _this._expr_53 = import1.UNINITIALIZED;
        _this._expr_54 = import1.UNINITIALIZED;
        _this._expr_55 = import1.UNINITIALIZED;
        return _this;
    }
    View_ApSearchComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_ApSearchDropDownComponent_0 = new import18.QueryList();
        this._viewQuery_logginAnchor_1 = new import18.QueryList();
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_0 = new import19.ViewContainer(0, null, this, this._el_0);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'search-xs', 'id', 'search-box'), null);
        this._NgClass_2_3 = new import20.Wrapper_NgClass(this.parentView.injectorGet(import27.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import28.KeyValueDiffers, this.parentIndex), new import15.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(this._el_2, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray4(4, 'class', 'center-width search-responsive', 'id', 'adv-search'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'form', new import3.InlineArray8(6, 'class', 'z-header', 'id', 'search-panel', 'role', 'form'), null);
        this._NgForm_6_3 = new import21.Wrapper_NgForm(null, null);
        this._ControlContainer_6_4 = this._NgForm_6_3.context;
        this._NgControlStatusGroup_6_5 = new import22.Wrapper_NgControlStatusGroup(this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'icon-container'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'input', new import3.InlineArray16(14, 'autocomplete', 'off', 'class', 'search-input fixed-height ', 'id', 'title', 'name', 'titleName', 'placeholder', 'Pregunta en Alta perspectiva', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_10_3 = new import23.Wrapper_DefaultValueAccessor(this.renderer, new import15.ElementRef(this._el_10));
        this._RequiredValidator_10_4 = new import24.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_10_5 = [this._RequiredValidator_10_4.context];
        this._NG_VALUE_ACCESSOR_10_6 = [this._DefaultValueAccessor_10_3.context];
        this._NgModel_10_7 = new import25.Wrapper_NgModel(this._ControlContainer_6_4, this._NG_VALIDATORS_10_5, null, this._NG_VALUE_ACCESSOR_10_6);
        this._NgControl_10_8 = this._NgModel_10_7.context;
        this._NgControlStatus_10_9 = new import22.Wrapper_NgControlStatus(this._NgControl_10_8);
        this._text_11 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'question-begin'), null);
        this._text_13 = this.renderer.createText(this._el_12, '¿', null);
        this._text_14 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray4(4, 'class', 'question-end', 'id', 'question-end'), null);
        this._text_16 = this.renderer.createText(this._el_15, '?', null);
        this._text_17 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray4(4, 'id', 'temp-text', 'style', 'position:absolute;top:-100px; font-family:myriadpro-regular;font-size:15px;'), null);
        this._text_19 = this.renderer.createText(this._el_18, '', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n            ', null);
        this._text_21 = this.renderer.createText(this._el_6, '\n            ', null);
        this._anchor_22 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._vc_22 = new import19.ViewContainer(22, 6, this, this._anchor_22);
        this._TemplateRef_22_5 = new import29.TemplateRef_(this, 22, this._anchor_22);
        this._NgIf_22_6 = new import26.Wrapper_NgIf(this._vc_22.vcRef, this._TemplateRef_22_5);
        this._text_23 = this.renderer.createText(this._el_6, '\n\n            ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_6, 'button', new import3.InlineArray4(4, 'class', 'ask-button fixed-height', 'type', 'submit'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n                ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-question-sign  visible-tab'), null);
        this._text_27 = this.renderer.createText(this._el_24, '\n                ', null);
        this._text_28 = this.renderer.createText(this._el_24, '\n                ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_24, 'span', new import3.InlineArray2(2, 'class', 'ask-text hidden-xs hidden-tab'), null);
        this._text_30 = this.renderer.createText(this._el_29, 'Preguntar', null);
        this._text_31 = this.renderer.createText(this._el_24, '\n            ', null);
        this._text_32 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_33 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_34 = this.renderer.createText(this._el_2, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_6));
        this._NgForm_6_3.subscribe(this, this.eventHandler(this.handleEvent_6), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray16(12, 'click', null, 'ngModelChange', null, 'keypress', null, 'keydown', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_10));
        this._NgModel_10_7.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        this._viewQuery_logginAnchor_1.reset([this._vc_0.vcRef]);
        this.context.logginAnchor = this._viewQuery_logginAnchor_1.first;
        this.init(null, (this.renderer.directRenderer ? null : [
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
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._anchor_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_ApSearchComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_3.context;
        }
        if (((token === import31.RequiredValidator) && (10 === requestNodeIndex))) {
            return this._RequiredValidator_10_4.context;
        }
        if (((token === import32.NG_VALIDATORS) && (10 === requestNodeIndex))) {
            return this._NG_VALIDATORS_10_5;
        }
        if (((token === import33.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_6;
        }
        if (((token === import34.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_7.context;
        }
        if (((token === import35.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_8;
        }
        if (((token === import36.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_9.context;
        }
        if (((token === import29.TemplateRef) && (22 === requestNodeIndex))) {
            return this._TemplateRef_22_5;
        }
        if (((token === import37.NgIf) && (22 === requestNodeIndex))) {
            return this._NgIf_22_6.context;
        }
        if (((token === import38.NgForm) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._NgForm_6_3.context;
        }
        if (((token === import39.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === import36.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._NgControlStatusGroup_6_5.context;
        }
        if (((token === import40.NgClass) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._NgClass_2_3.context;
        }
        return notFoundResult;
    };
    View_ApSearchComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = 'search-xs';
        this._NgClass_2_3.check_klass(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = this.context.placeBottom;
        this._NgClass_2_3.check_ngClass(currVal_2_0_1, throwOnChange, false);
        this._NgClass_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgForm_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._DefaultValueAccessor_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_1_0 = '';
        this._RequiredValidator_10_4.check_required(currVal_10_1_0, throwOnChange, false);
        this._RequiredValidator_10_4.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_2_0 = 'titleName';
        this._NgModel_10_7.check_name(currVal_10_2_0, throwOnChange, false);
        var currVal_10_2_1 = this.context.title;
        this._NgModel_10_7.check_model(currVal_10_2_1, throwOnChange, false);
        this._NgModel_10_7.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_9.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_22_0_0 = this.context.isOnModal;
        this._NgIf_22_6.check_ngIf(currVal_22_0_0, throwOnChange, false);
        this._NgIf_22_6.ngDoCheck(this, this._anchor_22, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this._vc_22.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_6_5.checkHost(this, this, this._el_6, throwOnChange);
        this._RequiredValidator_10_4.checkHost(this, this, this._el_10, throwOnChange);
        this._NgControlStatus_10_9.checkHost(this, this, this._el_10, throwOnChange);
        var currVal_52 = !this.context.showQuestion;
        if (import3.checkBinding(throwOnChange, this._expr_52, currVal_52)) {
            this.renderer.setElementProperty(this._el_12, 'hidden', currVal_52);
            this._expr_52 = currVal_52;
        }
        var currVal_53 = !this.context.showQuestion;
        if (import3.checkBinding(throwOnChange, this._expr_53, currVal_53)) {
            this.renderer.setElementProperty(this._el_15, 'hidden', currVal_53);
            this._expr_53 = currVal_53;
        }
        var currVal_54 = import3.inlineInterpolate(1, '', this.context.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_54, currVal_54)) {
            this.renderer.setText(this._text_19, currVal_54);
            this._expr_54 = currVal_54;
        }
        var currVal_55 = !this._NgModel_10_7.context.valid;
        if (import3.checkBinding(throwOnChange, this._expr_55, currVal_55)) {
            this.renderer.setElementProperty(this._el_24, 'disabled', currVal_55);
            this._expr_55 = currVal_55;
        }
        if (!throwOnChange) {
            if (this._viewQuery_ApSearchDropDownComponent_0.dirty) {
                this._viewQuery_ApSearchDropDownComponent_0.reset([this._vc_22.mapNestedViews(View_ApSearchComponent1, function (nestedView) {
                        return [nestedView._ApSearchDropDownComponent_3_5.context];
                    })]);
                this.context.searchDropDown = this._viewQuery_ApSearchDropDownComponent_0.first;
            }
        }
    };
    View_ApSearchComponent0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this._vc_22.destroyNestedViews();
        this._NgModel_10_7.ngOnDestroy();
        this._NgForm_6_3.ngOnDestroy();
    };
    View_ApSearchComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 22)) {
            return new View_ApSearchComponent1(this.viewUtils, this, 22, this._anchor_22, this._vc_22);
        }
        return null;
    };
    View_ApSearchComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ApSearchComponent0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_6_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.submitQuestion() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ApSearchComponent0.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_10_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.showModal() !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'ngModelChange')) {
            var pd_sub_1 = (this.context.movequestionMark($event) !== false);
            result = (pd_sub_1 && result);
        }
        if ((eventName == 'ngModelChange')) {
            var pd_sub_2 = ((this.context.title = $event) !== false);
            result = (pd_sub_2 && result);
        }
        if ((eventName == 'keypress')) {
            var pd_sub_3 = (this.context.trimSpace($event) !== false);
            result = (pd_sub_3 && result);
        }
        if ((eventName == 'keydown')) {
            var pd_sub_4 = (this.context.filterQuestions($event) !== false);
            result = (pd_sub_4 && result);
        }
        return result;
    };
    return View_ApSearchComponent0;
}(import2.AppView));
export { View_ApSearchComponent0 };
var View_ApSearchComponent1 = (function (_super) {
    __extends(View_ApSearchComponent1, _super);
    function View_ApSearchComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ApSearchComponent1, renderType_ApSearchComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ApSearchComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray4(4, 'class', 'suggestions', 'id', 'suggestion'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'search-dropdown', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_3 = new import42.View_ApSearchDropDownComponent0(this.viewUtils, this, 3, this._el_3);
        this._CategoryService_3_3 = new import6.CategoryService(this.parentView.parentView.injectorGet(import11.Http, this.parentView.parentIndex));
        this._QuestionAnswerService_3_4 = new import7.QuestionAnswerService(this.parentView.parentView.injectorGet(import11.Http, this.parentView.parentIndex));
        this._ApSearchDropDownComponent_3_5 = new import42.Wrapper_ApSearchDropDownComponent(this.parentView.parentView.injectorGet(import13.Router, this.parentView.parentIndex), this._CategoryService_3_3, this._QuestionAnswerService_3_4);
        this.compView_3.create(this._ApSearchDropDownComponent_3_5.context);
        this._text_4 = this.renderer.createText(this._el_0, '\n                ', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n                ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_6 = new import19.ViewContainer(6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new import29.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import26.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ]), null);
        return null;
    };
    View_ApSearchComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.CategoryService) && (3 === requestNodeIndex))) {
            return this._CategoryService_3_3;
        }
        if (((token === import7.QuestionAnswerService) && (3 === requestNodeIndex))) {
            return this._QuestionAnswerService_3_4;
        }
        if (((token === import41.ApSearchDropDownComponent) && (3 === requestNodeIndex))) {
            return this._ApSearchDropDownComponent_3_5.context;
        }
        if (((token === import29.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import37.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_ApSearchComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.parentView.context.title;
        this._ApSearchDropDownComponent_3_5.check_title(currVal_3_0_0, throwOnChange, false);
        var currVal_3_0_1 = this.parentView.context.categories;
        this._ApSearchDropDownComponent_3_5.check_categories(currVal_3_0_1, throwOnChange, false);
        this._ApSearchDropDownComponent_3_5.ngDoCheck(this, this._el_3, throwOnChange);
        var currVal_6_0_0 = ((((this.parentView.context.filteredQuestionList == null) ? null : this.parentView.context.filteredQuestionList.length) > 0) || (((this.parentView.context.categoryMatched == null) ? null : this.parentView.context.categoryMatched.length) > 0));
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this.compView_3.internalDetectChanges(throwOnChange);
    };
    View_ApSearchComponent1.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_ApSearchDropDownComponent_0.setDirty();
    };
    View_ApSearchComponent1.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
        this.compView_3.destroy();
    };
    View_ApSearchComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ApSearchComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_ApSearchComponent2(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    return View_ApSearchComponent1;
}(import2.AppView));
var View_ApSearchComponent2 = (function (_super) {
    __extends(View_ApSearchComponent2, _super);
    function View_ApSearchComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ApSearchComponent2, renderType_ApSearchComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_32 = import1.UNINITIALIZED;
        _this._expr_33 = import1.UNINITIALIZED;
        return _this;
    }
    View_ApSearchComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'suggestion-container'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'arrow-container'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'ul', new import3.InlineArray2(2, 'class', 'question-List'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                        ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new import19.ViewContainer(6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new import29.TemplateRef_(this, 6, this._anchor_6);
        this._NgFor_6_6 = new import43.Wrapper_NgFor(this._vc_6.vcRef, this._TemplateRef_6_5, this.parentView.parentView.parentView.injectorGet(import27.IterableDiffers, this.parentView.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_7 = this.renderer.createText(this._el_4, '\n                        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_4, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_10, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-search topic-icon'), null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'span', new import3.InlineArray2(2, 'class', 'search-footer'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Etapa de tu negocio:', null);
        this._text_14 = this.renderer.createText(this._el_10, '', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n                            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_8, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._text_18 = this.renderer.createText(this._el_4, '\n                        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_4, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, '\n                            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-search topic-icon'), null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'span', new import3.InlineArray2(2, 'class', 'search-footer'), null);
        this._text_24 = this.renderer.createText(this._el_23, 'Buscar:', null);
        this._text_25 = this.renderer.createText(this._el_21, '', null);
        this._text_26 = this.renderer.createText(this._el_19, '\n                        ', null);
        this._text_27 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28
        ]), null);
        return null;
    };
    View_ApSearchComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import29.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import44.NgFor) && (6 === requestNodeIndex))) {
            return this._NgFor_6_6.context;
        }
        return notFoundResult;
    };
    View_ApSearchComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.parentView.parentView.context.filteredQuestionList;
        this._NgFor_6_6.check_ngForOf(currVal_6_0_0, throwOnChange, false);
        this._NgFor_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        var currVal_32 = import3.inlineInterpolate(1, '  ', this.parentView.parentView.context.categoryMatched, '');
        if (import3.checkBinding(throwOnChange, this._expr_32, currVal_32)) {
            this.renderer.setText(this._text_14, currVal_32);
            this._expr_32 = currVal_32;
        }
        var currVal_33 = import3.inlineInterpolate(1, '  ', (this.parentView.parentView.context.title ? (this.parentView.parentView.context.title + '?') : ''), '');
        if (import3.checkBinding(throwOnChange, this._expr_33, currVal_33)) {
            this.renderer.setText(this._text_25, currVal_33);
            this._expr_33 = currVal_33;
        }
    };
    View_ApSearchComponent2.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
    };
    View_ApSearchComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ApSearchComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_ApSearchComponent3(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    return View_ApSearchComponent2;
}(import2.AppView));
var View_ApSearchComponent3 = (function (_super) {
    __extends(View_ApSearchComponent3, _super);
    function View_ApSearchComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ApSearchComponent3, renderType_ApSearchComponent, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_7 = import1.UNINITIALIZED;
        return _this;
    }
    View_ApSearchComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'hr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6
        ]), [disposable_0]);
        return null;
    };
    View_ApSearchComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_ApSearchComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ApSearchComponent3.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.parentView.context.selectQuestionDetails(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ApSearchComponent3;
}(import2.AppView));
