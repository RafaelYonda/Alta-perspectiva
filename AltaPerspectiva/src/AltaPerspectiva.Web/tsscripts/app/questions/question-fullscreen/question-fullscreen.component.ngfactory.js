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
import * as import0 from './question-fullscreen.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../services/resolve.services/question.resolver';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/http/src/http';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '../../shared/answer-submit/answer-submit.component';
import * as import16 from '../../services/question-answer.service';
import * as import17 from '../../services/profile.service';
import * as import18 from '../../shared/answer-submit/answer-submit.component.ngfactory';
import * as import19 from '@angular/common/src/location/location_strategy';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '../../services/authentication.service';
import * as import22 from 'ng2-toastr/src/toast-manager';
import * as import23 from '@angular/router/src/directives/router_link';
import * as import24 from '@angular/common/src/directives/ng_if';
var Wrapper_QuestionFullscreenComponent = (function () {
    function Wrapper_QuestionFullscreenComponent(p0, p1) {
        this._changed = false;
        this.context = new import0.QuestionFullscreenComponent(p0, p1);
    }
    Wrapper_QuestionFullscreenComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_QuestionFullscreenComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_QuestionFullscreenComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_QuestionFullscreenComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_QuestionFullscreenComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_QuestionFullscreenComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_QuestionFullscreenComponent;
}());
export { Wrapper_QuestionFullscreenComponent };
var renderType_QuestionFullscreenComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_QuestionFullscreenComponent_Host0 = (function (_super) {
    __extends(View_QuestionFullscreenComponent_Host0, _super);
    function View_QuestionFullscreenComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionFullscreenComponent_Host0, renderType_QuestionFullscreenComponent_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    Object.defineProperty(View_QuestionFullscreenComponent_Host0.prototype, "_QuestionResolver_0_4", {
        get: function () {
            if ((this.__QuestionResolver_0_4 == null)) {
                (this.__QuestionResolver_0_4 = new import5.QuestionResolver(this.injectorGet(import8.Http, this.parentIndex)));
            }
            return this.__QuestionResolver_0_4;
        },
        enumerable: true,
        configurable: true
    });
    View_QuestionFullscreenComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_QuestionFullscreenComponent0(this.viewUtils, this, 0, this._el_0);
        this._QuestionFullscreenComponent_0_3 = new Wrapper_QuestionFullscreenComponent(this.injectorGet(import10.Router, this.parentIndex), this.injectorGet(import11.ActivatedRoute, this.parentIndex));
        this.compView_0.create(this._QuestionFullscreenComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import9.ComponentRef_(0, this, this._el_0, this._QuestionFullscreenComponent_0_3.context);
    };
    View_QuestionFullscreenComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.QuestionFullscreenComponent) && (0 === requestNodeIndex))) {
            return this._QuestionFullscreenComponent_0_3.context;
        }
        if (((token === import5.QuestionResolver) && (0 === requestNodeIndex))) {
            return this._QuestionResolver_0_4;
        }
        return notFoundResult;
    };
    View_QuestionFullscreenComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._QuestionFullscreenComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_QuestionFullscreenComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_QuestionFullscreenComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionFullscreenComponent_Host0;
}(import1.AppView));
export var QuestionFullscreenComponentNgFactory = new import9.ComponentFactory('ng-component', View_QuestionFullscreenComponent_Host0, import0.QuestionFullscreenComponent);
var styles_QuestionFullscreenComponent = ['.fullscreen[_ngcontent-%COMP%]{\n        width:60%;\n        margin:20px auto;\n    }'];
var renderType_QuestionFullscreenComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_QuestionFullscreenComponent, {});
var View_QuestionFullscreenComponent0 = (function (_super) {
    __extends(View_QuestionFullscreenComponent0, _super);
    function View_QuestionFullscreenComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_QuestionFullscreenComponent0, renderType_QuestionFullscreenComponent, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_QuestionFullscreenComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray4(4, 'class', 'left-panel category-panel-xs', 'id', 'toggleMenu'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n    ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'menu-container visible-xs'), null);
        this._text_4 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_3, 'div', new import3.InlineArray2(2, 'class', 'cloe-button'), null);
        this._text_6 = this.renderer.createText(this._el_5, '\n            ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, ' ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'i', new import3.InlineArray2(2, 'class', 'fa fa-arrow-left'), null);
        this._text_10 = this.renderer.createText(this._el_7, ' ', null);
        this._text_11 = this.renderer.createText(this._el_5, '\n        ', null);
        this._text_12 = this.renderer.createText(this._el_3, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_3, 'ul', new import3.InlineArray2(2, 'class', 'left-panel-list'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'li', new import3.InlineArray2(2, 'class', ''), null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_15, 'a', new import3.InlineArray2(2, 'routerLink', '/'), null);
        this._RouterLinkWithHref_16_3 = new import12.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import10.Router, this.parentIndex), this.parentView.injectorGet(import11.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import19.LocationStrategy, this.parentIndex));
        this._text_17 = this.renderer.createText(this._el_16, 'Alta Perspectiva', null);
        this._text_18 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_13, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_19, 'a', new import3.InlineArray2(2, 'routerLink', '/question/home/1'), null);
        this._RouterLinkWithHref_20_3 = new import12.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import10.Router, this.parentIndex), this.parentView.injectorGet(import11.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import19.LocationStrategy, this.parentIndex));
        this._text_21 = this.renderer.createText(this._el_20, 'Preguntas', null);
        this._text_22 = this.renderer.createText(this._el_13, '\n            ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_23 = new import13.ViewContainer(23, 13, this, this._anchor_23);
        this._TemplateRef_23_5 = new import20.TemplateRef_(this, 23, this._anchor_23);
        this._NgIf_23_6 = new import14.Wrapper_NgIf(this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_13, '\n            ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_25 = new import13.ViewContainer(25, 13, this, this._anchor_25);
        this._TemplateRef_25_5 = new import20.TemplateRef_(this, 25, this._anchor_25);
        this._NgIf_25_6 = new import14.Wrapper_NgIf(this._vc_25.vcRef, this._TemplateRef_25_5);
        this._text_26 = this.renderer.createText(this._el_13, '\n            ', null);
        this._anchor_27 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_27 = new import13.ViewContainer(27, 13, this, this._anchor_27);
        this._TemplateRef_27_5 = new import20.TemplateRef_(this, 27, this._anchor_27);
        this._NgIf_27_6 = new import14.Wrapper_NgIf(this._vc_27.vcRef, this._TemplateRef_27_5);
        this._text_28 = this.renderer.createText(this._el_13, '\n            ', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_29 = new import13.ViewContainer(29, 13, this, this._anchor_29);
        this._TemplateRef_29_5 = new import20.TemplateRef_(this, 29, this._anchor_29);
        this._NgIf_29_6 = new import14.Wrapper_NgIf(this._vc_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_13, '\n        ', null);
        this._text_31 = this.renderer.createText(this._el_3, '\n    ', null);
        this._text_32 = this.renderer.createText(this._el_1, '\n', null);
        this._text_33 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_34 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'fullscreen'), null);
        this._text_35 = this.renderer.createText(this._el_34, '\n    ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_34, 'answer-submit', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_36 = new import13.ViewContainer(36, 34, this, this._el_36);
        this.compView_36 = new import18.View_AnswerSubmitComponent0(this.viewUtils, this, 36, this._el_36);
        this._QuestionAnswerService_36_5 = new import16.QuestionAnswerService(this.parentView.injectorGet(import8.Http, this.parentIndex));
        this._ProfileService_36_6 = new import17.ProfileService(this.parentView.injectorGet(import8.Http, this.parentIndex));
        this._AnswerSubmitComponent_36_7 = new import18.Wrapper_AnswerSubmitComponent(this._QuestionAnswerService_36_5, this.parentView.injectorGet(import10.Router, this.parentIndex), this._ProfileService_36_6, this.parentView.injectorGet(import21.AuthenticationService, this.parentIndex), this.parentView.injectorGet(import22.ToastsManager, this.parentIndex), this._vc_36.vcRef);
        this.compView_36.create(this._AnswerSubmitComponent_36_7.context);
        this._text_37 = this.renderer.createText(this._el_34, '\n', null);
        this._text_38 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_16, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_16));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_20));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
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
            this._anchor_23,
            this._text_24,
            this._anchor_25,
            this._text_26,
            this._anchor_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_QuestionFullscreenComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.RouterLinkWithHref) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._RouterLinkWithHref_16_3.context;
        }
        if (((token === import23.RouterLinkWithHref) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) {
            return this._RouterLinkWithHref_20_3.context;
        }
        if (((token === import20.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import24.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import20.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import24.NgIf) && (25 === requestNodeIndex))) {
            return this._NgIf_25_6.context;
        }
        if (((token === import20.TemplateRef) && (27 === requestNodeIndex))) {
            return this._TemplateRef_27_5;
        }
        if (((token === import24.NgIf) && (27 === requestNodeIndex))) {
            return this._NgIf_27_6.context;
        }
        if (((token === import20.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import24.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import16.QuestionAnswerService) && (36 === requestNodeIndex))) {
            return this._QuestionAnswerService_36_5;
        }
        if (((token === import17.ProfileService) && (36 === requestNodeIndex))) {
            return this._ProfileService_36_6;
        }
        if (((token === import15.AnswerSubmitComponent) && (36 === requestNodeIndex))) {
            return this._AnswerSubmitComponent_36_7.context;
        }
        return notFoundResult;
    };
    View_QuestionFullscreenComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_16_0_0 = '/';
        this._RouterLinkWithHref_16_3.check_routerLink(currVal_16_0_0, throwOnChange, false);
        this._RouterLinkWithHref_16_3.ngDoCheck(this, this._el_16, throwOnChange);
        var currVal_20_0_0 = '/question/home/1';
        this._RouterLinkWithHref_20_3.check_routerLink(currVal_20_0_0, throwOnChange, false);
        this._RouterLinkWithHref_20_3.ngDoCheck(this, this._el_20, throwOnChange);
        var currVal_23_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        var currVal_25_0_0 = this.context._logObj.isLoggedIn;
        this._NgIf_25_6.check_ngIf(currVal_25_0_0, throwOnChange, false);
        this._NgIf_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        var currVal_27_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_27_6.check_ngIf(currVal_27_0_0, throwOnChange, false);
        this._NgIf_27_6.ngDoCheck(this, this._anchor_27, throwOnChange);
        var currVal_29_0_0 = !this.context._logObj.isLoggedIn;
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.ngDoCheck(this, this._anchor_29, throwOnChange);
        var currVal_36_0_0 = this.context.question;
        this._AnswerSubmitComponent_36_7.check_question(currVal_36_0_0, throwOnChange, false);
        var currVal_36_0_1 = true;
        this._AnswerSubmitComponent_36_7.check_isFullScreen(currVal_36_0_1, throwOnChange, false);
        this._AnswerSubmitComponent_36_7.ngDoCheck(this, this._el_36, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        this._vc_27.detectChangesInNestedViews(throwOnChange);
        this._vc_29.detectChangesInNestedViews(throwOnChange);
        this._vc_36.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_16_3.checkHost(this, this, this._el_16, throwOnChange);
        this._RouterLinkWithHref_20_3.checkHost(this, this, this._el_20, throwOnChange);
        this.compView_36.internalDetectChanges(throwOnChange);
    };
    View_QuestionFullscreenComponent0.prototype.destroyInternal = function () {
        this._vc_23.destroyNestedViews();
        this._vc_25.destroyNestedViews();
        this._vc_27.destroyNestedViews();
        this._vc_29.destroyNestedViews();
        this._vc_36.destroyNestedViews();
        this.compView_36.destroy();
        this._RouterLinkWithHref_16_3.ngOnDestroy();
        this._RouterLinkWithHref_20_3.ngOnDestroy();
    };
    View_QuestionFullscreenComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_QuestionFullscreenComponent1(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        if ((nodeIndex == 25)) {
            return new View_QuestionFullscreenComponent2(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        if ((nodeIndex == 27)) {
            return new View_QuestionFullscreenComponent3(this.viewUtils, this, 27, this._anchor_27, this._vc_27);
        }
        if ((nodeIndex == 29)) {
            return new View_QuestionFullscreenComponent4(this.viewUtils, this, 29, this._anchor_29, this._vc_29);
        }
        return null;
    };
    View_QuestionFullscreenComponent0.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.hideMenu() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_QuestionFullscreenComponent0.prototype.handleEvent_16 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_16_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_QuestionFullscreenComponent0.prototype.handleEvent_20 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_20_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_QuestionFullscreenComponent0;
}(import1.AppView));
export { View_QuestionFullscreenComponent0 };
var View_QuestionFullscreenComponent1 = (function (_super) {
    __extends(View_QuestionFullscreenComponent1, _super);
    function View_QuestionFullscreenComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionFullscreenComponent1, renderType_QuestionFullscreenComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionFullscreenComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, ' Perfil', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_1, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_1));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), [disposable_0]);
        return null;
    };
    View_QuestionFullscreenComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_QuestionFullscreenComponent1.prototype.handleEvent_1 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.gotoProfile() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_QuestionFullscreenComponent1;
}(import1.AppView));
var View_QuestionFullscreenComponent2 = (function (_super) {
    __extends(View_QuestionFullscreenComponent2, _super);
    function View_QuestionFullscreenComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionFullscreenComponent2, renderType_QuestionFullscreenComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionFullscreenComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signout'), null);
        this._text_2 = this.renderer.createText(this._el_1, ' Cerrar sesión ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_QuestionFullscreenComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionFullscreenComponent2;
}(import1.AppView));
var View_QuestionFullscreenComponent3 = (function (_super) {
    __extends(View_QuestionFullscreenComponent3, _super);
    function View_QuestionFullscreenComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionFullscreenComponent3, renderType_QuestionFullscreenComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionFullscreenComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_2 = this.renderer.createText(this._el_1, 'Iniciar sesión', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_QuestionFullscreenComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionFullscreenComponent3;
}(import1.AppView));
var View_QuestionFullscreenComponent4 = (function (_super) {
    __extends(View_QuestionFullscreenComponent4, _super);
    function View_QuestionFullscreenComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_QuestionFullscreenComponent4, renderType_QuestionFullscreenComponent, import6.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_QuestionFullscreenComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', '/signin'), null);
        this._text_2 = this.renderer.createText(this._el_1, 'Regístrate ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._text_2
        ]), null);
        return null;
    };
    View_QuestionFullscreenComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_QuestionFullscreenComponent4;
}(import1.AppView));
