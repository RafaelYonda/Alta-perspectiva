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
import * as import0 from './tabs.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/category.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../services/communication.service';
import * as import11 from '@angular/router/src/router';
import * as import12 from './tabs.css.shim.ngstyle';
import * as import13 from '../../../../node_modules/@angular/common/src/directives/ng_style.ngfactory';
import * as import14 from '@angular/core/src/linker/view_container';
import * as import15 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '../../../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/router/src/router_outlet_map';
import * as import22 from '@angular/core/src/linker/component_factory_resolver';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from '@angular/common/src/directives/ng_style';
import * as import25 from '@angular/router/src/directives/router_outlet';
import * as import26 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import27 from '@angular/core/src/change_detection/change_detection_util';
import * as import28 from '@angular/common/src/directives/ng_class';
var Wrapper_TabsComponent = (function () {
    function Wrapper_TabsComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.TabsComponent(p0, p1, p2);
    }
    Wrapper_TabsComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TabsComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_TabsComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TabsComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TabsComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_TabsComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_TabsComponent;
}());
export { Wrapper_TabsComponent };
var renderType_TabsComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_TabsComponent_Host0 = (function (_super) {
    __extends(View_TabsComponent_Host0, _super);
    function View_TabsComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_TabsComponent_Host0, renderType_TabsComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_TabsComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ap-tabs', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_TabsComponent0(this.viewUtils, this, 0, this._el_0);
        this._CategoryService_0_3 = new import5.CategoryService(this.injectorGet(import9.Http, this.parentIndex));
        this._TabsComponent_0_4 = new Wrapper_TabsComponent(this._CategoryService_0_3, this.injectorGet(import10.CommunicationService, this.parentIndex), this.injectorGet(import11.Router, this.parentIndex));
        this.compView_0.create(this._TabsComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._TabsComponent_0_4.context);
    };
    View_TabsComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import5.CategoryService) && (0 === requestNodeIndex))) {
            return this._CategoryService_0_3;
        }
        if (((token === import0.TabsComponent) && (0 === requestNodeIndex))) {
            return this._TabsComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_TabsComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TabsComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_TabsComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_TabsComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TabsComponent_Host0;
}(import1.AppView));
export var TabsComponentNgFactory = new import8.ComponentFactory('ap-tabs', View_TabsComponent_Host0, import0.TabsComponent);
var styles_TabsComponent = [import12.styles];
var renderType_TabsComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_TabsComponent, {});
var View_TabsComponent0 = (function (_super) {
    __extends(View_TabsComponent0, _super);
    function View_TabsComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_TabsComponent0, renderType_TabsComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._map_33 = import3.pureProxy2(function (p0, p1) {
            return {
                transition: p0,
                transform: p1
            };
        });
        return _this;
    }
    View_TabsComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'row hidden-xs', 'id', 'tabs'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'tab-panel-container center-width'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'tab-header-col-md-1 left-arrow'), null);
        this._text_5 = this.renderer.createText(this._el_4, ' ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray2(2, 'class', 'arrow-sign'), null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'icon-arrow-left'), null);
        this._text_8 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'tab-header-col-md-10'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'div', new import3.InlineArray2(2, 'class', 'tabs-container'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'div', new import3.InlineArray2(2, 'class', 'tabs'), null);
        this._NgStyle_13_3 = new import13.Wrapper_NgStyle(this.parentView.injectorGet(import17.KeyValueDiffers, this.parentIndex), new import18.ElementRef(this._el_13), this.renderer);
        this._text_14 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_15 = new import14.ViewContainer(15, 13, this, this._anchor_15);
        this._TemplateRef_15_5 = new import19.TemplateRef_(this, 15, this._anchor_15);
        this._NgFor_15_6 = new import15.Wrapper_NgFor(this._vc_15.vcRef, this._TemplateRef_15_5, this.parentView.injectorGet(import20.IterableDiffers, this.parentIndex), this.ref);
        this._text_16 = this.renderer.createText(this._el_13, '\n                ', null);
        this._text_17 = this.renderer.createText(this._el_11, '\n            ', null);
        this._text_18 = this.renderer.createText(this._el_9, '\n        ', null);
        this._text_19 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'tab-header-col-md-1 right-arrow'), null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_20, 'a', new import3.InlineArray2(2, 'class', 'arrow-sign'), null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'span', new import3.InlineArray2(2, 'class', 'icon-arrow-right'), null);
        this._text_23 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_26 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_26 = new import14.ViewContainer(26, null, this, this._el_26);
        this._RouterOutlet_26_5 = new import16.Wrapper_RouterOutlet(this.parentView.injectorGet(import21.RouterOutletMap, this.parentIndex), this._vc_26.vcRef, this.parentView.injectorGet(import22.ComponentFactoryResolver, this.parentIndex), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_21, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_21));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_TabsComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import23.NgFor) && (15 === requestNodeIndex))) {
            return this._NgFor_15_6.context;
        }
        if (((token === import24.NgStyle) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._NgStyle_13_3.context;
        }
        if (((token === import25.RouterOutlet) && (26 === requestNodeIndex))) {
            return this._RouterOutlet_26_5.context;
        }
        return notFoundResult;
    };
    View_TabsComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_13_0_0 = this._map_33('all 1.5s ease', this.context.translate);
        this._NgStyle_13_3.check_ngStyle(currVal_13_0_0, throwOnChange, false);
        this._NgStyle_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_15_0_0 = this.context.categories;
        this._NgFor_15_6.check_ngForOf(currVal_15_0_0, throwOnChange, false);
        this._NgFor_15_6.ngDoCheck(this, this._anchor_15, throwOnChange);
        this._RouterOutlet_26_5.ngDoCheck(this, this._el_26, throwOnChange);
        this._vc_15.detectChangesInNestedViews(throwOnChange);
        this._vc_26.detectChangesInNestedViews(throwOnChange);
    };
    View_TabsComponent0.prototype.destroyInternal = function () {
        this._vc_15.destroyNestedViews();
        this._vc_26.destroyNestedViews();
        this._RouterOutlet_26_5.ngOnDestroy();
    };
    View_TabsComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 15)) {
            return new View_TabsComponent1(this.viewUtils, this, 15, this._anchor_15, this._vc_15);
        }
        return null;
    };
    View_TabsComponent0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.rightclick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_TabsComponent0.prototype.handleEvent_21 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.leftclick() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TabsComponent0;
}(import1.AppView));
export { View_TabsComponent0 };
var View_TabsComponent1 = (function (_super) {
    __extends(View_TabsComponent1, _super);
    function View_TabsComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_TabsComponent1, renderType_TabsComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_11 = import3.pureProxy1(function (p0) {
            return { active: p0 };
        });
        _this._expr_12 = import27.UNINITIALIZED;
        _this._expr_13 = import27.UNINITIALIZED;
        return _this;
    }
    View_TabsComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'tab'), null);
        this._NgClass_0_3 = new import26.Wrapper_NgClass(this.parentView.parentView.injectorGet(import20.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import17.KeyValueDiffers, this.parentView.parentIndex), new import18.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_4, 'span', new import3.InlineArray2(2, 'class', 'tab-text'), null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_4, ' ', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n                        ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._text_9
        ]), [disposable_0]);
        return null;
    };
    View_TabsComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_TabsComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = 'tab';
        this._NgClass_0_3.check_klass(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = this._map_11(this.context.$implicit.active);
        this._NgClass_0_3.check_ngClass(currVal_0_0_1, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_12 = import3.inlineInterpolate(1, '', this.context.$implicit.icon, '');
        if (import3.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this.renderer.setElementProperty(this._el_4, 'className', currVal_12);
            this._expr_12 = currVal_12;
        }
        var currVal_13 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setText(this._text_6, currVal_13);
            this._expr_13 = currVal_13;
        }
    };
    View_TabsComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TabsComponent1.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.selectTab(this.context.$implicit.id, this.context.$implicit.sequence) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TabsComponent1;
}(import1.AppView));
