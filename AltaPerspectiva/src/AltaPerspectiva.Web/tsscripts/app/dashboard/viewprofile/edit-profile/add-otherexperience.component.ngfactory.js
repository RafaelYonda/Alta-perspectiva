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
import * as import0 from './add-otherexperience.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/profile.service';
import * as import6 from '../../../services/category.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import12 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import13 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import14 from '../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import15 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import16 from '@angular/core/src/change_detection/change_detection_util';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/forms/src/directives/default_value_accessor';
import * as import19 from '@angular/forms/src/directives/validators';
import * as import20 from '@angular/forms/src/validators';
import * as import21 from '@angular/forms/src/directives/control_value_accessor';
import * as import22 from '@angular/forms/src/directives/ng_model';
import * as import23 from '@angular/forms/src/directives/ng_control';
import * as import24 from '@angular/forms/src/directives/ng_control_status';
import * as import25 from '@angular/forms/src/directives/ng_form';
import * as import26 from '@angular/forms/src/directives/control_container';
var Wrapper_AddOtherExperienceComponent = (function () {
    function Wrapper_AddOtherExperienceComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.AddOtherExperienceComponent(p0, p1);
    }
    Wrapper_AddOtherExperienceComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AddOtherExperienceComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AddOtherExperienceComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AddOtherExperienceComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AddOtherExperienceComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AddOtherExperienceComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AddOtherExperienceComponent;
}());
export { Wrapper_AddOtherExperienceComponent };
var renderType_AddOtherExperienceComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AddOtherExperienceComponent_Host0 = (function (_super) {
    __extends(View_AddOtherExperienceComponent_Host0, _super);
    function View_AddOtherExperienceComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AddOtherExperienceComponent_Host0, renderType_AddOtherExperienceComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AddOtherExperienceComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'add-otherexperience', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AddOtherExperienceComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import10.Http, this.parentIndex));
        this._CategoryService_0_4 = new import6.CategoryService(this.injectorGet(import10.Http, this.parentIndex));
        this._AddOtherExperienceComponent_0_5 = new Wrapper_AddOtherExperienceComponent(this._ProfileService_0_3, this._CategoryService_0_4);
        this.compView_0.create(this._AddOtherExperienceComponent_0_5.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._AddOtherExperienceComponent_0_5.context);
    };
    View_AddOtherExperienceComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import6.CategoryService) && (0 === requestNodeIndex))) {
            return this._CategoryService_0_4;
        }
        if (((token === import0.AddOtherExperienceComponent) && (0 === requestNodeIndex))) {
            return this._AddOtherExperienceComponent_0_5.context;
        }
        return notFoundResult;
    };
    View_AddOtherExperienceComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AddOtherExperienceComponent_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AddOtherExperienceComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AddOtherExperienceComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AddOtherExperienceComponent_Host0;
}(import1.AppView));
export var AddOtherExperienceComponentNgFactory = new import9.ComponentFactory('add-otherexperience', View_AddOtherExperienceComponent_Host0, import0.AddOtherExperienceComponent);
var styles_AddOtherExperienceComponent = ['.credential-dialog[_ngcontent-%COMP%] {\n        margin: 10% auto;\n        max-width: 45%;\n    }\n\n    .profile-modal-body[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 15px;\n        background-color: #f6f6f6;\n        margin: 0px;\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n\n        .profile-modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            width: 100%;\n            border: 1px solid #bdbdbd;\n            border-radius: 3px;\n            padding: 2px 5px;\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n\n        .profile-modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            text-decoration: underline;\n        }\n\n    .profile-modal-button-container[_ngcontent-%COMP%] {\n        text-align: right;\n    }\n\n        .profile-modal-button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            margin-right: 10px;\n        }\n\n    .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n     .col-sm-8[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }'];
var renderType_AddOtherExperienceComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_AddOtherExperienceComponent, {});
var View_AddOtherExperienceComponent0 = (function (_super) {
    __extends(View_AddOtherExperienceComponent0, _super);
    function View_AddOtherExperienceComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_AddOtherExperienceComponent0, renderType_AddOtherExperienceComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_63 = import16.UNINITIALIZED;
        _this._expr_64 = import16.UNINITIALIZED;
        return _this;
    }
    View_AddOtherExperienceComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'modal-overlay z-modal', 'id', 'dialogModal'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'modal-content credential-dialog'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'exit-button'), null);
        this._text_6 = this.renderer.createText(this._el_5, 'x', null);
        this._text_7 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray4(4, 'class', 'modal-container', 'style', 'border:1px solid;'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'modal-header'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Otra información', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-body'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'form', new import3.InlineArray2(2, 'class', 'form-horizontal'), null);
        this._NgForm_18_3 = new import11.Wrapper_NgForm(null, null);
        this._ControlContainer_18_4 = this._NgForm_18_3.context;
        this._NgControlStatusGroup_18_5 = new import12.Wrapper_NgControlStatusGroup(this._ControlContainer_18_4);
        this._text_19 = this.renderer.createText(this._el_18, '\n                    ', null);
        this._text_20 = this.renderer.createText(this._el_18, '\n                    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_18, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                        ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'label', new import3.InlineArray4(4, 'class', 'control-label col-sm-4', 'for', 'email'), null);
        this._text_24 = this.renderer.createText(this._el_23, 'Description*:', null);
        this._text_25 = this.renderer.createText(this._el_21, '\n                        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_21, 'div', new import3.InlineArray2(2, 'class', 'col-sm-8'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                            ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'input', new import3.InlineArray16(12, 'class', 'form-control', 'id', 'Description', 'name', 'Description', 'placeholder', '¿Cuál es tu hobby?', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_28_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer, new import17.ElementRef(this._el_28));
        this._RequiredValidator_28_4 = new import14.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_28_5 = [this._RequiredValidator_28_4.context];
        this._NG_VALUE_ACCESSOR_28_6 = [this._DefaultValueAccessor_28_3.context];
        this._NgModel_28_7 = new import15.Wrapper_NgModel(this._ControlContainer_18_4, this._NG_VALIDATORS_28_5, null, this._NG_VALUE_ACCESSOR_28_6);
        this._NgControl_28_8 = this._NgModel_28_7.context;
        this._NgControlStatus_28_9 = new import12.Wrapper_NgControlStatus(this._NgControl_28_8);
        this._text_29 = this.renderer.createText(this._el_26, '\n                            ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_26, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                                ', null);
        this._text_32 = this.renderer.createText(this._el_30, 'Es requerido\n                            ', null);
        this._text_33 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._text_34 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._text_35 = this.renderer.createText(this._el_18, '\n                    ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_18, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-button-container'), null);
        this._text_37 = this.renderer.createText(this._el_36, '\n                        ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_36, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_39 = this.renderer.createText(this._el_38, 'Eliminar', null);
        this._text_40 = this.renderer.createText(this._el_36, '\n                        ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_36, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_42 = this.renderer.createText(this._el_41, 'Cancelar', null);
        this._text_43 = this.renderer.createText(this._el_36, '\n                        ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_36, 'button', new import3.InlineArray4(4, 'class', 'btn btn-success', 'type', 'submit'), null);
        this._text_45 = this.renderer.createText(this._el_44, 'Guardar', null);
        this._text_46 = this.renderer.createText(this._el_36, '\n                    ', null);
        this._text_47 = this.renderer.createText(this._el_18, '\n                ', null);
        this._text_48 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_49 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_50 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_51 = this.renderer.createText(this._el_1, '\n', null);
        this._text_52 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_18));
        this._NgForm_18_3.subscribe(this, this.eventHandler(this.handleEvent_18), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_28, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_28));
        this._NgModel_28_7.subscribe(this, this.eventHandler(this.handleEvent_28), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_38, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_38));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_41, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_41));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._text_52
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5
        ]);
        return null;
    };
    View_AddOtherExperienceComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import18.DefaultValueAccessor) && (28 === requestNodeIndex))) {
            return this._DefaultValueAccessor_28_3.context;
        }
        if (((token === import19.RequiredValidator) && (28 === requestNodeIndex))) {
            return this._RequiredValidator_28_4.context;
        }
        if (((token === import20.NG_VALIDATORS) && (28 === requestNodeIndex))) {
            return this._NG_VALIDATORS_28_5;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (28 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_28_6;
        }
        if (((token === import22.NgModel) && (28 === requestNodeIndex))) {
            return this._NgModel_28_7.context;
        }
        if (((token === import23.NgControl) && (28 === requestNodeIndex))) {
            return this._NgControl_28_8;
        }
        if (((token === import24.NgControlStatus) && (28 === requestNodeIndex))) {
            return this._NgControlStatus_28_9.context;
        }
        if (((token === import25.NgForm) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgForm_18_3.context;
        }
        if (((token === import26.ControlContainer) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._ControlContainer_18_4;
        }
        if (((token === import24.NgControlStatusGroup) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._NgControlStatusGroup_18_5.context;
        }
        return notFoundResult;
    };
    View_AddOtherExperienceComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatusGroup_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        this._DefaultValueAccessor_28_3.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_28_1_0 = '';
        this._RequiredValidator_28_4.check_required(currVal_28_1_0, throwOnChange, false);
        this._RequiredValidator_28_4.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_28_2_0 = 'Description';
        this._NgModel_28_7.check_name(currVal_28_2_0, throwOnChange, false);
        var currVal_28_2_1 = this.context.otherExperience.description;
        this._NgModel_28_7.check_model(currVal_28_2_1, throwOnChange, false);
        this._NgModel_28_7.ngDoCheck(this, this._el_28, throwOnChange);
        this._NgControlStatus_28_9.ngDoCheck(this, this._el_28, throwOnChange);
        this._NgControlStatusGroup_18_5.checkHost(this, this, this._el_18, throwOnChange);
        this._RequiredValidator_28_4.checkHost(this, this, this._el_28, throwOnChange);
        this._NgControlStatus_28_9.checkHost(this, this, this._el_28, throwOnChange);
        var currVal_63 = (this._NgModel_28_7.context.valid || this._NgModel_28_7.context.pristine);
        if (import3.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this.renderer.setElementProperty(this._el_30, 'hidden', currVal_63);
            this._expr_63 = currVal_63;
        }
        var currVal_64 = !this._NgForm_18_3.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setElementProperty(this._el_44, 'disabled', currVal_64);
            this._expr_64 = currVal_64;
        }
    };
    View_AddOtherExperienceComponent0.prototype.destroyInternal = function () {
        this._NgModel_28_7.ngOnDestroy();
        this._NgForm_18_3.ngOnDestroy();
    };
    View_AddOtherExperienceComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddOtherExperienceComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddOtherExperienceComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_18_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.saveOtherExperience() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddOtherExperienceComponent0.prototype.handleEvent_28 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_28_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.otherExperience.description = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddOtherExperienceComponent0.prototype.handleEvent_38 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.DeleteOtherExperience() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddOtherExperienceComponent0.prototype.handleEvent_41 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AddOtherExperienceComponent0;
}(import1.AppView));
export { View_AddOtherExperienceComponent0 };
