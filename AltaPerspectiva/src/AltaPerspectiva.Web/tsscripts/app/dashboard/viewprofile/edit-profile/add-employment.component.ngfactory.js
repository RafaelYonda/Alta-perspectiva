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
import * as import0 from './add-employment.component';
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
var Wrapper_AddEmploymentComponent = (function () {
    function Wrapper_AddEmploymentComponent(p0) {
        this._changed = false;
        this.context = new import0.AddEmploymentComponent(p0);
    }
    Wrapper_AddEmploymentComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AddEmploymentComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AddEmploymentComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AddEmploymentComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AddEmploymentComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AddEmploymentComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AddEmploymentComponent;
}());
export { Wrapper_AddEmploymentComponent };
var renderType_AddEmploymentComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AddEmploymentComponent_Host0 = (function (_super) {
    __extends(View_AddEmploymentComponent_Host0, _super);
    function View_AddEmploymentComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AddEmploymentComponent_Host0, renderType_AddEmploymentComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AddEmploymentComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'add-employment', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AddEmploymentComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import9.Http, this.parentIndex));
        this._AddEmploymentComponent_0_4 = new Wrapper_AddEmploymentComponent(this._ProfileService_0_3);
        this.compView_0.create(this._AddEmploymentComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._AddEmploymentComponent_0_4.context);
    };
    View_AddEmploymentComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import0.AddEmploymentComponent) && (0 === requestNodeIndex))) {
            return this._AddEmploymentComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_AddEmploymentComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AddEmploymentComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AddEmploymentComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AddEmploymentComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AddEmploymentComponent_Host0;
}(import1.AppView));
export var AddEmploymentComponentNgFactory = new import8.ComponentFactory('add-employment', View_AddEmploymentComponent_Host0, import0.AddEmploymentComponent);
var styles_AddEmploymentComponent = ['.credential-dialog[_ngcontent-%COMP%] {\n        margin: 10% auto;\n        max-width: 45%;\n    }\n\n    .profile-modal-body[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 15px;\n        background-color: #f6f6f6;\n        margin: 0px;\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n\n        .profile-modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            width: 100%;\n            border: 1px solid #bdbdbd;\n            border-radius: 3px;\n            padding: 2px 5px;\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n\n        .profile-modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            text-decoration: underline;\n        }\n\n    .profile-modal-button-container[_ngcontent-%COMP%] {\n        text-align: right;\n    }\n\n        .profile-modal-button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            margin-right: 10px;\n        }\n\n    .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n     .col-sm-8[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }'];
var renderType_AddEmploymentComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_AddEmploymentComponent, {});
var View_AddEmploymentComponent0 = (function (_super) {
    __extends(View_AddEmploymentComponent0, _super);
    function View_AddEmploymentComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_AddEmploymentComponent0, renderType_AddEmploymentComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_78 = import15.UNINITIALIZED;
        _this._map_79 = import3.pureProxy1(function (p0) {
            return { standalone: p0 };
        });
        _this._expr_80 = import15.UNINITIALIZED;
        return _this;
    }
    View_AddEmploymentComponent0.prototype.createInternal = function (rootSelector) {
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
        this._text_13 = this.renderer.createText(this._el_12, 'Información de trabajo', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n                ', null);
        this._text_15 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_16 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-body'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n                ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'form', new import3.InlineArray2(2, 'class', 'form-horizontal'), null);
        this._NgForm_19_3 = new import10.Wrapper_NgForm(null, null);
        this._ControlContainer_19_4 = this._NgForm_19_3.context;
        this._NgControlStatusGroup_19_5 = new import11.Wrapper_NgControlStatusGroup(this._ControlContainer_19_4);
        this._text_20 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                        ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'label', new import3.InlineArray4(4, 'class', 'control-label col-sm-4', 'for', 'email'), null);
        this._text_24 = this.renderer.createText(this._el_23, 'Cargo* :', null);
        this._text_25 = this.renderer.createText(this._el_21, '\n                        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_21, 'div', new import3.InlineArray2(2, 'class', 'col-sm-8'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                            ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'input', new import3.InlineArray16(12, 'class', 'form-control', 'id', 'position', 'name', 'position', 'placeholder', '¿Qué haces?', 'required', '', 'type', 'text'), null);
        this._DefaultValueAccessor_28_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_28));
        this._RequiredValidator_28_4 = new import13.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_28_5 = [this._RequiredValidator_28_4.context];
        this._NG_VALUE_ACCESSOR_28_6 = [this._DefaultValueAccessor_28_3.context];
        this._NgModel_28_7 = new import14.Wrapper_NgModel(this._ControlContainer_19_4, this._NG_VALIDATORS_28_5, null, this._NG_VALUE_ACCESSOR_28_6);
        this._NgControl_28_8 = this._NgModel_28_7.context;
        this._NgControlStatus_28_9 = new import11.Wrapper_NgControlStatus(this._NgControl_28_8);
        this._text_29 = this.renderer.createText(this._el_26, '\n                            ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_26, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                                Es requerido\n                            ', null);
        this._text_32 = this.renderer.createText(this._el_26, '\n                         ', null);
        this._text_33 = this.renderer.createText(this._el_21, '\n                    ', null);
        this._text_34 = this.renderer.createText(this._el_19, '\n                    ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n                        ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_35, 'label', new import3.InlineArray4(4, 'class', 'control-label col-sm-4', 'for', 'pwd'), null);
        this._text_38 = this.renderer.createText(this._el_37, 'Nombre empresa:', null);
        this._text_39 = this.renderer.createText(this._el_35, '\n                        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_35, 'div', new import3.InlineArray2(2, 'class', 'col-sm-8'), null);
        this._text_41 = this.renderer.createText(this._el_40, '\n                            ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_40, 'input', new import3.InlineArray8(8, 'class', 'form-control', 'id', 'CompanyName', 'placeholder', '¿Dónde laboras?', 'type', 'text'), null);
        this._DefaultValueAccessor_42_3 = new import12.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_42));
        this._NG_VALUE_ACCESSOR_42_4 = [this._DefaultValueAccessor_42_3.context];
        this._NgModel_42_5 = new import14.Wrapper_NgModel(this._ControlContainer_19_4, null, null, this._NG_VALUE_ACCESSOR_42_4);
        this._NgControl_42_6 = this._NgModel_42_5.context;
        this._NgControlStatus_42_7 = new import11.Wrapper_NgControlStatus(this._NgControl_42_6);
        this._text_43 = this.renderer.createText(this._el_40, '\n                        ', null);
        this._text_44 = this.renderer.createText(this._el_35, '\n                    ', null);
        this._text_45 = this.renderer.createText(this._el_19, '\n\n                    ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-button-container'), null);
        this._text_47 = this.renderer.createText(this._el_46, '\n                        ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_46, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_49 = this.renderer.createText(this._el_48, 'Eliminar', null);
        this._text_50 = this.renderer.createText(this._el_46, '\n                        ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_46, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_52 = this.renderer.createText(this._el_51, ' Cancelar', null);
        this._text_53 = this.renderer.createText(this._el_46, '\n                        ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_46, 'button', new import3.InlineArray4(4, 'class', 'btn btn-success', 'type', 'submit'), null);
        this._text_55 = this.renderer.createText(this._el_54, 'Guardar', null);
        this._text_56 = this.renderer.createText(this._el_46, '\n                    ', null);
        this._text_57 = this.renderer.createText(this._el_19, '\n                ', null);
        this._text_58 = this.renderer.createText(this._el_17, '\n            ', null);
        this._text_59 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_60 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_61 = this.renderer.createText(this._el_1, '\n', null);
        this._text_62 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_19, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_19));
        this._NgForm_19_3.subscribe(this, this.eventHandler(this.handleEvent_19), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_28, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_28));
        this._NgModel_28_7.subscribe(this, this.eventHandler(this.handleEvent_28), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_42, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_42));
        this._NgModel_42_5.subscribe(this, this.eventHandler(this.handleEvent_42), true);
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_48, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_48));
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_51, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_51));
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
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
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
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._text_60,
            this._text_61,
            this._text_62
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6
        ]);
        return null;
    };
    View_AddEmploymentComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.DefaultValueAccessor) && (28 === requestNodeIndex))) {
            return this._DefaultValueAccessor_28_3.context;
        }
        if (((token === import18.RequiredValidator) && (28 === requestNodeIndex))) {
            return this._RequiredValidator_28_4.context;
        }
        if (((token === import19.NG_VALIDATORS) && (28 === requestNodeIndex))) {
            return this._NG_VALIDATORS_28_5;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (28 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_28_6;
        }
        if (((token === import21.NgModel) && (28 === requestNodeIndex))) {
            return this._NgModel_28_7.context;
        }
        if (((token === import22.NgControl) && (28 === requestNodeIndex))) {
            return this._NgControl_28_8;
        }
        if (((token === import23.NgControlStatus) && (28 === requestNodeIndex))) {
            return this._NgControlStatus_28_9.context;
        }
        if (((token === import17.DefaultValueAccessor) && (42 === requestNodeIndex))) {
            return this._DefaultValueAccessor_42_3.context;
        }
        if (((token === import20.NG_VALUE_ACCESSOR) && (42 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_42_4;
        }
        if (((token === import21.NgModel) && (42 === requestNodeIndex))) {
            return this._NgModel_42_5.context;
        }
        if (((token === import22.NgControl) && (42 === requestNodeIndex))) {
            return this._NgControl_42_6;
        }
        if (((token === import23.NgControlStatus) && (42 === requestNodeIndex))) {
            return this._NgControlStatus_42_7.context;
        }
        if (((token === import24.NgForm) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._NgForm_19_3.context;
        }
        if (((token === import25.ControlContainer) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._ControlContainer_19_4;
        }
        if (((token === import23.NgControlStatusGroup) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 57)))) {
            return this._NgControlStatusGroup_19_5.context;
        }
        return notFoundResult;
    };
    View_AddEmploymentComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_19_3.ngDoCheck(this, this._el_19, throwOnChange);
        this._NgControlStatusGroup_19_5.ngDoCheck(this, this._el_19, throwOnChange);
        this._DefaultValueAccessor_28_3.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_28_1_0 = '';
        this._RequiredValidator_28_4.check_required(currVal_28_1_0, throwOnChange, false);
        this._RequiredValidator_28_4.ngDoCheck(this, this._el_28, throwOnChange);
        var currVal_28_2_0 = 'position';
        this._NgModel_28_7.check_name(currVal_28_2_0, throwOnChange, false);
        var currVal_28_2_1 = this.context.employment.position;
        this._NgModel_28_7.check_model(currVal_28_2_1, throwOnChange, false);
        this._NgModel_28_7.ngDoCheck(this, this._el_28, throwOnChange);
        this._NgControlStatus_28_9.ngDoCheck(this, this._el_28, throwOnChange);
        this._DefaultValueAccessor_42_3.ngDoCheck(this, this._el_42, throwOnChange);
        var currVal_42_1_0 = this.context.employment.companyName;
        this._NgModel_42_5.check_model(currVal_42_1_0, throwOnChange, false);
        var currVal_42_1_1 = this._map_79(true);
        this._NgModel_42_5.check_options(currVal_42_1_1, throwOnChange, false);
        this._NgModel_42_5.ngDoCheck(this, this._el_42, throwOnChange);
        this._NgControlStatus_42_7.ngDoCheck(this, this._el_42, throwOnChange);
        this._NgControlStatusGroup_19_5.checkHost(this, this, this._el_19, throwOnChange);
        this._RequiredValidator_28_4.checkHost(this, this, this._el_28, throwOnChange);
        this._NgControlStatus_28_9.checkHost(this, this, this._el_28, throwOnChange);
        var currVal_78 = (this._NgModel_28_7.context.valid || this._NgModel_28_7.context.pristine);
        if (import3.checkBinding(throwOnChange, this._expr_78, currVal_78)) {
            this.renderer.setElementProperty(this._el_30, 'hidden', currVal_78);
            this._expr_78 = currVal_78;
        }
        this._NgControlStatus_42_7.checkHost(this, this, this._el_42, throwOnChange);
        var currVal_80 = !this._NgForm_19_3.context.form.valid;
        if (import3.checkBinding(throwOnChange, this._expr_80, currVal_80)) {
            this.renderer.setElementProperty(this._el_54, 'disabled', currVal_80);
            this._expr_80 = currVal_80;
        }
    };
    View_AddEmploymentComponent0.prototype.destroyInternal = function () {
        this._NgModel_28_7.ngOnDestroy();
        this._NgModel_42_5.ngOnDestroy();
        this._NgForm_19_3.ngOnDestroy();
    };
    View_AddEmploymentComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddEmploymentComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddEmploymentComponent0.prototype.handleEvent_19 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_19_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.onEmploymentSubmit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddEmploymentComponent0.prototype.handleEvent_28 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_28_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.employment.position = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddEmploymentComponent0.prototype.handleEvent_42 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_42_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.employment.companyName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddEmploymentComponent0.prototype.handleEvent_48 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.DeleteEmployment() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddEmploymentComponent0.prototype.handleEvent_51 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AddEmploymentComponent0;
}(import1.AppView));
export { View_AddEmploymentComponent0 };
