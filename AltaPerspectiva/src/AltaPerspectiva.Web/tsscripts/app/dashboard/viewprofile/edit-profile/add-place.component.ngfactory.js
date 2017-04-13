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
import * as import0 from './add-place.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/profile.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import11 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import12 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import13 from '../../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import14 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import15 from '@angular/core/src/change_detection/change_detection_util';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/forms/src/directives/default_value_accessor';
import * as import18 from '@angular/forms/src/directives/validators';
import * as import19 from '@angular/forms/src/validators';
import * as import20 from '@angular/forms/src/directives/control_value_accessor';
import * as import21 from '@angular/forms/src/directives/ng_model';
import * as import22 from '@angular/forms/src/directives/ng_control';
import * as import23 from '@angular/forms/src/directives/ng_control_status';
import * as import24 from '@angular/forms/src/directives/ng_form';
import * as import25 from '@angular/forms/src/directives/control_container';
var Wrapper_AddPlaceComponent = (function () {
    function Wrapper_AddPlaceComponent(p0) {
        this._changed = false;
        this.context = new import0.AddPlaceComponent(p0);
    }
    Wrapper_AddPlaceComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AddPlaceComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AddPlaceComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AddPlaceComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AddPlaceComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AddPlaceComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AddPlaceComponent;
}());
export { Wrapper_AddPlaceComponent };
var renderType_AddPlaceComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AddPlaceComponent_Host0 = (function (_super) {
    __extends(View_AddPlaceComponent_Host0, _super);
    function View_AddPlaceComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AddPlaceComponent_Host0, renderType_AddPlaceComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AddPlaceComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'add-place', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AddPlaceComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import9.Http, this.parentIndex));
        this._AddPlaceComponent_0_4 = new Wrapper_AddPlaceComponent(this._ProfileService_0_3);
        this.compView_0.create(this._AddPlaceComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._AddPlaceComponent_0_4.context);
    };
    View_AddPlaceComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import0.AddPlaceComponent) && (0 === requestNodeIndex))) {
            return this._AddPlaceComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_AddPlaceComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AddPlaceComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AddPlaceComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AddPlaceComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AddPlaceComponent_Host0;
}(import1.AppView));
export var AddPlaceComponentNgFactory = new import8.ComponentFactory('add-place', View_AddPlaceComponent_Host0, import0.AddPlaceComponent);
var styles_AddPlaceComponent = ['.credential-dialog[_ngcontent-%COMP%] {\n        margin: 10% auto;\n        max-width: 45%;\n    }\n\n    .profile-modal-body[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 15px;\n        background-color: #f6f6f6;\n        margin: 0px;\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n\n        .profile-modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            width: 100%;\n            border: 1px solid #bdbdbd;\n            border-radius: 3px;\n            padding: 2px 5px;\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n\n        .profile-modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            text-decoration: underline;\n        }\n\n    .profile-modal-button-container[_ngcontent-%COMP%] {\n        text-align: right;\n    }\n\n        .profile-modal-button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            margin-right: 10px;\n        }\n\n    .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n     .col-sm-8[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }'];
var renderType_AddPlaceComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_AddPlaceComponent, {});
var View_AddPlaceComponent0 = (function (_super) {
    __extends(View_AddPlaceComponent0, _super);
    function View_AddPlaceComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_AddPlaceComponent0, renderType_AddPlaceComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_62 = import15.UNINITIALIZED;
        _this._expr_63 = import15.UNINITIALIZED;
        return _this;
    }
    View_AddPlaceComponent0.prototype.createInternal = function (rootSelector) {
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
        this._text_13 = this.renderer.createText(this._el_12, 'Información de lugar', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-body'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'form', new import3.InlineArray2(2, 'class', 'form-horizontal'), null);
        this._NgForm_18_3 = new import10.Wrapper_NgForm(null, null);
        this._ControlContainer_18_4 = this._NgForm_18_3.context;
        this._NgControlStatusGroup_18_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_18_4);
        this._text_19 = this.renderer.createText(this._el_18, '\n                    ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n                        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'label', new import3.InlineArray4(4, 'class', 'control-label col-sm-4', 'for', 'email'), null);
        this._text_23 = this.renderer.createText(this._el_22, 'Ciudad*:', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n                        ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_20, 'div', new import3.InlineArray2(2, 'class', 'col-sm-8'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'input', new import3.InlineArray16(12, 'class', 'form-control', 'id', 'LocationName', 'name', 'LocationName', 'placeholder', '¿Dónde vives?', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_27_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_27));
        this._RequiredValidator_27_4 = new import13.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_27_5 = [this._RequiredValidator_27_4.context];
        this._NG_VALUE_ACCESSOR_27_6 = [this._DefaultValueAccessor_27_3.context];
        this._NgModel_27_7 = new import14.Wrapper_NgModel(this._ControlContainer_18_4, this._NG_VALIDATORS_27_5, null, this._NG_VALUE_ACCESSOR_27_6);
        this._NgControl_27_8 = this._NgModel_27_7.context;
        this._NgControlStatus_27_9 = new import11.Wrapper_NgControlStatus(this._NgControl_27_8);
        this._text_28 = this.renderer.createText(this._el_25, '\n                            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n                                ', null);
        this._text_31 = this.renderer.createText(this._el_29, 'Es requerido\n                            ', null);
        this._text_32 = this.renderer.createText(this._el_25, '\n                        ', null);
        this._text_33 = this.renderer.createText(this._el_20, '\n                    ', null);
        this._text_34 = this.renderer.createText(this._el_18, '\n                    ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_18, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-button-container'), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n                        ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_35, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_38 = this.renderer.createText(this._el_37, 'Eliminar', null);
        this._text_39 = this.renderer.createText(this._el_35, '\n                        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_35, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_41 = this.renderer.createText(this._el_40, 'Cancelar', null);
        this._text_42 = this.renderer.createText(this._el_35, '\n                        ', null);
        this._el_43 = import3.createRenderElement(this.renderer, this._el_35, 'button', new import3.InlineArray4(4, 'class', 'btn btn-success', 'type', 'submit'), null);
        this._text_44 = this.renderer.createText(this._el_43, 'Guardar', null);
        this._text_45 = this.renderer.createText(this._el_35, '\n                    ', null);
        this._text_46 = this.renderer.createText(this._el_18, '\n                ', null);
        this._text_47 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_48 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_49 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_50 = this.renderer.createText(this._el_1, '\n', null);
        this._text_51 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_18));
        this._NgForm_18_3.subscribe(this, this.eventHandler(this.handleEvent_18), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_27));
        this._NgModel_27_7.subscribe(this, this.eventHandler(this.handleEvent_27), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_37, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_37));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_40, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_40));
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
            this._el_20,
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
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._el_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._text_51
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
    View_AddPlaceComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.DefaultValueAccessor) && (27 === requestNodeIndex))) {
            return this._DefaultValueAccessor_27_3.context;
        }
        if (((token === import18.RequiredValidator) && (27 === requestNodeIndex))) {
            return this._RequiredValidator_27_4.context;
        }
        if (((token === import19.NG_VALIDATORS) && (27 === requestNodeIndex))) {
            return this._NG_VALIDATORS_27_5;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (27 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_27_6;
        }
        if (((token === import21.NgModel) && (27 === requestNodeIndex))) {
            return this._NgModel_27_7.context;
        }
        if (((token === import22.NgControl) && (27 === requestNodeIndex))) {
            return this._NgControl_27_8;
        }
        if (((token === import23.NgControlStatus) && (27 === requestNodeIndex))) {
            return this._NgControlStatus_27_9.context;
        }
        if (((token === import24.NgForm) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgForm_18_3.context;
        }
        if (((token === import25.ControlContainer) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._ControlContainer_18_4;
        }
        if (((token === import23.NgControlStatusGroup) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgControlStatusGroup_18_5.context;
        }
        return notFoundResult;
    };
    View_AddPlaceComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatusGroup_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        this._DefaultValueAccessor_27_3.ngDoCheck(this, this._el_27, throwOnChange);
        var currVal_27_1_0 = '';
        this._RequiredValidator_27_4.check_required(currVal_27_1_0, throwOnChange, false);
        this._RequiredValidator_27_4.ngDoCheck(this, this._el_27, throwOnChange);
        var currVal_27_2_0 = 'LocationName';
        this._NgModel_27_7.check_name(currVal_27_2_0, throwOnChange, false);
        var currVal_27_2_1 = this.context.place.locationName;
        this._NgModel_27_7.check_model(currVal_27_2_1, throwOnChange, false);
        this._NgModel_27_7.ngDoCheck(this, this._el_27, throwOnChange);
        this._NgControlStatus_27_9.ngDoCheck(this, this._el_27, throwOnChange);
        this._NgControlStatusGroup_18_5.checkHost(this, this, this._el_18, throwOnChange);
        this._RequiredValidator_27_4.checkHost(this, this, this._el_27, throwOnChange);
        this._NgControlStatus_27_9.checkHost(this, this, this._el_27, throwOnChange);
        var currVal_62 = (this._NgModel_27_7.context.valid || this._NgModel_27_7.context.pristine);
        if (import3.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this.renderer.setElementProperty(this._el_29, 'hidden', currVal_62);
            this._expr_62 = currVal_62;
        }
        var currVal_63 = !this._NgForm_18_3.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this.renderer.setElementProperty(this._el_43, 'disabled', currVal_63);
            this._expr_63 = currVal_63;
        }
    };
    View_AddPlaceComponent0.prototype.destroyInternal = function () {
        this._NgModel_27_7.ngOnDestroy();
        this._NgForm_18_3.ngOnDestroy();
    };
    View_AddPlaceComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddPlaceComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddPlaceComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_18_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.savePlace() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddPlaceComponent0.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_27_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.place.locationName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddPlaceComponent0.prototype.handleEvent_37 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.DeletePlace() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddPlaceComponent0.prototype.handleEvent_40 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AddPlaceComponent0;
}(import1.AppView));
export { View_AddPlaceComponent0 };
