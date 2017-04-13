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
import * as import0 from './add-credential.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/profile.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import11 from '../../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import12 from '../../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/forms/src/directives/default_value_accessor';
import * as import15 from '@angular/forms/src/directives/control_value_accessor';
import * as import16 from '@angular/forms/src/directives/ng_model';
import * as import17 from '@angular/forms/src/directives/ng_control';
import * as import18 from '@angular/forms/src/directives/ng_control_status';
var Wrapper_AddCredentialComponent = (function () {
    function Wrapper_AddCredentialComponent(p0) {
        this._changed = false;
        this.context = new import0.AddCredentialComponent(p0);
    }
    Wrapper_AddCredentialComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AddCredentialComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AddCredentialComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AddCredentialComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AddCredentialComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AddCredentialComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AddCredentialComponent;
}());
export { Wrapper_AddCredentialComponent };
var renderType_AddCredentialComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AddCredentialComponent_Host0 = (function (_super) {
    __extends(View_AddCredentialComponent_Host0, _super);
    function View_AddCredentialComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AddCredentialComponent_Host0, renderType_AddCredentialComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AddCredentialComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'add-credential', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AddCredentialComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileService_0_3 = new import5.ProfileService(this.injectorGet(import9.Http, this.parentIndex));
        this._AddCredentialComponent_0_4 = new Wrapper_AddCredentialComponent(this._ProfileService_0_3);
        this.compView_0.create(this._AddCredentialComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._AddCredentialComponent_0_4.context);
    };
    View_AddCredentialComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_3;
        }
        if (((token === import0.AddCredentialComponent) && (0 === requestNodeIndex))) {
            return this._AddCredentialComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_AddCredentialComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AddCredentialComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AddCredentialComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AddCredentialComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AddCredentialComponent_Host0;
}(import1.AppView));
export var AddCredentialComponentNgFactory = new import8.ComponentFactory('add-credential', View_AddCredentialComponent_Host0, import0.AddCredentialComponent);
var styles_AddCredentialComponent = ['.credential-dialog[_ngcontent-%COMP%] {\n        margin: 15% auto;\n        max-width: 45%;\n    }\n\n    .profile-modal-body[_ngcontent-%COMP%] {\n        position: relative;\n        padding: 15px;\n        background-color: #f6f6f6;\n        margin: 0px;\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n\n        .profile-modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n            width: 100%;\n            border: 1px solid #bdbdbd;\n            border-radius: 3px;\n            padding: 2px 5px;\n            margin-top: 5px;\n            margin-bottom: 5px;\n        }\n\n        .profile-modal-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n            text-decoration: underline;\n        }\n\n    .profile-modal-button-container[_ngcontent-%COMP%] {\n        text-align: right;\n    }\n\n        .profile-modal-button-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n            margin-right: 10px;\n        }\n\n    .modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }'];
var renderType_AddCredentialComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_AddCredentialComponent, {});
var View_AddCredentialComponent0 = (function (_super) {
    __extends(View_AddCredentialComponent0, _super);
    function View_AddCredentialComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AddCredentialComponent0, renderType_AddCredentialComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AddCredentialComponent0.prototype.createInternal = function (rootSelector) {
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
        this._text_13 = this.renderer.createText(this._el_12, 'Actualizar credencial', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n            ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-body'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'i', new import3.InlineArray2(2, 'class', 'fa fa-user'), null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_16, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_20 = this.renderer.createText(this._el_19, 'Editar', null);
        this._text_21 = this.renderer.createText(this._el_16, '\n                ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_16, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'input', new import3.InlineArray2(2, 'type', 'text'), null);
        this._DefaultValueAccessor_24_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer, new import13.ElementRef(this._el_24));
        this._NG_VALUE_ACCESSOR_24_4 = [this._DefaultValueAccessor_24_3.context];
        this._NgModel_24_5 = new import11.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_24_4);
        this._NgControl_24_6 = this._NgModel_24_5.context;
        this._NgControlStatus_24_7 = new import12.Wrapper_NgControlStatus(this._NgControl_24_6);
        this._text_25 = this.renderer.createText(this._el_22, '\n                ', null);
        this._text_26 = this.renderer.createText(this._el_16, '\n                ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'profile-modal-button-container'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_29, 'Eliminar', null);
        this._text_31 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_27, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_33 = this.renderer.createText(this._el_32, 'Cancelar', null);
        this._text_34 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_27, 'button', new import3.InlineArray2(2, 'class', 'btn btn-sm btn-primary'), null);
        this._text_36 = this.renderer.createText(this._el_35, 'Guardar', null);
        this._text_37 = this.renderer.createText(this._el_27, '\n                ', null);
        this._text_38 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_39 = this.renderer.createText(this._el_8, '\n        ', null);
        this._text_40 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_41 = this.renderer.createText(this._el_1, '\n', null);
        this._text_42 = this.renderer.createText(parentRenderNode, '\n\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_24, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_24));
        this._NgModel_24_5.subscribe(this, this.eventHandler(this.handleEvent_24), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_29, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_29));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_32, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_32));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_35, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_35));
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
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._text_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._text_42
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
    View_AddCredentialComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import14.DefaultValueAccessor) && (24 === requestNodeIndex))) {
            return this._DefaultValueAccessor_24_3.context;
        }
        if (((token === import15.NG_VALUE_ACCESSOR) && (24 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_24_4;
        }
        if (((token === import16.NgModel) && (24 === requestNodeIndex))) {
            return this._NgModel_24_5.context;
        }
        if (((token === import17.NgControl) && (24 === requestNodeIndex))) {
            return this._NgControl_24_6;
        }
        if (((token === import18.NgControlStatus) && (24 === requestNodeIndex))) {
            return this._NgControlStatus_24_7.context;
        }
        return notFoundResult;
    };
    View_AddCredentialComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._DefaultValueAccessor_24_3.ngDoCheck(this, this._el_24, throwOnChange);
        var currVal_24_1_0 = this.context.credential.title;
        this._NgModel_24_5.check_model(currVal_24_1_0, throwOnChange, false);
        this._NgModel_24_5.ngDoCheck(this, this._el_24, throwOnChange);
        this._NgControlStatus_24_7.ngDoCheck(this, this._el_24, throwOnChange);
        this._NgControlStatus_24_7.checkHost(this, this, this._el_24, throwOnChange);
    };
    View_AddCredentialComponent0.prototype.destroyInternal = function () {
        this._NgModel_24_5.ngOnDestroy();
    };
    View_AddCredentialComponent0.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.handleClick($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddCredentialComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddCredentialComponent0.prototype.handleEvent_24 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_24_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.credential.title = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddCredentialComponent0.prototype.handleEvent_29 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.DeleteCredentialTitle() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddCredentialComponent0.prototype.handleEvent_32 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.onClickedExit() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddCredentialComponent0.prototype.handleEvent_35 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.saveCredentialTitle() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AddCredentialComponent0;
}(import1.AppView));
export { View_AddCredentialComponent0 };
