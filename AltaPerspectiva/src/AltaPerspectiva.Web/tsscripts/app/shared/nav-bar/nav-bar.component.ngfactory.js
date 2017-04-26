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
import * as import0 from './nav-bar.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '../../services/authentication.service';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/constants';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/linker/component_factory_resolver';
import * as import12 from '@angular/router/src/router';
import * as import13 from './nav-bar.component.css.ngstyle';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import15 from '../search/apsearch.component';
import * as import16 from '../../services/category.service';
import * as import17 from '../../services/question-answer.service';
import * as import18 from '../search/apsearch.component.ngfactory';
import * as import19 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import20 from '@angular/core/src/linker/view_container';
import * as import21 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import22 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import23 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from '../../services/communication.service';
import * as import26 from '../../services/window-ref.service';
import * as import27 from '@angular/router/src/router_state';
import * as import28 from '@angular/common/src/location/location_strategy';
import * as import29 from '@angular/core/src/linker/template_ref';
import * as import30 from '@angular/router/src/directives/router_link';
import * as import31 from '@angular/common/src/directives/ng_if';
import * as import32 from '@angular/common/src/directives/ng_class';
import * as import33 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import34 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import35 from '@angular/forms/src/directives/ng_form';
import * as import36 from '@angular/forms/src/directives/control_container';
import * as import37 from '@angular/forms/src/directives/ng_control_status';
import * as import38 from '@angular/core/src/security';
var Wrapper_NavBarComponent = (function () {
    function Wrapper_NavBarComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.NavBarComponent(p0, p1, p2);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_NavBarComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NavBarComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_NavBarComponent.prototype.check_className = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.className = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NavBarComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_NavBarComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NavBarComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NavBarComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NavBarComponent;
}());
export { Wrapper_NavBarComponent };
var renderType_NavBarComponent_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_NavBarComponent_Host0 = (function (_super) {
    __extends(View_NavBarComponent_Host0, _super);
    function View_NavBarComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_NavBarComponent_Host0, renderType_NavBarComponent_Host, import7.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_NavBarComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'nav-bar', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_NavBarComponent0(this.viewUtils, this, 0, this._el_0);
        this._AuthenticationService_0_3 = new import6.AuthenticationService(this.injectorGet(import10.Http, this.parentIndex));
        this._NavBarComponent_0_4 = new Wrapper_NavBarComponent(this._AuthenticationService_0_3, this.injectorGet(import11.ComponentFactoryResolver, this.parentIndex), this.injectorGet(import12.Router, this.parentIndex));
        this.compView_0.create(this._NavBarComponent_0_4.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._NavBarComponent_0_4.context);
    };
    View_NavBarComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import6.AuthenticationService) && (0 === requestNodeIndex))) {
            return this._AuthenticationService_0_3;
        }
        if (((token === import0.NavBarComponent) && (0 === requestNodeIndex))) {
            return this._NavBarComponent_0_4.context;
        }
        return notFoundResult;
    };
    View_NavBarComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavBarComponent_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NavBarComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_NavBarComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NavBarComponent_Host0;
}(import2.AppView));
export var NavBarComponentNgFactory = new import9.ComponentFactory('nav-bar', View_NavBarComponent_Host0, import0.NavBarComponent);
var styles_NavBarComponent = [import13.styles];
var renderType_NavBarComponent = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_NavBarComponent, {});
var View_NavBarComponent0 = (function (_super) {
    __extends(View_NavBarComponent0, _super);
    function View_NavBarComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_NavBarComponent0, renderType_NavBarComponent, import7.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_NavBarComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'navbar navbar-inverse navbar-fixed-top z-header nav-shadow'), null);
        this._NgClass_0_3 = new import14.Wrapper_NgClass(this.parentView.injectorGet(import22.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import23.KeyValueDiffers, this.parentIndex), new import24.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ap-search', new import3.InlineArray2(2, 'placeBottom', 'top-fixed'), null);
        this.compView_2 = new import18.View_ApSearchComponent0(this.viewUtils, this, 2, this._el_2);
        this._CategoryService_2_3 = new import16.CategoryService(this.parentView.injectorGet(import10.Http, this.parentIndex));
        this._QuestionAnswerService_2_4 = new import17.QuestionAnswerService(this.parentView.injectorGet(import10.Http, this.parentIndex));
        this._ApSearchComponent_2_5 = new import18.Wrapper_ApSearchComponent(this.parentView.injectorGet(import11.ComponentFactoryResolver, this.parentIndex), this.parentView.injectorGet(import12.Router, this.parentIndex), this._CategoryService_2_3, this._QuestionAnswerService_2_4, this.parentView.injectorGet(import25.CommunicationService, this.parentIndex), new import24.ElementRef(this._el_2), this.parentView.injectorGet(import26.WindowRefService, this.parentIndex));
        this.compView_2.create(this._ApSearchComponent_2_5.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray8(8, 'asp-action', 'Index', 'asp-area', '', 'asp-controller', 'Home', 'class', 'navbar-brand logo'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_8_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import27.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import28.LocationStrategy, this.parentIndex));
        this._el_9 = import3.createRenderElement(this.renderer, this._el_8, 'img', new import3.InlineArray4(4, 'class', 'navbar-brand logo', 'src', '../images/LOGO CUADRADO.png'), null);
        this._text_10 = this.renderer.createText(this._el_6, '\n        ', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n    ', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'navbar-collapse collapse'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'li', new import3.InlineArray2(2, 'class', 'nav-home'), null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_17, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_18_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import27.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import28.LocationStrategy, this.parentIndex));
        this._text_19 = this.renderer.createText(this._el_18, 'Alta Perspectiva', null);
        this._text_20 = this.renderer.createText(this._el_15, '\n            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_15, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_21, 'a', new import3.InlineArray2(2, 'routerLink', '/question/home/1'), null);
        this._RouterLinkWithHref_22_3 = new import19.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import27.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import28.LocationStrategy, this.parentIndex));
        this._text_23 = this.renderer.createText(this._el_22, 'Responder', null);
        this._text_24 = this.renderer.createText(this._el_15, '\n        ', null);
        this._text_25 = this.renderer.createText(this._el_13, '\n        ', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_26 = new import20.ViewContainer(26, 13, this, this._anchor_26);
        this._TemplateRef_26_5 = new import29.TemplateRef_(this, 26, this._anchor_26);
        this._NgIf_26_6 = new import21.Wrapper_NgIf(this._vc_26.vcRef, this._TemplateRef_26_5);
        this._text_27 = this.renderer.createText(this._el_13, '\n        ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_28 = new import20.ViewContainer(28, 13, this, this._anchor_28);
        this._TemplateRef_28_5 = new import29.TemplateRef_(this, 28, this._anchor_28);
        this._NgIf_28_6 = new import21.Wrapper_NgIf(this._vc_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_30 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray16(12, 'aria-controls', 'navbar', 'aria-expanded', 'false', 'class', 'navbar-toggle collapsed', 'data-target', '#navbar', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_31, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_34 = this.renderer.createText(this._el_33, 'Toggle navigation', null);
        this._text_35 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_31, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_37 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_31, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_39 = this.renderer.createText(this._el_31, '\n        ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_31, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_41 = this.renderer.createText(this._el_31, '\n    ', null);
        this._text_42 = this.renderer.createText(this._el_0, '\n', null);
        this._text_43 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_44 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_45 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'style', 'margin-top:100px;'), null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_22, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_22));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_31, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_31));
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
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._anchor_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._el_45
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_NavBarComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import16.CategoryService) && (2 === requestNodeIndex))) {
            return this._CategoryService_2_3;
        }
        if (((token === import17.QuestionAnswerService) && (2 === requestNodeIndex))) {
            return this._QuestionAnswerService_2_4;
        }
        if (((token === import15.ApSearchComponent) && (2 === requestNodeIndex))) {
            return this._ApSearchComponent_2_5.context;
        }
        if (((token === import30.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkWithHref_8_3.context;
        }
        if (((token === import30.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._RouterLinkWithHref_18_3.context;
        }
        if (((token === import30.RouterLinkWithHref) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._RouterLinkWithHref_22_3.context;
        }
        if (((token === import29.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import31.NgIf) && (26 === requestNodeIndex))) {
            return this._NgIf_26_6.context;
        }
        if (((token === import29.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import31.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        if (((token === import32.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 42)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_NavBarComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = 'navbar navbar-inverse navbar-fixed-top z-header nav-shadow';
        this._NgClass_0_3.check_klass(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = this.context.className;
        this._NgClass_0_3.check_ngClass(currVal_0_0_1, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_2_0_0 = 'top-fixed';
        this._ApSearchComponent_2_5.check_placeBottom(currVal_2_0_0, throwOnChange, false);
        this._ApSearchComponent_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_8_0_0 = '/';
        this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0, throwOnChange, false);
        this._RouterLinkWithHref_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_18_0_0 = '/';
        this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0, throwOnChange, false);
        this._RouterLinkWithHref_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_22_0_0 = '/question/home/1';
        this._RouterLinkWithHref_22_3.check_routerLink(currVal_22_0_0, throwOnChange, false);
        this._RouterLinkWithHref_22_3.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_26_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_26_6.check_ngIf(currVal_26_0_0, throwOnChange, false);
        this._NgIf_26_6.ngDoCheck(this, this._anchor_26, throwOnChange);
        var currVal_28_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        this._vc_26.detectChangesInNestedViews(throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_8_3.checkHost(this, this, this._el_8, throwOnChange);
        this._RouterLinkWithHref_18_3.checkHost(this, this, this._el_18, throwOnChange);
        this._RouterLinkWithHref_22_3.checkHost(this, this, this._el_22, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_NavBarComponent0.prototype.destroyInternal = function () {
        this._vc_26.destroyNestedViews();
        this._vc_28.destroyNestedViews();
        this.compView_2.destroy();
        this._ApSearchComponent_2_5.ngOnDestroy();
        this._RouterLinkWithHref_8_3.ngOnDestroy();
        this._RouterLinkWithHref_18_3.ngOnDestroy();
        this._RouterLinkWithHref_22_3.ngOnDestroy();
    };
    View_NavBarComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 26)) {
            return new View_NavBarComponent1(this.viewUtils, this, 26, this._anchor_26, this._vc_26);
        }
        if ((nodeIndex == 28)) {
            return new View_NavBarComponent2(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        return null;
    };
    View_NavBarComponent0.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_8_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_NavBarComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_18_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_NavBarComponent0.prototype.handleEvent_22 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_22_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_NavBarComponent0.prototype.handleEvent_31 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.togglemenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_NavBarComponent0;
}(import2.AppView));
export { View_NavBarComponent0 };
var View_NavBarComponent1 = (function (_super) {
    __extends(View_NavBarComponent1, _super);
    function View_NavBarComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_NavBarComponent1, renderType_NavBarComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_NavBarComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav navbar-right'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_4 = this.renderer.createText(this._el_3, 'Iniciar sesión ', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_6, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Regístrate ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n        ', null);
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
    View_NavBarComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NavBarComponent1;
}(import2.AppView));
var View_NavBarComponent2 = (function (_super) {
    __extends(View_NavBarComponent2, _super);
    function View_NavBarComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_NavBarComponent2, renderType_NavBarComponent, import7.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import8.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_49 = import1.UNINITIALIZED;
        _this._expr_50 = import1.UNINITIALIZED;
        return _this;
    }
    View_NavBarComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'nav navbar-right'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray8(8, 'aria-expanded', 'false', 'class', 'dropdown-toggle fixed-height', 'data-toggle', 'dropdown', 'href', '#'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'img', new import3.InlineArray2(2, 'class', 'user-image img-circle'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'nav-user-info'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n            ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'dropdown-menu dropdown-menu-right', 'role', 'menu'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'form', new import3.InlineArray4(4, 'class', 'form-horizontal', 'role', 'form'), null);
        this._NgForm_13_3 = new import33.Wrapper_NgForm(null, null);
        this._ControlContainer_13_4 = this._NgForm_13_3.context;
        this._NgControlStatusGroup_13_5 = new import34.Wrapper_NgControlStatusGroup(this._ControlContainer_13_4);
        this._text_14 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_17, 'span', new import3.InlineArray2(2, 'class', 'fa fa-user'), null);
        this._text_19 = this.renderer.createText(this._el_17, ' ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_17, 'a', new import3.InlineArray4(4, 'data-toggle', 'dropdown', 'for', 'contain'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Perfil ', null);
        this._text_22 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._text_23 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n                        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_26, 'span', new import3.InlineArray2(2, 'class', 'fa fa-key'), null);
        this._text_28 = this.renderer.createText(this._el_26, ' ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_26, 'a', new import3.InlineArray4(4, 'for', 'contain', 'href', 'http://altaauth.azurewebsites.net/Manage/ChangePassword'), null);
        this._text_30 = this.renderer.createText(this._el_29, ' Contraseña', null);
        this._text_31 = this.renderer.createText(this._el_29, ' ', null);
        this._text_32 = this.renderer.createText(this._el_24, '\n                    ', null);
        this._text_33 = this.renderer.createText(this._el_13, '\n                    ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_13, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_35 = this.renderer.createText(this._el_34, '\n                        ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_34, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_36, 'span', new import3.InlineArray2(2, 'class', 'fa fa-sign-out'), null);
        this._text_38 = this.renderer.createText(this._el_36, ' ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_36, 'a', new import3.InlineArray4(4, 'for', 'contain', 'href', '/signout'), null);
        this._text_40 = this.renderer.createText(this._el_39, 'Cerrar sesión ', null);
        this._text_41 = this.renderer.createText(this._el_39, ' ', null);
        this._text_42 = this.renderer.createText(this._el_34, '\n                    ', null);
        this._text_43 = this.renderer.createText(this._el_13, '\n                ', null);
        this._text_44 = this.renderer.createText(this._el_11, '\n            ', null);
        this._text_45 = this.renderer.createText(this._el_0, '\n        ', null);
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
    View_NavBarComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.NgForm) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._NgForm_13_3.context;
        }
        if (((token === import36.ControlContainer) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._ControlContainer_13_4;
        }
        if (((token === import37.NgControlStatusGroup) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._NgControlStatusGroup_13_5.context;
        }
        return notFoundResult;
    };
    View_NavBarComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_13_3.ngDoCheck(this, this._el_13, throwOnChange);
        this._NgControlStatusGroup_13_5.ngDoCheck(this, this._el_13, throwOnChange);
        var currVal_49 = import3.inlineInterpolate(1, '', this.parentView.context._logObj.user.imageUrl, '');
        if (import3.checkBinding(throwOnChange, this._expr_49, currVal_49)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import38.SecurityContext.URL, currVal_49));
            this._expr_49 = currVal_49;
        }
        var currVal_50 = import3.inlineInterpolate(1, '', this.parentView.context._logObj.user.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_50, currVal_50)) {
            this.renderer.setText(this._text_7, currVal_50);
            this._expr_50 = currVal_50;
        }
        this._NgControlStatusGroup_13_5.checkHost(this, this, this._el_13, throwOnChange);
    };
    View_NavBarComponent2.prototype.destroyInternal = function () {
        this._NgForm_13_3.ngOnDestroy();
    };
    View_NavBarComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_NavBarComponent2.prototype.handleEvent_13 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_13_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_NavBarComponent2.prototype.handleEvent_20 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.gotoProfile() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_NavBarComponent2;
}(import2.AppView));
