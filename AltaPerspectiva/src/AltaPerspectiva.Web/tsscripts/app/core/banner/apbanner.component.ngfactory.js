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
        _this._expr_27 = import11.UNINITIALIZED;
        return _this;
    }
    View_ApBannerComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'carousel'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ul', new import3.InlineArray2(2, 'class', 'slides'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'li', new import3.InlineArray2(2, 'class', 'slide-item'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'img', new import3.InlineArray4(4, 'alt', 'background', 'class', 'background-img'), null);
        this._text_7 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'hidden-xs banner-text'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, 'Pregunta y comparte tu ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'em', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'conocimiento', null);
        this._text_14 = this.renderer.createText(this._el_10, ' ', null);
        this._text_15 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'banner-arrow-container'), null);
        this._text_17 = this.renderer.createText(this._el_16, 'sobre negocios\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'img', new import3.InlineArray8(6, 'alt', 'arrow', 'class', 'banner-arrow', 'src', '../images/curved-arrow.png'), null);
        this._text_19 = this.renderer.createText(this._el_16, '\n                ', null);
        this._text_20 = this.renderer.createText(this._el_8, '\n                ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_8, 'a', new import3.InlineArray4(4, 'class', 'btn-banner', 'href', 'http://altaperspectiva.com/conocemas'), null);
        this._text_22 = this.renderer.createText(this._el_21, 'Conoce más', null);
        this._text_23 = this.renderer.createText(this._el_8, '\n            ', null);
        this._text_24 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_25 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n', null);
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
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._text_26
        ]), null);
        return null;
    };
    View_ApBannerComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_27 = import3.inlineInterpolate(1, '', this.context.images[0].url, '');
        if (import3.checkBinding(throwOnChange, this._expr_27, currVal_27)) {
            this.renderer.setElementProperty(this._el_6, 'src', this.viewUtils.sanitizer.sanitize(import12.SecurityContext.URL, currVal_27));
            this._expr_27 = currVal_27;
        }
    };
    return View_ApBannerComponent0;
}(import1.AppView));
export { View_ApBannerComponent0 };
