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
import * as import0 from './apnav';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/authentication.service';
import * as import7 from '../../services/profile.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/core/src/linker/component_factory_resolver';
import * as import13 from '@angular/router/src/router';
import * as import14 from '../../services/communication.service';
import * as import15 from './apNav.css.ngstyle';
import * as import16 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import17 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import18 from '@angular/core/src/linker/view_container';
import * as import19 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import21 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from '@angular/router/src/router_state';
import * as import24 from '@angular/common/src/location/location_strategy';
import * as import25 from '@angular/core/src/linker/template_ref';
import * as import26 from '@angular/router/src/directives/router_link';
import * as import27 from '@angular/common/src/directives/ng_if';
import * as import28 from '@angular/common/src/directives/ng_class';
import * as import29 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import30 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import31 from '@angular/forms/src/directives/ng_form';
import * as import32 from '@angular/forms/src/directives/control_container';
import * as import33 from '@angular/forms/src/directives/ng_control_status';
import * as import34 from '@angular/core/src/security';
var Wrapper_ApNav = (function () {
    function Wrapper_ApNav(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.ApNav(p0, p1, p2, p3, p4);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_ApNav.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ApNav.prototype.ngOnDestroy = function () {
    };
    Wrapper_ApNav.prototype.check_className = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.className = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_ApNav.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ApNav.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ApNav.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ApNav.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ApNav;
}());
export { Wrapper_ApNav };
var renderType_ApNav_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_ApNav_Host0 = (function (_super) {
    __extends(View_ApNav_Host0, _super);
    function View_ApNav_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ApNav_Host0, renderType_ApNav_Host, import8.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ApNav_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ap-nav', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ApNav0(this.viewUtils, this, 0, this._el_0);
        this._AuthenticationService_0_3 = new import6.AuthenticationService(this.injectorGet(import11.Http, this.parentIndex));
        this._ProfileService_0_4 = new import7.ProfileService(this.injectorGet(import11.Http, this.parentIndex));
        this._ApNav_0_5 = new Wrapper_ApNav(this._AuthenticationService_0_3, this._ProfileService_0_4, this.injectorGet(import12.ComponentFactoryResolver, this.parentIndex), this.injectorGet(import13.Router, this.parentIndex), this.injectorGet(import14.CommunicationService, this.parentIndex));
        this.compView_0.create(this._ApNav_0_5.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import10.ComponentRef_(0, this, this._el_0, this._ApNav_0_5.context);
    };
    View_ApNav_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_3;
        }
        if (((token === import7.ProfileService) && (0 === requestNodeIndex))) {
            return this._ProfileService_0_4;
        }
        if (((token === import0.ApNav) && (0 === requestNodeIndex))) {
            return this._ApNav_0_5.context;
        }
        return notFoundResult;
    };
    View_ApNav_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ApNav_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ApNav_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ApNav_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ApNav_Host0;
}(import2.AppView));
export var ApNavNgFactory = new import10.ComponentFactory('ap-nav', View_ApNav_Host0, import0.ApNav);
var styles_ApNav = [import15.styles];
var renderType_ApNav = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_ApNav, {});
var View_ApNav0 = (function (_super) {
    __extends(View_ApNav0, _super);
    function View_ApNav0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ApNav0, renderType_ApNav, import8.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ApNav0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'navbar navbar-inverse navbar-fixed-top z-header nav-shadow'), null);
        this._NgClass_0_3 = new import16.Wrapper_NgClass(this.parentView.injectorGet(import20.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import21.KeyValueDiffers, this.parentIndex), new import22.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray8(8, 'asp-action', 'Index', 'asp-area', '', 'asp-controller', 'Home', 'class', 'navbar-brand logo'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_6_3 = new import17.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import23.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import24.LocationStrategy, this.parentIndex));
        this._el_7 = import3.createRenderElement(this.renderer, this._el_6, 'img', new import3.InlineArray4(4, 'class', 'navbar-brand logo', 'src', '../images/LOGO CUADRADO.png'), null);
        this._text_8 = this.renderer.createText(this._el_4, '            \n        ', null);
        this._text_9 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'navbar-collapse collapse'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'li', new import3.InlineArray2(2, 'class', 'nav-home'), null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_15, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_16_3 = new import17.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import23.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import24.LocationStrategy, this.parentIndex));
        this._text_17 = this.renderer.createText(this._el_16, 'Alta Perspectiva', null);
        this._text_18 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_13, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'routerLink', '/question/home/1'), null);
        this._RouterLinkWithHref_20_3 = new import17.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import23.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import24.LocationStrategy, this.parentIndex));
        this._text_21 = this.renderer.createText(this._el_20, 'Responder', null);
        this._text_22 = this.renderer.createText(this._el_13, '\n        ', null);
        this._text_23 = this.renderer.createText(this._el_11, '\n        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._vc_24 = new import18.ViewContainer(24, 11, this, this._anchor_24);
        this._TemplateRef_24_5 = new import25.TemplateRef_(this, 24, this._anchor_24);
        this._NgIf_24_6 = new import19.Wrapper_NgIf(this._vc_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_11, '\n        \n    ', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray16(12, 'aria-controls', 'navbar', 'aria-expanded', 'false', 'class', 'navbar-toggle collapsed', 'data-target', '#navbar', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n        ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_30 = this.renderer.createText(this._el_29, 'Toggle navigation', null);
        this._text_31 = this.renderer.createText(this._el_27, '\n        ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_27, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_33 = this.renderer.createText(this._el_27, '\n        ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_27, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_35 = this.renderer.createText(this._el_27, '\n        ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_27, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_37 = this.renderer.createText(this._el_27, '\n    ', null);
        this._text_38 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_6));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_16, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_16));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_20));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_27));
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
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_ApNav0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.RouterLinkWithHref) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._RouterLinkWithHref_6_3.context;
        }
        if (((token === import26.RouterLinkWithHref) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._RouterLinkWithHref_16_3.context;
        }
        if (((token === import26.RouterLinkWithHref) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._RouterLinkWithHref_20_3.context;
        }
        if (((token === import25.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import27.NgIf) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        if (((token === import28.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_ApNav0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = 'navbar navbar-inverse navbar-fixed-top z-header nav-shadow';
        this._NgClass_0_3.check_klass(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = this.context.className;
        this._NgClass_0_3.check_ngClass(currVal_0_0_1, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_6_0_0 = '/';
        this._RouterLinkWithHref_6_3.check_routerLink(currVal_6_0_0, throwOnChange, false);
        this._RouterLinkWithHref_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        var currVal_16_0_0 = '/';
        this._RouterLinkWithHref_16_3.check_routerLink(currVal_16_0_0, throwOnChange, false);
        this._RouterLinkWithHref_16_3.ngDoCheck(this, this._el_16, throwOnChange);
        var currVal_20_0_0 = '/question/home/1';
        this._RouterLinkWithHref_20_3.check_routerLink(currVal_20_0_0, throwOnChange, false);
        this._RouterLinkWithHref_20_3.ngDoCheck(this, this._el_20, throwOnChange);
        var currVal_24_0_0 = this.context._logObj;
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_6_3.checkHost(this, this, this._el_6, throwOnChange);
        this._RouterLinkWithHref_16_3.checkHost(this, this, this._el_16, throwOnChange);
        this._RouterLinkWithHref_20_3.checkHost(this, this, this._el_20, throwOnChange);
    };
    View_ApNav0.prototype.destroyInternal = function () {
        this._vc_24.destroyNestedViews();
        this._RouterLinkWithHref_6_3.ngOnDestroy();
        this._RouterLinkWithHref_16_3.ngOnDestroy();
        this._RouterLinkWithHref_20_3.ngOnDestroy();
    };
    View_ApNav0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 24)) {
            return new View_ApNav1(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        return null;
    };
    View_ApNav0.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_6_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_ApNav0.prototype.handleEvent_16 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_16_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_ApNav0.prototype.handleEvent_20 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_20_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_ApNav0.prototype.handleEvent_27 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.togglemenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ApNav0;
}(import2.AppView));
export { View_ApNav0 };
var View_ApNav1 = (function (_super) {
    __extends(View_ApNav1, _super);
    function View_ApNav1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ApNav1, renderType_ApNav, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ApNav1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import18.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import25.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import19.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n            ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new import18.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import25.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import19.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5
        ]), null);
        return null;
    };
    View_ApNav1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import27.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import25.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import27.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        return notFoundResult;
    };
    View_ApNav1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context._logObj.isLoggedIn;
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_4_0_0 = this.parentView.context._logObj.isLoggedIn;
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
    };
    View_ApNav1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_4.destroyNestedViews();
    };
    View_ApNav1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ApNav1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_ApNav2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 4)) {
            return new View_ApNav3(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    };
    return View_ApNav1;
}(import2.AppView));
var View_ApNav2 = (function (_super) {
    __extends(View_ApNav2, _super);
    function View_ApNav2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ApNav2, renderType_ApNav, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ApNav2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav navbar-right'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_4 = this.renderer.createText(this._el_3, 'Iniciar sesión ', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_6, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Regístrate ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._el_7,
            this._text_8,
            this._text_9
        ]), null);
        return null;
    };
    View_ApNav2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ApNav2;
}(import2.AppView));
var View_ApNav3 = (function (_super) {
    __extends(View_ApNav3, _super);
    function View_ApNav3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ApNav3, renderType_ApNav, import8.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import9.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_49 = import1.UNINITIALIZED;
        _this._expr_50 = import1.UNINITIALIZED;
        return _this;
    }
    View_ApNav3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'navbar-right'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray8(8, 'aria-expanded', 'false', 'class', 'dropdown-toggle fixed-height', 'data-toggle', 'dropdown', 'href', '#'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'img', new import3.InlineArray2(2, 'class', 'user-image img-circle'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'nav-user-info'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n                ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n                ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'dropdown-menu dropdown-menu-right', 'role', 'menu'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n                    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'form', new import3.InlineArray4(4, 'class', 'form-horizontal', 'role', 'form'), null);
        this._NgForm_13_3 = new import29.Wrapper_NgForm(null, null);
        this._ControlContainer_13_4 = this._NgForm_13_3.context;
        this._NgControlStatusGroup_13_5 = new import30.Wrapper_NgControlStatusGroup(this._ControlContainer_13_4);
        this._text_14 = this.renderer.createText(this._el_13, '\n                        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_17, 'span', new import3.InlineArray2(2, 'class', 'fa fa-user'), null);
        this._text_19 = this.renderer.createText(this._el_17, ' ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_17, 'a', new import3.InlineArray4(4, 'data-toggle', 'dropdown', 'for', 'contain'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Perfil ', null);
        this._text_22 = this.renderer.createText(this._el_15, '\n                        ', null);
        this._text_23 = this.renderer.createText(this._el_13, '\n                        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n                            ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_26, 'span', new import3.InlineArray2(2, 'class', 'fa fa-key'), null);
        this._text_28 = this.renderer.createText(this._el_26, ' ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_26, 'a', new import3.InlineArray4(4, 'for', 'contain', 'href', 'http://altaauth.azurewebsites.net/Manage/ChangePassword'), null);
        this._text_30 = this.renderer.createText(this._el_29, ' Contraseña', null);
        this._text_31 = this.renderer.createText(this._el_29, ' ', null);
        this._text_32 = this.renderer.createText(this._el_24, '\n                        ', null);
        this._text_33 = this.renderer.createText(this._el_13, '\n                        ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_35 = this.renderer.createText(this._el_34, '\n                            ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_34, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_36, 'span', new import3.InlineArray2(2, 'class', 'fa fa-sign-out'), null);
        this._text_38 = this.renderer.createText(this._el_36, ' ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_36, 'a', new import3.InlineArray4(4, 'for', 'contain', 'href', '/signout'), null);
        this._text_40 = this.renderer.createText(this._el_39, 'Cerrar sesión ', null);
        this._text_41 = this.renderer.createText(this._el_39, ' ', null);
        this._text_42 = this.renderer.createText(this._el_34, '\n                        ', null);
        this._text_43 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._text_44 = this.renderer.createText(this._el_11, '\n                ', null);
        this._text_45 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_13, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_13));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_20));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._text_45
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_ApNav3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import31.NgForm) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._NgForm_13_3.context;
        }
        if (((token === import32.ControlContainer) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._ControlContainer_13_4;
        }
        if (((token === import33.NgControlStatusGroup) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._NgControlStatusGroup_13_5.context;
        }
        return notFoundResult;
    };
    View_ApNav3.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        this._NgControlStatusGroup_13_5.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_49 = import3.inlineInterpolate(1, '', this.parentView.parentView.context._logObj.user.imageUrl, '');
        if (import3.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import34.SecurityContext.URL, currVal_49));
            this._expr_49 = currVal_49;
        }
        var currVal_50 = import3.inlineInterpolate(1, '', this.parentView.parentView.context._logObj.user.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setText(this._text_7, currVal_50);
            this._expr_50 = currVal_50;
        }
        this._NgControlStatusGroup_13_5.checkHost(this, this, this._el_13, throwOnChange);
    };
    View_ApNav3.prototype.destroyInternal = function () {
        this._NgForm_13_3.ngOnDestroy();
    };
    View_ApNav3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ApNav3.prototype.handleEvent_13 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_13_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_ApNav3.prototype.handleEvent_20 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.gotoProfile() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ApNav3;
}(import2.AppView));
