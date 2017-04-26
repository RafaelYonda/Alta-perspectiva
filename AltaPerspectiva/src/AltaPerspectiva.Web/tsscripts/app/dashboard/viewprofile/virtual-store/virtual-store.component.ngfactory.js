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
import * as import0 from './virtual-store.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../../services/config.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '../../../services/profile.service';
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
import * as import13 from '@angular/core/src/linker/query_list';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '@angular/core/src/change_detection/change_detection_util';
import * as import20 from '@angular/core/src/security';
var Wrapper_VirtualStoreComponent = (function () {
    function Wrapper_VirtualStoreComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.VirtualStoreComponent(p0, p1, p2, p3);
    }
    Wrapper_VirtualStoreComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_VirtualStoreComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_VirtualStoreComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_VirtualStoreComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_VirtualStoreComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_VirtualStoreComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_VirtualStoreComponent;
}());
export { Wrapper_VirtualStoreComponent };
var renderType_VirtualStoreComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_VirtualStoreComponent_Host0 = (function (_super) {
    __extends(View_VirtualStoreComponent_Host0, _super);
    function View_VirtualStoreComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_VirtualStoreComponent_Host0, renderType_VirtualStoreComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_VirtualStoreComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_VirtualStoreComponent0(this.viewUtils, this, 0, this._el_0);
        this._ConfigService_0_3 = new import5.ConfigService(this.injectorGet(import9.Http, this.parentIndex));
        this._VirtualStoreComponent_0_4 = new Wrapper_VirtualStoreComponent(this.injectorGet(import10.ActivatedRoute, this.parentIndex), this.injectorGet(import11.ProfileService, this.parentIndex), this.injectorGet(import12.ComponentFactoryResolver, this.parentIndex), this._ConfigService_0_3);
        this.compView_0.create(this._VirtualStoreComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._VirtualStoreComponent_0_4.context);
    };
    View_VirtualStoreComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.ConfigService) && (0 === requestNodeIndex))) {
            return this._ConfigService_0_3;
        }
        if (((token === import0.VirtualStoreComponent) && (0 === requestNodeIndex))) {
            return this._VirtualStoreComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_VirtualStoreComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._VirtualStoreComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_VirtualStoreComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_VirtualStoreComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_VirtualStoreComponent_Host0;
}(import1.AppView));
export var VirtualStoreComponentNgFactory = new import8.ComponentFactory('ng-component', View_VirtualStoreComponent_Host0, import0.VirtualStoreComponent);
var styles_VirtualStoreComponent = ['.item-list[_ngcontent-%COMP%] {\n        max-width: 10px;\n        max-height: 100px;\n    }\n\n    .item-img[_ngcontent-%COMP%] {\n        display: block;\n        height: 150px;\n        width: 150px;\n        border-radius: 10%;\n        margin: 10px auto;\n    }\n\n    .img-tag[_ngcontent-%COMP%] {\n        width: 150px;\n        margin: 2px auto;\n    }'];
var renderType_VirtualStoreComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_VirtualStoreComponent, {});
var View_VirtualStoreComponent0 = (function (_super) {
    __extends(View_VirtualStoreComponent0, _super);
    function View_VirtualStoreComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_VirtualStoreComponent0, renderType_VirtualStoreComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_VirtualStoreComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_itemDialog_0 = new import13.QueryList();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_1 = new import14.ViewContainer(1, null, this, this._el_1);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n    ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3, null);
        this._vc_5 = new import14.ViewContainer(5, 3, this, this._anchor_5);
        this._TemplateRef_5_5 = new import16.TemplateRef_(this, 5, this._anchor_5);
        this._NgFor_5_6 = new import15.Wrapper_NgFor(this._vc_5.vcRef, this._TemplateRef_5_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.ref);
        this._text_6 = this.renderer.createText(this._el_3, '\n', null);
        this._viewQuery_itemDialog_0.reset([this._vc_1.vcRef]);
        this.context.itemDialogAnchor = this._viewQuery_itemDialog_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._anchor_5,
            this._text_6
        ]), null);
        return null;
    };
    View_VirtualStoreComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import18.NgFor) && (5 === requestNodeIndex))) {
            return this._NgFor_5_6.context;
        }
        return notFoundResult;
    };
    View_VirtualStoreComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = this.context.virtualStores;
        this._NgFor_5_6.check_ngForOf(currVal_5_0_0, throwOnChange, false);
        this._NgFor_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        this._vc_1.detectChangesInNestedViews(throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
    };
    View_VirtualStoreComponent0.prototype.destroyInternal = function () {
        this._vc_1.destroyNestedViews();
        this._vc_5.destroyNestedViews();
    };
    View_VirtualStoreComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_VirtualStoreComponent1(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        return null;
    };
    return View_VirtualStoreComponent0;
}(import1.AppView));
export { View_VirtualStoreComponent0 };
var View_VirtualStoreComponent1 = (function (_super) {
    __extends(View_VirtualStoreComponent1, _super);
    function View_VirtualStoreComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_VirtualStoreComponent1, renderType_VirtualStoreComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_16 = import19.UNINITIALIZED;
        _this._expr_17 = import19.UNINITIALIZED;
        _this._expr_18 = import19.UNINITIALIZED;
        return _this;
    }
    View_VirtualStoreComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'col-md-4'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'class', 'item-list'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'img', new import3.InlineArray2(2, 'class', 'item-img'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n        ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'img-tag'), null);
        this._text_8 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_7, '\n            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_7, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_7, '\n        ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15
        ]), [disposable_0]);
        return null;
    };
    View_VirtualStoreComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_16 = import3.inlineInterpolate(1, '', this.context.$implicit.screenShotFileName, '');
        if (import3.checkBinding(throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import20.SecurityContext.URL, currVal_16));
            this._expr_16 = currVal_16;
        }
        var currVal_17 = import3.inlineInterpolate(1, '', this.context.$implicit.price, '$');
        if (import3.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setText(this._text_10, currVal_17);
            this._expr_17 = currVal_17;
        }
        var currVal_18 = import3.inlineInterpolate(1, '', this.context.$implicit.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setText(this._text_13, currVal_18);
            this._expr_18 = currVal_18;
        }
    };
    View_VirtualStoreComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_VirtualStoreComponent1.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.openItemDialogAnchor(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_VirtualStoreComponent1;
}(import1.AppView));