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
import * as import0 from './apbanner.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '../../services/window-ref.service';
import * as import10 from './carousel.css.shim.ngstyle';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '@angular/core/src/security';
var Wrapper_ApBannerComponent = (function () {
    function Wrapper_ApBannerComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.ApBannerComponent(p0, p1);
    }
    Wrapper_ApBannerComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ApBannerComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ApBannerComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_ApBannerComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ApBannerComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'window:scroll')) {
            var pd_sub_0 = (this.context.track($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_ApBannerComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ApBannerComponent;
}());
export { Wrapper_ApBannerComponent };
var renderType_ApBannerComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ApBannerComponent_Host0 = (function (_super) {
    __extends(View_ApBannerComponent_Host0, _super);
    function View_ApBannerComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ApBannerComponent_Host0, renderType_ApBannerComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ApBannerComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ap-banner', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ApBannerComponent0(this.viewUtils, this, 0, this._el_0);
        this._ApBannerComponent_0_3 = new Wrapper_ApBannerComponent(new import8.ElementRef(this._el_0), this.injectorGet(import9.WindowRefService, this.parentIndex));
        this.compView_0.create(this._ApBannerComponent_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'scroll', 'window'), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new import7.ComponentRef_(0, this, this._el_0, this._ApBannerComponent_0_3.context);
    };
    View_ApBannerComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ApBannerComponent) && (0 === requestNodeIndex))) {
            return this._ApBannerComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ApBannerComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApBannerComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ApBannerComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ApBannerComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ApBannerComponent_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._ApBannerComponent_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ApBannerComponent_Host0;
}(import1.AppView));
export var ApBannerComponentNgFactory = new import7.ComponentFactory('ap-banner', View_ApBannerComponent_Host0, import0.ApBannerComponent);
var styles_ApBannerComponent = [import10.styles];
var renderType_ApBannerComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_ApBannerComponent, {});
var View_ApBannerComponent0 = (function (_super) {
    __extends(View_ApBannerComponent0, _super);
    function View_ApBannerComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ApBannerComponent0, renderType_ApBannerComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_39 = import11.UNINITIALIZED;
        _this._expr_40 = import11.UNINITIALIZED;
        _this._expr_41 = import11.UNINITIALIZED;
        _this._expr_42 = import11.UNINITIALIZED;
        _this._expr_43 = import11.UNINITIALIZED;
        _this._expr_44 = import11.UNINITIALIZED;
        _this._expr_45 = import11.UNINITIALIZED;
        _this._expr_46 = import11.UNINITIALIZED;
        _this._expr_47 = import11.UNINITIALIZED;
        return _this;
    }
    View_ApBannerComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'carousel'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._text_2 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_0, 'ul', new import3.InlineArray2(2, 'class', 'slides'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'li', new import3.InlineArray2(2, 'class', 'slide-item'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'img', new import3.InlineArray2(2, 'alt', ''), null);
        this._text_8 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_5, 'h2', new import3.InlineArray2(2, 'class', 'hidden-xs'), null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_5, 'h3', new import3.InlineArray2(2, 'class', 'hidden-xs'), null);
        this._text_13 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_14 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_3, 'li', new import3.InlineArray2(2, 'class', 'slide-item'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'img', new import3.InlineArray2(2, 'alt', ''), null);
        this._text_18 = this.renderer.createText(this._el_15, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_15, 'h2', new import3.InlineArray2(2, 'class', 'hidden-xs'), null);
        this._text_20 = this.renderer.createText(this._el_19, '', null);
        this._text_21 = this.renderer.createText(this._el_15, '\n            ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_15, 'h3', new import3.InlineArray2(2, 'class', 'hidden-xs'), null);
        this._text_23 = this.renderer.createText(this._el_15, '\n        ', null);
        this._text_24 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_3, 'li', new import3.InlineArray2(2, 'class', 'slide-item'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'img', new import3.InlineArray2(2, 'alt', ''), null);
        this._text_28 = this.renderer.createText(this._el_25, '\n            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray2(2, 'style', 'padding-left:55px;'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n                ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'h2', new import3.InlineArray2(2, 'class', 'hidden-xs'), null);
        this._text_32 = this.renderer.createText(this._el_31, '', null);
        this._text_33 = this.renderer.createText(this._el_29, '\n                ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_29, 'h3', new import3.InlineArray2(2, 'class', 'hidden-xs'), null);
        this._text_35 = this.renderer.createText(this._el_29, '\n            ', null);
        this._text_36 = this.renderer.createText(this._el_25, '\n            \n        ', null);
        this._text_37 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
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
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
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
            this._el_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._text_37,
            this._text_38
        ]), null);
        return null;
    };
    View_ApBannerComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_39 = import3.inlineInterpolate(1, '', this.context.images[0].url, '');
        if (import3.checkBinding(throwOnChange, this._expr_39, currVal_39)) {
            this.renderer.setElementProperty(this._el_7, 'src', this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL, currVal_39));
            this._expr_39 = currVal_39;
        }
        var currVal_40 = import3.inlineInterpolate(1, '', this.context.images[0].title, '');
        if (import3.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setText(this._text_10, currVal_40);
            this._expr_40 = currVal_40;
        }
        var currVal_41 = this.context.images[0].desccription;
        if (import3.checkBinding(throwOnChange, this._expr_41, currVal_41)) {
            this.renderer.setElementProperty(this._el_12, 'innerHTML', this.viewUtils.sanitizer.sanitize(import12.SecurityContext.HTML, currVal_41));
            this._expr_41 = currVal_41;
        }
        var currVal_42 = import3.inlineInterpolate(1, '', this.context.images[1].url, '');
        if (import3.checkBinding(throwOnChange, this._expr_42, currVal_42)) {
            this.renderer.setElementProperty(this._el_17, 'src', this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL, currVal_42));
            this._expr_42 = currVal_42;
        }
        var currVal_43 = import3.inlineInterpolate(1, '', this.context.images[1].title, '');
        if (import3.checkBinding(throwOnChange, this._expr_43, currVal_43)) {
            this.renderer.setText(this._text_20, currVal_43);
            this._expr_43 = currVal_43;
        }
        var currVal_44 = this.context.images[1].desccription;
        if (import3.checkBinding(throwOnChange, this._expr_44, currVal_44)) {
            this.renderer.setElementProperty(this._el_22, 'innerHTML', this.viewUtils.sanitizer.sanitize(import12.SecurityContext.HTML, currVal_44));
            this._expr_44 = currVal_44;
        }
        var currVal_45 = import3.inlineInterpolate(1, '', this.context.images[2].url, '');
        if (import3.checkBinding(throwOnChange, this._expr_45, currVal_45)) {
            this.renderer.setElementProperty(this._el_27, 'src', this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL, currVal_45));
            this._expr_45 = currVal_45;
        }
        var currVal_46 = import3.inlineInterpolate(1, '', this.context.images[2].title, '');
        if (import3.checkBinding(throwOnChange, this._expr_46, currVal_46)) {
            this.renderer.setText(this._text_32, currVal_46);
            this._expr_46 = currVal_46;
        }
        var currVal_47 = this.context.images[2].desccription;
        if (import3.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementProperty(this._el_34, 'innerHTML', this.viewUtils.sanitizer.sanitize(import12.SecurityContext.HTML, currVal_47));
            this._expr_47 = currVal_47;
        }
    };
    return View_ApBannerComponent0;
}(import1.AppView));
export { View_ApBannerComponent0 };
