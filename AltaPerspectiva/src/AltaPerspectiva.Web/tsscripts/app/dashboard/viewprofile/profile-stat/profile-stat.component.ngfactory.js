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
import * as import0 from './profile-stat.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
var Wrapper_ProfileStatComponent = (function () {
    function Wrapper_ProfileStatComponent() {
        this._changed = false;
        this.context = new import0.ProfileStatComponent();
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_ProfileStatComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ProfileStatComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ProfileStatComponent.prototype.check_profileParam = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.profileParam = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ProfileStatComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ProfileStatComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ProfileStatComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ProfileStatComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ProfileStatComponent;
}());
export { Wrapper_ProfileStatComponent };
var renderType_ProfileStatComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_ProfileStatComponent_Host0 = (function (_super) {
    __extends(View_ProfileStatComponent_Host0, _super);
    function View_ProfileStatComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ProfileStatComponent_Host0, renderType_ProfileStatComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ProfileStatComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'profile-stat', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ProfileStatComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProfileStatComponent_0_3 = new Wrapper_ProfileStatComponent();
        this.compView_0.create(this._ProfileStatComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._ProfileStatComponent_0_3.context);
    };
    View_ProfileStatComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ProfileStatComponent) && (0 === requestNodeIndex))) {
            return this._ProfileStatComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ProfileStatComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ProfileStatComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ProfileStatComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ProfileStatComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ProfileStatComponent_Host0;
}(import2.AppView));
export var ProfileStatComponentNgFactory = new import8.ComponentFactory('profile-stat', View_ProfileStatComponent_Host0, import0.ProfileStatComponent);
var styles_ProfileStatComponent = ['.statistic-panel[_ngcontent-%COMP%] {\n        min-height: 20vh;\n        padding-right: 30%;\n    }\n    .statistic-panel[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n        list-style:none;\n        font-size:12px;\n    }\n    .profile-rightmenu[_ngcontent-%COMP%] {\n        color: #9d9d9b;\n        width: 100%;\n        margin: 0 auto;\n        border-top: 1px solid #eeeeee;\n        padding-top: 10px;\n        list-style: none;\n    }'];
var renderType_ProfileStatComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.Emulated, styles_ProfileStatComponent, {});
var View_ProfileStatComponent0 = (function (_super) {
    __extends(View_ProfileStatComponent0, _super);
    function View_ProfileStatComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ProfileStatComponent0, renderType_ProfileStatComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_26 = import1.UNINITIALIZED;
        _this._expr_27 = import1.UNINITIALIZED;
        _this._expr_28 = import1.UNINITIALIZED;
        _this._expr_29 = import1.UNINITIALIZED;
        _this._expr_30 = import1.UNINITIALIZED;
        return _this;
    }
    View_ProfileStatComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'statistic-panel'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'ul', new import3.InlineArray2(2, 'class', 'profile-rightmenu'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_5, 'Visitas al perfil ', null);
        this._text_8 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_3, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_9, 'Veces leído ', null);
        this._text_12 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_3, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, '', null);
        this._text_15 = this.renderer.createText(this._el_13, 'Me gusta ', null);
        this._text_16 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_3, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, '', null);
        this._text_19 = this.renderer.createText(this._el_17, 'Preguntas respondidas este mes ', null);
        this._text_20 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_3, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_22 = this.renderer.createText(this._el_21, '', null);
        this._text_23 = this.renderer.createText(this._el_21, 'Preguntas realizadas este mes ', null);
        this._text_24 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_25 = this.renderer.createText(this._el_1, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._text_25
        ]), null);
        return null;
    };
    View_ProfileStatComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_26 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.profileViewCount), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setText(this._text_6, currVal_26);
            this._expr_26 = currVal_26;
        }
        var currVal_27 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.questions), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setText(this._text_10, currVal_27);
            this._expr_27 = currVal_27;
        }
        var currVal_28 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.answerLikeCount), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_28, currVal_28)) {
            this.renderer.setText(this._text_14, currVal_28);
            this._expr_28 = currVal_28;
        }
        var currVal_29 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.answerMadeThisMonth), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_29, currVal_29)) {
            this.renderer.setText(this._text_18, currVal_29);
            this._expr_29 = currVal_29;
        }
        var currVal_30 = import3.inlineInterpolate(1, '', ((this.context.profileParam == null) ? null : this.context.profileParam.questionMadeThisMonth), ' ');
        if (import3.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setText(this._text_22, currVal_30);
            this._expr_30 = currVal_30;
        }
    };
    return View_ProfileStatComponent0;
}(import2.AppView));
export { View_ProfileStatComponent0 };
